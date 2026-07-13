const themeButtons = document.querySelectorAll(".theme-switch button");
const languageButtons = document.querySelectorAll(".lang-switch button");
const translatableItems = document.querySelectorAll("[data-i18n]");
const revealItems = document.querySelectorAll(".section, .connect-section");
const avatarGlow = document.querySelector(".avatar-wrapper");

const translations = {
    en: {
        title: "Niko A. | iOS Developer",
        metaDescription: "iOS Developer portfolio - Swift, SwiftUI, UIKit, Clean Architecture",
        themeLight: "Light",
        themeDark: "Dark",
        status: "Open to work",
        roleTitle: "iOS Developer",
        roleDescription: "Building scalable iOS apps with SwiftUI & UIKit",
        workSetup: "Remote • On-site • Hybrid",
        statYears: "Years",
        statProjects: "Projects",
        statApps: "Apps",
        aboutTitle: "About Me",
        aboutOne: "• iOS developer with 5 years of experience building educational, lead-generation, and corporate apps.",
        aboutTwo: "• Working with Swift, SwiftUI, and UIKit. I collaborate closely with backend, design, and QA teams.",
        aboutThree: "• Focused on clean architecture, performance, and real user value.",
        softSkillsTitle: "Soft Skills",
        softTeam: "Team Collaboration",
        softCommunication: "Technical Communication",
        softProblem: "Problem Solving",
        softOwnership: "Ownership",
        softDetail: "Attention to Detail",
        softDebugging: "Debugging & Troubleshooting",
        softLearning: "Continuous Learning",
        hardSkillsTitle: "Hard Skills",
        hardConcurrency: "Concurrency (GCD, async/await)",
        hardMemory: "Memory Management (ARC)",
        hardPush: "Push Notifications (OneSignal, Firebase)",
        toolsTitle: "Tools",
        experienceTitle: "Experience",
        expEdu: "4+ years • 2022 – Present",
        expIsolid: "1+ year • 2025 – Present",
        expWf: "4 months • 2021",
        expSimbir: "3 months • 2021",
        projectsTitle: "Projects",
        projectIsolidDescription: "Learn programming concepts",
        projectSoliddsDescription: "Reusable SwiftUI design system",
        projectSolidfolioDescription: "Portfolio website builder",
        privateAppsTitle: "3 Private Apps by request*",
        privateAppsDescription: "Educational & Corporate Apps",
        contactTitle: "Contact",
        connectTitle: "Connect"
    },
    es: {
        title: "Niko A. | Desarrollador iOS",
        metaDescription: "Portafolio de desarrollador iOS - Swift, SwiftUI, UIKit, Clean Architecture",
        themeLight: "Claro",
        themeDark: "Oscuro",
        status: "Disponible para trabajar",
        roleTitle: "Desarrollador iOS",
        roleDescription: "Creo apps iOS escalables con SwiftUI y UIKit",
        workSetup: "Remoto • Presencial • Híbrido",
        statYears: "Años",
        statProjects: "Proyectos",
        statApps: "Apps",
        aboutTitle: "Sobre mí",
        aboutOne: "• Desarrollador iOS con 5 años de experiencia creando apps educativas, de generación de leads y corporativas.",
        aboutTwo: "• Trabajo con Swift, SwiftUI y UIKit. Colaboro de cerca con equipos de backend, diseño y QA.",
        aboutThree: "• Enfocado en arquitectura limpia, rendimiento y valor real para el usuario.",
        softSkillsTitle: "Habilidades blandas",
        softTeam: "Colaboración en equipo",
        softCommunication: "Comunicación técnica",
        softProblem: "Resolución de problemas",
        softOwnership: "Responsabilidad",
        softDetail: "Atención al detalle",
        softDebugging: "Depuración y diagnóstico",
        softLearning: "Aprendizaje continuo",
        hardSkillsTitle: "Habilidades técnicas",
        hardConcurrency: "Concurrencia (GCD, async/await)",
        hardMemory: "Gestión de memoria (ARC)",
        hardPush: "Notificaciones push (OneSignal, Firebase)",
        toolsTitle: "Herramientas",
        experienceTitle: "Experiencia",
        expEdu: "4+ años • 2022 – Presente",
        expIsolid: "1+ año • 2025 – Presente",
        expWf: "4 meses • 2021",
        expSimbir: "3 meses • 2021",
        projectsTitle: "Proyectos",
        projectIsolidDescription: "Aprendizaje de conceptos de programación",
        projectSoliddsDescription: "Sistema de diseño reutilizable en SwiftUI",
        projectSolidfolioDescription: "Constructor de sitios de portafolio",
        privateAppsTitle: "3 apps privadas por solicitud*",
        privateAppsDescription: "Apps educativas y corporativas",
        contactTitle: "Contacto",
        connectTitle: "Conecta"
    },
    th: {
        title: "Niko A. | นักพัฒนา iOS",
        metaDescription: "พอร์ตโฟลิโอนักพัฒนา iOS - Swift, SwiftUI, UIKit, Clean Architecture",
        themeLight: "สว่าง",
        themeDark: "มืด",
        status: "พร้อมรับงาน",
        roleTitle: "นักพัฒนา iOS",
        roleDescription: "สร้างแอป iOS ที่ขยายระบบได้ด้วย SwiftUI และ UIKit",
        workSetup: "ทำงานทางไกล • ที่ออฟฟิศ • ไฮบริด",
        statYears: "ปี",
        statProjects: "โปรเจกต์",
        statApps: "แอป",
        aboutTitle: "เกี่ยวกับฉัน",
        aboutOne: "• นักพัฒนา iOS ที่มีประสบการณ์ 5 ปีในการสร้างแอปด้านการศึกษา การสร้างลีด และแอปองค์กร",
        aboutTwo: "• ทำงานกับ Swift, SwiftUI และ UIKit และร่วมงานใกล้ชิดกับทีม backend, design และ QA",
        aboutThree: "• ให้ความสำคัญกับ clean architecture ประสิทธิภาพ และคุณค่าจริงสำหรับผู้ใช้",
        softSkillsTitle: "ทักษะการทำงานร่วมกัน",
        softTeam: "การทำงานร่วมกับทีม",
        softCommunication: "การสื่อสารเชิงเทคนิค",
        softProblem: "การแก้ปัญหา",
        softOwnership: "ความรับผิดชอบต่องาน",
        softDetail: "ใส่ใจรายละเอียด",
        softDebugging: "การดีบักและวิเคราะห์ปัญหา",
        softLearning: "การเรียนรู้อย่างต่อเนื่อง",
        hardSkillsTitle: "ทักษะทางเทคนิค",
        hardConcurrency: "Concurrency (GCD, async/await)",
        hardMemory: "การจัดการหน่วยความจำ (ARC)",
        hardPush: "Push Notifications (OneSignal, Firebase)",
        toolsTitle: "เครื่องมือ",
        experienceTitle: "ประสบการณ์",
        expEdu: "มากกว่า 4 ปี • 2022 – ปัจจุบัน",
        expIsolid: "มากกว่า 1 ปี • 2025 – ปัจจุบัน",
        expWf: "4 เดือน • 2021",
        expSimbir: "3 เดือน • 2021",
        projectsTitle: "โปรเจกต์",
        projectIsolidDescription: "เรียนรู้แนวคิดด้านการเขียนโปรแกรม",
        projectSoliddsDescription: "ระบบดีไซน์ SwiftUI ที่นำกลับมาใช้ซ้ำได้",
        projectSolidfolioDescription: "เครื่องมือสร้างเว็บไซต์พอร์ตโฟลิโอ",
        privateAppsTitle: "3 แอปส่วนตัวตามคำขอ*",
        privateAppsDescription: "แอปด้านการศึกษาและองค์กร",
        contactTitle: "ติดต่อ",
        connectTitle: "ช่องทางออนไลน์"
    }
};

