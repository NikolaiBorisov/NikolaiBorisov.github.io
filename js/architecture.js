// Architecture lessons use the shared track renderer and quiz engine.
const architectureParts = [
    {
        "part": "Part 1",
        "title": "Architecture Basics",
        "intro": "Responsibilities, boundaries, dependencies, and data flow.\n\nArchitecture is how responsibilities and dependencies fit together. A responsibility is a job, a boundary separates jobs, and a dependency is something a component needs. Data flow describes how values move when a user acts. We will use a small task-list app throughout this track. Each example runs independently in a Swift Playground. The examples model architecture without requiring a UI framework.",
        "examples": [
            {
                "label": "Swift example — run independently in a Playground",
                "language": "swift",
                "code": "struct TaskItem { // Define a structure that groups the data for one task.\n    let title: String // Store the task title as text; let means this property cannot be reassigned.\n    var isComplete: Bool // Store whether the task is complete; var allows this true-or-false value to change.\n}\n\n// Business logic answers a question about the data.\nfunc remainingCount(in tasks: [TaskItem]) -> Int { // Define a function that receives an array of tasks and returns an integer count.\n    tasks.filter { !$0.isComplete }.count // Keep unfinished tasks and return their count; $0 is each task, and ! means not. A single expression returns automatically.\n}\n\n// Presentation turns that answer into text.\nfunc summaryText(count: Int) -> String { // Define a function that receives a count and returns display text.\n    \"Remaining: \\(count)\" // Insert count into the text with string interpolation and return the resulting string.\n}\n\nlet tasks = [TaskItem(title: \"Learn Swift\", isComplete: false)] // Create an array containing one task whose isComplete value is false.\nprint(summaryText(count: remainingCount(in: tasks))) // Count unfinished tasks, format that count, and print the result: Remaining: 1."
            }
        ],
        "sections": [
            [
                "How it works",
                [
                    "The task is data; remainingCount owns a rule; summaryText owns wording.",
                    "Data flows from tasks through a calculation into display text.",
                    "A dependency arrow means “uses”; it is not necessarily the direction in which data travels."
                ]
            ],
            [
                "When to use it and tradeoffs",
                [
                    "Start with clear functions and types. Introduce boundaries when changes or tests need them.",
                    "These topics overlap: MVVM can use repositories, coordinators, and dependency injection. There is no universal best architecture."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Why separate a calculation from display text?",
            "answer": "You can change wording without changing the rule, and test the rule without building a screen."
        },
        "highlight": "Choose boundaries that make real changes easier.",
        "bonusLinks": [
            {
                "label": "Further reading — Martin Fowler — Software Architecture Guide",
                "text": "Explore what architecture means and why clear boundaries make software easier to change. Start with the introductory overview.",
                "href": "https://martinfowler.com/architecture/",
                "buttonText": "Read the architecture guide"
            }
        ]
    },
    {
        "part": "Part 2",
        "title": "MVC",
        "intro": "Separating models, views, and controllers.\n\nModel–View–Controller separates application data and rules (Model), rendering (View), and coordination of user input (Controller). In UIKit, UIViewController often takes the controller role. Here a console view makes the flow visible: an action reaches the controller, it changes the model, and it asks the view to render.",
        "examples": [
            {
                "label": "Swift example — run independently in a Playground",
                "language": "swift",
                "code": "struct TaskModel { // Define the Model, which stores the task-list data.\n    var titles: [String] = [] // Start with an empty array of strings; var lets us add titles later.\n}\nstruct TaskView { // Define the View, which is responsible for displaying data.\n    func render(_ titles: [String]) { // Define a method that receives task titles; _ lets callers omit the argument label.\n        print(titles.joined(separator: \", \")) // Combine the titles into one string separated by commas, then print it.\n    }\n}\nfinal class TaskController { // Define the Controller that coordinates the Model and View; final prevents subclassing.\n    private var model = TaskModel() // Create a model that only this controller can access; var allows its data to change.\n    private let view = TaskView() // Create the view this controller will use; private hides it from outside code.\n    func addTask(_ title: String) { // Define the action for adding a task, receiving its title as a string.\n        model.titles.append(title) // Append the new title to the model’s array.\n        view.render(model.titles) // Ask the view to display the model’s updated titles.\n    }\n}\nlet controller = TaskController() // Create a controller, which also creates its model and view.\ncontroller.addTask(\"Learn MVC\") // Add this task through the controller; the view then prints Learn MVC."
            }
        ],
        "sections": [
            [
                "How it works",
                [
                    "addTask receives an action and updates the model.",
                    "The view renders the titles supplied by the controller.",
                    "A real UIKit screen would render labels or rows instead of printing."
                ]
            ],
            [
                "When to use it and tradeoffs",
                [
                    "Useful for small UIKit features and understanding existing applications.",
                    "Avoid a massive controller that also owns networking, storage, and every business rule. Extract cohesive collaborators as needed."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Should the controller implement file storage?",
            "answer": "It can coordinate a storage collaborator, but file-format details should live behind a separate responsibility."
        },
        "highlight": "A controller coordinates; it need not do every job.",
        "bonusLinks": [
            {
                "label": "Further reading — Apple — View Controllers and MVC",
                "text": "See how UIKit view controllers connect model data with views and coordinate what appears onscreen.",
                "href": "https://developer.apple.com/documentation/uikit/displaying-and-managing-views-with-a-view-controller",
                "buttonText": "Read Apple’s MVC guide"
            },
            {
                "label": "Further reading — MVC: Model, View, Controller (Breakdown)",
                "text": "",
                "href": "https://lnkd.in/p/dQJS6bk6",
                "buttonText": "Read on LinkedIn ↗"
            }
        ]
    },
    {
        "part": "Part 3",
        "title": "MVP",
        "intro": "Separating models, views, and presenters.\n\nModel–View–Presenter moves presentation decisions into a Presenter. This example uses the Passive View variant: the View forwards user actions and displays values supplied by the Presenter, without reading the Model directly. The Model represents application data and rules. In UIKit, a UIViewController can implement the View contract while a separate Presenter handles presentation logic.",
        "examples": [
            {
                "label": "Swift example — run independently in a Playground",
                "language": "swift",
                "code": "struct TaskItem { // Define the Model for one task.\n    let title: String // Store the task title as a value that cannot be reassigned.\n}\nprotocol TaskListViewing: AnyObject { // Define a view contract restricted to class instances so it can be referenced weakly.\n    func show(titles: [String], summary: String) // Require the View to display prepared titles and summary text.\n}\nfinal class TaskListPresenter { // Define the Presenter that handles actions and prepares display output.\n    private var tasks: [TaskItem] = [] // Keep the task data inside the Presenter for this small example.\n    private weak var view: (any TaskListViewing)? // Avoid retaining the View; another owner must keep it alive.\n    init(view: any TaskListViewing) { // Receive a View through its contract instead of a concrete UI type.\n        self.view = view // Store a weak reference to the supplied View.\n    }\n    func addTask(_ title: String) { // Handle the user action forwarded by the View.\n        tasks.append(TaskItem(title: title)) // Add a new task to the model data.\n        view?.show(titles: tasks.map { $0.title }, summary: \"Tasks: \\(tasks.count)\") // Prepare display values and send them to the View if it still exists.\n    }\n}\nfinal class ConsoleTaskView: TaskListViewing { // Implement the View without requiring UIKit or SwiftUI.\n    var presenter: TaskListPresenter? // Keep the Presenter alive while this View owns the feature.\n    func addButtonTapped(title: String) { // Simulate a user entering a title and tapping Add.\n        presenter?.addTask(title) // Forward the action without formatting or changing model data here.\n    }\n    func show(titles: [String], summary: String) { // Receive display values prepared by the Presenter.\n        print(summary) // Print the summary, such as Tasks: 1.\n        print(titles.joined(separator: \", \")) // Render task titles as comma-separated text.\n    }\n}\nlet view = ConsoleTaskView() // Create and retain the View for the lifetime of this example.\nview.presenter = TaskListPresenter(view: view) // Connect the View and Presenter; the reference back to the View is weak.\nview.addButtonTapped(title: \"Learn MVP\") // Simulate an action; the View prints Tasks: 1 followed by Learn MVP."
            }
        ],
        "sections": [
            [
                "How it works",
                [
                    "The View forwards the Add action to the Presenter, which updates the task data and prepares titles and summary text.",
                    "The Presenter calls the TaskListViewing contract; the console View only renders the supplied values.",
                    "The View owns the Presenter, and the Presenter holds the View weakly to avoid a retain cycle.",
                    "In this MVP variant the Presenter explicitly updates a View interface. In the next MVVM example, the View reads display state exposed by a ViewModel."
                ]
            ],
            [
                "When to use it and tradeoffs",
                [
                    "Useful when UIKit screens contain presentation logic that should be tested without constructing a real screen.",
                    "A view protocol makes a recording test double easy to substitute, but adds methods and wiring to maintain.",
                    "Keep business rules in model or use-case collaborators as the feature grows; a Presenter can also become too large."
                ]
            ]
        ],
        "interviewCase": {
            "question": "How would you test the Presenter without a screen?",
            "answer": "Pass a recording object that implements TaskListViewing, keep it alive during the test, call addTask, and assert that it receives the expected titles and summary."
        },
        "highlight": "The View forwards actions and renders output; the Presenter decides what to display.",
        "bonusLinks": [
            {
                "label": "Further reading — Martin Fowler — Passive View",
                "text": "Explore the Passive View variant of MVP and how a view contract lets presentation behavior be tested without a UI framework.",
                "href": "https://martinfowler.com/eaaDev/PassiveScreen.html",
                "buttonText": "Read about Passive View"
            },
            {
                "label": "Further reading — MVP: Model, View, Presenter (Breakdown)",
                "text": "",
                "href": "https://lnkd.in/p/dBsY9Zvj",
                "buttonText": "Read on LinkedIn ↗"
            }
        ]
    },
    {
        "part": "Part 4",
        "title": "MVVM",
        "intro": "Separating presentation logic from UI and managing view state.\n\nModel–View–ViewModel moves presentation logic and view state into a ViewModel. The View displays state and forwards user intent. A ViewModel can derive display text from model values without importing a UI framework. The example explicitly reads state after an action; it does not implement automatic UI observation.",
        "examples": [
            {
                "label": "Swift example — run independently in a Playground",
                "language": "swift",
                "code": "struct TaskItem { // Define the Model for one task.\n    let title: String // Store the task’s title as a string that cannot be reassigned.\n}\nfinal class TaskListViewModel { // Define the ViewModel that prepares screen data; final prevents subclassing.\n    private var tasks: [TaskItem] = [] // Keep a changeable array of tasks accessible only inside this ViewModel.\n    var rowTitles: [String] { tasks.map { $0.title } } // Compute an array of titles whenever this property is read; map transforms each task ($0) into its title.\n    var summary: String { \"Tasks: \\(tasks.count)\" } // Compute display text by inserting the current number of tasks into a string.\n    func addTask(_ title: String) { // Define an action that accepts the title of a new task.\n        tasks.append(TaskItem(title: title)) // Create a TaskItem from the supplied title and add it to the array.\n    }\n}\nlet viewModel = TaskListViewModel() // Create the ViewModel with an initially empty task list.\nviewModel.addTask(\"Learn MVVM\") // Ask the ViewModel to add a task with this title.\nprint(viewModel.summary) // Read the computed summary and print Tasks: 1.\nprint(viewModel.rowTitles) // Read the computed titles and print the array containing Learn MVVM."
            }
        ],
        "sections": [
            [
                "How it works",
                [
                    "The model stores a task; the ViewModel derives rows and summary text.",
                    "The View sends addTask and renders the resulting state.",
                    "In a UI, connect changes to rendering with an appropriate observation mechanism. Keep UI-facing state on the appropriate actor."
                ]
            ],
            [
                "When to use it and tradeoffs",
                [
                    "Useful when formatting, validation, or loading state makes views difficult to understand or test.",
                    "MVVM does not automatically solve navigation or persistence. A ViewModel can also become too large."
                ]
            ]
        ],
        "interviewCase": {
            "question": "How would you test this ViewModel?",
            "answer": "Create it, call addTask, and assert that rowTitles and summary reflect the new task. No screen is required."
        },
        "highlight": "Expose view state and actions instead of UI implementation details.",
        "bonusLinks": [
            {
                "label": "Further reading — objc.io — Introduction to MVVM",
                "text": "Learn why presentation logic belongs in a view model and how that improves testing. This foundational article uses Objective-C examples; focus on the responsibilities and data flow.",
                "href": "https://www.objc.io/issues/13-architecture/mvvm/",
                "buttonText": "Read the MVVM introduction"
            },
            {
                "label": "Further reading — MVVM: Model, View, ViewModel (Breakdown)",
                "text": "",
                "href": "https://lnkd.in/p/d8jw5-iX",
                "buttonText": "Read on LinkedIn ↗"
            }
        ]
    },
    {
        "part": "Part 5",
        "title": "Unidirectional Data Flow",
        "intro": "State, actions, and predictable state updates.\n\nUnidirectional data flow gives state changes a consistent path: the View sends an Action, update logic produces new State, and the View renders that State. A reducer is a function that calculates the next state from the current state and an action. Side effects such as network requests happen outside a pure reducer and report results through later actions.",
        "examples": [
            {
                "label": "Swift example — run independently in a Playground",
                "language": "swift",
                "code": "struct TaskState { // Define a structure containing the feature’s current data, called its state.\n    var titles: [String] = [] // Start the state with an empty, changeable array of task titles.\n}\nenum TaskAction { // Define an enumeration listing the actions this feature understands.\n    case add(String) // Define an add action that carries a string containing the new title.\n    case clear // Define a clear action that carries no extra data.\n}\nfunc reduce(_ state: TaskState, _ action: TaskAction) -> TaskState { // Define a reducer that receives the current state and an action, then returns the next state.\n    var next = state // Copy the state into a variable so we can modify the copy without changing the input.\n    switch action { // Choose which update to perform by examining the action.\n    case .add(let title): next.titles.append(title) // For an add action, extract its title and append it to the copied state.\n    case .clear: next.titles.removeAll() // For a clear action, remove every title from the copied state.\n    }\n    return next // Return the updated copy to the caller.\n}\nlet initial = TaskState() // Create the original state with no task titles.\nlet updated = reduce(initial, .add(\"Learn data flow\")) // Run the reducer with an add action and store the new state it returns.\nprint(initial.titles.count) // Print 0 because the original state still has no titles.\nprint(updated.titles.count) // Print 1 because the new state contains the added title."
            }
        ],
        "sections": [
            [
                "How it works",
                [
                    "TaskAction names the events that can change state.",
                    "The reducer copies the value and returns the updated state.",
                    "The same state and action produce the same result in this pure example."
                ]
            ],
            [
                "When to use it and tradeoffs",
                [
                    "Useful when many events affect shared feature state and you need predictable transitions.",
                    "Avoid putting networking into a pure reducer. Model loading, success, and failure as explicit states or actions."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Where does a failed request go?",
            "answer": "The effect handler can send a failure action; the reducer updates error state, and the View renders it."
        },
        "highlight": "Actions explain why state changed.",
        "bonusLinks": [
            {
                "label": "Further reading — Point-Free — The Composable Architecture",
                "text": "Explore state, actions, reducers, and effects in a real Swift architecture. Start with the README’s basic usage example; the library is optional, but the data-flow ideas build on this lesson.",
                "href": "https://github.com/pointfreeco/swift-composable-architecture#basic-usage",
                "buttonText": "Explore state and actions"
            }
        ]
    },
    {
        "part": "Part 6",
        "title": "Layered Architecture",
        "intro": "Separating presentation, business logic, and data access.\n\nLayered architecture groups code by responsibility: presentation coordinates the screen, business logic applies application rules, and data access retrieves or saves values. In a simple layered design, higher layers call lower ones. The example filters blank task titles in a service rather than duplicating that rule in every screen.",
        "examples": [
            {
                "label": "Swift example — run independently in a Playground",
                "language": "swift",
                "code": "struct TaskStore { // Define the data-access layer; this example supplies values directly from memory.\n    func load() -> [String] { [\"Learn layers\", \"\"] } // Define a method that returns two sample titles, including an empty string.\n}\nstruct TaskService { // Define the business layer, which applies rules to the stored data.\n    let store: TaskStore // Store the TaskStore supplied when this service is created.\n    func visibleTitles() -> [String] { // Define a method that returns only the titles allowed by our rule.\n        store.load().filter { !$0.isEmpty } // Load the titles and return only nonempty ones; $0 is each title, and ! reverses isEmpty.\n    }\n}\nstruct TaskPresenter { // Define the presentation layer, which prepares text for display.\n    let service: TaskService // Store the business service supplied when this presenter is created.\n    func displayText() -> String { // Define a method that returns the screen’s display text.\n        service.visibleTitles().joined(separator: \", \") // Ask the service for valid titles, join them with commas, and return the resulting string.\n    }\n}\nlet presenter = TaskPresenter(service: TaskService(store: TaskStore())) // Create a store, pass it into a service, and pass that service into a presenter.\nprint(presenter.displayText()) // Build and print the display text: Learn layers. The empty title was filtered out."
            }
        ],
        "sections": [
            [
                "How it works",
                [
                    "TaskStore represents data access with in-memory sample values.",
                    "TaskService owns the filtering rule.",
                    "TaskPresenter turns the result into screen text."
                ]
            ],
            [
                "When to use it and tradeoffs",
                [
                    "Useful when several screens share rules or data access.",
                    "This simple example depends on a concrete store. Protocol boundaries can make replacement easier, as later lessons show.",
                    "Avoid layers that only forward calls without providing a useful boundary."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Does creating three folders guarantee layers?",
            "answer": "No. Actual dependencies and responsibilities determine the architecture, not folder names."
        },
        "highlight": "Group responsibilities and make cross-layer calls intentional.",
        "bonusLinks": [
            {
                "label": "Further reading — Martin Fowler — Presentation Domain Data Layering",
                "text": "Read a concise explanation of presentation, domain, and data layers, with diagrams showing their responsibilities.",
                "href": "https://martinfowler.com/bliki/PresentationDomainDataLayering.html",
                "buttonText": "Read about the three layers"
            }
        ]
    },
    {
        "part": "Part 7",
        "title": "Clean Architecture",
        "intro": "Organizing use cases and directing dependencies toward core business logic.\n\nClean Architecture protects business rules from UI and infrastructure details. A use case describes an application operation. The core defines the contracts it needs, and outer adapters implement them. Source-code dependencies point inward, even though execution may call an outer storage adapter through a core protocol.",
        "examples": [
            {
                "label": "Swift example — run independently in a Playground",
                "language": "swift",
                "code": "// Core: no database or UI imports.\nprotocol TaskReading { // Define the core’s contract: any conforming type must provide task titles.\n    func titles() -> [String] // Require a method returning an array of strings; the implementation belongs to a conforming type.\n}\nstruct ListTasks { // Define the use case that applies our task-list rule.\n    let reader: any TaskReading // Accept any value conforming to TaskReading, so the use case does not need a specific storage type.\n    func execute() -> [String] { // Define the operation callers use to run this use case and receive task titles.\n        reader.titles().filter { !$0.isEmpty } // Read the titles, keep those that are not empty, and return them; $0 refers to each title.\n    }\n}\n// Outer adapter implements the core contract.\nstruct MemoryTaskReader: TaskReading { // Define an in-memory adapter that promises to satisfy the TaskReading contract.\n    func titles() -> [String] { [\"Learn Clean Architecture\", \"\"] } // Implement the required method by returning sample data, including an empty title.\n}\n// Composition connects the adapter to the use case.\nlet useCase = ListTasks(reader: MemoryTaskReader()) // Create the adapter and supply it to the use case through its reader parameter.\nprint(useCase.execute()) // Run the use case and print an array containing Learn Clean Architecture; the empty title is removed."
            }
        ],
        "sections": [
            [
                "How it works",
                [
                    "TaskReading describes the capability the use case needs.",
                    "ListTasks applies the rule without naming a storage technology.",
                    "MemoryTaskReader conforms to the core contract; a database adapter could do the same."
                ]
            ],
            [
                "When to use it and tradeoffs",
                [
                    "Useful when business rules should survive changes to frameworks or storage.",
                    "Separate modules can enforce boundaries in a larger app, but this compact example keeps everything together for learning.",
                    "Do not add a use case for every trivial property just to match a diagram."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Does calling a database adapter break the dependency rule?",
            "answer": "Not if the core calls its own contract and the outer database adapter implements that contract. Runtime calls and source dependencies are different."
        },
        "highlight": "Infrastructure implements contracts owned by the core.",
        "bonusLinks": [
            {
                "label": "Further reading — Robert C. Martin — The Clean Architecture",
                "text": "Study the original explanation of the dependency rule, use cases, and the boundaries between business rules and external details.",
                "href": "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",
                "buttonText": "Read the original article"
            },
            {
                "label": "Further reading — Clean Architecture (Breakdown)",
                "text": "",
                "href": "https://lnkd.in/p/dj-yeXga",
                "buttonText": "Read on LinkedIn ↗"
            }
        ]
    },
    {
        "part": "Part 8",
        "title": "VIPER",
        "intro": "Explicit responsibilities and the tradeoff of added complexity.\n\nVIPER names five roles: View renders, Interactor executes use cases, Presenter prepares display output, Entity holds domain data, and Router handles navigation. This small console example demonstrates all five. Production modules often add protocols between roles; those boundaries help testing but increase wiring and file count.",
        "examples": [
            {
                "label": "Swift example — run independently in a Playground",
                "language": "swift",
                "code": "struct TaskEntity { let title: String } // Define the Entity: a task value with a title that cannot be reassigned.\nstruct TaskInteractor { // Define the Interactor, responsible for the task-loading operation.\n    func load() -> [TaskEntity] { [TaskEntity(title: \"Learn VIPER\")] } // Implement loading by returning an array containing one sample task entity.\n}\nstruct TaskView { // Define the View, responsible for displaying the Presenter’s output.\n    func show(_ text: String) { print(text) } // Define a method that receives display text and prints it to the console.\n}\nstruct TaskRouter { // Define the Router, responsible for navigation decisions.\n    func openDetail(_ task: TaskEntity) { print(\"Detail: \\(task.title)\") } // Simulate opening task details by printing Detail: followed by the selected task’s title.\n}\nstruct TaskPresenter { // Define the Presenter, which connects user actions, use cases, and display output.\n    let interactor: TaskInteractor // Store the Interactor supplied to this Presenter for loading tasks.\n    let view: TaskView // Store the View supplied to this Presenter for displaying text.\n    let router: TaskRouter // Store the Router supplied to this Presenter for handling navigation.\n    func start() { // Define the operation that loads and displays the initial task list.\n        view.show(interactor.load().map { $0.title }.joined(separator: \", \")) // Load tasks, map each task ($0) to its title, join the titles with commas, and show that text.\n    }\n    func select(_ task: TaskEntity) { router.openDetail(task) } // When a task is selected, pass it to the Router to handle detail navigation.\n}\nlet presenter = TaskPresenter(interactor: TaskInteractor(), view: TaskView(), router: TaskRouter()) // Create the three collaborators and supply them to a new Presenter.\npresenter.start() // Start the feature; the View prints Learn VIPER.\npresenter.select(TaskEntity(title: \"Learn VIPER\")) // Select this task; the Router prints Detail: Learn VIPER to simulate navigation."
            }
        ],
        "sections": [
            [
                "How it works",
                [
                    "The Interactor supplies entities; the Presenter formats their titles for the View.",
                    "Selection delegates navigation to the Router.",
                    "The View here prints; a real screen implements a rendering interface."
                ]
            ],
            [
                "When to use it and tradeoffs",
                [
                    "Can help teams that need explicit feature boundaries and consistent role ownership.",
                    "For a small screen, five roles and their protocols may cost more than they help.",
                    "Avoid moving business rules into the Presenter just because it coordinates the feature."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Who should apply a task-completion business rule?",
            "answer": "The Interactor or domain logic it calls. The Presenter prepares the result for display."
        },
        "highlight": "Explicit roles help only when their benefits justify the extra wiring.",
        "bonusLinks": [
            {
                "label": "Further reading — objc.io — Architecting iOS Apps with VIPER",
                "text": "Follow a worked iOS example explaining the five VIPER roles and their relationships. The article uses Objective-C; the architecture concepts also apply to Swift.",
                "href": "https://www.objc.io/issues/13-architecture/viper/",
                "buttonText": "Explore the VIPER walkthrough"
            },
            {
                "label": "Further reading — VIPER: View, Interactor, Presenter, Entity, Router (Breakdown)",
                "text": "",
                "href": "https://lnkd.in/p/dmXGzMWe",
                "buttonText": "Read on LinkedIn ↗"
            }
        ]
    },
    {
        "part": "Part 9",
        "title": "Coordinator Pattern",
        "intro": "Separating navigation logic from screens.\n\nA Coordinator owns navigation decisions so screens can express intent without constructing their destination screens. With UIKit it may manage a navigation controller; with SwiftUI it may manage a navigation path. This framework-independent example stores a route path and keeps the screen dependent only on a navigation capability.",
        "examples": [
            {
                "label": "Swift example — run independently in a Playground",
                "language": "swift",
                "code": "enum Route { case taskDetail(Int) } // Define the available destinations; taskDetail carries an integer identifying the task.\nprotocol TaskRouting { // Define a contract for objects that can navigate to a task.\n    func showTask(id: Int) // Require a method accepting a task ID; conforming types provide the navigation behavior.\n}\nfinal class TaskCoordinator: TaskRouting { // Define a Coordinator that fulfills TaskRouting; final prevents subclassing.\n    private(set) var path: [Route] = [] // Start with an empty route array; other code can read it, but private(set) restricts changes to this type.\n    func showTask(id: Int) { path.append(.taskDetail(id)) } // Implement navigation by appending a detail destination containing the supplied task ID.\n}\nstruct TaskScreen { // Define a screen model that forwards user selections to a router.\n    let router: any TaskRouting // Store any supplied value that fulfills TaskRouting instead of requiring a specific Coordinator.\n    func selectTask(id: Int) { router.showTask(id: id) } // Forward the selected task’s ID to the router’s showTask method.\n}\nlet coordinator = TaskCoordinator() // Create the Coordinator that will own the navigation path.\nlet screen = TaskScreen(router: coordinator) // Create the screen and supply that same Coordinator as its router.\nscreen.selectTask(id: 42) // Simulate selecting the task with ID 42; the Coordinator records its detail destination.\nprint(coordinator.path.count) // Print 1 because the path now contains one destination; this example does not present a real UI."
            }
        ],
        "sections": [
            [
                "How it works",
                [
                    "The screen reports selection through TaskRouting.",
                    "The Coordinator translates that intent into a destination.",
                    "A real UI must observe or consume the route path to present screens; this example only models that decision."
                ]
            ],
            [
                "When to use it and tradeoffs",
                [
                    "Useful when navigation is reused, tested independently, or includes deep links and multiple flows.",
                    "Keep business logic out of coordinators.",
                    "For class-based screens and callback closures, design ownership carefully to avoid retain cycles."
                ]
            ]
        ],
        "interviewCase": {
            "question": "How does this help navigation tests?",
            "answer": "Inject a routing spy into the screen and verify the selected task ID without presenting a real screen."
        },
        "highlight": "Screens express navigation intent; coordinators choose destinations.",
        "bonusLinks": [
            {
                "label": "Further reading — Soroush Khanlou — The Coordinator",
                "text": "Read the foundational explanation of moving navigation out of view controllers. The examples use Objective-C, but the ownership and navigation ideas apply to Swift too.",
                "href": "https://khanlou.com/2015/01/the-coordinator/",
                "buttonText": "Read about coordinators"
            }
        ]
    },
    {
        "part": "Part 10",
        "title": "Repository Pattern",
        "intro": "Abstracting data access from the code that consumes it.\n\nA Repository provides a domain-oriented interface to data. Its callers ask for tasks without knowing whether they come from memory, a file, a server, or a cache. The repository boundary should express what callers need, including errors and asynchronous work when the real data source requires them.",
        "examples": [
            {
                "label": "Swift example — run independently in a Playground",
                "language": "swift",
                "code": "struct TaskItem { let title: String } // Define a task value with a string title that cannot be reassigned.\nprotocol TaskRepository { // Define the data-access contract used by code that needs tasks.\n    func allTasks() throws -> [TaskItem] // Require a method that returns tasks; throws allows implementations to report a loading error.\n}\nstruct MemoryTaskRepository: TaskRepository { // Define an in-memory implementation of the TaskRepository contract.\n    let tasks: [TaskItem] // Store the array of tasks supplied when this repository is created.\n    func allTasks() throws -> [TaskItem] { tasks } // Return the stored tasks; this implementation does not fail, but keeps the throwing contract.\n}\nstruct TaskCounter { // Define a component that counts tasks without knowing how they are stored.\n    let repository: any TaskRepository // Accept any value conforming to TaskRepository, allowing different storage implementations.\n    func count() throws -> Int { try repository.allTasks().count } // Load the tasks with try and return their count; throws passes any loading error back to the caller.\n}\nlet repository = MemoryTaskRepository(tasks: [TaskItem(title: \"Learn repositories\")]) // Create a repository containing one task with the title Learn repositories.\nlet counter = TaskCounter(repository: repository) // Create a counter and provide the repository it will use.\ndo { // Begin a block where thrown errors can be handled by the following catch block.\n    print(try counter.count()) // Try to load and count tasks, then print 1; if loading throws, execution moves to catch.\n} catch { // Handle any error thrown inside the do block; Swift makes it available as error.\n    print(\"Could not load tasks: \\(error)\") // Print a failure message containing the error’s description instead of treating failure as an empty list.\n}"
            }
        ],
        "sections": [
            [
                "How it works",
                [
                    "TaskRepository defines a task-focused data operation.",
                    "MemoryTaskRepository supplies predictable values without external services.",
                    "TaskCounter knows the contract, not the storage mechanism."
                ]
            ],
            [
                "When to use it and tradeoffs",
                [
                    "Useful when data sources change or tests need deterministic data.",
                    "Repositories do not automatically provide caching or synchronization; those policies require explicit design.",
                    "Do not hide failures by returning an empty list. For remote data, consider an async throwing contract."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Is a repository always required?",
            "answer": "No. Add it when it provides a meaningful boundary; a tiny local feature may not need a separate repository abstraction."
        },
        "highlight": "Expose domain data operations and keep storage details behind the boundary.",
        "bonusLinks": [
            {
                "label": "Further reading — Martin Fowler — Repository",
                "text": "Use this short pattern reference to understand the boundary between domain code and data mapping, and the collection-like interface a repository provides.",
                "href": "https://martinfowler.com/eaaCatalog/repository.html",
                "buttonText": "Read the repository reference"
            }
        ]
    },
    {
        "part": "Part 11",
        "title": "Dependency Injection",
        "intro": "Providing dependencies to components and making them easier to test.\n\nDependency injection means supplying collaborators from outside a component instead of having that component create or locate them. Initializer injection makes requirements explicit. The app’s composition root creates concrete objects and connects them. Injection does not require a framework or a protocol for every dependency.",
        "examples": [
            {
                "label": "Swift example — run independently in a Playground",
                "language": "swift",
                "code": "protocol TaskCounting { // Define a contract for any type that can provide a task count.\n    func count() -> Int // Require a method returning an integer; conforming types decide how to obtain it.\n}\nstruct FixedTaskCounter: TaskCounting { // Define a predictable implementation of TaskCounting for this example.\n    let value: Int // Store the integer supplied when this counter is created.\n    func count() -> Int { value } // Return the stored integer whenever count is called; a single expression returns automatically.\n}\nstruct TaskSummary { // Define a component that builds display text using a supplied counter.\n    let counter: any TaskCounting // Store any value conforming to TaskCounting; the caller supplies it when creating TaskSummary.\n    func text() -> String { \"Tasks: \\(counter.count())\" } // Ask the supplied counter for its count, insert it into a string, and return the display text.\n}\n// Supply a predictable collaborator for this test.\nlet summary = TaskSummary(counter: FixedTaskCounter(value: 3)) // Create a counter fixed at 3 and inject it into a new TaskSummary using its initializer.\nassert(summary.text() == \"Tasks: 3\") // Check that the text equals Tasks: 3; in debug builds, a failed assertion stops execution to reveal a mistake.\nprint(summary.text()) // Call text and print its result: Tasks: 3."
            }
        ],
        "sections": [
            [
                "How it works",
                [
                    "TaskSummary declares its collaborator in the initializer synthesized for the struct.",
                    "FixedTaskCounter supplies a deterministic value for the assertion.",
                    "The caller controls how the dependency is created and how long it lives."
                ]
            ],
            [
                "When to use it and tradeoffs",
                [
                    "Useful for replacing services in tests and making required collaborators visible.",
                    "A global service locator hides dependencies instead of declaring them.",
                    "Dependency injection is a wiring technique; dependency inversion is a design principle about which abstractions code depends on."
                ]
            ]
        ],
        "interviewCase": {
            "question": "Must dependency injection use protocols?",
            "answer": "No. You can inject a concrete value or a closure. Use a protocol when interchangeable implementations provide value."
        },
        "highlight": "Build dependencies at the edge and pass them to the code that needs them.",
        "bonusLinks": [
            {
                "label": "Further reading — Swift by Sundell — Dependency Injection in Swift",
                "text": "Compare initializer, property, and parameter injection with practical Swift examples. This archived article is useful for the core techniques; some surrounding APIs reflect older Swift versions.",
                "href": "https://www.swiftbysundell.com/articles/different-flavors-of-dependency-injection-in-swift/",
                "buttonText": "Explore injection techniques"
            }
        ]
    }
];

const architectureQuizQuestions = [
    {
        "part": "Architecture Basics",
        "question": "What is a dependency?",
        "options": [
            "A collaborator a component needs",
            "The color of a screen",
            "A mandatory folder structure"
        ],
        "answers": [
            0
        ]
    },
    {
        "part": "MVC",
        "question": "Which role renders the task titles?",
        "options": [
            "Model",
            "View",
            "Repository"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "MVP",
        "question": "In Passive View MVP, how does the Presenter update the screen?",
        "options": [
            "It sends prepared display values through a View contract",
            "It asks the View to fetch and format the Model",
            "It must subclass UIViewController"
        ],
        "answers": [
            0
        ]
    },
    {
        "part": "MVVM",
        "question": "Which responsibility fits a ViewModel?",
        "options": [
            "Drawing every pixel",
            "Defining a database file format",
            "Preparing display state"
        ],
        "answers": [
            2
        ]
    },
    {
        "part": "Unidirectional Data Flow",
        "question": "What belongs outside a pure reducer?",
        "options": [
            "A network request",
            "A deterministic state calculation",
            "Switching over an action"
        ],
        "answers": [
            0
        ]
    },
    {
        "part": "Layered Architecture",
        "question": "Where should a shared task-filtering business rule live?",
        "options": [
            "In every view",
            "In the business layer",
            "Only in navigation"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "Clean Architecture",
        "question": "Which direction should source dependencies point?",
        "options": [
            "From core rules to UI frameworks",
            "From entities to database SDKs",
            "Toward core business logic"
        ],
        "answers": [
            2
        ]
    },
    {
        "part": "VIPER",
        "question": "Which VIPER role handles use cases?",
        "options": [
            "Interactor",
            "Router",
            "View"
        ],
        "answers": [
            0
        ]
    },
    {
        "part": "Coordinator Pattern",
        "question": "What should a screen send to its coordinator?",
        "options": [
            "Database bytes",
            "Navigation intent",
            "A business-rule implementation"
        ],
        "answers": [
            1
        ]
    },
    {
        "part": "Repository Pattern",
        "question": "What should a repository abstract?",
        "options": [
            "All UI layout",
            "Every navigation decision",
            "Data-access details"
        ],
        "answers": [
            2
        ]
    },
    {
        "part": "Dependency Injection",
        "question": "Which example demonstrates initializer injection?",
        "options": [
            "A component creates its own global client",
            "A caller passes a counter into TaskSummary",
            "A view searches a global registry"
        ],
        "answers": [
            1
        ]
    }
];
