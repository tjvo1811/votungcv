/**
 * Explicit language preference.
 * Manual selection always wins and is persisted.
 */
window.SiteI18n = (() => {
  const STORAGE_KEY = "tungvo-manual-lang";
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

  /**
   * Apply an explicitly selected language, without inferring one from the
   * browser or device settings.
   */
  const maybeSuggestLanguageRedirect = (currentLang) => {
    const preferred = getPreferredLang();
    if (!preferred || preferred === currentLang) return false;

    const target = preferred === "vi" ? "/vi/" : "/";
    location.replace(target + location.hash);
    return true;
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
    maybeSuggestLanguageRedirect,
    assetUrl,
    pageUrl,
    languageSwitchHref,
  };
})();
