/**
 * English content — source of truth for the site.
 * Keep factual wording aligned with the live English page.
 * Vietnamese translations live in content-vi.js and locales/TRANSLATION_AUDIT.md.
 */
window.SITE_CONTENT_EN = {
  lang: "en",
  dir: "ltr",
  meta: {
    titleHome: "Tung (TJ) Vo",
    titleSection: "{section} · Tung (TJ) Vo",
    description: "Tung (TJ) Vo — mathematician and undergraduate researcher.",
    ogLocale: "en_US",
    ogLocaleAlternate: "vi_VN",
    canonicalPath: "/",
    alternatePath: "/vi/",
  },
  aria: {
    siteSections: "Site sections",
    language: "Language",
  },
  langSwitch: {
    en: "English",
    vi: "Tiếng Việt",
  },
  nav: {
    research: "Research",
    publications: "Publications",
    presentations: "Presentations",
    leadership: "Outreach",
    recognition: "Recognition",
    gallery: "Gallery",
  },
  sections: {
    research: "Research",
    publications: "Publications",
    presentations: "Presentations",
    leadership: "Outreach",
    recognition: "Recognition",
    gallery: "Gallery",
  },
  ui: {
    resume: "resume",
    cv: "CV",
    viewPoster: "View poster →",
    viewSlides: "View slides →",
    viewConferencePoster: "View conference poster →",
    readPaper: "Read paper →",
    readRelatedPaper: "Read related paper →",
    backToGallery: "Back to gallery",
    viewRelatedActivity: "Related activity",
    openImage: "Open full image",
    image: "image",
    images: "images",
  },
  intro: {
    name: "Tung (TJ) Vo",
    paragraphs: [
      {
        type: "text",
        text: "My research interests are combinatorics, mathematical optimization, graph theory, and quantum computing.",
      },
      {
        type: "html",
        html: 'This fall, I will continue working with Dr. Mary Flagg at the <a href="https://stthom.edu/" target="_blank" rel="noopener noreferrer">University of St. Thomas</a> on competitive zero forcing. This summer, I am an NSF REU fellow at the <a href="https://www.uprp.edu/" target="_blank" rel="noopener noreferrer">University of Puerto Rico at Ponce</a>, studying combinatorics.',
      },
      {
        type: "text",
        text: "I study Applied Mathematics at the University of St. Thomas in Houston, graduating in 2028. I previously earned an Honors Associate of Science, Summa Cum Laude, from Lone Star College as a Distinguished Global Scholar with a concentration in International Study.",
      },
      {
        type: "html",
        html: 'You can find me on <a href="https://www.linkedin.com/in/tung-vo-4728b7235" target="_blank" rel="noopener noreferrer">LinkedIn</a> or reach me by <a href="mailto:vo.tung@stthom.edu">email</a>.',
      },
      {
        type: "links",
        before: "Here are my ",
        mid: " and ",
        after: ".",
        resumeHref: "assets/Tung-Vo-Resume.pdf",
        cvHref: "assets/Tung-Vo-CV.pdf",
      },
    ],
  },
  research: [
    {
      title: "Qubit routing for quantum circuit optimization",
      meta: "Rice University · Spring 2026–present",
      points: [
        "Working with project lead Saber Dinpazhouh and PI Dr. Illya Hicks on the qubit routing problem in quantum circuit optimization.",
        "Designed an integer-programming heuristic that maps logical qubits to hardware-constrained physical qubits while minimizing inserted SWAP gates.",
        "Benchmarked routing methods against SABRE and TKET on gate count and circuit depth.",
      ],
    },
    {
      title: "Competitive zero forcing",
      meta: "University of St. Thomas · Fall 2025–present",
      points: [
        "Studying a two-player extension of the classical zero-forcing color-change rule with Dr. Mary Flagg.",
        "Brings together graph theory, vertex connectivity, and computational modeling.",
      ],
      links: [{ href: "assets/research/USTPosterSpring26.pdf", labelKey: "viewConferencePoster" }],
    },
    {
      title: "Fubini rankings, parking functions, and Cayley permutations",
      meta: "University of Puerto Rico, Ponce · Summer 2026",
      points: [
        "Proved enumerative and structural results and characterized intersections among combinatorial families.",
        "Co-authored an article draft supported by Python enumeration.",
      ],
      links: [{ href: "assets/research/YMC2026_Inversion_Preserving_Bijection_Slides.pdf", labelKey: "viewSlides" }],
    },
    {
      title: "Recruitment tactics and desertion during the Vietnam War",
      meta: "Lone Star College Honors College · 2024–25",
      points: [
        "Examined how U.S. lottery-draft and Viet Cong propaganda recruitment tactics shaped soldier desertion rates.",
        "Used primary-source posters and draft records.",
      ],
      links: [
        { href: "assets/research/Vietnam_War_Analysis.pdf", labelKey: "readPaper" },
        { href: "assets/research/Vietnam_War_IEB_Poster.pdf", labelKey: "viewConferencePoster" },
      ],
    },
    {
      title: "Air pollution and life expectancy",
      meta: "Lone Star College Honors College · 2024",
      points: [
        "Compared the United States and Chad using a Most Similar System Design case-study framework.",
        "Identified socioeconomic status, infant mortality, healthcare access, and reforestation investment as important confounding factors.",
      ],
      links: [{ href: "assets/research/Air_Pollution_Analysis.pdf", labelKey: "readPaper" }],
    },
    {
      title: "Intercultural communication and leadership",
      meta: "Lone Star College Honors College · 2024",
      points: [
        "Authored an autoethnography of competing at National Model UN–New York.",
        "Used triangulation and content analysis to examine public speaking and leadership in large delegate settings.",
      ],
      links: [{ href: "assets/research/NMUN_Research.pdf", labelKey: "readPaper" }],
    },
  ],
  publications: [
    {
      title: "Intersections of Cayley Permutations, Fubini Rankings, and Unit Interval Parking Functions",
      authors: "Eban Barrett, Melissa Beerbower, Jennifer Elder, Pamela E. Harris, Maritza Sanchez, Tung Vo, and Cyrus Young",
      meta: "Research article · In preparation · 2026",
    },
  ],
  presentations: [
    {
      title: "“An Inversion-Preserving Bijection Between Cayley Permutations and Fubini Rankings.”",
      meta: "With Eban M. Barrett and Maritza A. Sanchez · Young Mathematicians Conference · The Ohio State University, Columbus, Ohio · 2026",
      metaDatetime: "2026",
    },
    {
      title: "“Competitive Zero Forcing: A Novel Two-Player Graph Coloring Game.”",
      meta: "With Stephano Cotsoradis and Cole Rutherford · University of St. Thomas Annual Research Symposium · 2026",
      metaDatetime: "2026",
      action: { href: "assets/research/USTPosterSpring26.pdf", labelKey: "viewPoster" },
    },
    {
      title: "“A Systemic Approach to Understanding the Natural World.”",
      meta: "Rice Environmental Data Academy Poster Session and Spring Honors & International Education Conference · 2025",
      metaDatetime: "2025",
      action: { href: "assets/research/Rice_Poster.pdf", labelKey: "viewPoster" },
    },
    {
      title: "“The Fortunes of War or the Luck of the Draw: Recruitment Tactics and Desertion in the Vietnam War.”",
      meta: "World History Association of Texas Annual Conference · 2025",
      metaDatetime: "2025",
      action: { href: "assets/research/Vietnam_War_Analysis.pdf", labelKey: "readPaper" },
    },
    {
      title: "“The Fortunes of War or the Luck of the Draw: Recruitment Tactics and Desertion in the Vietnam War.”",
      meta: "Fall Honors & International Education Conference and International Education Biennial Conference · 2024–25",
      action: { href: "assets/research/Vietnam_War_IEB_Poster.pdf", labelKey: "viewPoster" },
    },
    {
      title: "“Life Expectancy and Air Pollution: A Comparative Analysis of the United States and Chad.”",
      meta: "Spring Honors & International Education Conference · 2024",
      metaDatetime: "2024",
      action: { href: "assets/research/Air_Pollution_Analysis.pdf", labelKey: "readPaper" },
    },
    {
      title: "Panelist, National Model UN–New York.",
      meta: "Spring Honors & International Education Conference · 2024",
      metaDatetime: "2024",
      action: { href: "assets/research/NMUN_Research.pdf", labelKey: "readRelatedPaper" },
    },
  ],
  leadership: [
    {
      title: "Community and Social Entrepreneurship (CASE) Program Scholarship Recipient",
      meta: "Amideast Education Abroad · Summer 2025",
      points: [
        "Selected for an 8-day guided program in Tunisia on civil society, civic engagement, and global justice through Tunisian and North African lenses.",
      ],
    },
    {
      title: "Campus Representative, Honors College Student Advisory Board",
      meta: "Lone Star College Houston-North · Fall 2024–Spring 2025",
      points: [
        "Met with the Associate Vice Chancellor of Honors and International Education and contributed student perspectives on Honors College programming.",
      ],
    },
    {
      title: "System Liaison Emeritus, Honors and International Education Emissary",
      meta: "Lone Star College · Spring 2025",
      points: [
        "Mentored the incoming System Liaison Emissary and helped promote Honors College and International Education programs.",
      ],
    },
    {
      title: "System Liaison, Honors and International Education Emissary",
      meta: "Lone Star College · Fall 2024",
      points: [
        "Promoted The Honors College, the Take Flight STEM Pathway, National Model UN, and scholarships across the system.",
      ],
    },
    {
      title: "Global Leadership Program",
      meta: "Lone Star College · Fall 2024–Spring 2025",
      points: [
        "Developed ethical, inclusive leadership skills through global leadership training, conference participation, and cultural engagement.",
      ],
    },
    {
      title: "Press Team Member and Statesman, Texas Boys State",
      meta: "The American Legion · Summer 2022",
      points: [
        "One of two students selected from Jersey Village High School; attended mock House of Representatives meetings and wrote website articles on current events.",
      ],
    },
  ],
  recognition: [
    {
      text: "Dean’s List, University of St. Thomas · Fall 2025 & Spring 2026",
      href: "https://catalog.stthom.edu/academic-honors-a0209",
    },
    {
      text: "HSI STEM (Dunn) Endowed Scholarship, University of St. Thomas · 2026",
      href: "https://stthom.academicworks.com/opportunities/6258",
    },
    {
      text: "Monaghan Excellence Scholarship, University of St. Thomas · 2025–27",
      href: "https://catalog.stthom.edu/scholarships-ugrd",
    },
    {
      text: "Amideast Education Abroad Scholarship, Community and Social Entrepreneurship (CASE) Program · 2025",
      href: "https://www.amideast.org/our-work/education-abroad-in-the-mena/abroad-programs/summer-programs/community-and-social-entrepreneurship",
    },
    {
      text: "Distinguished Global Scholar Study Abroad Scholarship, Lone Star College · 2025",
    },
    {
      text: "Distinguished Global Scholar Designation, Lone Star College · 2025",
      href: "https://www.lonestar.edu/college-departments/honors/37121.htm",
    },
    {
      text: "President’s List (all semesters), Lone Star College · 2023–25",
    },
    {
      text: "Global Scholar Award & Language Scholarship, Lone Star College · 2023–25",
      href: "https://www.lonestar.edu/multimedia/LSC%20Global%20Scholars.pdf",
    },
    {
      text: "Outstanding Delegate in Committee (UNESCO) & Outstanding Delegation, National Model United Nations–New York · 2024",
      href: "https://www.woodlandsonline.com/npps/story.cfm?nppage=78364",
    },
    {
      text: "6× Tournament Champion, Speech & Debate, Jersey Village High School",
    },
    {
      text: "2× Texas Forensic Association State Qualifier; 2023 Oral Interpretation Quarterfinalist",
      href: "https://myneighborhoodnews.com/cy-park-hs-student-wins-state-title-at-texas-forensic-association-competition",
    },
    {
      text: "2023 National Individual Events Tournament of Champions Qualifier, Program Oral Interpretation",
      href: "https://www.speechwire.com/c-public-entries.php?tournid=14215&groupingid=12",
    },
    {
      text: "National Speech & Debate Association Academic All-American · 2022",
    },
    {
      text: "Take Flight STEM Pathway, Rice University · 2024–25",
      href: "https://news.rice.edu/news/2024/take-flight-program-makes-four-year-stem-education-accessible-all-high-achieving-students",
    },
    {
      text: "Member, Phi Theta Kappa Honor Society · 2023",
      href: "https://www.ptk.org/why-join/faq/",
    },
    {
      text: "Micro-Credential in Environmental Data Science, Rice Environmental Data Academy (REDA) · 2025",
      href: "https://ral.rice.edu/spring-2025/community-college-students-participate-rice-data-science-program",
    },
    {
      segments: [
        "Google Data Analytics coursework (Google via Coursera): ",
        {
          text: "Foundations: Data, Data, Everywhere",
          href: "https://www.coursera.org/learn/foundations-data",
        },
        "; ",
        {
          text: "Ask Questions to Make Data-Driven Decisions",
          href: "https://www.coursera.org/learn/ask-questions-make-decisions",
        },
        "; ",
        {
          text: "Prepare Data for Exploration",
          href: "https://www.coursera.org/learn/data-preparation",
        },
        " · 2024",
      ],
    },
    {
      text: "OSHA 10-Hour Outreach Training · 2020",
      href: "https://www.osha.gov/training/outreach",
    },
  ],
  galleryIntro: "A visual archive of study abroad, conference, and community experiences.",
  gallery: [
    {
      id: "distinguished-global-scholar-study-abroad",
      title: "Distinguished Global Scholar Study Abroad — Ireland",
      meta: "Lone Star College · Ireland · 2025",
      description: "Moments from the Distinguished Global Scholar study abroad experience in Ireland.",
      relatedHash: "recognition",
      relatedLabel: "Distinguished Global Scholar Study Abroad Scholarship",
      photos: [
        {
          src: "assets/gallery/distinguished-global-scholar/group-selfie.jpg",
          alt: "Distinguished Global Scholars taking a group selfie outdoors",
          caption: "Traveling through Ireland with fellow Distinguished Global Scholars.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/sunset-group.jpg",
          alt: "Distinguished Global Scholars gathered together by the water at sunset",
          caption: "The group together on the Irish coast at sunset.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/city-group.jpg",
          alt: "Three Distinguished Global Scholars taking a photo while exploring the city",
          caption: "Exploring Ireland with fellow scholars.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/travel-portrait.jpg",
          alt: "Tung Vo posing outdoors during the study abroad trip",
          caption: "A portrait from the study abroad experience in Ireland.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/library-portrait.jpg",
          alt: "Tung Vo browsing books in a library",
          caption: "Exploring a local library in Ireland.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/bookshop.jpg",
          alt: "Shelves filled with books inside a bookshop",
          caption: "A bookshop visit during the Ireland trip.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/evening-street.jpg",
          alt: "A narrow street illuminated by warm orange light at dusk",
          caption: "An evening view in Ireland.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/coastal-fair.jpg",
          alt: "A Ferris wheel and fairground beside a coastal town",
          caption: "A coastal view from Ireland.",
        },
      ],
    },
    {
      id: "case-tunisia",
      title: "Community and Social Entrepreneurship (CASE) — Tunisia",
      meta: "Amideast Education Abroad · Tunis, Tunisia · Summer 2025",
      description: "An eight-day program connecting students with local peers and civil society organizations through discussions, tours, and community engagement.",
      relatedHash: "leadership",
      relatedLabel: "Community and Social Entrepreneurship (CASE) Program",
      photos: [
        {
          src: "assets/gallery/case-tunisia/evening-group.jpg",
          alt: "CASE participants taking a group photo during an evening in Tunisia",
          caption: "CASE participants together during an evening in Tunis.",
        },
        {
          src: "assets/gallery/case-tunisia/program-group.jpg",
          alt: "CASE participants and local peers posing together during a program visit",
          caption: "CASE participants and local peers during a program visit.",
        },
        {
          src: "assets/gallery/case-tunisia/cultural-workshop.jpg",
          alt: "CASE participants taking part in a hands-on cultural workshop",
          caption: "Taking part in a hands-on cultural workshop.",
        },
        {
          src: "assets/gallery/case-tunisia/medina-group.jpg",
          alt: "CASE participants gathered in a Tunisian medina",
          caption: "Exploring a medina with fellow CASE participants.",
        },
        {
          src: "assets/gallery/case-tunisia/group-portrait.jpg",
          alt: "Six CASE participants posing together outdoors in Tunisia",
          caption: "A group portrait during the Tunisia program.",
        },
        {
          src: "assets/gallery/case-tunisia/blue-door-portrait.jpg",
          alt: "Tung Vo posing in front of a traditional blue door in Tunisia",
          caption: "A portrait in front of a traditional blue door.",
        },
        {
          src: "assets/gallery/case-tunisia/street-mirror.jpg",
          alt: "CASE participants reflected in a convex street mirror",
          caption: "A group reflection while exploring Tunisia.",
        },
        {
          src: "assets/gallery/case-tunisia/sidi-bou-said-lane.jpg",
          alt: "A white-and-blue lane with flowering bougainvillea in Sidi Bou Said",
          caption: "A lane in Sidi Bou Said.",
        },
        {
          src: "assets/gallery/case-tunisia/evening-outing.jpg",
          alt: "CASE participants talking outside a restaurant at night",
          caption: "An evening outing with fellow participants.",
        },
        {
          src: "assets/gallery/case-tunisia/city-evening.jpg",
          alt: "A tree-lined boulevard in Tunis at dusk",
          caption: "Tunis at dusk.",
        },
        {
          src: "assets/gallery/case-tunisia/night-street.jpg",
          alt: "A lively Tunis street with cafés and illuminated lamps at night",
          caption: "An evening street scene in Tunis.",
        },
        {
          src: "assets/gallery/case-tunisia/skylight.jpg",
          alt: "Sunlight and geometric shadows beneath a glass skylight",
          caption: "Architecture and light during a program visit.",
        },
        {
          src: "assets/gallery/case-tunisia/bougainvillea.jpg",
          alt: "Bright bougainvillea flowering beneath a blue Tunisian sky",
          caption: "Bougainvillea in Tunisia.",
        },
      ],
    },
    {
      id: "national-model-un-new-york",
      title: "National Model United Nations–New York",
      meta: "New York City · 2024",
      description: "Competing at National Model UN–New York through UNESCO committee sessions, international collaboration, and connections with delegates from around the world.",
      relatedHash: "recognition",
      relatedLabel: "National Model UN awards and recognition",
      photos: [
        {
          src: "assets/gallery/nmun-new-york/committee-group.jpg",
          alt: "Delegates and staff gathered for a National Model UN UNESCO committee group photo",
          caption: "The UNESCO committee at National Model United Nations–New York.",
        },
        {
          src: "assets/gallery/nmun-new-york/committee-speech.jpg",
          alt: "Tung Vo speaking at a microphone beside a fellow delegate during committee",
          caption: "Speaking during a UNESCO committee session.",
        },
        {
          src: "assets/gallery/nmun-new-york/heic-5774.jpg",
          alt: "National Model UN delegates posing together with country and organization placards",
          caption: "Delegates together after a committee session.",
        },
        {
          src: "assets/gallery/nmun-new-york/delegate-group.jpg",
          alt: "Tung Vo posing with fellow National Model UN delegates",
          caption: "Connecting with fellow delegates during the conference.",
        },
        {
          src: "assets/gallery/nmun-new-york/international-delegates.jpg",
          alt: "Tung Vo with delegates from the Netherlands, Survival International, and Azerbaijan",
          caption: "Meeting delegates representing countries and organizations from around the world.",
        },
        {
          src: "assets/gallery/nmun-new-york/heic-8855.jpg",
          alt: "Four National Model UN participants holding Philippines and Survival International placards",
          caption: "A conference photo with fellow delegates.",
        },
        {
          src: "assets/gallery/nmun-new-york/serbia-delegate.jpg",
          alt: "Tung Vo posing with a delegate holding a Serbia placard",
          caption: "Meeting Serbia's delegate at National Model UN–New York.",
        },
        {
          src: "assets/gallery/nmun-new-york/committee-work-session.jpg",
          alt: "Delegates gathered around a table during a National Model UN working session",
          caption: "Collaborating during a committee working session.",
        },
        {
          src: "assets/gallery/nmun-new-york/delegate-selfie.jpg",
          alt: "National Model UN participants taking a group selfie",
          caption: "A conference selfie with fellow delegates.",
        },
        {
          src: "assets/gallery/nmun-new-york/times-square-selfie.jpg",
          alt: "National Model UN participants taking a selfie in Times Square",
          caption: "Exploring Times Square with fellow delegates.",
        },
        {
          src: "assets/gallery/nmun-new-york/heic-8110.jpg",
          alt: "Tung Vo and a fellow delegate taking a selfie at the Statue of Liberty",
          caption: "Visiting the Statue of Liberty during the New York trip.",
        },
        {
          src: "assets/gallery/nmun-new-york/new-york-public-library.jpg",
          alt: "A historic red-brick New York Public Library building beneath a blue sky",
          caption: "A New York Public Library branch.",
        },
        {
          src: "assets/gallery/nmun-new-york/manhattan-street.jpg",
          alt: "A Manhattan street lined with tall buildings and flags",
          caption: "A view of Manhattan during the conference trip.",
        },
      ],
    },
  ],
};
