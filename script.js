/*
 * script.js
 *
 * This small script adds smooth scrolling behaviour to navigation links.
 * When a user clicks on a link that references a section ID (e.g. "#about"),
 * the page will scroll smoothly to that section instead of jumping instantly.
 */

document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
