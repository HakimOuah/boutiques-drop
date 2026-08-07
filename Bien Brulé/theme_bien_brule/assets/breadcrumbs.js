(function() {
  function updateBreadcrumbFromReferrer() {
    const fallbackLink = document.querySelector('.breadcrumbs__link--fallback');
    if (!fallbackLink) return;

    // Check if user came from a collection page using document.referrer
    const referrer = document.referrer;
    if (!referrer) return;

    try {
      const referrerUrl = new URL(referrer);
      const pathname = referrerUrl.pathname;

      // Check if referrer is a collection page (but not /collections/all)
      if (!pathname.startsWith('/collections/')) return;
      if (pathname.includes('/products/')) return;

      const pathParts = pathname.split('/').filter(Boolean);
      if (pathParts.length < 2 || pathParts[0] !== 'collections') return;

      const handle = pathParts[1];
      if (handle === 'all') return;

      // Get the collection title from pre-rendered data
      const collectionsData = window.breadcrumbCollections || {};
      const title = collectionsData[handle];

      if (title) {
        fallbackLink.href = '/collections/' + handle;
        fallbackLink.textContent = title;
        fallbackLink.classList.remove('breadcrumbs__link--fallback');
      }
    } catch (e) {
      // Invalid URL or other error - keep fallback
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateBreadcrumbFromReferrer);
  } else {
    updateBreadcrumbFromReferrer();
  }
})();
