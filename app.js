// small JS to:
// - set footer years
// - smooth scroll behavior for nav
// - theme toggle
// - small fade-in on load

(function(){
  document.querySelectorAll('#year, #year-2, #year-3, #year-4, #year-5').forEach(el => {
    if(el) el.textContent = new Date().getFullYear();
  });

  // smooth behaviour when clicking nav links to same page anchors
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', (e) => {
      // let default navigation occur between pages; only smooth scroll if same-page fragment
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth'});
      }
    });
  });

  // Theme toggle - toggles between dark and light by body class
  function toggleTheme(){
    document.body.classList.toggle('theme-light');
    // store preference in localStorage
    localStorage.setItem('royal-theme', document.body.classList.contains('theme-light') ? 'light' : 'dark');
  }

  document.querySelectorAll('#theme-toggle,#theme-toggle-2,#theme-toggle-3,#theme-toggle-4,#theme-toggle-5')
    .forEach(btn => btn?.addEventListener('click', toggleTheme));

  // restore theme preference
  const pref = localStorage.getItem('royal-theme');
  if(pref === 'light') document.body.classList.add('theme-light');

  // add small fade-in class to major blocks
  document.querySelectorAll('.hero, .cards-section, .section').forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.animationDelay = (i * 120) + 'ms';
  });

  // simple demo for reservation form success
  const form = document.getElementById('reservation-form');
  if(form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Demo reservation submitted — this is a sample only.');
    form.reset();
  });
})();