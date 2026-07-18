document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('nav-toggle');
  var header = document.querySelector('.header');
  if (!btn || !header) return;

  btn.addEventListener('click', function () {
    var isOpen = header.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});
