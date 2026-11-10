// Nav scroll state
const nav = document.getElementById('nav');
const onScroll = () => {
  if (window.scrollY > 40) nav.classList.add('is-scrolled');
  else nav.classList.remove('is-scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
menuOpen?.addEventListener('click', () => mobileMenu.classList.add('is-open'));
menuClose?.addEventListener('click', () => mobileMenu.classList.remove('is-open'));
mobileMenu?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileMenu.classList.remove('is-open'))
);

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  reveals.forEach(el => io.observe(el));
} else {
  reveals.forEach(el => el.classList.add('is-visible'));
}

// Contact form: opens a pre-filled email to the concierge inbox
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const f = contactForm.elements;
  const status = document.getElementById('contactStatus');
  let ok = true;
  [f.name, f.email].forEach(el => {
    const bad = !el.value.trim() || (el.type === 'email' && !el.checkValidity());
    el.classList.toggle('is-invalid', bad);
    if (bad) ok = false;
  });
  if (!ok) { status.textContent = 'Please add your name and a valid email.'; return; }
  const body = `Name: ${f.name.value.trim()}\nEmail: ${f.email.value.trim()}\nPhone: ${f.phone.value.trim() || 'n/a'}\n\n${f.message.value.trim()}`;
  window.location.href = 'mailto:concierge@elev8md.co?subject=' + encodeURIComponent('Elev8 Inquiry: Not sure where to begin') + '&body=' + encodeURIComponent(body);
  status.textContent = 'Thank you. Your email app should open with your message ready to send.';
});
