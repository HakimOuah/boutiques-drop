document.addEventListener('DOMContentLoaded', function () {
  const articleContent = document.querySelector('.article-template__content');
  const tableOfContents = document.getElementById('table-of-contents');
  const headings = articleContent.querySelectorAll('h2, h3, h4, h5, h6');
  const stickyHeader = document.querySelector('[data-sticky-type="always"]');

  headings.forEach((heading, index) => {
    const id = `heading-${index}`;
    heading.id = id;

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${id}`;
    a.textContent = heading.textContent;
    li.classList.add(`toc-${heading.tagName.toLowerCase()}`);

    a.addEventListener('click', function (e) {
      e.preventDefault();
      const headerHeight = stickyHeader
        ? parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10)
        : 0;
      const headingPosition = heading.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: headingPosition,
        behavior: 'smooth',
      });
    });

    li.appendChild(a);
    tableOfContents.appendChild(li);
  });
});
