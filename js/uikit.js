const uikitParts = [{
    part: "Part 1",
    title: "UIKit Foundations",
    intro: "UIKit is Apple's framework for building and managing graphical interfaces in iOS and iPadOS apps. Swift is the language; UIKit supplies the screens, buttons, text fields, touch handling, and navigation you control with that language. It also supports related platforms such as tvOS and Mac Catalyst.\n\nUIKit usually follows an imperative approach. For example, when a user changes their display name, your code updates the label that shows it. This gives you precise control over timing and appearance, and makes you responsible for keeping the screen in sync with its data. A view controller coordinates a screen, while views display content and receive interaction. UIKit and SwiftUI can also work together in the same app.",
    examples: [{
        label: "App entry point — a minimal AppDelegate for a scene-based UIKit app",
        language: "swift",
        code: `import UIKit // Import Apple's user-interface framework.
@main // Make this app delegate the application's entry point.
class AppDelegate: UIResponder, UIApplicationDelegate { // Receive application-level events.
    func application(_ application: UIApplication, configurationForConnecting session: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration { // Choose the setup for a connecting scene.
        let configuration = UISceneConfiguration(name: nil, sessionRole: session.role) // Match the requested scene's role.
        configuration.delegateClass = SceneDelegate.self // Let SceneDelegate create this scene's interface.
        return configuration // Give UIKit the scene configuration.
    } // Finish configuring the scene.
} // Finish the app delegate.`
    }, {
        label: "Scene and window — display the first screen",
        language: "swift",
        code: `import UIKit // Make scene, window, and controller types available.
class SceneDelegate: UIResponder, UIWindowSceneDelegate { // Handle events for one UI scene.
    var window: UIWindow? // Keep this scene's window alive.
    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) { // Set up the interface when the scene connects.
        guard let windowScene = scene as? UIWindowScene else { return } // Continue only for a window-based scene.
        let window = UIWindow(windowScene: windowScene) // Create a window belonging to this scene.
        window.rootViewController = WelcomeViewController() // Assign the controller for the first screen.
        self.window = window // Retain the window after this method returns.
        window.makeKeyAndVisible() // Show the window and make it the key window for its scene.
    } // Finish the scene setup.
} // Finish the scene delegate.`
    }, {
        label: "View hierarchy — put a label inside the screen's root view",
        language: "swift",
        code: `import UIKit // Import views, controllers, and layout anchors.
final class WelcomeViewController: UIViewController { // Define a simple screen controller.
    override func viewDidLoad() { // Configure the interface after its root view loads.
        super.viewDidLoad() // Preserve the superclass's setup.
        view.backgroundColor = .systemBackground // Use a background that adapts to light and dark mode.
        let label = UILabel() // Create a view that displays text.
        label.text = "Hello, UIKit!" // Set the visible message.
        label.translatesAutoresizingMaskIntoConstraints = false // Use explicit Auto Layout constraints.
        view.addSubview(label) // Make the label a child of the controller's root view.
        NSLayoutConstraint.activate([ // Enable constraints that position the label.
            label.centerXAnchor.constraint(equalTo: view.safeAreaLayoutGuide.centerXAnchor), // Center horizontally in the safe area.
            label.centerYAnchor.constraint(equalTo: view.safeAreaLayoutGuide.centerYAnchor) // Center vertically away from system UI.
        ]) // Finish activating the constraints.
    } // Finish configuring the screen.
} // Finish the controller.`
    }],
    sections: [
        ["What happens when the app opens?", [
            "`@main` marks the application's entry point. UIKit starts its application infrastructure and delivers app-level events to `AppDelegate`; you do not write a manual event loop.",
            "In a scene-based app, UIKit connects a scene and calls its scene delegate. A scene represents one instance of the app's UI, with its own lifecycle; it is not a screen you push during navigation.",
            "A `UIWindowScene` manages the windows associated with that UI instance. A `UIWindow` hosts the visible view hierarchy and routes events into it.",
            "The window's `rootViewController` supplies the initial screen. Its root `view` contains child views such as labels, buttons, and images."
        ]],
        ["Run these examples together", [
            "Use an Xcode iOS app project configured for UIKit and Swift. These three snippets belong in AppDelegate.swift, SceneDelegate.swift, and WelcomeViewController.swift in the same app target.",
            "Replace the matching delegate definitions rather than adding duplicates. Keep exactly one `@main` entry point; do not also keep a SwiftUI App entry point.",
            "The target's Application Scene Manifest must enable scene support. For this programmatic setup, remove the scene configuration's Storyboard Name and the target's Main storyboard setting if present; the scene delegate creates the window instead.",
            "Run on an iOS simulator. You should see Hello, UIKit! centered on the screen. The layout anchors are introduced here only to position the label; Auto Layout gets its own lesson."
        ]],
        ["When and where to use UIKit", [
            "Use UIKit when maintaining an existing UIKit app, working with a UIKit-based team or library, or needing detailed control over view behavior and navigation.",
            "UIKit is useful for custom interfaces and established table-view or collection-view implementations. It supports interfaces built in code or with storyboards and XIB files.",
            "For a new app, consider both UIKit and SwiftUI based on the team's skills, supported OS versions, and interface requirements. You can embed SwiftUI through UIHostingController or expose UIKit to SwiftUI through representable wrappers."
        ]],
        ["Strengths and tradeoffs", [
            "Pros: a mature set of controls, extensive customization, explicit lifecycle hooks, and a large existing ecosystem.",
            "Pros: subclassing and delegate protocols put the OOP and POP concepts from earlier blocks into practice.",
            "Cons: more setup and explicit UI updates than many SwiftUI equivalents; constraints and lifecycle coordination add concepts to learn.",
            "Cons: controllers can grow too large if they also own networking, storage, and business rules. Keep those responsibilities in separate collaborators."
        ]],
        ["Understand the hierarchy", [
            "In this example: window → controller's root view → label. The controller manages the root view but is not itself a UIView in that hierarchy.",
            "`addSubview` attaches a child to a parent. Merely creating a label does not display it. The parent is its superview; the parent's children are its subviews.",
            "`viewDidLoad` runs after that controller's view is loaded, not every time the screen appears. Use it for initial view setup.",
            "Configure UIKit UI on the main thread. App lifecycle and scene lifecycle are separate: an app can remain running while a particular scene moves into the background."
        ]],
        ["Common mistakes and a quick exercise", [
            "A blank screen can mean the window has no root controller, was not retained, or was never made visible. Check those three steps first.",
            "Do not create a new scene for every screen. Navigation usually changes controllers inside an existing window.",
            "Change the label's message and run again. Then explain which object owns the window, which controller manages the screen, and which view displays the message."
        ]]
    ],
    bonusLinks: [{ label: "Apple documentation — UIKit", text: "Explore the framework's views, controllers, app environment, and integration with SwiftUI.", href: "https://developer.apple.com/documentation/uikit", buttonText: "Open UIKit documentation" }],
    highlight: "The app starts the process, a scene manages one UI instance, a window hosts it, and a controller organizes the views the user sees."
}, {
    part: "Part 2",
    title: "Views and controls",
    intro: "A UIView occupies a rectangle in its parent and can contain other views. Build a profile editor by choosing a view for each job. A label displays a caption, an image view displays a picture, a text field accepts a name, and a button offers an action.",
    examples: [{
        label: "Build a profile form inside viewDidLoad, after super.viewDidLoad()",
        language: "swift",
        code: `let portrait = UIImageView(image: UIImage(systemName: "person.circle")) // Show a built-in profile symbol.
portrait.contentMode = .scaleAspectFit // Keep the symbol's proportions.
let caption = UILabel() // Create a visible caption for the field.
caption.text = "Display name" // Tell the reader what to enter.
let field = UITextField() // Create a single-line editor.
field.borderStyle = .roundedRect // Make the editable area visible.
field.accessibilityLabel = caption.text // Give the editor a spoken name.
let save = UIButton(type: .system) // Create a button with standard interaction feedback.
save.setTitle("Save", for: .normal) // Name the action in the default state.
let form = UIStackView(arrangedSubviews: [portrait, caption, field, save]) // Group the four views in reading order.
form.axis = .vertical // Place each view below the previous one.
form.spacing = 8 // Leave eight points between neighboring views.
form.frame = view.bounds.insetBy(dx: 24, dy: 80) // Give the form an initial rectangle inside the screen.
view.addSubview(form) // Attach the form and its contents to the visible hierarchy.`
    }],
    sections: [["Explore the form", [
        "Tap the field and type a name. Read its current value through `field.text`. The button needs an action before a tap will save anything.",
        "The frame uses the screen size at setup time. Part 4 shows how to keep the form positioned when the window resizes."
    ]]],
    highlight: "Choose the control by what the person needs to do, then attach it to a visible parent."
}, {
    part: "Part 3",
    title: "View controllers",
    intro: "A view controller owns a root view and coordinates its screen. Use viewDidLoad for one-time setup of the loaded view. Use viewWillAppear to refresh content each time the screen returns, and viewDidAppear for work that needs the screen fully onscreen. Stop visibility-related work in viewDidDisappear.",
    examples: [{
        label: "Embed a child inside a parent controller’s viewDidLoad",
        language: "swift",
        code: `let child = WelcomeViewController() // Reuse the welcome screen from Part 1.
addChild(child) // Establish controller ownership before inserting the child's view.
child.view.frame = view.bounds // Fill the parent's current content area.
child.view.autoresizingMask = [.flexibleWidth, .flexibleHeight] // Resize the child when the parent's bounds change.
view.addSubview(child.view) // Install the child's interface in the parent's hierarchy.
child.didMove(toParent: self) // Tell the child that containment setup is complete.`
    }],
    sections: [["Follow a screen through navigation", [
        "Add a breakpoint in viewDidLoad and another in viewWillAppear. Push a second screen, then go back. The existing first screen receives another appearance callback and keeps its loaded controls.",
        "Keep storage and networking in separate objects. The controller can ask for a profile and decide how to display it."
    ]], ["Remove an embedded screen", [
        "Call `child.willMove(toParent: nil)`, remove its view with `child.view.removeFromSuperview()`, then call `child.removeFromParent()`. Both the controller hierarchy and the view hierarchy need updating."
    ]]],
    highlight: "Containment lets a child manage one region while its parent manages the surrounding screen."
}, {
    part: "Part 4",
    title: "Auto Layout",
    intro: "Auto Layout describes relationships between views. An anchor represents an edge, center, or dimension. A constraint connects anchors or sets a size. A stack view handles the arrangement of its children, while constraints position the stack itself.",
    examples: [{
        label: "Replace the frame assignment and addSubview line in Part 2",
        language: "swift",
        code: `form.translatesAutoresizingMaskIntoConstraints = false // Let explicit constraints determine the stack's frame.
view.addSubview(form) // Give the stack and layout guides a common ancestor.
let safe = view.safeAreaLayoutGuide // Find the region clear of bars and device cutouts.
NSLayoutConstraint.activate([ // Enable these layout relationships together.
    form.topAnchor.constraint(equalTo: safe.topAnchor, constant: 16), // Start sixteen points below the safe top edge.
    form.leadingAnchor.constraint(equalTo: safe.leadingAnchor, constant: 20), // Inset the reading-order start edge.
    form.trailingAnchor.constraint(equalTo: safe.trailingAnchor, constant: -20) // Inset the opposite edge to determine the width.
]) // Let the arranged controls supply the stack's natural height.`
    }],
    sections: [["Read the layout", [
        "The two horizontal edges determine the width. The top constraint determines vertical position. Labels, buttons, and other controls supply a natural size called their intrinsic content size.",
        "Rotate the device. UIKit recalculates the safe area and solves the same relationships for the new width. Leading and trailing also follow the interface's reading direction.",
        "If UIKit reports conflicting constraints, inspect rules that specify the same dimension twice. A fixed stack width can disagree with the width already determined by its two edges."
    ]]],
    highlight: "Describe the relationships that should survive a size change."
}, {
    part: "Part 5",
    title: "User interaction",
    intro: "Controls publish events such as editingChanged or touchUpInside. With target-action, a control sends a chosen event to a method on a target. A gesture recognizer interprets touches on a view as a tap, pan, or other gesture.",
    examples: [{
        label: "Connect the profile form inside viewDidLoad (iOS 14 or later)",
        language: "swift",
        code: `save.isEnabled = false // Start with saving disabled for the empty field.
field.addAction(UIAction { [weak save, weak field] _ in // Handle edits without retaining the controls.
    let name = field?.text?.trimmingCharacters(in: .whitespacesAndNewlines) ?? "" // Ignore accidental surrounding spaces.
    save?.isEnabled = !name.isEmpty // Enable the button only for a meaningful name.
}, for: .editingChanged) // Recheck after each user edit.
save.addTarget(field, action: #selector(UIResponder.resignFirstResponder), for: .touchUpInside) // Ask the editor to dismiss its keyboard on a button tap.`
    }, {
        label: "Let a tap on the profile symbol focus the name field",
        language: "swift",
        code: `portrait.isUserInteractionEnabled = true // Image views ignore touches by default.
let tap = UITapGestureRecognizer(target: field, action: #selector(UIResponder.becomeFirstResponder)) // Ask the editor to take keyboard focus.
portrait.addGestureRecognizer(tap) // Listen for completed taps on the image.`
    }],
    sections: [["Trace the events", [
        "Enter only spaces, then enter a letter. Watch the button change state. Tap Save to finish editing. To persist the name, connect a save handler that writes it to your model.",
        "A first responder receives keyboard input. Tapping the field directly and tapping the portrait both let the user start editing."
    ]]],
    highlight: "Match a control event or recognized gesture to one specific response."
}, {
    part: "Part 6",
    title: "Delegates and data sources",
    intro: "A protocol lists methods an object can supply. A text field asks its delegate how to handle editing decisions. A table asks its data source how many rows exist and what each row displays. The receiving object can be the screen’s controller.",
    examples: [{
        label: "Put this extension below WelcomeViewController in its Swift file",
        language: "swift",
        code: `extension WelcomeViewController: UITextFieldDelegate { // Promise to handle selected text-field callbacks.
    func textFieldShouldReturn(_ textField: UITextField) -> Bool { // UIKit asks what to do when Return is pressed.
        let name = textField.text?.trimmingCharacters(in: .whitespacesAndNewlines) ?? "" // Read the proposed name.
        guard !name.isEmpty else { return false } // Keep editing if the name contains no letters or other visible characters.
        textField.resignFirstResponder() // Finish editing a valid name.
        return true // Accept the Return action.
    } // End the callback.
} // End the protocol implementation.`
    }, {
        label: "Wire the delegate where you create the field in viewDidLoad",
        language: "swift",
        code: `field.delegate = self // Route the field's delegate questions to this controller.
field.returnKeyType = .done // Show Done on the software keyboard.`
    }, {
        label: "A table controller supplies rows through UITableViewDataSource",
        language: "swift",
        code: `final class NamesController: UITableViewController { // A table controller already serves as its table's data source.
    let names = ["Ada", "Grace"] // Keep the display order in one array.
    override func viewDidLoad() { // Configure the table once its view exists.
        super.viewDidLoad() // Run the table controller's setup.
        tableView.register(UITableViewCell.self, forCellReuseIdentifier: "Name") // Teach the table how to create a name cell.
    } // Finish table setup.
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int { // Report the size of the default section.
        return names.count // Give each name one row.
    } // Finish the row count request.
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell { // Supply a cell for the requested position.
        let cell = tableView.dequeueReusableCell(withIdentifier: "Name", for: indexPath) // Obtain a registered cell for this row.
        var content = cell.defaultContentConfiguration() // Start with the system cell layout on iOS 14 or later.
        content.text = names[indexPath.row] // Choose the name at the requested row index.
        cell.contentConfiguration = content // Apply fresh content each time a cell is reused.
        return cell // Hand the configured cell to the table.
    } // Finish the cell request.
} // End the names screen.`
    }],
    sections: [["Identify the owner", [
        "The field owns its editable text and asks a delegate for decisions. Its delegate reference is weak. If you use a separate helper, store that helper in a controller property so it stays alive.",
        "For a table of names, the data source uses the names array to answer row-count and cell requests. The delegate can react when the user selects a row."
    ]]],
    highlight: "Look at who asks the question, which protocol defines it, and which object supplies the answer."
}, {
    part: "Part 7",
    title: "Navigation and presentation",
    intro: "Imagine a directory with two tabs, People and Settings. Opening a person takes you one level deeper in People. Switching to Settings changes the active section. Opening a help sheet lets you complete a short task and return to the same place.",
    examples: [{
        label: "In Part 1’s SceneDelegate, replace the rootViewController assignment",
        language: "swift",
        code: `let people = NamesController() // Use the list controller from Part 6 as the first screen.
people.title = "People" // Name the screen in its navigation bar.
let directory = UINavigationController(rootViewController: people) // Give People its own back stack.
directory.tabBarItem = UITabBarItem(title: "People", image: UIImage(systemName: "person.2"), tag: 0) // Identify the directory tab.
let settings = UIViewController() // Create a placeholder for the other section.
settings.view.backgroundColor = .systemBackground // Give its screen an adaptive background.
settings.tabBarItem = UITabBarItem(title: "Settings", image: UIImage(systemName: "gear"), tag: 1) // Identify the settings tab.
let tabs = UITabBarController() // Create the container that switches sections.
tabs.viewControllers = [directory, settings] // Show People first and keep Settings available.
window.rootViewController = tabs // Install the whole hierarchy in the scene's window.`
    }, {
        label: "Add this selection callback inside NamesController",
        language: "swift",
        code: `override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) { // Respond to a tap on a person's row.
    tableView.deselectRow(at: indexPath, animated: true) // Clear the highlight before returning to the list.
    let detail = UIViewController() // Create a destination for the selected person.
    detail.title = names[indexPath.row] // Pass the selected name into the destination's title.
    detail.view.backgroundColor = .systemBackground // Give the detail screen a visible background.
    detail.navigationItem.rightBarButtonItem = UIBarButtonItem(title: "Help", style: .plain, target: self, action: #selector(showHelp)) // Offer contextual help in the navigation bar.
    navigationController?.pushViewController(detail, animated: true) // Add detail above People and supply a Back button.
} // Finish handling the selection.
@objc private func showHelp() { // Receive taps from the Help bar button.
    let help = UIAlertController(title: "Directory", message: "Use Back to see everyone.", preferredStyle: .alert) // Describe a short modal message.
    help.addAction(UIAlertAction(title: "Done", style: .default)) // Give the reader a way to dismiss it.
    navigationController?.topViewController?.present(help, animated: true) // Present from the detail screen currently on top.
} // Finish the help action.`
    }],
    sections: [["Trace your way back", [
        "Tap a name, open Help, then tap Done. Dismissing a modal reveals its presenter. Tap Back to pop the detail controller and reveal People.",
        "Open a person again and switch tabs. When you return to People, the navigation controller still owns its detail screen. For a longer modal task, present a custom controller with `modalPresentationStyle` set to `.pageSheet` and provide a Done or Cancel action."
    ]]],
    highlight: "Use a navigation stack for depth, tabs for peer sections, and modal presentation for a focused task."
}, {
    part: "Part 8",
    title: "Lists and reusable cells",
    intro: "A table view lays out rows in a single column. A collection view uses a layout object, so the same items can appear in a list or a grid. Both reuse cells as you scroll. Each time you configure a cell, supply all the content that belongs to its current item.",
    examples: [{
        label: "A collection-view list with a diffable data source (iOS 14 or later)",
        language: "swift",
        code: `final class DirectoryList: UICollectionViewController { // Display the directory using a collection view.
    enum Section { case people } // Give the list one identifiable section.
    private var source: UICollectionViewDiffableDataSource<Section, Int>? // Retain the object that maps identifiers to cells.
    override func viewDidLoad() { // Configure the collection after its view loads.
        super.viewDidLoad() // Let the collection controller finish setup.
        let names = [1: "Ada", 2: "Grace"] // Associate stable person IDs with display names.
        let cell = UICollectionView.CellRegistration<UICollectionViewListCell, Int> { cell, _, id in // Configure each reused cell for its current ID.
            var content = cell.defaultContentConfiguration() // Start with a fresh system list configuration.
            content.text = names[id] // Look up the visible name by identity.
            cell.contentConfiguration = content // Replace the cell's previous content.
        } // Finish defining the registration.
        let source = UICollectionViewDiffableDataSource<Section, Int>(collectionView: collectionView) { list, path, id in // Connect the collection to a cell provider.
            return list.dequeueConfiguredReusableCell(using: cell, for: path, item: id) // Request a reusable cell and run its configuration.
        } // Finish the provider.
        self.source = source // Keep the data source for future updates.
        var snapshot = NSDiffableDataSourceSnapshot<Section, Int>() // Describe the desired list contents.
        snapshot.appendSections([.people]) // Create a destination for the person IDs.
        snapshot.appendItems([1, 2], toSection: .people) // Set the display order independently of dictionary order.
        source.apply(snapshot, animatingDifferences: false) // Show the initial rows.
    } // Finish setting up the list.
} // End the collection controller.`
    }, {
        label: "Show the list in SceneDelegate using the window from Part 1",
        language: "swift",
        code: `let configuration = UICollectionLayoutListConfiguration(appearance: .insetGrouped) // Choose a system list appearance.
let layout = UICollectionViewCompositionalLayout.list(using: configuration) // Build the layout that sizes and positions rows.
window.rootViewController = DirectoryList(collectionViewLayout: layout) // Display the collection controller using that layout.`
    }],
    sections: [["Make one change", [
        "In Part 6, the table asked for a row count and a cell at an index path. Here, a snapshot supplies ordered identifiers and the provider receives the identifier for the requested cell. UITableViewDiffableDataSource offers the same approach for a table.",
        "After the first apply, try `snapshot.deleteItems([1])` and apply it again with animation enabled. Grace moves to the first row and keeps ID 2. An index path describes a current position and can change after an insertion or deletion.",
        "Give each item a unique, stable ID. Two people can share a display name. If a person's name changes, update the backing model and request a refresh of that identifier so its visible cell is configured again."
    ]]],
    highlight: "The model supplies content, the snapshot supplies identity and order, and the layout places reusable cells."
}, {
    part: "Part 9",
    title: "State and data flow",
    intro: "A search screen can be waiting for a response, showing results, showing a successful search with zero matches, or reporting a failure. Represent these as distinct states so the controller can decide exactly what to display after each event.",
    examples: [{
        label: "A small results screen that accepts state before or after its view loads",
        language: "swift",
        code: `final class ResultsController: UIViewController { // Own the display of one search result.
    enum State { // Describe the possible outcomes for this screen.
        case loading, empty // Distinguish waiting from a completed search with zero matches.
        case loaded([String]) // Carry the names returned by a successful search.
        case failed(String) // Carry a readable explanation of a failure.
    } // Finish defining the states.
    private let message = UILabel() // Reuse one label for this short example.
    var state: State = .loading { // Keep the latest state even before the screen is visible.
        didSet { if isViewLoaded { render() } } // Refresh immediately if the view already exists.
    } // End the state observer.
    override func loadView() { // Supply the controller's root view.
        message.numberOfLines = 0 // Allow long messages to wrap.
        message.textAlignment = .center // Center short status messages.
        message.backgroundColor = .systemBackground // Use the system screen color.
        view = message // Let the controller size the label as its root view.
    } // End view creation.
    override func viewDidLoad() { // Display any state passed before presentation.
        super.viewDidLoad() // Complete standard controller setup.
        render() // Draw the current state for the first time.
    } // End initial rendering.
    private func render() { // Translate every state into visible content.
        switch state { // Select the message for this outcome.
        case .loading: message.text = "Searching…" // Show that the request is still running.
        case .empty: message.text = "No matches. Try a different name." // Suggest a next step for a successful empty search.
        case .loaded(let names): message.text = names.joined(separator: ", ") // Display the returned names.
        case .failed(let reason): message.text = reason // Explain why results are unavailable.
        } // Finish choosing content.
    } // End the renderer.
} // End the results screen.`
    }, {
        label: "Pass filtered names from a controller inside a navigation stack",
        language: "swift",
        code: `let results = ResultsController() // Create the destination without loading its view.
let matches = ["Ada", "Grace"].filter { $0.hasPrefix("A") } // Search the local example data.
results.state = matches.isEmpty ? .empty : .loaded(matches) // Pass the outcome before navigation.
navigationController?.pushViewController(results, animated: true) // Let the destination render when it loads.`
    }],
    sections: [["Follow a request", [
        "Try a prefix of Z to see the empty state. For an asynchronous search, push the controller with its initial loading state. When the request completes, assign the result on the main actor so UIKit updates on the main thread.",
        "On failure, assign a helpful message such as “Couldn’t load names. Check your connection and retry.” Connect a Retry button to the same request and switch back to loading when it starts.",
        "If a user starts a second search, cancel the first or compare request identifiers before accepting its result. Otherwise a slow earlier response can replace the current results."
    ]]],
    highlight: "Pass data into the destination and let one rendering method derive its visible content from the latest state."
}, {
    part: "Part 10",
    title: "Accessible, adaptive interfaces",
    intro: "People may read with larger text, navigate by listening to VoiceOver, switch appearance, or resize a window. Build the profile form so the field stays identifiable, text can grow, and its colors follow the system appearance.",
    examples: [{
        label: "Adapt the profile form after creating its controls in Part 2",
        language: "swift",
        code: `view.backgroundColor = .systemBackground // Follow the current light or dark appearance.
caption.textColor = .label // Use the system foreground color for readable contrast.
caption.font = .preferredFont(forTextStyle: .headline) // Start at the user's chosen headline size.
caption.adjustsFontForContentSizeCategory = true // Update the caption when the text-size preference changes.
caption.numberOfLines = 0 // Wrap the caption instead of clipping it at one line.
field.font = .preferredFont(forTextStyle: .body) // Match the editor to the user's body text size.
field.adjustsFontForContentSizeCategory = true // Keep the editor in step with Dynamic Type.
field.accessibilityLabel = caption.text // Let VoiceOver announce the field's purpose along with its value.
save.titleLabel?.font = .preferredFont(forTextStyle: .body) // Scale the action title from the body style.
save.titleLabel?.adjustsFontForContentSizeCategory = true // Resize the button text when preferences change.
form.isLayoutMarginsRelativeArrangement = true // Lay out the controls inside the stack's margins.
form.directionalLayoutMargins = .init(top: 8, leading: 8, bottom: 8, trailing: 8) // Preserve padding in either reading direction.`
    }],
    sections: [["Listen to the form", [
        "Enable VoiceOver and swipe through the controls. The field should announce its purpose and current value. The Save button already has a spoken title and the button trait. For an icon-only button, supply an accessibility label that names its action.",
        "If the portrait is decorative, leave it out of the accessibility order. If tapping it focuses the field as in Part 5, keep direct access to the text field so users can perform the same task with VoiceOver."
    ]], ["Try a smaller window and larger text together", [
        "Use the safe-area constraints from Part 4, choose the largest accessibility text size, then rotate to landscape. Check the final control as well as the first. A vertical stack arranges content but cannot scroll it.",
        "When the form exceeds the available height, put it in a scroll view. Pin the stack's edges to the scroll view's contentLayoutGuide and match its width to the frameLayoutGuide for vertical scrolling.",
        "Switch between light and dark appearance. Check text, icons, and input borders against their actual backgrounds. Use a written explanation or symbol alongside any color used to identify an error."
    ]]],
    highlight: "Check that a person can identify, reach, and operate every control as text size, appearance, and window size change."
}];

