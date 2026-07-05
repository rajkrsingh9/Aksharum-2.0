/* ── GSAP CDN fallback ──
   If the GSAP CDN fails to load (offline / blocked / flaky mobile network),
   stub the animation API so the rest of this file — nav drawer, theme
   toggle — still runs. Content simply appears without animations. */
if (!window.gsap) {
  (function () {
    var chain = {};
    ['to', 'from', 'fromTo', 'set', 'play', 'pause', 'kill'].forEach(function (m) {
      chain[m] = function () { return chain; };
    });
    window.gsap = {
      registerPlugin: function () {},
      timeline: function () { return chain; },
      to: function () { return chain; },
      from: function () { return chain; },
      fromTo: function () { return chain; },
      set: function () { return chain; }
    };
    window.ScrollTrigger = { create: function () {}, refresh: function () {} };
  })();
}

gsap.registerPlugin(ScrollTrigger);

/* ═════════════ NAV SCROLL + DRAWER ═════════════ */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', scrollY > 30);
}, { passive: true });

/* CLEAN MOBILE DRAWER NAV */
const navToggle = document.getElementById('navToggle');
const navOverlay = document.getElementById('navOverlay');
const mobileDrawer = document.getElementById('mobileDrawer');
const drawerClose = document.getElementById('drawerClose');

function closeMobileNav() {
  nav?.classList.remove('menu-open');
  document.body.classList.remove('nav-lock');

  navToggle?.setAttribute('aria-expanded', 'false');
  navToggle?.setAttribute('aria-label', 'Open menu');
  mobileDrawer?.setAttribute('aria-hidden', 'true');
}

function openMobileNav() {
  nav?.classList.add('menu-open');
  document.body.classList.add('nav-lock');

  navToggle?.setAttribute('aria-expanded', 'true');
  navToggle?.setAttribute('aria-label', 'Close menu');
  mobileDrawer?.setAttribute('aria-hidden', 'false');
}

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.contains('menu-open') ? closeMobileNav() : openMobileNav();
  });

  drawerClose?.addEventListener('click', closeMobileNav);
  navOverlay?.addEventListener('click', closeMobileNav);

  document.querySelectorAll('.drawer-links a, .drawer-demo, .drawer-logo').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMobileNav();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileNav();
  });
}

/* ═══════════════════════════════════════════════
   REST OF YOUR career.js BELOW — keep all of it
   (hero timeline, scroll triggers, 3d tilts, etc)
   ═══════════════════════════════════════════════ */

/* ═════════════ HERO ENTRANCE ═════════════ */

const htl = gsap.timeline({ delay:.1 });

htl
.fromTo(
  '#crEy',
  {
    opacity:0,
    y:14
  },
  {
    opacity:1,
    y:0,
    duration:.65,
    ease:'power3.out'
  }
)

.fromTo(
  '#crH1',
  {
    opacity:0,
    y:36
  },
  {
    opacity:1,
    y:0,
    duration:1,
    ease:'power3.out'
  },
  '-=.4'
)

.fromTo(
  '#crSub',
  {
    opacity:0,
    y:24
  },
  {
    opacity:1,
    y:0,
    duration:.8,
    ease:'power3.out'
  },
  '-=.6'
)

.fromTo(
  '#crBtns',
  {
    opacity:0,
    y:16
  },
  {
    opacity:1,
    y:0,
    duration:.65,
    ease:'power3.out'
  },
  '-=.5'
)

.fromTo(
  '#crPerks',
  {
    opacity:0,
    y:12
  },
  {
    opacity:1,
    y:0,
    duration:.6,
    ease:'power3.out'
  },
  '-=.4'
)

.fromTo(
  '#crHeroRight',
  {
    opacity:0,
    x:48,
    scale:.94
  },
  {
    opacity:1,
    x:0,
    scale:1,
    duration:1.1,
    ease:'back.out(1.2)'
  },
  '-=.9'
);

/* ═════════════ WHY SECTION ═════════════ */

gsap.fromTo(
  '#crWhyHd',
  {
    opacity:0,
    y:28
  },
  {
    opacity:1,
    y:0,
    duration:.9,
    ease:'power3.out',

    scrollTrigger:{
      trigger:'#crWhy',
      start:'top 78%',
      once:true
    }
  }
);

gsap.fromTo(
  '.cr-why-card',
  {
    opacity:0,
    y:40,
    scale:.96
  },
  {
    opacity:1,
    y:0,
    scale:1,
    stagger:.1,
    duration:.8,
    ease:'power3.out',

    scrollTrigger:{
      trigger:'.cr-why-grid',
      start:'top 82%',
      once:true
    }
  }
);

/* ═════════════ ROLES SECTION ═════════════ */

gsap.fromTo(
  '#crRolesHd',
  {
    opacity:0,
    y:28
  },
  {
    opacity:1,
    y:0,
    duration:.9,
    ease:'power3.out',

    scrollTrigger:{
      trigger:'#crRoles',
      start:'top 78%',
      once:true
    }
  }
);

