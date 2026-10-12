// Single source of truth for all site copy/content.
// Edit this file to update text anywhere on the site — no HTML/JS changes needed.
// To swap a placeholder image for a real one, set the relevant `image` field to a path
// (e.g. "assets/img/my-photo.jpg") and drop the file in assets/img/.
window.SITE_DATA = {
  meta: {
    siteTitle: "A&K — Data Professional",
    accent: "#6E8BFF",
    accentAlternates: ["#6E8BFF", "#3DDBD9", "#4D7CFF", "#A78BFF"],
    fullHero: true
  },

  nav: {
    // To swap the logo, replace assets/img/logo-horizontal-dark.svg (or point `logo` at another file).
    brand: { label: "A&K", logo: "assets/img/logo-horizontal-dark.svg?v=2", logoCompact: "assets/img/logo-dark.svg", href: "index.html" },
    links: [
      { id: "bi", label: "BI", href: "bi.html" },
      { id: "gis", label: "GIS", href: "gis.html" },
      { id: "cv", label: "Computer Vision", shortLabel: "CV", href: "computer-vision.html" },
      { id: "llm", label: "LLM", href: "llm.html" },
      { id: "sql", label: "SQL", href: "sql.html" },
      { id: "about", label: "About", href: "index.html#about" }
    ]
  },

  // Order here = circular prev/next order = "Five areas of work" order.
  topics: [
    {
      id: "bi", number: "01", title: "Business Intelligence", page: "bi.html",
      shortDesc: "Dashboards, reporting and metrics that make numbers legible.",
      intro: "A short intro about your BI work — the kinds of dashboards you build, who uses them, and what changes when they do. Replace with your own words.",
      projects: [
        { label: "Project 1", title: "Project title goes here", image: null, imageAlt: "Project 1 — dashboard screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["Power BI", "SQL", "DAX"] },
        { label: "Project 2", title: "Project title goes here", image: null, imageAlt: "Project 2 — dashboard screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["Tool", "Tool"] },
        { label: "Project 3", title: "Project title goes here", image: null, imageAlt: "Project 3 — dashboard screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["Tool", "Tool"] }
      ]
    },
    {
      id: "gis", number: "02", title: "GIS", page: "gis.html",
      shortDesc: "Spatial analysis and maps that reveal where things happen.",
      intro: "A short intro about your GIS work — the spatial questions you answer, the maps you build, and who uses them. Replace with your own words.",
      projects: [
        { label: "Project 1", title: "Project title goes here", image: null, imageAlt: "Project 1 — map / analysis screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["QGIS", "PostGIS", "GeoPandas"] },
        { label: "Project 2", title: "Project title goes here", image: null, imageAlt: "Project 2 — map / analysis screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["Tool", "Tool"] },
        { label: "Project 3", title: "Project title goes here", image: null, imageAlt: "Project 3 — map / analysis screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["Tool", "Tool"] }
      ]
    },
    {
      id: "cv", number: "03", title: "Computer Vision", page: "computer-vision.html",
      shortDesc: "Models that read images — detection, classification, OCR.",
      intro: "A short intro about your computer vision work — detection, classification, OCR, and where these models run in the real world. Replace with your own words.",
      projects: [
        { label: "Project 1", title: "Project title goes here", image: null, imageAlt: "Project 1 — model output / demo screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["OpenCV", "PyTorch", "YOLO"] },
        { label: "Project 2", title: "Project title goes here", image: null, imageAlt: "Project 2 — model output / demo screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["Tool", "Tool"] },
        { label: "Project 3", title: "Project title goes here", image: null, imageAlt: "Project 3 — model output / demo screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["Tool", "Tool"] }
      ]
    },
    {
      id: "llm", number: "04", title: "LLM", page: "llm.html",
      shortDesc: "Language-model applications, from RAG pipelines to agents.",
      intro: "A short intro about your LLM work — RAG pipelines, agents and applications, and the problems they solve. Replace with your own words.",
      projects: [
        { label: "Project 1", title: "Project title goes here", image: null, imageAlt: "Project 1 — app / demo screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["LangChain", "RAG", "Claude API"] },
        { label: "Project 2", title: "Project title goes here", image: null, imageAlt: "Project 2 — app / demo screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["Tool", "Tool"] },
        { label: "Project 3", title: "Project title goes here", image: null, imageAlt: "Project 3 — app / demo screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["Tool", "Tool"] }
      ]
    },
    {
      id: "sql", number: "05", title: "SQL", page: "sql.html",
      shortDesc: "The engine room — data modeling, optimization and pipelines.",
      intro: "A short intro about your SQL work — data modeling, query optimization and the pipelines behind everything else. Replace with your own words.",
      projects: [
        { label: "Project 1", title: "Project title goes here", image: null, imageAlt: "Project 1 — schema / query screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["PostgreSQL", "dbt", "Python"] },
        { label: "Project 2", title: "Project title goes here", image: null, imageAlt: "Project 2 — schema / query screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["Tool", "Tool"] },
        { label: "Project 3", title: "Project title goes here", image: null, imageAlt: "Project 3 — schema / query screenshot",
          problem: "what question or pain this project answered.",
          approach: "how you built it, key decisions along the way.",
          result: "what changed; a number if you have one.",
          chips: ["Tool", "Tool"] }
      ]
    }
  ],

  home: {
    heroLead: "Data professional turning",
    heroHighlights: ["raw data", "decisions, maps & models"],
    heroMid: "into",
    heroTail: ".",
    // Background pictures behind the hero; they rotate every heroIntervalMs milliseconds.
    heroImages: ["assets/img/hero-1.jpg", "assets/img/hero-2.jpg", "assets/img/hero-3.jpg"],
    heroIntervalMs: 5000,
    subline: "I work across business intelligence, GIS, computer vision, LLM applications and SQL — from the first query to the final dashboard.",
    featured: [
      { title: "Featured project title", meta: "Topic · Tools used", image: null, imageAlt: "Featured project screenshot #1" },
      { title: "Featured project title", meta: "Topic · Tools used", image: null, imageAlt: "Featured project screenshot #2" }
    ],
    // Customer logo wall. To add a customer, drop the logo in assets/img/customers/ and add a line here.
    customers: {
      label: "Projects",
      heading: "Our customers",
      logos: [
        { name: "ONE", image: "assets/img/customers/one.png" },
        { name: "Ben-Gurion University of the Negev", image: "assets/img/customers/ben-gurion-university.png" },
        { name: "Be'er Sheva Municipality", image: "assets/img/customers/beer-sheva.png" },
        { name: "Israel Defense Forces", image: "assets/img/customers/idf.svg" },
        { name: "Rustic Bakery", image: "assets/img/customers/rustic-bakery.png" },
        { name: "Ortal", image: "assets/img/customers/ortal.png" },
        { name: "Azrieli Group", image: "assets/img/customers/azrieli-group.png" },
        { name: "Dod Moshe", image: "assets/img/customers/dod-moshe.png" }
      ]
    },
    // Contact section at the end of the home page. The form opens the visitor's email app, addressed to `email`.
    contact: {
      label: "Contact",
      heading: "Contact me",
      text: "Have a project or a question? Send me a message and I'll get back to you.",
      email: "datakalimi@gmail.com",
      subject: "Message from the A&K website",
      buttonLabel: "Send email"
    },
    about: {
      photo: "assets/img/portrait.jpg?v=3", photoAlt: "Portrait photo",
      bioParagraphs: [
        "A few sentences about who you are, your background, and the kind of problems you enjoy solving. Replace this paragraph with your own story.",
        "A second paragraph — what you're currently working on or looking for, and what makes your way of working different."
      ],
      toolRows: [
        { label: "BI", chips: ["Power BI", "Tableau", "DAX"] },
        { label: "GIS", chips: ["QGIS", "ArcGIS", "PostGIS", "GeoPandas"] },
        { label: "Computer Vision", chips: ["OpenCV", "PyTorch", "YOLO"] },
        { label: "LLM", chips: ["LangChain", "RAG", "Claude / OpenAI APIs"] },
        { label: "SQL & Data", chips: ["PostgreSQL", "SQL Server", "Python", "dbt"] }
      ]
    }
  },

  footer: {
    brand: "A&K",
    linksNote: "LinkedIn · GitHub · Email — links coming soon"
  }
};
