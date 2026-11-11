const swiftuiLessons = [
    {
        title: "What is SwiftUI and when should you use it?",
        intro: `SwiftUI is Apple’s framework for building user interfaces in Swift. It uses a declarative approach. You describe what a screen should show for the current data. When a reader marks a book as finished, SwiftUI updates the views that depend on that choice.

**When to use it.** SwiftUI works well for screens built from lists, forms, and navigation. You can build a new app with it or add one screen to an existing UIKit app. The reading list in this track starts with a single book title.

**Advantages.** Small views are easy to reuse. The same book title can appear in a list and on a detail screen. Standard controls also support features such as Dynamic Type, so text can follow the reader’s preferred size.

**Trade-offs.** Some APIs require newer operating systems. For example, the navigation lesson uses NavigationStack, which requires iOS 16 or later on iPhone. Some specialized controls are available only through UIKit, and wrapping one takes extra work to keep its value in sync with SwiftUI.`,
        exampleLabel: "Display a book title",
        code: `struct BookTitle: View { // Define BookTitle as a reusable SwiftUI view.
    let title: String // Store the title supplied by the parent as a string.

    var body: some View { // Describe the view’s content. Swift infers the specific view type.
        Text(title).font(.headline) // Display the title using the system headline style.
    } // End the body property.
} // End the BookTitle definition.`,
        sections: [
            ["How a title reaches the screen", [
                "When the library creates `BookTitle(title: \"The Hobbit\")`, the string becomes the view’s input. SwiftUI reads `body`, where `Text(title)` turns that value into a visible label."
            ]],
            ["When to extract a view", [
                "Both a list row and a detail screen need a book title. Each can pass its own string to `BookTitle`. Changing the headline style in that one definition updates both uses."
            ]]
        ],
        question: "What does it mean to describe an interface declaratively in SwiftUI?",
        options: ["Specify each step for updating individual controls", "Describe what the interface should show for its current state", "Choose every view’s position once at launch"], answer: 1
    },
    {
        title: "Arrange content with stacks",
        intro: "Stack a title above its author. A stack controls the arrangement of its children, while modifiers adjust the view they follow.",
        code: `VStack(alignment: .leading, spacing: 4) { // Stack the views vertically, align their leading edges, and leave 4 points between them.
    BookTitle(title: "The Hobbit") // Create a title view for this book.
    Text("J. R. R. Tolkien").foregroundStyle(.secondary) // Show the author with less visual emphasis than the title.
} // End the stack’s content.
.padding() // Add space around the whole stack.`,
        sections: [
            ["How the stack positions its children", [
                "SwiftUI reads the children in order. The title appears above the author, with four points between them. Leading alignment lines up their starting edges in the current reading direction."
            ]],
            ["Where padding takes effect", [
                "Here `.padding()` follows the stack’s closing brace, so it adds space around the title and author together. Applying padding to the author alone would also change the visible gap between the two lines."
            ]]
        ],
        question: "A layout needs more room between adjacent views while keeping its outer margins the same. Which stack setting controls that gap?",
        options: ["Alignment", "Padding around the stack", "Spacing between children"], answer: 2
    },
    {
        title: "Store a choice with state",
        intro: "Let a reader mark a book as finished. SwiftUI keeps local state while the view retains its identity and updates dependent content after a change.",
        code: `struct ReadingStatus: View { // Define a view that lets the reader change a book’s status.
    @State private var finished = false // Keep the finished flag in local state, initially unread.

    var body: some View { // Describe the control for the current state.
        Button(finished ? "Mark unread" : "Mark finished") { // Use the flag to choose the button label and start its tap action.
            finished.toggle() // Flip the flag so SwiftUI updates the label.
        } // End the button’s action.
    } // End the body property.
} // End the ReadingStatus definition.`,
        sections: [
            ["Follow one tap", [
                "Initially `finished` is false, so the button offers “Mark finished”. Tapping it calls `toggle()`. SwiftUI reads the new value, and the same button now offers “Mark unread”."
            ]],
            ["How long the choice lasts", [
                "SwiftUI keeps this state while the same reading-status view remains in the hierarchy. To remember the choice after an app restart, store the status with the saved book and use that value when displaying it again."
            ]]
        ],
        question: "Which value is a good fit for local view state?",
        options: ["Whether a temporary panel on this screen is expanded", "A preference that must survive an app restart without being saved", "A fixed caption supplied by the parent"], answer: 0
    },
    {
        title: "Edit a parent’s value with a binding",
        intro: "Extract a reusable control while keeping the reading status in its parent. A binding lets the control read and write the same value.",
        code: `struct StatusEditor: View { // Define a reusable editor for the reading status.
    @Binding var finished: Bool // Read and write the Boolean owned by the parent through a binding.

    var body: some View { // Describe the editor’s content.
        Toggle("Finished reading", isOn: $finished) // Connect the switch to the binding so a tap updates the parent’s value.
    } // End the body property.
} // End the StatusEditor definition.`,
        sections: [
            ["Connect the editor to its parent", [
                "The parent owns `@State private var finished`. Passing `StatusEditor(finished: $finished)` gives the child a binding. Inside the child, reading `finished` returns the parent’s current Boolean."
            ]],
            ["Follow a switch change", [
                "The toggle receives `$finished` because it needs to write a value when the reader flips the switch. That write reaches the parent, so a status label elsewhere in the parent can update from the same value."
            ]]
        ],
        question: "When is a binding useful between a parent view and a child control?",
        options: ["When the child needs an independent draft it can discard", "When edits in the child should update a value owned by the parent", "When the child only needs to display a constant label"], answer: 1
    },
    {
        title: "Build a list with stable identity",
        intro: "Give each book an identifier that survives edits and reordering. Two books can share the same title and still have distinct rows.",
        code: `struct Book: Identifiable { // Define a book that SwiftUI can identify in a list.
    let id = UUID() // Generate an ID once for this book so renaming it preserves its identity.
    var title: String // Store the book’s editable title.
} // End the Book definition.

struct Library: View { // Define the view that displays the library.
    @State private var books = [Book(title: "The Hobbit")] // Keep the library’s books in local state, starting with one book.

    var body: some View { // Describe the library screen.
        List(books) { book in // Create a row for each book and name the current element book.
            BookTitle(title: book.title) // Show the current book’s title in its row.
        } // End the list’s row builder.
    } // End the body property.
} // End the Library definition.`,
        sections: [
            ["How a book keeps its row", [
                "Each new book receives a stored `id`. Two copies of the same title can therefore appear as separate rows. Editing a title preserves its ID, allowing SwiftUI to recognize the existing row."
            ]],
            ["What changes when books move", [
                "Moving a book changes its array position. Keeping its ID lets SwiftUI associate the row with that book at its new position. A computed ID that generates a fresh UUID on every read would break that association."
            ]]
        ],
        question: "Which identifier lets a list recognize the same item after both a rename and a reorder?",
        options: ["Its current position", "Its displayed name", "A unique ID stored with the item"], answer: 2
    },
    {
        title: "Navigate from a row to its details",
        intro: "Put the library inside a navigation stack. Each link presents the selected book and gives the reader a way back to the same list.",
        code: `NavigationStack { // Create a navigation stack that manages the path back to the library.
    List(books) { book in // Build one row for each book.
        NavigationLink(book.title) { // Use the book title as a tappable link and begin its destination.
            BookTitle(title: book.title) // Display the selected book on the detail screen.
                .navigationTitle("Book details") // Set the detail screen’s navigation title.
        } // End the link’s destination.
    } // End the list’s row builder.
    .navigationTitle("Library") // Set the navigation title for the list screen.
} // End the navigation stack.`,
        sections: [
            ["How a tap selects the book", [
                "Each row’s link uses the `book` passed to that row. Tapping the second link opens a destination displaying the second book’s title, even though every row uses the same destination code."
            ]],
            ["Where the navigation titles belong", [
                "The list’s `.navigationTitle(\"Library\")` names the starting screen. The modifier inside the link names the detail screen. Back removes that destination from the stack and reveals the library beneath it."
            ]]
        ],
        question: "What should Back do after someone opens a detail screen in a navigation stack?",
        options: ["Reveal the previous screen in the stack", "Replace the stack with the app’s home screen", "Present the previous screen as a sheet"], answer: 0
    },
    {
        title: "Present an editor in a sheet",
        intro: "Use a sheet for a short task such as adding a book. A Boolean in the presenting view records whether the editor is visible.",
        code: `struct AddBookButton: View { // Define the control that opens the book editor.
    @State private var editing = false // Track whether the sheet is visible. Start with it closed.
    @State private var title = "" // Store the title being typed, initially empty.
    let save: (String) -> Void // Accept a parent-supplied action that takes a title and returns no value.

    var body: some View { // Describe the button and the sheet it presents.
        Button("Add book") { editing = true } // Set editing to true when the reader taps Add book.
            .sheet(isPresented: $editing) { // Present the sheet while editing is true.
                Form { // Group the editor’s controls in a form.
                    TextField("Title", text: $title) // Show a title field and write each edit into the title state.
                    Button("Save") { // Start the action that runs when the reader taps Save.
                        save(title) // Pass the entered title to the parent’s save action.
                        title = "" // Clear the field for the next book.
                        editing = false // Dismiss the sheet by updating its presentation state.
                    } // End the Save action.
                    .disabled(title.isEmpty) // Disable Save while the field is empty.
                } // End the form.
            } // End the sheet’s content.
    } // End the body property.
} // End the AddBookButton definition.`,
        sections: [
            ["How the sheet opens and closes", [
                "The Add book button sets `editing` to true. The sheet observes the binding and presents the form. Saving sets the flag back to false. A swipe dismissal also updates the binding."
            ]],
            ["How the draft becomes a book", [
                "Typing changes the editor’s local `title`. On Save, `save(title)` hands that text to the library, which can append a book in its closure. Clearing the draft after that call leaves the field empty for the next entry."
            ]]
        ],
        question: "Which interaction is a good fit for a sheet?",
        options: ["Moving between the app’s main tabs", "Completing a short editing task and returning to the underlying screen", "Reading a status message inline beside a field"], answer: 1
    },
    {
        title: "Search the library",
        intro: "Store the query and derive matching rows from the original collection. Clearing the query immediately restores the full library.",
        code: `// Inside Library, alongside books:
@State private var query = "" // Store the reader’s search text, starting with an empty query.

private var matches: [Book] { // Compute the books that match the current query.
    books.filter { // Check each book and keep those for which the expression returns true.
        query.isEmpty || $0.title.localizedCaseInsensitiveContains(query) // Keep every book for an empty query, or match the current book’s title ignoring case.
    } // End the filter condition.
} // End the computed matches property.`,
        sections: [
            ["Connect the search field to the list", [
                "Inside the navigation stack, attach `.searchable(text: $query)` to `List(matches)`. Typing updates the query, and the list reads the newly computed matches."
            ]],
            ["Why clearing the field restores every row", [
                "The filter always starts with `books`. Searching for “hob” includes “The Hobbit” because the comparison ignores case. Clearing the field makes `query.isEmpty` true for every book, so every row returns."
            ]]
        ],
        question: "When a search query becomes shorter, how should the list find items that now match?",
        options: ["Filter the previous matches again", "Keep the previous matches until the query is empty", "Apply the new query to the full collection"], answer: 2
    },
    {
        title: "Explain empty search results",
        intro: "An empty library and an unsuccessful search call for different next steps. Use the collection and the query to choose a helpful message.",
        code: `List(matches) { book in // Build one row for each matching book.
    BookTitle(title: book.title) // Display the title of this matching book.
} // End the list’s row builder.
.overlay { // Place a message over the list when the conditions below apply.
    if books.isEmpty { // Check whether the library contains any books.
        Text("Add your first book.") // Prompt the reader to add a book to the empty library.
    } else if matches.isEmpty { // If the library has books, check whether the search found any.
        Text("No matching books. Try another title.") // Suggest a different title when the search returns no matches.
    } // End the conditional message.
} // End the overlay.`,
        sections: [
            ["Why the library is checked first", [
                "An empty library also has zero search matches. Checking `books.isEmpty` first gives a new reader the relevant action, “Add your first book.” Changing the search text cannot reveal a book until one exists."
            ]],
            ["When the search message disappears", [
                "With books in the library, the second branch displays a hint only while `matches.isEmpty`. As soon as a shorter query reveals a row, neither branch supplies overlay text and the reader sees the results."
            ]]
        ],
        question: "A collection has items, but a search returns zero matches. Which message helps the user decide what to do next?",
        options: ["No matches. Try a different search term.", "Your collection is empty. Add your first item.", "Loading results. Please wait."], answer: 0
    },
    {
        title: "Make controls accessible",
        intro: "A toolbar can show only an icon while VoiceOver announces what the button does. Give the control a meaningful title and let the label style choose its appearance.",
        code: `Button { // Create a button and begin its tap action.
    editing = true // Open the editor by changing the sheet’s presentation state.
} label: { // End the action and begin the button’s label.
    Label("Add book", systemImage: "plus") // Pair the plus symbol with an action name that VoiceOver can read.
} // End the button’s label.
.labelStyle(.iconOnly) // Show only the symbol while keeping the accessible name.`,
        sections: [
            ["What VoiceOver announces", [
                "The label supplies both the words “Add book” and a plus symbol. The icon-only style draws the symbol, while the button keeps its action name for VoiceOver. A reader can identify the action without seeing the icon."
            ]],
            ["How to use the label in the toolbar", [
                "Use this button as the sheet trigger from Part 7 and keep the sheet bound to `$editing`. Activating the button with VoiceOver runs the same action as tapping it and opens the book editor."
            ]]
        ],
        question: "What should the accessibility label of an icon-only button communicate?",
        options: ["The shape of its symbol", "The action the button performs", "The button’s position in the layout"], answer: 1
    }
];

const swiftui = createFrameworkTrack({
    id: "swiftui",
    framework: "SwiftUI",
    title: "SwiftUI Essentials",
    description: "Build a reading list with SwiftUI. Compose views, manage state and bindings, navigate between screens, and add search and accessible controls.",
    parts: swiftuiLessons.map((lesson, index) => ({
        part: `Part ${index + 1}`,
        title: lesson.title,
        intro: lesson.intro,
        examples: [{ label: lesson.exampleLabel ?? lesson.title, language: "swift", code: lesson.code }],
        sections: lesson.sections,
        highlight: lesson.intro.split(". ")[0] + "."
    })),
    quizQuestions: swiftuiLessons.map(lesson => ({
        part: lesson.title, question: lesson.question, options: lesson.options, answers: [lesson.answer]
    })),
    hashtags: "#Swift #SwiftUI #LearnSwift",
    afterCard: uikit.card
});
