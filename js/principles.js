// Beginner programming principles; each Swift example runs independently.
const principlesParts = [
    {
        "part": "Part 1",
        "title": "SOLID — A practical introduction",
        "intro": "Programming principles are guidelines for making code easier to understand, change, and test. Imagine a profile screen that loads a user, saves preferences, and builds its own UI. One small change can disturb several unrelated jobs. \n\nSOLID gives us five questions for improving those boundaries: does each component have a clear responsibility, can behavior grow safely, do replacements keep their promises, are interfaces focused, and do important rules depend on suitable abstractions? SOLID stands for Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. \n\nAn abstraction is a contract that describes what a collaborator can do without exposing how it does it; a Swift protocol is one way to express it. \n\nStart with working code, notice a real source of change, and improve one boundary at a time. These ideas apply to Swift structs and protocols as well as classes.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "// A protocol describes the small capability our feature needs.\nprotocol GreetingProviding { // A contract for any type that can provide a greeting.\n    func greeting() -> String // Require a method with no arguments that returns text; no implementation goes here.\n}\n\nstruct FriendlyGreeting: GreetingProviding { // This struct promises to implement GreetingProviding.\n    func greeting() -> String { \"Hello, Swift!\" } // Return this greeting; Swift allows an implicit return for one expression.\n}\n\n// This feature receives its collaborator instead of creating one.\nstruct WelcomeMessage { // Define a feature that asks another value for its greeting.\n    let provider: any GreetingProviding // Store any value conforming to GreetingProviding, regardless of its concrete type.\n    func text() -> String { provider.greeting() } // Call the stored provider and return the text it supplies.\n}\n\nlet message = WelcomeMessage(provider: FriendlyGreeting()) // Create a FriendlyGreeting and pass it into a new WelcomeMessage.\nprint(message.text()) // Call text(), then print its result: Hello, Swift!"
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "First identify a change: for example, a different greeting provider for a test.",
                    "SRP: group one responsibility. OCP: add behavior through a stable boundary. LSP: keep the promised behavior.",
                    "ISP: expose only needed capabilities. DIP: let policy use a contract instead of a concrete implementation."
                ]
            ],
            [
                "Common mistakes",
                [
                    "Do not add a protocol for every struct automatically.",
                    "SOLID does not replace readable names, tests, or product requirements."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Would you apply all five principles to a tiny greeting function?",
            "answer": "No. A simple function may be enough. I introduce a boundary when it helps with a real change or test. In this example a provider is useful when greetings actually vary."
        },
        "highlight": "Use SOLID to reduce the cost of change, one useful boundary at a time.",
        "bonusLinks": [
            {
                "label": "Bonus — Further reading",
                "text": "Robert C. Martin — SOLID relevance",
                "href": "https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html",
                "buttonText": "Read the explanation"
            },
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 2",
        "title": "SRP — Single Responsibility Principle",
        "intro": "A component should have one reason to change: one cohesive responsibility serving one actor or closely related group of stakeholders. A responsibility can require several methods. Consider a receipt: calculating a total follows pricing rules, while formatting its text follows presentation needs. Keeping them separate lets either evolve with less risk to the other.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "struct Receipt { // Keep the receipt data and total calculation together.\n    let prices: [Int] // Store item prices as integers; this example uses whole currency units.\n    var total: Int { prices.reduce(0, +) } // Compute the total by starting at 0 and adding each price.\n}\n\nstruct ReceiptFormatter { // Keep receipt wording separate from the calculation.\n    func text(for receipt: Receipt) -> String { // Accept a Receipt and return its formatted text.\n        \"Total: \\(receipt.total)\" // Insert the calculated total into the displayed string.\n    }\n}\n\nlet receipt = Receipt(prices: [10, 20]) // Create a receipt containing prices 10 and 20.\nprint(ReceiptFormatter().text(for: receipt)) // Create a formatter, format the receipt, and print Total: 30."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Group behavior that changes for the same business reason.",
                    "Separate pricing changes from receipt wording changes.",
                    "Test calculations without building a screen."
                ]
            ],
            [
                "Common mistakes",
                [
                    "One responsibility does not mean one method.",
                    "Avoid fragmenting closely related behavior into dozens of tiny types."
                ]
            ]
        ],
        "interviewCase": {
            "question": "A view model validates input, writes files, and formats reports. What would you examine?",
            "answer": "I would identify which requirements cause each job to change, then move independent persistence and report formatting into collaborators. The view model can coordinate them."
        },
        "highlight": "Keep things that change together together; separate independent reasons to change.",
        "bonusLinks": [
            {
                "label": "Bonus — Further reading",
                "text": "Robert C. Martin — SRP and the SOLID principles",
                "href": "https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html",
                "buttonText": "Read the explanation"
            },
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 3",
        "title": "OCP — Open/Closed Principle",
        "intro": "Code should support extension without repeatedly modifying stable policy. When new shipping options keep appearing, a shipping contract lets checkout use additional implementations without adding a new branch for each one. The boundary is open to new behavior and protects the existing caller from those variations; it is never a ban on editing code.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "protocol ShippingCost { // Describe the cost capability each shipping option must provide.\n    func cost() -> Int // Require a method that returns the shipping cost as an integer.\n}\nstruct StandardShipping: ShippingCost { // Provide a standard delivery implementation of the contract.\n    func cost() -> Int { 5 } // Return 5 as the standard delivery charge.\n}\nstruct Pickup: ShippingCost { // Add a pickup option using the same shipping contract.\n    func cost() -> Int { 0 } // Return 0 because pickup has no delivery charge.\n}\nstruct Checkout { // Calculate a total without knowing the concrete shipping option.\n    func total(items: Int, shipping: any ShippingCost) -> Int { // Accept an item subtotal and any value implementing ShippingCost.\n        items + shipping.cost() // Ask the shipping option for its cost and add it to the item subtotal.\n    }\n}\nprint(Checkout().total(items: 20, shipping: Pickup())) // Pass a subtotal of 20 and free pickup; print the resulting total, 20."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Find a variation that already exists or is clearly required.",
                    "Keep the caller focused on a stable contract.",
                    "Add a new implementation and test both old and new behavior."
                ]
            ],
            [
                "Common mistakes",
                [
                    "Do not predict every future extension.",
                    "A small switch over a fixed enum can be clearer than many types."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Every new delivery method forces edits to checkout. What could help?",
            "answer": "Extract a shipping-cost contract and pass a matching implementation into checkout. The composition code still chooses the option, but checkout no longer needs to know every delivery type."
        },
        "highlight": "Extend known variations through a stable boundary.",
        "bonusLinks": [
            {
                "label": "Bonus — Further reading",
                "text": "Robert C. Martin — OCP and the SOLID principles",
                "href": "https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html",
                "buttonText": "Read the explanation"
            },
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 4",
        "title": "LSP — Liskov Substitution Principle",
        "intro": "A replacement must preserve the behavior callers were promised. Matching a method signature is not enough: valid inputs, expected results, and important state rules must still hold. This applies to subclasses and Swift protocol conformers. If a contract promises that reading can fail, callers can handle that; if it promises successful reading, a replacement that always traps breaks the promise.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "protocol NameProviding { // Define the shared display-name capability.\n    // Contract: always return a nonempty display name.\n    func name() -> String // Require a method returning text; the comment above states its behavior contract.\n}\nstruct GuestName: NameProviding { // Provide the name for a guest using the same contract.\n    func name() -> String { \"Guest\" } // Return a nonempty fallback name for a guest.\n}\nstruct MemberName: NameProviding { // Provide a member name while keeping the same nonempty-name promise.\n    let rawName: String // Store the supplied name, which may be empty.\n    func name() -> String { // Return a display name that satisfies the contract.\n        rawName.isEmpty ? \"Member\" : rawName // If rawName is empty, return Member; otherwise return rawName.\n    }\n}\nfunc welcome(_ provider: any NameProviding) -> String { // Accept any name provider; the underscore allows an unlabeled argument.\n    \"Welcome, \" + provider.name() // Get the promised display name and add the welcome prefix.\n}\nprint(welcome(MemberName(rawName: \"\"))) // An empty member name falls back to Member; print Welcome, Member."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Write down behavior beyond the Swift signature.",
                    "Run the same contract tests against each implementation.",
                    "A subtype must not require stricter inputs or promise weaker results."
                ]
            ],
            [
                "Common mistakes",
                [
                    "Do not make an unsupported operation crash just to satisfy a protocol.",
                    "Inheritance alone does not guarantee behavioral compatibility."
                ]
            ]
        ],
        "interviewCase": {
            "question": "A read-only store conforms to a writable-store protocol but crashes on save. Is that valid?",
            "answer": "No, if save is a supported operation promised by the contract. Give the read-only store a reading capability and require a writing capability only where needed."
        },
        "highlight": "A replacement must keep the promises its caller relies on.",
        "bonusLinks": [
            {
                "label": "Bonus — Further reading",
                "text": "Liskov and Wing — A behavioral notion of subtyping (original research)",
                "href": "https://www.cs.cmu.edu/~wing/publications/LiskovWing94.pdf",
                "buttonText": "Read the explanation"
            },
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 5",
        "title": "ISP — Interface Segregation Principle",
        "intro": "Clients should not depend on operations they do not need. In Swift, a large protocol may force a simple type to implement unrelated methods or make callers know too much. Split capabilities by actual client needs so a reader can depend on reading alone and an editor can ask for writing as well.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "protocol TextReading { // Define the capability needed by clients that only read text.\n    func read() -> String // Require a method that returns the current text.\n}\nprotocol TextWriting { // Define writing separately so readers need not depend on it.\n    mutating func write(_ text: String) // Allow conforming value types to change their state when writing text.\n}\nstruct Note: TextReading, TextWriting { // A note supports both the reading and writing capabilities.\n    private var text = \"Hello\" // Start with Hello and keep the stored text private to Note.\n    func read() -> String { text } // Return the stored text without changing it.\n    mutating func write(_ text: String) { self.text = text } // Assign the parameter to this note’s property; self.text identifies the property.\n}\nfunc preview(_ source: any TextReading) { // Accept any reader, without requiring writing access.\n    print(source.read()) // Read the source text and print it; no writing operation is needed.\n}\npreview(Note()) // Create a note and pass it to preview, which prints Hello."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Name protocols after cohesive capabilities.",
                    "Let each client ask for the operations it uses.",
                    "Combine small protocols when a client truly needs both."
                ]
            ],
            [
                "Common mistakes",
                [
                    "Do not add empty or crashing methods to satisfy an oversized contract.",
                    "Splitting every method into a protocol can make navigation harder."
                ]
            ]
        ],
        "interviewCase": {
            "question": "A preview screen depends on an API with read, write, delete, and sync. What would you change?",
            "answer": "Give the preview a reading interface. Other clients can depend on the additional capabilities they need, without forcing the preview to know them."
        },
        "highlight": "Give each client the smallest cohesive contract it needs.",
        "bonusLinks": [
            {
                "label": "Bonus — Further reading",
                "text": "Robert C. Martin — ISP and the SOLID principles",
                "href": "https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html",
                "buttonText": "Read the explanation"
            },
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 6",
        "title": "DIP — Dependency Inversion Principle",
        "intro": "High-level policy should not depend directly on low-level implementation details; both should depend on abstractions. A welcome feature needs a name, not knowledge of a database. Define the capability around the feature’s need, then supply an implementation. Dependency injection means passing in a dependency; it helps implement DIP but passing a concrete database alone does not invert the dependency.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "protocol UserNameLoading { // Define the name-loading capability the feature needs.\n    func loadName() -> String // Require a method that returns a user name as text.\n}\nstruct PreviewNames: UserNameLoading { // Provide predictable sample data through the loading contract.\n    func loadName() -> String { \"Niko\" } // Return Niko without using a database or network.\n}\nstruct WelcomeFeature { // Build a welcome message using a supplied name loader.\n    let names: any UserNameLoading // Store any loader conforming to UserNameLoading, rather than a concrete database.\n    func message() -> String { \"Hello, \" + names.loadName() } // Load the name and return it with the Hello prefix.\n}\n// The app chooses the implementation at its composition point.\nlet feature = WelcomeFeature(names: PreviewNames()) // Create the sample loader and inject it into the feature.\nprint(feature.message()) // Build the message with the injected loader and print Hello, Niko."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Define contracts in terms of what the feature needs.",
                    "Pass dependencies through initializers when practical.",
                    "Use a predictable test implementation to test policy independently."
                ]
            ],
            [
                "Common mistakes",
                [
                    "Dependency injection and dependency inversion are related but different.",
                    "Avoid global service locators that hide what a feature needs."
                ]
            ]
        ],
        "interviewCase": {
            "question": "How would you test a feature that creates its own database client?",
            "answer": "Make the feature depend on a focused loading contract and inject a fake. Production wiring supplies the database implementation; the feature tests need no database."
        },
        "highlight": "Let important rules depend on capabilities, not infrastructure details.",
        "bonusLinks": [
            {
                "label": "Bonus — Further reading",
                "text": "Robert C. Martin — DIP and the SOLID principles",
                "href": "https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html",
                "buttonText": "Read the explanation"
            },
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 7",
        "title": "DRY — Don’t Repeat Yourself",
        "intro": "DRY is about avoiding duplicated knowledge. When two places encode the same business rule, one may be updated while the other is forgotten. Give that rule a clear home. Similar-looking code is not necessarily the same knowledge: two features with different reasons to change may deserve separate implementations.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "struct PasswordPolicy { // Give the shared password-length rule one home.\n    // A simplified teaching rule, not a complete security policy.\n    func accepts(_ password: String) -> Bool { // Accept a password and return a Boolean indicating whether it meets the rule.\n        password.count >= 12 // Return true for at least 12 characters; otherwise return false.\n    }\n}\nlet policy = PasswordPolicy() // Create one policy value that both flows can use.\nlet signupAllowed = policy.accepts(\"a-long-passphrase\") // Check the signup password with the shared rule; store true.\nlet resetAllowed = policy.accepts(\"too-short\") // Check the reset password with the same rule; store false.\nprint(signupAllowed, resetAllowed) // Print the two stored results: true false.\n// Signup and reset reuse the same rule instead of copying it."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Look for repeated rules, not just repeated characters.",
                    "Use one well-named function or type for shared knowledge.",
                    "Wait until the shared meaning is clear before extracting it."
                ]
            ],
            [
                "Common mistakes",
                [
                    "Do not merge unrelated features just because their code looks alike.",
                    "A shared helper with many Boolean flags may hide different responsibilities."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Signup and password reset use different minimum lengths by accident. What helps?",
            "answer": "Put the shared requirement in one policy and use it in both flows. Test the policy at the boundary, then verify each flow calls it."
        },
        "highlight": "One business rule should have one authoritative definition.",
        "bonusLinks": [
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 8",
        "title": "KISS — Keep It Simple",
        "intro": "Choose the simplest design that correctly solves the current problem. Simple means easy to understand and maintain, not necessarily the fewest lines. Clear names, ordinary control flow, and standard library operations often communicate more than clever abstractions. A simple solution must still handle the required edge cases.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "func canEnter(isMember: Bool, isOpen: Bool) -> Bool { // Accept two Boolean conditions and return whether entry is allowed.\n    // Both requirements must hold; no rule engine is needed.\n    isMember && isOpen // Return true only when both isMember and isOpen are true.\n}\nprint(canEnter(isMember: true, isOpen: false)) // The venue is closed, so the function returns and prints false.\nprint(canEnter(isMember: true, isOpen: true)) // Both conditions hold, so the function returns and prints true."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Choose names that explain intent.",
                    "Prefer a direct expression or function when it covers the requirement.",
                    "Check edge cases before calling a solution simple."
                ]
            ],
            [
                "Common mistakes",
                [
                    "Shorter code can be harder to understand.",
                    "Do not remove necessary validation to reduce line count."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Would you build a configurable rules framework for two fixed Boolean checks?",
            "answer": "Usually no. A named function communicates the requirement and is easy to test. I would revisit the design if real requirements introduced multiple changing rules."
        },
        "highlight": "Make the correct solution easy for the next reader to follow.",
        "bonusLinks": [
            {
                "label": "Bonus — Further reading",
                "text": "Swift API Design Guidelines — clarity over brevity (related guidance)",
                "href": "https://www.swift.org/documentation/api-design-guidelines/",
                "buttonText": "Read the explanation"
            },
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 9",
        "title": "YAGNI — You Aren’t Gonna Need It",
        "intro": "Avoid building speculative capabilities before they are needed. A note-taking feature that only needs adding notes does not yet need plugin loading, cloud conflict resolution, or three export formats. Future features cost time now and create maintenance obligations even if nobody uses them. Keep code clean and testable so adding real requirements later is easier.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "struct Notebook { // Define a notebook that owns its notes.\n    private(set) var notes: [String] = [] // Start with an empty text array; callers can read it but cannot assign to it.\n    mutating func add(_ text: String) { // Define an operation that can change this notebook by adding text.\n        notes.append(text) // Append the supplied text to the end of the notes array.\n    }\n}\nvar notebook = Notebook() // Create a mutable notebook so add() can change it.\nnotebook.add(\"Learn one principle\") // Call add() to store one note.\nprint(notebook.notes.count) // Read the array’s count and print 1.\n// Add export when it becomes a real requirement."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Ask which current requirement justifies the code.",
                    "Build the smallest complete useful feature.",
                    "Continue refactoring and testing; they support future change."
                ]
            ],
            [
                "Common mistakes",
                [
                    "YAGNI is not permission to skip known requirements.",
                    "Avoid speculative infrastructure disguised as future-proofing."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Only text export is requested. Should you also add PDF, CSV, and a plugin API?",
            "answer": "I would implement text export with clear boundaries and tests. I would defer other formats until there is evidence they are needed."
        },
        "highlight": "Build for real needs; keep future choices open through clear code.",
        "bonusLinks": [
            {
                "label": "Bonus — Further reading",
                "text": "Martin Fowler — YAGNI",
                "href": "https://martinfowler.com/bliki/Yagni.html",
                "buttonText": "Read the explanation"
            },
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 10",
        "title": "LoD — Law of Demeter",
        "intro": "A component should have limited knowledge of the internal structure of its collaborators. Instead of reaching through order.customer.address.city, ask the order for the delivery information its client needs. This reduces the number of structural details a caller must understand. LoD is about knowledge and coupling, not mechanically counting dots: fluent APIs and value transformations are not automatically violations.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "struct Address { let city: String } // Define an address that stores a city name.\nstruct Customer { let address: Address } // Define a customer that owns an address value.\nstruct Order { // Expose delivery information without exposing the customer’s structure.\n    private let customer: Customer // Store the customer privately so callers cannot navigate through it.\n    init(customer: Customer) { self.customer = customer } // Initialize the order by assigning the supplied customer to its property.\n    var deliveryCity: String { customer.address.city } // Read the customer’s city internally and expose it as deliveryCity.\n}\nlet order = Order(customer: Customer(address: Address(city: \"Paris\"))) // Build a Paris address, put it in a customer, and pass that customer to the order.\nprint(order.deliveryCity) // Ask the order directly for its delivery city and print Paris.\n// Order owns the knowledge of where delivery information lives."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Offer operations or information meaningful to the caller.",
                    "Keep knowledge of internal object relationships local.",
                    "Prefer talking to direct collaborators."
                ]
            ],
            [
                "Common mistakes",
                [
                    "Do not create hundreds of meaningless forwarding methods.",
                    "Do not treat every chain of dots as a design problem."
                ]
            ]
        ],
        "interviewCase": {
            "question": "A screen accesses cart.user.settings.currency. Why might this be fragile?",
            "answer": "The screen depends on several internal relationships. A focused cart presentation value or currency accessor can hide that structure so a settings refactor does not spread into the screen."
        },
        "highlight": "Ask a collaborator for what you need without exploring its internals.",
        "bonusLinks": [
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 11",
        "title": "Composition over Inheritance",
        "intro": "Prefer assembling behavior from collaborators when inheritance is only being used to share code. A player can have a movement behavior rather than inheriting from a long chain of increasingly specialized players. Composition models “has a” relationships and makes capabilities easier to combine. Inheritance is still appropriate for genuine substitutable “is a” relationships and framework requirements.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "struct Walking { // Define a reusable walking behavior.\n    func move() -> String { \"Walk forward\" } // Return the instruction for one walking movement.\n}\nstruct Player { // Define a player that uses a separate movement value.\n    let movement: Walking // Store a Walking collaborator; Player does not inherit from Walking.\n    func takeTurn() -> String { movement.move() } // Ask the movement collaborator to move and return its instruction.\n}\nlet player = Player(movement: Walking()) // Create a walking behavior and supply it to a player.\nprint(player.takeTurn()) // Run the player’s turn and print Walk forward.\n// Add a movement protocol if several behaviors actually appear."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Start with small collaborators that perform coherent jobs.",
                    "Use protocols when behavior needs multiple implementations.",
                    "Keep inheritance shallow and respect substitution contracts."
                ]
            ],
            [
                "Common mistakes",
                [
                    "Do not create subclasses solely to reuse a few methods.",
                    "Composition can also become complicated if every operation has its own layer."
                ]
            ]
        ],
        "interviewCase": {
            "question": "You need flying, swimming, and walking game characters. Would you create every subclass combination?",
            "answer": "I would compose movement capabilities so combinations do not require a growing inheritance tree. Each character receives the behaviors it needs."
        },
        "highlight": "Build behavior by combining useful parts.",
        "bonusLinks": [
            {
                "label": "Bonus — Further reading",
                "text": "Swift language guide — protocols and delegation (composition mechanism)",
                "href": "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/protocols/",
                "buttonText": "Read the explanation"
            },
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 12",
        "title": "Encapsulation",
        "intro": "Encapsulation groups state with behavior and controls how other code can use it. A counter with a maximum should not let callers directly assign impossible values. Provide operations that preserve the rule and expose only the information callers need. Access control supports encapsulation, but private properties alone do not guarantee a good design.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "struct LimitedCounter { // Keep the counter state and its limit-checking behavior together.\n    private(set) var value = 0 // Start at 0; allow outside reads but restrict writes to this type.\n    let maximum = 3 // Set the fixed upper limit to 3.\n    mutating func increment() { // Define an operation that can change the counter value.\n        guard value < maximum else { return } // Stop immediately if the value has already reached the maximum.\n        value += 1 // Increase the value by 1 after the limit check succeeds.\n    }\n}\nvar counter = LimitedCounter() // Create a mutable counter starting at 0.\nfor _ in 0..<5 { counter.increment() } // Attempt five increments; attempts after reaching 3 leave the value unchanged.\nprint(counter.value) // Read the protected value and print 3.\n// counter.value = 99 // Not allowed: use the controlled operation."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Identify invariants: rules that must always hold.",
                    "Expose intent through operations such as increment().",
                    "Use private or private(set) where mutation must be controlled."
                ]
            ],
            [
                "Common mistakes",
                [
                    "A public setter for every private field can undo the protection.",
                    "Do not expose mutable internal objects that bypass your rules."
                ]
            ]
        ],
        "interviewCase": {
            "question": "How do you stop callers from setting a counter beyond its limit?",
            "answer": "Restrict writes and provide an increment operation that checks the limit. Every permitted mutation must maintain the invariant, including initialization."
        },
        "highlight": "Protect valid state behind a clear public interface.",
        "bonusLinks": [
            {
                "label": "Bonus — Further reading",
                "text": "Swift language guide — access control",
                "href": "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/",
                "buttonText": "Read the explanation"
            },
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 13",
        "title": "Separation of Concerns",
        "intro": "Divide a system into areas with distinct concerns, such as data access, business decisions, and presentation. This is broader than SRP: it helps organize a whole feature or application, while SRP focuses on cohesive reasons for a component to change. Boundaries let you understand and test each concern with less context.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "struct TemperatureRule { // Keep the freezing decision separate from display wording.\n    func isFreezing(celsius: Int) -> Bool { celsius <= 0 } // Return true when the Celsius temperature is zero or below.\n}\nstruct WeatherPresenter { // Translate the rule’s result into a message for the user.\n    let rule = TemperatureRule() // Create the rule used to decide whether the temperature is freezing.\n    func message(celsius: Int) -> String { // Accept a Celsius temperature and return the appropriate display text.\n        // Presentation chooses words; the rule decides the condition.\n        rule.isFreezing(celsius: celsius) ? \"Watch for ice\" : \"Above freezing\" // Ask the rule: if true, return Watch for ice; otherwise return Above freezing.\n    }\n}\nprint(WeatherPresenter().message(celsius: -2)) // Pass -2 to the presenter; the freezing rule is true, so print Watch for ice."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Keep display wording separate from domain decisions.",
                    "Keep network and storage details out of views when they complicate the feature.",
                    "Choose boundaries that make independent changes easier."
                ]
            ],
            [
                "Common mistakes",
                [
                    "Folders alone do not separate responsibilities.",
                    "Avoid adding layers that only pass values along without a useful boundary."
                ]
            ]
        ],
        "interviewCase": {
            "question": "An API parsing change forces edits in several screens. What might be wrong?",
            "answer": "Screens may know the API representation directly. I would translate responses into feature data at a boundary, then let screens focus on presentation."
        },
        "highlight": "Give each concern a clear place in the system.",
        "bonusLinks": [
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 14",
        "title": "Don’t Reinvent the Wheel",
        "intro": "Before writing a general-purpose solution, check whether the language or platform already solves the problem well. Reusing a suitable standard library or framework can reduce bugs and maintenance. Understand its behavior and limitations. For third-party libraries, also evaluate maintenance, license, security, dependency cost, and fit; reuse is a decision, not an automatic download.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "let scores = [30, 10, 20] // Create an array of scores in their original order.\nlet ordered = scores.sorted() // Return a new array sorted in ascending order and store it as ordered.\nprint(ordered) // Print the sorted copy: [10, 20, 30].\nprint(scores) // Print the unchanged original: [30, 10, 20].\n// Writing a sorting algorithm is useful practice;\n// ordinary app code usually benefits from the standard implementation."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Check the standard library and Apple frameworks first.",
                    "Read the API contract and test behavior your feature relies on.",
                    "Use third-party dependencies only when their benefits justify their costs."
                ]
            ],
            [
                "Common mistakes",
                [
                    "Do not add a large library for a trivial operation.",
                    "Do not copy an unfamiliar implementation without understanding its constraints."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Would you handwrite sorting for a normal list of scores?",
            "answer": "I would use sorted() unless a measured requirement needs something different. Implementing sorting is valuable for learning, but production code benefits from a maintained standard operation."
        },
        "highlight": "Reuse a proven solution when it fits the actual problem.",
        "bonusLinks": [
            {
                "label": "Bonus — Further reading",
                "text": "Apple — Sequence.sorted()",
                "href": "https://developer.apple.com/documentation/swift/sequence/sorted()",
                "buttonText": "Read the explanation"
            },
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 15",
        "title": "Low Coupling",
        "intro": "Coupling measures how strongly components depend on one another’s details. Lower coupling means a change is less likely to ripple across the system. A child component can report an event through a closure without knowing a specific parent screen. Dependencies still exist, but they can be small, explicit, and stable. Balance low coupling with high cohesion: closely related work should still belong together.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "struct SaveAction { // Define an action that reports completion without knowing a screen type.\n    let onSaved: (String) -> Void // Store a callback that accepts a String and returns nothing (Void).\n    func run() { // Define the method that triggers this example’s completion event.\n        onSaved(\"Saved\") // Call the supplied callback with Saved; its owner decides how to respond.\n    }\n}\nlet action = SaveAction(onSaved: { message in // Create the action with a closure; message names the text received by the closure.\n    print(message) // Print the callback’s text when the action invokes it.\n})\naction.run() // Run the action, which calls the closure and prints Saved."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Pass dependencies explicitly so readers can see them.",
                    "Use focused contracts, closures, or values at boundaries.",
                    "Ask how many unrelated files must change with one implementation detail."
                ]
            ],
            [
                "Common mistakes",
                [
                    "Zero coupling is not a realistic goal for collaborating components.",
                    "Global state can hide coupling instead of reducing it."
                ]
            ]
        ],
        "interviewCase": {
            "question": "A save button knows the exact parent screen type and edits its labels. How can you reduce coupling?",
            "answer": "Have it report a save event through a closure or focused delegate. The parent then decides how its UI responds."
        },
        "highlight": "Keep dependencies small, visible, and tied to stable behavior.",
        "bonusLinks": [
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    },
    {
        "part": "Part 16",
        "title": "SSOT — Single Source of Truth",
        "intro": "Each piece of state or knowledge should have one authoritative owner. If a cart stores both its items and a separately updated item count, they can disagree. Derive the count from the items instead. In SwiftUI, views can share a model or receive bindings to state owned elsewhere. SSOT does not require a global singleton: different features can own different facts, and caches need a clear synchronization policy.",
        "examples": [
            {
                "label": "Swift example — try it in a Playground",
                "language": "swift",
                "code": "struct Cart { // Define a cart that owns its item list.\n    var items: [String] = [] // Start with an empty array as the authoritative list of items.\n    var itemCount: Int { items.count } // Calculate the current count from items each time it is read.\n    var isEmpty: Bool { items.isEmpty } // Return true if the item list is empty; otherwise return false.\n}\nvar cart = Cart() // Create a mutable cart so items can be added.\ncart.items.append(\"Book\") // Append Book to the authoritative item list.\nprint(cart.itemCount) // Read the derived count and print 1.\nprint(cart.isEmpty) // Read the derived empty-state flag and print false.\n// No separate count variable can become stale."
            }
        ],
        "sections": [
            [
                "How to use it",
                [
                    "Choose who owns each fact.",
                    "Compute derived values where practical.",
                    "Let views read or bind to owned state instead of keeping competing copies."
                ]
            ],
            [
                "Common mistakes",
                [
                    "One source of truth does not mean one global object for the whole app.",
                    "Caches and local drafts need explicit rules for reconciling changes."
                ]
            ]
        ],
        "interviewCase": {
            "question": "A cart badge shows three items while the cart contains two. What would you check?",
            "answer": "Look for a separately maintained count. Derive the badge from the authoritative items, or ensure the same model supplies both views. If a cache is involved, define how it refreshes."
        },
        "highlight": "Own a fact once; derive or synchronize its representations deliberately.",
        "bonusLinks": [
            {
                "label": "Bonus — Further reading",
                "text": "Apple — Managing model data in your app",
                "href": "https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app",
                "buttonText": "Read the explanation"
            },
            {
                "label": "Bonus — Explore Programming Principles in iSOLID",
                "text": "Continue learning with theory and practical code examples.",
                "href": "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008",
                "buttonText": "Explore iSOLID ↗"
            }
        ]
    }
];

