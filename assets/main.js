// Menu mobile
const body = document.body;
const burger = document.querySelector('.burger');
if (burger) {
  burger.addEventListener('click', () => {
    const open = body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => body.classList.remove('menu-open')));
}

// Apparition au défilement
const io = 'IntersectionObserver' in window && new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

// Formulaire de contact : ouvre la messagerie avec le message pré-rempli
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = d.get('objet') || 'Demande depuis le site';
    const text = `${d.get('message')}\n\n${d.get('nom')} — ${d.get('email')}`;
    location.href = `mailto:espaceformephysique@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  });
}
