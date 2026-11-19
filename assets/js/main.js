/**
 * Main Application Logic - Hardware & ECE Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.PORTFOLIO_CONFIG || {};

  // Initialize Lucide icons if available
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // 1. Theme Management (Dark / Light)
  initThemeToggle();

  // 2. Typing Effect for Hero Title
  initTypingEffect(config.personal?.titles || ["ECE Undergraduate", "VLSI Designer"]);

  // 3. Hydrate Dynamic Content from Config
  hydratePortfolio(config);

  // 4. Project Filter Logic
  initProjectFilters();

  // 5. Mobile Navigation Menu
  initMobileMenu();

  // 6. Active Nav Link on Scroll
  initScrollSpy();

  // 7. Copy Email Clipboard Helper
  initCopyEmail();

  // Refresh icons after dynamic hydration
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
});

/**
 * Dark / Light theme toggle
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeToggleMobileBtn = document.getElementById("theme-toggle-mobile");
  
  const savedTheme = localStorage.getItem("portfolio_theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }

  function toggle() {
    document.body.classList.toggle("light-theme");
    const isLight = document.body.classList.contains("light-theme");
    localStorage.setItem("portfolio_theme", isLight ? "light" : "dark");
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggle);
  if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener("click", toggle);
}

/**
 * Dynamic Typing Effect
 */
function initTypingEffect(words) {
  const target = document.getElementById("typing-text");
  if (!target || !words || words.length === 0) return;

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 45;
  const delayBetweenWords = 2200;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      target.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let delta = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delta = delayBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delta = 450;
    }

    setTimeout(type, delta);
  }

  type();
}

/**
 * Hydrate Portfolio Content from PORTFOLIO_CONFIG
 */
function hydratePortfolio(config) {
  if (!config) return;

  // Personal Info
  if (config.personal) {
    const p = config.personal;
    setText("hero-name", p.name);
    setText("nav-brand-name", p.name);
    setText("footer-name", p.name);
    setText("about-bio", p.bio);
    setText("hero-bio", p.bio);
    setText("personal-status", p.statusBadge);
    setText("personal-location", p.location);

    const avatarElem = document.getElementById("hero-avatar");
    if (avatarElem && p.avatar) {
      avatarElem.src = p.avatar;
      avatarElem.alt = p.name;
    }

    const resumeBtn = document.getElementById("resume-btn");
    if (resumeBtn && p.resumeUrl) {
      resumeBtn.href = p.resumeUrl;
    }
  }

  // Socials
  if (config.socials) {
    const s = config.socials;
    setHref("social-github", s.github);
    setHref("social-linkedin", s.linkedin);
    setHref("social-twitter", s.twitter);
    setHref("social-email", s.email);

    // Direct Contact Section
    setHref("contact-card-github", s.github);
    setHref("contact-card-linkedin", s.linkedin);
    setHref("contact-card-twitter", s.twitter);
    setHref("contact-card-email", s.email);
    setText("contact-display-email", s.displayEmail || s.email.replace("mailto:", ""));

    // Footer
    setHref("footer-github", s.github);
    setHref("footer-linkedin", s.linkedin);
    setHref("footer-twitter", s.twitter);
    setHref("footer-email", s.email);
  }

  // Stats
  if (config.stats && config.stats.length > 0) {
    const statsContainer = document.getElementById("stats-container");
    if (statsContainer) {
      statsContainer.innerHTML = config.stats.map(stat => `
        <div class="glass-panel p-5 rounded-2xl text-center hover-lift border border-slate-800">
          <div class="text-3xl md:text-4xl font-extrabold gradient-text mb-1">${stat.value}</div>
          <div class="text-sm text-slate-400 font-medium">${stat.label}</div>
        </div>
      `).join("");
    }
  }

  // Skills
  if (config.skills && config.skills.length > 0) {
    const skillsContainer = document.getElementById("skills-container");
    if (skillsContainer) {
      skillsContainer.innerHTML = config.skills.map(group => `
        <div class="glass-panel p-6 rounded-2xl hover-lift border border-slate-800">
          <div class="flex items-center gap-3 mb-5">
            <span class="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <i data-lucide="cpu" class="w-5 h-5"></i>
            </span>
            <h3 class="text-xl font-bold text-white">${group.category}</h3>
          </div>
          <div class="flex flex-wrap gap-2.5">
            ${group.items.map(item => `
              <span class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium bg-slate-800/80 text-slate-200 border border-slate-700/60 hover:border-blue-500/50 hover:text-white transition-colors">
                ${item.name}
              </span>
            `).join("")}
          </div>
        </div>
      `).join("");
    }
  }

  // Projects
  if (config.projects && config.projects.length > 0) {
    renderProjects(config.projects);
  }

  // Experience Timeline
  if (config.experiences && config.experiences.length > 0) {
    const timelineContainer = document.getElementById("experience-timeline");
    if (timelineContainer) {
      timelineContainer.innerHTML = config.experiences.map((exp, idx) => `
        <div class="relative pl-8 pb-10 border-l-2 border-slate-700/80 last:pb-0 last:border-transparent">
          <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-900"></div>
          <div class="text-xs uppercase tracking-wider text-blue-400 font-bold mb-1">${exp.period}</div>
          <h4 class="text-xl font-bold text-white mb-1">${exp.role}</h4>
          <div class="text-sm font-semibold text-slate-300 mb-2">${exp.company}</div>
          <p class="text-slate-400 text-sm leading-relaxed">${exp.description}</p>
        </div>
      `).join("");
    }
  }
}