function applyTheme(theme) {
    document.body.classList.add("is-theme-changing");
    document.documentElement.setAttribute("data-theme", theme);
    window.setTimeout(() => {
        document.body.classList.remove("is-theme-changing");
    }, 460);
}

function setTheme(theme) {
    const nextTheme = theme === "light" ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    themeButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.theme === nextTheme));
}

function setLanguage(language) {
    const dictionary = translations[language] || translations.en;

    document.body.classList.add("is-language-changing");

    window.setTimeout(() => {
        document.documentElement.lang = language;
        document.title = dictionary.title;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", dictionary.metaDescription);
        }

        translatableItems.forEach(item => {
            const key = item.dataset.i18n;
            if (dictionary[key]) {
                item.textContent = dictionary[key];
            }
        });

        languageButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.lang === language));
        localStorage.setItem("language", language);
        document.body.classList.remove("is-language-changing");
    }, 150);
}

const savedTheme = localStorage.getItem("theme") === "light" ? "light" : "dark";
const savedLanguage = localStorage.getItem("language") || "en";

setTheme(savedTheme);
setLanguage(savedLanguage);

themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        setTheme(btn.dataset.theme);
    });
});

languageButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
    });
});

const isSmallScreen = window.matchMedia("(max-width: 680px)").matches;

if (isSmallScreen) {
    revealItems.forEach(item => item.classList.add("is-visible"));
} else if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px"
    });

    revealItems.forEach(item => revealObserver.observe(item));
} else {
    revealItems.forEach(item => item.classList.add("is-visible"));
}

if (!isSmallScreen) {
    let ticking = false;

    function updateHeroMotion() {
        const scrollOffset = window.scrollY;

        if (avatarGlow) {
            const offset = Math.min(scrollOffset * 0.08, 26);
            avatarGlow.style.setProperty("--hero-glow", `${offset}px`);
        }

        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeroMotion);
            ticking = true;
        }
    }, { passive: true });

    updateHeroMotion();
}
