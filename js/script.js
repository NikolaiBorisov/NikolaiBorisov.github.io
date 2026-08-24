const themeButtons = document.querySelectorAll(".theme-switch button");
const languageButtons = document.querySelectorAll(".lang-switch button");
const translatableItems = document.querySelectorAll("[data-i18n]");
const openSwiftTalksButton = document.querySelector("#open-swift-talks");
const closeSwiftTalksButton = document.querySelector("#close-swift-talks");
const swiftTalksScreen = document.querySelector("#swift-talks");
const accordionTriggers = document.querySelectorAll(".talk-accordion-trigger");
const copyTalkButtons = document.querySelectorAll(".copy-talk");
const translateTalkButtons = document.querySelectorAll(".translate-talk");
const likeControls = document.querySelectorAll(".talk-like");
const likesStorageKey = "swiftTalkLikes";

const swiftTalkPosts = {
    part1: `🔶 SWIFT Talks
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
#SwiftTalks`,
    part2: `🔶 SWIFT Talks

Swift Under the Hood

Swift under the hood combines:

• Compiler checks
• Memory management
• Type safety
• Runtime support

At a high level, Swift code goes through this pipeline:
Swift Code -> Parser -> Type Checker -> SIL -> LLVM -> Machine Code

🔸 Parser
First, Swift reads our code and turns it into a structure the compiler can understand.

It understands:
• Constants
• Variables
• Functions
• Types
• Expressions
• Scopes

🔸 Type Checker
The type checker verifies that our code makes sense before the app runs.

It understands that:
• 25 is an \`Int\`
• "Alex" is a \`String\`
• true is a \`Bool\`
• let count: Int = "10" // error

This is called type inference.
We do not always need to write the type manually, but Swift still knows it.
Swift catches the mistake at compile time.

🔸 SIL
After type checking, Swift code becomes SIL: Swift Intermediate Language.
This is where Swift-specific optimization happens.

The compiler can reason about:
• value types
• generics
• protocols
• ARC
• ownership
• memory behavior

🔸 LLVM
After SIL, Swift uses LLVM.
LLVM lowers the code closer to machine instructions and applies performance optimizations.
It helps with inlining, removing unused code, generating optimized machine code for the target device.

🔸 Memory Management
Swift uses ARC: Automatic Reference Counting.
ARC tracks how many strong references point to an object.
When no strong references remain, the object can be removed from memory.
This gives Swift automatic memory management without a traditional garbage collector.

🔸 Value Types
Swift encourages value types like struct and enum.
Value types make code easier to reason about because data changes are more explicit.
They help reduce accidental shared mutable state.
Swift also uses performance optimizations like copy-on-write, so value semantics do not always mean expensive copying.

🔸 Optionals
Optionals are a core safety feature.

An optional means:
• There may be a value
• Or there may be no value

Swift forces us to handle missing values directly, instead of letting them become unexpected crashes later.

🔸 Concurrency
Modern Swift includes structured concurrency.
async/await makes asynchronous code easier to read.
tasks give async work structure.
actors help protect shared mutable state.
@MainActor helps keep UI updates on the main thread.

Swift is designed to make safe code feel natural.

Its features are not random:
• strong typing catches mistakes early
• optionals make absence visible
• ARC manages memory automatically
• value types reduce hidden sharing
• generics and protocols improve reuse
• async/await and actors make concurrency safer
• the compiler checks more before runtime

Swift under the hood is a balance:
• High-level enough to be expressive
• Low-level enough to be fast
• Practical enough for real production apps

Swift helps developers build reliable software with less accidental complexity.

🔶 Follow for the next part: Swift Type System

#Swift #SwiftTalks #iOS`,
    part3: `🔶 Swift Talks

iOS Development & iOS Developer

iOS development is the process of building apps for Apple’s mobile ecosystem.

An iOS developer works with:

• UI and UX
• Architecture
• State management
• Networking
• Persistence
• Performance
• Testing
• App Store delivery

🔸 What Is iOS Development?

iOS development means creating apps for iPhone and iPad.

Most modern iOS apps are built with:

• Swift
• SwiftUI or UIKit
• Xcode
• Apple SDKs

Swift is the main language.
Xcode is the main development environment.
Apple SDKs provide tools for UI, networking, storage, maps, camera, notifications, payments, and more.

🔸 What Does an iOS Developer Do?

An iOS developer turns ideas into working mobile products.

This includes:

• Building screens
• Handling user actions
• Connecting APIs
• Managing app state
• Saving local data
• Handling errors
• Fixing bugs
• Preparing releases

A good iOS developer does not only ask:

"How do I make it work?"

They also ask:

"Is it maintainable?"
"Is it testable?"
"Does it feel good to use?"

🔸 UI Layer

The UI layer is what the user sees and touches.

In iOS, this usually means SwiftUI or UIKit.

SwiftUI is declarative:

You describe the UI for a given state.

UIKit is imperative:

You control views and updates more manually.

A strong iOS developer understands UI state, navigation, accessibility, animations, and platform behavior.

🔸 App Architecture

Real apps need structure.

Without architecture, screens become too large, logic gets duplicated, and small changes become risky.

Common iOS architecture patterns include:

• MVC
• MVVM
• Clean Architecture
• VIPER
• TCA

Architecture helps separate responsibilities.

The point is to keep the app understandable as it grows.

🔸 Data & APIs

Most iOS apps work with data.

That data can come from:

• REST APIs
• GraphQL
• Local databases
• UserDefaults
• Keychain
• Cloud services

An iOS developer needs to understand networking, JSON decoding, caching, offline behavior, and error handling.

🔸 Performance

iOS apps should feel fast.

Performance means:

• Smooth scrolling
• Fast launch time
• Efficient images
• Safe memory usage
• No main-thread blocking

Users may not know why an app feels slow.

But they always feel it.

🔸 Testing

Testing helps protect the app from breaking as it changes.

iOS developers may write:

• Unit tests
• UI tests
• Snapshot tests
• Integration tests

Good tests make refactoring safer and bugs easier to catch before users see them.

🔸 The Main Idea

An iOS developer builds product experiences for Apple platforms.

They need to understand code, design, architecture, data, performance, and users.

iOS development is a balance:

• Technical enough to be reliable
• Visual enough to care about details
• Practical enough to ship real products

You are not only building screens.

You are building software people carry in their hands every day.

🔶 Follow for the next part: Swift Type System

#Swift #SwiftTalks #iOS`,
    part4: `🔶 Swift Talks

How to Become an iOS Developer

Becoming an iOS developer means learning the Apple ecosystem, building real apps, and practicing the habits of shipping reliable products.

🔸 Start With Swift

Learn the fundamentals first:

• variables and constants
• optionals
• structs and classes
• protocols
• closures
• collections
• error handling
• async/await

Do not rush this. Swift is the language you will use every day.

🔸 Learn the Apple Stack

Most modern iOS apps use:

• Swift
• SwiftUI or UIKit
• Xcode
• Apple SDKs

SwiftUI is great for modern declarative UI.
UIKit is still important in real apps.
Xcode is where you code, debug, test, run simulators, sign builds, and prepare releases.

🔸 Equipment and Tools

You need a Mac because Xcode runs on macOS.

• MacBook Air or Pro with Apple Silicon
• 16 GB RAM if possible
• iPhone for real-device testing
• optional iPad for larger layouts

• Xcode for coding and App Store delivery
• Git and GitHub for version control
• Postman for testing APIs
• Figma for reading designs
• Firebase for analytics, auth, crash reports, or backend features
• Charles or Proxyman for network debugging
• App Store Connect for releases

The simulator is useful, but real devices show real performance, camera behavior, notifications, haptics, and layout issues.

🔸 AI Tools for Beginner iOS Developers

AI can help you learn faster, but it should not replace understanding.

Use ChatGPT, Cursor, GitHub Copilot, Perplexity, and Apple docs.

Use AI to:

• explain Swift errors
• review your code
• create small practice tasks
• compare approaches
• ask why a solution works

Use AI as a mentor, reviewer, and learning assistant, not just an app generator.

🔸 Build Real Projects

Tutorials help, but projects teach the real work.

Build apps with:

• navigation
• state management
• local storage
• API calls
• loading, empty, error, and success states
• polished UI

Examples:

• todo app with persistence
• weather app with an API
• auth flow with validation
• portfolio app

🔸 Daily Practice

Start with Swift → SwiftUI → UIKit → Build your own pet project.

Set one simple daily goal: build at least one feature.

Small steps like:

• Add a launch screen
• Build an onboarding flow
• Create an authentication screen
• Add a profile screen

One feature at a time, one day at a time.

This will take you further than building an app in a few hours with tools you do not understand and code you cannot explain.

🔸 Learn Professional Habits

A good iOS developer writes code other people can understand.

Practice:

• readable naming
• clean architecture
• small components
• error handling
• accessibility
• tests for important logic
• Git commits with clear messages

🔸 The Main Idea

Learn Swift.
Build UI.
Connect data.
Structure the app.
Test, polish, and release.

That loop is how a beginner becomes someone who can ship real iOS products.

Do not only watch tutorials.
Build, break, debug, and ship.

#Swift #SwiftTalks #iOS`
};

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