const uikitDescription = "Build iOS interfaces with UIKit. Start with views, controls, and Auto Layout, then build navigable screens, reusable lists, and accessible interfaces that respond to changing data.";
const uikitCard = popCard.cloneNode(true);
uikitCard.id = "open-uikit-track";
uikitCard.setAttribute("aria-controls", "uikit-track");
uikitCard.querySelector(".talks-kicker").textContent = "UI Development Track";
uikitCard.querySelector(".talk-topic-title").textContent = "UIKit Essentials";
uikitCard.querySelector(".talk-topic-description").textContent = uikitDescription;
uikitCard.querySelector(".talk-topic-meta").innerHTML = `<span>${uikitParts.length} topics</span><span>Quiz</span>`;
popCard.after(uikitCard);

const uikitTrack = document.createElement("div");
uikitTrack.id = "uikit-track";
uikitTrack.hidden = true;
const uikitHeader = popTrack.querySelector(".talks-track-header").cloneNode(true);
uikitHeader.querySelector("h2").textContent = "UIKit Essentials";
uikitHeader.querySelector(".topics-back").addEventListener("click", () => { window.location.hash = "swift-code"; });
const uikitAccordion = document.createElement("div");
uikitAccordion.id = "uikit-accordion";
uikitAccordion.className = "talks-accordion";
uikitTrack.append(uikitHeader, uikitAccordion);
popTrack.after(uikitTrack);
uikitCard.addEventListener("click", () => { window.location.hash = "uikit-essentials"; });

