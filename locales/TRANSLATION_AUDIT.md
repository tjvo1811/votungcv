# Vietnamese translation audit (pending your approval)

**Status:** PROPOSED — not finalized until you approve.

**Process:** Pass 1 (natural Vietnamese) → Pass 2 (line-by-line accuracy check against English).

**Convention:** English is the source of truth (`js/content-en.js`). Vietnamese lives in `js/content-vi.js`.

For each entry: **EN** = English source · **VI** = proposed Vietnamese · **Notes** = flags / rationale.

---

## Meta / SEO / UI chrome

| Key | EN | VI | Notes |
|---|---|---|---|
| meta.description | Tung (TJ) Vo — mathematician and undergraduate researcher. | Tung (TJ) Vo — nhà toán học và sinh viên nghiên cứu bậc đại học. | Descriptive; not a degree title. |
| title.Dr | Dr. | Tiến sĩ | Standard Vietnamese academic title (not “Tiến Sĩ”). Abbreviation: TS. |
| meta.titleHome | Tung (TJ) Vo | Tung (TJ) Vo | Unchanged. |
| meta.titleSection | {Section} · Tung (TJ) Vo | {Section} · Tung (TJ) Vo | Section name localized. |
| meta.ogLocale | en_US | vi_VN | |
| aria.siteSections | Site sections | Các mục trên trang | |
| aria.language | Language | Ngôn ngữ | |
| nav.research | Research | Nghiên cứu | |
| nav.presentations | Presentations | Thuyết trình | Academic conference sense. |
| nav.leadership | Leadership | Lãnh đạo | |
| nav.recognition | Recognition | Ghi nhận | |
| lang.en | English | English | Label stays English. |
| lang.vi | Tiếng Việt | Tiếng Việt | |
| ui.resume | resume | resume (tiếng Anh) | File is English. |
| ui.cv | CV | CV (tiếng Anh) | File is English. |
| ui.viewPoster | View poster → | Xem poster → (tiếng Anh) | PDF is English. |
| ui.viewConferencePoster | View conference poster → | Xem poster hội nghị → (tiếng Anh) | |
| ui.readPaper | Read paper → | Đọc bài viết → (tiếng Anh) | |
| ui.readRelatedPaper | Read related paper → | Đọc bài liên quan → (tiếng Anh) | |
| date.present | present | nay | In ranges: “2026–present” → “2026–nay”. |
| date.spring | Spring | Mùa xuân | |
| date.fall | Fall | Mùa thu | |
| date.summer | Summer | Mùa hè | |

---

## Homepage introduction

### Intro ¶1
- **EN:** My research interests are combinatorics, mathematical optimization, graph theory, and quantum computing.
- **VI:** Tôi quan tâm đến các hướng nghiên cứu về tổ hợp, tối ưu hóa toán học, lý thuyết đồ thị và điện toán lượng tử.
- **Notes:** Preferred terminology; slightly more natural word order than literal “Các hướng nghiên cứu tôi quan tâm gồm…”.

### Intro ¶2
- **EN:** This fall, I will continue working with Dr. Mary Flagg at the University of St. Thomas on competitive zero forcing. This summer, I am an NSF REU fellow at the University of Puerto Rico at Ponce, studying Fubini rankings, parking functions, and Cayley permutations with Dr. Pamela Harris and Dr. Fernando Piñero. Our working draft characterizes and enumerates intersections among these families through the behavior of their weakly increasing elements.
- **VI:** Mùa thu này, tôi sẽ tiếp tục làm việc với Tiến sĩ Mary Flagg tại University of St. Thomas về mô hình competitive zero forcing. Mùa hè này, tôi là nghiên cứu viên trong chương trình NSF REU (chương trình nghiên cứu hè dành cho sinh viên đại học do U.S. National Science Foundation tài trợ) tại University of Puerto Rico at Ponce, cùng Tiến sĩ Pamela Harris và Tiến sĩ Fernando Piñero nghiên cứu xếp hạng Fubini, hàm đỗ xe và hoán vị Cayley. Bản thảo đang soạn của chúng tôi mô tả đặc trưng và đếm các giao giữa những họ đối tượng này dựa trên hành vi của các phần tử tăng yếu.
- **Notes:** “Dr.” → “Tiến sĩ”; NSF REU gloss on first mention; “competitive zero forcing” retained.