function readStoredLikes() {
    try {
        return JSON.parse(localStorage.getItem(likesStorageKey)) || {};
    } catch {
        return {};
    }
}

function saveStoredLikes(likes) {
    try {
        localStorage.setItem(likesStorageKey, JSON.stringify(likes));
    } catch {
        return;
    }
}

function renderLikeControl(control, isLiked) {
    const button = control.querySelector(".like-button");

    button?.setAttribute("aria-pressed", isLiked ? "true" : "false");

    if (button) {
        button.setAttribute("aria-label", isLiked ? "Unlike this post" : "Like this post");
    }
}

function getStoredLikeValue(value) {
    if (typeof value === "object" && value !== null) {
        return Boolean(value.liked);
    }

    return Boolean(value);
}

function setupLikes() {
    const likes = readStoredLikes();

    likeControls.forEach(control => {
        const talkId = control.dataset.talkId;
        const button = control.querySelector(".like-button");

        if (!talkId || !button) {
            return;
        }

        let isLiked = getStoredLikeValue(likes[talkId]);
        likes[talkId] = isLiked;
        renderLikeControl(control, isLiked);

        button.addEventListener("click", () => {
            isLiked = !isLiked;
            likes[talkId] = isLiked;
            saveStoredLikes(likes);
            renderLikeControl(control, isLiked);
        });
    });

    saveStoredLikes(likes);
}

