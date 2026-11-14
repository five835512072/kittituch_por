(() => {
  const skillsPath = "/skills";
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
    .skill-chip-link { display: block; color: inherit; text-decoration: none; }
    .skill-chip-link:hover { color: #6a8c36; }
    .skill-chip-link:focus-visible { outline: 3px solid #a7cf4d; outline-offset: 3px; }
  `;
  document.head.append(style);

  const observer = new MutationObserver(addSkillLinks);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  addSkillLinks();
})();