### Intro ¶3
- **EN:** I study Applied Mathematics at the University of St. Thomas in Houston, graduating in 2028. I previously earned an Honors Associate of Science, Summa Cum Laude, from Lone Star College as a Distinguished Global Scholar with a concentration in International Study.
- **VI:** Tôi đang theo học ngành Toán ứng dụng tại University of St. Thomas ở Houston và dự kiến tốt nghiệp năm 2028. Trước đó, tôi đã nhận bằng Honors Associate of Science (bằng cao đẳng Khoa học thuộc chương trình danh dự), tốt nghiệp với mức danh dự cao nhất (Summa Cum Laude) từ Lone Star College, với danh hiệu Distinguished Global Scholar và chuyên hướng International Study.
- **Notes:** Official degree name kept in English; parenthetical gloss only: Associate of Science → cao đẳng Khoa học; Honors → chương trình danh dự. FLAG: “chuyên hướng International Study”.

### Intro ¶4
- **EN:** You can find me on LinkedIn or reach me by email.
- **VI:** Bạn có thể kết nối với tôi trên LinkedIn hoặc gửi email cho tôi.
- **Notes:** More natural contact phrasing.

### Intro ¶5
- **EN:** Here are my resume and CV.
- **VI:** Đây là resume (tiếng Anh) và CV (tiếng Anh) của tôi.
- **Notes:** Files remain English; labeled explicitly.

---

## Research

### R1 — Qubit routing for quantum circuit optimization
- **Title EN:** Qubit routing for quantum circuit optimization
- **Title VI:** Định tuyến qubit cho tối ưu hóa mạch lượng tử
- **Meta EN:** Rice University · Spring 2026–present
- **Meta VI:** Rice University · Mùa xuân 2026–nay
- **Bullet EN:** Working with project lead Saber Dinpazhouh and PI Dr. Illya Hicks on the qubit routing problem in quantum circuit optimization.
- **Bullet VI:** Đang làm việc với trưởng dự án Saber Dinpazhouh và chủ nhiệm đề tài (PI) Tiến sĩ Illya Hicks về bài toán định tuyến qubit trong tối ưu hóa mạch lượng tử.
- **Notes:** “Dr.” → “Tiến sĩ”; “PI” glossed as “chủ nhiệm đề tài (PI)”.
- **Bullet EN:** Designed an integer-programming heuristic that maps logical qubits to hardware-constrained physical qubits while minimizing inserted SWAP gates.
- **Bullet VI:** Xây dựng một phương pháp heuristic dựa trên quy hoạch nguyên để ánh xạ các qubit logic sang các qubit vật lý chịu ràng buộc của phần cứng, đồng thời giảm thiểu số cổng SWAP cần chèn thêm.
- **Notes:** Preferred technical vocabulary.
- **Bullet EN:** Benchmarked routing methods against SABRE and TKET on gate count and circuit depth.
- **Bullet VI:** So sánh các phương pháp định tuyến với SABRE và TKET theo số lượng cổng và độ sâu mạch.
- **Notes:** SABRE/TKET unchanged.

