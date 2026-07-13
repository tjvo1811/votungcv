const views = [...document.querySelectorAll(".view")];
const homeItems = [...document.querySelectorAll('[data-view="home"]')];
const validViews = new Set(views.map((view) => view.id));

const renderView = () => {
  const requested = location.hash.slice(1);
  const activeView = validViews.has(requested) ? requested : null;

  homeItems.forEach((item) => { item.hidden = Boolean(activeView); });
  views.forEach((view) => { view.hidden = view.id !== activeView; });
  document.title = activeView ? `${activeView[0].toUpperCase()}${activeView.slice(1)} · Tung (TJ) Vo` : "Tung (TJ) Vo";
  window.scrollTo(0, 0);
};

addEventListener("hashchange", renderView);
renderView();
