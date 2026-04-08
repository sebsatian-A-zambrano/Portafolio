document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // TRANSLATIONS (i18n)
    // =========================================
    const translations = {
        pt: {
            'nav.about': 'Sobre',
            'nav.skills': 'Skills',
            'nav.experience': 'Experiência',
            'nav.projects': 'Projetos',
            'nav.presentation': 'Apresentação',
            'nav.contact': 'Contato',
            'hero.subtitle': 'Analista de Dados | Automação & Indústria 4.0',
            'hero.title.main': 'Transformando Dados em',
            'hero.title.highlight': 'Inteligência Industrial',
            'hero.desc': 'Especialista em criar pontes entre dados operacionais e decisões estratégicas. Otimizando processos na DEXCO S.A. através de Python, Power BI, PI System e IA.',
            'hero.btn.projects': 'Ver Projetos',
            'hero.btn.contact': 'Entrar em Contato',
            'hero.stat.exp': 'Anos de Experiência',
            'hero.stat.projects': 'Projetos de Automação',
            'hero.stat.focus': 'Foco em Eficiência',
            'section.about': 'Sobre',
            'section.about.highlight': 'Mim',
            'about.p1': 'Atuo como <strong>Analista de Dados focado em Automação e Indústria 4.0</strong>, combinando expertise técnica em sistemas mecânicos com análise de dados avançada. Minha missão é transformar grandes volumes de dados industriais em insights acionáveis que impulsionam a eficiência operacional.',
            'about.p2': 'Atualmente na <strong>DEXCO S.A.</strong>, lidero iniciativas de digitalização que vão desde a extração de dados brutos do chão de fábrica (PI System) até a visualização executiva (Power BI/Grafana), passando por automações inteligentes (RPA/Python) que eliminam tarefas repetitivas e reduzem erros humanos.',
            'edu.systems': 'Análise de Sistemas',
            'edu.mechanics': 'Mecânica Industrial',
            'section.skills': 'Minhas',
            'section.skills.highlight': 'Habilidades',
            'skill.data': 'Análise de Dados',
            'skill.automation': 'Automação & RPA',
            'skill.industrial': 'Industrial & IoT',
            'section.experience': 'Jornada',
            'section.experience.highlight': 'Profissional',
            'exp.role': 'Analista de Dados | Automação & Indústria 4.0',
            'exp.date': 'Fev 2024 - Presente',
            'exp.detail1': 'Desenvolvimento de automações RPA para processos administrativos e industriais, reduzindo tempo manual.',
            'exp.detail2': 'Integração de dados SAP e extração de dados do PI System (OSIsoft) para análise de performance.',
            'exp.detail3': 'Criação de Dashboards e KPIs em Power BI, Grafana e Streamlit para monitoramento de ativos.',
            'exp.detail4': 'Implementação de pipelines de integração e APIs REST.',
            'exp.detail5': 'Análise preditiva de manutenção (vibração e óleo) utilizando dados históricos.',
            'section.projects': 'Projetos',
            'section.projects.highlight': 'Reais',
            'section.contact': 'Entre em',
            'section.contact.highlight': 'Contato',
            'contact.intro': 'Estou disponível para discutir novos projetos de automação e análise de dados.',
            'contact.linkedin': 'Conecte-se comigo',
            'contact.instagram': 'Siga meu trabalho',
            'footer.copyright': '© 2026 Sebastian Andrés Zambrano Ledezma. Todos os direitos reservados.',
            'section.presentation': 'Recopilação',
            'section.presentation.highlight': 'Profissional',
            'gate.title': 'Área Restrita',
            'gate.desc': 'Digite a chave de acesso para visualizar a apresentação profissional completa.',
            'gate.placeholder': 'Chave de acesso...',
            'gate.btn': 'Acessar',
            'gate.error': 'Chave incorreta. Tente novamente.',
            'presentation.subtitle': 'Sebastián Zambrano — Automation & Data Solutions',
            'presentation.name': '🧠 Recopilação Profissional de Projetos',
            'presentation.tagline': 'Recopilação completa de projetos profissionais em Automação Industrial, Análise de Dados e Inteligência Artificial.',
            'presentation.lock': 'Bloquear acesso',
            'label.problem': 'PROBLEMA',
            'label.solution': 'SOLUÇÃO',
            'label.result': 'RESULTADO',
            'label.objective': 'OBJETIVO',
            'label.impact': 'IMPACTO',
            'label.developments': 'DESENVOLVIMENTOS',
            'label.applications': 'APLICAÇÕES',
            'p1.title': 'Automatização de Ordens de Manutenção via WhatsApp',
            'p1.preview': 'Distribuição automática semanal de OM\'s para mecânicos e eletricistas via WhatsApp cada segunda-feira.',
            'p1.problem': 'Distribuição manual de OM\'s semanais para mecânicos e eletricistas gerava erros e perda de tempo.',
            'p1.solution': 'Automação que lê planilha Excel, valida disponibilidade do colaborador, evita envios duplicados e envia automaticamente toda segunda-feira.',
            'p1.result': 'Eliminação do envio manual, redução de erros operativos e comunicação automática com equipes de manutenção.',
            'p2.title': 'Automatização de Insights Preditivos TRACTIAN',
            'p2.preview': 'Sistema automático de distribuição de insights de monitoramento preditivo para grupos corretos por fábrica e linha.',
            'p2.problem': 'Insights de monitoramento preditivo chegavam por e-mail e precisavam ser distribuídos manualmente.',
            'p2.solution': 'Sistema que identifica fábrica e linha automaticamente, limpa HTML do e-mail, usa IA para resumir diagnósticos técnicos e envia alertas estruturados aos grupos corretos.',
            'p2.result': 'Informação acionável imediata e melhor tempo de resposta em manutenção.',
            'p3.title': 'Análise Industrial de Secadores (Temperatura vs Produção)',
            'p3.preview': 'Determinar se temperaturas elevadas afetam produção, umidade e padrão produtivo (PP) nos secadores industriais.',
            'p3.objective': 'Determinar se temperaturas elevadas afetam produção, umidade e padrão produtivo (PP) nos secadores industriais.',
            'p3.solution': 'Limpeza de dados históricos industriais, análise correlacional completa e visualizações de tendência claras para suporte à decisão.',
            'p3.impact': 'Base sólida para decisões operacionais baseadas em dados reais do processo industrial.',
            'p4.title': 'Análise de Variáveis do Pátio Industrial (Umidade e Densidade)',
            'p4.preview': 'Correlação entre umidade/densidade da matéria-prima e desempenho dos secadores e prensas.',
            'p4.problem': 'Variações na matéria-prima afetavam produção do secador sem que houvesse análise sistemática do impacto.',
            'p4.solution': 'Dashboard histórico correlacionando umidade, temperatura >130°C e impacto produtivo, com extração e análise de dados históricos do pátio.',
            'p4.result': 'Base analítica para otimização de processo e previsibilidade de produção com base na variação da matéria-prima.',
            'p5.title': 'Automatizações com IA (Langflow + n8n)',
            'p5.preview': 'Fluxos automáticos com IA para processamento inteligente de textos e automação de decisões operativas.',
            'p5.developments': 'Fluxos automáticos com IA, processamento inteligente de textos, automação de decisões operativas e integração entre sistemas sem intervenção humana.',
            'p5.result': 'Redução drástica de intervenção manual em tarefas repetitivas e geração automática de respostas e análises com LLMs integrados.',
            'p6.title': 'Automatização e Processamento de Dados em Databricks',
            'p6.preview': 'Transformação de datasets industriais e pipelines de análise para BI e IA na plataforma Databricks.',
            'p6.applications': 'Transformação de datasets industriais, pipelines de análise de dados e preparação de dados para BI e IA com escalabilidade na nuvem.',
            'p6.result': 'Infraestrutura de dados escalável para análise de grandes volumes de dados industriais com performance otimizada.',
            'p7.title': 'Dashboards Operacionais e BI',
            'p7.preview': 'Dashboards interativos para análise educacional e produtiva com visualizações orientadas à decisão rápida.',
            'p7.developments': 'Dashboards interativos com análise educacional e produtiva, visualizações orientadas à decisão rápida e KPIs em tempo real para múltiplas unidades industriais.',
            'p7.result': 'Visibilidade operacional consolidada que acelera a tomada de decisão e reduz tempo de análise manual.',
            'p8.title': 'Automatização Avançada com Excel + Macros',
            'p8.preview': 'Eliminação de tarefas repetitivas e controle operativo automatizado com VBA e lógica condicional avançada.',
            'p8.developments': 'Macros VBA com lógica condicional avançada para automação administrativa, geração de relatórios e controle operativo totalmente automatizado.',
            'p8.result': 'Eliminação de tarefas repetitivas, padronização de processos e controle operativo com zero erros manuais.',
            'p9.title': 'Interfaces Industriais com PI System',
            'p9.preview': 'Visualização de variáveis de processo, telas operacionais e análise em tempo real com PI System (OSIsoft).',
            'p9.applications': 'Visualização de variáveis de processo em tempo real, telas operacionais com KPIs e alarmes configurados, e análise histórica de dados industriais via PI System.',
            'p9.result': 'Visibilidade operacional em tempo real, redução de falhas não detectadas e maior confiabilidade do processo industrial.',
            'p10.title': 'Desenvolvimento Backend e Apps de Dados',
            'p10.preview': 'Aplicações de análise, interfaces de dados e sistemas backend para automação com Django e Streamlit.',
            'p10.developments': 'Aplicações web de análise de dados, interfaces interativas com Streamlit, sistemas backend com Django e APIs Python para integração com automações industriais.',
            'p10.result': 'Soluções completas full-stack que conectam dados industriais com interfaces de usuário intuitivas e sistemas automatizados.',
        },
        es: {
            'nav.about': 'Sobre',
            'nav.skills': 'Habilidades',
            'nav.experience': 'Experiencia',
            'nav.projects': 'Proyectos',
            'nav.presentation': 'Presentación',
            'nav.contact': 'Contacto',
            'hero.subtitle': 'Analista de Datos | Automatización e Industria 4.0',
            'hero.title.main': 'Transformando Datos en',
            'hero.title.highlight': 'Inteligencia Industrial',
            'hero.desc': 'Especialista en crear puentes entre datos operacionales y decisiones estratégicas. Optimizando procesos en DEXCO S.A. mediante Python, Power BI, PI System e IA.',
            'hero.btn.projects': 'Ver Proyectos',
            'hero.btn.contact': 'Entrar en Contacto',
            'hero.stat.exp': 'Años de Experiencia',
            'hero.stat.projects': 'Proyectos de Automatización',
            'hero.stat.focus': 'Enfoque en Eficiencia',
            'section.about': 'Sobre',
            'section.about.highlight': 'Mí',
            'about.p1': 'Me desempeño como <strong>Analista de Datos enfocado en Automatización e Industria 4.0</strong>, combinando experiencia técnica en sistemas mecánicos con análisis de datos avanzado. Mi misión es transformar grandes volúmenes de datos industriales en insights accionables que impulsan la eficiencia operacional.',
            'about.p2': 'Actualmente en <strong>DEXCO S.A.</strong>, lidero iniciativas de digitalización que van desde la extracción de datos brutos del piso de fábrica (PI System) hasta la visualización ejecutiva (Power BI/Grafana), pasando por automatizaciones inteligentes (RPA/Python) que eliminan tareas repetitivas y reducen errores humanos.',
            'edu.systems': 'Análisis de Sistemas',
            'edu.mechanics': 'Mecánica Industrial',
            'section.skills': 'Mis',
            'section.skills.highlight': 'Habilidades',
            'skill.data': 'Análisis de Datos',
            'skill.automation': 'Automatización & RPA',
            'skill.industrial': 'Industrial & IoT',
            'section.experience': 'Trayectoria',
            'section.experience.highlight': 'Profesional',
            'exp.role': 'Analista de Datos | Automatización e Industria 4.0',
            'exp.date': 'Feb 2024 - Presente',
            'exp.detail1': 'Desarrollo de automatizaciones RPA para procesos administrativos e industriales, reduciendo tiempo manual.',
            'exp.detail2': 'Integración de datos SAP y extracción de datos del PI System (OSIsoft) para análisis de rendimiento.',
            'exp.detail3': 'Creación de Dashboards y KPIs en Power BI, Grafana y Streamlit para monitoreo de activos.',
            'exp.detail4': 'Implementación de pipelines de integración y APIs REST.',
            'exp.detail5': 'Análisis predictivo de mantenimiento (vibración y aceite) utilizando datos históricos.',
            'section.projects': 'Proyectos',
            'section.projects.highlight': 'Reales',
            'section.contact': 'Ponte en',
            'section.contact.highlight': 'Contacto',
            'contact.intro': 'Estoy disponible para discutir nuevos proyectos de automatización y análisis de datos.',
            'contact.linkedin': 'Conéctate conmigo',
            'contact.instagram': 'Sigue mi trabajo',
            'footer.copyright': '© 2026 Sebastian Andrés Zambrano Ledezma. Todos los derechos reservados.',
            'section.presentation': 'Recopilación',
            'section.presentation.highlight': 'Profesional',
            'gate.title': 'Área Restringida',
            'gate.desc': 'Ingresa la clave de acceso para visualizar la presentación profesional completa.',
            'gate.placeholder': 'Clave de acceso...',
            'gate.btn': 'Acceder',
            'gate.error': 'Clave incorrecta. Inténtalo de nuevo.',
            'presentation.subtitle': 'Sebastián Zambrano — Automation & Data Solutions',
            'presentation.name': '🧠 Recopilación Profesional de Proyectos',
            'presentation.tagline': 'Recopilación completa de proyectos profesionales en Automatización Industrial, Análisis de Datos e Inteligencia Artificial.',
            'presentation.lock': 'Bloquear acceso',
            'label.problem': 'PROBLEMA',
            'label.solution': 'SOLUCIÓN',
            'label.result': 'RESULTADO',
            'label.objective': 'OBJETIVO',
            'label.impact': 'IMPACTO',
            'label.developments': 'DESARROLLOS',
            'label.applications': 'APLICACIONES',
            'p1.title': 'Automatización de Órdenes de Mantenimiento vía WhatsApp',
            'p1.preview': 'Distribución automática semanal de OM\'s para mecánicos y electricistas vía WhatsApp cada lunes.',
            'p1.problem': 'Distribución manual de OM\'s semanales para mecánicos y electricistas generaba errores y pérdida de tiempo.',
            'p1.solution': 'Automatización que lee planilla Excel, valida disponibilidad del colaborador, evita envíos duplicados y envía automáticamente cada lunes.',
            'p1.result': 'Eliminación del envío manual, reducción de errores operativos y comunicación automática con equipos de mantenimiento.',
            'p2.title': 'Automatización de Insights Predictivos TRACTIAN',
            'p2.preview': 'Sistema automático de distribución de insights de monitoreo predictivo para grupos correctos por fábrica y línea.',
            'p2.problem': 'Los insights de monitoreo predictivo llegaban por email y debían distribuirse manualmente.',
            'p2.solution': 'Sistema que identifica fábrica y línea automáticamente, limpia HTML del correo, usa IA para resumir diagnósticos técnicos y envía alertas estructuradas a los grupos correctos.',
            'p2.result': 'Información accionable inmediata y mejor tiempo de respuesta en mantenimiento.',
            'p3.title': 'Análisis Industrial de Secadores (Temperatura vs Producción)',
            'p3.preview': 'Determinar si temperaturas elevadas afectan producción, humedad y patrón productivo (PP) en los secadores industriales.',
            'p3.objective': 'Determinar si temperaturas elevadas afectan producción, humedad y patrón productivo (PP) en los secadores industriales.',
            'p3.solution': 'Limpieza de datos históricos industriales, análisis correlacional completo y visualizaciones de tendencia claras para soporte a la decisión.',
            'p3.impact': 'Base sólida para decisiones operacionales basadas en datos reales del proceso industrial.',
            'p4.title': 'Análisis de Variables del Patio Industrial (Humedad y Densidad)',
            'p4.preview': 'Correlación entre humedad/densidad de la materia prima y rendimiento de los secadores y prensas.',
            'p4.problem': 'Variaciones en la materia prima afectaban la producción del secador sin análisis sistemático del impacto.',
            'p4.solution': 'Dashboard histórico correlacionando humedad, temperatura >130°C e impacto productivo, con extracción y análisis de datos históricos del patio.',
            'p4.result': 'Base analítica para optimización de proceso y previsibilidad de producción según variación de materia prima.',
            'p5.title': 'Automatizaciones con IA (Langflow + n8n)',
            'p5.preview': 'Flujos automáticos con IA para procesamiento inteligente de textos y automatización de decisiones operativas.',
            'p5.developments': 'Flujos automáticos con IA, procesamiento inteligente de textos, automatización de decisiones operativas e integración entre sistemas sin intervención humana.',
            'p5.result': 'Reducción drástica de intervención manual en tareas repetitivas y generación automática de respuestas y análisis con LLMs integrados.',
            'p6.title': 'Automatización y Procesamiento de Datos en Databricks',
            'p6.preview': 'Transformación de datasets industriales y pipelines de análisis para BI e IA en la plataforma Databricks.',
            'p6.applications': 'Transformación de datasets industriales, pipelines de análisis de datos y preparación de datos para BI e IA con escalabilidad en la nube.',
            'p6.result': 'Infraestructura de datos escalable para análisis de grandes volúmenes de datos industriales con rendimiento optimizado.',
            'p7.title': 'Dashboards Operacionales y BI',
            'p7.preview': 'Dashboards interactivos para análisis educacional y productivo con visualizaciones orientadas a la decisión rápida.',
            'p7.developments': 'Dashboards interactivos con análisis educacional y productivo, visualizaciones orientadas a la decisión rápida y KPIs en tiempo real para múltiples unidades industriales.',
            'p7.result': 'Visibilidad operacional consolidada que acelera la toma de decisiones y reduce el tiempo de análisis manual.',
            'p8.title': 'Automatización Avanzada con Excel + Macros',
            'p8.preview': 'Eliminación de tareas repetitivas y control operativo automatizado con VBA y lógica condicional avanzada.',
            'p8.developments': 'Macros VBA con lógica condicional avanzada para automatización administrativa, generación de reportes y control operativo totalmente automatizado.',
            'p8.result': 'Eliminación de tareas repetitivas, estandarización de procesos y control operativo con cero errores manuales.',
            'p9.title': 'Interfaces Industriales con PI System',
            'p9.preview': 'Visualización de variables de proceso, pantallas operacionales y análisis en tiempo real con PI System (OSIsoft).',
            'p9.applications': 'Visualización de variables de proceso en tiempo real, pantallas operacionales con KPIs y alarmas configuradas, y análisis histórico de datos industriales vía PI System.',
            'p9.result': 'Visibilidad operacional en tiempo real, reducción de fallas no detectadas y mayor confiabilidad del proceso industrial.',
            'p10.title': 'Desarrollo Backend y Apps de Datos',
            'p10.preview': 'Aplicaciones de análisis, interfaces de datos y sistemas backend para automatización con Django y Streamlit.',
            'p10.developments': 'Aplicaciones web de análisis de datos, interfaces interactivas con Streamlit, sistemas backend con Django y APIs Python para integración con automatizaciones industriales.',
            'p10.result': 'Soluciones completas full-stack que conectan datos industriales con interfaces de usuario intuitivas y sistemas automatizados.',
        }
    };

    let currentLang = localStorage.getItem('lang') || 'pt';

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key] !== undefined) {
                el.textContent = translations[lang][key];
            }
        });

        // Update innerHTML (for elements with HTML content like <strong>)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (translations[lang][key] !== undefined) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key] !== undefined) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update lang buttons state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isActive = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        // Update html lang attribute
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'es-ES';
    }

    // Apply stored/default language
    setLanguage(currentLang);

    // Language button click handlers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // =========================================
    // PRESENTATION SECTION – PASSWORD GATE
    // =========================================
    const PRESENTATION_KEY = 'szadmin';
    const SESSION_UNLOCKED = 'pres_unlocked';

    const gateEl = document.getElementById('presentation-gate');
    const contentEl = document.getElementById('presentation-content');
    const gateInput = document.getElementById('gate-input');
    const gateSubmit = document.getElementById('gate-submit');
    const gateError = document.getElementById('gate-error');
    const lockBtn = document.getElementById('presentation-lock');

    function unlockPresentation() {
        if (gateEl) gateEl.style.display = 'none';
        if (contentEl) contentEl.classList.add('visible');
        sessionStorage.setItem(SESSION_UNLOCKED, '1');
    }

    function lockPresentation() {
        if (gateEl) gateEl.style.display = '';
        if (contentEl) contentEl.classList.remove('visible');
        sessionStorage.removeItem(SESSION_UNLOCKED);
        if (gateInput) {
            gateInput.value = '';
            gateInput.classList.remove('error');
        }
        if (gateError) gateError.classList.remove('visible');
    }

    // Restore unlock state from sessionStorage
    if (sessionStorage.getItem(SESSION_UNLOCKED) === '1') {
        unlockPresentation();
    }

    function attemptUnlock() {
        const val = gateInput ? gateInput.value.trim() : '';
        if (val === PRESENTATION_KEY) {
            if (gateError) gateError.classList.remove('visible');
            if (gateInput) gateInput.classList.remove('error');
            unlockPresentation();
        } else {
            if (gateInput) {
                gateInput.classList.add('error');
                setTimeout(() => gateInput.classList.remove('error'), 400);
            }
            if (gateError) gateError.classList.add('visible');
        }
    }

    if (gateSubmit) {
        gateSubmit.addEventListener('click', attemptUnlock);
    }

    if (gateInput) {
        gateInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') attemptUnlock();
        });
    }

    if (lockBtn) {
        lockBtn.addEventListener('click', () => {
            lockPresentation();
        });
    }

    // =========================================
    // MOBILE MENU TOGGLE
    // =========================================
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
            const icon = mobileBtn.querySelector('i');
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        });
    });

    // =========================================
    // SCROLL REVEAL ANIMATION
    // =========================================
    const revealElements = document.querySelectorAll('.section-title, .glass-card, .hero-text, .hero-visual');
    
    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // =========================================
    // NUMBER COUNTER ANIMATION
    // =========================================
    const statsSection = document.querySelector('.hero-stats');
    let statsAnimated = false;

    const animateStats = () => {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000;
            const increment = target / (duration / 16);
            
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

    // =========================================
    // ACTIVE LINK HIGHLIGHTING ON SCROLL
    // =========================================
    const sections = document.querySelectorAll('section, header');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 200)) {
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

    // =========================================
    // PROJECT ACCORDION FUNCTIONALITY
    // =========================================
    const projectItems = document.querySelectorAll('.project-accordion-item');
    
    projectItems.forEach(item => {
        const header = item.querySelector('.project-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items in the same accordion
            const parentAccordion = item.closest('.projects-accordion');
            if (parentAccordion) {
                parentAccordion.querySelectorAll('.project-accordion-item').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            }
            
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });

    // =========================================
    // CONTACT FORM (prevent default)
    // =========================================
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
});
