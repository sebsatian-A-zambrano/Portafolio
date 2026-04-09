document.addEventListener('DOMContentLoaded', () => {
    
    // ===== LANGUAGE SYSTEM =====
    let translations = {};
    let currentLanguage = localStorage.getItem('language') || 'pt-BR';

    // Load translations
    const loadTranslations = async () => {
        try {
            const response = await fetch('js/translations.json');
            translations = await response.json();
            updatePageLanguage();
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    };

    // Update page language - Apply translations to all elements
    const updatePageLanguage = () => {
        const t = translations[currentLanguage];
        if (!t) return;

        document.documentElement.lang = currentLanguage;
        localStorage.setItem('language', currentLanguage);

        // Update page title
        if (currentLanguage === 'pt-BR') {
            document.title = 'Sebastian A. Zambrano | Analista de Dados & Automação Industrial';
        } else {
            document.title = 'Sebastian A. Zambrano | Analista de Datos & Automatización Industrial';
        }

        // Update navigation
        document.querySelectorAll('.nav-links a').forEach(link => {
            const href = link.getAttribute('href');
            if (href === '#about') link.textContent = t.nav.about;
            else if (href === '#skills') link.textContent = t.nav.skills;
            else if (href === '#experience') link.textContent = t.nav.experience;
            else if (href === '#projects') link.textContent = t.nav.projects;
            else if (href === 'presentation.html') link.textContent = t.nav.presentations;
            else if (href === '#contact') link.textContent = t.nav.contact;
        });

        // Hero Section
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroTitle = document.querySelector('.hero-title');
        const heroDesc = document.querySelector('.hero-desc');
        const scrollText = document.querySelector('.scroll-down span');

        if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
        if (heroTitle) {
            heroTitle.innerHTML = `${t.hero.title} <span class="highlight">${t.hero.titleHighlight}</span>`;
        }
        if (heroDesc) heroDesc.textContent = t.hero.description;
        if (scrollText) scrollText.textContent = t.hero.scroll;

        // Hero buttons
        document.querySelectorAll('.hero-btns a').forEach((btn, idx) => {
            if (idx === 0) btn.innerHTML = `${t.hero.viewProjects} <i class="ph ph-arrow-right"></i>`;
            else if (idx === 1) btn.textContent = t.hero.contact;
        });

        // Stats labels
        document.querySelectorAll('.stat-label').forEach((label, idx) => {
            const stats = [t.stats.experience, t.stats.projects, t.stats.efficiency];
            label.textContent = stats[idx];
        });

        // About Section
        const aboutTitle = document.querySelector('#about .section-title');
        const aboutTexts = document.querySelectorAll('#about .about-text p');
        const eduItems = document.querySelectorAll('.education-grid .edu-item');

        if (aboutTitle) {
            aboutTitle.innerHTML = `${t.about.title} <span class="highlight">${t.about.titleHighlight}</span>`;
        }
        if (aboutTexts[0]) aboutTexts[0].textContent = t.about.description1;
        if (aboutTexts[1]) aboutTexts[1].textContent = t.about.description2;

        if (eduItems[0]) {
            const h4s = eduItems[0].querySelectorAll('h4, span');
            if (h4s[0]) h4s[0].textContent = t.about.education;
            if (h4s[1]) h4s[1].textContent = t.about.universidade;
        }
        if (eduItems[1]) {
            const h4s = eduItems[1].querySelectorAll('h4, span');
            if (h4s[0]) h4s[0].textContent = t.about.mechanics;
            if (h4s[1]) h4s[1].textContent = t.about.senai;
        }

        // Skills Section
        const skillsTitle = document.querySelector('#skills .section-title');
        const skillCards = document.querySelectorAll('.skill-card h3');

        if (skillsTitle) {
            skillsTitle.innerHTML = `${t.skills.title} <span class="highlight">${t.skills.titleHighlight}</span>`;
        }
        if (skillCards[0]) skillCards[0].textContent = t.skills.analysis;
        if (skillCards[1]) skillCards[1].textContent = t.skills.automation;
        if (skillCards[2]) skillCards[2].textContent = t.skills.industrial;

        // Experience Section
        const experienceTitle = document.querySelector('#experience .section-title');
        const timelineHeaders = document.querySelectorAll('.timeline-header h3, .timeline-header .company, .timeline-header .date');

        if (experienceTitle) {
            experienceTitle.innerHTML = `${t.experience.title} <span class="highlight">${t.experience.titleHighlight}</span>`;
        }
        if (timelineHeaders[0]) timelineHeaders[0].textContent = t.experience.position;
        if (timelineHeaders[1]) timelineHeaders[1].textContent = t.experience.company;
        if (timelineHeaders[2]) timelineHeaders[2].textContent = t.experience.period;

        // Projects Section
        const projectsTitle = document.querySelector('#projects .section-title');
        if (projectsTitle) {
            projectsTitle.innerHTML = `${t.projects.title} <span class="highlight">${t.projects.titleHighlight}</span>`;
        }

        // Contact Section
        const contactTitle = document.querySelector('#contact .section-title');
        const contactIntro = document.querySelector('.contact-intro');
        const contactCards = document.querySelectorAll('.contact-link-card');

        if (contactTitle) {
            contactTitle.innerHTML = `${t.contact.title} <span class="highlight">${t.contact.titleHighlight}</span>`;
        }
        if (contactIntro) contactIntro.textContent = t.contact.subtitle;

        // Update contact links
        const contactInfo = [
            { text: 'Conecte-se comigo', translate: t.contact.connectLinkedin },
            { text: 'Siga meu trabalho', translate: t.contact.followInstagram },
            { text: '+55 14 99124-6031', translate: t.contact.whatsappText },
            { text: 'sebas0andres0zambrano@gmail.com', translate: t.contact.emailText }
        ];

        contactCards.forEach((card, idx) => {
            const span = card.querySelector('.contact-link-text span');
            if (span && contactInfo[idx]) {
                span.textContent = contactInfo[idx].translate;
            }
        });

        // Footer
        const footer = document.querySelector('footer p');
        if (footer) {
            footer.innerHTML = `&copy; 2026 Sebastian Andrés Zambrano Ledezma. ${t.footer}.`;
        }
    };

    // Language selector
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
        languageSelect.addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            updatePageLanguage();
        });
    }

    // Load translations on startup
    loadTranslations();
    
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('ph-list');
                icon.classList.add('ph-x');
            } else {
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (mobileBtn) {
                const icon = mobileBtn.querySelector('i');
                icon.classList.remove('ph-x');
                icon.classList.add('ph-list');
            }
        });
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.section-title, .glass-card, .hero-text, .hero-visual');
    
    // Add reveal class initially
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // revealObserver.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Number Counter Animation
    const statsSection = document.querySelector('.hero-stats');
    let statsAnimated = false;

    const animateStats = () => {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    };

    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !statsAnimated) {
                animateStats();
                statsAnimated = true;
            }
        });
        statsObserver.observe(statsSection);
    }

    // Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section, header');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });

    // Contact Form Handling (Prevent Default)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Enviado!';
            btn.style.background = 'var(--primary)';
            btn.style.color = '#000';
            
            setTimeout(() => {
                contactForm.reset();
                btn.innerText = originalText;
                btn.style.background = '';
                btn.style.color = '';
            }, 3000);
            
            alert('Obrigado! Sua mensagem foi recebida (simulação).');
        });
    }

    // Project Accordion Functionality
    const projectItems = document.querySelectorAll('.project-accordion-item');
    
    projectItems.forEach(item => {
        const header = item.querySelector('.project-header');
        
        header.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');
            
            // Close all other items
            projectItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
});
