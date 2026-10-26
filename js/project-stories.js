// Editorial summaries describe project scope, not unverified outcomes or metrics.
const projectStories = {
    en: {
        introHeading: "Introduction",
        info: 'Read project story', close: 'Close project story', open: 'Open project',
        headings: ['Purpose & problem', 'Approach & technology', 'Tools & stack'],
        stories: [
            ["One night, while driving, I saw a cat that had been hit by a car. Many people passed by; only a few stopped to help. That moment inspired STRAYLO: a way to turn a few minutes of attention into a report that others can act on. Taking a photo and sharing the location can help someone else step in—and give an animal a chance to survive.", 'Developed in a team of two. SwiftUI and MVVM separate interface and presentation logic; MapKit and CoreLocation support the location-based experience. Firebase, Firestore, and Cloud Functions provide the backend, while Tuist supports project configuration.'],
            ["I started iSOLID while preparing for iOS developer interviews. Rereading notes and writing summaries had become repetitive, so I wanted a more engaging way to study. I built an app to bring theory review and coding practice into one place. What began as a tool for my own preparation became a project for helping other developers prepare too.", 'Developed in a team of two. SwiftUI supports the native interface, MVVM separates presentation logic, Core Data supports local persistence, and Firebase and Firestore support cloud data. Swift Package Manager manages reusable dependencies.'],
            ["While building iSOLID, I kept needing the same UI components across different screens. Rebuilding them each time meant repeated work and more chances for the design to drift. I created SolidDS to put those shared SwiftUI components into a reusable package. The goal is simple: spend less time rebuilding UI and keep the app consistent as it grows.", 'SwiftUI makes the components usable in native interfaces. Packaging them with Swift Package Manager lets projects share components and evolve them in one place.'],
            ["While working on iSOLID and STRAYLO, I needed a way to moderate text posted by users. Rather than duplicate that logic in each app, I built TextModeration as a reusable Swift package. It applies explicit rules on the device, keeping text checks local and straightforward to integrate. This turns a shared product need into a tool that can evolve independently of either app.", 'A native Swift package keeps the integration focused and reusable. Local rules make behavior explicit; they should be treated as one layer of moderation rather than a complete understanding of context or intent.'],
            ['Swift Code provides beginner-friendly Swift and iOS learning notes. It brings explanations, examples, and quizzes together so readers can move from reading a concept to checking their understanding.', 'HTML, CSS, and JavaScript support a browser-based learning experience. Technical writing is central: examples and explanations need to make unfamiliar concepts easier to follow.'],
            ['SolidFolio is a portfolio website builder. Its purpose is to help present projects, skills, and professional background in a clear web format.', 'HTML structures the content, CSS controls the responsive presentation, and JavaScript adds interaction. The web stack makes the portfolio accessible through a browser without installing an app.'],
            ['New Language School is a website for a language school. It gives the school a public web presence where prospective learners can discover it.', 'HTML, CSS, and JavaScript provide the page structure, visual presentation, and interactions. The published website is hosted on GitHub Pages.'],
            ['These three private apps cover educational and corporate use cases. They represent work that is not presented through public project links.', 'The listed stack is SwiftUI and UIKit for native Apple interfaces. Further project context and implementation details are available by request where they can be shared.']
        ]
    },
    es: {
        introHeading: "Introducción",
        info: 'Leer la historia del proyecto', close: 'Cerrar la historia del proyecto', open: 'Abrir proyecto',
        headings: ['Propósito y problema', 'Enfoque y tecnología', 'Herramientas y tecnologías'],
        stories: [
            ["Una noche, mientras conducía, vi a un gato que había sido atropellado. Muchas personas siguieron de largo; solo unas pocas se detuvieron a ayudar. Ese momento inspiró STRAYLO: una forma de convertir unos minutos de atención en un reporte que permita actuar a otros. Hacer una foto y compartir la ubicación puede ayudar a que alguien intervenga y darle al animal una oportunidad de sobrevivir.", 'Desarrollado en un equipo de dos. SwiftUI y MVVM separan la interfaz y la lógica de presentación; MapKit y CoreLocation permiten trabajar con ubicaciones. Firebase, Firestore y Cloud Functions forman el backend, y Tuist facilita la configuración del proyecto.'],
            ["Empecé iSOLID mientras me preparaba para entrevistas de desarrollo iOS. Releer apuntes y escribir resúmenes se había vuelto repetitivo, así que quería una forma más dinámica de estudiar. Creé una app para reunir el repaso de teoría y la práctica de programación. Lo que comenzó como una herramienta para mi propia preparación se convirtió en un proyecto para ayudar también a otros desarrolladores.", 'Desarrollado en un equipo de dos. SwiftUI permite crear la interfaz nativa, MVVM separa la lógica de presentación, Core Data permite guardar datos locales y Firebase y Firestore gestionan datos en la nube. Swift Package Manager gestiona dependencias reutilizables.'],
            ["Al desarrollar iSOLID, necesitaba los mismos componentes de interfaz en distintas pantallas. Recrearlos cada vez suponía trabajo repetido y más posibilidades de introducir diferencias visuales. Creé SolidDS para reunir esos componentes SwiftUI en un paquete reutilizable. El objetivo es sencillo: dedicar menos tiempo a reconstruir interfaces y mantener la coherencia a medida que crece la app.", 'SwiftUI permite usar los componentes en interfaces nativas. Distribuirlos con Swift Package Manager facilita compartirlos y mantenerlos desde un mismo lugar.'],
            ["Al trabajar en iSOLID y STRAYLO, necesitaba moderar el texto publicado por los usuarios. En lugar de duplicar esa lógica en cada app, creé TextModeration como un paquete Swift reutilizable. Aplica reglas explícitas en el dispositivo para mantener las comprobaciones locales y facilitar su integración. Así, una necesidad compartida se convierte en una herramienta que puede evolucionar independientemente de ambas apps.", 'Un paquete nativo de Swift facilita una integración reutilizable. Las reglas locales hacen explícito el comportamiento; son una capa de moderación, no una comprensión completa del contexto o la intención.'],
            ['Swift Code ofrece apuntes de Swift e iOS para principiantes. Reúne explicaciones, ejemplos y cuestionarios para pasar de leer un concepto a comprobar lo aprendido.', 'HTML, CSS y JavaScript permiten aprender desde el navegador. La redacción técnica es fundamental para explicar conceptos nuevos con claridad.'],
            ['SolidFolio es un creador de sitios web de portafolio. Su propósito es presentar proyectos, habilidades y trayectoria profesional de forma clara.', 'HTML estructura el contenido, CSS adapta la presentación y JavaScript añade interacción. El sitio se puede consultar en un navegador sin instalar una app.'],
            ['New Language School es el sitio web de una escuela de idiomas. Ofrece una presencia pública para que los futuros estudiantes puedan conocerla.', 'HTML, CSS y JavaScript proporcionan estructura, presentación e interacciones. El sitio publicado está alojado en GitHub Pages.'],
            ['Estas tres apps privadas cubren usos educativos y corporativos. Representan trabajo que no se presenta mediante enlaces públicos.', 'Las tecnologías indicadas son SwiftUI y UIKit para interfaces nativas de Apple. Se puede solicitar más contexto y detalles de implementación cuando sea posible compartirlos.']
        ]
    },
    th: {
        introHeading: "ที่มาของโปรเจกต์",
        info: 'อ่านเรื่องราวของโปรเจกต์', close: 'ปิดเรื่องราวของโปรเจกต์', open: 'เปิดโปรเจกต์',
        headings: ['จุดประสงค์และปัญหา', 'แนวทางและเทคโนโลยี', 'เครื่องมือและเทคโนโลยี'],
        stories: [
            ["คืนหนึ่งขณะขับรถ ผมเห็นแมวที่ถูกรถชน ผู้คนจำนวนมากผ่านไป แต่มีเพียงไม่กี่คนที่หยุดช่วย เหตุการณ์นั้นเป็นแรงบันดาลใจให้สร้าง STRAYLO เพื่อเปลี่ยนเวลาสั้น ๆ ที่เราใส่ใจให้เป็นรายงานที่คนอื่นนำไปช่วยต่อได้ การถ่ายภาพและแชร์ตำแหน่งอาจช่วยให้ใครสักคนเข้ามาช่วย และเปิดโอกาสให้สัตว์ตัวหนึ่งรอดชีวิต", 'พัฒนาร่วมกันในทีมสองคน ใช้ SwiftUI และ MVVM แยกส่วนติดต่อผู้ใช้กับตรรกะการแสดงผล ใช้ MapKit และ CoreLocation สำหรับตำแหน่ง ใช้ Firebase, Firestore และ Cloud Functions เป็นระบบเบื้องหลัง และใช้ Tuist จัดการการตั้งค่าโปรเจกต์'],
            ["ผมเริ่มสร้าง iSOLID ระหว่างเตรียมตัวสัมภาษณ์งานนักพัฒนา iOS การอ่านโน้ตซ้ำและเขียนสรุปเริ่มน่าเบื่อ ผมจึงอยากได้วิธีเรียนที่มีส่วนร่วมมากขึ้น ผมสร้างแอปที่รวมการทบทวนทฤษฎีและการฝึกเขียนโค้ดไว้ในที่เดียว จากเครื่องมือเตรียมตัวของผมเอง จึงกลายเป็นโปรเจกต์ที่ช่วยให้นักพัฒนาคนอื่นเตรียมตัวได้ด้วย", 'พัฒนาร่วมกันในทีมสองคน ใช้ SwiftUI สร้างหน้าจอแบบเนทีฟ ใช้ MVVM แยกตรรกะการแสดงผล ใช้ Core Data เก็บข้อมูลในเครื่อง และใช้ Firebase กับ Firestore สำหรับข้อมูลบนคลาวด์ ใช้ Swift Package Manager จัดการแพ็กเกจ'],
            ["ระหว่างพัฒนา iSOLID ผมต้องใช้คอมโพเนนต์ UI เดิมในหลายหน้าจอ การสร้างใหม่ทุกครั้งทำให้งานซ้ำและเสี่ยงที่หน้าตาจะไม่สอดคล้องกัน ผมจึงสร้าง SolidDS เพื่อรวมคอมโพเนนต์ SwiftUI เหล่านั้นเป็นแพ็กเกจที่ใช้ซ้ำได้ เป้าหมายคือใช้เวลาน้อยลงกับการสร้าง UI เดิม และรักษาความสม่ำเสมอเมื่อแอปเติบโตขึ้น", 'SwiftUI ทำให้ใช้องค์ประกอบเหล่านี้ในหน้าจอแบบเนทีฟได้ การจัดเป็นแพ็กเกจด้วย Swift Package Manager ช่วยให้หลายโปรเจกต์ใช้และพัฒนาคอมโพเนนต์ร่วมกันได้'],
            ["ระหว่างทำ iSOLID และ STRAYLO ผมต้องการเครื่องมือกลั่นกรองข้อความที่ผู้ใช้โพสต์ แทนที่จะเขียนตรรกะเดียวกันซ้ำในแต่ละแอป ผมจึงสร้าง TextModeration เป็นแพ็กเกจ Swift ที่ใช้ซ้ำได้ เครื่องมือนี้ใช้กฎที่ชัดเจนบนอุปกรณ์ ทำให้ตรวจสอบข้อความในเครื่องและนำไปเชื่อมต่อกับแอปได้สะดวก ความต้องการร่วมกันของสองแอปจึงกลายเป็นเครื่องมือที่พัฒนาต่อได้อย่างอิสระ", 'แพ็กเกจ Swift แบบเนทีฟช่วยให้นำไปใช้ซ้ำได้ กฎในเครื่องทำให้พฤติกรรมชัดเจน แต่เป็นเพียงชั้นหนึ่งของการกลั่นกรอง ไม่ใช่ระบบที่เข้าใจบริบทหรือเจตนาทั้งหมด'],
            ['Swift Code รวบรวมบทเรียน Swift และ iOS สำหรับผู้เริ่มต้น มีคำอธิบาย ตัวอย่าง และแบบทดสอบ เพื่อให้ผู้อ่านได้ทบทวนความเข้าใจหลังเรียนรู้แนวคิด', 'HTML, CSS และ JavaScript ทำให้เรียนรู้ผ่านเบราว์เซอร์ได้ การเขียนเนื้อหาทางเทคนิคเป็นส่วนสำคัญในการอธิบายแนวคิดใหม่ให้เข้าใจง่าย'],
            ['SolidFolio เป็นเครื่องมือสร้างเว็บไซต์พอร์ตโฟลิโอ มีจุดประสงค์เพื่อนำเสนอโปรเจกต์ ทักษะ และประสบการณ์อย่างชัดเจนบนเว็บ', 'HTML จัดโครงสร้างเนื้อหา CSS ดูแลการแสดงผลตามขนาดหน้าจอ และ JavaScript เพิ่มการโต้ตอบ ผู้ชมเปิดผ่านเบราว์เซอร์ได้โดยไม่ต้องติดตั้งแอป'],
            ['New Language School เป็นเว็บไซต์โรงเรียนสอนภาษา ช่วยให้โรงเรียนมีพื้นที่สาธารณะบนเว็บเพื่อให้ผู้สนใจเรียนเข้ามารู้จัก', 'ใช้ HTML, CSS และ JavaScript สำหรับโครงสร้าง รูปแบบ และการโต้ตอบ เว็บไซต์เผยแพร่ผ่าน GitHub Pages'],
            ['แอปส่วนตัวทั้งสามครอบคลุมงานด้านการศึกษาและองค์กร เป็นผลงานที่ไม่ได้แสดงผ่านลิงก์สาธารณะ', 'เทคโนโลยีที่ระบุคือ SwiftUI และ UIKit สำหรับหน้าจอแบบเนทีฟของ Apple สามารถขอข้อมูลบริบทและรายละเอียดเพิ่มเติมได้ในส่วนที่เปิดเผยได้']
        ]
    }
};

