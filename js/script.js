// =========================================================================
    // 1. DATA STORES (Experiences, 10 Projects, Skills, Certifications, Extracurriculars)
    // =========================================================================
    const experiencesData = [
      {
        role: "Data Science Intern",
        company: "Internee.pk",
        period: "Summer 2026",
        type: "Remote Internship",
        summary: "Cleaned, analyzed, and visualized structured datasets using Python, Pandas, and SQL, delivering actionable insights and automated reporting pipelines.",
        tags: ["Python", "Data Analysis", "SQL", "Pandas"]
      }
    ];

    const projectsData = [
      {
        title: "Console Quiz Game",
        category: "C#",
        featured: true,
        image: "assets/projects/project-01.jpg",
        desc: "A C# console-based quiz game featuring multiple categories, scoring system, and disqualification logic for wrong attempts..",
        badges: [
          { label: "C#", color: "bg-emerald-500" },

        ],
        highlights: [
           "Implemented multiple quiz categories with interactive MCQ-based gameplay",
           "Developed score tracking and wrong-attempt limit mechanisms",
          "Applied C# programming logic with structured console-based application design"
        ],
        repo: "https://github.com/asimazad/console-quiz-game-csharp"
      },
      {
        title: "Inventory Management System",
        category: "C#",
        featured: false,
        image: "assets/projects/project-02.jpg",
        desc: "A console-based inventory application for managing products and suppliers. Supports discounted and perishable products, product searching and supplier records. Demonstrates encapsulation, inheritance, polymorphism and abstraction.",
        badges: [
          { label: "C#", color: "bg-emerald-500" },
          { label: "OP", color: "bg-indigo-500" },
          { label: ".N", color: "bg-emerald-500" }
        ],
        highlights: [
          "Managed product and supplier records with product-search support",
          "Applied encapsulation, inheritance, polymorphism, and abstraction to discounted and perishable products"
        ],
        repo: "https://github.com/asimazad/Inventory-Management-System-csharp"
      },
      {
        title: "Smart Grocery Management System",
        category: "C++",
        featured: true,
        image: "assets/projects/project-03.jpg",
        desc: "A console-based grocery management application demonstrating practical Data Structures and Algorithms. Includes inventory operations, item searching, priority queues, linked lists, stacks and queues.",
        badges: [
          { label: "C++", color: "bg-emerald-500" },
          { label: "LL", color: "bg-indigo-500" },
          { label: "St", color: "bg-emerald-500" },
          { label: "Q", color: "bg-sky-500" }
        ],
        highlights: [
          "Implemented inventory operations and item searching using linked lists, stacks, and queues",
          "Demonstrated priority queues for priority-based item handling",
          "Built a console-based grocery manager to demonstrate practical Data Structures and Algorithms"
        ],
        repo: "https://github.com/asimazad/smart-grocery-management-system-dsa"
      },
      {
        title: "Space Launch Management System",
        category: "MYSQL",
        featured: true,
        image: "assets/projects/project-04.jpg",
        desc: "A relational database project for managing space companies, rockets, payloads, launch sites and missions. Includes normalized tables, primary and foreign keys, JOIN operations and analytical SQL queries.",
        badges: [
          { label: "SQL", color: "bg-sky-500" },
          { label: "SS", color: "bg-emerald-500" },
          { label: "DB", color: "bg-indigo-500" }
        ],
        highlights: [
          "Designed normalized tables with primary and foreign keys for space companies, rockets, payloads, launch sites, and missions",
          "Used JOIN operations and analytical SQL queries to explore mission and launch data"
        ],
        repo: "https://github.com/asimazad/space-management-system-mysql"
      },
      {
        title: "Resume-to-Job Matching Pipeline",
        category: "DS",
        featured: true,
        image: "assets/projects/project-05.jpg",
        desc: "A Python-based resume matching pipeline that extracts skills and named entities, compares resumes with job descriptions using TF-IDF and cosine similarity, and explores semantic matching through sentence-transformers. Uses synthetic sample data.",
        badges: [
          { label: "Py", color: "bg-amber-500" },
          { label: "NL", color: "bg-indigo-500" },
          { label: "Sp", color: "bg-emerald-500" },
          { label: "TF", color: "bg-sky-500" }
        ],
        highlights: [
          "Extracted skills and named entities from resumes using spaCy",
          "Compared resumes with job descriptions using TF-IDF and cosine similarity",
          "Explored semantic matching with sentence-transformers on synthetic sample data"
        ],
        repo: "https://github.com/asimazad/resume_screening_automation"
      },
      {
        title: "Social Media Engagement Analysis",
        category: "DS",
        featured: false,
        image: "assets/projects/project-06.jpg",
        desc: "An exploratory analysis of social media engagement across platforms, content categories, posting times, and sentiment. Uses a 5,000-row public/sample dataset, not private Internee.pk analytics.",
        badges: [
          { label: "Py", color: "bg-amber-500" },
          { label: "Pd", color: "bg-emerald-500" },
          { label: "Np", color: "bg-blue-500" },
          { label: "Mt", color: "bg-indigo-500" }
        ],
        highlights: [
          "Analyzed engagement patterns across platforms and content categories using a 5,000-row public/sample dataset",
          "Compared posting-time and sentiment trends to explore differences in engagement",
          "Created visual summaries with Pandas, NumPy, and Matplotlib"
        ],
        repo: "https://github.com/asimazad/internee-social-media-analysis"
      },
      {
        title: "LMS User Churn Prediction",
        category: "DS",
        featured: false,
        image: "assets/projects/project-07.jpg",
        desc: "An educational machine-learning project that analyzes synthetic learning-management-system engagement data and trains a model to predict potential user churn.",
        badges: [
          { label: "Py", color: "bg-amber-500" },
          { label: "ML", color: "bg-emerald-500" },
          { label: "DA", color: "bg-indigo-500" }
        ],
        highlights: [
          "Analyzed synthetic LMS engagement data to explore patterns associated with user churn",
          "Prepared engagement data and trained a machine-learning model to predict potential churn",
          "Kept the project focused on an educational, reproducible demonstration using synthetic data"
        ],
        repo: "https://github.com/asimazad/lms-user-churn-prediction"
      },
      {
        title: "Homepage A/B Testing Analysis",
        category: "DS",
        featured: false,
        image: "assets/projects/project-08.jpg",
        desc: "A reproducible experiment analysis comparing homepage variations by conversion, bounce, and engagement rates. Includes a two-proportion z-test, effect size, and confidence intervals using synthetic demonstration data.",
        badges: [
          { label: "Py", color: "bg-amber-500" },
          { label: "St", color: "bg-indigo-500" },
          { label: "A/B", color: "bg-emerald-500" }
        ],
        highlights: [
          "Compared homepage variations using conversion, bounce, and engagement rates",
          "Applied a two-proportion z-test and reported effect size with confidence intervals",
          "Used synthetic demonstration data for a reproducible experiment analysis"
        ],
        repo: "https://github.com/asimazad/internee-ab-testing-analysis"
      },
      {
        title: "Competitor Pricing Analysis",
        category: "DS",
        featured: false,
        image: "assets/projects/project-09.jpg",
        desc: "A web-scraping project that gathers competitor pricing and service information, then visualizes differences in prices, offerings, and user engagement to support data-driven pricing decisions.",
        badges: [
          { label: "Scr", color: "bg-amber-500" },
          { label: "PA", color: "bg-emerald-500" },
          { label: "Viz", color: "bg-indigo-500" }
        ],
        highlights: [
          "Collected competitor pricing and service data through web scraping",
          "Compared pricing and offerings across competitor websites",
          "Visualized pricing, service, and user-engagement differences to inform pricing strategy"
        ],
        repo: "https://github.com/asimazad/competitor-pricing-analysis"
      }
    ];

    const skillsData = [
      {
        category: "Languages & Core",
        accent: "text-emerald-400",
        items: ["C++", "C#", "Python", "SQL", ]
      },
      {
        category: "Data & Databases",
        accent: "text-emerald-400",
        items: ["MySQL", "Pandas", "NumPy", "Data Cleaning", "ER Modeling"]
      },
      {
        category: "DevOps & Workflow",
        accent: "text-emerald-400",
        items: ["Git & GitHub", "Linux CLI", "CI/CD Basics", "Docker Intro", "VS Code"]
      },
      {
       category: "Soft Skills",
        accent: "text-emerald-400",
        items: ["Communication", "Teamwork", "Adaptability", "Time Management", "Problem Solving"]
      }
    ];

    const certificationsData = [
      {
        title: "SQL for data Science",
        issuer: "University of California, Davis",
        date: "Issued 2026",
        id: "ID: G3KC5QNMDTBN",
        image: "assets/certificates/certificate-01.jpg",
        desc: "Learn to query, filter, and combine complex data streams into clean, analysis-ready tables using advanced SQL functions and operators.",
        verifyUrl: "https://www.coursera.org/verify/G3KC5QNMDTBN"
      },
      {
        title: "Generative AI: Prompt Engineering Basics",
        issuer: "Coursera / IBM",
        date: "Issued 2026",
        id: "ID:  7ZKIPOKSKU6B",
        image: "assets/certificates/certificate-02.jpg",
        desc: "Unlock the true potential of generative AI by mastering prompt engineering—the strategic art of crafting precise, contextual inputs that drive flawless machine outputs.",
        verifyUrl: "https://www.coursera.org/verify/7ZKIPOKSKU6B"
      },
      {
        title: "Python for Data Science and AI",
        issuer: "Coursera / IBM",
        date: "Issued 2026",
        id: "ID: 7378cb7c-dbdb-4a6c-b124-77dcfd76afd2",
        image: "assets/certificates/certificate-03.jpg",
        desc: "Certified in fundamental Python programming architecture, core data structures, and industry-standard libraries to confidently manipulate data and engineer sophisticated data science applications..",
        verifyUrl: "https://www.credly.com/badges/7378cb7c-dbdb-4a6c-b124-77dcfd76afd2"
      },
      {
        title: "Python for Data Science, AI & Development",
        issuer: "Coursera / IBM",
        date: "Issued 2026",
        id: "ID:  TLK88XSASUP4",
        image: "assets/certificates/certificate-04.jpg",
        desc: "Architect robust data applications by mastering core Python syntax, programming logic, object-oriented concepts, and essential data science libraries like Pandas and NumPy..",
        verifyUrl: "https://www.coursera.org/verify/TLK88XSASUP4"
      },
      {
        title: "Certificate of Active Membership & Contribution",
        issuer: "Uraan Pakistan /YPDC MUST",
        date: "Issued 2026",
        image: "assets/certificates/certificate-05.jpg",
        desc: "Endorsed by Federal Minister Prof. Ahsan Iqbal for active alignment with civic growth and prosperity initiatives in Pakistan.",
        verifyUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7524426417732730881/"
      },
      {
        title: "complete python course 2026 : Beginner to advanced",
        issuer: "Udemy",
        date: "Issued 2026",
        id: "ID:  UC-54143c59-701c-4b38-b139-afb769aa0d6b",
        image: "assets/certificates/certificate-06.jpg",
        desc: "Successfully completed 24.5 total hours of rigorous, end-to-end technical training covering foundational syntax, object-oriented concepts, and advanced scripting methodologies.",
        verifyUrl: "https://www.udemy.com//learn/lecture/30143c59-701c-4b38-b139-afb769aa0d6b/"
      }
    ];

    const extracurricularData = [
      {
        title: "Tech Society Event Organizer",
        org: "MUST Software Engineering Society",
        badge: "Organizer • 2026",
        image: "assets/activities/activity-01.jpg",
        desc: "=.",
        highlights: [
          "Managed event logistics, problem-setting teams.",
          ""
        ],
        link: "https://linkedin.com"
      },
      
    ];

    // =========================================================================
    // 2. TOAST HELPER
    // =========================================================================
    const toastBanner = document.getElementById('toastBanner');
    const toastMessage = document.getElementById('toastMessage');
    let toastTimer = null;

    function showToast(msg) {
      if (!toastBanner || !toastMessage) return;
      toastMessage.textContent = msg;
      toastBanner.classList.remove('hidden');
      toastBanner.classList.add('flex');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toastBanner.classList.add('hidden');
        toastBanner.classList.remove('flex');
      }, 2800);
    }

    // =========================================================================
    // 3. EXCLUSIVE SINGLE-TAB NAVIGATION & MOBILE DRAWER
    // =========================================================================
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabViews = document.querySelectorAll('.tab-view');
    const sidebarDrawer = document.getElementById('sidebarDrawer');
    const mobileBackdrop = document.getElementById('mobileBackdrop');
    const openMobileNav = document.getElementById('openMobileNav');
    const closeMobileNav = document.getElementById('closeMobileNav');

    function openDrawer() {
      sidebarDrawer?.classList.remove('-translate-x-[115%]');
      mobileBackdrop?.classList.remove('hidden');
    }

    function closeDrawer() {
      sidebarDrawer?.classList.add('-translate-x-[115%]');
      mobileBackdrop?.classList.add('hidden');
    }

    openMobileNav?.addEventListener('click', openDrawer);
    closeMobileNav?.addEventListener('click', closeDrawer);
    mobileBackdrop?.addEventListener('click', closeDrawer);

    function activateTab(targetId) {
      tabViews.forEach((view) => {
        if (view.id === `tab-${targetId}`) {
          view.classList.add('active-tab');
        } else {
          view.classList.remove('active-tab');
        }
      });

      document.querySelectorAll('.sidebar-link').forEach((btn) => {
        if (btn.getAttribute('data-tab-target') === targetId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      closeDrawer();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    tabTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const target = trigger.getAttribute('data-tab-target');
        if (target) activateTab(target);
      });
    });

    // =========================================================================
    // 4. LIGHT / DARK THEME TOGGLE
    // =========================================================================
    const htmlEl = document.documentElement;
    const themeTogglePill = document.getElementById('themeTogglePill');
    const mobileThemeBtn = document.getElementById('mobileThemeBtn');
    const mobileThemeIcon = document.getElementById('mobileThemeIcon');
    const sunLabel = document.getElementById('sunLabel');
    const moonLabel = document.getElementById('moonLabel');

    function syncThemeUI() {
      const isDark = htmlEl.classList.contains('dark');
      if (mobileThemeIcon) {
        mobileThemeIcon.className = isDark
          ? 'fa-solid fa-moon text-emerald-400'
          : 'fa-solid fa-sun text-amber-500';
      }
      if (sunLabel && moonLabel) {
        sunLabel.classList.toggle('text-white', !isDark);
        moonLabel.classList.toggle('text-white', isDark);
      }
    }

    function toggleTheme() {
      htmlEl.classList.toggle('dark');
      syncThemeUI();
    }

    themeTogglePill?.addEventListener('click', toggleTheme);
    mobileThemeBtn?.addEventListener('click', toggleTheme);
    syncThemeUI();

    // =========================================================================
    // 5. HERO TYPEWRITER SUBTITLE & INTERACTIVE "MY JOURNEY" TIMELINE
    // =========================================================================
    const roles = ["Problem Solver", "Data Explorer", "Cloud Learner", "Software Builder"];
    let roleIdx = 0;
    let charIdx = roles[0].length;
    let deleting = true;
    const dynamicRoleEl = document.getElementById('dynamicRoleText');

    function tickRole() {
      if (!dynamicRoleEl) return;
      const currentWord = roles[roleIdx];
      if (deleting) {
        charIdx--;
        dynamicRoleEl.textContent = currentWord.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          setTimeout(tickRole, 320);
          return;
        }
        setTimeout(tickRole, 55);
      } else {
        charIdx++;
        dynamicRoleEl.textContent = currentWord.slice(0, charIdx);
        if (charIdx === currentWord.length) {
          deleting = true;
          setTimeout(tickRole, 1800);
          return;
        }
        setTimeout(tickRole, 85);
      }
    }
    setTimeout(tickRole, 1800);

    // Power Up My Journey Nodes
    const powerJourneyBtn = document.getElementById('powerJourneyBtn');
    const powerJourneyLabel = document.getElementById('powerJourneyLabel');
    const journeyNodes = document.querySelectorAll('.journey-node');
    let journeyRunning = false;

    powerJourneyBtn?.addEventListener('click', () => {
      if (journeyRunning) return;
      journeyRunning = true;
      if (powerJourneyLabel) powerJourneyLabel.textContent = "Powering up...";

      journeyNodes.forEach((node) => {
        node.style.borderColor = "";
        node.style.boxShadow = "";
        const icon = node.querySelector('.journey-icon');
        if (icon) icon.className = "journey-icon w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-3 transition-all";
      });

      journeyNodes.forEach((node, idx) => {
        setTimeout(() => {
          node.style.borderColor = "rgba(16, 185, 129, 0.75)";
          node.style.boxShadow = "0 12px 30px -8px rgba(168, 85, 247, 0.45)";
          const icon = node.querySelector('.journey-icon');
          if (icon) {
            icon.className = "journey-icon w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-500 text-white flex items-center justify-center mb-3 shadow-lg scale-110 transition-all";
          }
          if (idx === journeyNodes.length - 1) {
            if (powerJourneyLabel) powerJourneyLabel.textContent = "Journey Powered!";
            journeyRunning = false;
          }
        }, idx * 420);
      });
    });

    // =========================================================================
    // 6. RENDER EXPERIENCES & SKILLS
    // =========================================================================
    const experiencesGrid = document.getElementById('experiencesGrid');
    if (experiencesGrid) {
      experiencesGrid.innerHTML = experiencesData.map((exp, i) => `
        <article class="bento-subcard stagger-card p-5 sm:p-6 flex flex-col justify-between" style="animation-delay: ${i * 70}ms;">
          <div>
            <div class="flex items-start justify-between gap-3">
              <div>
                <h3 class="font-display text-base sm:text-lg font-bold">${exp.role}</h3>
                <p class="text-xs font-semibold text-emerald-400 mt-0.5">${exp.company}</p>
              </div>
              <span class="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 shrink-0">
                ${exp.period}
              </span>
            </div>
            <p class="text-xs sm:text-sm mt-3 leading-relaxed" style="color: var(--text-secondary);">
              ${exp.summary}
            </p>
          </div>
          <div class="flex flex-wrap gap-1.5 mt-4 pt-3 border-t" style="border-color: var(--border-subtle);">
            ${exp.tags.map(t => `<span class="skill-pill px-2.5 py-0.5 rounded-full text-[11px] font-medium">${t}</span>`).join('')}
          </div>
        </article>
      `).join('');
    }

    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid) {
      skillsGrid.innerHTML = skillsData.map((group, i) => `
        <div class="bento-subcard stagger-card p-5 space-y-3.5" style="animation-delay: ${i * 70}ms;">
          <h3 class="font-display text-xs font-extrabold uppercase tracking-wider ${group.accent}">
            ${group.category}
          </h3>
          <div class="flex flex-wrap gap-2">
            ${group.items.map(skill => `
              <span class="skill-pill px-3 py-1.5 rounded-full text-xs font-medium">
                ${skill}
              </span>
            `).join('')}
          </div>
        </div>
      `).join('');
    }

    // =========================================================================
    // 7. RENDER PROJECTS (Filter + 4 Per Page + Next/Previous + Inspection Modal)
    // =========================================================================
    let currentProjFilter = 'all';
    let currentProjPage = 1;
    const PROJ_PER_PAGE = 4;

    const projectsGrid = document.getElementById('projectsGrid');
    const projPageSummary = document.getElementById('projPageSummary');
    const projPageNumbers = document.getElementById('projPageNumbers');
    const projPrevBtn = document.getElementById('projPrevBtn');
    const projNextBtn = document.getElementById('projNextBtn');
    const projFilterBtns = document.querySelectorAll('.proj-filter-btn');

    const projectModal = document.getElementById('projectModal');
    const closeProjModalBtn = document.getElementById('closeProjModal');

    function closeProj() {
      projectModal?.classList.add('hidden');
      projectModal?.classList.remove('flex');
    }
    closeProjModalBtn?.addEventListener('click', closeProj);
    projectModal?.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProj();
    });

    function openProjectModal(proj) {
      if (!projectModal) return;
      document.getElementById('modalProjBadge').textContent = proj.category;
      document.getElementById('modalProjTitle').textContent = proj.title;
      document.getElementById('modalProjDesc').textContent = proj.desc;
      document.getElementById('modalProjRepo').href = proj.repo;

      document.getElementById('modalProjHighlights').innerHTML = proj.highlights
        .map(h => `<div class="flex items-start gap-2"><i class="fa-solid fa-check text-emerald-400 mt-1 text-[10px]"></i><span>${h}</span></div>`)
        .join('');

      document.getElementById('modalProjTags').innerHTML = proj.badges
        .map(b => `<span class="px-2.5 py-1 rounded-full text-[11px] font-bold text-white ${b.color}">${b.label}</span>`)
        .join('');

      projectModal.classList.remove('hidden');
      projectModal.classList.add('flex');
    }

    function renderProjects() {
      if (!projectsGrid) return;
      const filtered = currentProjFilter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === currentProjFilter);

      const totalPages = Math.max(1, Math.ceil(filtered.length / PROJ_PER_PAGE));
      if (currentProjPage > totalPages) currentProjPage = totalPages;

      const startIdx = (currentProjPage - 1) * PROJ_PER_PAGE;
      const pageItems = filtered.slice(startIdx, startIdx + PROJ_PER_PAGE);

      projectsGrid.innerHTML = pageItems.map((proj, idx) => `
        <article class="bento-subcard stagger-card flex flex-col justify-between cursor-pointer group" style="animation-delay: ${idx * 65}ms;" data-proj-index="${startIdx + idx}">
          <div>
            <div class="relative h-40 overflow-hidden bg-black/40">
              <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ${proj.featured ? `<span class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow">Featured</span>` : ''}
            </div>
            <div class="p-4">
              <h3 class="font-display text-sm sm:text-base font-bold group-hover:text-emerald-400 transition-colors">${proj.title}</h3>
              <p class="text-xs mt-1.5 line-clamp-3 leading-relaxed" style="color: var(--text-secondary);">${proj.desc}</p>
            </div>
          </div>
          <div class="px-4 pb-4 pt-2 flex items-center justify-between">
            <div class="flex items-center -space-x-1">
              ${proj.badges.map(b => `<span class="w-6 h-6 rounded-full ${b.color} text-white text-[9px] font-extrabold flex items-center justify-center ring-2 ring-[#161522]">${b.label}</span>`).join('')}
            </div>
            <span class="w-7 h-7 rounded-lg glass-badge flex items-center justify-center text-[11px] opacity-80 group-hover:opacity-100 group-hover:text-emerald-400">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </span>
          </div>
        </article>
      `).join('');

      projectsGrid.querySelectorAll('[data-proj-index]').forEach((card) => {
        card.addEventListener('click', () => {
          const item = filtered[Number(card.getAttribute('data-proj-index'))];
          if (item) openProjectModal(item);
        });
      });

      if (projPageSummary) {
        const endNum = Math.min(startIdx + PROJ_PER_PAGE, filtered.length);
        projPageSummary.textContent = filtered.length === 0
          ? 'No projects in this category'
          : `Showing ${startIdx + 1}–${endNum} of ${filtered.length} projects`;
      }

      if (projPrevBtn) projPrevBtn.disabled = currentProjPage <= 1;
      if (projNextBtn) projNextBtn.disabled = currentProjPage >= totalPages;

      if (projPageNumbers) {
        projPageNumbers.innerHTML = Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          const activeCls = page === currentProjPage ? 'grad-cta' : 'bento-subcard';
          return `<button type="button" data-proj-page="${page}" class="${activeCls} w-8 h-8 rounded-full text-xs font-bold cursor-pointer">${page}</button>`;
        }).join('');

        projPageNumbers.querySelectorAll('[data-proj-page]').forEach((btn) => {
          btn.addEventListener('click', () => {
            currentProjPage = Number(btn.getAttribute('data-proj-page'));
            renderProjects();
          });
        });
      }
    }

    projFilterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        currentProjFilter = btn.getAttribute('data-proj-filter') || 'all';
        currentProjPage = 1;
        projFilterBtns.forEach((b) => {
          if (b === btn) {
            b.classList.add('grad-cta');
            b.classList.remove('bento-subcard');
          } else {
            b.classList.remove('grad-cta');
            b.classList.add('bento-subcard');
          }
        });
        renderProjects();
      });
    });

    projPrevBtn?.addEventListener('click', () => {
      if (currentProjPage > 1) {
        currentProjPage--;
        renderProjects();
      }
    });

    projNextBtn?.addEventListener('click', () => {
      const filtered = currentProjFilter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === currentProjFilter);
      const totalPages = Math.ceil(filtered.length / PROJ_PER_PAGE);
      if (currentProjPage < totalPages) {
        currentProjPage++;
        renderProjects();
      }
    });

    renderProjects();

    // =========================================================================
    // 8. RENDER CERTIFICATIONS (3 Per Page + Next/Previous + Credential Modal)
    // =========================================================================
    let currentCertPage = 1;
    const CERT_PER_PAGE = 3;

    const certificationsGrid = document.getElementById('certificationsGrid');
    const certPageSummary = document.getElementById('certPageSummary');
    const certPageNumbers = document.getElementById('certPageNumbers');
    const certPrevBtn = document.getElementById('certPrevBtn');
    const certNextBtn = document.getElementById('certNextBtn');
    const certModal = document.getElementById('certModal');
    const closeCertModalBtn = document.getElementById('closeCertModal');

    function closeCertModal() {
      certModal?.classList.add('hidden');
      certModal?.classList.remove('flex');
    }
    closeCertModalBtn?.addEventListener('click', closeCertModal);
    certModal?.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });

    function openCertModal(cert) {
      if (!certModal) return;
      document.getElementById('modalCertImg').src = cert.image;
      document.getElementById('modalCertDate').textContent = cert.date;
      document.getElementById('modalCertTitle').textContent = cert.title;
      document.getElementById('modalCertIssuer').textContent = cert.issuer;
      document.getElementById('modalCertDesc').textContent = cert.desc;
      document.getElementById('modalCertId').textContent = cert.id;
      document.getElementById('modalCertVerify').href = cert.verifyUrl;
      certModal.classList.remove('hidden');
      certModal.classList.add('flex');
    }

    function renderCertifications() {
      if (!certificationsGrid) return;
      const totalPages = Math.max(1, Math.ceil(certificationsData.length / CERT_PER_PAGE));
      if (currentCertPage > totalPages) currentCertPage = totalPages;

      const startIdx = (currentCertPage - 1) * CERT_PER_PAGE;
      const pageItems = certificationsData.slice(startIdx, startIdx + CERT_PER_PAGE);

      certificationsGrid.innerHTML = pageItems.map((cert, idx) => `
        <article class="bento-subcard stagger-card flex flex-col justify-between cursor-pointer group" style="animation-delay: ${idx * 70}ms;" data-cert-idx="${startIdx + idx}">
          <div>
            <div class="relative h-40 overflow-hidden bg-black/40">
              <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#141320] via-transparent to-transparent"></div>
              <span class="absolute bottom-2.5 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600/90 text-white">
                ${cert.date}
              </span>
            </div>
            <div class="p-4">
              <h3 class="font-display text-base font-bold group-hover:text-emerald-400 transition-colors">${cert.title}</h3>
              <p class="text-xs font-semibold text-emerald-400 mt-0.5">${cert.issuer}</p>
              <p class="text-xs mt-2 line-clamp-2 leading-relaxed" style="color: var(--text-secondary);">${cert.desc}</p>
            </div>
          </div>
          <div class="px-4 pb-4 pt-2 flex items-center justify-between text-[11px]" style="color: var(--text-muted);">
            <span class="font-mono">${cert.id}</span>
            <span class="text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform">View →</span>
          </div>
        </article>
      `).join('');

      certificationsGrid.querySelectorAll('[data-cert-idx]').forEach((card) => {
        card.addEventListener('click', () => {
          const item = certificationsData[Number(card.getAttribute('data-cert-idx'))];
          if (item) openCertModal(item);
        });
      });

      if (certPageSummary) {
        const endNum = Math.min(startIdx + CERT_PER_PAGE, certificationsData.length);
        certPageSummary.textContent = `Showing ${startIdx + 1}–${endNum} of ${certificationsData.length} certifications`;
      }

      if (certPrevBtn) certPrevBtn.disabled = currentCertPage <= 1;
      if (certNextBtn) certNextBtn.disabled = currentCertPage >= totalPages;

      if (certPageNumbers) {
        certPageNumbers.innerHTML = Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          const activeCls = page === currentCertPage ? 'grad-cta' : 'bento-subcard';
          return `<button type="button" data-cert-page="${page}" class="${activeCls} w-8 h-8 rounded-full text-xs font-bold cursor-pointer">${page}</button>`;
        }).join('');

        certPageNumbers.querySelectorAll('[data-cert-page]').forEach((btn) => {
          btn.addEventListener('click', () => {
            currentCertPage = Number(btn.getAttribute('data-cert-page'));
            renderCertifications();
          });
        });
      }
    }

    certPrevBtn?.addEventListener('click', () => {
      if (currentCertPage > 1) {
        currentCertPage--;
        renderCertifications();
      }
    });

    certNextBtn?.addEventListener('click', () => {
      const totalPages = Math.ceil(certificationsData.length / CERT_PER_PAGE);
      if (currentCertPage < totalPages) {
        currentCertPage++;
        renderCertifications();
      }
    });

    renderCertifications();

    // =========================================================================
    // 9. RENDER EXTRACURRICULARS (3 Per Page + Prev/Next + Detail Modal)
    // =========================================================================
    let currentExtraPage = 1;
    const EXTRA_PER_PAGE = 3;

    const extracurricularsGrid = document.getElementById('extracurricularsGrid');
    const extraPageSummary = document.getElementById('extraPageSummary');
    const extraPageDots = document.getElementById('extraPageDots');
    const extraPrevBtn = document.getElementById('extraPrevBtn');
    const extraNextBtn = document.getElementById('extraNextBtn');
    const extraModal = document.getElementById('extraModal');
    const closeExtraModalBtn = document.getElementById('closeExtraModal');

    function closeExtraModal() {
      extraModal?.classList.add('hidden');
      extraModal?.classList.remove('flex');
    }
    closeExtraModalBtn?.addEventListener('click', closeExtraModal);
    extraModal?.addEventListener('click', (e) => {
      if (e.target === extraModal) closeExtraModal();
    });

    function openExtraModal(item) {
      if (!extraModal) return;
      document.getElementById('modalExtraImg').src = item.image;
      document.getElementById('modalExtraBadge').textContent = item.badge;
      document.getElementById('modalExtraTitle').textContent = item.title;
      document.getElementById('modalExtraOrg').textContent = item.org;
      document.getElementById('modalExtraDesc').textContent = item.desc;
      document.getElementById('modalExtraLink').href = item.link;

      document.getElementById('modalExtraHighlights').innerHTML = item.highlights
        .map(h => `<div class="flex items-start gap-2"><i class="fa-solid fa-star text-emerald-400 mt-1 text-[10px]"></i><span>${h}</span></div>`)
        .join('');

      extraModal.classList.remove('hidden');
      extraModal.classList.add('flex');
    }

    function renderExtracurriculars() {
      if (!extracurricularsGrid) return;
      const totalPages = Math.max(1, Math.ceil(extracurricularData.length / EXTRA_PER_PAGE));
      if (currentExtraPage > totalPages) currentExtraPage = totalPages;

      const startIdx = (currentExtraPage - 1) * EXTRA_PER_PAGE;
      const pageItems = extracurricularData.slice(startIdx, startIdx + EXTRA_PER_PAGE);

      extracurricularsGrid.innerHTML = pageItems.map((item, idx) => `
        <article class="bento-subcard stagger-card relative h-[265px] overflow-hidden cursor-pointer group" style="animation-delay: ${idx * 70}ms;" data-extra-idx="${startIdx + idx}">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/15"></div>
          <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/55 backdrop-blur-xs text-emerald-200 border border-white/10">
            ${item.badge}
          </span>
          <span class="absolute top-3 right-3 w-8 h-8 rounded-xl bg-black/55 backdrop-blur-xs border border-white/15 text-white flex items-center justify-center text-xs group-hover:bg-emerald-600 transition-colors">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </span>
          <div class="absolute bottom-0 inset-x-0 p-4 text-white">
            <h3 class="font-display text-base font-bold leading-snug">${item.title}</h3>
            <p class="text-xs text-zinc-300 mt-1 line-clamp-2 leading-relaxed">${item.desc}</p>
          </div>
        </article>
      `).join('');

      extracurricularsGrid.querySelectorAll('[data-extra-idx]').forEach((card) => {
        card.addEventListener('click', () => {
          const item = extracurricularData[Number(card.getAttribute('data-extra-idx'))];
          if (item) openExtraModal(item);
        });
      });

      if (extraPageSummary) {
        const endNum = Math.min(startIdx + EXTRA_PER_PAGE, extracurricularData.length);
        extraPageSummary.textContent = `Showing ${startIdx + 1}–${endNum} of ${extracurricularData.length} activities`;
      }

      if (extraPrevBtn) extraPrevBtn.disabled = currentExtraPage <= 1;
      if (extraNextBtn) extraNextBtn.disabled = currentExtraPage >= totalPages;

      if (extraPageDots) {
        extraPageDots.innerHTML = Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          const activeCls = page === currentExtraPage ? 'grad-cta' : 'bento-subcard';
          return `<button type="button" data-extra-page="${page}" class="${activeCls} w-8 h-8 rounded-full text-xs font-bold cursor-pointer">${page}</button>`;
        }).join('');

        extraPageDots.querySelectorAll('[data-extra-page]').forEach((btn) => {
          btn.addEventListener('click', () => {
            currentExtraPage = Number(btn.getAttribute('data-extra-page'));
            renderExtracurriculars();
          });
        });
      }
    }

    extraPrevBtn?.addEventListener('click', () => {
      if (currentExtraPage > 1) {
        currentExtraPage--;
        renderExtracurriculars();
      }
    });

    extraNextBtn?.addEventListener('click', () => {
      const totalPages = Math.ceil(extracurricularData.length / EXTRA_PER_PAGE);
      if (currentExtraPage < totalPages) {
        currentExtraPage++;
        renderExtracurriculars();
      }
    });

    renderExtracurriculars();

    // =========================================================================
    // 10. RESUME PRINT, CONTACT FORM & CLIPBOARD COPY
    // =========================================================================
    document.getElementById('printResumeBtn')?.addEventListener('click', () => {
      window.print();
    });

    document.getElementById('copyEmailAction')?.addEventListener('click', () => {
      const email = 'asimazad203@gmail.com';
      const tempInput = document.createElement('input');
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast('Copied asimazad203@gmail.com to clipboard!');
    });

    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.reset();
      showToast('Message sent! Asim will get back to you soon.');
    });

    // Cursor spotlight tracking on bento subcards
    document.addEventListener('mousemove', (e) => {
      document.querySelectorAll('.bento-subcard').forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (typeof closeProj === 'function') closeProj();
        if (typeof closeExtraModal === 'function') closeExtraModal();
        if (typeof closeCertModal === 'function') closeCertModal();
        if (typeof closeDrawer === 'function') closeDrawer();
      }
    });
