const experienceDetails = {
    en: {
        info: "Read experience details", close: "Close experience details",
        headings: ["Overview", "Team & workflow", "Technologies & tools"],
        stories: [
            ["iSOLID is my personal project for helping people learn programming. It combines structured lessons, practical code examples, and interactive learning materials to make programming concepts easier to understand. Available on iOS, iPadOS, and macOS.", "Developed in a team of two with fellow iOS developer {teammate}.", "SwiftUI · MVVM · Core Data · Swift Package Manager · Firebase · Firestore"],
            ["STRAYLO is my personal project for helping stray, lost, and injured animals. It brings together animal reports, a feed of urgent posts and community tips, pet-friendly places, and user profiles. Available on iOS, iPadOS, and macOS.", "Developed in a team of two with fellow iOS developer {teammate}.", "Swift · SwiftUI · MVVM · Firebase · Firestore · Cloud Functions · MapKit · CoreLocation · StoreKit · SpriteKit · Tuist"],
            ["Developed iOS applications for lead generation and user engagement, alongside online learning apps covering a range of specialties. Project links can be provided upon request where sharing is permitted.", "Worked in a cross-functional team of 10+ people using an Agile workflow with Scrum.", "Architectures: MVC, MVP, MVVM, VIP\nUI: UIKit, SwiftUI, SnapKit, PinLayout\nNetworking: Moya, Alamofire\nPersistence & security: Realm, UserDefaults, Keychain\nAnalytics & monitoring: Firebase, Crashlytics, Adjust, Yandex Metrics\nMaps & notifications: Yandex Maps, OneSignal, Push Notifications\nTools: Xcode, Git, GitLab, Jira, Figma"],
            ["Developed an iOS app for creating custom highlights and stickers for social media stories, reels, videos, and photos. A project link can be provided upon request where sharing is permitted.", "Worked in a team of 10 people using an Agile workflow with Scrum.", "UIKit · Foundation · SnapKit · MVC · Core Data · UserDefaults · Xcode · GitLab · Trello · Figma"],
            ["Contributed to a pilot MVP of an iOS app focused on charity and supporting people facing difficult life situations.", "Worked alongside a team of five developers using Scrum and GitFlow.", "Xcode · GitHub · GitFlow · UIKit · Foundation · Storyboards · XIBs · Auto Layout · SnapKit · MVC · UserDefaults · Figma · Trello · Scrum"]
        ]
    },
    es: {
        info: "Ver detalles de la experiencia", close: "Cerrar detalles de la experiencia",
        headings: ["Descripción", "Equipo y metodología", "Tecnologías y herramientas"],
        stories: [
            ["iSOLID es mi proyecto personal para ayudar a aprender programación. Combina lecciones estructuradas, ejemplos prácticos de código y materiales interactivos para facilitar la comprensión de los conceptos. Disponible en iOS, iPadOS y macOS.", "Desarrollado en un equipo de dos junto al desarrollador iOS {teammate}.", "SwiftUI · MVVM · Core Data · Swift Package Manager · Firebase · Firestore"],
            ["STRAYLO es mi proyecto personal para ayudar a animales callejeros, perdidos y heridos. Reúne reportes, publicaciones urgentes, consejos de la comunidad, lugares que admiten mascotas y perfiles de usuario. Disponible en iOS, iPadOS y macOS.", "Desarrollado en un equipo de dos junto al desarrollador iOS {teammate}.", "Swift · SwiftUI · MVVM · Firebase · Firestore · Cloud Functions · MapKit · CoreLocation · StoreKit · SpriteKit · Tuist"],
            ["Desarrollé aplicaciones iOS para la captación de clientes potenciales y la participación de usuarios, así como aplicaciones de aprendizaje en distintas especialidades. Los enlaces están disponibles bajo petición cuando se permite compartirlos.", "Trabajé en un equipo multidisciplinar de más de 10 personas con metodología ágil y Scrum.", "Arquitecturas: MVC, MVP, MVVM, VIP\nUI: UIKit, SwiftUI, SnapKit, PinLayout\nRedes: Moya, Alamofire\nPersistencia y seguridad: Realm, UserDefaults, Keychain\nAnalítica y supervisión: Firebase, Crashlytics, Adjust, Yandex Metrics\nMapas y notificaciones: Yandex Maps, OneSignal, Push Notifications\nHerramientas: Xcode, Git, GitLab, Jira, Figma"],
            ["Desarrollé una aplicación iOS para crear destacados y pegatinas personalizados para historias, reels, vídeos y fotos en redes sociales. El enlace está disponible bajo petición cuando se permite compartirlo.", "Trabajé en un equipo de 10 personas con metodología ágil y Scrum.", "UIKit · Foundation · SnapKit · MVC · Core Data · UserDefaults · Xcode · GitLab · Trello · Figma"],
            ["Colaboré en el MVP piloto de una aplicación iOS centrada en la ayuda benéfica y el apoyo a personas en situaciones difíciles.", "Trabajé con un equipo de cinco desarrolladores utilizando Scrum y GitFlow.", "Xcode · GitHub · GitFlow · UIKit · Foundation · Storyboards · XIBs · Auto Layout · SnapKit · MVC · UserDefaults · Figma · Trello · Scrum"]
        ]
    },
    th: {
        info: "อ่านรายละเอียดประสบการณ์", close: "ปิดรายละเอียดประสบการณ์",
        headings: ["ภาพรวม", "ทีมและกระบวนการทำงาน", "เทคโนโลยีและเครื่องมือ"],
        stories: [
            ["iSOLID เป็นโปรเจกต์ส่วนตัวที่ช่วยให้ผู้คนเรียนรู้การเขียนโปรแกรม โดยรวมบทเรียนที่เป็นระบบ ตัวอย่างโค้ดที่นำไปใช้ได้ และสื่อการเรียนรู้แบบโต้ตอบ เพื่อทำให้แนวคิดต่าง ๆ เข้าใจง่ายขึ้น รองรับ iOS, iPadOS และ macOS", "พัฒนาร่วมกับ {teammate} นักพัฒนา iOS ในทีมสองคน", "SwiftUI · MVVM · Core Data · Swift Package Manager · Firebase · Firestore"],
            ["STRAYLO เป็นโปรเจกต์ส่วนตัวเพื่อช่วยเหลือสัตว์จรจัด สัตว์หลงทาง และสัตว์บาดเจ็บ แอปรวมการแจ้งเหตุ ฟีดโพสต์เร่งด่วนและคำแนะนำจากชุมชน สถานที่ที่ต้อนรับสัตว์เลี้ยง และโปรไฟล์ผู้ใช้ รองรับ iOS, iPadOS และ macOS", "พัฒนาร่วมกับ {teammate} นักพัฒนา iOS ในทีมสองคน", "Swift · SwiftUI · MVVM · Firebase · Firestore · Cloud Functions · MapKit · CoreLocation · StoreKit · SpriteKit · Tuist"],
            ["พัฒนาแอป iOS สำหรับการสร้างโอกาสในการขายและการมีส่วนร่วมของผู้ใช้ รวมถึงแอปเรียนออนไลน์ในหลากหลายสาขา สามารถขอลิงก์โปรเจกต์ได้ในกรณีที่อนุญาตให้เปิดเผย", "ทำงานในทีมข้ามสายงานมากกว่า 10 คน โดยใช้ Agile และ Scrum", "สถาปัตยกรรม: MVC, MVP, MVVM, VIP\nUI: UIKit, SwiftUI, SnapKit, PinLayout\nเครือข่าย: Moya, Alamofire\nการจัดเก็บและความปลอดภัย: Realm, UserDefaults, Keychain\nการวิเคราะห์และติดตาม: Firebase, Crashlytics, Adjust, Yandex Metrics\nแผนที่และการแจ้งเตือน: Yandex Maps, OneSignal, Push Notifications\nเครื่องมือ: Xcode, Git, GitLab, Jira, Figma"],
            ["พัฒนาแอป iOS สำหรับสร้างไฮไลต์และสติกเกอร์แบบกำหนดเองสำหรับสตอรี รีล วิดีโอ และภาพบนโซเชียลมีเดีย สามารถขอลิงก์โปรเจกต์ได้ในกรณีที่อนุญาตให้เปิดเผย", "ทำงานในทีม 10 คน โดยใช้ Agile และ Scrum", "UIKit · Foundation · SnapKit · MVC · Core Data · UserDefaults · Xcode · GitLab · Trello · Figma"],
            ["ร่วมพัฒนา MVP นำร่องของแอป iOS ด้านการกุศลและการช่วยเหลือผู้ที่กำลังเผชิญสถานการณ์ยากลำบาก", "ทำงานร่วมกับทีมนักพัฒนาห้าคน โดยใช้ Scrum และ GitFlow", "Xcode · GitHub · GitFlow · UIKit · Foundation · Storyboards · XIBs · Auto Layout · SnapKit · MVC · UserDefaults · Figma · Trello · Scrum"]
        ]
    }
};

