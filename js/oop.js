const oopParts = [
    {
        part: "Part 1", title: "Objects, Classes, and Identity",
        intro: "Object-oriented programming (OOP) organizes code around objects: values that hold data and provide behavior. Think of a pet in a rescue app: its name is data, and introducing itself is behavior. A class defines how these objects are created. Each instance has its own identity; assigning it to another variable shares the same object rather than copying it.",
        examples: [{ label: "Create and share an object — run in a Playground", language: "swift", code: `final class Pet { // Define a reference type; final prevents subclasses.
    var name: String // Store a name that can change.
    init(name: String) { // Receive the initial name when creating a pet.
        self.name = name // Assign the argument to this object's property.
    } // Finish initialization.
    func introduce() -> String { // Define behavior that returns a string.
        return "Meet " + name // Build a message using this object's name.
    } // Finish the method.
} // Finish the class.
let pet = Pet(name: "Luna") // Create one Pet instance.
let samePet = pet // Store another reference to that same instance.
samePet.name = "Milo" // Change the shared object's name.
print(pet.introduce()) // Prints Meet Milo because both references share one pet.
print(pet === samePet) // Prints true; === checks class instance identity.` }],
        sections: [["Remember", ["A class is a type; an object is an instance of that type.", "A let reference cannot be reassigned, but its object's var properties can still change.", "Swift also has structs and enums. Prefer value types when independent copies match your model; classes are useful when identity or shared state is needed."]]],
        highlight: "Use a class because you need identity, not simply because you need methods."
    },
    {
        part: "Part 2", title: "Encapsulation: Protecting State",
        intro: "Encapsulation keeps state and the rules for changing it together. Imagine a lesson tracker: other code should be able to read completed lessons, but should not set the count to a negative number. private(set) exposes reading while restricting writes to the type. A method provides one controlled way to update the count.",
        examples: [{ label: "Keep an update rule inside the type", language: "swift", code: `final class LessonTracker { // Define a tracker with shared identity.
    private(set) var completed = 0 // Allow outside reads, but keep the setter private.
    func completeLesson() { // Expose the supported operation for changing progress.
        completed += 1 // Increase progress by exactly one lesson.
    } // Finish the update method.
} // Finish the tracker type.
let tracker = LessonTracker() // Create a tracker starting at zero.
tracker.completeLesson() // Update progress through its public behavior.
print(tracker.completed) // Prints 1; reading the count is allowed.
// tracker.completed = -10 // Uncommenting fails: the setter is private.` }],
        sections: [["Why it helps", ["Callers use meaningful actions instead of writing arbitrary state.", "private restricts access; it does not encrypt information or provide thread safety.", "Choose the smallest useful public interface. Add rules such as limits inside the type when the product requires them."]]],
        highlight: "Expose what callers need; protect the rules they should not bypass."
    },
    {
        part: "Part 3", title: "Inheritance and Overriding",
        intro: "Inheritance lets a class build on another class. A subclass inherits accessible behavior and can override a method to specialize it. Use it for a genuine is-a relationship: a dog is an animal. Swift classes have one superclass, and final classes cannot be subclassed.",
        examples: [{ label: "Specialize behavior in a subclass", language: "swift", code: `class Animal { // Define a superclass that permits inheritance.
    func sound() -> String { // Provide behavior subclasses can override.
        return "A sound" // Return the default sound.
    } // Finish the superclass method.
} // Finish the superclass.
final class Dog: Animal { // Dog inherits Animal; final prevents further subclasses.
    override func sound() -> String { // Replace the inherited method implementation.
        return "Woof" // Supply the dog's specialized sound.
    } // Finish the override.
} // Finish the subclass.
let animal: Animal = Dog() // Refer to a Dog through its superclass type.
print(animal.sound()) // Prints Woof: the object's override runs.` }],
        sections: [["Use carefully", ["override makes the replacement explicit and lets the compiler check the superclass method.", "Do not create a class hierarchy just to share a few utility functions.", "Subclasses should remain usable where the superclass is expected; surprising changes to its promises make code harder to trust."]]],
        highlight: "Inheritance describes an is-a relationship, not every form of reuse."
    },
    {
        part: "Part 4", title: "Abstraction and Protocol Polymorphism",
        intro: "Abstraction describes what a capability does without requiring callers to know its implementation. A protocol declares that capability. Polymorphism means the same operation can work with different conforming types. Protocols are especially useful in Swift because structs as well as classes can conform.",
        examples: [{ label: "One interface, two implementations", language: "swift", code: `protocol Notifier { // Describe a capability without choosing an implementation.
    func message() -> String // Require a method that returns a message.
} // Finish the protocol contract.
struct EmailNotifier: Notifier { // A value type adopts the contract.
    func message() -> String { // Implement the required method.
        return "Email ready" // Return a demonstration message; no email is sent.
    } // Finish the implementation.
} // Finish the email notifier.
struct PushNotifier: Notifier { // A second type adopts the same contract.
    func message() -> String { // Implement the same operation differently.
        return "Push ready" // Return a demonstration message; no push is sent.
    } // Finish the implementation.
} // Finish the push notifier.
let notifiers: [any Notifier] = [EmailNotifier(), PushNotifier()] // Store different conforming values behind one interface.
for notifier in notifiers { // Visit each value without checking its concrete type.
    print(notifier.message()) // Run that value's implementation of the requirement.
} // Finish the loop; prints Email ready and Push ready.` }],
        sections: [["Connect the ideas", ["Abstraction is the small contract: message(). Polymorphism is using different implementations through that contract.", "any Notifier is an existential type: it can hold a value of any conforming type.", "A protocol is not a superclass and does not supply stored instance properties. Introduce one when interchangeable behavior is useful."]]],
        highlight: "Program against a useful capability when callers do not need concrete details."
    },
    {
        part: "Part 5", title: "Composition: Building with Collaborators",
        intro: "Composition builds a type from smaller collaborators instead of inheriting all their behavior. A lesson screen has a progress store; it is not a kind of progress store. Passing that collaborator into an initializer makes the dependency visible and replaceable. This is also called initializer dependency injection.",
        examples: [{ label: "A screen uses a store — run independently", language: "swift", code: `protocol ProgressReading { // Describe only the data this screen needs.
    var completed: Int { get } // Require a readable lesson count.
} // Finish the contract.
struct DemoProgress: ProgressReading { // Supply a small in-memory implementation.
    let completed: Int // Store the count provided at initialization.
} // Finish the demo store.
final class LessonSummary { // Define a consumer of progress information.
    private let progress: any ProgressReading // Keep a collaborator behind its interface.
    init(progress: any ProgressReading) { // Ask the caller to supply the collaborator.
        self.progress = progress // Store the dependency for later use.
    } // Finish initialization.
    func text() -> String { // Convert progress into display text.
        return "Completed: " + String(progress.completed) // Read the count and format it.
    } // Finish formatting.
} // Finish the summary type.
let summary = LessonSummary(progress: DemoProgress(completed: 3)) // Inject predictable sample data.
print(summary.text()) // Prints Completed: 3 without a database or UI.` }],
        sections: [["Choose the relationship", ["Inheritance: Dog is an Animal. Composition: LessonSummary has a progress collaborator.", "A test can inject a different ProgressReading implementation without changing LessonSummary.", "A struct collaborator is copied by value here; a class collaborator would share identity. Composition does not imply reference semantics.", "Avoid adding protocols for every tiny type. Use boundaries that make real substitutions or tests easier."]]],
        highlight: "Choose composition when one object needs another's capability, not its identity as a superclass."
    }
];