### R2 — Competitive zero forcing
- **Title EN:** Competitive zero forcing
- **Title VI:** Competitive zero forcing
- **Notes:** Specialized term retained as title.
- **Meta EN:** University of St. Thomas · Fall 2025–present
- **Meta VI:** University of St. Thomas · Mùa thu 2025–nay
- **Bullet EN:** Studying a two-player extension of the classical zero-forcing color-change rule with Dr. Mary Flagg.
- **Bullet VI:** Nghiên cứu một mở rộng hai người chơi của quy tắc đổi màu zero forcing cổ điển cùng Tiến sĩ Mary Flagg.
- **Bullet EN:** Brings together graph theory, vertex connectivity, and computational modeling.
- **Bullet VI:** Kết hợp lý thuyết đồ thị, độ liên thông đỉnh và mô hình hóa tính toán.
- **Link:** View conference poster → (tiếng Anh)

### R3 — Fubini rankings, parking functions, and Cayley permutations
- **Title EN:** Fubini rankings, parking functions, and Cayley permutations
- **Title VI:** Xếp hạng Fubini, hàm đỗ xe và hoán vị Cayley
- **Meta EN:** University of Puerto Rico, Ponce · Summer 2026
- **Meta VI:** University of Puerto Rico, Ponce · Mùa hè 2026
- **Bullet EN:** Proved enumerative and structural results and characterized intersections among combinatorial families.
- **Bullet VI:** Chứng minh các kết quả về phép đếm và cấu trúc, đồng thời mô tả đặc trưng các giao giữa những họ đối tượng tổ hợp.
- **Notes:** Matches your style example.
- **Bullet EN:** Co-authored an article draft supported by Python enumeration.
- **Bullet VI:** Đồng tác giả một bản thảo bài báo, với sự hỗ trợ của phép đếm bằng Python.
- **Notes:** Python unchanged.

### R4 — Recruitment tactics and desertion during the Vietnam War
- **Title EN:** Recruitment tactics and desertion during the Vietnam War
- **Title VI:** Chiến thuật tuyển quân và đào ngũ trong Chiến tranh Việt Nam
- **Meta EN:** Lone Star College Honors College · 2024–25
- **Meta VI:** Lone Star College Honors College · 2024–25
- **Notes:** Honors College kept in English.
- **Bullet EN:** Examined how U.S. lottery-draft and Viet Cong propaganda recruitment tactics shaped soldier desertion rates.
- **Bullet VI:** Phân tích cách chiến thuật tuyển quân theo hình thức xổ số nhập ngũ của Hoa Kỳ và tuyên truyền tuyển quân của Việt Cộng định hình tỷ lệ đào ngũ của binh sĩ.
- **Notes:** FLAG: “lottery-draft” → “xổ số nhập ngũ”. “Viet Cong” → “Việt Cộng”.
- **Bullet EN:** Used primary-source posters and draft records.
- **Bullet VI:** Sử dụng poster và hồ sơ nhập ngũ làm nguồn tư liệu sơ cấp.
- **Link:** Read paper / View conference poster (tiếng Anh)

### R5 — Air pollution and life expectancy
- **Title EN:** Air pollution and life expectancy
- **Title VI:** Ô nhiễm không khí và tuổi thọ
- **Meta EN:** Lone Star College Honors College · 2024
- **Meta VI:** Lone Star College Honors College · 2024
- **Bullet EN:** Compared the United States and Chad using a Most Similar System Design case-study framework.
- **Bullet VI:** So sánh Hoa Kỳ và Chad theo khung nghiên cứu tình huống Most Similar System Design.
- **Notes:** Method name kept in English.
- **Bullet EN:** Identified socioeconomic status, infant mortality, healthcare access, and reforestation investment as important confounding factors.
- **Bullet VI:** Xác định tình trạng kinh tế–xã hội, tỷ lệ tử vong trẻ sơ sinh, khả năng tiếp cận dịch vụ y tế và đầu tư vào tái trồng rừng là những yếu tố gây nhiễu quan trọng.
- **Link:** Read paper (tiếng Anh)

