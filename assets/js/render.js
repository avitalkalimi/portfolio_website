// Renders page-specific content (home or a topic page) into #page-content from window.SITE_DATA.
// Depends on data.js and partials.js having run first.
(function () {
  var data = window.SITE_DATA;
  var el = window.SITE_DOM.el;
  var page = document.body.dataset.page;

  function renderImageSlot(sizeModifier, image, imageAlt, circle) {
    var wrapClass = "img-slot img-slot--" + sizeModifier;
    var inner;
    if (image) {
      inner = el("img", {
        src: image,
        alt: imageAlt || "",
        loading: "lazy",
        className: "img-fill" + (circle ? " img-fill--circle" : "")
      }, []);
    } else {
      inner = el("div", { className: "img-placeholder" + (circle ? " img-placeholder--circle" : "") }, [imageAlt || ""]);
    }
    return el("div", { className: wrapClass }, [inner]);
  }

  function renderHero() {
    var home = data.home;
    var title = el("h1", { className: "hero__title" }, [
      home.heroLead + " ",
      el("span", { className: "highlight" }, [home.heroHighlights[0]]),
      " " + home.heroMid + " ",
      el("span", { className: "highlight" }, [home.heroHighlights[1]]),
      home.heroTail
    ]);
    var sub = el("p", { className: "hero__sub" }, [home.subline]);
    var scroll = el("a", { href: "#work", className: "hero__scroll" }, ["↓ Selected work"]);
    var hero = el("div", { className: "hero" }, [title, sub, scroll]);
    return el("div", { className: "hero-band" }, [renderHeroSlides(home), hero]);
  }

  // Rotating background pictures behind the hero, cross-faded every heroIntervalMs.
  function renderHeroSlides(home) {
    var images = home.heroImages || [];
    if (!images.length) return null;
    var slides = images.map(function (src, i) {
      var slide = el("div", { className: "hero-slide" + (i === 0 ? " hero-slide--active" : "") }, []);
      slide.style.backgroundImage = "url('" + src + "')";
      return slide;
    });
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (slides.length > 1 && !reduceMotion) {
      var current = 0;
      setInterval(function () {
        slides[current].classList.remove("hero-slide--active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("hero-slide--active");
      }, home.heroIntervalMs || 5000);
    }
    return el("div", { className: "hero-slides", "aria-hidden": "true" }, slides);
  }

  function renderSelectedWork() {
    var cards = data.home.featured.map(function (item) {
      var image = renderImageSlot("featured", item.image, item.imageAlt, false);
      var meta = el("div", {}, [
        el("div", { className: "featured-card__title" }, [item.title]),
        el("div", { className: "featured-card__meta" }, [item.meta])
      ]);
      return el("div", { className: "featured-card" }, [image, meta]);
    });
    var label = el("div", { className: "section-label" }, ["Selected work"]);
    var grid = el("div", { className: "grid-2" }, cards);
    return el("div", { className: "work-section", id: "work" }, [label, grid]);
  }

  function renderAreas() {
    var cards = data.topics.map(function (topic) {
      return el("a", { href: topic.page, className: "area-card" }, [
        el("div", { className: "area-card__number" }, [topic.number]),
        el("div", { className: "area-card__title" }, [topic.title]),
        el("div", { className: "area-card__desc" }, [topic.shortDesc]),
        el("div", { className: "area-card__link" }, [
          el("span", { className: "pill-highlight" }, ["3 projects →"])
        ])
      ]);
    });
    var heading = el("h2", {}, ["Five areas of work"]);
    var grid = el("div", { className: "grid-3" }, cards);
    return el("div", { className: "areas-section" }, [heading, grid]);
  }

  function renderCustomers() {
    var customers = data.home.customers;
    if (!customers || !customers.logos.length) return null;
    var tiles = customers.logos.map(function (logo) {
      return el("div", { className: "customer-tile" }, [
        el("img", { src: logo.image, alt: logo.name, title: logo.name, loading: "lazy" }, [])
      ]);
    });
    return el("div", { className: "customers-section", id: "customers" }, [
      el("div", { className: "section-label" }, [customers.label]),
      el("h2", {}, [customers.heading]),
      el("div", { className: "customer-grid" }, tiles)
    ]);
  }

  function renderAbout() {
    var about = data.home.about;
    var photo = renderImageSlot("portrait", about.photo, about.photoAlt, true);

    var bio = about.bioParagraphs.map(function (text) {
      return el("p", {}, [text]);
    });

    var toolRows = about.toolRows.map(function (row) {
      var chips = row.chips.map(function (chip) {
        return el("span", { className: "chip" }, [chip]);
      });
      return el("div", { className: "tools-row" }, [
        el("div", { className: "tools-row__label" }, [row.label]),
        el("div", { className: "chip-row" }, chips)
      ]);
    });

    var right = el("div", {}, [
      el("h2", {}, ["About me"])
    ].concat(bio).concat([
      el("div", { className: "tools-block" }, [
        el("div", { className: "section-label" }, ["Tools & technologies"]),
        el("div", { className: "tools-rows" }, toolRows)
      ])
    ]));

    return el("div", { className: "about-section", id: "about" }, [photo, right]);
  }

  function renderContact() {
    var contact = data.home.contact;
    if (!contact || !contact.email) return null;

    var nameInput = el("input", { type: "text", id: "contact-name", name: "name", autocomplete: "name", required: "" }, []);
    var messageInput = el("textarea", { id: "contact-message", name: "message", rows: "5", required: "" }, []);
    var form = el("form", { className: "contact-form" }, [
      el("label", { "for": "contact-name" }, ["Your name"]),
      nameInput,
      el("label", { "for": "contact-message" }, ["Message"]),
      messageInput,
      el("button", { type: "submit", className: "contact-form__submit" }, [contact.buttonLabel])
    ]);
    // No backend: hand the message to the visitor's own email app.
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var body = messageInput.value + "\n\n— " + nameInput.value;
      window.location.href = "mailto:" + contact.email +
        "?subject=" + encodeURIComponent(contact.subject) +
        "&body=" + encodeURIComponent(body);
    });

    var intro = el("div", {}, [
      el("div", { className: "section-label" }, [contact.label]),
      el("h2", {}, [contact.heading]),
      el("p", {}, [contact.text]),
      el("a", { href: "mailto:" + contact.email, className: "contact-section__email" }, [contact.email])
    ]);
    return el("div", { className: "contact-section", id: "contact" }, [intro, form]);
  }

  function renderHome(mount) {
    mount.appendChild(renderHero());
    mount.appendChild(renderSelectedWork());
    mount.appendChild(renderAreas());
    var customers = renderCustomers();
    if (customers) mount.appendChild(customers);
    mount.appendChild(renderAbout());
    var contact = renderContact();
    if (contact) mount.appendChild(contact);
  }

  function renderTopicHeader(topic, index) {
    var total = String(data.topics.length).padStart(2, "0");
    var counter = el("div", { className: "topic-header__counter" }, [topic.number + " / " + total]);
    var title = el("h1", {}, [
      "Work in ",
      el("span", { className: "highlight" }, [topic.title])
    ]);
    var intro = el("p", { className: "topic-header__intro" }, [topic.intro]);
    return el("div", { className: "topic-header" }, [counter, title, intro]);
  }

  function renderTopicProjects(topic) {
    var rows = topic.projects.map(function (project) {
      var image = renderImageSlot("project", project.image, project.imageAlt, false);
      var chips = project.chips.map(function (chip) {
        return el("span", { className: "chip" }, [chip]);
      });
      var facts = el("div", { className: "project-row__facts" }, [
        el("div", {}, [el("b", {}, ["Problem — "]), project.problem]),
        el("div", {}, [el("b", {}, ["Approach — "]), project.approach]),
        el("div", {}, [el("b", {}, ["Result — "]), project.result])
      ]);
      var text = el("div", {}, [
        el("div", { className: "project-row__label" }, [project.label]),
        el("div", { className: "project-row__title" }, [project.title]),
        facts,
        el("div", { className: "chip-row" }, chips)
      ]);
      return el("div", { className: "project-row" }, [image, text]);
    });
    return el("div", { className: "topic-projects" }, rows);
  }

  function renderTopicFooterNav(topic, index) {
    var mount = document.getElementById("topic-footer-nav");
    if (!mount) return;
    var n = data.topics.length;
    var prev = data.topics[(index - 1 + n) % n];
    var next = data.topics[(index + 1) % n];
    var row = el("div", { className: "topic-footer-nav__row" }, [
      el("a", { href: prev.page }, ["← " + prev.title]),
      el("a", { href: "index.html", className: "topic-footer-nav__home" }, ["Home"]),
      el("a", { href: next.page }, [next.title + " →"])
    ]);
    var nav = el("div", { className: "topic-footer-nav" }, [row]);
    mount.replaceWith(nav);
  }

  function renderTopic(mount, topic, index) {
    mount.appendChild(renderTopicHeader(topic, index));
    mount.appendChild(renderTopicProjects(topic));
    renderTopicFooterNav(topic, index);
  }

  var contentMount = document.getElementById("page-content");
  if (!contentMount) return;

  if (page === "home") {
    renderHome(contentMount);
  } else {
    var index = data.topics.findIndex(function (t) { return t.id === page; });
    if (index !== -1) {
      renderTopic(contentMount, data.topics[index], index);
    }
  }
})();