const storyDialog = document.createElement('dialog');
storyDialog.className = 'project-story-dialog';
storyDialog.setAttribute('aria-labelledby', 'project-story-title');
document.body.append(storyDialog);
let storyTrigger;

function storyLocale() {
    return projectStories[document.documentElement.lang] || projectStories.en;
}

function openProjectStory(card, index, trigger) {
    const locale = storyLocale();
    storyTrigger = trigger;
    storyDialog.replaceChildren();
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'round-control project-story-close';
    close.setAttribute('aria-label', locale.close);
    close.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>';
    close.addEventListener('click', () => storyDialog.close());
    const content = document.createElement('article');
    content.className = 'project-story-content';
    const title = document.createElement('h2');
    title.id = 'project-story-title';
    title.textContent = card.querySelector('.project-title').textContent;
    if (card.querySelector('.project-title').classList.contains('swift-code-brand')) {
        title.classList.add('swift-code-brand');
    }
    content.append(title);
    const paragraphs = [...locale.stories[index], card.querySelector('small:last-child').textContent];
    paragraphs.forEach((text, i) => {
        const heading = document.createElement('h3');
        heading.textContent = i === 0 && index < 4 ? locale.introHeading : locale.headings[i];
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        content.append(heading, paragraph);
    });
    if (card.hasAttribute('href')) {
        const link = document.createElement('a');
        link.className = 'talks-button primary';
        link.href = card.getAttribute('href');
        link.textContent = locale.open;
        if (card.target) { link.target = card.target; link.rel = 'noopener noreferrer'; }
        link.addEventListener('click', () => storyDialog.close());
        content.append(link);
    }
    storyDialog.append(close, content);
    storyDialog.showModal();
    storyDialog.scrollTop = 0;
    document.body.classList.add('project-story-open');
    close.focus();
}

storyDialog.addEventListener('close', () => {
    document.body.classList.remove('project-story-open');
    storyTrigger?.focus({ preventScroll: true });
});

const projectInfoButtons = [];
document.querySelectorAll('#projects .project-card').forEach((card, index) => {
    // Keep the external link and info button as siblings, never nested controls.
    const wrapper = document.createElement('div');
    wrapper.className = 'project-card-container';
    card.before(wrapper);
    wrapper.append(card);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'project-info-button';
    button.setAttribute('aria-haspopup', 'dialog');
    button.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v1"/></svg>';
    button.addEventListener('click', () => openProjectStory(card, index, button));
    wrapper.append(button);
    projectInfoButtons.push({ button, card });
});
function updateProjectInfoLabels() {
    projectInfoButtons.forEach(({ button, card }) => {
        button.setAttribute('aria-label', storyLocale().info + ': ' + card.querySelector('.project-title').textContent);
    });
}
updateProjectInfoLabels();
new MutationObserver(updateProjectInfoLabels).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