function showUikitTrack() {
    showSwiftTalkTopics();
    swiftTalksScreen.classList.add("is-viewing-uikit");
    uikitTrack.hidden = false;
    uikitParts.forEach((part, index) => {
        swiftTalkPosts[`uikit-part${index + 1}`] = buildTrackPost(part, "UIKit Essentials", "#Swift #UIKit #LearnSwift");
    });
    renderLearningParts(uikitAccordion, uikitParts, "uikit", "UIKit Essentials", "#uikit-essentials");
}

const uikitQuizQuestions = [
    { question: "In the scene-based app from Part 1, what does the window’s rootViewController provide?", options: ["The entry point for the app process", "The initial screen and its view hierarchy", "A separate scene for every button tap"], answers: [1] },
    { question: "Which control lets someone enter a single-line display name?", options: ["UILabel", "UIImageView", "UITextField"], answers: [2] },
    { question: "Which steps embed a child view controller in a parent?", options: ["Call addChild on the parent", "Add the child’s view to the parent’s view hierarchy", "Call didMove(toParent:) on the child"], answers: [0, 1, 2] },
    { question: "Which constraints keep a vertical form inset from both sides of the safe area when the window resizes?", options: ["Pin its leading and trailing anchors to the safe area with inward offsets", "Set only its top anchor", "Give it the width of the screen at launch"], answers: [0] },
    { question: "Which text-field event should update the Save button as the user types?", options: ["touchUpInside", "editingChanged", "editingDidEnd"], answers: [1] },
    { question: "Which requests does a table view send to its data source?", options: ["How many rows are in this section?", "What should happen when a row is selected?", "Which cell should appear at this index path?"], answers: [0, 2] },
    { question: "People is inside a navigation controller. How should it open a person’s details so Back returns to People?", options: ["Replace the window’s root controller", "Add a new tab for the person", "Push the detail controller onto the navigation stack"], answers: [2] },
    { question: "Two people have the same name and rows can move. What should identify each person in a diffable snapshot?", options: ["Their current row number", "A unique ID that stays with the person", "Their visible name"], answers: [1] },
    { question: "A search completes successfully with zero matches. Which state should the controller render?", options: ["Empty, with a suggestion to try another name", "Loading, until a match arrives", "Failed, with a connection error"], answers: [0] },
    { question: "Which changes help a profile form adapt to its users?", options: ["Use a preferred text style and enable Dynamic Type adjustments", "Give an icon-only button a VoiceOver label describing its action", "Use semantic foreground and background colors for light and dark appearance"], answers: [0, 1, 2] }
].map((question, index) => ({ ...question, part: uikitParts[index].title }));