/**
 * Render Project Cards
 */
function renderProjects(projects, filterCategory = "All") {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const filtered = filterCategory === "All"
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(filterCategory.toLowerCase()));

  container.innerHTML = filtered.map(p => `
    <div class="glass-panel rounded-2xl overflow-hidden hover-lift flex flex-col group border border-slate-800" data-category="${p.category}">
      <div class="relative h-52 overflow-hidden bg-slate-900">
        <img 
          src="${p.image}" 
          alt="${p.title}" 
          class="w-full h-full object-contain bg-slate-950/70 p-2 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none"></div>
        <span class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/85 backdrop-blur-md text-blue-400 border border-blue-500/30">
          ${p.category}
        </span>
      </div>

      <div class="p-6 flex flex-col flex-1">
        <h4 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">${p.title}</h4>
        
        ${p.metrics ? `
          <div class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-md mb-3 w-fit">
            <i data-lucide="activity" class="w-3.5 h-3.5"></i>
            <span>${p.metrics}</span>
          </div>
        ` : ""}

        <p class="text-slate-400 text-sm mb-5 leading-relaxed flex-1">${p.description}</p>

        <div class="flex flex-wrap gap-1.5 mb-6">
          ${p.tags.map(tag => `
            <span class="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">
              #${tag}
            </span>
          `).join("")}
        </div>

        <div class="flex items-center gap-3 pt-4 border-t border-slate-800/80">
          ${p.githubUrl ? `
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition-colors">
              <i data-lucide="github" class="w-4 h-4"></i> Repository
            </a>
          ` : ""}
          ${p.liveUrl ? `
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl border border-slate-700 transition-colors">
              <i data-lucide="file-text" class="w-4 h-4"></i> Documentation
            </a>
          ` : ""}
        </div>
      </div>
    </div>
  `).join("");

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

/**
 * Filter Projects by Category
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".project-filter-btn");
  if (!filterButtons || filterButtons.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-blue-600", "text-white");
        b.classList.add("bg-slate-800", "text-slate-300");
      });

      btn.classList.remove("bg-slate-800", "text-slate-300");
      btn.classList.add("bg-blue-600", "text-white");

      const category = btn.getAttribute("data-filter") || "All";
      const config = window.PORTFOLIO_CONFIG || {};
      renderProjects(config.projects || [], category);
    });
  });
}

/**
 * Mobile Navigation Menu
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

/**
 * Copy Email to Clipboard Helper
 */
function initCopyEmail() {
  const copyBtn = document.getElementById("copy-email-btn");
  const copyToast = document.getElementById("copy-email-toast");

  if (!copyBtn) return;

  copyBtn.addEventListener("click", () => {
    const config = window.PORTFOLIO_CONFIG || {};
    const email = config.socials?.displayEmail || "barikavinash2003@gmail.com";

    navigator.clipboard.writeText(email).then(() => {
      if (copyToast) {
        copyToast.classList.remove("hidden");
        setTimeout(() => {
          copyToast.classList.add("hidden");
        }, 2000);
      }
    });
  });
}

/**
 * Scrollspy to highlight active link
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("text-blue-400", "font-semibold");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-blue-400", "font-semibold");
      }
    });
  });
}

// Helpers
function setText(id, value) {
  const elem = document.getElementById(id);
  if (elem && value) elem.textContent = value;
}

function setHref(id, value) {
  const elem = document.getElementById(id);
  if (elem && value) elem.href = value;
}