### R6 — Intercultural communication and leadership
- **Title EN:** Intercultural communication and leadership
- **Title VI:** Giao tiếp liên văn hóa và lãnh đạo
- **Meta EN:** Lone Star College Honors College · 2024
- **Meta VI:** Lone Star College Honors College · 2024
- **Bullet EN:** Authored an autoethnography of competing at National Model UN–New York.
- **Bullet VI:** Viết một nghiên cứu tự dân tộc chí (autoethnography) về trải nghiệm tham gia National Model UN–New York.
- **Notes:** Preferred term + English on first appearance.
- **Bullet EN:** Used triangulation and content analysis to examine public speaking and leadership in large delegate settings.
- **Bullet VI:** Sử dụng triangulation và phân tích nội dung để khảo sát kỹ năng nói trước công chúng và năng lực lãnh đạo trong môi trường đoàn đại biểu đông người.
- **Notes:** FLAG: “triangulation” kept in English.
- **Link:** Read paper (tiếng Anh)

---

## Presentations

Paper/talk titles stay in English (rule 8). Meta and actions localized.

### P1
- **Title:** “Competitive Zero Forcing: A Novel Two-Player Graph Coloring Game.” *(EN unchanged)*
- **Meta EN:** With Stephano Cotsoradis and Cole Rutherford · University of St. Thomas Annual Research Symposium · 2026
- **Meta VI:** Cùng Stephano Cotsoradis và Cole Rutherford · University of St. Thomas Annual Research Symposium · 2026
- **Action:** Xem poster → (tiếng Anh)

### P2
- **Title:** “A Systemic Approach to Understanding the Natural World.” *(EN unchanged)*
- **Meta EN:** Rice Environmental Data Academy Poster Session and Spring Honors & International Education Conference · 2025
- **Meta VI:** Rice Environmental Data Academy Poster Session và Spring Honors & International Education Conference · 2025
- **Notes:** Official event names kept; “and” → “và”.

### P3
- **Title:** “The Fortunes of War or the Luck of the Draw: Recruitment Tactics and Desertion in the Vietnam War.” *(EN unchanged)*
- **Meta EN:** World History Association of Texas Annual Conference · 2025
- **Meta VI:** World History Association of Texas Annual Conference · 2025

### P4
- **Title:** (same as P3)
- **Meta EN:** Fall Honors & International Education Conference and International Education Biennial Conference · 2024–25
- **Meta VI:** Fall Honors & International Education Conference và International Education Biennial Conference · 2024–25

### P5
- **Title:** “Life Expectancy and Air Pollution: A Comparative Analysis of the United States and Chad.” *(EN unchanged)*
- **Meta EN:** Spring Honors & International Education Conference · 2024
- **Meta VI:** Spring Honors & International Education Conference · 2024

### P6
- **Title EN:** Panelist, National Model UN–New York.
- **Title VI:** Thành viên panel, National Model UN–New York.
- **Notes:** “Panelist” → “Thành viên panel” (more accurate than “Diễn giả panel”).
- **Meta EN/VI:** Spring Honors & International Education Conference · 2024
- **Action:** Đọc bài liên quan → (tiếng Anh)

---

## Leadership

### L1
- **Title EN:** Community, Action, and Social Entrepreneurship Finalist
- **Title VI:** Finalist, Community, Action, and Social Entrepreneurship
- **Notes:** Official program phrase kept; “Finalist” retained as role word used in EN title.
- **Meta EN:** Amideast Education Abroad Connect · Summer 2025
- **Meta VI:** Amideast Education Abroad Connect · Mùa hè 2025
- **Bullet EN:** Selected for an 8-day guided program in Tunisia on civil society, civic engagement, and global justice through Tunisian and North African lenses.
- **Bullet VI:** Được chọn tham gia chương trình hướng dẫn kéo dài 8 ngày tại Tunisia về xã hội dân sự, sự tham gia đời sống công dân và công lý toàn cầu dưới góc nhìn của Tunisia và Bắc Phi.