const uikitQuizCard = popTrack.querySelector(".talk-quiz-cta").cloneNode(true);
uikitQuizCard.querySelector(".talks-kicker").textContent = "UIKit Essentials Quiz";
uikitQuizCard.querySelector("p").textContent = `${uikitQuizQuestions.length} questions with instant scoring, correct-answer highlights, and reset.`;
const uikitQuizButton = uikitQuizCard.querySelector("button");
uikitQuizButton.classList.remove("open-pop-quiz");
uikitQuizButton.addEventListener("click", () => { window.location.hash = "uikit-essentials-quiz"; });

const uikitReading = document.querySelector("#isolid-mobile-quiz-title").closest("aside").cloneNode(true);
const uikitReadingTitle = uikitReading.querySelector("h3");
uikitReadingTitle.id = "uikit-reading-title";
uikitReadingTitle.textContent = "Further reading — UIKit framework breakdown in the iSOLID app";
uikitReading.setAttribute("aria-labelledby", uikitReadingTitle.id);
uikitReading.querySelector("p").remove();
const uikitReadingLink = uikitReading.querySelector("a");
uikitReadingLink.href = "https://apps.apple.com/th/app/isolid-learn-programming/id6752113008";
uikitReadingLink.setAttribute("aria-label", "Download iSOLID on the App Store (opens in a new tab)");
uikitTrack.append(uikitQuizCard, uikitReading);

