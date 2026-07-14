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
    presentations: "Bài thuyết trình",
    leadership: "Lãnh đạo",
    recognition: "Thành tích",
  },
  sections: {
    research: "Nghiên cứu",
    presentations: "Bài thuyết trình",
    leadership: "Lãnh đạo",
    recognition: "Thành tích",
  },
  ui: {
    resume: "resume",
    cv: "CV",
    viewPoster: "Xem poster (bằng tiếng Anh) →",
    viewConferencePoster: "Xem poster hội nghị (bằng tiếng Anh) →",
    readPaper: "Đọc bài viết (bằng tiếng Anh) →",
    readRelatedPaper: "Đọc bài liên quan (bằng tiếng Anh) →",
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
        html: 'Mùa thu này, tôi sẽ tiếp tục làm việc với Tiến sĩ Mary Flagg tại <a href="https://stthom.edu/" target="_blank" rel="noreferrer">University of St. Thomas</a> về competitive zero forcing. Mùa hè này, tôi là nghiên cứu viên của chương trình NSF REU (chương trình nghiên cứu hè dành cho sinh viên đại học do Quỹ Khoa học Quốc gia Hoa Kỳ tài trợ) tại <a href="https://www.uprp.edu/" target="_blank" rel="noreferrer">University of Puerto Rico at Ponce</a>, cùng Tiến sĩ Pamela Harris và Tiến sĩ Fernando Piñero nghiên cứu về xếp hạng Fubini, hàm đỗ xe và hoán vị Cayley. Bản thảo chúng tôi đang hoàn thiện mô tả đặc trưng và đếm các phần giao của những họ đối tượng này thông qua hành vi của các phần tử tăng yếu.',
      },
      {
        type: "text",
        text: "Tôi đang theo học ngành Toán ứng dụng tại University of St. Thomas ở Houston và dự kiến tốt nghiệp năm 2028. Trước đó, tôi đã tốt nghiệp Lone Star College với bằng Honors Associate of Science (bằng cao đẳng Khoa học thuộc chương trình danh dự), đạt danh dự Summa Cum Laude, đồng thời là Distinguished Global Scholar với định hướng International Study.",
      },
      {
        type: "html",
        html: 'Bạn có thể kết nối với tôi trên <a href="https://www.linkedin.com/in/tung-vo-4728b7235" target="_blank" rel="noreferrer">LinkedIn</a> hoặc liên hệ với tôi qua <a href="mailto:vo.tung@stthom.edu">email</a>.',
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
  presentations: [
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
      title: "Vào vòng chung kết chương trình Community, Action, and Social Entrepreneurship",
      meta: "Amideast Education Abroad Connect · Mùa hè 2025",
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
        "Quảng bá The Honors College, Rice University Take Flight, National Model UN và các học bổng trong toàn hệ thống.",
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
    "Dean’s List, University of St. Thomas · 2025–26",
    "Hispanic-Serving Institution STEM (Dunn) Endowed Scholarship · 2026",
    "Monaghan Excellence Scholarship · 2025–27",
    "Vào vòng chung kết chương trình Community, Action, and Social Entrepreneurship, Amideast Education Abroad Connect · 2025",
    "Distinguished Global Scholar Study Abroad Scholarship, Lone Star College · 2025",
    "Distinguished Global Scholar Award, Lone Star College · 2024–25",
    "President’s List, Lone Star College · 2023–25",
    "Global Scholar Award & Language Scholarship, Lone Star College · 2023–25",
    "Best in Committee & Outstanding Delegation, National Model UN · 2024",
    "6× Tournament Champion, Speech & Debate, Jersey Village High School",
    "2× Texas Forensic Association State Qualifier; TFA Quarterfinalist",
    "National Individual Events Tournament of Champions Qualifier · Speech & Debate",
    "National Speech & Debate Association Academic All-American · 2022",
    "Rice University Take Flight Program · 2024–25",
    "Phi Theta Kappa Honor Society · 2023",
    "Environmental Data Science Academy Micro-Credential, Rice Glasscock School · 2025",
    "Google Data Analytics: Foundations; Ask Questions to Make Data-Driven Decisions; Prepare Data for Exploration · Coursera · 2024",
    "OSHA 10 · 2020",
  ],
};
