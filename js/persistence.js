const persistenceLessons = [
    {
        title: "Persistence fundamentals",
        intro: "A Swift variable holds a value while your app runs. Persistence means writing that value to storage so the app can restore it after launch. For example, a temperature setting should still say Fahrenheit tomorrow.",
        example: "UserDefaults · Remember a temperature unit",
        code: `import Foundation // Provides the UserDefaults settings store.
let settings = UserDefaults.standard // Open this app’s preferences.
settings.set("F", forKey: "temperatureUnit") // Save the unit when the user selects Fahrenheit.
let unit = settings.string(forKey: "temperatureUnit") ?? "C" // Read on launch, defaulting to Celsius.`,
        usage: "Save a preference when the user changes it. On launch, read the same key. Use a database for records you search or edit individually, a file for a whole document, and Keychain for credentials.",
        pro: "Local storage restores the user’s choices even when the device is offline.",
        con: "You need a first-launch default and a plan for older saved values when your app changes.",
        idea: "Start with what the user expects to find when they reopen the app. That tells you what to save.",
        question: "Where would you save the user’s preferred temperature unit?",
        options: ["A local variable", "UserDefaults", "A new database table for each unit"], answer: 1
    },
    {
        title: "Core Data",
        intro: "Core Data manages records and their relationships. A managed object context tracks your edits until you save them. In an expense tracker, each purchase can be a separate record.",
        example: "Record an expense and fetch saved expenses",
        code: `import CoreData // Provides managed objects, contexts, and fetch requests.
func recordExpense(cents: Int64, in context: NSManagedObjectContext) throws -> [Expense] { // Accept an amount in cents.
    let expense = Expense(context: context) // Insert a new expense into the context.
    expense.cents = cents // Store the purchase amount as whole cents.
    try context.save() // Write pending edits to the persistent store.
    let request = NSFetchRequest<Expense>(entityName: "Expense") // Ask for saved expense records.
    return try context.fetch(request) // Load the records for the caller.
} // Finish the expense action.`,
        usage: "In Xcode’s data model editor, add an Expense entity with a required Integer 64 attribute named cents. Use Class Definition code generation. After NSPersistentContainer loads its stores, pass its viewContext to this function on the main queue.",
        pro: "Relationships and filtered fetches suit apps that connect records, such as purchases grouped by account.",
        con: "The model, generated types, and context must agree. Changes to a released model can require migration.",
        idea: "An inserted object lives in its context first. Saving the store-backed context makes the edit available on a later launch.",
        question: "Which operation commits the expense to the persistent store?",
        options: ["Creating a fetch request", "Assigning cents", "Saving the store-backed context"], answer: 2
    },
    {
        title: "SwiftData",
        intro: "SwiftData describes stored records with Swift classes. On iOS 17 or later, a reminder app can mark a class with @Model and use a model context to insert and fetch reminders.",
        example: "Save and fetch reminders",
        code: `import SwiftData // Provides the model macro and storage context.
@Model final class Reminder { // Make each reminder a persistent record.
    var title: String // Store the reminder text.
    init(title: String) { self.title = title } // Give a new reminder its text.
} // Finish the model definition.
@MainActor func addReminder(_ title: String, in context: ModelContext) throws -> [Reminder] { // Use the app’s main context.
    context.insert(Reminder(title: title)) // Track the new reminder.
    try context.save() // Write it to the store.
    return try context.fetch(FetchDescriptor<Reminder>()) // Load the saved reminders.
} // Finish the add action.`,
        usage: "Attach .modelContainer(for: Reminder.self) to the root scene. A SwiftUI view can read its modelContext from the environment and pass it to addReminder when the user taps Add.",
        pro: "The Swift class defines the stored fields. SwiftUI’s @Query can keep a displayed list updated as they change.",
        con: "The deployment target must support SwiftData. Changes to stored fields may require a schema migration.",
        idea: "The model describes a record, the container opens its store, and the context reads and writes records.",
        question: "What marks Reminder as a SwiftData model?",
        options: ["@Model", "@State", "@Published"], answer: 0
    },
    {
        title: "Realm",
        intro: "Realm is a local object database. In a workout log, each session can be an object. A write transaction groups changes so they commit together.",
        example: "Log a workout and count saved sessions",
        code: `import RealmSwift // Load the Realm Swift package.
final class Workout: Object { // Define a record Realm can store.
    @Persisted var minutes = 0 // Keep the workout duration in the database.
} // Finish the workout model.
func logWorkout(minutes: Int) throws -> Int { // Return the session count after saving.
    let realm = try Realm() // Open the default local database.
    let workout = Workout() // Create a session in memory.
    workout.minutes = minutes // Set its duration.
    try realm.write { // Start a write transaction.
        realm.add(workout) // Add the session to the database.
    } // Commit the transaction.
    return realm.objects(Workout.self).count // Count all stored sessions.
} // Finish the logging action.`,
        usage: "Add the realm-swift package in Xcode and select the RealmSwift product. Call logWorkout when a session ends. To display the session count on launch, open the same Realm and run the count query again.",
        pro: "You can query typed objects directly and observe results as sessions change.",
        con: "Realm adds a package dependency. Managed objects have threading rules, and writes require a transaction.",
        idea: "Create a regular instance, then add it inside a write transaction to make it persistent.",
        question: "Where should you change the duration of a workout already stored in Realm?",
        options: ["Inside its initializer only", "Inside a Realm write transaction", "Inside a fetch descriptor"], answer: 1
    },
    {
        title: "File storage with FileManager and Codable",
        intro: "A file holds bytes at a known location. Encode Swift values such as a color palette into JSON. A downloaded JPEG already contains the bytes you need, so you can write it directly.",
        example: "Write and reopen a color palette",
        code: `import Foundation // Provides JSON coding and file access.
let file = URL.documentsDirectory.appendingPathComponent("palette.json") // Choose a file in the app’s Documents folder.
let colors = ["#0A84FF", "#30D158"] // Collect the selected colors as strings.
let bytes = try JSONEncoder().encode(colors) // Convert the array into JSON data.
try bytes.write(to: file, options: .atomic) // Replace the file when the user saves.
let saved = try Data(contentsOf: file) // Read the file when the user opens it.
let palette = try JSONDecoder().decode([String].self, from: saved) // Restore the array of colors.`,
        extraExamples: [{
            label: "Cache a downloaded image and reopen it",
            language: "swift",
            code: `import Foundation // Provides FileManager, URLs, and Data.
let manager = FileManager.default // Access the app’s folders.
let cache = try manager.url(for: .cachesDirectory, in: .userDomainMask, appropriateFor: nil, create: true) // Locate the cache folder.
let imageFile = cache.appendingPathComponent("avatar.jpg") // Name the cached JPEG.
try downloadedJPEG.write(to: imageFile, options: .atomic) // Save the Data returned by the download.
let imageBytes = try Data(contentsOf: imageFile) // Reopen the image for display.`
        }],
        locations: [
            "**Documents** holds files the user creates or manages, such as a palette they can export.",
            "**Application Support** holds files the app keeps between launches, such as a map the user downloads for offline use.",
            "**Caches** holds replaceable files, such as downloaded avatars. If the system clears one, fetch it again."
        ],
        usage: "Write the palette when the user taps Save and decode it when they tap Open. For the image example, downloadedJPEG is the Data from a completed JPEG download. On a later launch, use the same cache URL to read it.",
        pro: "JSON is readable and easy to export. Swift arrays and Codable structs can use the same encoder.",
        con: "Changing one color rewrites the entire file. Decoding can fail if an older file uses a different structure.",
        idea: "Encoding creates bytes in memory. Writing those bytes to a file is the step that makes them persist.",
        question: "Which step keeps the palette after the app closes?",
        options: ["Declaring the colors array", "Creating a URL", "Writing the encoded bytes to the file"], answer: 2
    },
    {
        title: "Keychain Services",
        intro: "A sign-in token lets an app act on someone’s behalf. Keychain Services stores small secrets in protected items. The following three snippets work together and use the same service and account to find one session token.",
        example: "After sign-in · Add or update the token",
        code: `import Security // Provides the Keychain operations and status codes.
import Foundation // Provides Data and NSError.
let tokenKey: [String: Any] = [ // Identify one item for this app’s session.
    kSecClass as String: kSecClassGenericPassword, // Use the item type for a small secret.
    kSecAttrService as String: "com.example.app.session", // Group this app’s session credentials.
    kSecAttrAccount as String: "current" // Name the single active session.
] // Reuse these keys for every operation.
func check(_ status: OSStatus) throws { // Translate a Keychain result into a Swift error.
    guard status == errSecSuccess else { throw NSError(domain: NSOSStatusErrorDomain, code: Int(status)) } // Preserve the failure code.
} // Finish checking the result.
func saveToken(_ token: String) throws { // Call after sign-in or token renewal.
    let bytes = Data(token.utf8) // Convert the token to bytes.
    var item = tokenKey // Start with the session’s identity.
    item[kSecAttrAccessible as String] = kSecAttrAccessibleWhenUnlockedThisDeviceOnly // Allow access while this device is unlocked.
    item[kSecValueData as String] = bytes // Include the token in the new item.
    let status = SecItemAdd(item as CFDictionary, nil) // Try to create the item.
    if status == errSecDuplicateItem { // An earlier token already uses this identity.
        try check(SecItemUpdate(tokenKey as CFDictionary, [kSecValueData as String: bytes] as CFDictionary)) // Replace its bytes.
    } else { // Handle the first save or another result.
        try check(status) // Report any failure to the caller.
    } // Finish handling the save result.
} // Finish saving the token.`,
        extraExamples: [
            {
                label: "On launch · Read the token",
                language: "swift",
                code: `func readToken() throws -> String? { // Return nil for a signed-out session.
    var query = tokenKey // Find the same service and account.
    query[kSecReturnData as String] = true // Ask for the stored bytes.
    var result: CFTypeRef? // Receive the matching value here.
    let status = SecItemCopyMatching(query as CFDictionary, &result) // Look up the token.
    if status == errSecItemNotFound { return nil } // A missing item means there is no saved token.
    try check(status) // Propagate access errors, including a locked device.
    guard let data = result as? Data, let token = String(data: data, encoding: .utf8) else { throw NSError(domain: NSOSStatusErrorDomain, code: Int(errSecDecode)) } // Decode the saved text or report damaged data.
    return token // Give the token to the sign-in flow.
} // Finish the lookup.`
            },
            {
                label: "On sign-out · Delete the token",
                language: "swift",
                code: `func deleteToken() throws { // Remove the local credential on sign-out.
    let status = SecItemDelete(tokenKey as CFDictionary) // Delete the matching session item.
    if status != errSecItemNotFound { try check(status) } // An already absent item needs no further action.
} // Finish local sign-out.`
            }
        ],
        usage: "Save the token returned by your sign-in service. On launch, read it and let the server validate the session. On sign-out, remove the local item and follow the service’s session-revocation flow.",
        pro: "The system protects the token and enforces the access rule you set when adding it.",
        con: "A read can fail while the device is locked. Handle that separately from a missing item so the user can retry after unlocking.",
        idea: "Keep the item’s service and account stable across saves, reads, and deletes.",
        question: "A token lookup returns errSecItemNotFound. What should the app do?",
        options: ["Treat the session as having no saved token", "Replace the token with an empty string", "Assume the server renewed the session"], answer: 0
    }
];

const persistence = createFrameworkTrack({
    id: "persistence",
    framework: "SwiftData",
    category: "Data Persistence Track",
    title: "Data Persistence in Swift",
    description: "Learn when to use UserDefaults, Core Data, SwiftData, Realm, files, and Keychain to keep app data across launches.",
    parts: persistenceLessons.map((lesson, index) => ({
        part: `Part ${index + 1}`,
        title: lesson.title,
        intro: lesson.intro,
        examples: [{ label: lesson.example, language: "swift", code: lesson.code }, ...(lesson.extraExamples ?? [])],
        sections: [...(lesson.locations ? [["Where files belong", lesson.locations]] : []), ["Usage", [lesson.usage]], ["Pros", [lesson.pro]], ["Cons", [lesson.con]]],
        highlight: lesson.idea
    })),
    quizQuestions: persistenceLessons.map(lesson => ({
        part: lesson.title, question: lesson.question, options: lesson.options, answers: [lesson.answer]
    })),
    hashtags: "#Swift #SwiftData #Persistence",
    afterCard: networking.card
});