const uikitQuiz = popQuiz.cloneNode(true);
uikitQuiz.id = "uikit-quiz";
uikitQuiz.querySelectorAll("[id]").forEach(element => { element.id = element.id.replaceAll("pop", "uikit"); });
uikitQuiz.querySelectorAll("[aria-label]").forEach(element => {
    element.setAttribute("aria-label", element.getAttribute("aria-label").replaceAll("POP in Swift", "UIKit Essentials"));
});
uikitQuiz.querySelector("h2").textContent = "UIKit Essentials Quiz";
uikitQuiz.querySelector(".talk-like").dataset.talkId = "uikit-quiz";
uikitQuiz.querySelector(".swift-quiz-feedback-button").href = "mailto:andersonnikko1@gmail.com?subject=Feedback%20on%20UIKit%20Essentials%20Quiz";
document.body.append(uikitQuiz);

const uikitQuizForm = uikitQuiz.querySelector("form");
const uikitScore = uikitQuiz.querySelector(".quiz-score-pill");
const uikitLegend = uikitQuiz.querySelector(".swift-quiz-legend");

function openUikitQuiz() {
    if (uikitQuizForm.dataset.rendered !== "true") renderQuizQuestions(uikitQuizForm, uikitQuizQuestions, "uikit-quiz");
    uikitQuiz.classList.add("is-open");
    uikitQuiz.setAttribute("aria-hidden", "false");
    document.body.classList.add("quiz-open");
    uikitQuiz.querySelector("#close-uikit-quiz").focus();
}

function closeUikitQuiz() {
    if (!uikitQuiz.classList.contains("is-open")) return;
    uikitQuiz.classList.remove("is-open");
    uikitQuiz.setAttribute("aria-hidden", "true");
    document.body.classList.remove("quiz-open");
}

function returnToUikitTopics() {
    window.location.hash = "uikit-essentials";
    requestAnimationFrame(() => uikitQuizButton.focus());
}

uikitQuiz.querySelector("#back-to-uikit-topics").addEventListener("click", returnToUikitTopics);
uikitQuiz.querySelector("#close-uikit-quiz").addEventListener("click", () => { window.location.hash = "swift-code"; });
uikitQuiz.querySelector("#finish-uikit-quiz").addEventListener("click", () => gradeQuiz(uikitQuizQuestions, "uikit-quiz", uikitScore, uikitLegend));
uikitQuiz.querySelector("#reset-uikit-quiz").addEventListener("click", () => resetQuiz(uikitQuizForm, uikitQuizQuestions, uikitScore, uikitLegend, uikitQuiz));
