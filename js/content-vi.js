/**
 * Proposed Vietnamese translations — pending approval.
 * See locales/TRANSLATION_AUDIT.md for side-by-side review and flagged terms.
 * English source of truth: content-en.js
 *
 * Title note: English “Dr.” → Vietnamese “Tiến sĩ” (standard academic form).
 */
window.SITE_CONTENT_VI = {
  lang: "vi",
  dir: "ltr",
  meta: {
    titleHome: "Tung (TJ) Vo",
    titleSection: "{section} · Tung (TJ) Vo",
    description: "Tung (TJ) Vo — nhà toán học và sinh viên nghiên cứu bậc đại học.",
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
    presentations: "Thuyết trình",
    leadership: "Lãnh đạo",
    recognition: "Ghi nhận",
  },
  sections: {
    research: "Nghiên cứu",
    presentations: "Thuyết trình",
    leadership: "Lãnh đạo",
    recognition: "Ghi nhận",
  },
  ui: {
    resume: "resume (tiếng Anh)",
    cv: "CV (tiếng Anh)",
    viewPoster: "Xem poster → (tiếng Anh)",
    viewConferencePoster: "Xem poster hội nghị → (tiếng Anh)",
    readPaper: "Đọc bài viết → (tiếng Anh)",
    readRelatedPaper: "Đọc bài liên quan → (tiếng Anh)",
  },
  intro: {
    name: "Tung (TJ) Vo",
    paragraphs: [
      {
        type: "text",
        text: "Tôi quan tâm đến các hướng nghiên cứu về tổ hợp, tối ưu hóa toán học, lý thuyết đồ thị và điện toán lượng tử.",
      },
      {
        type: "html",
        html: 'Mùa thu này, tôi sẽ tiếp tục làm việc với Tiến sĩ Mary Flagg tại <a href="https://stthom.edu/" target="_blank" rel="noreferrer">University of St. Thomas</a> về mô hình competitive zero forcing. Mùa hè này, tôi là nghiên cứu viên trong chương trình NSF REU (chương trình nghiên cứu hè dành cho sinh viên đại học do U.S. National Science Foundation tài trợ) tại <a href="https://www.uprp.edu/" target="_blank" rel="noreferrer">University of Puerto Rico at Ponce</a>, cùng Tiến sĩ Pamela Harris và Tiến sĩ Fernando Piñero nghiên cứu xếp hạng Fubini, hàm đỗ xe và hoán vị Cayley. Bản thảo đang soạn của chúng tôi mô tả đặc trưng và đếm các giao giữa những họ đối tượng này dựa trên hành vi của các phần tử tăng yếu.',
      },
      {
        type: "text",
        text: "Tôi đang theo học ngành Toán ứng dụng tại University of St. Thomas ở Houston và dự kiến tốt nghiệp năm 2028. Trước đó, tôi đã nhận bằng Honors Associate of Science (bằng cao đẳng Khoa học thuộc chương trình danh dự), tốt nghiệp với mức danh dự cao nhất (Summa Cum Laude) từ Lone Star College, với danh hiệu Distinguished Global Scholar và chuyên hướng International Study.",
      },
      {
        type: "html",
        html: 'Bạn có thể kết nối với tôi trên <a href="https://www.linkedin.com/in/tung-vo-4728b7235" target="_blank" rel="noreferrer">LinkedIn</a> hoặc gửi <a href="mailto:vo.tung@stthom.edu">email</a> cho tôi.',
      },
      {
        type: "links",
        before: "Đây là ",
        mid: " và ",
        after: " của tôi.",
        resumeHref: "assets/Tung-Vo-Resume.pdf",
        cvHref: "assets/Tung-Vo-CV.pdf",
      },
    ],
  },
  research: [
    {
      title: "Định tuyến qubit cho tối ưu hóa mạch lượng tử",
      meta: "Rice University · Mùa xuân 2026–nay",
      points: [
        "Đang làm việc với trưởng dự án Saber Dinpazhouh và chủ nhiệm đề tài (PI) Tiến sĩ Illya Hicks về bài toán định tuyến qubit trong tối ưu hóa mạch lượng tử.",
        "Xây dựng một phương pháp heuristic dựa trên quy hoạch nguyên để ánh xạ các qubit logic sang các qubit vật lý chịu ràng buộc của phần cứng, đồng thời giảm thiểu số cổng SWAP cần chèn thêm.",
        "So sánh các phương pháp định tuyến với SABRE và TKET theo số lượng cổng và độ sâu mạch.",
      ],
    },
    {
      title: "Competitive zero forcing",
      meta: "University of St. Thomas · Mùa thu 2025–nay",
      points: [
        "Nghiên cứu một mở rộng hai người chơi của quy tắc đổi màu zero forcing cổ điển cùng Tiến sĩ Mary Flagg.",
        "Kết hợp lý thuyết đồ thị, độ liên thông đỉnh và mô hình hóa tính toán.",
      ],
      links: [{ href: "assets/research/USTPosterSpring26.pdf", labelKey: "viewConferencePoster" }],
    },
    {
      title: "Xếp hạng Fubini, hàm đỗ xe và hoán vị Cayley",
      meta: "University of Puerto Rico, Ponce · Mùa hè 2026",
      points: [
        "Chứng minh các kết quả về phép đếm và cấu trúc, đồng thời mô tả đặc trưng các giao giữa những họ đối tượng tổ hợp.",
        "Đồng tác giả một bản thảo bài báo, với sự hỗ trợ của phép đếm bằng Python.",
      ],
    },
    {
      title: "Chiến thuật tuyển quân và đào ngũ trong Chiến tranh Việt Nam",
      meta: "Lone Star College Honors College · 2024–25",
      points: [
        "Phân tích cách chiến thuật tuyển quân theo hình thức xổ số nhập ngũ của Hoa Kỳ và tuyên truyền tuyển quân của Việt Cộng định hình tỷ lệ đào ngũ của binh sĩ.",
        "Sử dụng poster và hồ sơ nhập ngũ làm nguồn tư liệu sơ cấp.",
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
        "So sánh Hoa Kỳ và Chad theo khung nghiên cứu tình huống Most Similar System Design.",
        "Xác định tình trạng kinh tế–xã hội, tỷ lệ tử vong trẻ sơ sinh, khả năng tiếp cận dịch vụ y tế và đầu tư vào tái trồng rừng là những yếu tố gây nhiễu quan trọng.",
      ],
      links: [{ href: "assets/research/Air_Pollution_Analysis.pdf", labelKey: "readPaper" }],
    },
    {
      title: "Giao tiếp liên văn hóa và lãnh đạo",
      meta: "Lone Star College Honors College · 2024",
      points: [
        "Viết một nghiên cứu tự dân tộc chí (autoethnography) về trải nghiệm tham gia National Model UN–New York.",
        "Sử dụng triangulation và phân tích nội dung để khảo sát kỹ năng nói trước công chúng và năng lực lãnh đạo trong môi trường đoàn đại biểu đông người.",
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
      title: "Thành viên panel, National Model UN–New York.",
      meta: "Spring Honors & International Education Conference · 2024",
      metaDatetime: "2024",
      action: { href: "assets/research/NMUN_Research.pdf", labelKey: "readRelatedPaper" },
    },
  ],
  leadership: [
    {
      title: "Finalist, Community, Action, and Social Entrepreneurship",
      meta: "Amideast Education Abroad Connect · Mùa hè 2025",
      points: [
        "Được chọn tham gia chương trình hướng dẫn kéo dài 8 ngày tại Tunisia về xã hội dân sự, sự tham gia đời sống công dân và công lý toàn cầu dưới góc nhìn của Tunisia và Bắc Phi.",
      ],
    },
    {
      title: "Campus Representative, Honors College Student Advisory Board",
      meta: "Lone Star College Houston-North · Mùa thu 2024–Mùa xuân 2025",
      points: [
        "Gặp gỡ Associate Vice Chancellor of Honors and International Education và đóng góp góc nhìn của sinh viên về các chương trình của Honors College.",
      ],
    },
    {
      title: "System Liaison Emeritus, Honors and International Education Emissary",
      meta: "Lone Star College · Mùa xuân 2025",
      points: [
        "Hướng dẫn System Liaison Emissary mới nhận nhiệm và hỗ trợ quảng bá các chương trình Honors College cùng International Education.",
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
        "Rèn luyện kỹ năng lãnh đạo có đạo đức và mang tính bao trùm thông qua đào tạo lãnh đạo toàn cầu, tham dự hội nghị và giao lưu văn hóa.",
      ],
    },
    {
      title: "Thành viên Press Team và Statesman, Texas Boys State",
      meta: "The American Legion · Mùa hè 2022",
      points: [
        "Là một trong hai học sinh được chọn từ Jersey Village High School; tham dự các phiên họp mô phỏng House of Representatives và viết bài trên website về các sự kiện thời sự.",
      ],
    },
  ],
  recognition: [
    "Dean’s List, University of St. Thomas · 2025–26",
    "Hispanic-Serving Institution STEM (Dunn) Endowed Scholarship · 2026",
    "Monaghan Excellence Scholarship · 2025–27",
    "Finalist, Community, Action, and Social Entrepreneurship, Amideast Education Abroad Connect · 2025",
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
