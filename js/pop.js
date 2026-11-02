const popParts = [
    {
        part: "Part 1", title: "Protocols Describe Capabilities",
        intro: "Protocol-oriented programming (POP) starts with useful capabilities rather than a shared superclass. A protocol states what conforming types must provide. Structs, enums, and classes can all conform. Conformance does not create stored properties or automatically implement every requirement.",
        examples: [{ label: "A small contract — run independently in a Playground", language: "swift", code: `protocol Named { // Define a capability that types can adopt.
    var name: String { get } // Require reading a name, without requiring a public setter.
} // Finish the protocol.
struct Learner: Named { // Adopt Named using a value type.
    let name: String // Supply the required property with stored data.
} // Finish the learner type.
let learner = Learner(name: "Alex") // Create a concrete conforming value.
print(learner.name) // Read the property; prints Alex.` }],
        sections: [["Understand the contract", ["{ get } means callers need read access. A conforming type may still offer a setter.", "Protocols describe requirements, not a shared storage layout.", "Start with a concrete type; extract a protocol when a capability needs multiple implementations or a useful testing boundary."]]],
        highlight: "A protocol describes what a type can do, not which superclass it must have."
    },
    {
        part: "Part 2", title: "Extensions and Default Implementations",
        intro: "A protocol extension can share behavior across conforming types. Here ordinary accounts use a default monthly fee, while student accounts customize it. This fee-only example avoids repeating balance and deposit code: only fee behavior is shared. Decimal comes from Foundation and is useful for decimal arithmetic; a real banking app needs additional currency and rounding rules.",
        examples: [{ label: "Share a default and customize a requirement", language: "swift", code: `import Foundation // Make Decimal available.
protocol MonthlyFeeProviding { // Describe the fee capability.
    func monthlyFee() -> Decimal // Declare customization as a protocol requirement.
} // Finish the contract.
extension MonthlyFeeProviding { // Add a shared implementation for conforming types.
    func monthlyFee() -> Decimal { // Implement the declared requirement by default.
        return Decimal(5) // Supply the ordinary monthly fee.
    } // Finish the default implementation.
} // Finish the extension.
struct StandardAccount: MonthlyFeeProviding {} // Use the default; no balance storage is implied.
struct StudentAccount: MonthlyFeeProviding { // Adopt the same capability.
    func monthlyFee() -> Decimal { // Supply this type's implementation of the requirement.
        return Decimal(0) // Students pay no monthly fee in this example.
    } // Finish the customized implementation.
} // Finish the student account.
let accounts: [any MonthlyFeeProviding] = [StandardAccount(), StudentAccount()] // Hold different implementations behind one interface.
for account in accounts { // Visit each conforming value.
    print(account.monthlyFee()) // Prints 5, then 0, using each requirement implementation.
} // Finish iteration.` }],
        sections: [["Important limits", ["Extensions cannot add stored instance properties. Each type owns its storage or composes a storage collaborator.", "An extension cannot write a property exposed only as { get } through that protocol contract.", "Declare methods in the protocol when you need polymorphic customization. An extension-only helper is not a protocol requirement; choosing a same-named method can depend on the static type.", "Do not change a read-only contract to { get set } just to move unrelated mutation into an extension."]]],
        highlight: "Default behavior is shared; stored state is not inherited through a protocol."
    },
    {
        part: "Part 3", title: "Generics and Protocol-Based APIs",
        intro: "A generic function can accept different types while requiring a specific capability. The generic parameter below preserves the caller's concrete type. By contrast, any Named is an existential container that can hold different conforming types. Choose the simplest API that expresses your needs; neither form is automatically the best choice for every performance situation.",
        examples: [{ label: "Require a capability without a superclass", language: "swift", code: `protocol Named { // Define the capability needed by the function.
    var name: String { get } // Require a readable string.
} // Finish the protocol.
struct Learner: Named { // Supply one concrete conforming type.
    let name: String // Store its name.
} // Finish the struct.
func greeting<Person: Named>(for person: Person) -> String { // Accept a concrete type constrained to Named.
    return "Hello, " + person.name // Use only the capability promised by Named.
} // Finish the generic function.
print(greeting(for: Learner(name: "Alex"))) // Infer Person as Learner; prints Hello, Alex.
let people: [any Named] = [Learner(name: "Sam")] // Use an existential collection when values share only this interface.
print(people[0].name) // Read through the protocol contract; prints Sam.` }],
        sections: [["Choose intentionally", ["Generics are useful when relationships between concrete input and output types matter.", "Existentials are useful for storing or passing interchangeable implementations behind a shared interface.", "POP can use value types, but classes can conform too. The protocol does not decide whether a value is copied or an object is shared."]]],
        highlight: "A constraint tells an API which capabilities it may rely on."
    },
    {
        part: "Part 4", title: "Composition and Testable Dependencies",
        intro: "A protocol boundary lets a consumer work with a small capability. Composition supplies that capability as a collaborator, and dependency injection passes the collaborator from outside. This makes the dependency visible and lets tests supply predictable data. The protocol itself does not perform networking or persist anything.",
        examples: [{ label: "Swap a collaborator without changing the consumer", language: "swift", code: `protocol ProgressReading { // Define the consumer's data requirement.
    var completed: Int { get } // Require a readable count.
} // Finish the contract.
struct SampleProgress: ProgressReading { // Provide deterministic sample data.
    let completed: Int // Store the count supplied by the caller.
} // Finish the collaborator.
struct Summary { // Compose a summary from a progress provider.
    let progress: any ProgressReading // Keep the dependency behind its protocol interface.
    func text() -> String { // Expose formatting behavior.
        return "Completed: " + String(progress.completed) // Read and format the supplied count.
    } // Finish the method.
} // Finish the consumer.
let summary = Summary(progress: SampleProgress(completed: 3)) // Inject sample data through the memberwise initializer.
print(summary.text()) // Prints Completed: 3 without external services.` }],
        sections: [["Benefits and costs", ["Benefits: replaceable implementations, smaller contracts, and easier isolated testing.", "Costs: more types and indirection. A protocol for every concrete type can make simple code harder to follow.", "Use a class collaborator when shared identity is needed; use a value collaborator when independent value semantics fit."]]],
        highlight: "Introduce a protocol where substitution is useful, not as a rule for every type."
    },
    {
        part: "Part 5", title: "OOP vs POP: When to Use Each",
        intro: "OOP and POP emphasize different ways of organizing code, but they can work together. OOP groups state and behavior in objects; inheritance is one reuse technique, not a requirement of every object-oriented design. POP emphasizes protocol contracts, conforming types, and shared behavior through extensions. Neither is a universal replacement for the other.",
        examples: [{ label: "A class can participate in a protocol-oriented design", language: "swift", code: `protocol Counting { // Describe behavior without choosing storage or semantics.
    func count() -> Int // Require a readable count through a method.
} // Finish the contract.
final class SharedCounter: Counting { // Use a class for identity and adopt a protocol capability.
    private var value = 0 // Keep this object's mutable state private.
    func increment() { // Expose a controlled state change.
        value += 1 // Update the shared object's count.
    } // Finish the mutation method.
    func count() -> Int { // Implement the protocol requirement.
        return value // Return the current count.
    } // Finish the requirement implementation.
} // Finish the class.
let counter = SharedCounter() // Create one object with identity.
let reader: any Counting = counter // Expose only its counting capability through this reference.
counter.increment() // Mutate the original shared object.
print(reader.count()) // Prints 1 because the protocol reference holds the same class instance.` }],
        sections: [["Choose OOP when", ["Shared identity and controlled mutable state are central to the model.", "A framework requires subclassing, or a genuine is-a hierarchy has stable substitutable behavior.", "Pros: explicit object lifecycle and familiar inheritance where appropriate. Cons: deep hierarchies and shared mutable state can make changes and reasoning harder."]], ["Choose POP when", ["Unrelated types need a common capability without a shared superclass.", "You need interchangeable implementations or reusable behavior that works for structs and classes.", "Pros: flexible composition and narrow testable interfaces. Cons: excessive abstraction, extension dispatch subtleties, and no inherited storage."]], ["Combine them", ["A class can own shared state, conform to protocols, and receive collaborators through dependency injection.", "Prefer composition for has-a relationships. Use inheritance for a sound is-a relationship, rather than simply to eliminate repeated code.", "Decide from the domain and change requirements, not from a rule that POP means structs or OOP always means inheritance."]]],
        highlight: "Choose identity, capabilities, and reuse deliberately. Swift supports mixing both approaches."
    }
];

