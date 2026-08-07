class CollapsibleElement extends HTMLElement {
  connectedCallback() {
    const title = this.querySelector('.collapsible__title');
    const content = this.querySelector('.collapsible__content');

    // Opening animation (from 0 to scrollHeight)
    const animateOpen = () => {
      content.style.height = 'auto';
      const newScrollHeight = `${content.scrollHeight}px`;
      content.style.height = '0px';
      content.offsetHeight; // Force reflow
      requestAnimationFrame(() => {
        content.style.height = newScrollHeight;
      });
    };

    // Recalculate height without animation (for resize events)
    // This avoids flickering on Safari mobile where resize fires during scroll
    const recalculateHeight = () => {
      if (!title || !content) return;
      if (title.getAttribute('active') === 'true') {
        content.style.height = 'auto';
        const newScrollHeight = `${content.scrollHeight}px`;
        content.style.height = newScrollHeight;
      }
    };

    // Initialize
    if (title && title.getAttribute('active') === 'true') {
      recalculateHeight();
    } else {
      title?.setAttribute('active', 'false');
    }

    // Click handler
    title?.addEventListener('click', function (e) {
      if (title.getAttribute('active') === 'true') {
        title.setAttribute('active', 'false');
        content.setAttribute('active', 'false');
        content.style.height = '0px';
        if (title.classList.contains('read-more-link')) title.innerHTML = title.dataset.readMore;
      } else {
        title.setAttribute('active', 'true');
        content.setAttribute('active', 'true');
        if (title.classList.contains('read-more-link')) title.innerHTML = title.dataset.readLess;
        animateOpen();
      }
    });

    // Debounced resize handler - prevents flickering on Safari mobile
    // where resize events fire rapidly during scroll due to address bar changes
    let resizeTimeout;
    this._resizeHandler = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(recalculateHeight, 150);
    };

    window.addEventListener('resize', this._resizeHandler);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this._resizeHandler);
  }
}

customElements.define('collapsible-element', CollapsibleElement);
