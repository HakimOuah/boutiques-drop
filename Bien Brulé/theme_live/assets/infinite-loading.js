/**
 * Infinite Loading Component
 * Handles three pagination modes: pagination (default), load_more button, and infinite_scroll (automatic)
 */

if (!customElements.get('infinite-loading')) {
  class InfiniteLoading extends HTMLElement {
    constructor() {
      super();

      this.mode = this.dataset.mode || 'pagination';
      this.sectionId = this.dataset.sectionId;
      this.currentPage = parseInt(this.dataset.currentPage) || 1;
      this.totalPages = parseInt(this.dataset.totalPages) || 1;
      this.columnsDesktop = parseInt(this.dataset.columnsDesktop) || 4;
      this.columnsMobile = parseInt(this.dataset.columnsMobile) || 2;
      this.isLoading = false;
      this.hasMoreProducts = this.currentPage < this.totalPages;

      this.productGrid = this.querySelector('#product-grid');
      this.loadMoreButton = null;
      this.observer = null;
      this.sentinel = null;
      this.loadingIndicator = null;

      // Bind methods
      this.loadNextPage = this.loadNextPage.bind(this);
      this.reset = this.reset.bind(this);
      this.handleIntersection = this.handleIntersection.bind(this);
    }

    connectedCallback() {
      if (this.mode === 'pagination') {
        return; // Do nothing, use default pagination
      }

      this.createLoadingIndicator();

      if (this.mode === 'load_more') {
        this.setupLoadMoreButton();
      } else if (this.mode === 'infinite_scroll') {
        this.setupInfiniteScroll();
      }

      // Watch for when facets replaces the ProductGridContainer content
      this.setupFacetsIntegration();
    }

    disconnectedCallback() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      if (this.sentinel) {
        this.sentinel = null;
      }
    }

    setupFacetsIntegration() {
      // When facets.js updates filters/sorting, it replaces ProductGridContainer's innerHTML
      // This naturally destroys this element and creates a new one from the server response
      // The new element starts fresh at page 1, which is the correct behavior
      // No additional integration needed - the DOM replacement is the reset mechanism
    }

    createLoadingIndicator() {
      this.loadingIndicator = document.createElement('div');
      this.loadingIndicator.className = 'infinite-loading__indicator';
      this.loadingIndicator.innerHTML = `
        <div class="loading-overlay__spinner">
          <svg aria-hidden="true" focusable="false" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
          </svg>
        </div>
        <span class="infinite-loading__text">${this.dataset.loadingText || 'Loading...'}</span>
      `;
      this.loadingIndicator.style.display = 'none';
      this.appendChild(this.loadingIndicator);
    }

    setupLoadMoreButton() {
      if (!this.hasMoreProducts) return;

      this.loadMoreButton = document.createElement('button');
      this.loadMoreButton.type = 'button'; // Explicitly set type to prevent form submission
      this.loadMoreButton.className = 'button infinite-loading__button';
      this.loadMoreButton.textContent = this.dataset.loadMoreText || 'Load More';
      this.loadMoreButton.addEventListener('click', this.loadNextPage);

      this.appendChild(this.loadMoreButton);
    }

    setupInfiniteScroll() {
      if (!this.hasMoreProducts) return;

      // Create a sentinel element at the bottom
      this.sentinel = document.createElement('div');
      this.sentinel.className = 'infinite-loading__sentinel';
      this.sentinel.setAttribute('data-infinite-sentinel', 'true');
      // Add a non-breaking space to prevent "empty div" CSS rules from hiding it
      this.sentinel.innerHTML = '&nbsp;';
      this.appendChild(this.sentinel);

      // Use requestAnimationFrame to ensure sentinel is in DOM before observing
      requestAnimationFrame(() => {
        const bounds = this.sentinel.getBoundingClientRect();
        console.log('Sentinel bounds:', bounds);

        // Set up Intersection Observer with proper binding
        const options = {
          root: null,
          rootMargin: '400px', // Start loading 400px before reaching the sentinel
          threshold: 0
        };

        this.observer = new IntersectionObserver(this.handleIntersection, options);
        this.observer.observe(this.sentinel);
      });
    }

    handleIntersection(entries) {
      entries.forEach(entry => {
        console.log('Intersection event:', {
          isIntersecting: entry.isIntersecting,
          top: entry.boundingClientRect.top,
          isLoading: this.isLoading,
          hasMoreProducts: this.hasMoreProducts
        });

        if (entry.isIntersecting && !this.isLoading && this.hasMoreProducts) {
          console.log('✅ Loading next page...');
          this.loadNextPage();
        }
      });
    }

    getProductsPerBatch() {
      // Calculate based on viewport: 3 rows worth of products
      const isMobile = window.innerWidth < 750;
      const columns = isMobile ? this.columnsMobile : this.columnsDesktop;
      return columns * 3;
    }

    async loadNextPage(event) {
      // Prevent any default action (e.g., form submission, navigation)
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (this.isLoading || !this.hasMoreProducts) return;

      this.isLoading = true;
      this.showLoading();

      try {
        const nextPage = this.currentPage + 1;

        // Build URL for browser history (without section_id)
        const browserUrl = new URL(window.location.href);
        browserUrl.searchParams.set('page', nextPage);

        // Build URL for AJAX fetch (with section_id)
        const fetchUrl = new URL(window.location.href);
        fetchUrl.searchParams.set('page', nextPage);
        fetchUrl.searchParams.set('section_id', this.sectionId);

        const response = await fetch(`${window.location.pathname}?${fetchUrl.searchParams.toString()}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extract product grid items from the response
        const newProductGrid = doc.querySelector('#product-grid');

        if (newProductGrid && newProductGrid.children.length > 0) {
          this.appendProducts(newProductGrid);
          this.currentPage = nextPage;

          // Update URL without reloading (don't include section_id in browser URL)
          window.history.pushState({ page: nextPage }, '', browserUrl.toString());

          // Check if there are more products
          if (this.currentPage >= this.totalPages) {
            this.hasMoreProducts = false;
            this.showNoMoreProducts();
          }
        } else {
          this.hasMoreProducts = false;
          this.showNoMoreProducts();
        }
      } catch (error) {
        console.error('Error loading more products:', error);
        this.showError();
      } finally {
        this.isLoading = false;
        this.hideLoading();
      }
    }

    appendProducts(newProductGrid) {
      const newItems = Array.from(newProductGrid.children);
      const newCardWrappers = [];

      newItems.forEach(item => {
        // Add classes for animations
        item.classList.add('infinite-loaded');
        const cardWrapper = item.querySelector('.card-wrapper');
        if (cardWrapper) {
          cardWrapper.classList.add('sr-animate');
          newCardWrappers.push(cardWrapper);
        }
        this.productGrid.appendChild(item);
      });

      // Initialize ScrollReveal ONLY for the newly added products
      if (typeof sr !== 'undefined' && newCardWrappers.length > 0) {
        // Reveal only the new product cards with staggered interval
        sr.reveal(newCardWrappers, {
          interval: 100,
          reset: false  // Don't re-animate on scroll
        });
      }

      // Trigger custom event for other scripts
      this.dispatchEvent(new CustomEvent('infinite-loading:products-loaded', {
        bubbles: true,
        detail: { count: newItems.length, page: this.currentPage }
      }));
    }

    showLoading() {
      if (this.loadingIndicator) {
        this.loadingIndicator.style.display = 'flex';
      }
      if (this.loadMoreButton) {
        this.loadMoreButton.disabled = true;
        this.loadMoreButton.classList.add('loading');
      }
    }

    hideLoading() {
      if (this.loadingIndicator) {
        this.loadingIndicator.style.display = 'none';
      }
      if (this.loadMoreButton) {
        this.loadMoreButton.disabled = false;
        this.loadMoreButton.classList.remove('loading');
      }
    }

    showNoMoreProducts() {
      if (this.loadMoreButton) {
        this.loadMoreButton.remove();
      }
      if (this.observer) {
        this.observer.disconnect();
      }

      // Don't show any message - just stop loading
    }

    showError() {
      if (this.loadMoreButton) {
        this.loadMoreButton.textContent = this.dataset.errorText || 'Error loading products. Try again.';
        setTimeout(() => {
          this.loadMoreButton.textContent = this.dataset.loadMoreText || 'Load More';
        }, 3000);
      }
    }

    reset() {
      // Reset to initial state when filters/sorting change
      this.currentPage = 1;
      this.hasMoreProducts = this.currentPage < this.totalPages;
      this.isLoading = false;

      // Clean up existing UI elements
      if (this.loadMoreButton) {
        this.loadMoreButton.remove();
        this.loadMoreButton = null;
      }
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      if (this.sentinel) {
        this.sentinel.remove();
        this.sentinel = null;
      }

      // Remove end message if it exists
      const endMessage = this.querySelector('.infinite-loading__end');
      if (endMessage) {
        endMessage.remove();
      }

      // Re-setup based on mode
      if (this.mode === 'load_more') {
        this.setupLoadMoreButton();
      } else if (this.mode === 'infinite_scroll') {
        this.setupInfiniteScroll();
      }
    }

    updateTotalPages(newTotal) {
      this.totalPages = newTotal;
      this.hasMoreProducts = this.currentPage < this.totalPages;
    }
  }

  customElements.define('infinite-loading', InfiniteLoading);
}
