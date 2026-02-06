document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    const link = item.dataset.link;

    // animate clicked item
    item.classList.add('clicked');

    // fade out page
    document.body.classList.add('fade-out');

    setTimeout(() => {
      window.location.href = link;
    }, 800); // matches fadeOut animation
  });
});
