/* 主逻辑：读取 PORTFOLIO 数据并渲染页面 */
(function () {
  const D = window.PORTFOLIO;
  if (!D) return;

  // 基本信息
  document.getElementById("heroName").textContent = D.profile.name;
  document.getElementById("footerName").textContent = D.profile.name;
  document.getElementById("heroTagline").textContent = D.profile.tagline;
  document.getElementById("aboutBio").textContent = D.profile.bio;
  document.getElementById("year").textContent = new Date().getFullYear();

  // 头像首字母（取名字第一个字符）
  const init = (D.profile.name || "N").trim().charAt(0).toUpperCase();
  document.getElementById("aboutAvatar").textContent = init;

  // Hero 统计
  const statsEl = document.getElementById("heroStats");
  D.stats.forEach((s) => {
    const d = document.createElement("div");
    d.className = "stat";
    d.innerHTML = `<div class="stat__num">${s.num}</div><div class="stat__label">${s.label}</div>`;
    statsEl.appendChild(d);
  });

  // 爱好
  const hobbyEl = document.getElementById("hobbyChips");
  D.profile.hobbies.forEach((h) => {
    const s = document.createElement("span");
    s.className = "chip";
    s.textContent = h;
    hobbyEl.appendChild(s);
  });

  // 事实卡片
  const factsEl = document.getElementById("aboutFacts");
  D.profile.facts.forEach((f) => {
    const d = document.createElement("div");
    d.className = "fact";
    d.innerHTML = `<div class="fact__k">${f.k}</div><div class="fact__v">${f.v}</div>`;
    factsEl.appendChild(d);
  });

  // 技能
  const skillsEl = document.getElementById("skillsGrid");
  D.skills.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "skill-card reveal";
    card.innerHTML =
      `<div class="skill-card__title">${cat.title}</div>` +
      `<div class="tag-list">` +
      cat.tags.map((t) => `<span class="tag">${t}</span>`).join("") +
      `</div>`;
    skillsEl.appendChild(card);
  });

  // 项目：渲染 + 筛选
  const grid = document.getElementById("projectsGrid");
  const filterEl = document.getElementById("projectFilter");

  // 收集所有标签用于筛选
  const allTags = [...new Set(D.projects.flatMap((p) => p.tags || []))];
  const filters = ["全部", ...allTags];

  filters.forEach((f, i) => {
    const b = document.createElement("button");
    b.className = "filter-btn" + (i === 0 ? " is-active" : "");
    b.textContent = f;
    b.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((x) => x.classList.remove("is-active"));
      b.classList.add("is-active");
      renderProjects(f);
    });
    filterEl.appendChild(b);
  });

  function renderProjects(filter) {
    grid.innerHTML = "";
    const list = D.projects.filter(
      (p) => filter === "全部" || (p.tags || []).includes(filter)
    );
    if (!list.length) {
      grid.innerHTML = `<p style="color:var(--text-soft);grid-column:1/-1;text-align:center;">该分类下暂时还没有项目～</p>`;
      return;
    }
    list.forEach((p) => {
      const card = document.createElement("div");
      card.className = "project-card reveal";
      const highlights = (p.highlights || [])
        .map((h) => `<li>${h}</li>`)
        .join("");
      const links = Object.entries(p.links || {})
        .map(([k, v]) => `<a href="${v}" target="_blank" rel="noopener">${linkLabel(k)} ↗</a>`)
        .join("");
      card.innerHTML = `
        <div class="project-card__top">
          <div class="project-card__title">${p.title}</div>
          <div class="project-card__period">${p.period || ""}</div>
        </div>
        <span class="project-card__role">${p.role || ""}</span>
        <p class="project-card__desc">${p.desc || ""}</p>
        ${highlights ? `<ul class="project-card__highlights">${highlights}</ul>` : ""}
        <div class="project-card__tags">${(p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="project-card__links">${links}</div>
      `;
      grid.appendChild(card);
    });
    observeReveal();
  }

  function linkLabel(k) {
    return { github: "GitHub", demo: "演示", doc: "文档", store: "华为应用市场" }[k] || k;
  }

  renderProjects("全部");

  // 联系方式
  const contactEl = document.getElementById("contactLinks");
  D.contact.forEach((c) => {
    const a = document.createElement("a");
    a.href = c.href;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = c.label;
    contactEl.appendChild(a);
  });

  // 深色模式切换
  const toggle = document.getElementById("themeToggle");
  toggle.addEventListener("click", () => {
    const cur = document.documentElement.getAttribute("data-theme");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
  try {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
  } catch (e) {}

  // 移动端菜单
  const menu = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  menu.addEventListener("click", () => links.classList.toggle("is-open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("is-open"))
  );

  // 滚动出现动画
  function observeReveal() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
  }
  observeReveal();
})();
