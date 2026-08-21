const themeButtons = document.querySelectorAll(".theme-switch button");
const languageButtons = document.querySelectorAll(".lang-switch button");
const translatableItems = document.querySelectorAll("[data-i18n]");
const openSwiftTalksButton = document.querySelector("#open-swift-talks");
const closeSwiftTalksButton = document.querySelector("#close-swift-talks");
const swiftTalksScreen = document.querySelector("#swift-talks");
const copySwiftTalkButton = document.querySelector("#copy-swift-talk");
const translateSwiftTalkButton = document.querySelector("#translate-swift-talk");

const swiftTalkPost = `🔶 SWIFT Talks
What is Swift? Why Swift? What for?

Swift is Apple’s modern programming language for building apps across:
• iOS
• macOS
• watchOS
• tvOS
• visionOS
and beyond.

Introduced by Apple in 2014, Swift was created as a safer, faster, and more expressive alternative to Objective-C. The project was started by Chris Lattner around 2010, with major contributions from Apple’s compiler and developer tools teams.
But Swift did not appear from nowhere.

Its roots and influences include:

• Objective-C
The old backbone of Apple development. Powerful and deeply tied to Apple frameworks, but verbose and easier to misuse.

• C and C++
Swift keeps the need for performance and low-level control, while avoiding much of their unsafe memory complexity.

• Modern language ideas
You can see ideas shared with languages like Rust, Haskell, Python, Ruby, C#, and more in Swift’s safety model, optionals, type inference, closures, generics, protocols, and clean syntax.

So why did Apple create Swift?
Because modern app development needed a language that was:

• Safe
Optionals help prevent null pointer crashes. Strong typing catches mistakes early.

• Fast
Swift is compiled and designed for high performance while keeping safer defaults.

• Readable
Less ceremony, more intention. Code can feel almost conversational.

• Modern
Closures, generics, async/await, pattern matching, value types, protocols, extensions.

• Friendly to beginners, powerful for experts
You can write your first app with SwiftUI, but also build complex systems, SDKs, frameworks, server apps, and performance-critical tools.

What is Swift used for?
• Building iPhone apps
• Building Mac apps
• Creating Apple Watch experiences
• Developing visionOS spatial apps
• Writing server-side backends with frameworks like Vapor
• Building command-line tools
• Teaching programming
• Prototyping ideas quickly
• Creating production-grade software used by millions

One of Swift’s biggest ideas is this:
"Code should be expressive without being fragile."
That’s why features like \`let\`, \`guard\`, \`if let\`, \`struct\`, \`protocol\`, and \`async/await\` are not just syntax. They represent a philosophy:
Make the correct path easy, and the dangerous path visible.

Swift is best known for Apple platforms, but it is also open-source and used beyond them.
It is a language shaped by decades of programming lessons:
• From C, it learned performance
• From Objective-C, it inherited Apple’s ecosystem
• From functional languages, it learned expressiveness
• From modern systems languages, it learned safety
• From real developers, it learned that code must be readable tomorrow, not only clever today.

Swift exists to help developers build beautiful, reliable, high-performance software with less pain and more clarity.
Swift sits at the intersection of design, engineering, safety, and creativity.

🔶 Follow for the next part: Swift Under the Hood
🔗 https://www.linkedin.com/in/niko-anderson-36269333b/
#SwiftTalks`;

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
        projectTextModerationDescription: "Native Swift Package for rule-based, on-device moderation of user-generated text",
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
        projectTextModerationDescription: "Paquete nativo de Swift para la moderación de texto generado por usuarios, basada en reglas y realizada en el dispositivo",
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
        projectTextModerationDescription: "Swift Package แบบเนทีฟสำหรับการตรวจสอบข้อความที่ผู้ใช้สร้างขึ้นตามกฎ โดยประมวลผลบนอุปกรณ์",
        projectSolidfolioDescription: "เครื่องมือสร้างเว็บไซต์พอร์ตโฟลิโอ",
        privateAppsTitle: "3 แอปส่วนตัวตามคำขอ*",
        privateAppsDescription: "แอปด้านการศึกษาและองค์กร",
        contactTitle: "ติดต่อ",
        connectTitle: "ช่องทางออนไลน์"
    }
};

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
}

function setTheme(theme) {
    const nextTheme = theme === "light" ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    themeButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.theme === nextTheme));
}

function setLanguage(language) {
    const dictionary = translations[language] || translations.en;

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

function openSwiftTalks() {
    if (!swiftTalksScreen) {
        return;
    }

    swiftTalksScreen.classList.add("is-open");
    swiftTalksScreen.setAttribute("aria-hidden", "false");
    document.body.classList.add("talks-open");
    closeSwiftTalksButton?.focus();
}

function closeSwiftTalks(options = {}) {
    if (!swiftTalksScreen) {
        return;
    }

    swiftTalksScreen.classList.remove("is-open");
    swiftTalksScreen.setAttribute("aria-hidden", "true");
    document.body.classList.remove("talks-open");

    if (!options.keepHash && window.location.hash === "#swift-talks") {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }

    openSwiftTalksButton?.focus();
}

openSwiftTalksButton?.addEventListener("click", () => {
    if (window.location.hash !== "#swift-talks") {
        window.location.hash = "swift-talks";
    } else {
        openSwiftTalks();
    }
});
closeSwiftTalksButton?.addEventListener("click", closeSwiftTalks);

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && swiftTalksScreen?.classList.contains("is-open")) {
        closeSwiftTalks();
    }
});

function syncSwiftTalksWithHash() {
    if (window.location.hash === "#swift-talks") {
        openSwiftTalks();
    } else if (swiftTalksScreen?.classList.contains("is-open")) {
        closeSwiftTalks({ keepHash: true });
    }
}

window.addEventListener("hashchange", syncSwiftTalksWithHash);
syncSwiftTalksWithHash();

function copyWithFallback(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}

if (copySwiftTalkButton) {
    copySwiftTalkButton.addEventListener("click", async () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(swiftTalkPost);
            } else {
                copyWithFallback(swiftTalkPost);
            }

            copySwiftTalkButton.textContent = "Copied";
            setTimeout(() => {
                copySwiftTalkButton.textContent = "Copy post";
            }, 1800);
        } catch {
            copySwiftTalkButton.textContent = "Copy failed";
            setTimeout(() => {
                copySwiftTalkButton.textContent = "Copy post";
            }, 1800);
        }
    });
}

if (translateSwiftTalkButton) {
    translateSwiftTalkButton.addEventListener("click", () => {
        const translateUrl = new URL("https://translate.google.com/");
        translateUrl.searchParams.set("sl", "en");
        translateUrl.searchParams.set("tl", "auto");
        translateUrl.searchParams.set("text", swiftTalkPost);
        translateUrl.searchParams.set("op", "translate");

        window.open(translateUrl.toString(), "_blank", "noopener,noreferrer");
    });
}