const oopQuizQuestions = [
    { part: "Core definitions", question: "What is encapsulation?", options: ["Keeping state and its update rules together behind a controlled interface", "Making every property publicly writable", "Copying an object whenever it changes"], answers: [0] },
    { part: "Core definitions", question: "What is object identity?", options: ["Two objects always having equal property values", "Whether references point to the very same class instance", "The name of the class in the source file"], answers: [1] },
    { part: "Core definitions", question: "What is overriding?", options: ["A subclass providing its own implementation of an inherited method", "Creating an unrelated function with a similar name", "Copying a superclass into a struct"], answers: [0] },
    { part: "Core definitions", question: "What is inheritance in Swift?", options: ["Passing a collaborator into an initializer", "A class building on the accessible properties and behavior of a superclass", "A way for a struct to subclass a class"], answers: [1] },
    { part: "Core definitions", question: "What is abstraction?", options: ["Hiding every method so nothing can use a type", "Describing a useful capability while hiding implementation details callers do not need", "Automatically making code faster"], answers: [1] },
    { part: "Core definitions", question: "What is protocol polymorphism?", options: ["Using different conforming types through the same protocol interface", "Requiring all conforming types to share one superclass", "Calling a protocol requirement and letting each conforming value supply its implementation"], answers: [0, 2] },
    { part: "Core definitions", question: "What is composition?", options: ["Making every type inherit from one base class", "Building a type using smaller collaborating values or objects", "Combining responsibilities only through global variables"], answers: [1] },
    { part: "Core definitions", question: "What is dependency injection?", options: ["A component always constructing all its dependencies internally", "Supplying a component's dependencies from outside, for example through its initializer", "A feature that requires a third-party framework"], answers: [1] },
    { part: "Objects and identity", question: "Two variables refer to the same Pet instance. What is true?", options: ["Changing a var property through one is visible through the other", "Assignment always creates an independent copy", "=== can check whether they refer to the same instance"], answers: [0, 2] },
    { part: "Encapsulation", question: "What does private(set) var completed allow outside the type?", options: ["Reading completed", "Assigning any new value", "Automatically synchronizing concurrent writes"], answers: [0] },
    { part: "Inheritance", question: "Which statements about the Animal/Dog example are correct?", options: ["Dog can inherit from several classes", "override specializes the superclass method", "Calling sound() on an Animal reference holding a Dog runs the Dog override"], answers: [1, 2] },
    { part: "Protocols", question: "Why can EmailNotifier and PushNotifier share an interface?", options: ["They both conform to Notifier", "All Swift protocols require class inheritance", "Both implement the required message() method"], answers: [0, 2] },
    { part: "Composition", question: "Which choices describe initializer injection in LessonSummary?", options: ["The caller passes in the progress collaborator", "The summary must inherit from the progress store", "A test can supply a different conforming implementation"], answers: [0, 2] }
];

