document.addEventListener('DOMContentLoaded', () => {
    const PASSWORD = 'szadmin';
    const authModal = document.getElementById('authModal');
    const slidesContent = document.getElementById('slidesContent');
    const authForm = document.getElementById('authForm');
    const authError = document.getElementById('authError');
    const passwordInput = document.getElementById('password');
    const languageSelect = document.getElementById('languageSelect');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slidesContainer = document.querySelector('.slides-container');

    let currentLanguage = localStorage.getItem('presentationLanguage') || 'pt-BR';
    let currentSlide = 0;
    let translations = {};
    let presentations = {};
    let totalSlides = 0;

    const visualPotentialMeta = {
        'pt-BR': [
            { icon: 'ph-bowl-food', chipA: 'Automacao', chipB: 'Qualidade', roi: 74 },
            { icon: 'ph-mountains', chipA: 'Preditivo', chipB: 'Alertas', roi: 81 },
            { icon: 'ph-car', chipA: 'KPI', chipB: 'Turnos', roi: 69 },
            { icon: 'ph-package', chipA: 'Roteamento', chipB: 'Tempo real', roi: 77 },
            { icon: 'ph-lightning', chipA: 'Asset health', chipB: 'Risco', roi: 85 },
            { icon: 'ph-heartbeat', chipA: 'Compliance', chipB: 'Rastreio', roi: 72 }
        ],
        'es-ES': [
            { icon: 'ph-bowl-food', chipA: 'Automatizacion', chipB: 'Calidad', roi: 74 },
            { icon: 'ph-mountains', chipA: 'Predictivo', chipB: 'Alertas', roi: 81 },
            { icon: 'ph-car', chipA: 'KPI', chipB: 'Turnos', roi: 69 },
            { icon: 'ph-package', chipA: 'Enrutado', chipB: 'Tiempo real', roi: 77 },
            { icon: 'ph-lightning', chipA: 'Asset health', chipB: 'Riesgo', roi: 85 },
            { icon: 'ph-heartbeat', chipA: 'Compliance', chipB: 'Trazabilidad', roi: 72 }
        ]
    };

    const visualPitchMeta = {
        'pt-BR': [
            { tagA: '2 semanas', tagB: 'Quick win' },
            { tagA: '4-8 semanas', tagB: 'Integracao' },
            { tagA: '8+ semanas', tagB: 'Escala global' }
        ],
        'es-ES': [
            { tagA: '2 semanas', tagB: 'Quick win' },
            { tagA: '4-8 semanas', tagB: 'Integracion' },
            { tagA: '8+ semanas', tagB: 'Escala global' }
        ]
    };

    const potentialByIndustry = {
        'pt-BR': {
            title: 'Potencial de Implementacao em Outras Industrias',
            subtitle: 'Solucoes ja validadas que podem ser escaladas para novos setores com adaptacao rapida.',
            note: 'As imagens abaixo representam cenarios de aplicacao e nao dados operacionais confidenciais.',
            pitchTitle: 'Modo Pitch: Ofertas por Nivel',
            pitch: [
                {
                    title: 'Implementacao Rapida',
                    desc: 'Diagnostico de 2 semanas com dashboard inicial e automacao de alertas criticos.'
                },
                {
                    title: 'Implementacao Intermedia',
                    desc: 'Integra dados operacionais, padroniza KPIs e entrega fluxos de decisao com IA.'
                },
                {
                    title: 'Implementacao Enterprise',
                    desc: 'Arquitetura multi-planta com governanca, preditivo avancado e escalabilidade global.'
                }
            ],
            cards: [
                {
                    title: 'Alimentos e Bebidas',
                    desc: 'Predicao de falhas em linhas de envase e alertas automáticos para manutencao.',
                    image: 'images/project-patio.jpg'
                },
                {
                    title: 'Mineracao',
                    desc: 'Monitoramento continuo de ativos criticos com distribuicao inteligente de alarmes.',
                    image: 'images/project-vision.jpg'
                },
                {
                    title: 'Automotiva',
                    desc: 'Automacao de ordens e dashboards para controle de paradas e rendimento por turno.',
                    image: 'images/project-dashboard.jpg'
                },
                {
                    title: 'Logistica e Armazens',
                    desc: 'Fluxos com IA para classificacao de ocorrencias e roteamento em tempo real.',
                    image: 'images/project-automation-new.jpg'
                },
                {
                    title: 'Energia',
                    desc: 'Pipelines de dados para manutencao preditiva e visualizacao operacional em tempo real.',
                    image: 'images/project-ai.jpg'
                },
                {
                    title: 'Saude e Farma',
                    desc: 'Automacao de comunicacoes criticas e rastreabilidade de indicadores com compliance.',
                    image: 'images/project-whatsapp.jpg'
                }
            ]
        },
        'es-ES': {
            title: 'Potencial de Implementacion en Otras Industrias',
            subtitle: 'Soluciones ya validadas que pueden escalarse a nuevos sectores con adaptacion rapida.',
            note: 'Las imagenes de abajo representan escenarios de aplicacion y no datos operativos confidenciales.',
            pitchTitle: 'Modo Pitch: Ofertas por Nivel',
            pitch: [
                {
                    title: 'Implementacion Rapida',
                    desc: 'Diagnostico de 2 semanas con dashboard inicial y automatizacion de alertas criticas.'
                },
                {
                    title: 'Implementacion Intermedia',
                    desc: 'Integra datos operativos, estandariza KPIs y entrega flujos de decision con IA.'
                },
                {
                    title: 'Implementacion Enterprise',
                    desc: 'Arquitectura multi-planta con gobernanza, predictivo avanzado y escalabilidad global.'
                }
            ],
            cards: [
                {
                    title: 'Alimentos y Bebidas',
                    desc: 'Prediccion de fallas en lineas de envasado y alertas automaticas para mantenimiento.',
                    image: 'images/project-patio.jpg'
                },
                {
                    title: 'Mineria',
                    desc: 'Monitoreo continuo de activos criticos con distribucion inteligente de alarmas.',
                    image: 'images/project-vision.jpg'
                },
                {
                    title: 'Automotriz',
                    desc: 'Automatizacion de ordenes y dashboards para control de paradas y rendimiento por turno.',
                    image: 'images/project-dashboard.jpg'
                },
                {
                    title: 'Logistica y Almacenes',
                    desc: 'Flujos con IA para clasificacion de incidencias y enrutamiento en tiempo real.',
                    image: 'images/project-automation-new.jpg'
                },
                {
                    title: 'Energia',
                    desc: 'Pipelines de datos para mantenimiento predictivo y visualizacion operativa en tiempo real.',
                    image: 'images/project-ai.jpg'
                },
                {
                    title: 'Salud y Farma',
                    desc: 'Automatizacion de comunicaciones criticas y trazabilidad de indicadores con compliance.',
                    image: 'images/project-whatsapp.jpg'
                }
            ]
        }
    };

    // ===== AUTHENTICATION =====
    const isAuthenticated = () => {
        return sessionStorage.getItem('presentationAuth') === 'true';
    };

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const enteredPassword = passwordInput.value;

        if (enteredPassword === PASSWORD) {
            sessionStorage.setItem('presentationAuth', 'true');
            authModal.classList.remove('active');
            slidesContent.classList.remove('hidden');
            loadPresentation();
        } else {
            authError.textContent = 'Senha incorreta. Tente novamente.';
            authError.style.display = 'block';
            passwordInput.value = '';
            passwordInput.focus();
        }
    });

    passwordInput.addEventListener('focus', () => {
        authError.style.display = 'none';
    });

    // If already authenticated, skip auth modal
    if (isAuthenticated()) {
        authModal.classList.remove('active');
        slidesContent.classList.remove('hidden');
        loadPresentation();
    }

    // ===== LOAD TRANSLATIONS & PRESENTATIONS =====
    const loadTranslations = async () => {
        try {
            const response = await fetch('js/translations.json');
            translations = await response.json();
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    };

    const loadPresentations = async () => {
        try {
            const response = await fetch('js/presentations.json');
            presentations = await response.json();
        } catch (error) {
            console.error('Error loading presentations:', error);
        }
    };

    // ===== RENDER SLIDES =====
    const renderSlides = () => {
        const container = document.getElementById('projectSlidesContainer');
        const potentialGrid = document.getElementById('potentialGrid');
        const pitchGrid = document.getElementById('pitchGrid');
        container.innerHTML = '';
        potentialGrid.innerHTML = '';
        pitchGrid.innerHTML = '';

        const projectsData = presentations[currentLanguage] || [];
        const potential = potentialByIndustry[currentLanguage] || potentialByIndustry['pt-BR'];
        const potentialMeta = visualPotentialMeta[currentLanguage] || visualPotentialMeta['pt-BR'];
        const pitchMeta = visualPitchMeta[currentLanguage] || visualPitchMeta['pt-BR'];

        const compactText = (text, max = 78) => {
            if (!text) return '';
            if (text.length <= max) return text;
            return text.slice(0, max).trim() + '...';
        };

        potential.pitch.forEach((tier, idx) => {
            const tierMeta = pitchMeta[idx] || { tagA: '', tagB: '' };
            const pitchEl = document.createElement('article');
            pitchEl.className = 'pitch-card';
            pitchEl.innerHTML = `
                <h4>${tier.title}</h4>
                <div class="pitch-meta">
                    <span class="meta-pill">${tierMeta.tagA}</span>
                    <span class="meta-pill">${tierMeta.tagB}</span>
                </div>
                <p class="text-compact">${compactText(tier.desc, 72)}</p>
            `;
            pitchGrid.appendChild(pitchEl);
        });

        potential.cards.forEach((card, idx) => {
            const meta = potentialMeta[idx] || { icon: 'ph-factory', chipA: 'Automacao', chipB: 'Dados', roi: 70 };
            const cardEl = document.createElement('article');
            cardEl.className = 'potential-card';
            cardEl.innerHTML = `
                <div class="potential-image-wrap">
                    <img class="potential-image" src="${card.image}" alt="${card.title}">
                    <span class="potential-overlay"><i class="ph ${meta.icon}"></i></span>
                </div>
                <div class="potential-body">
                    <h4>${card.title}</h4>
                    <div class="potential-chips">
                        <span class="mini-chip">${meta.chipA}</span>
                        <span class="mini-chip">${meta.chipB}</span>
                    </div>
                    <div class="roi-row">
                        <span>${currentLanguage === 'pt-BR' ? 'ROI potencial' : 'ROI potencial'}</span>
                        <strong>${meta.roi}%</strong>
                    </div>
                    <div class="roi-track"><div class="roi-fill" style="width: ${meta.roi}%"></div></div>
                    <p class="text-compact">${compactText(card.desc, 70)}</p>
                </div>
            `;
            potentialGrid.appendChild(cardEl);
        });

        const beforeLabel = currentLanguage === 'pt-BR' ? 'ANTES' : 'ANTES';
        const afterLabel = currentLanguage === 'pt-BR' ? 'DEPOIS' : 'DESPUES';
        const painLabel = currentLanguage === 'pt-BR' ? 'Dor principal' : 'Dolor principal';
        const actionLabel = currentLanguage === 'pt-BR' ? 'Acoes-chave' : 'Acciones clave';
        const impactLabel = currentLanguage === 'pt-BR' ? 'IMPACTO' : 'IMPACTO';

        projectsData.forEach((project, idx) => {
            const slideEl = document.createElement('div');
            slideEl.className = 'slide slide-project';
            slideEl.innerHTML = `
                <div class="slide-content">
                    <div class="slide-inner">
                        <div class="project-slide">
                            <div class="project-number">${idx + 1} / ${projectsData.length}</div>
                            <h2 class="project-slide-title">
                                <i class="ph-bold ph-${project.icon}"></i>
                                ${project.title}
                            </h2>
                            
                            <div class="project-slide-tech">
                                ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                            </div>

                            <div class="project-slide-content">
                                <div class="project-ba-grid">
                                    <div class="ba-card ba-before">
                                        <h3><i class="ph ph-warning-octagon"></i> ${beforeLabel}</h3>
                                        <p class="ba-kicker">${painLabel}</p>
                                        <p class="text-full">${project.problem}</p>
                                    </div>

                                    <div class="ba-card ba-after">
                                        <h3><i class="ph ph-rocket-launch"></i> ${afterLabel}</h3>
                                        <p class="ba-kicker">${actionLabel}</p>
                                        <ul>
                                            ${project.solution.slice(0, 2).map(item => `
                                                <li><i class="ph ph-check-circle"></i> ${item}</li>
                                            `).join('')}
                                        </ul>
                                    </div>
                                </div>

                                <div class="impact-block">
                                    <h3><i class="ph ph-trend-up"></i> ${impactLabel}</h3>
                                    <div class="impact-row">
                                        ${project.results.slice(0, 3).map(item => `
                                            <span class="impact-pill"><i class="ph ph-star-four"></i> ${compactText(item, 44)}</span>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(slideEl);
        });

        totalSlides = projectsData.length + 3; // title + potential + projects + thanks
        document.getElementById('totalSlides').textContent = totalSlides;
        updateIndicators();
    };

    // ===== NAVIGATION =====
    const updateIndicators = () => {
        const indicatorsContainer = document.getElementById('indicatorsContainer');
        indicatorsContainer.innerHTML = '';

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = `indicator ${i === currentSlide ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(i));
            indicatorsContainer.appendChild(dot);
        }
    };

    const showSlide = (n) => {
        const slides = document.querySelectorAll('.slide');
        
        if (n >= slides.length) currentSlide = 0;
        if (n < 0) currentSlide = slides.length - 1;

        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');

        document.getElementById('currentSlide').textContent = currentSlide + 1;
        updateIndicators();
    };

    const nextSlide = () => {
        currentSlide++;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide--;
        showSlide(currentSlide);
    };

    const goToSlide = (n) => {
        currentSlide = n;
        showSlide(currentSlide);
    };

    // ===== EVENT LISTENERS =====
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            nextSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            prevSlide();
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!isAuthenticated()) return;
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    // Touch/Swipe navigation
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let canSwipe = true;

    if (slidesContainer) {
        slidesContainer.addEventListener('touchstart', (e) => {
            const isScrollableContent = e.target.closest('.project-slide-content, .potential-grid');
            canSwipe = !isScrollableContent;
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        slidesContainer.addEventListener('touchend', (e) => {
            if (!canSwipe) return;
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;

            const deltaX = touchStartX - touchEndX;
            const deltaY = Math.abs(touchStartY - touchEndY);

            if (Math.abs(deltaX) > 60 && deltaY < 40) {
                if (deltaX > 0) nextSlide();
                else prevSlide();
            }
        }, { passive: true });
    }

    // ===== LANGUAGE UPDATE =====
    const updateLanguage = () => {
        localStorage.setItem('presentationLanguage', currentLanguage);
        const t = translations[currentLanguage] || {};

        if (currentLanguage === 'pt-BR') {
            document.documentElement.lang = 'pt-BR';
            document.title = 'Apresentação | Sebastián Zambrano';
        } else {
            document.documentElement.lang = 'es-ES';
            document.title = 'Presentación | Sebastián Zambrano';
        }

        // Update slide titles
        document.getElementById('slide1Title').textContent = currentLanguage === 'pt-BR' ? 
            '🧠 RECOMPILAÇÃO PROFISSIONAL DE PROJETOS' : 
            '🧠 RECOPILACIÓN PROFESIONAL DE PROYECTOS';

        document.getElementById('slide1Subtitle').textContent = 'Sebastián Zambrano — ' + 
            (currentLanguage === 'pt-BR' ? 'Automação & Data Solutions' : 'Automatización & Soluciones de Datos');

        document.getElementById('slide1Intro').textContent = currentLanguage === 'pt-BR' ?
            'Especialista em Automação e Análise de Dados para Indústria 4.0' :
            'Especialista en Automatización y Análisis de Datos para Industria 4.0';

        const potential = potentialByIndustry[currentLanguage] || potentialByIndustry['pt-BR'];
        document.getElementById('potentialTitle').innerHTML = `
            <i class="ph-bold ph-rocket-launch"></i>
            ${potential.title}
        `;
        document.getElementById('pitchTitle').textContent = potential.pitchTitle;
        document.getElementById('potentialSubtitle').textContent = potential.subtitle;
        document.getElementById('potentialNote').textContent = potential.note;
        document.getElementById('potentialCounter').textContent = currentLanguage === 'pt-BR' ? 'POTENCIAL' : 'POTENCIAL';

        document.getElementById('hintText').textContent = currentLanguage === 'pt-BR' ?
            'Usa ← → ou desliza para navegar' :
            'Usa ← → o desliza para navegar';

        document.getElementById('thanksTitle').textContent = currentLanguage === 'pt-BR' ? 'OBRIGADO' : 'GRACIAS';
        document.getElementById('thanksSubtitle').textContent = currentLanguage === 'pt-BR'
            ? 'Foi um prazer apresentar estas solucoes.'
            : 'Ha sido un placer presentar estas soluciones.';

        renderSlides();
        showSlide(0);
    };

    if (languageSelect) {
        languageSelect.value = currentLanguage;
        languageSelect.addEventListener('change', (e) => {
            currentLanguage = e.target.value;
            updateLanguage();
        });
    }

    // ===== INITIALIZATION =====
    const loadPresentation = async () => {
        await loadTranslations();
        await loadPresentations();
        updateLanguage();
    };
});
