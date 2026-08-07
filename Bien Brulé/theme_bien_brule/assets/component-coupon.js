class Coupon extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener('click', () => {
      this.classList.add('active');
    });
  }
}

customElements.define('coupon-element', Coupon);
