(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const motion = () => reducedMotion.matches ? "instant" : "smooth";
  const escape = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
  const pad = value => String(value).padStart(2, "0");
  let toastTimer;
  function toast(message) {
    const element = document.querySelector("#travelToast");
    element.textContent = message;
    element.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => element.classList.remove("is-visible"), 2600);
  }
  function scrollToElement(element, offset = 88) {
    window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - offset, behavior: motion() });
  }

  const hero = document.querySelector(".hero");
  const scenes = [...hero.querySelectorAll(".hero-scene")];
  const sceneButtons = [...hero.querySelectorAll("[data-scene]")];
  const motionButton = document.querySelector("#heroMotion");
  const captions = [
    ["01 / COASTLINE", "海岸線，是旅程的開場。"],
    ["02 / ISLAND TIME", "繞一座島，收藏一片藍。"],
    ["03 / AFTER HOURS", "街燈亮起，旅行還在繼續。"]
  ];
  let sceneIndex = 0;
  let heroVisible = true;
  let paused = reducedMotion.matches;
  let sceneTimer;
  function scheduleScene() {
    clearTimeout(sceneTimer);
    const playing = !paused && heroVisible && !document.hidden && !reducedMotion.matches;
    hero.dataset.playing = String(playing);
    motionButton.textContent = reducedMotion.matches ? "切換風景" : paused ? "播放輪播" : "暫停輪播";
    motionButton.setAttribute("aria-label", reducedMotion.matches ? "切換首頁風景" : paused ? "播放首頁輪播" : "暫停首頁輪播");
    hero.style.setProperty("--tide-play-state", playing ? "running" : "paused");
    if (playing) sceneTimer = setTimeout(() => selectScene((sceneIndex + 1) % scenes.length), 7000);
  }
  function selectScene(index) {
    sceneIndex = index;
    scenes.forEach((scene, i) => scene.classList.toggle("is-active", i === index));
    sceneButtons.forEach((button, i) => {
      button.classList.toggle("is-active", i === index);
      button.setAttribute("aria-pressed", String(i === index));
    });
    const caption = document.querySelector("#heroSceneCaption");
    caption.querySelector("small").textContent = captions[index][0];
    caption.querySelector("b").textContent = captions[index][1];
    scheduleScene();
  }
  sceneButtons.forEach(button => button.addEventListener("click", () => selectScene(Number(button.dataset.scene))));
  motionButton.addEventListener("click", () => {
    if (reducedMotion.matches) {
      selectScene((sceneIndex + 1) % scenes.length);
      toast("已依減少動態效果設定，保留手動切換");
      return;
    }
    paused = !paused;
    scheduleScene();
  });
  new IntersectionObserver(([entry]) => {
    heroVisible = entry.isIntersecting;
    scheduleScene();
  }, { threshold: 0 }).observe(hero);
  document.addEventListener("visibilitychange", scheduleScene);
  reducedMotion.addEventListener("change", () => {
    paused = reducedMotion.matches;
    scheduleScene();
  });
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    hero.addEventListener("pointermove", event => {
      if (reducedMotion.matches || paused) return;
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--hero-x", `${(event.clientX / rect.width - .5) * 10}px`);
      hero.style.setProperty("--hero-y", `${((event.clientY - rect.top) / rect.height - .5) * 8}px`);
    }, { passive: true });
    hero.addEventListener("pointerleave", () => {
      hero.style.setProperty("--hero-x", "0px");
      hero.style.setProperty("--hero-y", "0px");
    });
  }

  const lightbox = document.querySelector("#travelLightbox");
  let gallery = [];
  let photoIndex = 0;
  let galleryTrigger;
  function showPhoto(index) {
    photoIndex = (index + gallery.length) % gallery.length;
    const photo = gallery[photoIndex];
    const image = document.querySelector("#lightboxImage");
    image.src = photo.src;
    image.alt = photo.description || photo.title;
    document.querySelector("#lightboxTitle").textContent = photo.title;
    document.querySelector("#lightboxDescription").textContent = photo.description;
    document.querySelector("#lightboxCounter").textContent = `${pad(photoIndex + 1)} / ${pad(gallery.length)}`;
    lightbox.querySelectorAll("[data-lightbox-step]").forEach(button => button.disabled = gallery.length < 2);
  }
  function openGallery(figures, start, trigger) {
    gallery = figures.map(figure => ({
      src: figure.querySelector("img").getAttribute("src"),
      title: figure.querySelector("figcaption b").textContent,
      description: figure.querySelector("figcaption span").textContent
    }));
    if (!gallery.length) return;
    galleryTrigger = trigger;
    showPhoto(start);
    document.body.classList.add("lightbox-open");
    lightbox.showModal();
    lightbox.querySelector("[data-lightbox-close]").focus();
  }
  lightbox.querySelector("[data-lightbox-close]").addEventListener("click", () => lightbox.close());
  lightbox.querySelectorAll("[data-lightbox-step]").forEach(button => {
    button.addEventListener("click", () => showPhoto(photoIndex + Number(button.dataset.lightboxStep)));
  });
  lightbox.addEventListener("keydown", event => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      showPhoto(photoIndex + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  lightbox.addEventListener("click", event => {
    const rect = lightbox.getBoundingClientRect();
    if (event.target === lightbox && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) lightbox.close();
  });
  lightbox.addEventListener("close", () => {
    document.body.classList.remove("lightbox-open");
    galleryTrigger?.focus({ preventScroll: true });
  });
  let touchOrigin;
  const stage = lightbox.querySelector(".lightbox-stage");
  stage.addEventListener("touchstart", event => {
    touchOrigin = event.touches.length === 1 ? [event.touches[0].clientX, event.touches[0].clientY] : null;
  }, { passive: true });
  stage.addEventListener("touchend", event => {
    if (!touchOrigin || !event.changedTouches.length) return;
    const dx = event.changedTouches[0].clientX - touchOrigin[0];
    const dy = event.changedTouches[0].clientY - touchOrigin[1];
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) showPhoto(photoIndex + (dx < 0 ? 1 : -1));
    touchOrigin = null;
  }, { passive: true });

  const navigator = document.querySelector("#journeyNavigator");
  const pager = document.querySelector("#journeyPager");
  const daysElement = document.querySelector("#dayList");
  const dayNames = ["抵達沖繩", "美麗海", "古宇利島", "南下購物", "那霸南部", "回程日"];
  let selectedDay = 0;
  let allDays = false;
  let dayCards = [];
  function selectDay(index, scroll = true) {
    allDays = index === "all";
    if (!allDays) selectedDay = Math.max(0, Math.min(Number(index), dayCards.length - 1));
    dayCards.forEach((card, i) => card.hidden = !allDays && i !== selectedDay);
    navigator.querySelectorAll("[data-day]").forEach(button => {
      const active = allDays ? button.dataset.day === "all" : Number(button.dataset.day) === selectedDay;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    pager.hidden = allDays;
    pager.querySelector("[data-day-step='-1']").disabled = selectedDay === 0;
    pager.querySelector("[data-day-step='1']").disabled = selectedDay === dayCards.length - 1;
    pager.querySelector(".journey-pager span").textContent = `DAY ${pad(selectedDay + 1)} / ${pad(dayCards.length)}`;
    if (scroll) {
      history.replaceState(null, "", allDays ? "#itinerary" : `#day-${selectedDay + 1}`);
      scrollToElement(navigator, window.innerWidth <= 720 ? 68 : 72);
      if (!reducedMotion.matches && !allDays) dayCards[selectedDay].animate([
        { opacity: .45, transform: "translateY(12px)" }, { opacity: 1, transform: "translateY(0)" }
      ], { duration: 400, easing: "ease-out" });
    }
  }
  function enhanceDays() {
    const plan = plans[currentPlan];
    dayCards = [...daysElement.querySelectorAll(".day-card")];
    navigator.innerHTML = `<nav class="day-navigator" aria-label="選擇旅程日期">${plan.days.map((day, index) => `
      <button class="day-tab" type="button" data-day="${index}" aria-pressed="false" aria-controls="day-${index + 1}"><b>${pad(index + 1)}</b><span><strong>${escape(day.date.replace(".", "/"))}</strong>${currentPlan === "f" ? dayNames[index] : `DAY ${pad(index + 1)}`}</span></button>
    `).join("")}<button class="day-tab day-tab-all" type="button" data-day="all" aria-pressed="false">展開全部</button></nav>`;
    pager.innerHTML = '<div class="journey-pager"><button type="button" data-day-step="-1">← 前一天</button><span aria-live="polite"></span><button type="button" data-day-step="1">後一天 →</button></div>';
    dayCards.forEach((card, index) => {
      const day = plan.days[index];
      card.id = `day-${index + 1}`;
      card.classList.add("is-interactive");
      const figures = [...card.querySelectorAll("figure")];
      const preferred = ["american-village", "aquarium", "kouri-heart", "parco", "umikaji", "potama"];
      const coverFigure = (currentPlan === "f" && figures.find(figure => figure.querySelector("img").src.includes(preferred[index]))) || figures[0];
      const cover = document.createElement("div");
      cover.className = "day-cover";
      cover.innerHTML = `<img src="${escape(coverFigure.querySelector("img").getAttribute("src"))}" alt="${escape(coverFigure.querySelector("img").alt)}" loading="lazy"><div class="day-cover-copy"><div><small>DAY ${pad(index + 1)} · ${escape(day.date)} · ${escape(day.weekday)}</small><strong>${currentPlan === "f" ? dayNames[index] : `沖繩第 ${index + 1} 天`}</strong><p>${escape(day.tags.slice(0, 3).join(" · "))}</p></div><button type="button" data-open-day-gallery="${index}">看照片 <span>${figures.length} ↗</span></button></div>`;
      card.prepend(cover);
      const panel = document.createElement("aside");
      panel.className = "day-photo-panel";
      panel.setAttribute("aria-label", `第 ${index + 1} 天照片`);
      panel.append(card.querySelector(".day-gallery-head"));
      const filters = document.createElement("div");
      filters.className = "photo-filters";
      filters.setAttribute("aria-label", "照片分類");
      const groups = [["all", "全部"], ["main", "主線景點"], ["food", "必吃美食"], ["optional", "順路加點"]];
      filters.innerHTML = groups.filter(([key]) => key === "all" || card.querySelector(`.day-photo-group-${key}`))
        .map(([key, title]) => `<button type="button" data-photo-filter="${key}" aria-pressed="${key === "all"}">${title}</button>`).join("");
      panel.append(filters, card.querySelector(".day-photo-groups"));
      card.append(panel);
      figures.forEach(figure => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "gallery-zoom";
        button.setAttribute("aria-label", `放大${figure.querySelector("figcaption b").textContent}`);
        button.innerHTML = '<span aria-hidden="true">＋</span>';
        figure.append(button);
      });
    });
    selectDay(allDays ? "all" : selectedDay, false);
  }
  navigator.addEventListener("click", event => {
    const button = event.target.closest("[data-day]");
    if (button) selectDay(button.dataset.day);
  });
  navigator.addEventListener("keydown", event => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    const buttons = [...navigator.querySelectorAll("[data-day]")];
    const index = buttons.indexOf(document.activeElement);
    if (index < 0) return;
    event.preventDefault();
    const target = event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + buttons.length) % buttons.length;
    buttons[target].focus();
  });
  pager.addEventListener("click", event => {
    const button = event.target.closest("[data-day-step]");
    if (!button || button.disabled) return;
    selectDay(selectedDay + Number(button.dataset.dayStep));
    navigator.querySelector(`[data-day="${selectedDay}"]`).focus({ preventScroll: true });
  });
  daysElement.addEventListener("click", event => {
    const card = event.target.closest(".day-card");
    if (!card) return;
    const filter = event.target.closest("[data-photo-filter]");
    if (filter) {
      card.querySelectorAll("[data-photo-filter]").forEach(button => button.setAttribute("aria-pressed", String(button === filter)));
      card.querySelectorAll(".day-photo-group").forEach(group => {
        group.hidden = filter.dataset.photoFilter !== "all" && !group.classList.contains(`day-photo-group-${filter.dataset.photoFilter}`);
      });
    }
    const zoom = event.target.closest(".gallery-zoom");
    if (zoom) {
      const figures = [...card.querySelectorAll(".day-photo-group:not([hidden]) figure")];
      openGallery(figures, figures.indexOf(zoom.closest("figure")), zoom);
    }
    const cover = event.target.closest("[data-open-day-gallery]");
    if (cover) openGallery([...card.querySelectorAll("figure")], 0, cover);
  });
  function selectHashDay() {
    const match = location.hash.match(/^#day-([1-6])$/);
    if (match) selectDay(Number(match[1]) - 1);
  }
  document.addEventListener("trip:rendered", () => {
    selectedDay = 0;
    allDays = false;
    enhanceDays();
    if (/^#day-/.test(location.hash)) history.replaceState(null, "", "#itinerary");
  });
  enhanceDays();
  selectHashDay();
  window.addEventListener("hashchange", selectHashDay);

  const savedKey = "chang-okinawa-saved-places-v1";
  let saved = new Set();
  try {
    const stored = JSON.parse(localStorage.getItem(savedKey) || "[]");
    if (Array.isArray(stored)) saved = new Set(stored.filter(value => typeof value === "string"));
  } catch { /* Private browsing can disable local storage; in-memory saves still work. */ }
  const bookmark = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z"/></svg>';
  const searchIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>';
  ["spot", "food"].forEach(type => {
    const filter = document.querySelector(`.catalog-filter[data-catalog="${type}"]`);
    const cards = [...document.querySelectorAll(type === "spot" ? ".spot-grid .catalog-card" : ".food-map-grid .food-map-card")];
    const tools = document.createElement("div");
    tools.className = "catalog-tools";
    tools.innerHTML = `<label class="catalog-search">${searchIcon}<input type="search" aria-label="搜尋${type === "spot" ? "景點" : "美食"}" placeholder="${type === "spot" ? "搜尋景點、地區或特色…" : "搜尋餐廳、料理或地區…"}" autocomplete="off"></label><button type="button" class="saved-filter" aria-pressed="false">我的收藏 · 0</button><span class="catalog-result" data-catalog-result="${type}" role="status"></span>`;
    filter.after(tools);
    const empty = document.createElement("p");
    empty.className = "catalog-empty";
    empty.dataset.catalogEmpty = type;
    empty.hidden = true;
    empty.textContent = "沒有符合的地點，試試其他關鍵字或切回全部區域。";
    tools.parentElement.querySelector(".interactive-map-shell").after(empty);
    function updateSaved() {
      cards.forEach((card, index) => {
        const active = saved.has(`${type}:${mapCatalogs[type][index].name}`);
        card.dataset.saved = String(active);
        const button = card.querySelector("[data-save-place]");
        button.setAttribute("aria-pressed", String(active));
        button.setAttribute("aria-label", `${active ? "取消收藏" : "收藏"}${mapCatalogs[type][index].name}`);
        button.innerHTML = `${bookmark}${active ? "已收藏" : "收藏"}`;
      });
      tools.querySelector(".saved-filter").textContent = `我的收藏 · ${mapCatalogs[type].filter(item => saved.has(`${type}:${item.name}`)).length}`;
      applyCatalogFilter(type);
    }
    cards.forEach((card, index) => {
      const item = mapCatalogs[type][index];
      card.classList.add("is-interactive-place");
      const actions = document.createElement("div");
      actions.className = "place-actions";
      actions.innerHTML = `<button type="button" data-save-place aria-pressed="false">${bookmark}收藏</button><button type="button" data-locate-place aria-label="在地圖查看${escape(item.name)}">地圖定位 ↗</button>`;
      (type === "spot" ? card.querySelector(":scope > div") : card).append(actions);
      actions.querySelector("[data-save-place]").addEventListener("click", () => {
        const key = `${type}:${item.name}`;
        const wasSaved = saved.has(key);
        if (wasSaved) saved.delete(key); else saved.add(key);
        let persisted = true;
        try { localStorage.setItem(savedKey, JSON.stringify([...saved])); } catch { persisted = false; }
        updateSaved();
        toast(wasSaved ? `已取消收藏 ${item.name}` : `已${persisted ? "" : "於本次瀏覽"}收藏 ${item.name}`);
        if (catalogFilters[type].savedOnly && wasSaved) tools.querySelector(".saved-filter").focus({ preventScroll: true });
      });
      actions.querySelector("[data-locate-place]").addEventListener("click", () => {
        const state = catalogMaps[type];
        if (!state) {
          window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + " 沖繩")}`, "_blank", "noopener,noreferrer");
          return;
        }
        scrollToElement(state.map.getContainer().closest(".interactive-map-shell"));
        state.map.invalidateSize();
        state.map.setView(item.coords, 14, { animate: !reducedMotion.matches });
        state.markers[index].marker.openPopup();
      });
    });
    tools.querySelector("input").addEventListener("input", event => {
      catalogFilters[type].query = event.target.value;
      applyCatalogFilter(type);
    });
    tools.querySelector(".saved-filter").addEventListener("click", event => {
      catalogFilters[type].savedOnly = !catalogFilters[type].savedOnly;
      event.currentTarget.setAttribute("aria-pressed", String(catalogFilters[type].savedOnly));
      applyCatalogFilter(type);
    });
    filter.querySelectorAll("button").forEach(button => {
      button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
      button.addEventListener("click", () => filter.querySelectorAll("button").forEach(other => other.setAttribute("aria-pressed", String(other === button))));
    });
    updateSaved();
  });

  const backTop = document.querySelector("#backToTop");
  const navLinks = [...document.querySelectorAll("#desktopNav a[href^='#'], .mobile-quick-nav a[href^='#']")];
  const sectionLinks = navLinks.map(link => ({ link, target: document.querySelector(link.getAttribute("href")) })).filter(item => item.target);
  let scrollPending = false;
  function updateScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    document.documentElement.style.setProperty("--read-progress", max > 0 ? Math.min(1, window.scrollY / max) : 0);
    const showTop = window.scrollY > 700;
    backTop.classList.toggle("is-visible", showTop);
    backTop.tabIndex = showTop ? 0 : -1;
    let activeTarget;
    let nearest = -Infinity;
    sectionLinks.forEach(({ target }) => {
      const top = target.getBoundingClientRect().top;
      if (top <= 200 && top > nearest) { nearest = top; activeTarget = target; }
    });
    sectionLinks.forEach(({ link, target }) => {
      const active = target === activeTarget;
      link.classList.toggle("is-current", active);
      if (active) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current");
    });
    scrollPending = false;
  }
  window.addEventListener("scroll", () => {
    if (!scrollPending) { requestAnimationFrame(updateScroll); scrollPending = true; }
  }, { passive: true });
  window.addEventListener("resize", updateScroll, { passive: true });
  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: motion() });
    document.querySelector(".brand").focus({ preventScroll: true });
  });
  updateScroll();

  if (!reducedMotion.matches) {
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealed");
      reveal.unobserve(entry.target);
    }), { threshold: .06, rootMargin: "0px 0px -25px 0px" });
    document.querySelectorAll(".section-heading, .catalog-card, .food-map-card, .shopping-card, .reservation-grid article").forEach((element, index) => {
      element.classList.add("reveal-ready");
      element.style.setProperty("--reveal-delay", `${index % 3 * 55}ms`);
      reveal.observe(element);
    });
  }
})();