const popQuizQuestions = [
    { part: "Foundations", question: "What does POP emphasize?", options: ["Capabilities described by protocols", "Every type sharing one superclass", "Always replacing classes with structs"], answers: [0] },
    { part: "Foundations", question: "Which Swift types can adopt protocols?", options: ["Structs", "Classes", "Enums"], answers: [0, 1, 2] },
    { part: "Defaults and storage", question: "What can a protocol extension provide?", options: ["Default implementations of requirements", "Inherited stored instance properties", "Helpers based on the protocol's requirements"], answers: [0, 2] },
    { part: "Defaults and storage", question: "Why does the fee example declare monthlyFee() in the protocol?", options: ["So it is a requirement that conforming types can implement polymorphically", "So every account automatically receives balance storage", "So it can only be used with classes"], answers: [0] },
    { part: "Defaults and storage", question: "Can an extension assign to a property exposed only as { get } through the protocol?", options: ["Yes, every get requirement implies a setter", "No, that contract only promises reading", "Only when the property is called balance"], answers: [1] },
    { part: "APIs", question: "What does any MonthlyFeeProviding represent?", options: ["An existential that can hold a conforming value", "A superclass of every account", "A promise of reference semantics"], answers: [0] },
    { part: "APIs", question: "What does Person: Named express in a generic function?", options: ["Person must be a class", "The concrete type must conform to Named", "All arguments become the same object"], answers: [1] },
    { part: "Design choices", question: "Which statements about OOP and POP are true?", options: ["Classes can conform to protocols", "OOP designs can favor composition", "POP automatically removes all duplicated state and behavior"], answers: [0, 1] },
    { part: "Design choices", question: "When is a class a useful choice?", options: ["When shared instance identity is part of the model", "Whenever a type contains a method", "When a framework requires a superclass"], answers: [0, 2] },
    { part: "Design choices", question: "What is a tradeoff of introducing many protocols?", options: ["Extra indirection can make simple code harder to follow", "Every protocol automatically adds stored properties", "Protocols guarantee thread safety"], answers: [0] }
];