### L2
- **Title EN:** Campus Representative, Honors College Student Advisory Board
- **Title VI:** Campus Representative, Honors College Student Advisory Board
- **Notes:** Official role/board names kept.
- **Meta EN:** Lone Star College Houston-North · Fall 2024–Spring 2025
- **Meta VI:** Lone Star College Houston-North · Mùa thu 2024–Mùa xuân 2025
- **Bullet EN:** Met with the Associate Vice Chancellor of Honors and International Education and contributed student perspectives on Honors College programming.
- **Bullet VI:** Gặp gỡ Associate Vice Chancellor of Honors and International Education và đóng góp góc nhìn của sinh viên về các chương trình của Honors College.
- **Notes:** Title kept in English.

### L3
- **Title EN:** System Liaison Emeritus, Honors and International Education Emissary
- **Title VI:** System Liaison Emeritus, Honors and International Education Emissary
- **Meta EN:** Lone Star College · Spring 2025
- **Meta VI:** Lone Star College · Mùa xuân 2025
- **Bullet EN:** Mentored the incoming System Liaison Emissary and helped promote Honors College and International Education programs.
- **Bullet VI:** Hướng dẫn System Liaison Emissary mới nhận nhiệm và hỗ trợ quảng bá các chương trình Honors College cùng International Education.

### L4
- **Title EN:** System Liaison, Honors and International Education Emissary
- **Title VI:** System Liaison, Honors and International Education Emissary
- **Meta EN:** Lone Star College · Fall 2024
- **Meta VI:** Lone Star College · Mùa thu 2024
- **Bullet EN:** Promoted The Honors College, Rice University Take Flight, National Model UN, and scholarships across the system.
- **Bullet VI:** Quảng bá The Honors College, Rice University Take Flight, National Model UN và các học bổng trong toàn hệ thống.

### L5
- **Title EN:** Global Leadership Program
- **Title VI:** Global Leadership Program
- **Notes:** Program name kept.
- **Meta EN:** Lone Star College · Fall 2024–Spring 2025
- **Meta VI:** Lone Star College · Mùa thu 2024–Mùa xuân 2025
- **Bullet EN:** Developed ethical, inclusive leadership skills through global leadership training, conference participation, and cultural engagement.
- **Bullet VI:** Rèn luyện kỹ năng lãnh đạo có đạo đức và mang tính bao trùm thông qua đào tạo lãnh đạo toàn cầu, tham dự hội nghị và giao lưu văn hóa.

### L6
- **Title EN:** Press Team Member and Statesman, Texas Boys State
- **Title VI:** Thành viên Press Team và Statesman, Texas Boys State
- **Notes:** Program/role proper names kept; only “Press Team Member” partially localized.
- **Meta EN:** The American Legion · Summer 2022
- **Meta VI:** The American Legion · Mùa hè 2022
- **Bullet EN:** One of two students selected from Jersey Village High School; attended mock House of Representatives meetings and wrote website articles on current events.
- **Bullet VI:** Là một trong hai học sinh được chọn từ Jersey Village High School; tham dự các phiên họp mô phỏng House of Representatives và viết bài trên website về các sự kiện thời sự.

---

## Recognition

Official award/program names kept in English; connecting words localized lightly where needed.

