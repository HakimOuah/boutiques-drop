class DropdownMenu extends HTMLElement {
  constructor() {
    super();
    this.triggerElement = this.querySelector('.header__menu-item');
    this.menuContent = this.querySelector('.dropdown__content');
    this.menuHeight = null; // We'll store the menu height here
    this.isChildren = this.classList.contains('dropdown__child');

    // Binding 'this' to event handlers
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.triggerElement.addEventListener('click', this.toggleMenu.bind(this));
    document.addEventListener('click', this.checkClose.bind(this));

    if (!this.isChildren) {
      this.triggerElement.addEventListener('mouseenter', this.openMenu.bind(this));
      window.addEventListener('mousemove', this.checkClose.bind(this));
    }
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
    if (event.detail !== this && !this.contains(event.detail)) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    const expanded = this.menuContent.getAttribute('aria-expanded') === 'true';

    if (expanded) this.closeMenu();
    else this.openMenu();
  }

  checkClose(event) {
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
    this.menuContent.style.display = 'block'; // Needed to measure height
    this.menuContent.style.setProperty('height', 'auto', 'important'); // Set height to auto to measure height
    this.menuHeight = this.menuContent.offsetHeight; // Measure and store height
    this.menuContent.style.display = ''; // Reset to CSS value

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
    ).onfinish = () => {
      this.menuContent.style.setProperty('height', 'auto', 'important');
    };

    // Dispatch a custom event notifying that this menu has been opened
    const menuOpenedEvent = new CustomEvent('menuOpened', {
      detail: this,
      bubbles: true,
    });
    setTimeout(() => window.dispatchEvent(menuOpenedEvent));
  }

  closeMenu() {
    this.menuHeight = this.menuContent.offsetHeight; // Measure and store height
    this.menuContent.style.setProperty('height', `${this.menuHeight}px`);
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

customElements.define('dropdown-menu', DropdownMenu);