const popCard = oopCard.cloneNode(true);
popCard.id = "open-pop-track";
popCard.setAttribute("aria-controls", "pop-track");
popCard.querySelector(".talk-topic-title").textContent = "POP in Swift";
popCard.querySelector(".talk-topic-description").textContent = "Learn protocols, default implementations, generics, and composition—and when to choose POP, OOP, or both.";
oopCard.after(popCard);
const popTrack = oopTrack.cloneNode(true);
popTrack.id = "pop-track";
popTrack.className = "pop-track";
popTrack.querySelectorAll("[id]").forEach(element => { element.id = element.id.replaceAll("oop", "pop"); });
popTrack.querySelector("h2").textContent = "POP in Swift";
popTrack.querySelector(".talks-accordion").replaceChildren();
delete popTrack.querySelector(".talks-accordion").dataset.rendered;
popTrack.querySelector(".talks-kicker").textContent = "POP in Swift Quiz";
popTrack.querySelector(".talk-quiz-cta p").textContent = `${popQuizQuestions.length} questions covering protocols, practical examples, and OOP vs POP. Select every correct answer.`;
const popQuizButton = popTrack.querySelector(".open-oop-quiz");
popQuizButton.classList.replace("open-oop-quiz", "open-pop-quiz");
popTrack.querySelector("aside").setAttribute("aria-labelledby", "pop-reading-title");
popTrack.querySelector("aside h3").textContent = "Further reading — Protocol-Oriented Programming (POP) in Swift breakdown";
popTrack.querySelector("aside a").href = "https://lnkd.in/p/g8PgHi7k";
oopTrack.after(popTrack);
popTrack.querySelector(".topics-back").addEventListener("click", () => { window.location.hash = "swift-code"; });
const popQuiz = oopQuiz.cloneNode(true);
popQuiz.id = "pop-quiz";
popQuiz.querySelectorAll("[id]").forEach(element => { element.id = element.id.replaceAll("oop", "pop"); });
popQuiz.querySelectorAll("[aria-label]").forEach(element => { element.setAttribute("aria-label", element.getAttribute("aria-label").replaceAll("OOP", "POP")); });
popQuiz.querySelector("h2").textContent = "POP in Swift Quiz";
popQuiz.querySelector(".talk-like").dataset.talkId = "pop-quiz";
popQuiz.querySelector(".swift-quiz-feedback-button").href = "mailto:andersonnikko1@gmail.com?subject=Feedback%20on%20POP%20in%20Swift%20Quiz";
document.body.append(popQuiz);
function closePopQuiz() {
    if (!popQuiz.classList.contains("is-open")) return;
    popQuiz.classList.remove("is-open");
    popQuiz.setAttribute("aria-hidden", "true");
    document.body.classList.remove("quiz-open");
}
function showPopTrack() {
    showSwiftTalkTopics();
    swiftTalksScreen.classList.add("is-viewing-pop");
    popParts.forEach((part, index) => { swiftTalkPosts[`pop-part${index + 1}`] = buildTrackPost(part, "POP in Swift", "#Swift #POP #LearnSwift"); });
    renderLearningParts(document.querySelector("#pop-accordion"), popParts, "pop", "POP in Swift", "#pop-in-swift");
}
function openPopQuiz() {
    const form = document.querySelector("#pop-quiz-form");
    if (form.dataset.rendered !== "true") renderQuizQuestions(form, popQuizQuestions, "pop-quiz");
    popQuiz.classList.add("is-open");
    popQuiz.setAttribute("aria-hidden", "false");
    document.body.classList.add("quiz-open");
    document.querySelector("#close-pop-quiz").focus();
}
popCard.addEventListener("click", () => { window.location.hash = "pop-in-swift"; });
popQuizButton.addEventListener("click", () => { window.location.hash = "pop-in-swift-quiz"; });
document.querySelector("#back-to-pop-topics").addEventListener("click", () => {
    window.location.hash = "pop-in-swift";
    requestAnimationFrame(() => popQuizButton.focus());
});
document.querySelector("#close-pop-quiz").addEventListener("click", () => { window.location.hash = "swift-code"; });
document.querySelector("#finish-pop-quiz").addEventListener("click", () => { gradeQuiz(popQuizQuestions, "pop-quiz", document.querySelector("#pop-quiz-score"), document.querySelector("#pop-quiz-legend")); });
document.querySelector("#reset-pop-quiz").addEventListener("click", () => { resetQuiz(document.querySelector("#pop-quiz-form"), popQuizQuestions, document.querySelector("#pop-quiz-score"), document.querySelector("#pop-quiz-legend"), popQuiz); });
