class LoadingScreen {
  constructor() {
    this.element = document.getElementById('loading-screen');
    if (!this.element || !window.loadingScreenSettings?.enabled) return;

    this.settings = window.loadingScreenSettings;
    this.startTime = Date.now();
    this.isFirstVisit = this.checkFirstVisit();


    if (this.settings.showOnlyFirstVisit && !this.isFirstVisit) {
      this.hide(true);
      return;
    }

    this.init();
  }

  init() {
    this.preloadImage();
    this.hideOnLoad();
  }

  preloadImage() {
    const image = this.element.querySelector('.loading-screen__image');
    if (image) {
      if (image.complete && image.naturalHeight !== 0) {
        // Image is already loaded from cache
        image.style.transition = 'none';
        image.style.opacity = '1';
        image.classList.add('loading-screen__image--loaded');
      } else {
        // Image needs to load
        image.style.opacity = '0';
        image.addEventListener('load', () => {
          requestAnimationFrame(() => {
            image.style.transition = 'opacity 0.3s ease-out';
            image.classList.add('loading-screen__image--loaded');
          });
        });
      }
    }
  }

  checkFirstVisit() {
    const visited = sessionStorage.getItem('loading-screen-visited');
    if (!visited) {
      sessionStorage.setItem('loading-screen-visited', 'true');
      return true;
    }
    return false;
  }

  hideOnLoad() {
    const hideLoader = () => {
      const elapsedTime = Date.now() - this.startTime;
      const remainingTime = Math.max(0, this.settings.minDuration - elapsedTime);
      setTimeout(() => {
        this.hide();
      }, remainingTime);
    };


    // Always wait for window load to ensure all resources are loaded
    if (document.readyState === 'complete') {
      // Page is already fully loaded
      hideLoader();
    } else {
      // Wait for the page to fully load
      window.addEventListener('load', hideLoader);
      
      // Also add a fallback timeout in case load event doesn't fire
      setTimeout(() => {
        if (this.element && this.element.classList.contains('loading-screen--active')) {
          this.hide();
        }
      }, 5000); // Hide after 5 seconds max
    }
  }

  show(callback) {
    if (!this.element) return;

    // Reset display in case it was hidden
    this.element.style.display = '';
    
    // Force reflow
    this.element.offsetHeight;
    
    this.element.classList.add('loading-screen--active');
    this.element.setAttribute('aria-hidden', 'false');

    if (callback) {
      setTimeout(callback, 100);
    }
  }

  hide(immediate = false) {
    if (!this.element) return;

    const duration = immediate ? 0 : this.settings.fadeOutDuration;

    if (duration === 0) {
      this.element.classList.remove('loading-screen--active');
      this.element.setAttribute('aria-hidden', 'true');
      this.element.style.display = 'none';
    } else {
      // Remove the active class to trigger the CSS transition
      this.element.classList.remove('loading-screen--active');
      
      // Clean up after transition completes
      setTimeout(() => {
        this.element.setAttribute('aria-hidden', 'true');
        this.element.style.display = 'none';
      }, duration);
    }
  }
}

// Initialize immediately if DOM is already loaded, otherwise wait
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new LoadingScreen();
  });
} else {
  // DOM is already loaded
  new LoadingScreen();
}