/* ═══════════════════════════════════════════════════════════════════════
   PROJECTS DATA – single source of truth for the portfolio.
   Plain JS (not .json) so the site works when opened directly from disk
   (browsers block fetch() of local .json files).

   To add a project: copy an entry, fill the fields, done.
   Image paths are site-root-relative ("images/…"); index.html prefixes
   them automatically depending on where it runs from.

   Fields:
     id        unique slug, used in the URL hash (#nkdt)
     cat       research | architecture | design | digital
     featured  true → taller hero strip in the index
     cover     { src, pos? , contain? }  pos = CSS object-position
     wip       true → no "Full project" view; panel shows the wipNote
     summary   { headline (HTML, <em> = accent color), paras[], facts[],
                 images[{src,cap,pos?,contain?}] }
     chapters  [{ num, title, html, figures?[], charts? }]
               figures: {src,title?,cap,takeaway?,contain?,pos?}
   ═══════════════════════════════════════════════════════════════════════ */
window.SITE_DATA = {

  identity: {
    name: "Doron Anhang",
    dossier: "DOSSIER / DA-2026 / ARCHITECTURAL R&D",
    kicker: "// EVIDENCE-BASED ARCHITECTURE – FIELD NOTES & BUILT WORK",
    headline: 'Buildings are<br><span class="alt">hypotheses.</span><br>I test them.',
    statement: "Architect-researcher working between quantitative spatial analysis and hands-on making. Empirical research on how housing shapes community; structures and objects built from timber, metal and light.",
    specs: [
      { dt: "STATUS", dd: "B.ARCH · ARCHITECTURAL R&D" },
      { dt: "BASE", dd: "ISRAEL" },
      { cat: "research", dt: "RESEARCH", dd: "SURVEYS / GPS / SPATIAL ANALYSIS" },
      { cat: "architecture", dt: "ARCHITECTURE", dd: "HOUSING / URBAN / INTERIOR" },
      { cat: "design", dt: "DESIGN", dd: "OBJECTS / TIMBER / METAL" },
      { cat: "digital", dt: "DIGITAL", dd: "PYTHON / AUTOMATION / ANDROID" }
    ],
    contact: {
      email: "doron.anhang@gmail.com",
      phone: "+972-54-233-0059",
      linkedin: "https://linkedin.com/in/doron-anhang"
    },
    cta: 'Looking to combine my research experience with my love of architecture.'
  },

  categories: {
    research:     { label: "Research",     color: "var(--slate)" },
    architecture: { label: "Architecture", color: "var(--clay)" },
    design:       { label: "Design",       color: "var(--sage)" },
    digital:      { label: "Digital",      color: "var(--bronze)" }
  },

  projects: [

  /* ── 01 · NKDT ─────────────────────────────────────────────────── */
  {
    id: "nkdt",
    cat: "architecture",
    featured: true,
    title: "NKDT // Architecture as a Dynamic System",
    stripTitle: "NKDT — Architecture as a Dynamic System",
    stripSub: "An architectural laboratory for communal living – ~5,000 beds, 3 typologies, 1 module.",
    year: "2022",
    eyebrow: "B.Arch. Final Project · Ariel University, 2022",
    meta: "Supervisor: Arch. Daniel Azerrad · Ariel University",
    kw: ["Architecture-as-Laboratory", "Communal Living", "Modular System", "Three Typologies", "Evidence-Based Design", "Feedback Loop"],
    cover: { src: "images/nkdt/nkdt_combined.png", pos: "center 55%" },
    summary: {
      kicker: "B.Arch. Final Project · Ariel University, 2022",
      headline: 'An architectural <em>laboratory</em> for communal living.',
      paras: [
        "Two urgencies meet in one programme: loneliness is an epidemic, and data finally lets architecture answer for its social claims. NKDT redesigns Ariel University's dormitories as a live laboratory – every design decision a testable, measurable hypothesis.",
        "One module, three building typologies, 28 plots, 7 neighbourhoods: spatial variation emerges from configuration, not unit design – which is what makes head-to-head comparison meaningful."
      ],
      facts: [
        { v: "~5,000", l: "beds planned" },
        { v: "3", l: "building typologies" },
        { v: "28", l: "plots · 7 neighbourhoods" }
      ],
      images: [
        { src: "images/nkdt/nkdt_combined.png", cap: "Site masterplan model", pos: "center 55%" },
        { src: "images/nkdt/nkdt_type_a.jpg", cap: "Type A: exploded axon" },
        { src: "images/nkdt/nkdt_unit_detail.jpg", cap: "Unit plan & section" }
      ]
    },
    chapters: [
      {
        num: "01", title: "Ethical framework & the proposition",
        html: `<p>Two conditions define the architectural opportunity of the moment. First, the <strong>exponential growth of available data</strong> has made it possible to move beyond intuition: nearly every person now carries a device capable of generating spatial telemetry, and data-informed design lets architects find patterns in complex systems and compare alternatives against real conditions. Second – and equally urgent – <strong>loneliness is an epidemic</strong>. It is a subjective state distinct from social isolation: even people embedded in large networks can feel its absence of depth. Architecture has a concrete role to play in reversing this, through spaces that actively foster layered belonging and spontaneous encounter.</p>
        <p>NKDT synthesises both imperatives into one programme: an <strong>architectural laboratory for communal living</strong>, built on the platform of student dormitories. The three pillars are inseparable – the dormitory provides the controlled institutional context; the communal design addresses loneliness through layered shared space; the laboratory framing makes every design decision a <em>testable, measurable hypothesis</em>.</p>
        <div class="pillars">
          <div class="pillar" style="--pc:var(--clay)"><b>Architectural Laboratory</b><span>A dynamic system built for continuous spatial experimentation – designed to change and to extract insights during active operation.</span></div>
          <div class="pillar" style="--pc:var(--slate)"><b>Communal Living</b><span>Design against loneliness: layered shared spaces that invite spontaneous contact, graduated privacy, and resident ownership of collective ground.</span></div>
          <div class="pillar" style="--pc:var(--sage)"><b>Student Dormitories</b><span>The platform: institutional ownership + transient population + medium-term tenancy = ideal conditions for iterative spatial research.</span></div>
        </div>
        <p>Ariel University presents a rare <em>natural experiment</em>: two radically opposed dormitory compounds on the same campus, serving the same population – a corridor / mid-rise cluster (~760 beds, institutional character) against a scattered caravan plex (~1,240 beds, village atmosphere). The contrast is stark enough to test foundational assumptions about how spatial configuration shapes community, while institutional ownership keeps the data tractable.</p>`,
        figures: [
          { src: "images/nkdt/feedback_loop_nkdt_final.svg", title: "Data feedback loop", cap: "5-stage cycle: design → residents live → data → analysis → iteration.", takeaway: "Architecture as an iterable, measurable instrument.", contain: true },
          { src: "images/nkdt/loneliness_stats_1.svg", title: "Loneliness epidemic", cap: "54% of adults · +26% mortality risk · doubled among youth.", takeaway: "The condition the architecture is built to answer.", contain: true }
        ]
      },
      {
        num: "02", title: "Site analysis & masterplan",
        html: `<p>The current campus is structurally fragmented: dorms split between inside and outside the university fence create two communities with different characters; the campus itself is bisected by a road; and dormitories already occupy <strong>~50% of the built footprint</strong> – with rapid growth demanding densification. Yet the buffer position between university and city carries genuine connective potential, currently squandered.</p>
        <p>The proposal repositions the dorms as that connector. <strong>Four moves</strong> structure the masterplan:</p>
        <div class="moves">
          <div class="move"><b>1</b><span><strong>Dorm as connector.</strong> The dorm buffer becomes a daily contact zone between student and city resident.</span></div>
          <div class="move"><b>2</b><span><strong>Ring road + central plaza.</strong> Reunite the bisected campus around a shared civic core.</span></div>
          <div class="move"><b>3</b><span><strong>28 plots → 7 neighbourhoods.</strong> Each with shared identity, colour, and community programme.</span></div>
          <div class="move"><b>4</b><span><strong>Three building typologies.</strong> Distributed across the site to enable head-to-head spatial comparison.</span></div>
        </div>
        <div class="metrics">
          <div class="metric"><b>~5,000</b><span>beds planned</span></div>
          <div class="metric"><b>3</b><span>building typologies</span></div>
          <div class="metric"><b>28</b><span>plots</span></div>
          <div class="metric"><b>7</b><span>neighbourhoods</span></div>
        </div>`,
        figures: [
          { src: "images/nkdt/nkdt_combined.png", title: "Proposed site masterplan", cap: "28 plots · 7 neighbourhoods · 3 typologies distributed across topography.", takeaway: "The dorm buffer repositioned as the campus-city connector.", wide: true }
        ]
      },
      {
        num: "03", title: "Flexible repetition: the modular design system",
        html: `<p>At the core: an intentional <strong>Spatial &amp; Structural Surplus</strong> – a calculated structural over-engineering of the grid that supports far more spatial permutations than strictly required. The surplus manifests as programmatic voids within floor levels that shift as units expand or contract, mutating internal pathways, changing degrees of physical intimacy between residents, and transforming the building's external facade.</p>
        <p>The module is the <strong>atom of the system</strong>: each dorm room is a composite of 2–4 module units – a self-contained workspace, sleeping complex, and ventilated space. Modular flexibility deconstructs traditional corridors, transforming them into shared communal living nodes – <em>the corridor as a living room.</em></p>`,
        figures: [
          { src: "images/nkdt/nkdt_unit_detail.jpg", title: "Apartment unit: plan & section", cap: "Floor plan · Section A–A · exploded axon · module isometry.", takeaway: "A designed privacy gradient: not a binary public / private wall." },
          { src: "images/nkdt/nkdt_unit_sheet.jpg", title: "Type A building sheet", cap: "Section B–B · 3rd floor plan · full building isometric.", takeaway: "Module placement generates spatial variety: not internal configuration." }
        ]
      },
      {
        num: "04", title: "Three building typologies, one module",
        html: `<p>The same module deploys in <strong>three configurations</strong>, each testing a different social hypothesis across the 28 plots. Spatial variation emerges from <em>configuration</em>, not from different unit designs – which is what makes head-to-head comparison meaningful.</p>`,
        figures: [
          { src: "images/nkdt/nkdt_type_a.jpg", title: "Type A: Urban Corridor", cap: "6 floors · ~3,100 beds · 16 plots · main boulevard facade.", takeaway: "The dense edge: testing community against urban scale.", accent: "var(--slate)" },
          { src: "images/nkdt/nkdt_type_b.jpg", title: "Type B: Mixed Cluster", cap: "4 floors · ~1,100 beds · 6 plots · follows topography.", takeaway: "The mid-scale: community shaped by the terrain it sits on.", accent: "var(--bronze)" },
          { src: "images/nkdt/nkdt_type_c.jpg", title: "Type C: Rural Scattered", cap: "3 floors · ~800 beds · 6 plots · no fixed boundary.", takeaway: "The dispersed extreme: community lives in the spatial voids.", accent: "var(--sage)" }
        ]
      },
      {
        num: "05", title: "The in-between space",
        html: `<p>The corridor is not a circulation spine – it is a <strong>shared living room</strong>. The section is not a stack of floors – it is a <strong>social landscape</strong>. The facade is not a boundary – it is a <strong>membrane of controlled exposure</strong>. Each floor uses a structural grid that can hold <em>more apartments than are placed</em>: the resulting voids, at varying scales, create communal niches from large shared lounges to intimate alcoves.</p>
        <div class="note"><b>Design principle</b><p>Community is built from <strong>structural surplus</strong>: the building always provides more usable spatial grid than its apartments consume – and the surplus is where collective life happens.</p></div>`,
        figures: [
          { src: "images/nkdt/nkdt_unit_sheet.jpg", title: "Section, plan & building isometric", cap: "Section B–B · 3rd floor plan · full Type A building isometric.", takeaway: "The section as a social instrument: vertical movement as communal encounter.", wide: true }
        ]
      },
      {
        num: "06", title: "Grounded in evidence: the feedback loop",
        html: `<p>This design is not speculative. Its typological strategy is directly grounded in a prior empirical study – <em>Student Dorms Archetype as a Driving Factor in the Formation of a Sense of Community</em> (Ariel University, 2022) – which used <strong>SCI-2 and URES psychometric instruments</strong> alongside passive <strong>GPS telemetry</strong> to compare the two existing Ariel compounds. The caravan scattered-plex scored <strong>3.9&nbsp;/&nbsp;5</strong> on spatial quality against the mid-rise cluster's <strong>2.9&nbsp;/&nbsp;5</strong>, with corresponding quantitative differences in Sense of Community.</p>
        <p>Those findings – which spatial features drive belonging and which suppress it – shaped <strong>the void strategy, the privacy gradient, the typology mix, and the community-space hierarchy</strong> across all three building types. The measurement infrastructure (NKDT Points app, privacy-by-design GPS pipeline) developed for that study becomes the lab's ongoing instrument: data accumulates across semesters and informs incremental modifications to void placement, shared-wall positions, and community programme.</p>
        <div class="note"><b>Architecture-as-laboratory</b><p>Each spatial iteration is <em>simultaneously intervention and measurement</em>. The truest ambition of NKDT is not the building – it is the methodology: a proof of concept that spatial quality can be measured, iterated, and progressively refined, replacing intuition with evidence at every scale from the private room to the city edge.</p></div>
        <p class="links">Related:&nbsp; <a href="https://dx.doi.org/10.13140/RG.2.2.32000.00001" target="_blank" rel="noopener noreferrer">Seminar paper ↗</a> &nbsp;·&nbsp; <a href="https://github.com/doron-anhang" target="_blank" rel="noopener noreferrer">NKDT Points app ↗</a> &nbsp;·&nbsp; <a href="https://github.com/doron-anhang" target="_blank" rel="noopener noreferrer">NKDT API ↗</a></p>`,
        figures: [
          { src: "images/shared/nkdt_perspective.png", title: "Seminar → NKDT", cap: "The seminar's instrumentation and feedback loop applied at building scale.", takeaway: "Empirical findings become the design's starting hypothesis.", wide: true }
        ]
      }
    ]
  },

  /* ── 02 · RESEARCH SEMINAR ─────────────────────────────────────── */
  {
    id: "research",
    cat: "research",
    title: "Student Dorms Archetype as a Driving Factor in Sense of Community",
    stripTitle: "Student Dorms Archetype & Sense of Community",
    year: "2022",
    eyebrow: "Academic Seminar Paper · Ariel University, 2022",
    meta: 'Supervisor: Dr. Arch. Gilad Schweid · <a href="https://dx.doi.org/10.13140/RG.2.2.32000.00001" target="_blank" rel="noopener noreferrer">Published Paper ↗</a>',
    kw: ["Mixed-Method Research", "SCI-2 & URES", "Android Dev", "GPS Telemetry", "Privacy-by-Design", "Comparative Field Study"],
    cover: { src: "images/research/ariel_map.jpg", pos: "center 40%" },
    summary: {
      kicker: "Academic Seminar Paper · Published 2022",
      headline: 'Does dormitory design <em>measurably</em> shape community?',
      paras: [
        "A mixed-method field study exploiting a rare natural experiment: two dormitory compounds on one campus, same population, opposing architectural philosophies. Psychometric surveys (SCI-2, URES) and 47 days of passive GPS telemetry – collected through a custom privacy-by-design Android app – against a 7-parameter spatial scoring framework.",
        "The verdict: the decentralised caravan compound beat the dense mid-rise on every spatial parameter (3.9 vs 2.9 / 5) and on measured sense of community – nature, appeal and spatial buffers outperform structural density."
      ],
      facts: [
        { v: "25", l: "valid participants" },
        { v: "3,955", l: "GPS datapoints" },
        { v: "47", l: "days of telemetry" }
      ],
      images: [
        { src: "images/research/ariel_map.jpg", cap: "Campus: two compounds" },
        { src: "images/research/caravan_site.jpg", cap: "Caravan compound" },
        { src: "images/research/midrise_site.jpg", cap: "Mid-rise compound" }
      ]
    },
    chapters: [
      {
        num: "01", title: "Context & challenge",
        html: `<p>Architectural theory frequently claims that physical environments shape human communities – yet these assertions rarely move beyond intuition into verifiable, empirical validation. This study aims to tackle this issue.</p>
        <p>Under the supervision of <strong>Dr. Arch. Gilad Schweid</strong>, it establishes a rigorous mixed-method framework to measure how specific micro-spatial features drive or suppress a <strong>Sense of Community (SoC)</strong> within institutional student housing.</p>
        <p>The research leverages a rare natural experiment: Ariel University operates <strong>two dormitory compounds on the same campus</strong>, serving the same student population, built on <strong>radically opposing architectural philosophies</strong>, controlling for the social confounders that normally make this kind of research inconclusive.</p>`,
        figures: [
          { src: "images/research/ariel_map.jpg", title: "Ariel University campus", cap: "Two opposing compounds, one shared campus.", wide: true },
          { src: "images/research/caravan_site.jpg", title: "Caravan compound", cap: "~350 scattered units, 0.106 km², pedestrian-first.", takeaway: "Decentralised: every unit faces shared green space.", accent: "var(--sage)" },
          { src: "images/research/midrise_site.jpg", title: "Mid-rise compound", cap: "1,550 students, Buildings 101–116, 0.033 km².", takeaway: "Dense and institutional: corridors replace communal space.", accent: "var(--clay)" }
        ]
      },
      {
        num: "02", title: "The archetypes",
        html: `<p>Student dormitory design has evolved through three canonical archetypes. The <strong>Corridor Plex</strong> lines rooms along a shared hallway with communal bathrooms per floor – consistently linked to social overload and withdrawal. The <strong>Cluster Plex</strong>, still the dominant contemporary model, groups rooms around a small shared suite; it improves privacy but paradoxically scores worse on campus-wide community metrics. The <strong>Scattered Plex</strong> organizes autonomous units across shared communal grounds, with the spatial relationship between each unit and the landscape defining the compound's social character – the least studied, and the most promising.</p>
        <p>Ariel's two compounds map directly onto this. The <strong>mid-rise compound</strong> is a cluster-corridor hybrid: densely packed towers with consolidated indoor amenities – ~1,550 students across 0.033 km². The <strong>caravan compound</strong> is a scattered plex: ~350 low-rise units distributed across 0.106 km² of organic, pedestrian-first grounds, organised into semi-private sub-clusters surrounded by greenery and shared outdoor space.</p>`,
        figures: [
          { src: "images/shared/corridor_plex.png", title: "Corridor Plex", cap: "Rooms along a shared hallway: linked to social overload.", contain: true, accent: "var(--clay)" },
          { src: "images/shared/cluster_plex.png", title: "Cluster Plex", cap: "Rooms around a shared suite: privacy up, community down.", contain: true, accent: "var(--clay)" },
          { src: "images/shared/scattered_plex.png", title: "Scattered Plex", cap: "Autonomous units on shared grounds: the promising one.", contain: true, accent: "var(--sage)" },
          { src: "images/research/building_101.jpg", title: "Building 101 floor plan", cap: "Cluster-corridor hybrid · 1,550 students · 0.033 km².", takeaway: "Dense towers; corridors replace communal outdoor space." },
          { src: "images/research/caravan_floor_plan.jpg", title: "Caravan unit floor plan", cap: "Scattered plex · ~350 units · 0.106 km².", takeaway: "Autonomous unit; every door opens onto shared green space." }
        ]
      },
      {
        num: "03", title: "Methodology: two parallel tracks",
        html: `<p>The analysis ran on <strong>two parallel tracks designed to cross-validate each other</strong>. The <strong>qualitative track</strong> scored each compound against seven spatial parameters – <em>control, views, and scale</em> (Place Attachment) and <em>strollability, buffers, opportunities, and perception</em> (Informal Contact) – on a 1–5 scale through direct architectural observation benchmarked against the academic literature. The goal: a predicted Sense of Community score based purely on spatial merit.</p>
        <p>The <strong>quantitative track</strong> measured what residents actually experienced, using two validated instruments translated to Hebrew: the <strong>University Residence Environment Scale (URES)</strong>, assessing social climate across ten subscales, and the <strong>Sense of Community Index 2 (SCI-2)</strong>, measuring SoC across four dimensions. Passive <strong>GPS telemetry</strong>, collected continuously over 47 days via the same app, added a behavioural layer – tracking actual movement through and between compounds to calibrate the self-report data.</p>
        <p>Comparing predicted against measured outcomes both validated the spatial framework and surfaced where the two diverged – and why.</p>`,
        figures: [
          { src: "images/research/d4_instruments_v1.svg", title: "Quantitative instruments", cap: "URES, SCI-2, and GPS telemetry: social climate, sense of community, spatial behaviour.", takeaway: "Three complementary instruments cross-calibrating each other.", contain: true },
          { src: "images/research/d5_scoring_rubric_v1.svg", title: "Qualitative instrument", cap: "Seven parameters scored 1–5 through direct architectural observation.", takeaway: "A predicted SoC score built from the built environment alone.", contain: true }
        ]
      },
      {
        num: "04", title: "The app: NKDT Points",
        html: `<p>To orchestrate data collection during the pandemic, I co-developed a custom native <strong>Android application – NKDT Points</strong> – functioning as a live research platform. The app simultaneously administered the psychometric questionnaires remotely and captured <strong>continuous passive background GPS telemetry</strong>, mapping how residents actually moved through and between the compounds over time.</p>
        <p><strong>Privacy-by-Design</strong> governed the entire pipeline. Survey responses and spatial telemetry were isolated across decoupled databases from the outset. User identities were obfuscated at device edge via a client-side cryptographic hash crossing hardware IDs with registration timestamps – the only identifier ever transmitted. GPS data was geofenced to city limits; when a participant was detected within their own residential cluster, the app substituted their precise coordinate with a cluster-centroid anchor, preventing hyper-local tracking while preserving compound-level movement data.</p>
        <p class="links">Source code:&nbsp; <a href="https://github.com/doron-anhang" target="_blank" rel="noopener noreferrer">App ↗</a> &nbsp;·&nbsp; <a href="https://github.com/doron-anhang" target="_blank" rel="noopener noreferrer">API ↗</a></p>`,
        figures: [
          { src: "images/research/d1_participant_flow_v2.svg", title: "Participant flow", cap: "Onboarding through passive GPS collection.", contain: true, wide: true },
          { src: "images/research/d2_anonymisation_v2.svg", title: "Anonymisation at the edge", cap: "Client-side SHA hash: hardware ID × registration timestamp.", takeaway: "No personal data ever leaves the device unhashed.", contain: true },
          { src: "images/research/d3_pipeline_v2.svg", title: "Data pipeline", cap: "Device → geofence → decoupled survey & spatial DBs.", takeaway: "Privacy-by-design end-to-end.", contain: true }
        ]
      },
      {
        num: "05", title: "Results",
        html: `<p>The <strong>qualitative analysis</strong> produced a clear verdict: the caravan compound scored <strong>3.9 / 5</strong> (SD = 0.38, p &lt; 0.01) against the mid-rise's <strong>2.9 / 5</strong> (SD = 0.35, p &lt; 0.05). Three spatial families accounted for most of the gap: <strong>Nature</strong> features (free-flowing layout, tree canopy, green sub-clusters), <strong>Appeal</strong> features (distinctive unit character, resident personalisation, village aesthetic), and <strong>Buffer</strong> features – the layered private → semi-private → communal → campus hierarchy that gives residents fine-grained control over social exposure. The mid-rise's inside/outside binary collapses that gradient entirely.</p>
        <p>The <strong>quantitative results</strong> confirmed the direction: caravan residents scored 0.566 normalised on the SCI-2 total index (p &lt; 0.05), mid-rise scored 0.407 – with <em>Membership</em> and <em>Shared Emotional Connection</em> driving the largest differences. GPS telemetry added a calibrating layer: residents spent <strong>83.5% of recorded time within their own building or sub-cluster</strong>, reflecting COVID-19's compression of social opportunity and explaining why both compounds scored lower than the spatial model predicted. The mid-rise cohort was small (n = 3–5), making comparative findings directional – a larger longitudinal follow-up remains the natural next step.</p>
        <div class="metrics">
          <div class="metric"><b>38</b><span>app downloads</span></div>
          <div class="metric"><b>25</b><span>valid participants</span></div>
          <div class="metric"><b>22</b><span>SCI-2 responses</span></div>
          <div class="metric"><b>3,955</b><span>GPS datapoints</span></div>
        </div>
        <div class="note"><b>Empirical finding</b><p>Counter to conventional density-driven assumptions, the analysis revealed a <strong>clear statistical advantage for the decentralised Caravan compound</strong>. Micro-spatial elements – <strong>nature integration, visual appeal, and spatial buffers</strong> – proved to be the high-impact drivers of community formation, outperforming structural density.</p></div>`,
        charts: [
          {
            id: "qual",
            title: "Qualitative spatial scores: Caravan vs Mid-rise",
            sub: "7 architectural parameters scored 1–5 against literature benchmarks.",
            takeaway: "Caravan wins on every parameter; gap widens most on Nature, Buffers, and Views.",
            howto: "Score / 5",
            viab: [
              { name: "Caravan", score: "3.9", denom: "/5", pct: 78, color: "var(--sage)", stat: "SD 0.38 · p < 0.01" },
              { name: "Mid-rise", score: "2.9", denom: "/5", pct: 58, color: "var(--clay)", stat: "SD 0.35 · p < 0.05" }
            ]
          },
          {
            id: "sci",
            title: "Quantitative: Sense of Community Index (SCI-2)",
            sub: "Residents' actual sense of community across 4 subscales. Normalised 0–1; Caravan n=18, Mid-rise n=3.",
            takeaway: "Caravan leads on every subscale; biggest gap on Membership (0.534 vs 0.278).",
            howto: "Higher = stronger SoC"
          },
          {
            id: "ures",
            title: "Quantitative: University Residence Environment (URES)",
            sub: "10-subscale social-climate profile. * marks statistically significant differences (p<0.1).",
            takeaway: "Caravan higher on involvement, emotional support, academic achievement. Mid-rise higher on independence: the lone reversal.",
            howto: "Standardised score"
          }
        ]
      },
      {
        num: "06", title: "R&D framework & scaling path",
        html: `<p>The study is designed as a <strong>replicable methodology framework, not a one-off observation</strong>. Because universities maintain near-total institutional control over students' physical environment, student housing represents the <em>ideal live testing sandbox</em> for continuous spatial experimentation – where specific environmental variables can be modified, measured, and iterated on in ways real-world urban settings rarely permit.</p>
        <p>This research establishes the instrumentation baseline for exactly that feedback loop: <strong>spatial design decisions validated against measurable human outcomes</strong> rather than intuition alone. That framework is the direct starting point for the <strong>NKDT final project</strong>.</p>`,
        figures: [
          { src: "images/shared/nkdt_perspective.png", title: "NKDT: scaling the method", cap: "The seminar's instrumentation and feedback loop applied at building scale.", takeaway: "From observation framework to design intervention.", wide: true }
        ]
      }
    ]
  },

  /* ── 03 · PRODUCT DESIGN ───────────────────────────────────────── */
  {
    id: "design",
    cat: "design",
    title: "Product Design // Lighting, Shade & Jewellery",
    stripTitle: "Product Design — Lighting, Shade & Jewellery",
    year: "Ongoing",
    eyebrow: "Product & Object Design · Personal Practice",
    meta: "Handcrafted objects · timber, metal & precious materials",
    kw: ["Material Logic", "Fabrication", "Lighting", "Tensegrity", "Lost-Wax Casting"],
    cover: { src: "images/design/drift_wood.png", pos: "center 45%" },
    summary: {
      kicker: "Personal Practice · Handcrafted Objects",
      headline: 'The construction logic, left <em>legible.</em>',
      paras: [
        "Three bodies of handcrafted work – lighting fixtures in timber and metal, a tensegrity shade canopy, and an engagement ring in 18k gold and amber. Across all of them the same rule: the junction between materials is the composition, and fabrication is the finished detail.",
        "The materials carry their history – raw grain, weathered steel, a stone from the place we met."
      ],
      facts: [
        { v: "7", l: "lighting fixtures" },
        { v: "1", l: "tensegrity canopy" },
        { v: "18k", l: "gold, lost-wax cast" }
      ],
      images: [
        { src: "images/design/drift_wood.png", cap: "Drift Wood: pendant" },
        { src: "images/design/shade_perspective.png", cap: "Shade: tensegrity canopy" },
        { src: "images/design/ring_studio.png", cap: "Engagement ring" }
      ]
    },
    chapters: [
      {
        num: "01", title: "Lighting: timber & metal",
        html: `<p>A series of handcrafted lighting designs exploring timber and metal as complementary materials. Each fixture treats the junction between raw wood grain and precision metal as the compositional centrepiece – the construction logic is left legible rather than concealed.</p>`,
        figures: [
          { src: "images/design/drift_wood.png", title: "Drift Wood", cap: "Pendant fixture: overview", takeaway: "Raw timber grain met by a fine metal stem: the join is the composition." },
          { src: "images/design/drift_wood_detail.png", title: "Drift Wood", cap: "Pendant fixture: detail", takeaway: "The junction left legible: fabrication as the finished detail." },
          { src: "images/design/rail_wood.png", title: "Rail Wood", cap: "Track fixture: overview", takeaway: "Metal rail reads as armature; timber reads as warmth: neither dominates." },
          { src: "images/design/rail_wood_detail.png", title: "Rail Wood", cap: "Track fixture: detail", takeaway: "The metal carries the load so the timber can stay purely expressive." },
          { src: "images/design/plank.png", title: "Plank", cap: "Pendant fixture", takeaway: "A single plank of timber, suspended: form and material as one statement." },
          { src: "images/design/desk_lamp.png", title: "Desk Lamp", cap: "Task fixture", takeaway: "The same timber-and-metal logic scaled down to the desk." },
          { src: "images/design/petach_tikva_fixture.png", title: "Hanging Enamel Fixture", cap: "Pendant fixture", takeaway: "Enamel brings colour where the others stay in raw material." }
        ]
      },
      {
        num: "02", title: "Shade: a tensegrity canopy",
        html: `<p>A canopy built on a <strong>tensegrity principle</strong>: the beams carry no bending – they are held apart purely by the tension wires strung between them. Compression and tension are separated into distinct members, so the structure reads as floating rather than supported. The three views document how the geometry resolves across all orientations.</p>`,
        figures: [
          { src: "images/design/shade_perspective.png", title: "Shade structure", cap: "Tensegrity canopy: perspective", takeaway: "Beams held apart by wire tension alone: compression and tension fully separated.", wide: true },
          { src: "images/design/shade_front.png", title: "Shade structure", cap: "Front elevation", takeaway: "Front-on, the wires resolve into a clean tensioned plane." },
          { src: "images/design/shade_side.png", title: "Shade structure", cap: "Side elevation", takeaway: "The section reveals how the floating geometry holds itself open." }
        ]
      },
      {
        num: "03", title: "Jewellery: an engagement ring",
        html: `<p>Made for my wife – an engagement ring in <strong>18k gold</strong> set with an <strong>amber stone</strong> sourced in <strong>San Cristóbal de las Casas, Mexico</strong>, where we met. The ring was fabricated using <strong>lost-wax casting</strong>: a wax model was hand-carved to shape, invested in plaster, then burned out to leave a cavity into which molten gold was cast. Three renders examine the piece under different lighting conditions.</p>`,
        figures: [
          { src: "images/design/ring_wip.png", title: "Engagement ring", cap: "Wax model & raw amber: before casting", takeaway: "The hand-carved wax and the uncut stone: the piece begins as the lost-wax pattern." },
          { src: "images/design/ring_overview.png", title: "Engagement ring", cap: "18k gold & amber: overview", takeaway: "Gold band and amber stone from San Cristóbal: the ring carries the place it came from." },
          { src: "images/design/ring_studio.png", title: "Engagement ring", cap: "Studio view", takeaway: "Neutral light reads the lost-wax surface and the band's hand-carved profile." },
          { src: "images/design/ring_lit.png", title: "Engagement ring", cap: "Lit view", takeaway: "Directional light brings the amber alive: the stone becomes the source." },
          { src: "images/design/ring_sunlight.png", title: "Engagement ring", cap: "Daylight view", takeaway: "In natural sunlight the amber warms to its deepest tone: the finished piece in the world." }
        ]
      }
    ]
  },

  /* ── 04 · YAHOO ────────────────────────────────────────────────── */
  {
    id: "yahoo",
    cat: "digital",
    title: "Yahoo! // Research Automation & Integrity",
    stripTitle: "Yahoo! — Research Automation & Integrity",
    year: "2015 – Present",
    eyebrow: "Professional Experience · 2015 – Present",
    meta: "Tel Aviv · Research Analyst, Data Analyst, Technical Analyst",
    kw: ["Python", "PySpark", "SQL", "Airflow", "AWS", "A/B Testing", "Causal Inference", "Claude Code"],
    cover: { src: "images/research/d3_pipeline_v2.svg", contain: true },
    summary: {
      kicker: "Professional Experience · Tel Aviv · 2015 – Present",
      headline: 'A decade of <em>research systems</em> at scale.',
      paras: [
        "Ten years at Yahoo! across three roles – from validating ML deployments as a student analyst to engineering the Python/PySpark automation frameworks behind a $10M+/year experimentation roadmap.",
        "The common thread with the architecture work: rigorous measurement, automated pipelines, and methodology you can trust."
      ],
      facts: [
        { v: "90%", l: "pipeline runtime reduction" },
        { v: "$10M+", l: "yearly testing roadmap managed" },
        { v: "3", l: "roles, 2015 → present" }
      ],
      images: [
        { src: "images/research/d3_pipeline_v2.svg", cap: "Pipeline design", contain: true },
        { src: "images/research/d2_anonymisation_v2.svg", cap: "Privacy architecture", contain: true },
        { src: "images/research/d4_instruments_v1.svg", cap: "Instrumentation", contain: true }
      ]
    },
    chapters: [
      {
        num: "01", title: "Research Analyst · 2023 – Present",
        html: `<ul>
          <li><strong>Engineered a core Python/PySpark automation framework</strong> that unified disparate workflow systems into a single automated pipeline, reducing total runtime by 90% and ensuring complete execution validity.</li>
          <li><strong>Architected an end-to-end automation pipeline</strong> for self-service systems, eliminating manual engineering intervention and democratising access for non-technical stakeholders.</li>
          <li><strong>Led methodology alignment</strong> across a family of analytics products, establishing standardised experimental protocols.</li>
          <li><strong>Partnered with Research Scientists and Engineering teams</strong> on backend infrastructure, making architectural decisions balancing performance, efficiency, and scientific rigour.</li>
          <li><strong>Utilised LLM workflows</strong> (Claude Code) to accelerate technical knowledge acquisition and streamline complex debugging.</li>
        </ul>`
      },
      {
        num: "02", title: "Data Analyst: Systems & Methodology · 2021 – 2023",
        html: `<ul>
          <li><strong>Managed end-to-end execution of a $10M+/year technical testing roadmap</strong>, ensuring strict algorithmic validity and data integrity across continuous operational pipelines.</li>
          <li><strong>Implemented multi-layered SQL and data automation workflows</strong> to guarantee data quality and detect pipeline contamination.</li>
          <li>Collaborated with Research teams to refine methodologies, automate pipelines, and present papers at Yahoo's internal Tech Pulse conference.</li>
        </ul>`
      },
      {
        num: "03", title: "Technical Analyst (Student) · 2015 – 2021",
        html: `<ul>
          <li><strong>Automated deployment validation pipelines</strong>, reducing time-to-production by ~3 days and saving 25+ developer hours per release.</li>
          <li><strong>Conducted machine learning validation research</strong> using Python-based validation methodologies.</li>
        </ul>`
      }
    ]
  },

  /* ── 05 · KIBBUTZ MERCHAVIA (WIP) ──────────────────────────────── */
  {
    id: "kibbutz",
    cat: "architecture",
    title: "Kibbutz Merchavia // Renovation & Expansion",
    stripTitle: "Kibbutz Merchavia — Renovation & Expansion",
    year: "Ongoing",
    eyebrow: "Applied Design · Ongoing · Professional Practice",
    meta: "Revit · Construction Documentation",
    kw: ["Revit", "BIM", "Construction Docs", "Renovation", "Professional Practice"],
    cover: null,
    wip: true,
    wipNote: "Revit model screenshots, floor plans, and construction documentation are being prepared.",
    summary: {
      kicker: "Applied Design · Professional Practice · Ongoing",
      headline: 'Working drawings for a <em>real client.</em>',
      paras: [
        "An ongoing renovation and expansion project for a private home in Kibbutz Merchavia – full BIM workflow in Revit, from survey through construction documentation."
      ],
      facts: [],
      images: []
    },
    chapters: null
  },

  /* ── 06 · ACRE (WIP) ───────────────────────────────────────────── */
  {
    id: "acre",
    cat: "architecture",
    title: "Acre // Symbiotic Urban Fabric",
    stripTitle: "Acre — Symbiotic Urban Fabric",
    year: "Year 3",
    eyebrow: "Urban Studio · Year 3",
    meta: "Studio Urban · Advisors: Arch. David Aharoni & Kobi Zik · with Chen Ponces & Hila Zahrihan",
    kw: ["Urban Design", "Mixed-Use", "Urban Fabric", "Symbiosis"],
    cover: null,
    wip: true,
    wipNote: "Site plans, urban diagrams, and project documentation are being prepared.",
    summary: {
      kicker: "Urban Studio · Year 3",
      headline: 'Stitching new fabric into an <em>ancient city.</em>',
      paras: [
        "An urban-scale studio project in Acre exploring symbiosis between the historic fabric and contemporary mixed-use development. With Chen Ponces & Hila Zahrihan."
      ],
      facts: [],
      images: []
    },
    chapters: null
  },

  /* ── 07 · TEL AVIV (WIP) ───────────────────────────────────────── */
  {
    id: "telaviv",
    cat: "architecture",
    title: "Tel Aviv // Adaptive Environment",
    stripTitle: "Tel Aviv — Adaptive Environment",
    year: "Year 3",
    eyebrow: "Digital Studio · Year 3",
    meta: "Studio Digital · Advisor: Arch. Yoav Lanir",
    kw: ["Parametric Design", "Adaptive Systems", "Dynamic Topology", "Environmental Response"],
    cover: null,
    wip: true,
    wipNote: "Parametric diagrams, Grasshopper logic, and simulation outputs are being documented.",
    summary: {
      kicker: "Digital Studio · Year 3",
      headline: 'A building that <em>responds.</em>',
      paras: [
        "A parametric studio project in Tel Aviv: an adaptive environment whose topology responds to environmental conditions, developed through Grasshopper logic and simulation."
      ],
      facts: [],
      images: []
    },
    chapters: null
  },

  /* ── 08 · NOMAD HOTEL (WIP) ────────────────────────────────────── */
  {
    id: "nomad",
    cat: "architecture",
    title: "Nomad Hotel // Flexible In-Between",
    stripTitle: "Nomad Hotel — Flexible In-Between",
    year: "Year 4",
    eyebrow: "Interior Studio · Year 4",
    meta: "Studio Interior · Advisor: Arch. Dana Oberzon",
    kw: ["Interior Design", "Hospitality", "Modularity", "In-Between Space"],
    cover: null,
    wip: true,
    wipNote: "Interior renders, section drawings, and material studies are being compiled.",
    summary: {
      kicker: "Interior Studio · Year 4",
      headline: 'Hospitality in the <em>in-between.</em>',
      paras: [
        "An interior studio project: a hotel for the modern nomad built on modular, flexible in-between spaces that adapt between private retreat and shared encounter."
      ],
      facts: [],
      images: []
    },
    chapters: null
  },

  /* ── 09 · CLINIC (WIP) ─────────────────────────────────────────── */
  {
    id: "clinic",
    cat: "architecture",
    title: "Clinic // Construction Documentation Set",
    stripTitle: "Clinic — Construction Documentation Set",
    year: "2017",
    eyebrow: "Technical Drawing · B.Arch Coursework, 2017",
    meta: "Full construction-documentation set · plans, sections, facades & details",
    kw: ["Construction Docs", "Technical Drawing", "Detailing", "AutoCAD"],
    cover: null,
    wip: true,
    wipNote: "An 11-sheet construction-documentation set (plans, sections, facades, stairs & details, 1:25–1:100) is being prepared for the web.",
    summary: {
      kicker: "Technical Drawing · B.Arch Coursework, 2017",
      headline: 'A complete <em>construction set</em>, drawn by hand-logic.',
      paras: [
        "An early, full construction-documentation exercise for a small clinic: ground and second-floor plans, roof plan, north and west facades, two A–A sections (1:25 and 1:50), a stair detail, and two detail sheets – eleven coordinated drawings in all.",
        "The drawings exist as a measured PDF set; web-ready raster sheets are in preparation."
      ],
      facts: [],
      images: []
    },
    chapters: null
  },

  /* ── 10 · PUBLICATIONS ─────────────────────────────────────────── */
  {
    id: "pubs",
    cat: "research",
    title: "Publications & Presentations",
    stripTitle: "Publications & Presentations",
    year: "2022 – 2023",
    eyebrow: "Academic & Professional",
    meta: "Papers, posters, and presented research",
    kw: [],
    cover: null,
    summary: {
      kicker: "Academic & Professional",
      headline: 'Papers, posters & <em>presented research.</em>',
      paras: [
        "Published architectural research and internal industry papers presented at Yahoo's Tech Pulse conference."
      ],
      facts: [{ v: "3", l: "papers & posters" }],
      images: []
    },
    chapters: [
      {
        num: "01", title: "Publications & presentations",
        html: `<div class="pubs">
          <div class="pub"><b>Submitted Paper · Tech Pulse 2023</b><p>Overcoming A/B Test Discrepancy Using Nearest Neighbour Data Imputation</p><i>Yahoo internal conference – content confidential</i></div>
          <div class="pub"><b>Presented Poster · Tech Pulse 2022</b><p>Assessing the Incrementality of Enhanced CPC as a Bidding Strategy in the Gemini Platform</p><i>Yahoo internal conference – content confidential</i></div>
          <div class="pub"><b>Architectural Seminar Paper · 2022</b><p>Student Dorms Archetype as a Driving Factor in the Formation of a Sense of Community</p><a href="https://dx.doi.org/10.13140/RG.2.2.32000.00001" target="_blank" rel="noopener noreferrer">dx.doi.org/10.13140/RG.2.2.32000.00001 ↗</a><i>A quantitative data study analysing spatial data and its relation to community formation metrics</i></div>
        </div>`
      }
    ]
  }

  /* ── TEMPLATE – future Digital project (copy, fill, uncomment) ────
  ,{
    id: "new-project",
    cat: "digital",
    title: "Project Title // Subtitle",
    stripTitle: "Project Title — Subtitle",
    year: "2026",
    eyebrow: "Category · Year",
    meta: "Context line",
    kw: ["Keyword"],
    cover: { src: "images/…/cover.png" },
    summary: {
      kicker: "Category · Year",
      headline: 'Question or claim with one <em>accent</em> word.',
      paras: ["Paragraph 1.", "Paragraph 2."],
      facts: [{ v: "1", l: "fact label" }],
      images: [{ src: "images/…/a.png", cap: "Caption" }]
    },
    chapters: [
      { num: "01", title: "Chapter title", html: `<p>Text…</p>`,
        figures: [{ src: "images/…/b.png", title: "Figure", cap: "Caption", takeaway: "One-line meaning." }] }
    ]
  }
  ──────────────────────────────────────────────────────────────────── */
  ],

  /* Chart.js specs for the research Results chapter (ported from the
     original site, recolored to the matured palette). */
  chartSpecs: {
    colors: { caravan: "#65805F", midrise: "#9E4B3C" },
    qual: {
      labels: ["Control", "Views", "Scale", "Nature", "Appeal", "Safety", "Strollability", "Buffers", "Opportunities", "Perception"],
      caravan: [4.0, 4.0, 4.3, 4.5, 3.5, 3.5, 4.0, 4.5, 3.7, 3.3],
      midrise: [3.0, 2.2, 3.3, 2.5, 2.5, 3.0, 2.8, 3.0, 3.0, 2.8],
      max: 5, axis: "x", yTitle: "Score / 5", fmt: 1
    },
    sci: {
      labels: ["Total SCI", "Reinf. of needs", "Membership", "Influence", "Shared emotion"],
      caravan: [0.566, 0.627, 0.534, 0.500, 0.602],
      midrise: [0.407, 0.519, 0.278, 0.407, 0.426],
      max: 0.78, axis: "x", yTitle: "Normalised score (0–1)", fmt: 2
    },
    ures: {
      labels: ["Involvement *", "Emot. support", "Independence *", "Traditional social", "Competition", "Academic achiev. *", "Intellectuality", "Order & org. *", "Student influence", "Innovation"],
      caravan: [58, 54, 29, 64, 58, 50, 49, 43, 50, 30],
      midrise: [35, 35, 60, 67, 62, 25, 45, 30, 50, 33],
      max: 75, axis: "y", yTitle: "Standardised score", fmt: 0
    }
  }
};