gsap.fromTo(
  '.cr-role-row',
  {
    opacity:0,
    x:-32
  },
  {
    opacity:1,
    x:0,
    stagger:.1,
    duration:.75,
    ease:'power3.out',

    scrollTrigger:{
      trigger:'.cr-roles-grid',
      start:'top 82%',
      once:true
    }
  }
);

/* ═════════════ VALUES SECTION ═════════════ */

gsap.fromTo(
  '.cr-val',
  {
    opacity:0,
    y:32,
    scale:.96
  },
  {
    opacity:1,
    y:0,
    scale:1,

    stagger:.1,
    duration:.75,
    ease:'power3.out',

    scrollTrigger:{
      trigger:'.cr-vals-grid',
      start:'top 82%',
      once:true
    }
  }
);

/* ═════════════ FORM SECTION ═════════════ */

gsap.fromTo(
  '#crFormHd',
  {
    opacity:0,
    y:24
  },
  {
    opacity:1,
    y:0,
    duration:.9,
    ease:'power3.out',

    scrollTrigger:{
      trigger:'#crFormSec',
      start:'top 78%',
      once:true
    }
  }
);

gsap.fromTo(
  '#crFormWrap',
  {
    opacity:0,
    y:40,
    scale:.98
  },
  {
    opacity:1,
    y:0,
    scale:1,
    duration:1,
    ease:'power3.out',

    scrollTrigger:{
      trigger:'#crFormSec',
      start:'top 75%',
      once:true
    }
  }
);

/* ═════════════ MAGNETIC BUTTON EFFECT ═════════════ */

document.querySelectorAll('.cr-btn-pri,.n-demo').forEach(btn=>{

  btn.addEventListener('mousemove',e=>{

    const r = btn.getBoundingClientRect();

    const dx = (e.clientX - r.left - r.width/2) * .18;
    const dy = (e.clientY - r.top - r.height/2) * .18;

    gsap.to(btn,{
      x:dx,
      y:dy,
      duration:.3,
      ease:'power2.out'
    });

  });

  btn.addEventListener('mouseleave',()=>{

    gsap.to(btn,{
      x:0,
      y:0,
      duration:.55,
      ease:'elastic.out(1,.5)'
    });

  });

});

/* ═════════════ INPUT FOCUS EFFECT ═════════════ */

document.querySelectorAll('.cr-fi').forEach(el=>{

  el.addEventListener('focus',()=>{

    gsap.to(el,{
      scale:1.007,
      duration:.2
    });

  });

  el.addEventListener('blur',()=>{

    gsap.to(el,{
      scale:1,
      duration:.2
    });

  });

});

/* ═════════════ FORM SUBMIT ═════════════ */

const form = document.getElementById('crForm');

if(form){

  form.addEventListener('submit',e=>{

    e.preventDefault();

    const btn = document.getElementById('crSubmit');

    if(btn){

      btn.innerHTML = 'Sending...';
      btn.disabled = true;
      btn.style.opacity = '.65';

    }

    setTimeout(()=>{

      const formContent = document.getElementById('crFormContent');

      if(formContent){

        gsap.to(formContent,{

          opacity:0,
          y:-14,
          duration:.3,

          onComplete:()=>{

            formContent.style.display = 'none';

            const success = document.getElementById('crSuccess');

            if(success){

              success.classList.add('on');

              gsap.fromTo(
                success,
                {
                  opacity:0,
                  scale:.9
                },
                {
                  opacity:1,
                  scale:1,
                  duration:.55,
                  ease:'back.out(1.5)'
                }
              );

            }

          }

        });

      }

    },1400);

  });

}

/* ═════════════ 3D CARD TILT ═════════════ */

document.querySelectorAll('.cr-why-card,.cr-val,.cr-role-row').forEach(card=>{

  card.addEventListener('mousemove',e=>{

    const r = card.getBoundingClientRect();

    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;

    gsap.to(card,{
      rotateX:-y * 8,
      rotateY:x * 10,
      duration:.22,
      ease:'power2.out'
    });

  });

  card.addEventListener('mouseleave',()=>{

    gsap.to(card,{
      rotateX:0,
      rotateY:0,
      duration:.6,
      ease:'elastic.out(1,.5)'
    });

  });

});



/* ================================================= */
/* LIGHT / DARK MODE TOGGLE */
/* ================================================= */

(function () {
  const root = document.documentElement;

  function getCurrentTheme() {
    return root.getAttribute("data-theme") || "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("aksharum-theme", theme);

    const isDark = theme === "dark";
    const label = isDark ? "Switch to light mode" : "Switch to dark mode";

    document.querySelectorAll("#themeToggle, #drawerThemeToggle").forEach((btn) => {
      btn.setAttribute("aria-label", label);
    });

    const drawerText = document.querySelector(".drawer-theme-text");
    if (drawerText) {
      drawerText.textContent = isDark ? "Light Mode" : "Dark Mode";
    }
  }

  function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(getCurrentTheme());

    const desktopToggle = document.getElementById("themeToggle");
    const drawerToggle = document.getElementById("drawerThemeToggle");

    desktopToggle?.addEventListener("click", toggleTheme);
    drawerToggle?.addEventListener("click", toggleTheme);
  });
})();