const experienceDialog = document.createElement("dialog");
experienceDialog.className = "project-story-dialog";
experienceDialog.setAttribute("aria-labelledby", "experience-story-title");
document.body.append(experienceDialog);
let experienceTrigger;
const experienceLocale = () => experienceDetails[document.documentElement.lang] || experienceDetails.en;

function openExperienceDetails(card, index, trigger) {
    const locale = experienceLocale();
    experienceTrigger = trigger;
    const close = document.createElement("button");
    close.type = "button";
    close.className = "round-control project-story-close";
    close.setAttribute("aria-label", locale.close);
    close.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>';
    close.addEventListener("click", () => experienceDialog.close());
    const content = document.createElement("article");
    content.className = "project-story-content experience-story-content";
    const title = document.createElement("h2");
    title.id = "experience-story-title";
    title.textContent = card.querySelector("strong").textContent + " — " + card.querySelector(".experience-company").textContent.trim();
    content.append(title);
    locale.stories[index].forEach((text, section) => {
        const heading = document.createElement("h3");
        heading.textContent = locale.headings[section];
        const paragraph = document.createElement("p");
        if (text.includes("{teammate}")) {
            const [before, after] = text.split("{teammate}");
            const link = document.createElement("a");
            link.href = "https://2sem.github.io/";
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            const name = document.createElement("strong");
            name.textContent = "이영준 (Lee Young-Jun)";
            link.append(name);
            paragraph.append(before, link, after);
        } else {
            paragraph.textContent = text;
        }
        content.append(heading, paragraph);
    });
    experienceDialog.replaceChildren(close, content);
    experienceDialog.showModal();
    experienceDialog.scrollTop = 0;
    document.body.classList.add("project-story-open");
    close.focus();
}

experienceDialog.addEventListener("close", () => {
    document.body.classList.remove("project-story-open");
    experienceTrigger?.focus({ preventScroll: true });
});

const experienceInfoButtons = [];
document.querySelectorAll("#experience > .card").forEach((card, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "project-info-button experience-info-button";
    button.setAttribute("aria-haspopup", "dialog");
    button.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v1"/></svg>';
    button.addEventListener("click", () => openExperienceDetails(card, index, button));
    card.append(button);
    experienceInfoButtons.push({ button, card });
});
function updateExperienceInfoLabels() {
    experienceInfoButtons.forEach(({ button, card }) => {
        button.setAttribute("aria-label", experienceLocale().info + ": " + card.querySelector(".experience-company").textContent.trim());
    });
}
updateExperienceInfoLabels();
new MutationObserver(updateExperienceInfoLabels).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