const oopCard = document.querySelector("#open-app-architecture-track").cloneNode(true);
oopCard.id = "open-oop-track";
oopCard.setAttribute("aria-controls", "oop-track");
oopCard.querySelector(".talks-kicker").textContent = "Beginner Track";
oopCard.querySelector(".talk-topic-title").textContent = "OOP in Swift";
oopCard.querySelector(".talk-topic-description").textContent = "Understand objects, encapsulation, inheritance, protocols, and composition with step-by-step Swift examples.";
oopCard.querySelector(".talk-topic-meta").innerHTML = "<span>5 topics</span><span>Quiz</span><span>Swift examples</span>";
document.querySelector(".talks-topic-hub").append(oopCard);

const oopTrack = document.createElement("div");
oopTrack.id = "oop-track";
oopTrack.className = "oop-track";
oopTrack.innerHTML = `<div class="talks-track-header"><button type="button" class="talks-button talks-icon-button back-to-talk-topics topics-back" aria-label="Back to all topics"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg></button><div><h2>OOP in Swift</h2></div></div><div class="talks-accordion" id="oop-accordion"></div><div class="talk-card talk-quiz-cta"><div><span class="talks-kicker">OOP in Swift Quiz</span><p>5 questions to check your understanding. Select every correct answer.</p></div><button type="button" class="talks-button primary open-oop-quiz talk-quiz-button">Quiz</button></div>`;
document.querySelector("#swift-talks > .swift-talks-content").append(oopTrack);
oopTrack.querySelector(".talk-quiz-cta p").textContent = `${oopQuizQuestions.length} questions covering core definitions and practical Swift examples. Select every correct answer.`;
const oopReading = document.createElement("aside");
oopReading.className = "talk-card isolid-quiz-bonus";
oopReading.setAttribute("aria-labelledby", "oop-reading-title");
oopReading.innerHTML = `<div><h3 id="oop-reading-title">Further reading — Object-Oriented Programming (OOP) in Swift breakdown</h3></div><a class="talks-button isolid-quiz-link" href="https://lnkd.in/p/guZD9Htp" target="_blank" rel="noopener noreferrer">Read on LinkedIn ↗</a>`;
oopTrack.append(oopReading);

