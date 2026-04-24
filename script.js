/* 
   PARTICLES BACKGROUND
 */
(function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const count = 30;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        const size = Math.random() * 4 + 2;
        p.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            animation-duration: ${Math.random() * 15 + 10}s;
            animation-delay: ${Math.random() * 15}s;
        `;
        container.appendChild(p);
    }
})();

/* 
   TYPEWRITER EFFECT
 */
const phrases = [
    'Software Engineering Student',
    'Web Developer',
    'Problem Solver',
    'C# Developer',
    'C++ Developer',
    'MySQL',
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeLoop() {
    if (!typedEl) return;
    const current = phrases[phraseIndex];
    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeLoop, 500);
            return;
        }
        setTimeout(typeLoop, 40);
    } else {
        typedEl.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(typeLoop, 2000);
            return;
        }
        setTimeout(typeLoop, 80);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeLoop, 1200);
    initNav();
    countUpStats();
});
/*

   COUNT-UP STATS
*/
function countUpStats() {
    const els = document.querySelectorAll('.count-up');
    els.forEach(el => {
        const target = parseInt(el.dataset.target);
        let current = 0;
        const step = Math.ceil(target / 30);
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            el.textContent = current;
        }, 50);
    });
}

/* 
   PAGE NAVIGATION
 */
function initNav() {
    const buttons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    let currentIndex = 0;
    let isAnimating = false;

    if (!buttons.length || !pages.length) return;

    function showPage(index) {
        if (isAnimating) return;
        if (index >= pages.length) index = 0;
        if (index < 0) index = pages.length - 1;
        if (index === currentIndex) return;

        isAnimating = true;
        const currentPage = pages[currentIndex];
        const nextPage = pages[index];

        // Exit animation on current
        currentPage.style.animation = 'pageExit 0.3s ease forwards';
        
        setTimeout(() => {
            currentPage.classList.remove('active');
            currentPage.style.animation = '';
            currentIndex = index;

            buttons.forEach(b => b.classList.remove('active'));
            if (buttons[currentIndex]) buttons[currentIndex].classList.add('active');

            nextPage.classList.add('active');
            nextPage.style.animation = 'pageEnter 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards';

            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Re-run count-up if going to intro
            if (currentIndex === 0) countUpStats();

            setTimeout(() => {
                isAnimating = false;
                nextPage.style.animation = '';
            }, 700);
        }, 300);
    }

    buttons.forEach((btn, i) => {
        btn.addEventListener('click', () => showPage(i));
    });

    // Initial page
    pages[0].classList.add('active');
    buttons[0].classList.add('active');

    // Keyboard nav
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') showPage(currentIndex + 1);
        if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   showPage(currentIndex - 1);
    });

    // Touch / swipe
    let touchStartX = 0;
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    document.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) showPage(currentIndex + 1);
            else          showPage(currentIndex - 1);
        }
    }, { passive: true });
}

/* 
   MODAL
*/
function openModal(title, desc, link, icon) {
    const modal      = document.getElementById('projectModal');
    const titleEl    = document.getElementById('modalTitle');
    const descEl     = document.getElementById('modalDesc');
    const linkEl     = document.getElementById('modalLink');
    const iconEl     = document.getElementById('modalIcon');

    if (titleEl) titleEl.innerText = title;
    if (descEl)  descEl.innerText  = desc;
    if (linkEl)  linkEl.href       = link;
    if (iconEl)  iconEl.innerText  = icon || '🚀';

    if (modal) {
        modal.classList.add('show');
        // Re-trigger animation
        const content = modal.querySelector('.modal-content');
        if (content) {
            content.style.animation = 'none';
            void content.offsetWidth;
            content.style.animation = '';
        }
    }

    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    const content = modal?.querySelector('.modal-content');
    if (!modal) return;

    if (content) {
        content.style.animation = 'modalOut 0.25s ease forwards';
    }

    setTimeout(() => {
        modal.classList.remove('show');
        if (content) content.style.animation = '';
        document.body.style.overflow = '';
    }, 250);
}

// Inject close-out animation into styles dynamically
const styleTag = document.createElement('style');
styleTag.textContent = `
@keyframes modalOut {
    from { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
    to   { opacity: 0; transform: scale(0.9) translateY(20px); filter: blur(6px); }
}`;
document.head.appendChild(styleTag);

// Close modal on Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});