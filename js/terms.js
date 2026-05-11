/* nav */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 30), {passive:true});

/* hero entrance */
gsap.set(['.hero .crumb','.hero h1','.hero p'], {autoAlpha:0, y:20});
gsap.to('.hero .crumb', {autoAlpha:1, y:0, duration:.7,  ease:'power3.out', delay:.1});
gsap.to('.hero h1',     {autoAlpha:1, y:0, duration:.85, ease:'power3.out', delay:.25});
gsap.to('.hero p',      {autoAlpha:1, y:0, duration:.7,  ease:'power3.out', delay:.4});

/* scroll reveal */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('v'); io.unobserve(e.target); }});
}, {threshold:.08});
document.querySelectorAll('.sr').forEach(el => io.observe(el));

/* TOC active on scroll */
const allSections = document.querySelectorAll('.pp-section, .intro-box');
const tocLinks    = document.querySelectorAll('.toc-list a');
const tocIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      tocLinks.forEach(l => l.classList.remove('active'));
      const a = document.querySelector(`.toc-list a[href="#${e.target.id}"]`);
      if(a) a.classList.add('active');
    }
  });
}, {rootMargin:'-10% 0px -70% 0px'});
allSections.forEach(s => tocIO.observe(s));

/* TOC smooth scroll */
tocLinks.forEach(l => {
  l.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(l.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth'});
  });
});
