(() => {
  const skillsPath = "/skills";
  const psuEmblemUrl =
    "https://upload.wikimedia.org/wikipedia/commons/3/3c/Prince_of_Songkla_University_Emblem.svg";

  const slugify = (value) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const sectionIdForSkill = (skill) => {
    const normalized = skill.trim().toLowerCase();
    if (normalized === "spring boot" || normalized === "java / spring boot") {
      return "java-spring-boot";
    }
    return slugify(skill);
  };

  const addPsuLogo = () => {
    const mark = document.querySelector(".education-mark");
    if (!mark || mark.querySelector("img")) return;

    const logo = document.createElement("img");
    logo.src = psuEmblemUrl;
    logo.alt = "Prince of Songkla University emblem";
    logo.loading = "lazy";
    logo.decoding = "async";
    mark.replaceChildren(logo);
    mark.setAttribute("aria-hidden", "false");
  };

  const addSkillLinks = () => {
    document.querySelectorAll(".skill-detail").forEach((section) => {
      const heading = section.querySelector("h2");
      if (!heading) return;
      if (!heading.id) heading.id = sectionIdForSkill(heading.textContent);
    });

    document.querySelectorAll(".skill-list li").forEach((item) => {
      if (item.querySelector("a")) return;
      const skill = item.textContent.trim();
      if (!skill) return;

      const link = document.createElement("a");
      link.className = "skill-chip-link";
      link.href = `${skillsPath}#${sectionIdForSkill(skill)}`;
      link.textContent = skill;
      item.replaceChildren(link);
    });

    if (window.location.pathname.replace(/\/$/, "") === skillsPath) {
      const target = document.getElementById(
        decodeURIComponent(window.location.hash.slice(1)),
      );
      if (target && window.location.hash) {
        requestAnimationFrame(() => target.scrollIntoView());
      }
    }
  };

  const style = document.createElement("style");
  style.textContent = `
    .skill-list li {
      overflow: hidden;
      padding: 0;
      transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
    }
    .skill-chip-link {
      display: block;
      padding: 5px 8px;
      color: inherit;
      text-decoration: none;
      transition: background-color 180ms ease, color 180ms ease;
    }
    .skill-list li:hover {
      transform: translateY(-2px);
      border-color: #9ab75c;
      box-shadow: 0 4px 12px rgb(23 36 29 / 12%);
    }
    .skill-chip-link:hover {
      background-color: #e8efd9;
      color: #435d2d;
    }
    .skill-chip-link:focus-visible {
      outline: 3px solid #a7cf4d;
      outline-offset: -3px;
    }
    .education-mark img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    @media (prefers-reduced-motion: reduce) {
      .skill-list li, .skill-chip-link { transition: none; }
    }
  `;
  document.head.append(style);

  const updatePage = () => {
    addSkillLinks();
    addPsuLogo();
  };

  const observer = new MutationObserver(updatePage);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  updatePage();
})();