setupLikes();

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
    }

    openSwiftTalks();
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

accordionTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
        const item = trigger.closest(".talk-accordion-item");
        const isExpanded = item?.classList.toggle("is-expanded");

        trigger.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    });
});

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

copyTalkButtons.forEach(button => {
    button.addEventListener("click", async () => {
        const post = swiftTalkPosts[button.dataset.talkId];

        if (!post) {
            return;
        }

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(post);
            } else {
                copyWithFallback(post);
            }

            button.textContent = "Copied";
            setTimeout(() => {
                button.textContent = "Copy post";
            }, 1800);
        } catch {
            button.textContent = "Copy failed";
            setTimeout(() => {
                button.textContent = "Copy post";
            }, 1800);
        }
    });
});

translateTalkButtons.forEach(button => {
    button.addEventListener("click", () => {
        const post = swiftTalkPosts[button.dataset.talkId];

        if (!post) {
            return;
        }

        const translateUrl = new URL("https://translate.google.com/");
        translateUrl.searchParams.set("sl", "en");
        translateUrl.searchParams.set("tl", "auto");
        translateUrl.searchParams.set("text", post);
        translateUrl.searchParams.set("op", "translate");

        window.open(translateUrl.toString(), "_blank", "noopener,noreferrer");
    });
});
