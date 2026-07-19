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
    presentations: "Presentations",
    leadership: "Leadership",
    recognition: "Recognition",
  },
  sections: {
    research: "Research",
    presentations: "Presentations",
    leadership: "Leadership",
    recognition: "Recognition",
  },
  ui: {
    resume: "resume",
    cv: "CV",
    viewPoster: "View poster →",
    viewConferencePoster: "View conference poster →",
    readPaper: "Read paper →",
    readRelatedPaper: "Read related paper →",
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
  presentations: [
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
      href: "https://citylifestyle.com/articles/falcon-internship-program",
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
};
