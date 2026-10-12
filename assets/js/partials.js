// Renders the shared nav + footer into every page from window.SITE_DATA.
// Depends on data.js having run first (loaded before this script).
(function () {
  var data = window.SITE_DATA;
  var currentPage = document.body.dataset.page;

  function el(tag, props, children) {
    var node = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (key) {
        if (key === "className") node.className = props[key];
        else node.setAttribute(key, props[key]);
      });
    }
    (children || []).forEach(function (child) {
      if (child == null) return;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  function renderNav() {
    var mount = document.getElementById("site-nav");
    if (!mount) return;

    var brandContent = data.nav.brand.label;
    if (data.nav.brand.logo) {
      // Only very narrow screens drop the "| SYSTEMS" part and show the compact mark.
      brandContent = el("picture", null, [
        data.nav.brand.logoCompact
          ? el("source", { media: "(max-width: 520px)", srcset: data.nav.brand.logoCompact })
          : null,
        el("img", { src: data.nav.brand.logo, alt: data.nav.brand.label, className: "site-nav__logo" })
      ]);
    }
    var brand = el("a", { href: data.nav.brand.href, className: "site-nav__brand" }, [brandContent]);

    var links = data.nav.links.map(function (link) {
      var isActive = link.id === currentPage;
      var className = "nav-link" + (isActive ? " nav-link--active" : "");
      var labelNode;
      if (link.shortLabel) {
        labelNode = document.createDocumentFragment();
        labelNode.appendChild(el("span", { className: "nav-label-full" }, [link.label]));
        labelNode.appendChild(el("span", { className: "nav-label-short" }, [link.shortLabel]));
      } else {
        labelNode = document.createTextNode(link.label);
      }
      var a = el("a", { href: link.href, className: className }, []);
      a.appendChild(labelNode);
      return a;
    });

    var linksRow = el("div", { className: "site-nav__links" }, links);
    var row = el("div", { className: "site-nav__row" }, [brand, linksRow]);
    var nav = el("div", { className: "site-nav" }, [row]);
    mount.replaceWith(nav);
  }

  function renderFooter() {
    var mount = document.getElementById("site-footer");
    if (!mount) return;

    var row = el("div", { className: "site-footer__row" }, [
      el("div", { className: "site-footer__brand" }, [data.footer.brand]),
      el("div", { className: "site-footer__note" }, [data.footer.linksNote])
    ]);
    var footer = el("div", { className: "site-footer" }, [row]);
    mount.replaceWith(footer);
  }

  renderNav();
  renderFooter();

  // Exposed for render.js to reuse the same DOM-building helper.
  window.SITE_DOM = { el: el };
})();
