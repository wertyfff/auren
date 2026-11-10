const icons = {
  arrow: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>',
  right: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6"/></svg>',
  house: '<svg class="icon" viewBox="0 0 48 48" aria-hidden="true"><path d="m8 24 16-15 16 15M13 21v18h22V21M21 39V27h8v12"/></svg>',
  attach: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 13 6-6a3 3 0 0 1 4 4l-9 9a5 5 0 0 1-7-7L13 3a4 4 0 0 1 6 6l-9 9a2 2 0 0 1-3-3l8-8"/></svg>'
};
const arrow = icons.arrow;
const projects = [
 {id:'patio',name:'Courtyard House',image:'user-project-flat.webp',type:'house',tag:'Private home',idea:'A quiet courtyard becomes the heart of the home. Shared spaces open onto the garden, while private rooms remain sheltered from outside views.'},
 {id:'light',name:'Light Within',image:'user-interior.webp',type:'interior',tag:'Interior',idea:'Natural light, tactile materials and a quiet palette bring the living space together. Furniture and lighting continue the architectural idea.'},
 {id:'garden',name:'In Dialogue with the Garden',image:'user-concrete.webp',type:'house',tag:'Private home',idea:'Open terraces extend the living rooms outdoors. Panoramic glazing connects everyday life with the surrounding garden.'},
 {id:'silence',name:'Geometry of Silence',image:'user-stone.webp',type:'house',tag:'Private home',idea:'Clear volumes and a restrained material palette create architecture defined by proportion, light and privacy.'}
];
const button=(text,url='https://t.me/kiwnt1',cls='')=>{
  const href=url.includes('#contact')?'https://t.me/kiwnt1':url;
  return `<a class="button ${cls}" href="${href}"${href.startsWith('https://t.me/')?' target="_blank" rel="noopener noreferrer"':''}>${text}${arrow}</a>`;
};
const projectCard=p=>`<a class="project" href="?page=project&id=${p.id}" aria-label="${p.name} — view concept"><div class="project-image"><img src="assets/${p.image}" alt="${p.name}" loading="lazy" width="1000" height="1000"></div><div class="project-heading"><h3>${p.name}</h3></div></a>`;
const demos='Concept selection: the images and titles illustrate the visual direction of this website and are not a portfolio of AUREN projects.';
const stages=[['First conversation','We discuss your lifestyle, site, ideas, approximate floor area and construction budget.'],['Research and concept','We study the site and its constraints, then establish the architectural idea and spatial logic.'],['Architectural design','Together, we agree on layouts, building form, façades, windows and key materials.'],['Interior','We develop finishes, furniture, lighting and the ways each space will be used.'],['Working drawings','We prepare drawings and specifications, coordinating the technical disciplines included in the agreement.'],['Project handover','We hand over the agreed documentation for use by your chosen construction company.']];
const services=[['Architecture','Building form, façades, site placement, windows, entrances and terraces. We develop an expressive architecture that responds to your lifestyle and surroundings.'],['Spatial planning','Shared and private areas, circulation, daylight and storage. We shape the plan around your everyday routines.'],['Interior','Materials, furniture, lighting, finishes and integrated storage. In a combined commission, one team develops both architecture and interiors.'],['Project documentation','Plans, elevations, sections, details and specifications for the agreed design. Structural and engineering scopes are defined separately in the agreement.']];
const offers=[['ARCHITECTURE','An architectural concept and the agreed set of architectural drawings.'],['ARCHITECTURE + INTERIOR','A home and its interiors, designed as one coherent whole.'],['COMPLETE PROJECT','An integrated design with an agreed technical scope and specialist involvement.']];
const TELEGRAM_URL = 'https://t.me/kiwnt1';
function telegramContact() {
  return `<div class="contact-layout"><div class="contact-intro"><h2>Already picturing<br>your future home?</h2><p>Tell us about your idea. Start with a reference, a site plan or a few words about the way you want to live.</p></div><div class="contact-action"><a class="telegram-contact" href="${TELEGRAM_URL}" target="_blank" rel="noopener noreferrer">Message us<br>on Telegram ${arrow}<span class="telegram-handle">@kiwnt1</span></a></div></div>`;
}
function form(){return telegramContact();}
function home(){return `
<section class="hero wrap"><div class="hero-title"><h1><span>Distinctive architecture.</span><span class="second">Designed <span class="inline-mark">${icons.house}</span> to be built.</span></h1></div><div class="hero-intro"><p>We design contemporary private homes from the ground up, from architecture and interiors to materials and working drawings. Guided by your site, ideas and budget.</p><div class="hero-actions">${button('Discuss your home','#contact')}<a class="text-link" href="#projects">View projects ${icons.right}</a></div></div><div class="hero-image"><img src="assets/user-hero-pines.webp" alt="Contemporary home with a light façade, courtyard and panoramic glazing — concept reference" width="2200" height="1467" fetchpriority="high"><div class="image-caption"><span><i class="status-dot"></i> Architecture begins with your life.</span><span>Concept reference selection</span></div></div><div class="hero-bottom"><span>AUREN / Architecture and interiors for private homes</span><span>Scroll to discover more ${icons.right}</span></div></section>
<section id="projects" class="surface"><div class="wrap"><div class="section-head"><h2>Every home —<br>its own story.</h2><p>Architecture, layout, interiors and materials work as one. Every space has a character of its own.</p></div><div class="projects-grid">${projects.map(projectCard).join('')}</div><div class="projects-bottom"><p class="demo-note">${demos}</p>${button('All projects','?page=projects','dark')}</div></div></section>
<section id="approach" class="budget"><div class="budget-title">DESIGN <span>to</span> BUDGET</div><div class="budget-body"><h2>Possibilities first.<br>Architecture next.</h2><div class="budget-copy"><p>An expressive design also needs a clear path to construction. That is why we discuss the building budget before the first sketches.</p><p>We compare materials, structural approaches and design options to preserve the core of your idea within the agreed budget framework.</p>${button('Discuss your idea','#contact')}</div></div><div class="budget-reasons"><article><h3>A framework before the sketch</h3><p>We establish the financial framework before developing the architectural concept.</p></article><article><h3>Design with a rationale</h3><p>We compare material and structural alternatives while preserving the character of the home.</p></article><article><h3>Clear decisions</h3><p>We explain what affects cost and which compromises are worth making.</p></article></div><p class="budget-disclaimer">The contractor determines the final construction cost. We design with your budget in mind, but do not set the price of building work.</p></section>
<section id="services" class="services wrap"><div class="section-head"><h2>The whole home.<br>One clear vision.</h2><p>From the silhouette on the site to the light above the dining table. We consider the home as a complete system.</p></div><div class="service-layout"><div class="service-photo"><img src="assets/user-interior.webp" alt="Interior with natural materials — concept reference" width="1000" height="1200" loading="lazy"><div class="image-caption"><span>Space you can feel.</span></div></div><div><div class="service-list">${services.map((s,i)=>`<details><summary>${s[0]}<span class="plus" aria-hidden="true"></span></summary><p>${s[1]}</p></details>`).join('')}</div><div class="service-foot">${button('Explore the scope','?page=services')}<p>One team can develop both the architecture and interiors.</p></div></div></div></section>
<section id="process" class="surface process"><div class="wrap"><div class="section-head"><h2>From first idea<br>to working drawings.</h2><p>A clear process, with every next step explained.</p></div><div class="process-list">${stages.map((s,i)=>`<article class="stage"><span>0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('')}</div><div class="process-foot"><p>AUREN provides design services. You appoint your own building contractor. The schedule and approval process are set out in the agreement.</p>${button('Start your project','#contact','dark')}</div><div class="deliverables"><div><h2>An idea becomes<br>precise.</h2><p>You receive an agreed set of materials to prepare for construction. We define its scope, delivery formats, included revisions and additional services before work begins.</p></div><div><details><summary>Architectural package <span class="plus" aria-hidden="true"></span></summary><ul><li>Site plan within the agreed scope</li><li>Floor plans, elevations and sections</li><li>Key details and visualisations</li></ul></details><details><summary>Interior package <span class="plus" aria-hidden="true"></span></summary><ul><li>Layouts and furniture plans</li><li>Finish plans, lighting layouts and internal elevations</li><li>Visualisations and specifications</li></ul></details><details><summary>Technical disciplines <span class="plus" aria-hidden="true"></span></summary><ul><li>Structural design</li><li>Building services</li><li>Required calculations and drawings</li></ul><p>Included only when specified in the agreement and developed with the relevant specialists.</p></details><p class="small">Digital formats, printed sets, surveys and additional approvals are agreed separately.</p></div></div></div></section>
<section class="pricing wrap"><div class="section-head"><h2>The fee follows<br>your brief.</h2><p>Floor area, architectural complexity, site conditions and the level of detail determine the fee. We prepare a proposal for your project.</p></div>${offers.map((o,i)=>`<a class="offer" href="?page=services#package-${i}"><span>0${i+1}</span><h3>${o[0]}</h3><p>${o[1]}</p>${arrow}</a>`).join('')}<div class="pricing-foot"><p>For a proposal, we need the approximate floor area, site information and your preferred scope. Construction, surveys and additional disciplines are not included automatically.</p>${button('Request a proposal','#contact')}</div></section>
<section id="studio" class="studio"><div class="wrap"><div class="studio-content"><h2>Behind the architecture<br>are people.</h2><div class="studio-text"><p>AUREN is an independent team of architects and designers. We share an interest in contemporary homes, distinctive spaces and precise details.</p><p>We care about the idea and how it takes shape. Architecture and interiors develop through an ongoing conversation.</p><a class="text-link" href="?page=studio">Meet the studio ${arrow}</a></div></div><div class="studio-word" aria-hidden="true">auren<span></span></div><div class="studio-end"><span>Different perspectives. One coherent result.</span><span>Architecture / Interiors / Details</span></div></div></section>
<section id="contact" class="contact wrap">${form()}</section>`}
const back=()=>`<a class="breadcrumb" href="index.html">${icons.right} Back to home</a>`;
function catalog(){return renderCatalogPage();}
function projectPage(){return renderCasePage();}
function servicesPage(){return `<section class="subpage wrap">${back()}<h1>From the overall vision<br>to the smallest detail.</h1><p class="subpage-intro">One team can develop the architecture and interiors. The scope, delivery formats, included revisions and schedule are agreed in the contract.</p>${offers.map((o,i)=>`<article id="package-${i}" class="service-detail"><h2>${o[0]}</h2><div><p>${o[1]}</p><ul>${i===0?'<li>Concept, site placement and layouts</li><li>Elevations, sections and key architectural details</li><li>Visualisations of the agreed design</li>':i===1?'<li>Architectural package</li><li>Layouts and furniture plans</li><li>Finishes, lighting and internal elevations</li><li>Room visualisations and specifications</li>':'<li>Agreed architectural and interior documentation</li><li>Structural design within the contracted scope</li><li>Building services developed with specialist consultants</li>'}</ul><p>The fee reflects floor area, complexity and documentation scope. To prepare a proposal, we need site information, an approximate floor area and your brief.</p><p>${i===0?'Interiors and technical disciplines are not included automatically.':i===1?'Structural design and building services are agreed separately.':'The agreement defines the specific building services and the responsibilities of appointed specialists.'} Construction, site surveys and external approvals are not included automatically in the design scope.</p>${button('Request a proposal')}</div></article>`).join('')}<div class="service-detail"><h2>What you receive<br>at handover</h2><p>An agreed set of drawings, visualisations and specifications. Digital formats, printed copies and source files are defined in the agreement. AUREN does not undertake construction work.</p></div></section>`}
function studioPage(){return renderStudioPage();}
function privacyPage(){return `<section class="subpage wrap privacy-copy">${back()}<h1>Privacy.</h1><p>How the AUREN website works.</p><h2>Contact through Telegram</h2><p>This website has no personal data collection form. The contact button opens Telegram at t.me/kiwnt1. You choose what information to share in the conversation.</p><h2>External service</h2><p>Once you open Telegram, its terms and privacy policy apply. This website does not receive the contents of your messages.</p><h2>Analytics and files</h2><p>This website uses no analytics or advertising trackers. Photographs and fonts are served locally.</p></section>`}
const current=new URLSearchParams(location.search).get('page');
document.querySelector('main').innerHTML=current==='projects'?catalog():current==='project'?projectPage():current==='services'?servicesPage():current==='studio'?studioPage():current==='contacts'?`<section class="subpage wrap">${back()}<h1>Start with a conversation.</h1>${form()}</section>`:current==='privacy'?privacyPage():home();
const heroHeading = document.querySelector('.hero-title h1');
if (heroHeading) heroHeading.innerHTML = '<span>Form<br>of life</span><span class="second">Designed<br>to be built.</span>';
const heroPhoto = document.querySelector('.hero-image img');
if (heroPhoto) {
  heroPhoto.src = 'assets/user-hero-pines.webp';
  heroPhoto.alt = 'Two-storey timber and stone house among pine trees — processed version of the supplied photograph';
}
document.querySelectorAll('.hero-intro, .hero-bottom > span:last-child, .hero-image .image-caption, .service-photo .image-caption, .service-foot > p, .studio-end, .footer-talk').forEach(element => element.remove());
document.querySelectorAll('.pricing .section-head > p, .deliverables .small, .budget-disclaimer, .footer-bottom > span:nth-child(2)').forEach(element => element.remove());
document.querySelectorAll('.process-foot > p, .demo-note').forEach(element => {
  const highlight = document.createElement('span');
  highlight.className = 'text-highlight';
  highlight.textContent = element.textContent;
  element.replaceChildren(highlight);
});
const documentIntro = document.querySelector('.deliverables > div:first-child');
if (documentIntro) documentIntro.insertAdjacentHTML('beforeend', '<figure class="document-photo"><img src="assets/user-manor.webp" alt="Residence with a central glazed façade" loading="lazy" width="900" height="700"></figure>');
const titles={projects:'Projects',project:'Concept study',services:'Services',studio:'Studio',contacts:'Contact',privacy:'Privacy'};
if(current&&current!=='project'&&titles[current])document.title=`${titles[current]} — AUREN`;
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icons[el.dataset.icon]||'');
const menu=document.querySelector('.menu-toggle'),mobileMenu=document.querySelector('#mobile-menu');
function closeMenu(){
 mobileMenu.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');
 document.documentElement.classList.remove('menu-open');
 document.querySelectorAll('body>main,body>footer').forEach(element=>element.inert=false);
}
menu.addEventListener('click',()=>{
 const open=menu.getAttribute('aria-expanded')==='true';
 if(open){closeMenu();return;}
 mobileMenu.hidden=false;menu.setAttribute('aria-expanded','true');menu.setAttribute('aria-label','Close menu');
 document.documentElement.classList.add('menu-open');
 document.querySelectorAll('body>main,body>footer').forEach(element=>element.inert=true);
 mobileMenu.querySelector('a')?.focus({preventScroll:true});
});
document.addEventListener('keydown',event=>{
 if(event.key!=='Tab'||mobileMenu.hidden)return;
 const controls=[...document.querySelectorAll('.header a,.header button')].filter(element=>element.getClientRects().length);
 const first=controls[0],last=controls.at(-1);
 if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
 else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
});
matchMedia('(min-width:761px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileMenu.hidden){closeMenu();menu.focus()}});document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu()});
document.querySelectorAll('[data-filter]').forEach(el=>el.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(el===b)));document.querySelector('#catalog-grid').innerHTML=projects.filter(p=>el.dataset.filter==='all'||p.type===el.dataset.filter).map(projectCard).join('')}));
// Keep the content rendered during closing so both panels move continuously.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.service-list, .deliverables > div:last-child').forEach(group => {
  const panels = [...group.querySelectorAll('details')];
  const states = new Map();
  panels.forEach(panel => {
    const summary = panel.querySelector('summary');
    const body = document.createElement('div');
    body.className = 'accordion-body';
    [...panel.children].filter(child => child !== summary).forEach(child => body.append(child));
    panel.append(body);
    states.set(panel, { expanded: panel.open, animation: null });
    panel.dataset.expanded = String(panel.open);
    summary.setAttribute('aria-expanded', String(panel.open));

    function transition(expanded) {
      const state = states.get(panel);
      state.expanded = expanded;
      const from = panel.getBoundingClientRect().height;
      state.animation?.cancel();
      panel.open = true;
      panel.style.height = 'auto';
      const style = getComputedStyle(panel);
      const collapsed = summary.getBoundingClientRect().height +
        parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) +
        parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
      const to = expanded ? panel.getBoundingClientRect().height : collapsed;
      panel.dataset.expanded = String(expanded);
      summary.setAttribute('aria-expanded', String(expanded));
      body.inert = !expanded;
      panel.style.overflow = 'hidden';
      panel.style.height = `${to}px`;
      const settle = () => {
        panel.open = state.expanded;
        panel.style.height = '';
        panel.style.overflow = '';
        state.animation = null;
      };
      if (reducedMotion.matches || Math.abs(from - to) < 1) { settle(); return; }
      const animation = panel.animate([{ height: `${from}px` }, { height: `${to}px` }], {
        duration: 620, easing: 'cubic-bezier(.22, 1, .36, 1)'
      });
      state.animation = animation;
      animation.onfinish = () => { if (state.animation === animation) settle(); };
    }
    states.get(panel).transition = transition;
    summary.addEventListener('click', event => {
      event.preventDefault();
      const expand = !states.get(panel).expanded;
      if (expand) panels.forEach(other => {
        if (other !== panel && states.get(other).expanded) states.get(other).transition(false);
      });
      transition(expand);
    });
  });
});

const budgetTo = document.querySelector('.budget-title > span');
if (budgetTo) {
  budgetTo.innerHTML = '<i>to</i>';
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => budgetTo.classList.toggle('is-visible', entry.isIntersecting));
  });
  observer.observe(budgetTo);
}

const loader = document.querySelector('#preloader');
if (document.documentElement.classList.contains('is-loading')) {
  const content = [...document.querySelectorAll('body > header, body > main, body > footer')];
  content.forEach(el => el.inert = true);
  const photos = loader.querySelector('.loader-photos');
  const word = loader.querySelector('.preloader-word');
  const FADE_MS = 800;
  const FRAME_MS = 200;
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  let skipPhotos = false;
  const skip = event => { if (event.key === 'Escape') skipPhotos = true; };
  document.addEventListener('keydown', skip);
  const frames = Array.from({ length: 7 }, (_, index) => {
    const image = new Image();
    image.src = `assets/loader/frame-${index + 1}.jpg`;
    image.alt = '';
    image.decoding = 'async';
    return image;
  });
  const fade = (element, from, to) => element.animate(
    [{ opacity: from }, { opacity: to }],
    { duration: FADE_MS, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'both' }
  );
  (async () => {
    await Promise.race([
      Promise.allSettled([document.fonts.ready, ...frames.map(image => image.decode()), document.querySelector('.hero-image img')?.decode()]),
      wait(4000)
    ]);
    const available = frames.filter(image => image.complete && image.naturalWidth > 0);
    // Pre-rasterize the sequence, then replace pixels on one persistent surface.
    // No clearing, DOM image swapping, opacity changes or compositor promotion
    // happens between photographs.
    const canvas = document.createElement('canvas');
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(innerWidth * ratio);
    canvas.height = Math.round(innerHeight * ratio);
    const context = canvas.getContext('2d', { alpha: false });
    const rasterized = available.map(image => {
      const buffer = document.createElement('canvas');
      buffer.width = canvas.width;
      buffer.height = canvas.height;
      const ctx = buffer.getContext('2d', { alpha: false });
      const scale = Math.max(buffer.width / image.naturalWidth, buffer.height / image.naturalHeight);
      const width = image.naturalWidth * scale;
      const height = image.naturalHeight * scale;
      ctx.drawImage(image, (buffer.width - width) / 2, (buffer.height - height) / 2, width, height);
      return buffer;
    });
    photos.append(canvas);
    for (let index = 0; index < available.length && !skipPhotos; index++) {
      context.drawImage(rasterized[index], 0, 0);
      loader.dataset.phase = 'photos';
      loader.dataset.frame = String(index + 1);
      await wait(FRAME_MS);
    }
    loader.dataset.phase = 'white-word';
    await wait(200);
    loader.dataset.phase = 'word-out';
    await fade(word, 1, 0).finished;
    loader.dataset.phase = 'white';
    await wait(100);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    loader.dataset.phase = 'site-in';
    loader.hidden = true;
    document.documentElement.classList.remove('is-loading');
    await Promise.all(content.map(element => fade(element, 0, 1).finished));
    content.forEach(element => { element.inert = false; element.getAnimations().forEach(animation => animation.cancel()); });
    loader.dataset.phase = 'done';
    document.removeEventListener('keydown', skip);
  })();
} else if (loader) {
  loader.hidden = true;
}
if(location.hash)requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView());

const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.type = 'button';
backToTop.setAttribute('aria-label', 'Back to top');
backToTop.innerHTML = `${icons.right}<span>Top</span>`;
backToTop.hidden = true;
document.body.append(backToTop);
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
});
const firstScreen = document.querySelector('.hero');
function updateBackToTop() {
  const threshold = firstScreen ? firstScreen.offsetTop + firstScreen.offsetHeight - 80 : innerHeight;
  backToTop.hidden = scrollY < threshold;
}
window.addEventListener('scroll', updateBackToTop, { passive: true });
window.addEventListener('resize', updateBackToTop);
updateBackToTop();

// Editorial motion: short, quiet text movement and slow image masks.
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const wasPending = entry.target.classList.contains('is-pending');
      entry.target.classList.remove('is-pending');
      if (wasPending) {
        const media = entry.target.matches('.project-image,.service-photo,.document-photo');
        const frames = reducedMotion.matches
          ? [{ opacity: .75 }, { opacity: 1 }]
          : media
            ? [{ clipPath: 'inset(0 0 5% 0)', opacity: .9 }, { clipPath: 'inset(0)', opacity: 1 }]
            : [{ transform: 'translateY(10px)', opacity: .65 }, { transform: 'translateY(0)', opacity: 1 }];
        entry.target.animate(frames, {
          duration: reducedMotion.matches ? 950 : media ? 1500 : 1150,
          easing: 'cubic-bezier(.16,1,.3,1)'
        });
        if (media && !reducedMotion.matches) entry.target.querySelector('img')?.animate(
          [{ transform: 'scale(1.025)' }, { transform: 'scale(1)' }],
          { duration: 1700, easing: 'cubic-bezier(.16,1,.3,1)' }
        );
      }
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.02, rootMargin: '0px 0px 8% 0px' });
  document.querySelectorAll('.section-head h2, .project-image, .service-photo, .document-photo, .studio-content h2, .contact-intro h2, .telegram-contact').forEach(element => {
    element.classList.add('reveal');
    if (element.getBoundingClientRect().top > innerHeight) element.classList.add('is-pending');
    observer.observe(element);
  });
}


