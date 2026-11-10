// Editorial concept parameters selected for the presentation, not built-object records.
const AUREN_CASE_DETAILS = {
  patio: {
    area: 360, levels: 2, site: 'Pine woodland site',
    brief: 'A home for a family that enjoys coming together and values time alone. Shared living opens towards the garden, while bedrooms occupy the quieter upper level.',
    landscape: 'Tall trees are retained, with clear views between them. The building separates the entrance from the garden to keep the terrace private.',
    materials: 'Dark stone, vertical timber and generous glazing. Timber softens the geometry, while deep overhangs cast shadows across the façade.',
    plan: 'The ground floor brings together the kitchen, dining room and living room, opening onto the terrace. A study, guest room and utility spaces sit nearby. Bedrooms and a family area occupy the upper floor.',
    detail: 'Evening lighting beneath the overhangs emphasises the horizontal lines. Integrated storage keeps shared spaces clear of everyday clutter.',
    second: 'user-hero-pines.webp'
  },
  light: {
    area: 120, levels: 1, site: 'Panoramic living space',
    brief: 'A living space for reading, working and meeting friends. The view is the main point of orientation, with furniture arranged to retain an open feel.',
    landscape: 'Panoramic glazing directs the eye. A clear route follows the windows, while seating is set closer to the centre of the room.',
    materials: 'Textured concrete, dark textiles, matt metal and a natural rug. The palette responds to the changing daylight.',
    plan: 'A curved sofa gathers the living area around low tables. An armchair beside the window creates a separate reading spot. Circulation connects the zones without additional partitions.',
    detail: 'Several lighting settings change the atmosphere: soft ambient light, a focused reading light and evening illumination by the fireplace.',
    second: 'user-forest.webp'
  },
  garden: {
    area: 280, levels: 1, site: 'Open garden',
    brief: 'A single-storey home with a sheltered entrance and a sense of seclusion. The space opens gradually, from a restrained street façade to bright living rooms.',
    landscape: 'Low planting preserves the clarity of the horizontal lines. A central passage connects the entrance to the inner part of the site.',
    materials: 'Architectural concrete, pale render and clear glass. The concrete texture remains exposed as part of the character of the home.',
    plan: 'Shared spaces face the garden. Bedrooms form a separate wing, with utility rooms placed near the entrance. This arrangement simplifies everyday movement.',
    detail: 'Low-level lighting reveals the wall texture and guides visitors to the entrance. A glazed passage creates a view through the house while protecting the privacy of living rooms.',
    second: 'user-manor.webp'
  },
  silence: {
    area: 460, levels: 2, site: 'Wooded site',
    brief: 'A generous family home with a clear distinction between shared and private rooms. Quiet bedrooms, a practical entrance and a living room connected to the garden are central to the plan.',
    landscape: 'The building responds to existing trees. Vehicle access and the entrance are grouped on one side, with garden paths and terraces on the other.',
    materials: 'Dark stone, timber inserts and glass. Broad roof slopes bring the volumes together and shelter exposed parts of the façade.',
    plan: 'The ground floor combines daytime living, guest rooms and utility spaces. Bedrooms, dressing rooms and a small family lounge occupy the upper floor.',
    detail: 'Deep window reveals create strong shadows. Entrance materials continue inside, connecting the architecture with the interior.',
    second: 'user-interior.webp'
  }
};

function renderCatalogPage() {
  return `<section class="subpage wrap">${back()}<h1>Spaces<br>with character.</h1><p class="subpage-intro">Architectural and interior concepts exploring different ways of living, materials and relationships with the surroundings.</p><div class="filters" role="group" aria-label="Concept discipline"><button class="filter" data-filter="all" aria-pressed="true">All disciplines</button><button class="filter" data-filter="house" aria-pressed="false">Architecture</button><button class="filter" data-filter="interior" aria-pressed="false">Interiors</button></div><div class="projects-grid" id="catalog-grid">${projects.map(projectCard).join('')}</div><div class="projects-bottom"><p class="demo-note">${demos}</p>${button('Discuss your home')}</div></section>`;
}

function renderCasePage() {
  const project = projects.find(item => item.id === new URLSearchParams(location.search).get('id'));
  if (!project) return `<section class="subpage wrap">${back()}<h1>Project not found.</h1>${button('View concepts', '?page=projects')}</section>`;
  const data = AUREN_CASE_DETAILS[project.id];
  document.title = `${project.name} — AUREN`;
  return `<section class="subpage wrap case-page">
    <a class="breadcrumb" href="?page=projects">${icons.right} All projects</a>
    <h1>${project.name}.</h1>
    <div class="detail-meta"><span>Concept</span><span>${data.area} m²</span><span>${data.levels === 1 ? 'One level' : 'Two levels'}</span><span>${data.site}</span><span>2026</span></div>
    <div class="detail-photo"><img src="assets/${project.image}" alt="${project.name}" fetchpriority="high"></div>
    <p class="case-disclosure">Concept selection. Images are visual references; the parameters describe a proposed spatial scenario.</p>
    <div class="details-copy">
      <article><h2>The brief</h2><p>${data.brief}</p></article>
      <article><h2>Site and surroundings</h2><p>${data.landscape}</p></article>
      <article><h2>Architectural idea</h2><p>${project.idea}</p></article>
      <article><h2>Materials</h2><p>${data.materials}</p></article>
      <article><h2>Spatial planning</h2><p>${data.plan}</p></article>
      <article><h2>Light and details</h2><p>${data.detail}</p></article>
    </div>
    <h2>The home as a whole.</h2>
    <div class="detail-photo"><img src="assets/${data.second}" alt="Additional visual reference for the concept ${project.name}" loading="lazy"></div>
    <div class="case-next"><div><h3>What comes next</h3><p>We will develop a concept for your own site. First, we discuss your lifestyle, preferred floor area and budget, then agree on the design scope.</p></div>${button('Discuss your project')}</div>
  </section>`;
}

function renderStudioPage() {
  return `<section class="subpage wrap studio-page">${back()}
    <h1>Understand space.<br>Consider every detail.</h1>
    <p class="subpage-intro">AUREN is an independent team of architects and designers. We design contemporary private homes and interiors, from the first conversation about your lifestyle to an agreed set of drawings.</p>
    <div class="detail-photo"><img src="assets/studio-team-landscape.webp" alt="Collaborative work around the design table" fetchpriority="high"></div>
    <div class="details-copy">
      <article><h2>Architecture</h2><p>We study the site, topography, light and surroundings. We develop the plan and building form, then agree on façades, materials and the connection to the garden.</p></article>
      <article><h2>Interior spaces</h2><p>The architectural idea continues inside. Furniture, storage, finishes and light are shaped around the routines of the people who will live here.</p></article>
      <article><h2>An open conversation</h2><p>We explain design decisions through plans, visualisations and material selections. Each approval builds a shared understanding of the result.</p></article>
      <article><h2>A focus on delivery</h2><p>We discuss the construction budget before the first sketches and compare materials and structural approaches. Technical disciplines are coordinated with the relevant specialists within the agreed scope.</p></article>
    </div>
    <div class="case-next"><div><h3>Start with your idea</h3><p>Message us on Telegram and tell us about your site. You can send references straight away or describe the space in a few sentences.</p></div>${button('Message us on Telegram')}</div>
  </section>`;
}
