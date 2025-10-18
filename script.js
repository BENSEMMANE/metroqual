document.addEventListener('DOMContentLoaded', function() {
  // Lien actif
  const navLinks = document.querySelectorAll('nav a');
  const current = location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(a => {
    if (a.getAttribute('href') === current) {
      a.classList.add('active');
    }
  });

  // Validation simple du formulaire
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      let valid = true;
      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const message = form.querySelector('[name="message"]');

      if (!name.value.trim()) { alert("Nom requis"); valid = false; }
      if (!/^\S+@\S+\.\S+$/.test(email.value)) { alert("Email invalide"); valid = false; }
      if (!message.value.trim()) { alert("Message requis"); valid = false; }

      if (!valid) e.preventDefault();
    });
  }
});
