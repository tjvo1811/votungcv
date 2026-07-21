(() => {
  const boot = window.SITE_BOOT || { lang: "en" };
  const content =
    boot.lang === "vi" ? window.SITE_CONTENT_VI : window.SITE_CONTENT_EN;

  if (!content) {
    console.error("Missing locale content for", boot.lang);
    return;
  }

  if (window.SiteI18n.maybeSuggestLanguageRedirect(boot.lang)) {
    return;
  }

  const mount = document.querySelector("[data-app]");
  if (!mount) return;

  window.SiteRender.renderPage({ content, mount });

  const views = [...mount.querySelectorAll(".view")];
  const homeItems = [...mount.querySelectorAll('[data-view="home"]')];
  const validViews = new Set(views.map((view) => view.id));

  const renderView = () => {
    const requested = location.hash.slice(1);
    const activeView = validViews.has(requested) ? requested : null;

    homeItems.forEach((item) => {
      item.hidden = Boolean(activeView);
    });
    views.forEach((view) => {
      view.hidden = view.id !== activeView;
    });

    if (activeView) {
      const activeElement = views.find((view) => view.id === activeView);
      const sectionLabel = activeElement?.dataset.title || content.sections[activeView] || activeView;
      document.title = content.meta.titleSection.replace("{section}", sectionLabel);
    } else {
      document.title = content.meta.titleHome;
    }

    window.scrollTo(0, 0);
  };

  addEventListener("hashchange", renderView);
  renderView();
})();
