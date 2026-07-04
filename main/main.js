document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // simple contact form UX (no backend wired up)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('.form-submit button');
      var original = btn.textContent;
      btn.textContent = 'Message Sent';
      btn.disabled = true;
      form.reset();
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
      }, 2500);
    });
  }
});
