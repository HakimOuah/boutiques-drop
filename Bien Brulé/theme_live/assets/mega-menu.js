class MegaMenu extends SimpleMegaMenu {
  constructor() {
    super();
    this.anchor = this.dataset.anchor;
    this.content = this.querySelector('.mega-menu__content');
    this.isAlreadyConnected = false; // Prevent infinite loop
  }

  connectedCallback() {
    if (this.isAlreadyConnected) return;

    // Wait for DOM to be fully ready before finding targets
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initMegaMenu());
    } else {
      // Use requestAnimationFrame to ensure other elements are rendered
      requestAnimationFrame(() => this.initMegaMenu());
    }
  }

  initMegaMenu() {
    if (this.isAlreadyConnected) return;
    this.isAlreadyConnected = true;

    // Try title-based match first (backward compatibility)
    this.targetDesktop = document.querySelector(`li[data-anchor="${this.anchor}"]`);

    // Fallback to handle-based match for multilingual support
    if (!this.targetDesktop) {
      this.targetDesktop = document.querySelector(`li[data-handle="${this.anchor}"]`);
    }

    // Mobile: try handle-based match first, then title-based fallback
    this.targetMobile = document.querySelector(
      `details[data-anchor="${this.anchor}"] .menu-drawer__inner-submenu .menu-drawer__menu`
    );

    // Fallback to title-based match for mobile
    if (!this.targetMobile) {
      this.targetMobile = document.querySelector(
        `details[data-title="${this.anchor}"] .menu-drawer__inner-submenu .menu-drawer__menu`
      );
    }

    if (!this.targetDesktop) {
      // No target found, keep mega-menu hidden
      return;
    }

    // Get the translated title from the target menu item
    const translatedTitle = this.targetDesktop.querySelector('.styled-link')?.textContent?.trim();
    if (translatedTitle) {
      // Update the mega-menu trigger to show the translated title
      const triggerLabel = this.querySelector('.styled-link');
      if (triggerLabel) {
        triggerLabel.textContent = translatedTitle;
      }
    }

    // Clone content for mobile before moving the element
    const contentClone = this.content.cloneNode(true);

    // Replace the menu item with the mega-menu element
    this.targetDesktop.firstChild.replaceWith(this);

    // Clone content to mobile drawer
    if (this.targetMobile) {
      this.targetMobile.replaceWith(contentClone);
    }

    // Call the connectedCallback of SimpleMegaMenu after DOM manipulation
    super.connectedCallback();

    this.classList.add('mega-menu--is-ready');
  }
}

customElements.define('mega-menu', MegaMenu);
