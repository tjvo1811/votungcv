/**
 * Renders page chrome + sections from the active locale content object.
 */
window.SiteRender = (() => {
  const escapeHtml = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const resolveAsset = (_basePath, href) => window.SiteI18n.assetUrl(href);

  const linkLabel = (content, labelKey) => content.ui[labelKey] || labelKey;

  const renderPresentationMeta = (item) => {
    if (!item.metaDatetime) return escapeHtml(item.meta);
    if (!item.meta.endsWith(item.metaDatetime)) return escapeHtml(item.meta);
    const prefix = item.meta.slice(0, -item.metaDatetime.length);
    return `${escapeHtml(prefix)}<time datetime="${escapeHtml(item.metaDatetime)}">${escapeHtml(item.metaDatetime)}</time>`;
  };

  const renderIntroParagraph = (paragraph, content) => {
    if (paragraph.type === "text") {
      return `<p>${escapeHtml(paragraph.text)}</p>`;
    }
    if (paragraph.type === "html") {
      return `<p>${paragraph.html}</p>`;
    }
    if (paragraph.type === "links") {
      const resume = resolveAsset(null, paragraph.resumeHref);
      const cv = resolveAsset(null, paragraph.cvHref);
      return `<p>${escapeHtml(paragraph.before)}<a href="${escapeHtml(resume)}" target="_blank" rel="noopener noreferrer">${escapeHtml(content.ui.resume)}</a>${escapeHtml(paragraph.mid)}<a href="${escapeHtml(cv)}" target="_blank" rel="noopener noreferrer">${escapeHtml(content.ui.cv)}</a>${escapeHtml(paragraph.after)}</p>`;
    }
    return "";
  };

  const renderResearchLinks = (item, content) => {
    if (!item.links?.length) return "";
    const parts = item.links.map((link) => {
      const href = resolveAsset(null, link.href);
      return `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(linkLabel(content, link.labelKey))}</a>`;
    });
    return `<li>${parts.join(" · ")}</li>`;
  };

  const renderResearch = (content) =>
    content.research
      .map((item) => {
        const points = item.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("");
        return `<li>
          <h3>${escapeHtml(item.title)}</h3>
          <ul class="research-points">
            <li class="research-meta"><span>${escapeHtml(item.meta)}</span></li>
            ${points}
            ${renderResearchLinks(item, content)}
          </ul>
        </li>`;
      })
      .join("");

  const renderPresentations = (content) =>
    content.presentations
      .map((item) => {
        const action = item.action
          ? `<a class="presentation-action" href="${escapeHtml(resolveAsset(null, item.action.href))}" target="_blank" rel="noopener noreferrer">${escapeHtml(linkLabel(content, item.action.labelKey))}</a>`
          : "";
        return `<li>
          <p class="presentation-title">${escapeHtml(item.title)}</p>
          <p class="presentation-meta">${renderPresentationMeta(item)}</p>
          ${action}
        </li>`;
      })
      .join("");

  const renderPublicationAuthors = (item) => {
    const author = item.highlightAuthor;
    const authors = String(item.authors);
    const index = author ? authors.indexOf(author) : -1;
    if (index === -1) return escapeHtml(authors);

    return `${escapeHtml(authors.slice(0, index))}<span class="publication-author-self">${escapeHtml(author)}</span>${escapeHtml(authors.slice(index + author.length))}`;
  };

  const renderPublications = (content) =>
    content.publications
      .map(
        (item) => `<li>
          <p class="publication-title">${escapeHtml(item.title)}</p>
          <p class="publication-authors">${renderPublicationAuthors(item)}</p>
          <p class="publication-meta">${escapeHtml(item.meta)}</p>
        </li>`,
      )
      .join("");

  const renderLeadership = (content) =>
    content.leadership
      .map((item) => {
        const points = item.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("");
        return `<li>
          <h3>${escapeHtml(item.title)}</h3>
          <ul class="research-points">
            <li class="research-meta"><span>${escapeHtml(item.meta)}</span></li>
            ${points}
          </ul>
        </li>`;
      })
      .join("");

  const renderRecognitionLink = (text, href) =>
    `<a href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(text)}</a>`;

  const renderRecognitionItem = (item) => {
    if (typeof item === "string") return escapeHtml(item);

    if (Array.isArray(item.segments)) {
      return item.segments
        .map((segment) => {
          if (typeof segment === "string") return escapeHtml(segment);
          if (segment.href) return renderRecognitionLink(segment.text, segment.href);
          return escapeHtml(segment.text);
        })
        .join("");
    }

    if (item.href) return renderRecognitionLink(item.text, item.href);
    return escapeHtml(item.text);
  };

  const renderRecognition = (content) =>
    content.recognition.map((item) => `<li>${renderRecognitionItem(item)}</li>`).join("");

  const renderGallery = (content) =>
    content.gallery
      .map((album) => {
        const cover = album.photos[0];
        const coverSrc = resolveAsset(null, cover.src);
        const countLabel = album.photos.length === 1 ? content.ui.image : content.ui.images;
        return `<li>
          <a class="album-card" href="#album-${escapeHtml(album.id)}" aria-label="${escapeHtml(album.title)}">
            <span class="album-cover">
              <img src="${escapeHtml(coverSrc)}" alt="${escapeHtml(cover.alt)}" loading="lazy">
            </span>
            <span class="album-card-copy">
              <strong>${escapeHtml(album.title)}</strong>
              <span>${escapeHtml(album.meta)}</span>
              <span>${album.photos.length} ${escapeHtml(countLabel)} <b aria-hidden="true">→</b></span>
            </span>
          </a>
        </li>`;
      })
      .join("");

  const renderAlbumPhotos = (album, content) =>
    album.photos
      .map((photo) => {
        const src = resolveAsset(null, photo.src);
        return `<figure class="gallery-photo">
          <a href="${escapeHtml(src)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(content.ui.openImage)}: ${escapeHtml(photo.caption)}">
            <img src="${escapeHtml(src)}" alt="${escapeHtml(photo.alt)}" loading="lazy">
          </a>
          <figcaption>${escapeHtml(photo.caption)}</figcaption>
        </figure>`;
      })
      .join("");

  const renderAlbumViews = (content) =>
    content.gallery
      .map(
        (album) => `<section class="view album-view" id="album-${escapeHtml(album.id)}" data-title="${escapeHtml(album.title)}" aria-labelledby="album-${escapeHtml(album.id)}-heading" hidden>
          <div class="breadcrumb album-breadcrumb">
            <a href="#top">${escapeHtml(content.intro.name)}</a><span>&gt;</span>
            <a href="#gallery">${escapeHtml(content.sections.gallery)}</a><span>&gt;</span>
            <span>${escapeHtml(album.title)}</span>
          </div>
          <p class="album-kicker">${escapeHtml(album.meta)}</p>
          <h2 id="album-${escapeHtml(album.id)}-heading">${escapeHtml(album.title)}</h2>
          <p class="album-description">${escapeHtml(album.description)}</p>
          <a class="related-activity" href="#${escapeHtml(album.relatedHash)}">
            <span>${escapeHtml(content.ui.viewRelatedActivity)}</span>
            <strong>${escapeHtml(album.relatedLabel)} <b aria-hidden="true">→</b></strong>
          </a>
          <div class="album-photo-grid${album.photos.length > 1 ? " is-photo-album" : ""}">${renderAlbumPhotos(album, content)}</div>
          <a class="back-to-gallery" href="#gallery">← ${escapeHtml(content.ui.backToGallery)}</a>
        </section>`,
      )
      .join("");

  const renderLanguageSwitch = (content, currentLang) => {
    const hash = location.hash || "";
    const enHref = window.SiteI18n.languageSwitchHref("en", hash);
    const viHref = window.SiteI18n.languageSwitchHref("vi", hash);
    const enClass = currentLang === "en" ? ' class="is-active" aria-current="page"' : "";
    const viClass = currentLang === "vi" ? ' class="is-active" aria-current="page"' : "";
    return `<div class="lang-switch" role="navigation" aria-label="${escapeHtml(content.aria.language)}">
      <a href="${escapeHtml(enHref)}" hreflang="en" lang="en" data-set-lang="en"${enClass}>${escapeHtml(content.langSwitch.en)}</a>
      <span aria-hidden="true">|</span>
      <a href="${escapeHtml(viHref)}" hreflang="vi" lang="vi" data-set-lang="vi"${viClass}>${escapeHtml(content.langSwitch.vi)}</a>
    </div>`;
  };

  const applyDocumentMeta = (content) => {
    document.documentElement.lang = content.lang;
    document.documentElement.dir = content.dir || "ltr";

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", content.meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", content.meta.titleHome);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", content.meta.description);

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", content.meta.ogLocale);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.SiteI18n.pageUrl(content.meta.canonicalPath));

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", window.SiteI18n.pageUrl(content.meta.canonicalPath));
  };

  const renderPage = ({ content, mount }) => {
    applyDocumentMeta(content);

    mount.innerHTML = `
      ${renderLanguageSwitch(content, content.lang)}
      <header class="intro" id="top" data-view="home">
        <h1>${escapeHtml(content.intro.name)}</h1>
        <div class="intro-copy">
          ${content.intro.paragraphs.map((p) => renderIntroParagraph(p, content)).join("")}
        </div>
      </header>

      <nav aria-label="${escapeHtml(content.aria.siteSections)}" data-view="home">
        <a href="#research">${escapeHtml(content.nav.research)}</a><span>·</span>
        <a href="#presentations">${escapeHtml(content.nav.presentations)}</a><span>·</span>
        <a href="#publications">${escapeHtml(content.nav.publications)}</a><span>·</span>
        <a href="#leadership">${escapeHtml(content.nav.leadership)}</a><span>·</span>
        <a href="#recognition">${escapeHtml(content.nav.recognition)}</a><span>·</span>
        <a href="#gallery">${escapeHtml(content.nav.gallery)}</a>
      </nav>

      <section class="view" id="research" aria-labelledby="research-heading" hidden>
        <div class="breadcrumb"><a href="#top">${escapeHtml(content.intro.name)}</a><span>&gt;</span><span>${escapeHtml(content.sections.research)}</span></div>
        <h2 id="research-heading">${escapeHtml(content.sections.research)}</h2>
        <ul class="research-list">${renderResearch(content)}</ul>
      </section>

      <section class="view" id="presentations" aria-labelledby="presentations-heading" hidden>
        <div class="breadcrumb"><a href="#top">${escapeHtml(content.intro.name)}</a><span>&gt;</span><span>${escapeHtml(content.sections.presentations)}</span></div>
        <h2 id="presentations-heading">${escapeHtml(content.sections.presentations)}</h2>
        <ul class="plain-list presentation-list">${renderPresentations(content)}</ul>
      </section>

      <section class="view" id="publications" aria-labelledby="publications-heading" hidden>
        <div class="breadcrumb"><a href="#top">${escapeHtml(content.intro.name)}</a><span>&gt;</span><span>${escapeHtml(content.sections.publications)}</span></div>
        <h2 id="publications-heading">${escapeHtml(content.sections.publications)}</h2>
        <ul class="plain-list publication-list">${renderPublications(content)}</ul>
      </section>

      <section class="view" id="leadership" aria-labelledby="leadership-heading" hidden>
        <div class="breadcrumb"><a href="#top">${escapeHtml(content.intro.name)}</a><span>&gt;</span><span>${escapeHtml(content.sections.leadership)}</span></div>
        <h2 id="leadership-heading">${escapeHtml(content.sections.leadership)}</h2>
        <ul class="research-list">${renderLeadership(content)}</ul>
      </section>

      <section class="view" id="recognition" aria-labelledby="recognition-heading" hidden>
        <div class="breadcrumb"><a href="#top">${escapeHtml(content.intro.name)}</a><span>&gt;</span><span>${escapeHtml(content.sections.recognition)}</span></div>
        <h2 id="recognition-heading">${escapeHtml(content.sections.recognition)}</h2>
        <ul class="plain-list compact">${renderRecognition(content)}</ul>
      </section>

      <section class="view" id="gallery" aria-labelledby="gallery-heading" hidden>
        <div class="breadcrumb"><a href="#top">${escapeHtml(content.intro.name)}</a><span>&gt;</span><span>${escapeHtml(content.sections.gallery)}</span></div>
        <h2 id="gallery-heading">${escapeHtml(content.sections.gallery)}</h2>
        <p class="gallery-intro">${escapeHtml(content.galleryIntro)}</p>
        <ul class="album-grid">${renderGallery(content)}</ul>
      </section>

      ${renderAlbumViews(content)}
    `;

    mount.querySelectorAll("[data-set-lang]").forEach((anchor) => {
      anchor.addEventListener("click", () => {
        window.SiteI18n.setPreferredLang(anchor.getAttribute("data-set-lang"));
      });
    });
  };

  return { renderPage, applyDocumentMeta };
})();