| EN | VI | Notes |
|---|---|---|
| Dean’s List, University of St. Thomas · 2025–26 | Dean’s List, University of St. Thomas · 2025–26 | Official honor roll name kept. Optional gloss not added (unambiguous). |
| Hispanic-Serving Institution STEM (Dunn) Endowed Scholarship · 2026 | Hispanic-Serving Institution STEM (Dunn) Endowed Scholarship · 2026 | Keep official title. |
| Monaghan Excellence Scholarship · 2025–27 | Monaghan Excellence Scholarship · 2025–27 | |
| Community, Action, and Social Entrepreneurship Finalist, Amideast Education Abroad Connect · 2025 | Finalist, Community, Action, and Social Entrepreneurship, Amideast Education Abroad Connect · 2025 | Same content; “Finalist” position mirrored for readability. |
| Distinguished Global Scholar Study Abroad Scholarship, Lone Star College · 2025 | Distinguished Global Scholar Study Abroad Scholarship, Lone Star College · 2025 | |
| Distinguished Global Scholar Award, Lone Star College · 2024–25 | Distinguished Global Scholar Award, Lone Star College · 2024–25 | |
| President’s List, Lone Star College · 2023–25 | President’s List, Lone Star College · 2023–25 | |
| Global Scholar Award & Language Scholarship, Lone Star College · 2023–25 | Global Scholar Award & Language Scholarship, Lone Star College · 2023–25 | |
| Best in Committee & Outstanding Delegation, National Model UN · 2024 | Best in Committee & Outstanding Delegation, National Model UN · 2024 | |
| 6× Tournament Champion, Speech & Debate, Jersey Village High School | 6× Tournament Champion, Speech & Debate, Jersey Village High School | |
| 2× Texas Forensic Association State Qualifier; TFA Quarterfinalist | 2× Texas Forensic Association State Qualifier; TFA Quarterfinalist | |
| National Individual Events Tournament of Champions Qualifier · Speech & Debate | National Individual Events Tournament of Champions Qualifier · Speech & Debate | |
| National Speech & Debate Association Academic All-American · 2022 | National Speech & Debate Association Academic All-American · 2022 | |
| Rice University Take Flight Program · 2024–25 | Rice University Take Flight Program · 2024–25 | |
| Phi Theta Kappa Honor Society · 2023 | Phi Theta Kappa Honor Society · 2023 | |
| Environmental Data Science Academy Micro-Credential, Rice Glasscock School · 2025 | Environmental Data Science Academy Micro-Credential, Rice Glasscock School · 2025 | |
| Google Data Analytics: Foundations; Ask Questions to Make Data-Driven Decisions; Prepare Data for Exploration · Coursera · 2024 | Google Data Analytics: Foundations; Ask Questions to Make Data-Driven Decisions; Prepare Data for Exploration · Coursera · 2024 | Course titles unchanged. |
| OSHA 10 · 2020 | OSHA 10 · 2020 | |

**Recognition section note:** These lines are largely proper nouns. Leaving them in English avoids inventing inaccurate Vietnamese award names. If you want short glosses (e.g. “Dean’s List (danh sách khen thưởng học tập của khoa)”), say which rows to gloss.

---

## Terms flagged for your review (do not guess further)

1. **triangulation** — kept in English in R6; prefer a Vietnamese gloss?
2. **Panelist** — now “Thành viên panel” (was “Diễn giả panel”); OK?
3. **lottery-draft** — proposed “xổ số nhập ngũ”; OK?
4. **NSF REU fellow** — “nghiên cứu viên trong chương trình NSF REU” + parenthetical gloss; OK?
5. **concentration in International Study** — “chuyên hướng International Study”; OK?
6. **Recognition lines** — left in English as official titles; add glosses selectively?
7. **Finalist** — retained in English within official program phrasing.
8. **Tiến sĩ** for “Dr.” — confirmed spelling; abbreviation would be **TS.** if you prefer shorter form.
6. **Recognition lines** — left in English as official titles; add glosses selectively?
7. **Finalist** in leadership/recognition titles — retained in English within official program phrasing.

---

## Pass 2 checklist

- [x] No accomplishments added or removed
- [x] Names, dates, affiliations preserved
- [x] Technical claims preserved (qubit routing, zero forcing, enumerative results, etc.)
- [x] External links unchanged; English PDFs labeled “(tiếng Anh)”
- [x] Preferred technical glossary applied consistently
- [x] Mathematical paper titles left in English
- [ ] **Awaiting your approval of wording before treating Vietnamese as final**
