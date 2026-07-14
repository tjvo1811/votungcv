/**
 * Language preference + automatic browser-language detection.
 * Manual selection always wins and is persisted.
 */
window.SiteI18n = (() => {
  const STORAGE_KEY = "tungvo-preferred-lang";
  const SITE_ORIGIN = "https://www.tung-vo.com";

  const getPreferredLang = () => {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      return value === "en" || value === "vi" ? value : null;
    } catch {
      return null;
    }
  };

  const setPreferredLang = (lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore quota / private mode */
    }
  };

  const browserPrefersVietnamese = () => {
    const languages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage];
    return languages.some((code) => /^vi(?:-|$)/i.test(String(code || "")));
  };

  /**
   * Automatically route first-time root visitors to Vietnamese when their
   * browser prefers Vietnamese. Explicit language choices always win.
   */
  const maybeSuggestLanguageRedirect = (currentLang) => {
    const preferred = getPreferredLang();
    if (preferred) {
      if (preferred !== currentLang) {
        const target = preferred === "vi" ? "/vi/" : "/";
        location.replace(target + location.hash);
        return true;
      }
      return false;
    }

    if (currentLang === "en" && browserPrefersVietnamese()) {
      location.replace("/vi/" + location.hash);
      return true;
    }

    return false;
  };

  /** Root-absolute asset paths so `/` and `/vi/` share the same files. */
  const assetUrl = (href) => {
    if (/^(https?:|mailto:|tel:)/i.test(href)) return href;
    if (href.startsWith("/")) return href;
    return `/${href.replace(/^\.\//, "")}`;
  };

  const pageUrl = (path) => {
    const normalized = path.endsWith("/") || path.endsWith(".html") ? path : `${path}/`;
    return SITE_ORIGIN + normalized;
  };

  const languageSwitchHref = (targetLang, hash) => {
    const path = targetLang === "vi" ? "/vi/" : "/";
    return path + (hash || "");
  };

  return {
    STORAGE_KEY,
    SITE_ORIGIN,
    getPreferredLang,
    setPreferredLang,
    browserPrefersVietnamese,
    maybeSuggestLanguageRedirect,
    assetUrl,
    pageUrl,
    languageSwitchHref,
  };
})();
