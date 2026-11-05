(function () {
  const root = document.documentElement;
  root.classList.remove('no-js');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) root.classList.add('reduced');
  const page = document.body.dataset.page || 'home';

  const arrow = '<svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6"/></svg>';
  const chev = '<svg viewBox="0 0 12 12" fill="none"><path d="M2 4.5 6 8l4-3.5" stroke="currentColor" stroke-width="1.6"/></svg>';

  // Shared header
  const header = `
  <header class="nav" id="nav">
    <a class="brand" href="index.html" aria-label="Očesni kirurški center dr. Pfeifer">
      <img src="assets/img/logo.jpg" alt="OKC dr. Pfeifer">
      <span>Očesni kirurški center<b>dr. Pfeifer</b></span>
    </a>
    <ul class="menu">
      <li data-mega="posegi"><button type="button">Posegi ${chev}</button></li>
      <li data-mega="pregledi"><button type="button">Pregledi ${chev}</button></li>
      <li><a href="o-nas.html" class="${page === 'onas' ? 'on' : ''}">O nas</a></li>
      <li><a href="o-nas.html#zdravniki">Zdravniki</a></li>
      <li><a href="narocanje.html#cakalna" >Čakalna lista</a></li>
      <li><a href="narocanje.html" class="${page === 'narocanje' ? 'on' : ''}">Kontakt</a></li>
    </ul>
    <div class="nav__cta">
      <a class="nav__tel" href="tel:+38613207300">01 320 73 00</a>
      <a class="btn" href="narocanje.html">Naročite se</a>
      <button class="burger" type="button" aria-label="Meni"><i></i><i></i></button>
    </div>
  </header>
  <div class="mega" data-panel="posegi">
    <div><h4>Operativni posegi</h4><p>Dve sodobni operacijski dvorani, materiali najvišje kakovosti in kirurgi s potrjenimi izkušnjami.</p><a class="btn ghost" style="margin-top:24px" href="posegi.html">Vsi posegi ${arrow}</a></div>
    <ul>
      <li><a href="posegi.html" data-img="assets/img/reading.jpg">Operacija sive mrene</a></li>
      <li><a href="posegi.html#dioptrija" data-img="assets/img/laser.jpg">Excimer laserska korekcija dioptrije</a></li>
      <li><a href="posegi.html#dioptrija" data-img="assets/img/iol.jpg">Multifokalne leče IOL</a></li>
      <li><a href="posegi.html#dioptrija" data-img="assets/img/iol.jpg">ICL znotrajočesna leča Visian</a></li>
      <li><a href="posegi.html#dioptrija" data-img="assets/img/reading.jpg">Starostna presbiopija</a></li>
    </ul>
    <ul>
      <li><a href="posegi.html#ostalo" data-img="assets/img/slitlamp.jpg">Glavkomske operacije</a></li>
      <li><a href="posegi.html#ostalo" data-img="assets/img/oct.jpg">Keratokonus in UV-A cross-linking</a></li>
      <li><a href="posegi.html#ostalo" data-img="assets/img/eyelid.jpg">Estetske operacije, blefaroplastika</a></li>
      <li><a href="posegi.html#ostalo" data-img="assets/img/surgeon.jpg">Yag kapsulotomija</a></li>
      <li><a href="posegi.html#ostalo" data-img="assets/img/iol.jpg">Implantacija toričnih leč</a></li>
    </ul>
    <figure><img src="assets/img/reading.jpg" alt=""></figure>
  </div>
  <div class="mega" data-panel="pregledi">
    <div><h4>Specialistični pregledi</h4><p>Deset subspecialističnih ambulant in diagnostika, ki jo potrebujete pred vsako odločitvijo.</p><a class="btn ghost" style="margin-top:24px" href="index.html#pregledi">Vsi pregledi ${arrow}</a></div>
    <ul>
      <li><a href="index.html#pregledi" data-img="assets/img/slitlamp.jpg">Preventivni pregledi oči</a></li>
      <li><a href="index.html#pregledi" data-img="assets/img/laser.jpg">Preiskave pred Excimer laserjem</a></li>
      <li><a href="index.html#pregledi" data-img="assets/img/slitlamp.jpg">Glavkomski pregledi</a></li>
      <li><a href="index.html#pregledi" data-img="assets/img/oct.jpg">OCT in OCT angiografija</a></li>
      <li><a href="index.html#pregledi" data-img="assets/img/oct.jpg">Topografija roženice</a></li>
    </ul>
    <ul>
      <li><a href="index.html#pregledi" data-img="assets/img/child.jpg">Otroška okulistična ambulanta</a></li>
      <li><a href="index.html#pregledi" data-img="assets/img/tear.jpg">Ambulanta za suho oko</a></li>
      <li><a href="index.html#pregledi" data-img="assets/img/oct.jpg">Ambulanta za bolezni mrežnice</a></li>
      <li><a href="index.html#pregledi" data-img="assets/img/eyelid.jpg">Estetske operacije očesa</a></li>
      <li><a href="index.html#pregledi" data-img="assets/img/tear.jpg">Ultrazvok očesa</a></li>
    </ul>
    <figure><img src="assets/img/slitlamp.jpg" alt=""></figure>
  </div>
  <div class="scrim"></div>
  <nav class="drawer">
    <a href="posegi.html">Posegi</a>
    <a href="index.html#pregledi">Pregledi</a>
    <a href="o-nas.html">O nas</a>
    <a href="o-nas.html#zdravniki">Zdravniki</a>
    <a href="narocanje.html#cakalna">Čakalna lista</a>
    <a href="narocanje.html">Kontakt</a>
    <a class="btn" href="tel:+38613207300">Pokličite 01 320 73 00</a>
  </nav>`;

  const footer = `
  <footer class="foot">
    <div class="foot__top">
      <div>
        <h6>Očesni kirurški center dr. Pfeifer</h6>
        <p>Medicinski center Vila Urbana<br>Barvarska steza 4<br>1000 Ljubljana</p>
      </div>
      <div>
        <h6>Kontakt</h6>
        <ul>
          <li><a href="tel:+38613207300">01 320 73 00</a></li>
          <li><a href="mailto:info@okc-pfeifer.si">info@okc-pfeifer.si</a></li>
          <li><a href="tel:+38641207492">041 207 492, za operirance</a></li>
        </ul>
      </div>
      <div>
        <h6>Center</h6>
        <ul>
          <li><a href="posegi.html">Posegi</a></li>
          <li><a href="o-nas.html">O nas</a></li>
          <li><a href="o-nas.html#zdravniki">Zdravniki</a></li>
          <li><a href="narocanje.html#cakalna">Čakalna lista</a></li>
        </ul>
      </div>
      <div>
        <h6>Sledite nam</h6>
        <ul>
          <li><a href="https://www.facebook.com/okcpfeifer" target="_blank" rel="noopener">Facebook</a></li>
          <li><a href="https://www.instagram.com/okc.pfeifer/" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="https://www.linkedin.com/company/o%C4%8Desni-kirur%C5%A1ki-center-pfeifer/" target="_blank" rel="noopener">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div class="foot__big">dr. Pfeifer</div>
    <div class="foot__bar">
      <span>© ${new Date().getFullYear()} Očesni kirurški center dr. Pfeifer d.o.o.</span>
      <div class="langs"><a class="on" href="#">SL</a><a href="#">EN</a><a href="#">DE</a><a href="#">IT</a></div>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Mega menu
  const nav = document.getElementById('nav');
  const scrim = document.querySelector('.scrim');
  let openKey = null, closeT;
  function openMega(k) {
    clearTimeout(closeT);
    openKey = k;
    document.querySelectorAll('.mega').forEach(m => m.classList.toggle('show', m.dataset.panel === k));
    document.querySelectorAll('.menu li[data-mega]').forEach(li => li.classList.toggle('open', li.dataset.mega === k));
    scrim.classList.toggle('show', !!k);
  }
  function closeSoon() { closeT = setTimeout(() => openMega(null), 160); }
  document.querySelectorAll('.menu li[data-mega]').forEach(li => {
    li.addEventListener('mouseenter', () => openMega(li.dataset.mega));
    li.addEventListener('mouseleave', closeSoon);
    li.querySelector('button').addEventListener('click', () => openMega(openKey === li.dataset.mega ? null : li.dataset.mega));
  });
  document.querySelectorAll('.mega').forEach(m => {
    m.addEventListener('mouseenter', () => clearTimeout(closeT));
    m.addEventListener('mouseleave', closeSoon);
    const fig = m.querySelector('figure img');
    m.querySelectorAll('a[data-img]').forEach(a => a.addEventListener('mouseenter', () => {
      if (fig.getAttribute('src') === a.dataset.img) return;
      fig.style.opacity = 0;
      setTimeout(() => { fig.src = a.dataset.img; fig.style.opacity = 1; }, 180);
    }));
  });
  scrim.addEventListener('click', () => openMega(null));
  document.querySelector('.burger').addEventListener('click', () => root.classList.toggle('menu-open'));
  document.querySelectorAll('.drawer a').forEach(a => a.addEventListener('click', () => root.classList.remove('menu-open')));

  // Form (demo)
  document.querySelectorAll('form.form').forEach(f => f.addEventListener('submit', e => { e.preventDefault(); f.classList.add('sent'); f.reset(); }));

  // Treatments list
  const tl = document.querySelector('.tlist');
  const tview = document.querySelector('.tview');
  function setTreat(i) {
    if (!tl) return;
    tl.querySelectorAll('li').forEach((li, j) => li.classList.toggle('on', j === i));
    if (tview) {
      tview.querySelectorAll('img').forEach((im, j) => im.classList.toggle('on', j === i));
      const tag = tview.querySelector('.tview__tag');
      if (tag) tag.textContent = tl.querySelectorAll('li')[i].dataset.tag || '';
    }
  }
  if (tl) {
    tl.querySelectorAll('li').forEach((li, i) => li.addEventListener('mouseenter', () => setTreat(i)));
    setTreat(0);
  }

  // Doctors hover follows names (handled with CSS); nothing else needed.

  const hasGsap = window.gsap && window.ScrollTrigger;
  if (!hasGsap || reduced) {
    document.querySelectorAll('.rv').forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
    document.querySelectorAll('[data-count]').forEach(el => el.textContent = el.dataset.count);
    document.querySelectorAll('.manifesto .w').forEach(w => w.style.color = 'var(--ink)');
    const l = document.querySelector('.loader'); if (l) l.remove();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Smooth scroll
  let lenis;
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: -80 }); }
    }));
  }

  // Hide nav on scroll down
  let lastY = 0;
  ScrollTrigger.create({
    onUpdate(self) {
      const y = self.scroll();
      if (openKey || root.classList.contains('menu-open')) return;
      nav.classList.toggle('hide', y > lastY && y > 300);
      lastY = y;
    }
  });

  // Loader
  const loader = document.querySelector('.loader');
  const intro = gsap.timeline({ paused: true });
  if (loader) {
    const n = loader.querySelector('.loader__n');
    const o = { v: 0 };
    gsap.timeline()
      .to(o, { v: 100, duration: 1.1, ease: 'power2.inOut', onUpdate: () => n.textContent = Math.round(o.v) })
      .to(loader.querySelector('.loader__in'), { opacity: 0, y: -10, duration: .4, ease: 'power2.in' })
      .to(loader, { opacity: 0, duration: .45, onComplete: () => { loader.remove(); intro.play(); } });
  } else intro.play();

  // Hero: two halves part, iris expands to full screen
  const hero = document.querySelector('.hero');
  if (hero) {
    const media = hero.querySelector('.hero__media');
    const img = media.querySelector('img');
    const l = hero.querySelector('.hero__l'), r = hero.querySelector('.hero__r');
    const foot = hero.querySelector('.hero__foot'), cap = hero.querySelector('.hero__cap');
    const mobile = matchMedia('(max-width:900px)').matches;
    const lIn = l.querySelector('.in'), rIn = r.querySelector('.in');
    const fParts = foot.querySelectorAll('p, .scrollcue');
    gsap.set([lIn, rIn], { display: 'inline-block' });
    gsap.set([lIn, rIn, fParts], { opacity: 0 });
    gsap.set(media, { clipPath: 'inset(50% 0 50% 0)' });
    intro
      .to(media, { clipPath: 'inset(0% 0 0% 0)', duration: 1.1, ease: 'expo.out' })
      .fromTo(lIn, { opacity: 0, x: mobile ? 0 : 40 }, { opacity: 1, x: 0, duration: 1, ease: 'expo.out' }, '-=.8')
      .fromTo(rIn, { opacity: 0, x: mobile ? 0 : -40 }, { opacity: 1, x: 0, duration: 1, ease: 'expo.out' }, '<')
      .to(fParts, { opacity: 1, duration: .6 }, '-=.6');

    const tl = gsap.timeline({
      scrollTrigger: { trigger: hero, start: 'top top', end: '+=140%', scrub: .6, pin: true, anticipatePin: 1 }
    });
    tl.to(media, { width: '100vw', height: '100vh', borderRadius: 0, ease: 'power2.inOut' }, 0)
      .to(img, { scale: 1, ease: 'power2.inOut' }, 0)
      .to(l, { xPercent: mobile ? 0 : -60, opacity: 0, ease: 'power2.in' }, 0)
      .to(r, { xPercent: mobile ? 0 : 60, opacity: 0, ease: 'power2.in' }, 0)
      .to(foot, { opacity: 0, duration: .2 }, 0)
      .to(cap, { opacity: 1, y: 0, duration: .3 }, .7);
    gsap.set(cap, { y: 30 });
  }

  // Manifesto: words fill from gray to ink
  document.querySelectorAll('.manifesto p').forEach(p => {
    p.innerHTML = p.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
    const words = p.querySelectorAll('.w');
    gsap.to(words, {
      color: '#0b1b33', stagger: .1, ease: 'none',
      scrollTrigger: { trigger: p, start: 'top 80%', end: 'bottom 45%', scrub: true }
    });
  });

  // Treatments advance on scroll (desktop)
  if (tl && tview && matchMedia('(min-width:901px)').matches) {
    const items = tl.querySelectorAll('li');
    items.forEach((li, i) => ScrollTrigger.create({
      trigger: li, start: 'top 55%', end: 'bottom 55%',
      onEnter: () => setTreat(i), onEnterBack: () => setTreat(i)
    }));
  }

  // Reveals
  gsap.utils.toArray('.rv').forEach(el => {
    gsap.to(el, { opacity: 1, y: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
  ScrollTrigger.batch('.ngrid .card, .bento .tile, .sline .step, .amb div, .wait div', {
    start: 'top 90%',
    onEnter: b => gsap.fromTo(b, { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: .08, duration: 1, ease: 'expo.out', overwrite: true })
  });

  // Mini parallax inside frames
  gsap.utils.toArray('.pframe img, .band img, .loc__img img, .wide img').forEach(im => {
    gsap.fromTo(im, { yPercent: -6 }, {
      yPercent: 6, ease: 'none',
      scrollTrigger: { trigger: im.parentElement, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });

  // Counters
  document.querySelectorAll('[data-count]').forEach(el => {
    const end = parseFloat(el.dataset.count.replace(/\s/g, ''));
    const sep = el.dataset.count.includes(' ');
    const o = { v: 0 };
    gsap.to(o, {
      v: end, duration: 1.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
      onUpdate: () => { const v = Math.round(o.v); el.textContent = sep ? v.toLocaleString('sl-SI').replace(/\./g, ' ') : v; },
      onComplete: () => el.textContent = el.dataset.count
    });
  });

  addEventListener('load', () => ScrollTrigger.refresh());
})();
