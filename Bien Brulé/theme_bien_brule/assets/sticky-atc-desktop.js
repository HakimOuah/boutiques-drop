/**
 * Sticky Add to Cart - Desktop
 * Custom element that shows/hides based on scroll position
 * Syncs with main product form for variant and quantity changes
 */

if (!customElements.get('sticky-atc-desktop')) {
  customElements.define(
    'sticky-atc-desktop',
    class StickyATCDesktop extends HTMLElement {
      constructor() {
        super();
        this.sectionId = this.dataset.sectionId;
        this.isVisible = false;
        this.scrollThreshold = 0;
        this.lastScrollY = 0;
        this.ticking = false;

        // Elements
        this.variantInput = this.querySelector('.sticky-atc-variant-id');
        this.variantTitle = this.querySelector('[data-sticky-variant-title]');
        this.priceContainer = this.querySelector('[data-sticky-price]');
        this.submitButton = this.querySelector('button[type="submit"]');
        this.quantityInput = this.querySelector('.quantity__input');

        // Bind methods
        this.onScroll = this.onScroll.bind(this);
        this.onVariantChange = this.onVariantChange.bind(this);
        
        console.log('[Sticky ATC Desktop] Constructor initialized', { sectionId: this.sectionId });
      }

      connectedCallback() {
        console.log('[Sticky ATC Desktop] Connected to DOM');
        
        // Find the product info section to determine scroll threshold
        this.calculateScrollThreshold();

        // Listen for scroll events with passive flag for performance
        window.addEventListener('scroll', this.onScroll, { passive: true });

        // Listen for variant changes from the main product form
        this.subscribeToVariantChanges();

        // Sync quantity with main form
        this.setupQuantitySync();

        // Initial check
        this.checkVisibility();

        // Recalculate on resize
        window.addEventListener('resize', () => {
          this.calculateScrollThreshold();
          this.checkVisibility();
        }, { passive: true });
        
        console.log('[Sticky ATC Desktop] Setup complete', {
          threshold: this.scrollThreshold,
          windowWidth: window.innerWidth
        });
      }

      disconnectedCallback() {
        window.removeEventListener('scroll', this.onScroll);

        if (this.variantChangeUnsubscribe) {
          this.variantChangeUnsubscribe();
        }
      }

      calculateScrollThreshold() {
        // Find the main product section
        const productSection = document.querySelector(`#MainProduct-${this.sectionId}`);
        console.log('[Sticky ATC Desktop] Looking for product section:', `#MainProduct-${this.sectionId}`, productSection);
        
        if (!productSection) {
          console.warn('[Sticky ATC Desktop] Product section not found, using default threshold');
          this.scrollThreshold = 300;
          return;
        }

        // Find the buy buttons or product form within the section
        const buyButtons = productSection.querySelector('.product-form__buttons');
        const productInfo = productSection.querySelector('.product__info-container');

        if (buyButtons) {
          // Get the bottom of the buy buttons section
          const rect = buyButtons.getBoundingClientRect();
          this.scrollThreshold = window.scrollY + rect.bottom + 50; // 50px buffer
          console.log('[Sticky ATC Desktop] Using buy buttons threshold:', this.scrollThreshold);
        } else if (productInfo) {
          // Fallback to product info container
          const rect = productInfo.getBoundingClientRect();
          this.scrollThreshold = window.scrollY + rect.bottom;
          console.log('[Sticky ATC Desktop] Using product info threshold:', this.scrollThreshold);
        } else {
          // Default fallback
          this.scrollThreshold = 300;
          console.log('[Sticky ATC Desktop] Using default threshold:', this.scrollThreshold);
        }
      }

      onScroll() {
        if (!this.ticking) {
          window.requestAnimationFrame(() => {
            this.checkVisibility();
            this.ticking = false;
          });
          this.ticking = true;
        }
      }

      checkVisibility() {
        const scrollY = window.scrollY;
        const shouldBeVisible = scrollY > this.scrollThreshold;

        if (shouldBeVisible !== this.isVisible) {
          this.isVisible = shouldBeVisible;
          this.classList.toggle('is-visible', this.isVisible);
          console.log('[Sticky ATC Desktop] Visibility changed:', { 
            isVisible: this.isVisible, 
            scrollY, 
            threshold: this.scrollThreshold 
          });
        }

        this.lastScrollY = scrollY;
      }

      subscribeToVariantChanges() {
        // Subscribe to the theme's variant change event
        if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
          this.variantChangeUnsubscribe = subscribe(PUB_SUB_EVENTS.variantChange, (event) => {
            // Only respond to changes from the same section
            if (event.data && event.data.sectionId === this.sectionId) {
              this.onVariantChange(event.data.variant);
            }
          });
        }

        // Also watch for changes to the main form's variant input
        const mainForm = document.querySelector(`#product-form-${this.sectionId}`);
        if (mainForm) {
          const mainVariantInput = mainForm.querySelector('input[name="id"]');
          if (mainVariantInput) {
            const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
                  const variantId = mainVariantInput.value;
                  this.updateVariantId(variantId);
                }
              });
            });

            observer.observe(mainVariantInput, { attributes: true });
          }
        }
      }

      onVariantChange(variant) {
        if (!variant) return;

        // Update variant ID
        if (this.variantInput) {
          this.variantInput.value = variant.id;
        }

        // Update variant title
        if (this.variantTitle && variant.title && variant.title !== 'Default Title') {
          this.variantTitle.textContent = variant.title;
          this.variantTitle.style.display = '';
        } else if (this.variantTitle) {
          this.variantTitle.style.display = 'none';
        }

        // Update price
        this.updatePrice(variant);

        // Update button state
        this.updateButtonState(variant);

        // Update quantity constraints
        this.updateQuantityConstraints(variant);
      }

      updateVariantId(variantId) {
        if (this.variantInput && variantId) {
          this.variantInput.value = variantId;
        }
      }

      updatePrice(variant) {
        if (!this.priceContainer) return;

        const price = variant.price;
        const compareAtPrice = variant.compare_at_price;

        // Format money using Shopify's money format
        const formatMoney = (cents) => {
          if (typeof Shopify !== 'undefined' && Shopify.formatMoney) {
            return Shopify.formatMoney(cents, window.theme?.moneyFormat || '${{amount}}');
          }
          // Fallback formatting
          return '$' + (cents / 100).toFixed(2);
        };

        let priceHTML = '';
        if (compareAtPrice && compareAtPrice > price) {
          priceHTML = `
            <span class="sticky-atc-desktop__price-sale">${formatMoney(price)}</span>
            <span class="sticky-atc-desktop__price-compare">${formatMoney(compareAtPrice)}</span>
          `;
        } else {
          priceHTML = `<span class="sticky-atc-desktop__price-regular">${formatMoney(price)}</span>`;
        }

        this.priceContainer.innerHTML = priceHTML;
      }

      updateButtonState(variant) {
        if (!this.submitButton) return;

        const buttonText = this.submitButton.querySelector('.sticky-atc-desktop__button-text');

        if (variant.available) {
          this.submitButton.disabled = false;
          if (buttonText) {
            buttonText.textContent = window.variantStrings?.addToCart || 'Add to cart';
          }
        } else {
          this.submitButton.disabled = true;
          if (buttonText) {
            buttonText.textContent = window.variantStrings?.soldOut || 'Sold out';
          }
        }
      }

      updateQuantityConstraints(variant) {
        if (!this.quantityInput) return;

        const qtyRule = variant.quantity_rule || {};
        const min = qtyRule.min || 1;
        const max = qtyRule.max || null;
        const step = qtyRule.increment || 1;

        this.quantityInput.min = min;
        this.quantityInput.step = step;
        this.quantityInput.dataset.min = min;

        if (max !== null) {
          this.quantityInput.max = max;
          this.quantityInput.dataset.max = max;
        } else {
          this.quantityInput.removeAttribute('max');
          delete this.quantityInput.dataset.max;
        }

        // Reset to min if current value is invalid
        if (parseInt(this.quantityInput.value) < min) {
          this.quantityInput.value = min;
        }
      }

      setupQuantitySync() {
        // Sync sticky quantity with main quantity selector
        const mainQuantityInput = document.querySelector(`#Quantity-${this.sectionId}`);

        if (mainQuantityInput && this.quantityInput) {
          // When main quantity changes, update sticky quantity
          mainQuantityInput.addEventListener('change', () => {
            this.quantityInput.value = mainQuantityInput.value;
          });

          // When sticky quantity changes, update main quantity
          this.quantityInput.addEventListener('change', () => {
            mainQuantityInput.value = this.quantityInput.value;
            // Trigger change event on main input
            mainQuantityInput.dispatchEvent(new Event('change', { bubbles: true }));
          });
        }
      }
    }
  );
}
