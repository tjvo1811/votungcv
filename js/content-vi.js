/**
 * Vietnamese translations — language-polished and aligned with content-en.js.
 * See locales/TRANSLATION_AUDIT.md for side-by-side review and flagged terms.
 * English source of truth: content-en.js
 *
 * Title note: English “Dr.” → Vietnamese “Tiến sĩ” (standard academic form).
 */
window.SITE_CONTENT_VI = {
  lang: "vi",
  dir: "ltr",
  meta: {
    titleHome: "Võ Sơn Tùng",
    titleSection: "{section} · Võ Sơn Tùng",
    description: "Võ Sơn Tùng — nhà toán học và sinh viên nghiên cứu bậc đại học.",
    ogLocale: "vi_VN",
    ogLocaleAlternate: "en_US",
    canonicalPath: "/vi/",
    alternatePath: "/",
  },
  aria: {
    siteSections: "Các mục trên trang",
    language: "Ngôn ngữ",
  },
  langSwitch: {
    en: "English",
    vi: "Tiếng Việt",
  },
  nav: {
    research: "Nghiên cứu",
    publications: "Công bố khoa học",
    presentations: "Bài thuyết trình",
    leadership: "Hoạt động cộng đồng",
    recognition: "Thành tích",
    gallery: "Thư viện ảnh",
  },
  sections: {
    research: "Nghiên cứu",
    publications: "Công bố khoa học",
    presentations: "Bài thuyết trình",
    leadership: "Hoạt động cộng đồng",
    recognition: "Thành tích",
    gallery: "Thư viện ảnh",
  },
  ui: {
    resume: "resume",
    cv: "CV",
    viewPoster: "Xem poster (bằng tiếng Anh) →",
    viewSlides: "Xem slide (bằng tiếng Anh) →",
    viewConferencePoster: "Xem poster hội nghị (bằng tiếng Anh) →",
    readPaper: "Đọc bài viết (bằng tiếng Anh) →",
    readRelatedPaper: "Đọc bài liên quan (bằng tiếng Anh) →",
    backToGallery: "Quay lại thư viện ảnh",
    viewRelatedActivity: "Hoạt động liên quan",
    openImage: "Mở ảnh đầy đủ",
    image: "ảnh",
    images: "ảnh",
  },
  intro: {
    name: "Võ Sơn Tùng",
    paragraphs: [
      {
        type: "text",
        text: "Mối quan tâm nghiên cứu của tôi gồm tổ hợp, tối ưu hóa toán học, lý thuyết đồ thị và điện toán lượng tử.",
      },
      {
        type: "html",
        html: 'Mùa thu này, tôi sẽ tiếp tục làm việc với Tiến sĩ Mary Flagg tại <a href="https://stthom.edu/" target="_blank" rel="noopener noreferrer">University of St. Thomas</a> về competitive zero forcing. Mùa hè này, tôi là nghiên cứu viên của chương trình NSF REU tại <a href="https://www.uprp.edu/" target="_blank" rel="noopener noreferrer">University of Puerto Rico at Ponce</a>, nghiên cứu về tổ hợp.',
      },
      {
        type: "text",
        text: "Tôi đang theo học ngành Toán ứng dụng tại University of St. Thomas ở Houston và dự kiến tốt nghiệp năm 2028. Trước đó, tôi đã tốt nghiệp Lone Star College với bằng Honors Associate of Science (bằng cao đẳng Khoa học thuộc chương trình danh dự), đạt danh dự Summa Cum Laude, đồng thời là Distinguished Global Scholar với định hướng International Study.",
      },
      {
        type: "html",
        html: 'Bạn có thể kết nối với tôi trên <a href="https://www.linkedin.com/in/tung-vo-4728b7235" target="_blank" rel="noopener noreferrer">LinkedIn</a> hoặc liên hệ với tôi qua <a href="mailto:vo.tung@stthom.edu">email</a>.',
      },
      {
        type: "links",
        before: "Đây là ",
        mid: " và ",
        after: " bằng tiếng Anh của tôi.",
        resumeHref: "assets/Tung-Vo-Resume.pdf",
        cvHref: "assets/Tung-Vo-CV.pdf",
      },
    ],
  },
  research: [
    {
      title: "Định tuyến qubit trong tối ưu hóa mạch lượng tử",
      meta: "Rice University · Mùa xuân 2026–nay",
      points: [
        "Đang làm việc cùng trưởng dự án Saber Dinpazhouh và chủ nhiệm đề tài, Tiến sĩ Illya Hicks, về bài toán định tuyến qubit trong tối ưu hóa mạch lượng tử.",
        "Phát triển một phương pháp heuristic dựa trên quy hoạch nguyên để ánh xạ các qubit logic lên các qubit vật lý trong điều kiện ràng buộc của phần cứng, đồng thời giảm số cổng SWAP phải chèn vào.",
        "Đánh giá các phương pháp định tuyến bằng cách so sánh chúng với SABRE và TKET về số lượng cổng và độ sâu mạch.",
      ],
    },
    {
      title: "Competitive zero forcing",
      meta: "University of St. Thomas · Mùa thu 2025–nay",
      points: [
        "Nghiên cứu một phiên bản mở rộng dành cho hai người chơi của quy tắc đổi màu trong zero forcing cổ điển cùng Tiến sĩ Mary Flagg.",
        "Kết hợp lý thuyết đồ thị, độ liên thông đỉnh và mô hình hóa tính toán.",
      ],
      links: [{ href: "assets/research/USTPosterSpring26.pdf", labelKey: "viewConferencePoster" }],
    },
    {
      title: "Xếp hạng Fubini, hàm đỗ xe và hoán vị Cayley",
      meta: "University of Puerto Rico, Ponce · Mùa hè 2026",
      points: [
        "Chứng minh các kết quả về phép đếm và cấu trúc, đồng thời mô tả đặc trưng các phần giao của những họ đối tượng tổ hợp.",
        "Cùng các đồng tác giả xây dựng một bản thảo bài báo, với sự hỗ trợ của các phép đếm được thực hiện bằng Python.",
      ],
      links: [{ href: "assets/research/YMC2026_Inversion_Preserving_Bijection_Slides.pdf", labelKey: "viewSlides" }],
    },
    {
      title: "Chiến thuật tuyển quân và đào ngũ trong Chiến tranh Việt Nam",
      meta: "Lone Star College Honors College · 2024–25",
      points: [
        "Phân tích cách chiến thuật tuyển quân dựa trên hình thức bốc thăm nhập ngũ của Hoa Kỳ và chiến thuật tuyên truyền tuyển quân của Việt Cộng ảnh hưởng đến tỷ lệ đào ngũ của binh lính.",
        "Sử dụng các poster và hồ sơ quân dịch làm tư liệu sơ cấp.",
      ],
      links: [
        { href: "assets/research/Vietnam_War_Analysis.pdf", labelKey: "readPaper" },
        { href: "assets/research/Vietnam_War_IEB_Poster.pdf", labelKey: "viewConferencePoster" },
      ],
    },
    {
      title: "Ô nhiễm không khí và tuổi thọ",
      meta: "Lone Star College Honors College · 2024",
      points: [
        "So sánh Hoa Kỳ và Chad theo khung phân tích nghiên cứu trường hợp Most Similar System Design.",
        "Xác định điều kiện kinh tế–xã hội, tỷ lệ tử vong trẻ sơ sinh, khả năng tiếp cận dịch vụ y tế và đầu tư vào tái trồng rừng là những yếu tố gây nhiễu quan trọng.",
      ],
      links: [{ href: "assets/research/Air_Pollution_Analysis.pdf", labelKey: "readPaper" }],
    },
    {
      title: "Giao tiếp liên văn hóa và lãnh đạo",
      meta: "Lone Star College Honors College · 2024",
      points: [
        "Viết một bài tự dân tộc chí (autoethnography) về trải nghiệm tham gia National Model UN–New York.",
        "Sử dụng phép tam giác hóa (triangulation) và phân tích nội dung để khảo sát kỹ năng nói trước công chúng và năng lực lãnh đạo trong bối cảnh có đông đại biểu.",
      ],
      links: [{ href: "assets/research/NMUN_Research.pdf", labelKey: "readPaper" }],
    },
  ],
  publications: [
    {
      title: "Intersections of Cayley Permutations, Fubini Rankings, and Unit Interval Parking Functions",
      authors: "Eban Barrett, Melissa Beerbower, Jennifer Elder, Pamela E. Harris, Maritza Sanchez, Tung Vo và Cyrus Young",
      meta: "Bài báo nghiên cứu · Đang chuẩn bị · 2026",
    },
  ],
  presentations: [
    {
      title: "“An Inversion-Preserving Bijection Between Cayley Permutations and Fubini Rankings.”",
      meta: "Cùng Eban Barrett và Maritza Sanchez · Young Mathematicians Conference · The Ohio State University, Columbus, Ohio · 2026",
      metaDatetime: "2026",
    },
    {
      title: "“Competitive Zero Forcing: A Novel Two-Player Graph Coloring Game.”",
      meta: "Cùng Stephano Cotsoradis và Cole Rutherford · University of St. Thomas Annual Research Symposium · 2026",
      metaDatetime: "2026",
      action: { href: "assets/research/USTPosterSpring26.pdf", labelKey: "viewPoster" },
    },
    {
      title: "“A Systemic Approach to Understanding the Natural World.”",
      meta: "Rice Environmental Data Academy Poster Session và Spring Honors & International Education Conference · 2025",
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
      meta: "Fall Honors & International Education Conference và International Education Biennial Conference · 2024–25",
      action: { href: "assets/research/Vietnam_War_IEB_Poster.pdf", labelKey: "viewPoster" },
    },
    {
      title: "“Life Expectancy and Air Pollution: A Comparative Analysis of the United States and Chad.”",
      meta: "Spring Honors & International Education Conference · 2024",
      metaDatetime: "2024",
      action: { href: "assets/research/Air_Pollution_Analysis.pdf", labelKey: "readPaper" },
    },
    {
      title: "Thành viên tọa đàm tại National Model UN–New York.",
      meta: "Spring Honors & International Education Conference · 2024",
      metaDatetime: "2024",
      action: { href: "assets/research/NMUN_Research.pdf", labelKey: "readRelatedPaper" },
    },
  ],
  leadership: [
    {
      title: "Nhận học bổng tham gia chương trình Community and Social Entrepreneurship (CASE)",
      meta: "Amideast Education Abroad · Mùa hè 2025",
      points: [
        "Được chọn tham gia chương trình kéo dài 8 ngày có người hướng dẫn tại Tunisia, tập trung vào xã hội dân sự, hoạt động công dân và công lý toàn cầu qua lăng kính Tunisia và Bắc Phi.",
      ],
    },
    {
      title: "Campus Representative, Honors College Student Advisory Board",
      meta: "Lone Star College Houston-North · Mùa thu 2024–Mùa xuân 2025",
      points: [
        "Trao đổi với Associate Vice Chancellor of Honors and International Education và đóng góp góc nhìn của sinh viên về các chương trình của Honors College.",
      ],
    },
    {
      title: "System Liaison Emeritus, Honors and International Education Emissary",
      meta: "Lone Star College · Mùa xuân 2025",
      points: [
        "Hướng dẫn người mới đảm nhiệm vai trò System Liaison Emissary và hỗ trợ quảng bá các chương trình của Honors College và International Education.",
      ],
    },
    {
      title: "System Liaison, Honors and International Education Emissary",
      meta: "Lone Star College · Mùa thu 2024",
      points: [
        "Quảng bá The Honors College, chương trình Take Flight STEM Pathway, National Model UN và các học bổng trong toàn hệ thống.",
      ],
    },
    {
      title: "Global Leadership Program",
      meta: "Lone Star College · Mùa thu 2024–Mùa xuân 2025",
      points: [
        "Rèn luyện kỹ năng lãnh đạo có đạo đức và mang tính bao trùm thông qua các khóa đào tạo về lãnh đạo toàn cầu, tham dự hội nghị và giao lưu văn hóa.",
      ],
    },
    {
      title: "Thành viên Press Team và Statesman tại Texas Boys State",
      meta: "The American Legion · Mùa hè 2022",
      points: [
        "Là một trong hai học sinh được chọn từ Jersey Village High School; tham dự các phiên họp mô phỏng của House of Representatives và viết các bài trên website về các sự kiện thời sự.",
      ],
    },
  ],
  recognition: [
    {
      text: "Dean’s List, University of St. Thomas · Mùa thu 2025 & Mùa xuân 2026",
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
      text: "Học bổng Amideast Education Abroad, chương trình Community and Social Entrepreneurship (CASE) · 2025",
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
      text: "President’s List (tất cả các học kỳ), Lone Star College · 2023–25",
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
      text: "2× Texas Forensic Association State Qualifier; vào tứ kết Oral Interpretation năm 2023",
      href: "https://myneighborhoodnews.com/cy-park-hs-student-wins-state-title-at-texas-forensic-association-competition",
    },
    {
      text: "Vòng loại National Individual Events Tournament of Champions năm 2023, nội dung Program Oral Interpretation",
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
      text: "Thành viên Phi Theta Kappa Honor Society · 2023",
      href: "https://www.ptk.org/why-join/faq/",
    },
    {
      text: "Micro-Credential in Environmental Data Science, Rice Environmental Data Academy (REDA) · 2025",
      href: "https://ral.rice.edu/spring-2025/community-college-students-participate-rice-data-science-program",
    },
    {
      segments: [
        "Các khóa học Google Data Analytics (Google qua Coursera): ",
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
      text: "Đào tạo OSHA Outreach 10 giờ · 2020",
      href: "https://www.osha.gov/training/outreach",
    },
  ],
  galleryIntro: "Kho lưu trữ trực quan về trải nghiệm du học, hội nghị và hoạt động cộng đồng.",
  gallery: [
    {
      id: "distinguished-global-scholar-study-abroad",
      title: "Chuyến du học Distinguished Global Scholar — Ireland",
      meta: "Lone Star College · Ireland · 2025",
      description: "Những khoảnh khắc trong trải nghiệm du học Distinguished Global Scholar tại Ireland.",
      relatedHash: "recognition",
      relatedLabel: "Học bổng du học Distinguished Global Scholar",
      photos: [
        {
          src: "assets/gallery/distinguished-global-scholar/group-selfie.jpg",
          alt: "Các Distinguished Global Scholar chụp ảnh selfie nhóm ngoài trời",
          caption: "Khám phá Ireland cùng các Distinguished Global Scholar.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/sunset-group.jpg",
          alt: "Các Distinguished Global Scholar tụ họp bên bờ biển lúc hoàng hôn",
          caption: "Cả nhóm bên bờ biển Ireland lúc hoàng hôn.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/city-group.jpg",
          alt: "Ba Distinguished Global Scholar chụp ảnh khi khám phá thành phố",
          caption: "Khám phá Ireland cùng các học giả khác.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/travel-portrait.jpg",
          alt: "Võ Sơn Tùng chụp ảnh ngoài trời trong chuyến du học",
          caption: "Một bức chân dung trong trải nghiệm du học tại Ireland.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/library-portrait.jpg",
          alt: "Võ Sơn Tùng xem sách trong thư viện",
          caption: "Khám phá một thư viện địa phương tại Ireland.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/bookshop.jpg",
          alt: "Những kệ sách đầy ắp bên trong một hiệu sách",
          caption: "Ghé thăm một hiệu sách trong chuyến đi Ireland.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/evening-street.jpg",
          alt: "Một con phố hẹp được chiếu sáng bằng ánh cam ấm áp lúc chạng vạng",
          caption: "Khung cảnh buổi tối tại Ireland.",
        },
        {
          src: "assets/gallery/distinguished-global-scholar/coastal-fair.jpg",
          alt: "Vòng đu quay và khu vui chơi bên một thị trấn ven biển",
          caption: "Khung cảnh ven biển Ireland.",
        },
      ],
    },
    {
      id: "case-tunisia",
      title: "Community and Social Entrepreneurship (CASE) — Tunisia",
      meta: "Amideast Education Abroad · Tunis, Tunisia · Mùa hè 2025",
      description: "Chương trình kéo dài tám ngày kết nối sinh viên với các bạn đồng trang lứa và tổ chức xã hội dân sự địa phương qua thảo luận, tham quan và hoạt động cộng đồng.",
      relatedHash: "leadership",
      relatedLabel: "Chương trình Community and Social Entrepreneurship (CASE)",
      photos: [
        {
          src: "assets/gallery/case-tunisia/evening-group.jpg",
          alt: "Những người tham gia CASE chụp ảnh nhóm vào một buổi tối tại Tunisia",
          caption: "Những người tham gia CASE bên nhau vào một buổi tối tại Tunis.",
        },
        {
          src: "assets/gallery/case-tunisia/program-group.jpg",
          alt: "Những người tham gia CASE và các bạn địa phương chụp ảnh trong một chuyến thăm của chương trình",
          caption: "Những người tham gia CASE và các bạn địa phương trong một chuyến thăm của chương trình.",
        },
        {
          src: "assets/gallery/case-tunisia/cultural-workshop.jpg",
          alt: "Những người tham gia CASE trải nghiệm một hoạt động văn hóa thực hành",
          caption: "Tham gia một hoạt động văn hóa thực hành.",
        },
        {
          src: "assets/gallery/case-tunisia/medina-group.jpg",
          alt: "Những người tham gia CASE tụ họp trong một khu medina ở Tunisia",
          caption: "Khám phá một khu medina cùng các thành viên CASE.",
        },
        {
          src: "assets/gallery/case-tunisia/group-portrait.jpg",
          alt: "Sáu thành viên CASE chụp ảnh nhóm ngoài trời tại Tunisia",
          caption: "Ảnh nhóm trong chương trình tại Tunisia.",
        },
        {
          src: "assets/gallery/case-tunisia/blue-door-portrait.jpg",
          alt: "Võ Sơn Tùng chụp ảnh trước một cánh cửa xanh truyền thống tại Tunisia",
          caption: "Chụp ảnh trước một cánh cửa xanh truyền thống.",
        },
        {
          src: "assets/gallery/case-tunisia/street-mirror.jpg",
          alt: "Các thành viên CASE phản chiếu trong một gương cầu lồi trên phố",
          caption: "Ảnh phản chiếu của cả nhóm khi khám phá Tunisia.",
        },
        {
          src: "assets/gallery/case-tunisia/sidi-bou-said-lane.jpg",
          alt: "Con hẻm trắng xanh với hoa giấy tại Sidi Bou Said",
          caption: "Một con hẻm tại Sidi Bou Said.",
        },
        {
          src: "assets/gallery/case-tunisia/evening-outing.jpg",
          alt: "Các thành viên CASE trò chuyện bên ngoài một nhà hàng vào buổi tối",
          caption: "Một buổi tối cùng các thành viên trong chương trình.",
        },
        {
          src: "assets/gallery/case-tunisia/city-evening.jpg",
          alt: "Đại lộ rợp bóng cây tại Tunis lúc chạng vạng",
          caption: "Tunis lúc chạng vạng.",
        },
        {
          src: "assets/gallery/case-tunisia/night-street.jpg",
          alt: "Con phố sôi động với các quán cà phê và đèn đường tại Tunis vào ban đêm",
          caption: "Khung cảnh đường phố Tunis vào buổi tối.",
        },
        {
          src: "assets/gallery/case-tunisia/skylight.jpg",
          alt: "Ánh nắng và bóng hình học dưới mái kính",
          caption: "Kiến trúc và ánh sáng trong một chuyến thăm của chương trình.",
        },
        {
          src: "assets/gallery/case-tunisia/bougainvillea.jpg",
          alt: "Hoa giấy rực rỡ dưới bầu trời xanh Tunisia",
          caption: "Hoa giấy tại Tunisia.",
        },
      ],
    },
    {
      id: "national-model-un-new-york",
      title: "National Model United Nations–New York",
      meta: "Thành phố New York · 2024",
      description: "Tranh tài tại National Model UN–New York qua các phiên họp ủy ban UNESCO, hợp tác quốc tế và kết nối với đại biểu từ khắp nơi trên thế giới.",
      relatedHash: "recognition",
      relatedLabel: "Giải thưởng và ghi nhận tại National Model UN",
      photos: [
        {
          src: "assets/gallery/nmun-new-york/committee-group.jpg",
          alt: "Các đại biểu và ban tổ chức chụp ảnh nhóm của ủy ban UNESCO tại National Model UN",
          caption: "Ủy ban UNESCO tại National Model United Nations–New York.",
        },
        {
          src: "assets/gallery/nmun-new-york/committee-speech.jpg",
          alt: "Võ Sơn Tùng phát biểu trước micro bên cạnh một đại biểu trong phiên họp",
          caption: "Phát biểu trong một phiên họp của ủy ban UNESCO.",
        },
        {
          src: "assets/gallery/nmun-new-york/heic-5774.jpg",
          alt: "Các đại biểu National Model UN chụp ảnh cùng bảng tên quốc gia và tổ chức",
          caption: "Các đại biểu bên nhau sau một phiên họp ủy ban.",
        },
        {
          src: "assets/gallery/nmun-new-york/delegate-group.jpg",
          alt: "Võ Sơn Tùng chụp ảnh cùng các đại biểu National Model UN",
          caption: "Kết nối với các đại biểu khác trong hội nghị.",
        },
        {
          src: "assets/gallery/nmun-new-york/international-delegates.jpg",
          alt: "Võ Sơn Tùng cùng các đại biểu Hà Lan, Survival International và Azerbaijan",
          caption: "Gặp gỡ các đại biểu đại diện cho nhiều quốc gia và tổ chức trên thế giới.",
        },
        {
          src: "assets/gallery/nmun-new-york/heic-8855.jpg",
          alt: "Bốn thành viên National Model UN cầm bảng Philippines và Survival International",
          caption: "Chụp ảnh cùng các đại biểu tại hội nghị.",
        },
        {
          src: "assets/gallery/nmun-new-york/serbia-delegate.jpg",
          alt: "Võ Sơn Tùng chụp ảnh cùng một đại biểu cầm bảng Serbia",
          caption: "Gặp gỡ đại biểu Serbia tại National Model UN–New York.",
        },
        {
          src: "assets/gallery/nmun-new-york/committee-work-session.jpg",
          alt: "Các đại biểu tụ họp quanh bàn trong một phiên làm việc tại National Model UN",
          caption: "Hợp tác trong một phiên làm việc của ủy ban.",
        },
        {
          src: "assets/gallery/nmun-new-york/delegate-selfie.jpg",
          alt: "Các thành viên National Model UN chụp ảnh selfie nhóm",
          caption: "Ảnh selfie tại hội nghị cùng các đại biểu.",
        },
        {
          src: "assets/gallery/nmun-new-york/times-square-selfie.jpg",
          alt: "Các thành viên National Model UN chụp ảnh selfie tại Times Square",
          caption: "Khám phá Times Square cùng các đại biểu.",
        },
        {
          src: "assets/gallery/nmun-new-york/heic-8110.jpg",
          alt: "Võ Sơn Tùng và một đại biểu chụp ảnh selfie tại Tượng Nữ thần Tự do",
          caption: "Tham quan Tượng Nữ thần Tự do trong chuyến đi New York.",
        },
        {
          src: "assets/gallery/nmun-new-york/new-york-public-library.jpg",
          alt: "Tòa nhà gạch đỏ lịch sử của Thư viện Công cộng New York dưới bầu trời xanh",
          caption: "Một chi nhánh của Thư viện Công cộng New York.",
        },
        {
          src: "assets/gallery/nmun-new-york/manhattan-street.jpg",
          alt: "Một con phố Manhattan với các tòa nhà cao tầng và cờ",
          caption: "Khung cảnh Manhattan trong chuyến đi hội nghị.",
        },
      ],
    },
  ],
};