const principlesQuizQuestions = [
    {
        "part": "Part 1",
        "question": "What is SOLID intended to help with?",
        "options": [
            "Making code easier to change and test",
            "Adding as many protocols as possible",
            "Choosing useful responsibility boundaries"
        ],
        "answers": [
            0,
            2
        ]
    },
    {
        "part": "Part 1",
        "question": "How should a beginner start applying principles?",
        "options": [
            "Redesign every type immediately",
            "Identify a real problem and improve one boundary",
            "Treat each guideline as an absolute rule"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "Part 2",
        "question": "What does one responsibility mean?",
        "options": [
            "Exactly one method",
            "A cohesive reason to change",
            "One file for the whole app"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "Part 2",
        "question": "Why separate receipt totals from receipt formatting?",
        "options": [
            "Pricing and presentation can change independently",
            "It lets you test pricing without presentation",
            "Every function must live in a separate type"
        ],
        "answers": [
            0,
            1
        ]
    },
    {
        "part": "Part 3",
        "question": "What does OCP encourage when shipping options keep growing?",
        "options": [
            "Add implementations behind a stable shipping contract",
            "Never edit any existing code",
            "Keep checkout independent of each shipping type"
        ],
        "answers": [
            0,
            2
        ]
    },
    {
        "part": "Part 3",
        "question": "Must every small switch become a protocol hierarchy?",
        "options": [
            "Yes, all switches violate OCP",
            "No, a fixed set of cases can be clearer as an enum",
            "Yes, even with no changing behavior"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "Part 4",
        "question": "What must a substitute preserve?",
        "options": [
            "The caller’s expected behavior",
            "The exact internal algorithm",
            "The contract’s valid inputs and guarantees"
        ],
        "answers": [
            0,
            2
        ]
    },
    {
        "part": "Part 4",
        "question": "A read-only store crashes on a promised save operation. What is the issue?",
        "options": [
            "Its name is too long",
            "It violates the behavior callers rely on",
            "It uses too few protocols"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "Part 5",
        "question": "Which interface should a read-only preview need?",
        "options": [
            "Reading, writing, and deleting",
            "Reading only",
            "Every storage operation"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "Part 5",
        "question": "What are signs a protocol may need splitting?",
        "options": [
            "Clients depend on unrelated methods",
            "Implementations add unsupported placeholder operations",
            "The protocol has a descriptive name"
        ],
        "answers": [
            0,
            1
        ]
    },
    {
        "part": "Part 6",
        "question": "What illustrates dependency inversion?",
        "options": [
            "A feature depends on a focused contract",
            "A feature always constructs a concrete database",
            "Infrastructure implements the capability the feature needs"
        ],
        "answers": [
            0,
            2
        ]
    },
    {
        "part": "Part 6",
        "question": "How is dependency injection different from DIP?",
        "options": [
            "They are identical",
            "Injection means passing a dependency; DIP concerns the dependency’s abstraction",
            "Injection always requires a framework"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "Part 7",
        "question": "What duplication is DRY mainly concerned with?",
        "options": [
            "Repeated knowledge or business rules",
            "Every repeated character",
            "Rules that can drift when copied"
        ],
        "answers": [
            0,
            2
        ]
    },
    {
        "part": "Part 7",
        "question": "Two similar functions follow different business rules. Should you always merge them?",
        "options": [
            "Yes, similar text means identical knowledge",
            "No, their reasons to change may differ",
            "Yes, using many flags fixes every difference"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "Part 8",
        "question": "Which choices support KISS?",
        "options": [
            "Clear names and straightforward control flow",
            "The shortest possible code at any cost",
            "Handling required edge cases"
        ],
        "answers": [
            0,
            2
        ]
    },
    {
        "part": "Part 8",
        "question": "Two fixed Boolean conditions need checking. What is a sensible first design?",
        "options": [
            "A plugin-based rule engine",
            "A small named function",
            "A hierarchy with ten subclasses"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "Part 9",
        "question": "What does YAGNI suggest about an unrequested export plugin system?",
        "options": [
            "Build it now just in case",
            "Wait for a real need",
            "Keep current code clear so it can evolve"
        ],
        "answers": [
            1,
            2
        ]
    },
    {
        "part": "Part 9",
        "question": "Does YAGNI mean skipping tests and refactoring?",
        "options": [
            "Yes, they only help the future",
            "No, they help keep current code reliable and changeable",
            "Yes, until all possible features exist"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "Part 10",
        "question": "What is the goal of the Law of Demeter?",
        "options": [
            "Reduce knowledge of collaborator internals",
            "Ban every expression containing multiple dots",
            "Keep structural dependencies local"
        ],
        "answers": [
            0,
            2
        ]
    },
    {
        "part": "Part 10",
        "question": "Why expose order.deliveryCity instead of making screens navigate customer.address.city?",
        "options": [
            "To hide an internal relationship from callers",
            "To guarantee faster execution",
            "To prevent all future changes"
        ],
        "answers": [
            0
        ]
    },
    {
        "part": "Part 11",
        "question": "What does composition model?",
        "options": [
            "A has-a relationship between collaborators",
            "Only parent and child classes",
            "Combining behavior from useful parts"
        ],
        "answers": [
            0,
            2
        ]
    },
    {
        "part": "Part 11",
        "question": "When can inheritance still be appropriate?",
        "options": [
            "For a genuine substitutable is-a relationship",
            "Whenever two methods look similar",
            "When required by a framework’s design"
        ],
        "answers": [
            0,
            2
        ]
    },
    {
        "part": "Part 12",
        "question": "How does the limited counter protect its state?",
        "options": [
            "It allows any external assignment",
            "It restricts writes and checks the limit during increment",
            "It hides all reads"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "Part 12",
        "question": "What is an invariant?",
        "options": [
            "A rule that valid state must preserve",
            "A variable that changes randomly",
            "A naming convention for protocols"
        ],
        "answers": [
            0
        ]
    },
    {
        "part": "Part 13",
        "question": "Which choices support separation of concerns?",
        "options": [
            "Separating business decisions from display wording",
            "Putting network parsing into every screen",
            "Translating external data at a clear boundary"
        ],
        "answers": [
            0,
            2
        ]
    },
    {
        "part": "Part 13",
        "question": "How does separation of concerns relate to SRP?",
        "options": [
            "They are unrelated",
            "It organizes distinct concerns across a system; SRP focuses on cohesive reasons to change",
            "Both require one method per file"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "Part 14",
        "question": "What should you check before writing a general-purpose utility?",
        "options": [
            "Whether the standard library already meets the need",
            "Whether a dependency’s cost is justified",
            "Only whether a library is popular"
        ],
        "answers": [
            0,
            1
        ]
    },
    {
        "part": "Part 14",
        "question": "What does scores.sorted() do?",
        "options": [
            "Returns an ordered array",
            "Mutates scores in place",
            "Leaves the original array unchanged"
        ],
        "answers": [
            0,
            2
        ]
    },
    {
        "part": "Part 15",
        "question": "Which choices can reduce coupling?",
        "options": [
            "Pass explicit collaborators",
            "Let a child report an event through a closure",
            "Use hidden global state for every dependency"
        ],
        "answers": [
            0,
            1
        ]
    },
    {
        "part": "Part 16",
        "question": "How can a cart keep its badge count consistent?",
        "options": [
            "Update a separate count manually in each screen",
            "Derive the count from authoritative items",
            "Use shared owned state rather than competing copies"
        ],
        "answers": [
            1,
            2
        ]
    }
];
