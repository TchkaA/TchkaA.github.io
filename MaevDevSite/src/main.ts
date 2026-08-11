import './style.css';

const navbar = document.getElementById('navbar');
const burgerButton = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileOverlay');

function updateNavbar(): void { navbar?.classList.toggle('is-scrolled', window.scrollY > 24); }
function closeMenu(): void { mobileMenu?.classList.remove('is-open'); burgerButton?.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }

burgerButton?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.toggle('is-open') ?? false;
    burgerButton.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
});
mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', updateNavbar, { passive: true });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
updateNavbar();

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('reveal--visible'); revealObserver.unobserve(entry.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));