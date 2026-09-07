/* ============================================================
   Madhavi Ingale — portfolio scripts
   Plain JavaScript. No frameworks, no build step.
   ============================================================ */

/* ---------- 1. Fill in links from MY_LINKS (set in index.html) ---------- */
document.querySelectorAll('[data-link]').forEach(function (el) {
  var key = el.getAttribute('data-link');
  if (key === 'email') {
    el.setAttribute('href', 'mailto:' + MY_LINKS.email);
  } else if (MY_LINKS[key]) {
    el.setAttribute('href', MY_LINKS[key]);
  }
});

/* ---------- 2. Dark / light mode ---------- */
var root = document.documentElement;
var themeBtn = document.getElementById('themeToggle');
var saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) { /* file:// can block storage */ }
if (saved) {
  root.setAttribute('data-theme', saved);
} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.setAttribute('data-theme', 'dark');
}
themeBtn.addEventListener('click', function () {
  var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

/* ---------- 3. Mobile menu ---------- */
var menuBtn = document.getElementById('menuBtn');
var navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', function () {
  var open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
navLinks.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

/* ---------- 4. Navbar shadow + active link + back-to-top ---------- */
var nav = document.getElementById('nav');
var toTop = document.getElementById('toTop');
var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
var navAnchors = Array.prototype.slice.call(navLinks.querySelectorAll('a'));

function onScroll() {
  var y = window.scrollY;
  nav.classList.toggle('scrolled', y > 8);
  toTop.classList.toggle('show', y > 600);

  var current = '';
  sections.forEach(function (s) {
    if (y >= s.offsetTop - 140) { current = s.id; }
  });
  navAnchors.forEach(function (a) {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

toTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---------- 5. Scroll reveal ---------- */
var revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(function (el) { io.observe(el); });
} else {
  revealEls.forEach(function (el) { el.classList.add('in'); });
}

/* ---------- 6. Prioritization calculator ---------- */
var pUser = document.getElementById('pUser');
var pBiz = document.getElementById('pBiz');
var pImp = document.getElementById('pImp');
var pEff = document.getElementById('pEff');
var oUser = document.getElementById('oUser');
var oBiz = document.getElementById('oBiz');
var oImp = document.getElementById('oImp');
var oEff = document.getElementById('oEff');
var scoreEl = document.getElementById('prioScore');
var verdictEl = document.getElementById('prioVerdict');

function updatePrio() {
  var u = Number(pUser.value), b = Number(pBiz.value);
  var i = Number(pImp.value), e = Number(pEff.value);
  oUser.textContent = u; oBiz.textContent = b;
  oImp.textContent = i; oEff.textContent = e;

  var score = (u + b + i) / e;
  scoreEl.textContent = score.toFixed(1);

  var verdict;
  if (score >= 5) { verdict = 'Build it'; }
  else if (score >= 3) { verdict = 'Worth planning'; }
  else if (score >= 1.8) { verdict = 'Park it for now'; }
  else { verdict = 'Not worth the effort'; }
  verdictEl.textContent = verdict;
}
[pUser, pBiz, pImp, pEff].forEach(function (el) {
  el.addEventListener('input', updatePrio);
});
updatePrio();

/* ---------- 7. Idea to product stepper ----------
   To edit a stage, change the text below. */
var STAGES = [
  { name: 'Idea',              text: 'Someone spots a gap. At this point it is a hunch, not a plan, and it should be written down in one sentence so it can be argued with.' },
  { name: 'Market research',   text: 'Is this problem real, is it big enough, and who is already solving it? This is where an idea either survives or gets dropped cheaply.' },
  { name: 'Customer discovery',text: 'Talk to the people who live with the problem. What they do matters more than what they say they would do.' },
  { name: 'PRD',               text: 'Write the problem, the users, the scope, the constraints and what is explicitly out of scope. If it is not written down, it is not agreed.' },
  { name: 'User stories',      text: 'Break the requirement into pieces an engineer can pick up, each with acceptance criteria that make "done" unambiguous.' },
  { name: 'Design',            text: 'Work with design on the flow and the edge cases. Most of the argument here is about what to leave out.' },
  { name: 'Development',       text: 'Stay available through the sprint. Most delays come from a question nobody asked early enough.' },
  { name: 'Testing',           text: 'Check the build against the acceptance criteria, not against the demo. Validate the unhappy paths too.' },
  { name: 'Launch',            text: 'Ship it, and make sure support, sales and the people who will field the questions know what changed.' },
  { name: 'Metrics',           text: 'Compare the result against the success metric agreed in the PRD. Then decide honestly whether to iterate, hold or roll back.' }
];

var stageRow = document.getElementById('stageRow');
var stageDetail = document.getElementById('stageDetail');

STAGES.forEach(function (stage, index) {
  var btn = document.createElement('button');
  btn.className = 'stage-btn';
  btn.type = 'button';
  btn.textContent = stage.name;
  btn.setAttribute('role', 'tab');
  btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
  btn.addEventListener('click', function () { selectStage(index); });
  stageRow.appendChild(btn);
});

function selectStage(index) {
  var buttons = stageRow.querySelectorAll('.stage-btn');
  buttons.forEach(function (b, i) {
    b.setAttribute('aria-selected', i === index ? 'true' : 'false');
  });
  stageDetail.innerHTML = '';
  var h = document.createElement('h4');
  h.textContent = (index + 1) + '. ' + STAGES[index].name;
  var p = document.createElement('p');
  p.textContent = STAGES[index].text;
  stageDetail.appendChild(h);
  stageDetail.appendChild(p);
}
selectStage(0);
