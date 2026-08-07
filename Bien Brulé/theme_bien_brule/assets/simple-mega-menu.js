class SimpleMegaMenu extends HTMLElement {
  constructor() {
    super();
    this.triggerElement = this.querySelector('.header__menu-item');
    this.menuContent = this.querySelector('.mega-menu__content');
    this.headerElement = document.querySelector('.header');

    this.menuHeight = null; // We'll store the menu height here

    // Binding 'this' to event handlers
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.triggerElement.addEventListener('click', this.toggleMenu.bind(this));
    document.addEventListener('click', this.checkClose.bind(this));

    this.triggerElement.addEventListener('mouseenter', this.openMenu.bind(this));
    window.addEventListener('mousemove', this.checkClose.bind(this));
    window.addEventListener('click', this.checkCloseClick.bind(this));
  }

  connectedCallback() {
    // Listen for a custom event on the window to close this menu
    window.addEventListener('menuOpened', this.handleAnotherMenuOpened.bind(this));
  }

  disconnectedCallback() {
    // Clean up event listeners when the element is removed
    window.removeEventListener('menuOpened', this.handleAnotherMenuOpened.bind(this));
  }

  handleAnotherMenuOpened(event) {
    // Close this menu unless it's the one dispatching the event
    if (event.detail !== this) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    const expanded = this.menuContent.getAttribute('aria-expanded') === 'true';

    if (expanded) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  checkClose(event) {
    if (
      !this.contains(event.target) &&
      this.menuContent.getAttribute('aria-expanded') === 'true' &&
      !this.triggerElement.contains(event.target) &&
      !this.menuContent.contains(event.target) &&
      !this.headerElement.contains(event.target)
    ) {
      this.closeMenu();
    }
  }

  checkCloseClick(event) {
    if (
      !this.contains(event.target) &&
      this.menuContent.getAttribute('aria-expanded') === 'true' &&
      !this.triggerElement.contains(event.target) &&
      !this.menuContent.contains(event.target)
    ) {
      this.closeMenu();
    }
  }

  openMenu() {
    if (this.classList.contains('mega-menu') && !this.classList.contains('mega-menu--is-ready')) return;
    if (!this.menuHeight) {
      this.menuContent.style.opacity = '0';
      this.menuContent.style.display = 'grid'; // Needed to measure height
      this.menuHeight = this.menuContent.offsetHeight; // Measure and store height
      this.menuContent.style.display = ''; // Reset to CSS value
    }

    this.menuContent.style.height = '0px';
    this.menuContent.style.opacity = '0';
    this.menuContent.setAttribute('aria-expanded', 'true');
    this.triggerElement.classList.add('expanded');

    this.menuContent.animate(
      [
        // keyframes
        { height: '0px', opacity: '0' },
        { height: `${this.menuHeight}px`, opacity: '1' },
      ],
      {
        // timing options
        duration: 100,
        fill: 'forwards',
      }
    );

    // Dispatch a custom event notifying that this menu has been opened
    const menuOpenedEvent = new CustomEvent('menuOpened', {
      detail: this,
      bubbles: true,
    });
    setTimeout(() => window.dispatchEvent(menuOpenedEvent));
  }

  closeMenu() {
    if (this.menuContent.style.height === '' || this.menuContent.style.height === '0') return; // Menu is already closed
    this.menuContent.animate(
      [
        // keyframes
        { height: `${this.menuHeight}px`, opacity: '1' },
        { height: '0px', opacity: '0' },
      ],
      {
        // timing options
        duration: 100,
        fill: 'forwards',
      }
    ).onfinish = () => {
      this.menuContent.style.height = '';
      this.menuContent.style.opacity = '';
      this.menuContent.setAttribute('aria-expanded', 'false');
      this.triggerElement.classList.remove('expanded');
    };
  }
}

customElements.define('simple-mega-menu', SimpleMegaMenu);
