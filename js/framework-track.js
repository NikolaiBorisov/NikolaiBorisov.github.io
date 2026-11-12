function createFrameworkTrack({ id, framework, title, description, parts, quizQuestions, hashtags, afterCard, category = "UI Development Track" }) {
    const card = popCard.cloneNode(true);
    card.id = `open-${id}-track`;
    card.setAttribute("aria-controls", `${id}-track`);
    card.querySelector(".talks-kicker").textContent = category;
    card.querySelector(".talk-topic-title").textContent = title;
    card.querySelector(".talk-topic-description").textContent = description;
    card.querySelector(".talk-topic-meta").innerHTML = `<span>${parts.length} topics</span><span>Quiz</span>`;
    afterCard.after(card);

    const track = document.createElement("div");
    track.id = `${id}-track`;
    track.hidden = true;
    const header = popTrack.querySelector(".talks-track-header").cloneNode(true);
    header.querySelector("h2").textContent = title;
    header.querySelector(".topics-back").addEventListener("click", () => { window.location.hash = "swift-code"; });
    const accordion = document.createElement("div");
    accordion.id = `${id}-accordion`;
    accordion.className = "talks-accordion";
    track.append(header, accordion);
    popTrack.after(track);
    card.addEventListener("click", () => { window.location.hash = `${id}-essentials`; });

    function showTrack() {
        showSwiftTalkTopics();
        swiftTalksScreen.classList.add(`is-viewing-${id}`);
        track.hidden = false;
        parts.forEach((part, index) => {
            swiftTalkPosts[`${id}-part${index + 1}`] = buildTrackPost(part, title, hashtags);
        });
        renderLearningParts(accordion, parts, id, title, `#${id}-essentials`);
    }

    const quizCard = popTrack.querySelector(".talk-quiz-cta").cloneNode(true);
    quizCard.querySelector(".talks-kicker").textContent = `${title} Quiz`;
    quizCard.querySelector("p").textContent = `${quizQuestions.length} questions with instant scoring, correct-answer highlights, and reset.`;
    const quizButton = quizCard.querySelector("button");
    quizButton.classList.remove("open-pop-quiz");
    quizButton.addEventListener("click", () => { window.location.hash = `${id}-essentials-quiz`; });

    const reading = document.querySelector("#isolid-mobile-quiz-title").closest("aside").cloneNode(true);
    const readingTitle = reading.querySelector("h3");
    readingTitle.id = `${id}-reading-title`;
    readingTitle.textContent = `Further reading — ${framework} framework breakdown in the iSOLID app`;
    reading.setAttribute("aria-labelledby", readingTitle.id);
    reading.querySelector("p").remove();
    const readingLink = reading.querySelector("a");
    readingLink.href = "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008";
    readingLink.setAttribute("aria-label", "Download iSOLID on the App Store (opens in a new tab)");
    track.append(quizCard, reading);

    const quiz = popQuiz.cloneNode(true);
    quiz.id = `${id}-quiz`;
    quiz.querySelectorAll("[id]").forEach(element => { element.id = element.id.replaceAll("pop", id); });
    quiz.querySelectorAll("[aria-label]").forEach(element => {
        element.setAttribute("aria-label", element.getAttribute("aria-label").replaceAll("POP in Swift", title));
    });
    quiz.querySelector("h2").textContent = `${title} Quiz`;
    quiz.querySelector(".talk-like").dataset.talkId = `${id}-quiz`;
    quiz.querySelector(".swift-quiz-feedback-button").href = `mailto:andersonnikko1@gmail.com?subject=Feedback%20on%20${encodeURIComponent(title)}%20Quiz`;
    document.body.append(quiz);

    const quizForm = quiz.querySelector("form");
    const score = quiz.querySelector(".quiz-score-pill");
    const legend = quiz.querySelector(".swift-quiz-legend");

    function openQuiz() {
        if (quizForm.dataset.rendered !== "true") renderQuizQuestions(quizForm, quizQuestions, `${id}-quiz`);
        quiz.classList.add("is-open");
        quiz.setAttribute("aria-hidden", "false");
        document.body.classList.add("quiz-open");
        quiz.querySelector(`#close-${id}-quiz`).focus();
    }

    function closeQuiz() {
        if (!quiz.classList.contains("is-open")) return;
        quiz.classList.remove("is-open");
        quiz.setAttribute("aria-hidden", "true");
        document.body.classList.remove("quiz-open");
    }

    function returnToTopics() {
        window.location.hash = `${id}-essentials`;
        requestAnimationFrame(() => quizButton.focus());
    }

    quiz.querySelector(`#back-to-${id}-topics`).addEventListener("click", returnToTopics);
    quiz.querySelector(`#close-${id}-quiz`).addEventListener("click", () => { window.location.hash = "swift-code"; });
    quiz.querySelector(`#finish-${id}-quiz`).addEventListener("click", () => gradeQuiz(quizQuestions, `${id}-quiz`, score, legend));
    quiz.querySelector(`#reset-${id}-quiz`).addEventListener("click", () => resetQuiz(quizForm, quizQuestions, score, legend, quiz));
    return { card, track, showTrack, openQuiz, closeQuiz, returnToTopics };
}