const oopQuiz = document.querySelector("#app-architecture-quiz").cloneNode(true);
oopQuiz.id = "oop-quiz";
oopQuiz.querySelectorAll("[id]").forEach(element => { element.id = element.id.replace("app-architecture", "oop"); });
oopQuiz.querySelectorAll("[aria-label]").forEach(element => { element.setAttribute("aria-label", element.getAttribute("aria-label").replace("App Architecture in Swift", "OOP in Swift")); });
oopQuiz.querySelector("h2").textContent = "OOP in Swift Quiz";
oopQuiz.querySelector(".talk-like").dataset.talkId = "oop-quiz";
oopQuiz.querySelector(".swift-quiz-feedback-button").href = "mailto:andersonnikko1@gmail.com?subject=Feedback%20on%20OOP%20in%20Swift%20Quiz";
document.body.append(oopQuiz);

function showOopTrack() {
    showSwiftTalkTopics();
    swiftTalksScreen.classList.add("is-viewing-oop");
    oopParts.forEach((part, index) => { swiftTalkPosts[`oop-part${index + 1}`] = buildTrackPost(part, "OOP in Swift", "#Swift #OOP #LearnSwift"); });
    renderLearningParts(document.querySelector("#oop-accordion"), oopParts, "oop", "OOP in Swift", "#oop-in-swift");
}

function closeOopQuiz() {
    if (!oopQuiz.classList.contains("is-open")) return;
    oopQuiz.classList.remove("is-open");
    oopQuiz.setAttribute("aria-hidden", "true");
    document.body.classList.remove("quiz-open");
}

function openOopQuiz() {
    const form = document.querySelector("#oop-quiz-form");
    if (form.dataset.rendered !== "true") renderQuizQuestions(form, oopQuizQuestions, "oop-quiz");
    oopQuiz.classList.add("is-open");
    oopQuiz.setAttribute("aria-hidden", "false");
    document.body.classList.add("quiz-open");
    document.querySelector("#close-oop-quiz").focus();
}

oopCard.addEventListener("click", () => { window.location.hash = "oop-in-swift"; });
document.querySelector(".open-oop-quiz").addEventListener("click", () => { window.location.hash = "oop-in-swift-quiz"; });
document.querySelector("#back-to-oop-topics").addEventListener("click", () => {
    window.location.hash = "oop-in-swift";
    requestAnimationFrame(() => document.querySelector(".open-oop-quiz").focus());
});
document.querySelector("#close-oop-quiz").addEventListener("click", () => { window.location.hash = "swift-code"; });
document.querySelector("#finish-oop-quiz").addEventListener("click", () => {
    gradeQuiz(oopQuizQuestions, "oop-quiz", document.querySelector("#oop-quiz-score"), document.querySelector("#oop-quiz-legend"));
});
document.querySelector("#reset-oop-quiz").addEventListener("click", () => {
    resetQuiz(document.querySelector("#oop-quiz-form"), oopQuizQuestions, document.querySelector("#oop-quiz-score"), document.querySelector("#oop-quiz-legend"), oopQuiz);
});
