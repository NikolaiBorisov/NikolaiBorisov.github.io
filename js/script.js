const themeButtons = document.querySelectorAll(".theme-switch button");
const languageSwitch = document.querySelector(".lang-switch");
const languageCurrentButton = document.querySelector("#lang-current");
const languageButtons = document.querySelectorAll(".lang-options button");
const translatableItems = document.querySelectorAll("[data-i18n]");
const openSwiftTalksButton = document.querySelector("#open-swift-talks");
const closeSwiftTalksButton = document.querySelector("#close-swift-talks");
const swiftTalksScreen = document.querySelector("#swift-talks");
const openSwiftIntroTrackButton = document.querySelector("#open-swift-intro-track");
const openToolboxTrackButton = document.querySelector("#open-toolbox-track");
const backToTalkTopicsButton = document.querySelector("#back-to-talk-topics");
const backToTalkTopicsButtons = document.querySelectorAll(".back-to-talk-topics");
const toolboxAccordion = document.querySelector("#toolbox-accordion");
const openSwiftQuizButtons = document.querySelectorAll(".open-swift-quiz");
const closeSwiftQuizButton = document.querySelector("#close-swift-quiz");
const swiftQuizScreen = document.querySelector("#swift-intro-quiz");
const swiftQuizForm = document.querySelector("#swift-quiz-form");
const finishSwiftQuizButton = document.querySelector("#finish-swift-quiz");
const resetSwiftQuizButton = document.querySelector("#reset-swift-quiz");
const swiftQuizScore = document.querySelector("#swift-quiz-score");
const swiftQuizLegend = document.querySelector("#swift-quiz-legend");
const toolboxQuizScreen = document.querySelector("#toolbox-quiz");
const toolboxQuizForm = document.querySelector("#toolbox-quiz-form");
const closeToolboxQuizButton = document.querySelector("#close-toolbox-quiz");
const finishToolboxQuizButton = document.querySelector("#finish-toolbox-quiz");
const resetToolboxQuizButton = document.querySelector("#reset-toolbox-quiz");
const toolboxQuizScore = document.querySelector("#toolbox-quiz-score");
const toolboxQuizLegend = document.querySelector("#toolbox-quiz-legend");
const openToolboxQuizButtons = document.querySelectorAll(".open-toolbox-quiz");
const accordionTriggers = document.querySelectorAll(".talk-accordion-trigger");
const copyTalkButtons = document.querySelectorAll(".copy-talk");
const translateTalkButtons = document.querySelectorAll(".translate-talk");
const likeControls = document.querySelectorAll(".talk-like");
const likesStorageKey = "swiftTalkLikes";
const swiftTalksHash = "#swift-talks";
const swiftQuizHash = "#swift-intro-quiz";
const legacySwiftQuizHash = "#swift-talks/#swift-intro-quiz";
const toolboxQuizHash = "#ios-dev-toolbox-quiz";
const languageLabels = {
    en: "🇬🇧",
    es: "🇪🇸",
    th: "🇹🇭"
};

const swiftTalkPosts = {
    part1: `🔶 SWIFT Talks
What is Swift? Why Swift? What for?

Swift is Apple’s modern programming language for building apps across:
• iOS
• macOS
• watchOS
• tvOS
• visionOS
and beyond.

Introduced by Apple in 2014, Swift was created as a safer, faster, and more expressive alternative to Objective-C. The project was started by Chris Lattner around 2010, with major contributions from Apple’s compiler and developer tools teams.
But Swift did not appear from nowhere.

Its roots and influences include:

• Objective-C
The old backbone of Apple development. Powerful and deeply tied to Apple frameworks, but verbose and easier to misuse.

• C and C++
Swift keeps the need for performance and low-level control, while avoiding much of their unsafe memory complexity.

• Modern language ideas
You can see ideas shared with languages like Rust, Haskell, Python, Ruby, C#, and more in Swift’s safety model, optionals, type inference, closures, generics, protocols, and clean syntax.

So why did Apple create Swift?
Because modern app development needed a language that was:

• Safe
Optionals help prevent null pointer crashes. Strong typing catches mistakes early.

• Fast
Swift is compiled and designed for high performance while keeping safer defaults.

• Readable
Less ceremony, more intention. Code can feel almost conversational.

• Modern
Closures, generics, async/await, pattern matching, value types, protocols, extensions.

• Friendly to beginners, powerful for experts
You can write your first app with SwiftUI, but also build complex systems, SDKs, frameworks, server apps, and performance-critical tools.

What is Swift used for?
• Building iPhone apps
• Building Mac apps
• Creating Apple Watch experiences
• Developing visionOS spatial apps
• Writing server-side backends with frameworks like Vapor
• Building command-line tools
• Teaching programming
• Prototyping ideas quickly
• Creating production-grade software used by millions

One of Swift’s biggest ideas is this:
"Code should be expressive without being fragile."
That’s why features like \`let\`, \`guard\`, \`if let\`, \`struct\`, \`protocol\`, and \`async/await\` are not just syntax. They represent a philosophy:
Make the correct path easy, and the dangerous path visible.

Swift is best known for Apple platforms, but it is also open-source and used beyond them.
It is a language shaped by decades of programming lessons:
• From C, it learned performance
• From Objective-C, it inherited Apple’s ecosystem
• From functional languages, it learned expressiveness
• From modern systems languages, it learned safety
• From real developers, it learned that code must be readable tomorrow, not only clever today.

Swift exists to help developers build beautiful, reliable, high-performance software with less pain and more clarity.
Swift sits at the intersection of design, engineering, safety, and creativity.

🔶 Follow for the next part: Swift Under the Hood
🔗 https://www.linkedin.com/in/niko-anderson-36269333b/
#SwiftTalks`,
    part2: `🔶 SWIFT Talks

Swift Under the Hood

Swift under the hood combines:

• Compiler checks
• Memory management
• Type safety
• Runtime support

At a high level, Swift code goes through this pipeline:
Swift Code -> Parser -> Type Checker -> SIL -> LLVM -> Machine Code

🔸 Parser
First, Swift reads our code and turns it into a structure the compiler can understand.

It understands:
• Constants
• Variables
• Functions
• Types
• Expressions
• Scopes

🔸 Type Checker
The type checker verifies that our code makes sense before the app runs.

It understands that:
• 25 is an \`Int\`
• "Alex" is a \`String\`
• true is a \`Bool\`
• let count: Int = "10" // error

This is called type inference.
We do not always need to write the type manually, but Swift still knows it.
Swift catches the mistake at compile time.

🔸 SIL
After type checking, Swift code becomes SIL: Swift Intermediate Language.
This is where Swift-specific optimization happens.

The compiler can reason about:
• value types
• generics
• protocols
• ARC
• ownership
• memory behavior

🔸 LLVM
After SIL, Swift uses LLVM.
LLVM lowers the code closer to machine instructions and applies performance optimizations.
It helps with inlining, removing unused code, generating optimized machine code for the target device.

🔸 Memory Management
Swift uses ARC: Automatic Reference Counting.
ARC tracks how many strong references point to an object.
When no strong references remain, the object can be removed from memory.
This gives Swift automatic memory management without a traditional garbage collector.

🔸 Value Types
Swift encourages value types like struct and enum.
Value types make code easier to reason about because data changes are more explicit.
They help reduce accidental shared mutable state.
Swift also uses performance optimizations like copy-on-write, so value semantics do not always mean expensive copying.

🔸 Optionals
Optionals are a core safety feature.

An optional means:
• There may be a value
• Or there may be no value

Swift forces us to handle missing values directly, instead of letting them become unexpected crashes later.

🔸 Concurrency
Modern Swift includes structured concurrency.
async/await makes asynchronous code easier to read.
tasks give async work structure.
actors help protect shared mutable state.
@MainActor helps keep UI updates on the main thread.

Swift is designed to make safe code feel natural.

Its features are not random:
• strong typing catches mistakes early
• optionals make absence visible
• ARC manages memory automatically
• value types reduce hidden sharing
• generics and protocols improve reuse
• async/await and actors make concurrency safer
• the compiler checks more before runtime

Swift under the hood is a balance:
• High-level enough to be expressive
• Low-level enough to be fast
• Practical enough for real production apps

Swift helps developers build reliable software with less accidental complexity.

🔶 Follow for the next part: Swift Type System

#Swift #SwiftTalks #iOS`,
    part3: `🔶 Swift Talks

iOS Development & iOS Developer

iOS development is the process of building apps for Apple’s mobile ecosystem.

An iOS developer works with:

• UI and UX
• Architecture
• State management
• Networking
• Persistence
• Performance
• Testing
• App Store delivery

🔸 What Is iOS Development?

iOS development means creating apps for iPhone and iPad.

Most modern iOS apps are built with:

• Swift
• SwiftUI or UIKit
• Xcode
• Apple SDKs

Swift is the main language.
Xcode is the main development environment.
Apple SDKs provide tools for UI, networking, storage, maps, camera, notifications, payments, and more.

🔸 What Does an iOS Developer Do?

An iOS developer turns ideas into working mobile products.

This includes:

• Building screens
• Handling user actions
• Connecting APIs
• Managing app state
• Saving local data
• Handling errors
• Fixing bugs
• Preparing releases

A good iOS developer does not only ask:

"How do I make it work?"

They also ask:

"Is it maintainable?"
"Is it testable?"
"Does it feel good to use?"

🔸 UI Layer

The UI layer is what the user sees and touches.

In iOS, this usually means SwiftUI or UIKit.

SwiftUI is declarative:

You describe the UI for a given state.

UIKit is imperative:

You control views and updates more manually.

A strong iOS developer understands UI state, navigation, accessibility, animations, and platform behavior.

🔸 App Architecture

Real apps need structure.

Without architecture, screens become too large, logic gets duplicated, and small changes become risky.

Common iOS architecture patterns include:

• MVC
• MVVM
• Clean Architecture
• VIPER
• TCA

Architecture helps separate responsibilities.

The point is to keep the app understandable as it grows.

🔸 Data & APIs

Most iOS apps work with data.

That data can come from:

• REST APIs
• GraphQL
• Local databases
• UserDefaults
• Keychain
• Cloud services

An iOS developer needs to understand networking, JSON decoding, caching, offline behavior, and error handling.

🔸 Performance

iOS apps should feel fast.

Performance means:

• Smooth scrolling
• Fast launch time
• Efficient images
• Safe memory usage
• No main-thread blocking

Users may not know why an app feels slow.

But they always feel it.

🔸 Testing

Testing helps protect the app from breaking as it changes.

iOS developers may write:

• Unit tests
• UI tests
• Snapshot tests
• Integration tests

Good tests make refactoring safer and bugs easier to catch before users see them.

🔸 The Main Idea

An iOS developer builds product experiences for Apple platforms.

They need to understand code, design, architecture, data, performance, and users.

iOS development is a balance:

• Technical enough to be reliable
• Visual enough to care about details
• Practical enough to ship real products

You are not only building screens.

You are building software people carry in their hands every day.

🔶 Follow for the next part: Swift Type System

#Swift #SwiftTalks #iOS`,
    part4: `🔶 Swift Talks

How to Become an iOS Developer

Becoming an iOS developer means learning the Apple ecosystem, building real apps, and practicing the habits of shipping reliable products.

🔸 Start With Swift

Learn the fundamentals first:

• variables and constants
• optionals
• structs and classes
• protocols
• closures
• collections
• error handling
• async/await

Do not rush this. Swift is the language you will use every day.

🔸 Learn the Apple Stack

Most modern iOS apps use:

• Swift
• SwiftUI or UIKit
• Xcode
• Apple SDKs

SwiftUI is great for modern declarative UI.
UIKit is still important in real apps.
Xcode is where you code, debug, test, run simulators, sign builds, and prepare releases.

🔸 Equipment and Tools

You need a Mac because Xcode runs on macOS.

• MacBook Air or Pro with Apple Silicon
• 16 GB RAM if possible
• iPhone for real-device testing
• optional iPad for larger layouts

• Xcode for coding and App Store delivery
• Git and GitHub for version control
• Postman for testing APIs
• Figma for reading designs
• Firebase for analytics, auth, crash reports, or backend features
• Charles or Proxyman for network debugging
• App Store Connect for releases

The simulator is useful, but real devices show real performance, camera behavior, notifications, haptics, and layout issues.

🔸 AI Tools for Beginner iOS Developers

AI can help you learn faster, but it should not replace understanding.

Use Codex, Cursor, GitHub Copilot, Perplexity, and Apple docs.

Use AI to:

• explain Swift errors
• review your code
• create small practice tasks
• compare approaches
• ask why a solution works

Use AI as a mentor, reviewer, and learning assistant, not just an app generator.

🔸 Build Real Projects

Tutorials help, but projects teach the real work.

Build apps with:

• navigation
• state management
• local storage
• API calls
• loading, empty, error, and success states
• polished UI

Examples:

• todo app with persistence
• weather app with an API
• auth flow with validation
• portfolio app

🔸 Daily Practice

Start with Swift → SwiftUI → UIKit → Build your own pet project.

Set one simple daily goal: build at least one feature.

Small steps like:

• Add a launch screen
• Build an onboarding flow
• Create an authentication screen
• Add a profile screen

One feature at a time, one day at a time.

This will take you further than building an app in a few hours with tools you do not understand and code you cannot explain.

🔸 Learn Professional Habits

A good iOS developer writes code other people can understand.

Practice:

• readable naming
• clean architecture
• small components
• error handling
• accessibility
• tests for important logic
• Git commits with clear messages

🔸 The Main Idea

Learn Swift.
Build UI.
Connect data.
Structure the app.
Test, polish, and release.

That loop is how a beginner becomes someone who can ship real iOS products.

Do not only watch tutorials.
Build, break, debug, and ship.

#Swift #SwiftTalks #iOS`,
    part5: `🔶 Swift Talks

iOS Beginner Roadmap

A simple visual roadmap for beginner iOS developers.

Start with:

1. Setup (IDE)
Mac, Xcode, iOS Simulator, iPhone, Git, GitHub, Postman, Figma.

2. Swift Core Theory
Variables, optionals, structs, classes, enums, protocols, closures, generics, error handling, async/await.

3. SwiftUI Core Theory
Views, modifiers, layout, state, binding, navigation, forms, lists, reusable components, previews, accessibility.

4. UIKit Core Theory
UIViewController lifecycle, Auto Layout, table views, collection views, delegation, target-action, coordinators.

5. Playground Practice
Solve small Swift tasks, practice collections, decode JSON, write tiny async examples, refactor for readability.

6. Pet Project
Pick one useful app idea. Build launch, onboarding, auth, profile, API flow, local storage, error states, and polished UI.

7. Portfolio
Create a GitHub repo, README, screenshots, architecture notes, GitHub.io personal website, and a short case study.

8. AI Tools
Use AI to explain errors, review code, compare solutions, and ask why code works. Verify with Apple documentation.

Daily rule:
Swift → SwiftUI → UIKit → pet project.
One small feature at a time.

#Swift #SwiftTalks #iOS`,
    part6: `🔶 Swift Talks

No IT Experience? How to Start

You can start iOS development without an IT background.

But you need:

• consistency
• small projects
• real practice
• code you can explain

🔸 Start With Computer Logic

Before apps and architecture, learn how programs think:

• variables
• conditions
• loops
• functions
• arrays
• dictionaries
• strings
• errors

Your first goal is simple:
read code line by line without panic.

🔸 Your First Tools

Keep the setup small:

• Xcode
• Swift Playgrounds
• GitHub
• Figma
• Postman later, when you start APIs

You do not need every professional tool on day one.

🔸 First 30 Days

Days 1–7:
Swift basics in playgrounds.

Days 8–14:
small SwiftUI screens.

Days 15–21:
navigation, forms, state.

Days 22–30:
one tiny app with local data.

🔸 Daily Practice

Do one visible thing every day:

• create a button and handle a tap
• build a login screen without backend
• save a value locally
• fix one bug and write what caused it

Small visible progress keeps motivation alive.

🔸 What to Avoid

Avoid:

• huge apps too early
• copying code you cannot explain
• only watching tutorials
• learning every architecture before building UI

You need repetition more than complexity.

🔸 How to Use AI

Use AI as a teacher, not a replacement.

Ask AI to:

• explain compiler errors
• simplify code
• review your solution
• compare two approaches
• create small practice tasks

Then rewrite the answer yourself.

🔸 Your First Portfolio App

One small finished app is better than five unfinished demos.

Build:

• one clear problem
• three to five screens
• local storage or one public API
• README with screenshots and decisions

🔸 How to Know You Are Improving

You are improving when:

• you can explain your code out loud
• you can debug with breakpoints
• you can rebuild old screens faster
• you commit small changes regularly

Core idea:
You do not need an IT background to start.
You need consistency, small tasks, and code you can explain.

Explore programming languages:
Learn Swift and mobile development theory step by step.
https://apps.apple.com/th/app/isolid-learn-programming/id6752113008

#Swift #SwiftTalks #iOS`,
    part7: `🔶 Swift Talks

Tutorials, Books, AI Tools

A curated starter pack for learning Swift, UIKit, SwiftUI, and using AI tools wisely.

🔸 Top 5 Swift Theory Tutorials

1. Swift.org — Getting Started
https://www.swift.org/getting-started/

2. The Swift Programming Language
https://docs.swift.org/swift-book/documentation/the-swift-programming-language/

3. A Swift Tour
https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour/

4. Swift by Sundell — Basics
https://www.swiftbysundell.com/basics/

5. Kodeco — Swift Apprentice
https://www.kodeco.com/books/swift-apprentice

🔸 Top 5 UIKit Tutorials

1. Apple — App Development with UIKit
https://developer.apple.com/documentation/uikit/about-app-development-with-uikit

2. Apple — Views and Controls
https://developer.apple.com/documentation/uikit/views-and-controls

3. Apple — View Controllers
https://developer.apple.com/documentation/uikit/view-controllers

4. Apple — Handling Touches
https://developer.apple.com/documentation/uikit/handling-touches-in-your-view

5. Kodeco — UIKit Apprentice
https://www.kodeco.com/books/uikit-apprentice

🔸 Top 5 SwiftUI Tutorials

1. Apple — SwiftUI Tutorials
https://developer.apple.com/tutorials/swiftui

2. Apple — SwiftUI Documentation
https://developer.apple.com/documentation/swiftui

3. Apple — Develop in Swift Tutorials
https://developer.apple.com/tutorials/develop-in-swift

4. Kodeco — SwiftUI Apprentice
https://www.kodeco.com/books/swiftui-apprentice

5. Point-Free — SwiftUI Collection
https://www.pointfree.co/collections/swiftui

🔸 Top 5 Swift Books

1. The Swift Programming Language
https://docs.swift.org/swift-book/documentation/the-swift-programming-language/

2. Swift Apprentice
https://www.kodeco.com/books/swift-apprentice

3. Swift Programming: The Big Nerd Ranch Guide
https://www.informit.com/store/swift-programming-the-big-nerd-ranch-guide-9780135266618

4. Advanced Swift
https://www.objc.io/books/advanced-swift/

5. Thinking in SwiftUI
https://www.objc.io/books/thinking-in-swiftui/

🔸 AI Tools for iOS Development

• Codex
https://openai.com/codex/

• Cursor
https://cursor.com/

• GitHub Copilot
https://github.com/features/copilot

• Perplexity
https://www.perplexity.ai/

🔸 iOS Dev Bible

Apple Developer Documentation
https://developer.apple.com/documentation/

🔸 Test your knowledge

Take a Swift & Mobile Development QUIZ:
https://apps.apple.com/th/app/isolid-learn-programming/id6752113008

#Swift #SwiftTalks #iOS`,
    part8: `🔶 Swift Talks

Git & GitHub & GitFlow for iOS Developers

Git is not just a tool for saving code.

For an iOS developer, Git is:

• proof of progress
• a safety net
• part of teamwork
• a way to show how you build

🔸 What Git Solves

Git helps you:

• track what changed
• return to a working version
• work on features safely
• make your learning visible

🔸 Beginner Terminal Commands

Start with:

• cd folder-name
Move into your project folder.

• git status
See changed files.

• git branch
Check your current branch.

• git checkout -b feature/login-screen
Create a new branch.

• git add .
Stage changes.

• git commit -m "Add onboarding screen"
Save a checkpoint.

• git push -u origin feature/login-screen
Upload the branch to GitHub.

• git pull
Download remote changes.

You do not need to memorize everything.
Use a few commands often.

🔸 Create a New GitHub Repo

1. Open GitHub.
2. Create a new repository.
3. Use a clear name like ios-weather-app.
4. Add a short description.
5. Copy the repository URL.

If your local project already has files, do not create README online.
Keep the first push clean.

🔸 Connect It With a Local Folder

Inside your project folder:

• cd ios-weather-app
• git init
• git add .
• git commit -m "Initial commit"
• git branch -M main
• git remote add origin repo-url
• git push -u origin main

Now your local folder is connected to GitHub.

🔸 Real Feature Flow Example

1. cd ios-weather-app
2. git status
3. git checkout -b feature/profile-screen
4. build the profile screen
5. git status
6. git add .
7. git commit -m "Add profile screen"
8. git push -u origin feature/profile-screen
9. open a pull request on GitHub

🔸 Good Commit Messages

A good commit tells the story of what you built.

Good examples:

• Add onboarding screen
• Fix profile image layout
• Handle empty task list state
• Refactor login validation

Bad examples:

• update
• fix
• final
• changes

🔸 Branches

A branch is a safe place to work without breaking the main version.

Useful branch names:

• main
stable code

• feature/login-screen
new feature

• fix/profile-layout
bug fix

• release/1.0
release preparation

🔸 Simple GitFlow

As a beginner, keep GitFlow simple:

1. Create a branch for one feature.
2. Commit small steps.
3. Push the branch.
4. Open a pull request.
5. Review the changes.
6. Merge when the feature is clean.

This teaches professional workflow without making Git scary.

🔸 GitHub Portfolio Repos

Your repository should help people understand your work quickly.

Add:

• clear README
• screenshots
• feature list
• architecture explanation
• setup instructions
• known limitations
• next steps

One clean repository is better than ten messy ones.

🔸 How to Show Progress

Push code regularly.

Show:

• meaningful commit history
• screenshots or demo GIFs
• what you learned
• what you improved
• why you made decisions

Recruiters and developers do not only look at the final app.
They also look at how you think.

🔸 Terminal and Git Clients

Learn terminal basics because every developer needs them.

But visual Git clients are useful too:

• Xcode Source Control
• GitHub Desktop
• Fork
• SourceTree

Use clients to understand changes visually.
Use terminal to build confidence.

Core idea:
Commit small, clear changes.
A good Git history shows your growth as a developer.

#Swift #SwiftTalks #iOS`,
    part9: `🔶 Swift Talks

Pet Project. How to Start?

A pet project is a small app you build for yourself to practice real development.

It includes:

• idea
• design
• code
• GitHub
• testing
• polish
• presentation

It is not just a tutorial copy.
It is your own small product where you make decisions.

🔸 How to Choose a Topic

Start from something you actually like.

Think about:

• dogs
• cats
• cars
• flowers
• food
• fitness
• books
• travel

Choose one topic.
Then ask:

What problem can this app solve?
What would I personally use?
What can I build in 2–4 weeks?

🔸 Connect the Ideas

Example:

You love dogs.

Possible app:
Dog care tracker.

Features:

• walks
• food schedule
• vet notes
• vaccination reminders
• photo diary

You love cars.

Possible app:
Car log.

Features:

• fuel tracking
• repair history
• service reminders
• expenses

This is how a simple interest becomes an app idea.

🔸 Start Small

Do not begin with a huge app.

Start with:

• Name
• Logo
• Motto
• Launch screen
• Onboarding
• Home screen

After that, the path becomes clearer.

🔸 First Real Features

Build:

• list screen
• details screen
• add item flow
• edit item flow
• empty state
• loading state
• error state

These features teach real app development.

🔸 What to Use

For the first version:

• SwiftUI for UI
• Swift models for data
• UserDefaults or local JSON first
• GitHub for commits and README
• Figma or sketches for rough screens

Do not add backend too early.
Finish the local version first.

🔸 Goals to Set

Set simple goals:

• one feature per day
• one commit per meaningful step
• README from day one
• screenshots as the app grows
• version 1 before version 2 ideas

Small goals help you finish.

🔸 Make It Portfolio-Ready

Add:

• clear naming
• consistent UI
• accessibility labels
• screenshots
• architecture notes
• what you learned
• next steps

Your pet project should show how you think, not only how it looks.

Main idea:
Think about what you love.
Choose one small idea.
Build the first useful version.

You do not need a perfect idea.
You need a project you care enough to finish.

#Swift #SwiftTalks #iOS`,
    part10: `🔶 Swift Talks

First iOS App Checklist

Your first iOS app does not need to be big.

It needs to be:

• finished
• understandable
• easy to explain
• useful enough to show

🔸 Before You Start

Write this down first:

• What problem does the app solve?
• Who is the target user?
• What are the 3–5 core screens?
• What features belong to version 1?
• What will you not build yet?

The last question is important.
Scope control helps you finish.

🔸 Project Setup

Start clean:

• Create the Xcode project.
• Create a GitHub repository.
• Add README from day one.
• Make the first commit.
• Create a simple folder structure.

Do not wait until the end to create GitHub.
Your progress matters.

🔸 Core Screens

A good first app can include:

• launch screen
• onboarding or welcome screen
• home screen
• list screen
• detail screen
• add or edit screen
• settings or profile screen

You do not need all of them.
Choose what fits your idea.

🔸 Core States

Do not build only the happy path.

Add:

• loading state
• empty state
• error state
• success state
• disabled button state
• validation messages

These states make the app feel real.

🔸 Core iOS Skills

Your first app should practice:

• Swift models
• SwiftUI views and modifiers
• navigation
• state management
• local storage
• optional API call

Start local first.
Add backend or API only when the app already has shape.

🔸 Quality Checklist

Before you call it finished:

• no obvious crashes
• readable names
• consistent spacing
• consistent typography
• dark and light mode checked
• tested on a real device
• accessibility labels added

Small polish makes a big difference.

🔸 GitHub Checklist

Your repo should include:

• clean commit history
• README with project goal
• screenshots or demo GIF
• feature list
• architecture notes
• setup instructions
• next steps

A good README helps people understand your work quickly.

🔸 Final Review

Ask yourself:

• Can I explain every screen?
• Can I explain every model?
• Can I describe one bug I fixed?
• Can someone run this project?
• Does the app solve the original problem?

If yes, you have something real.

Main idea:
Do not build a huge app.
Build a small app completely.

Idea.
UI.
Data.
States.
Testing.
README.
Screenshots.

When version 1 works, stop adding features.
Polish it, document it, share it, then start version 2.

#Swift #SwiftTalks #iOS`
};

const swiftIntroQuizQuestions = [
    {
        part: "Part 1",
        question: "What did Apple create Swift to improve compared with Objective-C?",
        options: ["Safety, speed, and expressiveness", "Only App Store screenshots", "Readable modern syntax"],
        answers: [0, 2]
    },
    {
        part: "Part 1",
        question: "Which features reflect Swift's safer programming philosophy?",
        options: ["Optionals", "Strong typing", "Ignoring missing values until runtime"],
        answers: [0, 1]
    },
    {
        part: "Part 1",
        question: "What can Swift be used to build?",
        options: ["iPhone, Mac, watchOS, tvOS, and visionOS apps", "Server-side backends and command-line tools", "Only calculator apps"],
        answers: [0, 1]
    },
    {
        part: "Part 2",
        question: "Which stages belong to the Swift compiler pipeline described in Part 2?",
        options: ["Parser and Type Checker", "SIL and LLVM", "Storyboard Painter"],
        answers: [0, 1]
    },
    {
        part: "Part 2",
        question: "What does ARC do in Swift?",
        options: ["Tracks strong references to objects", "Removes objects when no strong references remain", "Replaces type checking"],
        answers: [0, 1]
    },
    {
        part: "Part 2",
        question: "Why are optionals important?",
        options: ["They make missing values explicit", "They force developers to handle absence", "They turn every value into a String"],
        answers: [0, 1]
    },
    {
        part: "Part 3",
        question: "What does an iOS developer commonly work with?",
        options: ["UI, architecture, state management, and networking", "Persistence, testing, and delivery", "Only changing app icons"],
        answers: [0, 1]
    },
    {
        part: "Part 3",
        question: "Which tools and technologies are central to modern iOS apps?",
        options: ["Swift", "SwiftUI or UIKit", "Xcode"],
        answers: [0, 1, 2]
    },
    {
        part: "Part 3",
        question: "What should a good iOS developer ask beyond 'How do I make it work?'",
        options: ["Is it maintainable?", "Is it testable?", "Can I avoid handling errors?"],
        answers: [0, 1]
    },
    {
        part: "Part 4",
        question: "What helps someone become an iOS developer?",
        options: ["Learning the Apple ecosystem", "Building real apps", "Waiting until every topic is mastered before writing code"],
        answers: [0, 1]
    },
    {
        part: "Part 4",
        question: "Which habits support beginner progress?",
        options: ["Practice regularly", "Ship small projects", "Avoid Git until the end"],
        answers: [0, 1]
    },
    {
        part: "Part 4",
        question: "What should beginners focus on when learning?",
        options: ["Swift basics", "UI building and navigation", "Random advanced optimization first"],
        answers: [0, 1]
    },
    {
        part: "Part 5",
        question: "What does the iOS beginner roadmap move through?",
        options: ["Setup and core theory", "Playground practice and pet projects", "Skipping portfolio work"],
        answers: [0, 1]
    },
    {
        part: "Part 5",
        question: "Why is a roadmap useful for beginners?",
        options: ["It creates an order of learning", "It makes progress easier to track", "It removes the need to build apps"],
        answers: [0, 1]
    },
    {
        part: "Part 5",
        question: "Which outcomes belong near the end of a beginner roadmap?",
        options: ["Portfolio", "Projects that can be explained", "Only copied tutorial code"],
        answers: [0, 1]
    },
    {
        part: "Part 6",
        question: "Can someone start iOS development without IT experience?",
        options: ["Yes, with a clear routine", "Yes, by building small projects", "No, it is impossible"],
        answers: [0, 1]
    },
    {
        part: "Part 6",
        question: "What should a beginner practice explaining?",
        options: ["What their code does", "Why a solution works", "Nothing until they become senior"],
        answers: [0, 1]
    },
    {
        part: "Part 6",
        question: "What makes learning more manageable for beginners?",
        options: ["Small projects", "Consistent routine", "Trying to build a giant app first"],
        answers: [0, 1]
    },
    {
        part: "Part 7",
        question: "What belongs in a useful starter pack for iOS learning?",
        options: ["Swift resources", "UIKit and SwiftUI resources", "Unrelated design gossip"],
        answers: [0, 1]
    },
    {
        part: "Part 7",
        question: "How should AI tools be used while learning iOS?",
        options: ["To support understanding", "To help while building apps wisely", "To replace learning the basics completely"],
        answers: [0, 1]
    },
    {
        part: "Part 7",
        question: "Which official resources are useful for beginners?",
        options: ["Swift.org Getting Started", "Apple SwiftUI documentation and tutorials", "A random file with no examples"],
        answers: [0, 1]
    },
    {
        part: "Part 8",
        question: "Why is Git important for iOS developers?",
        options: ["It is proof of progress", "It is a safety net", "It replaces testing"],
        answers: [0, 1]
    },
    {
        part: "Part 8",
        question: "What does a professional Git workflow commonly include?",
        options: ["Feature branches", "Pull Requests and review", "Only direct commits to main"],
        answers: [0, 1]
    },
    {
        part: "Part 8",
        question: "What should commits and repositories help communicate?",
        options: ["What changed", "How the project is structured", "Private passwords"],
        answers: [0, 1]
    },
    {
        part: "Part 9",
        question: "What is a pet project?",
        options: ["A small app you build for yourself", "Practice for real development", "A project that never needs to run"],
        answers: [0, 1]
    },
    {
        part: "Part 9",
        question: "Which steps belong in starting a pet project?",
        options: ["Idea and design", "Code, GitHub, testing, and polish", "Publishing before the app opens"],
        answers: [0, 1]
    },
    {
        part: "Part 9",
        question: "Why build a pet project?",
        options: ["To practice the full development cycle", "To create something presentable", "To avoid learning from mistakes"],
        answers: [0, 1]
    },
    {
        part: "Part 10",
        question: "What should the first iOS app be?",
        options: ["Finished and understandable", "Easy to explain", "Huge before it works"],
        answers: [0, 1]
    },
    {
        part: "Part 10",
        question: "Which items belong in the quality checklist?",
        options: ["No obvious crashes", "Dark and light mode checked", "Accessibility labels added"],
        answers: [0, 1, 2]
    },
    {
        part: "Part 10",
        question: "What should happen when version 1 works?",
        options: ["Stop adding features", "Polish, document, and share it", "Delete the README"],
        answers: [0, 1]
    }
];

const toolboxParts = [
    {
        part: "Part 1",
        title: "Xcode",
        intro: "Xcode is the main workspace for building Apple-platform apps. Think of it as the place where code, UI, assets, build settings, debugging, signing, testing, archiving, and release preparation all meet.",
        sections: [
            ["What It Is For", ["Write Swift, SwiftUI, and UIKit code in the editor.", "Manage targets, build settings, assets, signing, capabilities, app icons, and launch screens.", "Build, run, debug, test, archive, and prepare the app for TestFlight or App Store delivery."]],
            ["What To Learn First", ["Navigator: the left panel where you move through files, search, issues, tests, breakpoints, and build reports.", "Inspector: the right panel where Xcode shows details for selected files, assets, views, and settings.", "Debug area: the bottom panel where logs, variables, console output, and debugger controls appear."]],
            ["Tips & Common Mistakes", ["When files turn red, Xcode usually lost the file reference. Check whether the file was moved or deleted outside Xcode.", "Read errors from the first real compiler error, not the last message. Later errors are often side effects.", "Use Product > Clean Build Folder only when builds act strange. It removes cached build output, but it does not fix bad code."]]
        ],
        highlight: "Xcode is not only a code editor. It is the control center for the whole iOS app lifecycle."
    },
    {
        part: "Part 2",
        title: "Simulator",
        intro: "Simulator lets you run iPhone and iPad builds on your Mac without a physical device. It is fast, convenient, and perfect for checking UI, navigation, app states, and many common bugs while you develop.",
        sections: [
            ["What To Test", ["Different devices: small iPhones, large iPhones, and iPads if your app supports them.", "Basic flows: launch, onboarding, login, navigation, list/detail screens, forms, loading, empty, success, and error states.", "System settings: dark mode, light mode, Dynamic Type text sizes, language changes, and basic accessibility behavior."]],
            ["Useful Tricks", ["Reset content and settings when the simulator has old data that hides a bug. This gives you a clean test device.", "Use slow animations when you need to understand transitions or layout movement.", "Test fresh install behavior by deleting the app from Simulator before running again."]],
            ["What It Cannot Replace", ["Real device performance, battery behavior, thermal behavior, camera, Bluetooth, push notifications, Face ID, and some network conditions.", "Final release confidence. Before you share a serious build, run it on a real device.", "Touch feeling. Some UI looks fine in Simulator but feels too small or awkward on an actual phone."]]
        ],
        highlight: "Use Simulator constantly, but always verify important behavior on a real device before release."
    },
    {
        part: "Part 3",
        title: "Terminal Basics",
        intro: "Terminal gives you direct control over folders, files, Git, scripts, package managers, and build tools. For beginners, the goal is not to memorize everything. The goal is to understand where you are, what a command does, and how to avoid destructive mistakes.",
        sections: [
            ["Core Commands", ["`pwd` means print working directory. It shows the folder you are currently inside.", "`ls` means list. It shows files and folders in the current folder.", "`cd` means change directory. Example: `cd MyApp` moves Terminal into the `MyApp` folder."]],
            ["More Useful Commands", ["`mkdir` creates a folder. Example: `mkdir Screenshots` creates a `Screenshots` folder.", "`touch` creates an empty file. Example: `touch README.md` creates a `README.md` file if it does not exist.", "`open .` opens the current folder in Finder. The dot means current folder.", "`clear` clears the Terminal screen so it is easier to read. It does not delete files."]],
            ["Safety Rules", ["Always run `pwd` before important commands so you know where you are.", "Use `git status` before and after Git actions. It shows changed files, staged files, and the current branch.", "Be very careful with `rm` because it removes files. Beginners should avoid it unless they fully understand the target."]]
        ],
        highlight: "Terminal is powerful because it is precise. Precision starts with knowing where you are."
    },
    {
        part: "Part 4",
        title: "Git",
        intro: "Git tracks your project history. It lets you create checkpoints, compare changes, work in branches, recover from mistakes, and collaborate without everyone overwriting each other.",
        sections: [
            ["Daily Workflow", ["`git status` shows what changed and which branch you are on.", "`git branch` shows local branches. A branch is an isolated line of work.", "`git switch main` moves you to the main branch. `git switch -c feature/name` creates a new branch and switches to it.", "`git add .` stages changes. Staging means choosing what will go into the next commit.", "`git commit -m \"message\"` saves staged changes with a message.", "`git push` sends your local commits to the remote repository."]],
            ["What To Understand", ["Working tree: your current files.", "Staging area: selected changes prepared for commit.", "Commit: a saved checkpoint.", "Remote: a hosted copy, usually on GitHub.", "Conflict: Git cannot automatically combine changes and needs your decision."]],
            ["Tips & Hacks", ["Commit when one idea is complete, not after a whole week of random work.", "Write messages that explain the change: `Add onboarding screen` is better than `update files`.", "Before pulling or switching branches, check `git status` so unfinished work does not surprise you."]]
        ],
        highlight: "Git is a safety net and a communication tool, not just a save button."
    },
    {
        part: "Part 5",
        title: "GitHub + SourceTree, Fork",
        intro: "GitHub hosts your repository online and gives your team Pull Requests, reviews, issues, project visibility, and collaboration history. Git clients like SourceTree and Fork make Git easier to see visually.",
        sections: [
            ["GitHub", ["Repository: the hosted project.", "Pull Request: a request to merge a branch after review.", "Files changed: the review area where people comment on specific lines.", "`README`: the first explanation of what the project is, how to run it, and what it includes."]],
            ["SourceTree & Fork", ["They show branches, commits, file diffs, and history in a visual way.", "They help beginners understand what changed before committing.", "They can make conflicts less scary because you can see both versions side by side."]],
            ["Tips & Common Mistakes", ["Do not approve or merge a Pull Request only because it builds. Read what changed.", "Do not commit secret keys, tokens, certificates, or private config files.", "Use a Git client for visibility, but learn the basic Terminal commands too so you understand what the client is doing."]]
        ],
        highlight: "A Git client can make Git easier to see, but Git knowledge still matters."
    },
    {
        part: "Part 6",
        title: "Figma for Developers",
        intro: "Figma is where designers usually prepare screens, components, colors, typography, spacing, flows, and assets. For an iOS developer, Figma is not only for looking at pretty screens. It is a source of implementation details.",
        sections: [
            ["What To Inspect", ["Spacing: distance between elements, margins, paddings, and section gaps.", "Typography: font size, weight, line height, and text color.", "Colors: use design tokens or named colors when available.", "Components: buttons, cards, inputs, navigation elements, and repeated patterns."]],
            ["States You Should Ask For", ["Loading state: what the screen shows while data is loading.", "Empty state: what appears when there is no content.", "Error state: what appears when something fails.", "Disabled state: what buttons or fields look like when unavailable."]],
            ["Tips & Hacks", ["If a screen repeats the same button style, build one reusable SwiftUI view or UIKit component.", "Do not export text as an image. Real text should stay real text for accessibility and localization.", "If design is missing edge cases, ask early. Guessing usually creates rework."]]
        ],
        highlight: "Figma is where UI decisions become visible before they become code."
    },
    {
        part: "Part 7",
        title: "SF Symbols",
        intro: "SF Symbols is Apple's icon library. It contains thousands of symbols designed to match Apple typography, weights, scales, and native platform style.",
        sections: [
            ["Why Use It", ["Icons look native on iOS and match Apple's visual language.", "Symbols support weights like regular, medium, semibold, and bold.", "Symbols support rendering modes such as monochrome, hierarchical, palette, and multicolor."]],
            ["How Developers Use It", ["In SwiftUI, `Image(systemName: \"heart\")` displays the heart symbol.", "In UIKit, `UIImage(systemName: \"heart\")` creates a system symbol image.", "Always check the symbol name in the SF Symbols app before using it."]],
            ["Tips & Common Mistakes", ["Choose icons for meaning, not decoration. A confusing icon makes the UI harder to use.", "Check whether the symbol is available for your minimum iOS version.", "Keep icon weight and size consistent. Random icon styles make the app feel messy."]]
        ],
        highlight: "Good icon usage makes an app feel native without inventing a custom visual language."
    },
    {
        part: "Part 8",
        title: "App Icon Generation",
        intro: "An app icon is often the first visual signal of your app. It needs to work at large size on the App Store and tiny size on the Home Screen, notifications, search, and settings.",
        sections: [
            ["What Matters", ["Use a `1024x1024` PNG source for the main `AppIcon` asset.", "Keep the idea simple enough to read at small sizes.", "Avoid tiny text, thin lines, and too many details.", "Do not manually add rounded corners. iOS applies the icon mask."]],
            ["Useful Tools", ["Figma, Sketch, Photoshop, Pixelmator, or similar tools can create clean icon artwork.", "AI image tools can help brainstorm shapes and styles, but final output needs human cleanup.", "Xcode asset catalogs store the `AppIcon` set and connect it to the app target."]],
            ["Tips & Hacks", ["Test the icon at very small sizes before accepting it.", "Use strong contrast so it does not disappear on different wallpapers.", "Keep a source file with editable layers so you can revise the icon later."]]
        ],
        highlight: "An app icon is a product signal. It should be simple, recognizable, and clean at every size."
    },
    {
        part: "Part 9",
        title: "Postman",
        intro: "Postman helps you test APIs outside your app. This is useful because you can understand the server response before writing networking code in Swift.",
        sections: [
            ["What To Test", ["`GET` requests usually read data from the server.", "`POST` requests usually create something or send data to the server.", "`PUT` and `PATCH` usually update existing data.", "`DELETE` usually removes data.", "Headers carry metadata like content type, authorization, and app version."]],
            ["Why It Helps iOS", ["You can check whether the API works before blaming your app code.", "You can inspect JSON and design Swift models from real responses.", "You can test error cases like invalid login, missing fields, expired tokens, or server failures."]],
            ["Tips & Hacks", ["Save useful requests into collections so you can reuse them.", "Use environment variables for base URLs and tokens instead of rewriting them every time.", "Never share private tokens in screenshots or public collections."]]
        ],
        highlight: "Before blaming your app networking code, verify the API outside the app."
    },
    {
        part: "Part 10",
        title: "Charles Proxy",
        intro: "Charles Proxy lets you inspect network traffic between your app and the server. It is especially useful when the app behaves differently from what you expected.",
        sections: [
            ["What It Shows", ["URL: which endpoint the app called.", "Status code: whether the server returned success, redirect, client error, or server error.", "Headers: metadata sent with the request or response.", "Payload: the request body or response body, often JSON.", "Timing: how long network steps took."]],
            ["Useful Debugging Cases", ["The app calls the wrong environment, like production instead of staging.", "Authentication token is missing or expired.", "The server response shape changed and your decoding fails.", "Caching or redirects cause confusing behavior."]],
            ["Use Carefully", ["HTTPS inspection requires certificate setup. Without it, encrypted traffic may not be readable.", "Do not expose user data, tokens, or private payloads in public screenshots.", "Use Charles for debugging and learning, not for bypassing security."]]
        ],
        highlight: "Charles helps you see what the app actually sends and receives, not what you assume it sends."
    },
    {
        part: "Part 11",
        title: "AI Tools & Agents",
        intro: "AI tools can explain errors, draft code, suggest refactors, write tests, summarize documentation, and help you explore unfamiliar APIs. Coding agents can work across multiple files when the task is clear.",
        sections: [
            ["Good Uses", ["Ask AI to explain a compiler error in beginner language.", "Ask for 2-3 implementation approaches before choosing one.", "Generate `README` drafts, test cases, UI copy, or refactor suggestions.", "Ask an agent to update related files when you already know the desired behavior."]],
            ["Prompting Tips", ["Give context: what app, what screen, what error, what you tried.", "Give constraints: SwiftUI or UIKit, minimum iOS version, no new dependencies, keep current style.", "Ask for explanations, not just code, when you are learning."]],
            ["Developer Responsibility", ["Review generated code carefully.", "Do not paste secrets, private keys, customer data, or private company code unless the tool is approved for that data.", "Run the app and tests. AI can be confident and still be wrong."]]
        ],
        highlight: "AI is strongest when you give it context, constraints, and your own judgment."
    },
    {
        part: "Part 12",
        title: "Debugging & Documentation",
        intro: "Debugging is the process of finding the real cause of a problem, not just changing code until the symptom disappears. Documentation records how the project works so future you and teammates do not have to rediscover everything.",
        sections: [
            ["Debugging Tools", ["Breakpoint: pauses code at a specific line so you can inspect values.", "Console logs: printed messages that help you follow what happened.", "`LLDB`: Xcode's debugger command system for inspecting and controlling a paused app.", "Instruments: Apple's performance tool for memory, time, leaks, and other profiling."]],
            ["Debugging Process", ["Reproduce the bug with clear steps.", "Find the smallest screen, input, or state that causes it.", "Read the stack trace. It shows where the app crashed or failed.", "Fix the cause, then test the original scenario again."]],
            ["Documentation", ["`README` should explain what the app does, how to run it, and important setup steps.", "Architecture notes explain why files are organized a certain way.", "Comments should explain non-obvious decisions, not repeat what the code already says."]]
        ],
        highlight: "Debugging finds the truth. Documentation preserves it."
    },
    {
        part: "Part 13",
        title: "Release / QA Checklist",
        intro: "A release or QA checklist helps you avoid simple mistakes before you share a build, upload to TestFlight, or submit to the App Store. Beginners often think release is one button. In real projects, release is a repeatable process.",
        sections: [
            ["QA Checks", ["Build and run on all supported device types.", "Check onboarding, login, logout, main flows, forms, empty states, loading states, errors, and offline behavior.", "Verify dark mode, light mode, accessibility labels, app icon, display name, and version/build numbers."]],
            ["Release Checks", ["Archive successfully in Xcode. Archive means creating a release-ready build package.", "Increase build number for uploaded builds so App Store Connect can distinguish them.", "Prepare screenshots, metadata, privacy notes, release notes, and test account details if needed."]],
            ["Tips & Hacks", ["Keep a reusable release checklist in the repository.", "Do not test only the happy path. Errors and empty states are where many beginner apps feel unfinished.", "After fixing a release bug, retest the affected flow from the beginning."]]
        ],
        highlight: "Shipping is a process. Checklists make that process repeatable."
    },
    {
        part: "Part 14",
        title: "Personal Tool Stack",
        intro: "A personal tool stack is the set of tools you use consistently to plan, design, build, debug, document, and ship. The goal is not to collect tools. The goal is to create a workflow you trust.",
        sections: [
            ["Starter Stack", ["Xcode for building the app.", "Simulator and real devices for testing.", "Terminal for precise commands.", "Git and GitHub for history, collaboration, and review.", "Figma for designs.", "Postman for API testing.", "SF Symbols for native icons.", "Notes, Notion, or `README` files for documentation."]],
            ["When To Add More", ["Add Charles when network debugging becomes serious.", "Add Git clients like SourceTree or Fork when you want visual history and diffs.", "Add AI tools and agents when you can clearly describe tasks and review the output."]],
            ["Tips & Hacks", ["Start simple and become good with a small set of tools.", "Remove tools you do not use. Too many tools can slow you down.", "Write down your personal workflow so you can repeat it on every new project."]]
        ],
        highlight: "The best tool stack is the one you actually use well."
    },
    {
        part: "Part 15",
        title: "How Tools Work Together",
        intro: "Real iOS development is not one tool at a time. The tools connect into a flow: understand the task, inspect the design, create a branch, build the feature, test it, debug it, review it, document it, and ship it.",
        sections: [
            ["Typical Flow", ["Read the task and Figma design so you know what to build.", "Use Git to create a branch. A branch keeps your work separate from stable code.", "Build in Xcode and run in Simulator while checking layout and app states.", "Use Postman to understand API behavior and Charles when you need to inspect real app traffic.", "Open a Pull Request on GitHub, review changes, fix feedback, and document what shipped."]],
            ["Beginner Goal", ["Do not learn tools in isolation forever.", "Use tools while building real screens and small apps.", "After each task, explain which tool helped you solve which problem.", "Your portfolio becomes stronger when you can explain both the code and the workflow."]],
            ["Tips & Hacks", ["For every feature, keep a tiny checklist: design checked, branch created, UI built, states tested, API checked, `README` updated.", "When stuck, name the category of the problem first: design, code, API, Git, build, signing, or release.", "A calm workflow beats random tool switching."]]
        ],
        highlight: "Tools become powerful when they connect into a calm, repeatable development workflow."
    }
];

const toolboxQuizQuestions = [
    { part: "Part 1", question: "What is Xcode used for in iOS development?", options: ["Writing and running app code", "Managing assets, signing, builds, and archives", "Only editing screenshots"], answers: [0, 1] },
    { part: "Part 1", question: "Which areas should beginners learn in Xcode?", options: ["Navigator and Inspector", "Debug area and Report navigator", "Random project settings without reading them"], answers: [0, 1] },
    { part: "Part 2", question: "What is Simulator useful for?", options: ["Testing different iPhone and iPad layouts", "Checking common app flows quickly", "Replacing all real-device testing forever"], answers: [0, 1] },
    { part: "Part 2", question: "What still needs real-device verification?", options: ["Performance and hardware-specific behavior", "Important release behavior", "Whether Swift files can be opened"], answers: [0, 1] },
    { part: "Part 3", question: "Which Terminal habit is safest?", options: ["Check the current folder first", "Run destructive commands casually", "Use git status before important Git actions"], answers: [0, 2] },
    { part: "Part 3", question: "Which commands are common beginner Terminal commands?", options: ["pwd, ls, cd", "git status and git push", "Make every file hidden"], answers: [0, 1] },
    { part: "Part 4", question: "What does Git help with?", options: ["Tracking project history", "Working safely in branches", "Designing app icons automatically"], answers: [0, 1] },
    { part: "Part 4", question: "What makes a good Git workflow?", options: ["Focused feature branches", "Small meaningful commits", "One giant commit with every change"], answers: [0, 1] },
    { part: "Part 5", question: "What is GitHub used for?", options: ["Hosting repositories", "Pull Requests and code review", "Compiling Swift by itself"], answers: [0, 1] },
    { part: "Part 5", question: "Why use SourceTree or Fork?", options: ["To visualize branches, commits, and diffs", "To make conflicts easier to understand", "To avoid learning Git concepts"], answers: [0, 1] },
    { part: "Part 6", question: "What should developers inspect in Figma?", options: ["Spacing, typography, colors, and components", "States and edge cases", "Only the file name"], answers: [0, 1] },
    { part: "Part 6", question: "How should developers use Figma designs?", options: ["Translate design into reusable UI components", "Ask when important states are missing", "Guess every measurement"], answers: [0, 1] },
    { part: "Part 7", question: "Why are SF Symbols useful?", options: ["They match Apple's visual language", "They support weights and rendering modes", "They are only for Android apps"], answers: [0, 1] },
    { part: "Part 7", question: "What should you check before using an SF Symbol?", options: ["Whether the meaning is clear", "Availability for the minimum iOS version", "Whether it has the longest possible name"], answers: [0, 1] },
    { part: "Part 8", question: "What matters for app icon generation?", options: ["Simple composition that reads small", "Correct source format and size", "Manually adding rounded corners"], answers: [0, 1] },
    { part: "Part 8", question: "Which tools can help create app icons?", options: ["Figma or other design tools", "AI tools for ideation with human review", "Postman collections"], answers: [0, 1] },
    { part: "Part 9", question: "What is Postman used for?", options: ["Testing API requests outside the app", "Inspecting headers, auth, bodies, and responses", "Editing Xcode signing certificates"], answers: [0, 1] },
    { part: "Part 9", question: "Why test APIs in Postman before coding?", options: ["To understand JSON and error cases", "To verify backend behavior independently", "To remove the need for models"], answers: [0, 1] },
    { part: "Part 10", question: "What does Charles Proxy help inspect?", options: ["Network requests and responses", "Headers, status codes, timing, and payloads", "SwiftUI view hierarchy only"], answers: [0, 1] },
    { part: "Part 10", question: "What should you be careful with in Charles?", options: ["Certificates and HTTPS setup", "Private tokens and user data", "Using it as a security bypass"], answers: [0, 1, 2] },
    { part: "Part 11", question: "What are good uses for AI tools?", options: ["Explaining errors", "Drafting tests, docs, and refactor ideas", "Replacing all code review"], answers: [0, 1] },
    { part: "Part 11", question: "What is still the developer's responsibility with AI output?", options: ["Review generated code", "Avoid sharing secrets", "Accept every suggestion blindly"], answers: [0, 1] },
    { part: "Part 12", question: "Which tools support debugging?", options: ["Breakpoints and Xcode debugger", "LLDB and logs", "Ignoring stack traces"], answers: [0, 1] },
    { part: "Part 12", question: "What belongs in useful documentation?", options: ["README setup steps", "Architecture notes and known limitations", "Private API keys"], answers: [0, 1] },
    { part: "Part 13", question: "What belongs in a QA checklist?", options: ["Supported devices and main flows", "Dark mode, accessibility, icon, display name", "Skipping error states"], answers: [0, 1] },
    { part: "Part 13", question: "What should be checked before release?", options: ["Archive succeeds", "Version/build numbers and release notes", "Only the app logo color"], answers: [0, 1] },
    { part: "Part 14", question: "What is a personal tool stack?", options: ["Tools used to plan, build, debug, document, and ship", "A repeatable workflow", "A random list of apps never used"], answers: [0, 1] },
    { part: "Part 14", question: "How should beginners choose tools?", options: ["Start simple", "Add tools when they solve real problems", "Install every tool before building anything"], answers: [0, 1] },
    { part: "Part 15", question: "How do iOS tools work together?", options: ["Figma informs UI, Xcode builds it, Simulator tests it", "Git and GitHub manage changes and review", "Postman and Charles are never useful"], answers: [0, 1] },
    { part: "Part 15", question: "What is the beginner goal with tools?", options: ["Use them while building real screens", "Explain which tool solved which problem", "Learn tools only in isolation forever"], answers: [0, 1] }
];

const translations = {
    en: {
        title: "Niko A. | iOS Developer",
        metaDescription: "iOS Developer portfolio - Swift, SwiftUI, UIKit, Clean Architecture",
        themeLight: "Light",
        themeDark: "Dark",
        status: "Open to work",
        roleTitle: "iOS Developer",
        roleDescription: "Building scalable iOS apps with SwiftUI & UIKit",
        workSetup: "Remote • On-site • Hybrid",
        statYears: "Years",
        statProjects: "Projects",
        statApps: "Apps",
        aboutTitle: "About Me",
        aboutOne: "• iOS developer with 5 years of experience building educational, lead-generation, and corporate apps.",
        aboutTwo: "• Working with Swift, SwiftUI, and UIKit. I collaborate closely with backend, design, and QA teams.",
        aboutThree: "• Focused on clean architecture, performance, and real user value.",
        softSkillsTitle: "Soft Skills",
        softTeam: "Team Collaboration",
        softCommunication: "Technical Communication",
        softProblem: "Problem Solving",
        softOwnership: "Ownership",
        softDetail: "Attention to Detail",
        softDebugging: "Debugging & Troubleshooting",
        softLearning: "Continuous Learning",
        hardSkillsTitle: "Hard Skills",
        hardConcurrency: "Concurrency (GCD, async/await)",
        hardMemory: "Memory Management (ARC)",
        hardPush: "Push Notifications (OneSignal, Firebase)",
        toolsTitle: "Tools",
        experienceTitle: "Experience",
        expEdu: "4+ years • 2022 – Present",
        expIsolid: "1+ year • 2025 – Present",
        expWf: "4 months • 2021",
        expSimbir: "3 months • 2021",
        educationTitle: "Education",
        projectsTitle: "Projects",
        projectIsolidDescription: "Learn programming concepts",
        projectSoliddsDescription: "Reusable SwiftUI design system",
        projectTextModerationDescription: "Native Swift Package for rule-based, on-device moderation of user-generated text",
        projectSolidfolioDescription: "Portfolio website builder",
        projectSwiftTalksDescription: "Swift & iOS learning notes for beginners",
        privateAppsTitle: "3 Private Apps by request*",
        privateAppsDescription: "Educational & Corporate Apps",
        connectTitle: "Connect"
    },
    es: {
        title: "Niko A. | Desarrollador iOS",
        metaDescription: "Portafolio de desarrollador iOS - Swift, SwiftUI, UIKit, Clean Architecture",
        themeLight: "Claro",
        themeDark: "Oscuro",
        status: "Disponible para trabajar",
        roleTitle: "Desarrollador iOS",
        roleDescription: "Creo apps iOS escalables con SwiftUI y UIKit",
        workSetup: "Remoto • Presencial • Híbrido",
        statYears: "Años",
        statProjects: "Proyectos",
        statApps: "Apps",
        aboutTitle: "Sobre mí",
        aboutOne: "• Desarrollador iOS con 5 años de experiencia creando apps educativas, de generación de leads y corporativas.",
        aboutTwo: "• Trabajo con Swift, SwiftUI y UIKit. Colaboro de cerca con equipos de backend, diseño y QA.",
        aboutThree: "• Enfocado en arquitectura limpia, rendimiento y valor real para el usuario.",
        softSkillsTitle: "Habilidades blandas",
        softTeam: "Colaboración en equipo",
        softCommunication: "Comunicación técnica",
        softProblem: "Resolución de problemas",
        softOwnership: "Responsabilidad",
        softDetail: "Atención al detalle",
        softDebugging: "Depuración y diagnóstico",
        softLearning: "Aprendizaje continuo",
        hardSkillsTitle: "Habilidades técnicas",
        hardConcurrency: "Concurrencia (GCD, async/await)",
        hardMemory: "Gestión de memoria (ARC)",
        hardPush: "Notificaciones push (OneSignal, Firebase)",
        toolsTitle: "Herramientas",
        experienceTitle: "Experiencia",
        expEdu: "4+ años • 2022 – Presente",
        expIsolid: "1+ año • 2025 – Presente",
        expWf: "4 meses • 2021",
        expSimbir: "3 meses • 2021",
        educationTitle: "Educación",
        projectsTitle: "Proyectos",
        projectIsolidDescription: "Aprendizaje de conceptos de programación",
        projectSoliddsDescription: "Sistema de diseño reutilizable en SwiftUI",
        projectTextModerationDescription: "Paquete nativo de Swift para la moderación de texto generado por usuarios, basada en reglas y realizada en el dispositivo",
        projectSolidfolioDescription: "Constructor de sitios de portafolio",
        projectSwiftTalksDescription: "Notas de Swift e iOS para principiantes",
        privateAppsTitle: "3 apps privadas por solicitud*",
        privateAppsDescription: "Apps educativas y corporativas",
        connectTitle: "Conecta"
    },
    th: {
        title: "Niko A. | นักพัฒนา iOS",
        metaDescription: "พอร์ตโฟลิโอนักพัฒนา iOS - Swift, SwiftUI, UIKit, Clean Architecture",
        themeLight: "สว่าง",
        themeDark: "มืด",
        status: "พร้อมรับงาน",
        roleTitle: "นักพัฒนา iOS",
        roleDescription: "สร้างแอป iOS ที่ขยายระบบได้ด้วย SwiftUI และ UIKit",
        workSetup: "ทำงานทางไกล • ที่ออฟฟิศ • ไฮบริด",
        statYears: "ปี",
        statProjects: "โปรเจกต์",
        statApps: "แอป",
        aboutTitle: "เกี่ยวกับฉัน",
        aboutOne: "• นักพัฒนา iOS ที่มีประสบการณ์ 5 ปีในการสร้างแอปด้านการศึกษา การสร้างลีด และแอปองค์กร",
        aboutTwo: "• ทำงานกับ Swift, SwiftUI และ UIKit และร่วมงานใกล้ชิดกับทีม backend, design และ QA",
        aboutThree: "• ให้ความสำคัญกับ clean architecture ประสิทธิภาพ และคุณค่าจริงสำหรับผู้ใช้",
        softSkillsTitle: "ทักษะการทำงานร่วมกัน",
        softTeam: "การทำงานร่วมกับทีม",
        softCommunication: "การสื่อสารเชิงเทคนิค",
        softProblem: "การแก้ปัญหา",
        softOwnership: "ความรับผิดชอบต่องาน",
        softDetail: "ใส่ใจรายละเอียด",
        softDebugging: "การดีบักและวิเคราะห์ปัญหา",
        softLearning: "การเรียนรู้อย่างต่อเนื่อง",
        hardSkillsTitle: "ทักษะทางเทคนิค",
        hardConcurrency: "Concurrency (GCD, async/await)",
        hardMemory: "การจัดการหน่วยความจำ (ARC)",
        hardPush: "Push Notifications (OneSignal, Firebase)",
        toolsTitle: "เครื่องมือ",
        experienceTitle: "ประสบการณ์",
        expEdu: "มากกว่า 4 ปี • 2022 – ปัจจุบัน",
        expIsolid: "มากกว่า 1 ปี • 2025 – ปัจจุบัน",
        expWf: "4 เดือน • 2021",
        expSimbir: "3 เดือน • 2021",
        educationTitle: "การศึกษา",
        projectsTitle: "โปรเจกต์",
        projectIsolidDescription: "เรียนรู้แนวคิดด้านการเขียนโปรแกรม",
        projectSoliddsDescription: "ระบบดีไซน์ SwiftUI ที่นำกลับมาใช้ซ้ำได้",
        projectTextModerationDescription: "Swift Package แบบเนทีฟสำหรับการตรวจสอบข้อความที่ผู้ใช้สร้างขึ้นตามกฎ โดยประมวลผลบนอุปกรณ์",
        projectSolidfolioDescription: "เครื่องมือสร้างเว็บไซต์พอร์ตโฟลิโอ",
        projectSwiftTalksDescription: "โน้ตการเรียนรู้ Swift และ iOS สำหรับผู้เริ่มต้น",
        privateAppsTitle: "3 แอปส่วนตัวตามคำขอ*",
        privateAppsDescription: "แอปด้านการศึกษาและองค์กร",
        connectTitle: "ช่องทางออนไลน์"
    }
};

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
}

function setTheme(theme) {
    const nextTheme = theme === "light" ? "light" : "dark";

    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    themeButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.theme === nextTheme));
}

function setLanguage(language) {
    const dictionary = translations[language] || translations.en;

    document.documentElement.lang = language;
    document.title = dictionary.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", dictionary.metaDescription);
    }

    translatableItems.forEach(item => {
        const key = item.dataset.i18n;
        if (dictionary[key]) {
            item.textContent = dictionary[key];
        }
    });

    languageButtons.forEach(btn => {
        const isActive = btn.dataset.lang === language;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-checked", isActive ? "true" : "false");
    });

    if (languageCurrentButton) {
        languageCurrentButton.textContent = languageLabels[language] || languageLabels.en;
    }

    localStorage.setItem("language", language);
}

function closeLanguageMenu() {
    languageSwitch?.classList.remove("is-open");
    languageCurrentButton?.setAttribute("aria-expanded", "false");
}

function toggleLanguageMenu() {
    const isOpen = languageSwitch?.classList.toggle("is-open");
    languageCurrentButton?.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

const savedTheme = localStorage.getItem("theme") === "light" ? "light" : "dark";
const savedLanguage = localStorage.getItem("language") || "en";

setTheme(savedTheme);
setLanguage(savedLanguage);

function readStoredLikes() {
    try {
        return JSON.parse(localStorage.getItem(likesStorageKey)) || {};
    } catch {
        return {};
    }
}

function saveStoredLikes(likes) {
    try {
        localStorage.setItem(likesStorageKey, JSON.stringify(likes));
    } catch {
        return;
    }
}

function renderLikeControl(control, isLiked) {
    const button = control.querySelector(".like-button");

    button?.setAttribute("aria-pressed", isLiked ? "true" : "false");

    if (button) {
        button.setAttribute("aria-label", isLiked ? "Unlike this post" : "Like this post");
    }
}

function getStoredLikeValue(value) {
    if (typeof value === "object" && value !== null) {
        return Boolean(value.liked);
    }

    return Boolean(value);
}

function setupLikes() {
    const likes = readStoredLikes();

    likeControls.forEach(control => {
        const talkId = control.dataset.talkId;
        const button = control.querySelector(".like-button");

        if (!talkId || !button) {
            return;
        }

        let isLiked = getStoredLikeValue(likes[talkId]);
        likes[talkId] = isLiked;
        renderLikeControl(control, isLiked);

        button.addEventListener("click", () => {
            isLiked = !isLiked;
            likes[talkId] = isLiked;
            saveStoredLikes(likes);
            renderLikeControl(control, isLiked);
        });
    });

    saveStoredLikes(likes);
}

setupLikes();

themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        setTheme(btn.dataset.theme);
    });
});

languageButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        setLanguage(btn.dataset.lang);
        closeLanguageMenu();
    });
});

languageCurrentButton?.addEventListener("click", event => {
    event.stopPropagation();
    toggleLanguageMenu();
});

document.addEventListener("click", event => {
    if (!languageSwitch?.contains(event.target)) {
        closeLanguageMenu();
    }
});

function openSwiftTalks() {
    if (!swiftTalksScreen) {
        return;
    }

    swiftTalksScreen.classList.add("is-open");
    swiftTalksScreen.setAttribute("aria-hidden", "false");
    document.body.classList.add("talks-open");
    closeSwiftTalksButton?.focus();
}

function showSwiftIntroTrack() {
    if (!swiftTalksScreen) {
        return;
    }

    swiftTalksScreen.classList.remove("is-viewing-toolbox");
    swiftTalksScreen.classList.add("is-viewing-intro");
}

function showToolboxTrack() {
    if (!swiftTalksScreen) {
        return;
    }

    renderToolboxParts();
    swiftTalksScreen.classList.remove("is-viewing-intro");
    swiftTalksScreen.classList.add("is-viewing-toolbox");
}

function showSwiftTalkTopics() {
    if (!swiftTalksScreen) {
        return;
    }

    closeSwiftQuiz({ keepHash: true });
    closeToolboxQuiz({ keepHash: true });
    swiftTalksScreen.classList.remove("is-viewing-intro");
    swiftTalksScreen.classList.remove("is-viewing-toolbox");
}

function openSwiftQuiz() {
    if (!swiftQuizScreen) {
        return;
    }

    openSwiftTalks();
    showSwiftIntroTrack();
    renderSwiftQuiz();
    swiftQuizScreen.classList.add("is-open");
    swiftQuizScreen.setAttribute("aria-hidden", "false");
    document.body.classList.add("quiz-open");
    closeSwiftQuizButton?.focus();
}

function closeSwiftQuiz(options = {}) {
    if (!swiftQuizScreen) {
        return;
    }

    swiftQuizScreen.classList.remove("is-open");
    swiftQuizScreen.setAttribute("aria-hidden", "true");
    document.body.classList.remove("quiz-open");

    if (!options.keepHash && isSwiftQuizHash()) {
        window.location.hash = "swift-talks";
    }

    openSwiftQuizButtons[0]?.focus();
}

function openToolboxQuiz() {
    if (!toolboxQuizScreen) {
        return;
    }

    openSwiftTalks();
    showToolboxTrack();
    renderToolboxQuiz();
    toolboxQuizScreen.classList.add("is-open");
    toolboxQuizScreen.setAttribute("aria-hidden", "false");
    document.body.classList.add("quiz-open");
    closeToolboxQuizButton?.focus();
}

function closeToolboxQuiz(options = {}) {
    if (!toolboxQuizScreen) {
        return;
    }

    toolboxQuizScreen.classList.remove("is-open");
    toolboxQuizScreen.setAttribute("aria-hidden", "true");
    document.body.classList.remove("quiz-open");

    if (!options.keepHash && window.location.hash === toolboxQuizHash) {
        window.location.hash = "swift-talks";
    }
}

function closeSwiftTalks(options = {}) {
    if (!swiftTalksScreen) {
        return;
    }

    closeSwiftQuiz({ keepHash: true });
    closeToolboxQuiz({ keepHash: true });
    swiftTalksScreen.classList.remove("is-open");
    swiftTalksScreen.classList.remove("is-viewing-intro");
    swiftTalksScreen.classList.remove("is-viewing-toolbox");
    swiftTalksScreen.setAttribute("aria-hidden", "true");
    document.body.classList.remove("talks-open");

    if (!options.keepHash && (window.location.hash === swiftTalksHash || isSwiftQuizHash() || window.location.hash === toolboxQuizHash)) {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }

    openSwiftTalksButton?.focus();
}

openSwiftTalksButton?.addEventListener("click", () => {
    if (window.location.hash !== swiftTalksHash) {
        window.location.hash = "swift-talks";
    }

    openSwiftTalks();
    showSwiftTalkTopics();
});
closeSwiftTalksButton?.addEventListener("click", closeSwiftTalks);
openSwiftIntroTrackButton?.addEventListener("click", () => {
    showSwiftIntroTrack();
});
openToolboxTrackButton?.addEventListener("click", () => {
    showToolboxTrack();
});
backToTalkTopicsButton?.addEventListener("click", () => {
    showSwiftTalkTopics();
    openSwiftIntroTrackButton?.focus();
});
backToTalkTopicsButtons.forEach(button => {
    button.addEventListener("click", () => {
        showSwiftTalkTopics();
        openSwiftIntroTrackButton?.focus();
    });
});
openSwiftQuizButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (window.location.hash !== swiftQuizHash) {
            window.location.hash = swiftQuizHash.slice(1);
        }

        openSwiftQuiz();
    });
});
openToolboxQuizButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (window.location.hash !== toolboxQuizHash) {
            window.location.hash = toolboxQuizHash.slice(1);
        }

        openToolboxQuiz();
    });
});
closeSwiftQuizButton?.addEventListener("click", closeSwiftQuiz);
closeToolboxQuizButton?.addEventListener("click", closeToolboxQuiz);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeLanguageMenu();
    }

    if (event.key === "Escape" && swiftQuizScreen?.classList.contains("is-open")) {
        closeSwiftQuiz();
        return;
    }

    if (event.key === "Escape" && toolboxQuizScreen?.classList.contains("is-open")) {
        closeToolboxQuiz();
        return;
    }

    if (event.key === "Escape" && swiftTalksScreen?.classList.contains("is-open")) {
        closeSwiftTalks();
    }
});

function syncSwiftTalksWithHash() {
    if (window.location.hash === toolboxQuizHash) {
        openToolboxQuiz();
    } else if (isSwiftQuizHash()) {
        openSwiftQuiz();
    } else if (window.location.hash === swiftTalksHash) {
        openSwiftTalks();
        showSwiftTalkTopics();
    } else if (swiftTalksScreen?.classList.contains("is-open")) {
        closeSwiftTalks({ keepHash: true });
    }
}

window.addEventListener("hashchange", syncSwiftTalksWithHash);
syncSwiftTalksWithHash();

function isSwiftQuizHash() {
    const rawHash = window.location.hash;
    let decodedHash = rawHash;

    try {
        decodedHash = decodeURIComponent(rawHash);
    } catch {
        decodedHash = rawHash;
    }

    return decodedHash === swiftQuizHash || decodedHash === legacySwiftQuizHash;
}

function renderSwiftQuiz() {
    if (!swiftQuizForm || swiftQuizForm.dataset.rendered === "true") {
        return;
    }

    let currentPart = "";

    swiftIntroQuizQuestions.forEach((quizQuestion, questionIndex) => {
        if (quizQuestion.part !== currentPart) {
            currentPart = quizQuestion.part;
            const partLabel = document.createElement("div");
            partLabel.className = "swift-quiz-part";
            partLabel.textContent = currentPart;
            swiftQuizForm.appendChild(partLabel);
        }

        const section = document.createElement("section");
        section.className = "swift-quiz-question";
        section.id = `swift-quiz-q${questionIndex}`;

        const title = document.createElement("strong");
        title.textContent = `${questionIndex + 1}. ${quizQuestion.question}`;
        section.appendChild(title);

        quizQuestion.options.forEach((option, optionIndex) => {
            const label = document.createElement("label");
            label.className = "swift-quiz-option";

            const input = document.createElement("input");
            input.type = "checkbox";
            input.name = `swift-quiz-q${questionIndex}`;
            input.value = optionIndex;

            const text = document.createElement("span");
            text.textContent = option;

            label.append(input, text);
            section.appendChild(label);
        });

        const feedback = document.createElement("div");
        feedback.className = "swift-quiz-feedback";
        feedback.id = `swift-quiz-feedback${questionIndex}`;
        section.appendChild(feedback);
        swiftQuizForm.appendChild(section);
    });

    swiftQuizForm.dataset.rendered = "true";
}

function arraysEqual(a, b) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
}

function gradeSwiftQuiz() {
    renderSwiftQuiz();

    let score = 0;

    swiftIntroQuizQuestions.forEach((quizQuestion, questionIndex) => {
        const question = document.querySelector(`#swift-quiz-q${questionIndex}`);
        const selected = [...document.querySelectorAll(`input[name="swift-quiz-q${questionIndex}"]:checked`)]
            .map(input => Number(input.value))
            .sort((a, b) => a - b);
        const correct = [...quizQuestion.answers].sort((a, b) => a - b);
        const isCorrect = arraysEqual(selected, correct);

        question?.classList.remove("correct-question", "wrong-question");
        question?.classList.add(isCorrect ? "correct-question" : "wrong-question");

        if (isCorrect) {
            score++;
        }

        question?.querySelectorAll(".swift-quiz-option").forEach((label, optionIndex) => {
            label.classList.remove("correct-selected", "wrong-selected", "missed-correct");
            const input = label.querySelector("input");
            const shouldBeSelected = correct.includes(optionIndex);

            if (input.checked && shouldBeSelected) {
                label.classList.add("correct-selected");
            } else if (input.checked && !shouldBeSelected) {
                label.classList.add("wrong-selected");
            } else if (!input.checked && shouldBeSelected) {
                label.classList.add("missed-correct");
            }
        });

        const letters = correct.map(index => String.fromCharCode(65 + index)).join(", ");
        const noun = correct.length > 1 ? "answers" : "answer";
        const feedback = document.querySelector(`#swift-quiz-feedback${questionIndex}`);

        if (feedback) {
            feedback.textContent = isCorrect ? `Correct. Answer: ${letters}` : `Incorrect. Correct ${noun}: ${letters}`;
        }
    });

    const percent = Math.round((score / swiftIntroQuizQuestions.length) * 100);
    if (swiftQuizScore) {
        swiftQuizScore.textContent = `Score: ${score} / ${swiftIntroQuizQuestions.length} (${percent}%)`;
    }

    swiftQuizLegend?.classList.add("is-visible");
    swiftQuizScore?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetSwiftQuiz() {
    swiftQuizForm?.reset();
    document.querySelectorAll(".swift-quiz-question").forEach(question => {
        question.classList.remove("correct-question", "wrong-question");
    });
    document.querySelectorAll(".swift-quiz-option").forEach(option => {
        option.classList.remove("correct-selected", "wrong-selected", "missed-correct");
    });
    document.querySelectorAll(".swift-quiz-feedback").forEach(feedback => {
        feedback.textContent = "";
    });
    if (swiftQuizScore) {
        swiftQuizScore.textContent = `${swiftIntroQuizQuestions.length} questions`;
    }
    swiftQuizLegend?.classList.remove("is-visible");
    swiftQuizScreen?.scrollTo({ top: 0, behavior: "smooth" });
}

finishSwiftQuizButton?.addEventListener("click", gradeSwiftQuiz);
resetSwiftQuizButton?.addEventListener("click", resetSwiftQuiz);

function renderToolboxParts() {
    if (!toolboxAccordion || toolboxAccordion.dataset.rendered === "true") {
        return;
    }

    toolboxParts.forEach((part, index) => {
        const article = document.createElement("article");
        article.className = `talk-card talk-accordion-item${index === 0 ? " is-expanded" : ""}`;
        article.dataset.talkId = `toolbox-part${index + 1}`;

        const trigger = document.createElement("button");
        trigger.type = "button";
        trigger.className = "talk-accordion-trigger";
        trigger.setAttribute("aria-expanded", index === 0 ? "true" : "false");

        const triggerText = document.createElement("span");
        const kicker = document.createElement("span");
        kicker.className = "talks-kicker";
        kicker.textContent = part.part;
        const title = document.createElement("span");
        title.className = "talk-accordion-title";
        title.textContent = part.title;
        triggerText.append(kicker, title);

        const chevron = document.createElement("span");
        chevron.className = "talk-chevron";
        chevron.setAttribute("aria-hidden", "true");
        trigger.append(triggerText, chevron);

        const panel = document.createElement("div");
        panel.className = "talk-accordion-panel";

        const intro = document.createElement("p");
        intro.className = "talk-intro";
        intro.textContent = part.intro;
        panel.appendChild(intro);

        const grid = document.createElement("div");
        grid.className = "talk-grid";
        part.sections.forEach(([heading, items]) => {
            const section = document.createElement("div");
            const h3 = document.createElement("h3");
            h3.textContent = heading;
            const list = document.createElement("ul");
            items.forEach(item => {
                const li = document.createElement("li");
                appendFormattedText(li, item);
                list.appendChild(li);
            });
            section.append(h3, list);
            grid.appendChild(section);
        });
        panel.appendChild(grid);

        const highlight = document.createElement("div");
        highlight.className = "talk-highlight talk-highlight-rich";
        const highlightLabel = document.createElement("span");
        highlightLabel.textContent = "Tool mindset";
        const highlightText = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = part.highlight;
        highlightText.appendChild(strong);
        highlight.append(highlightLabel, highlightText);
        panel.appendChild(highlight);

        trigger.addEventListener("click", () => {
            const isExpanded = article.classList.toggle("is-expanded");
            trigger.setAttribute("aria-expanded", isExpanded ? "true" : "false");
        });

        article.append(trigger, panel);
        toolboxAccordion.appendChild(article);
    });

    toolboxAccordion.dataset.rendered = "true";
}

function appendFormattedText(element, text) {
    text.split(/(`[^`]+`)/g).forEach(part => {
        if (!part) {
            return;
        }

        if (part.startsWith("`") && part.endsWith("`")) {
            const code = document.createElement("code");
            code.textContent = part.slice(1, -1);
            element.appendChild(code);
            return;
        }

        element.appendChild(document.createTextNode(part));
    });
}

function renderToolboxQuiz() {
    if (!toolboxQuizForm || toolboxQuizForm.dataset.rendered === "true") {
        return;
    }

    renderQuizQuestions(toolboxQuizForm, toolboxQuizQuestions, "toolbox-quiz");
}

function renderQuizQuestions(form, questions, prefix) {
    let currentPart = "";

    questions.forEach((quizQuestion, questionIndex) => {
        if (quizQuestion.part !== currentPart) {
            currentPart = quizQuestion.part;
            const partLabel = document.createElement("div");
            partLabel.className = "swift-quiz-part";
            partLabel.textContent = currentPart;
            form.appendChild(partLabel);
        }

        const section = document.createElement("section");
        section.className = "swift-quiz-question";
        section.id = `${prefix}-q${questionIndex}`;

        const title = document.createElement("strong");
        title.textContent = `${questionIndex + 1}. ${quizQuestion.question}`;
        section.appendChild(title);

        quizQuestion.options.forEach((option, optionIndex) => {
            const label = document.createElement("label");
            label.className = "swift-quiz-option";

            const input = document.createElement("input");
            input.type = "checkbox";
            input.name = `${prefix}-q${questionIndex}`;
            input.value = optionIndex;

            const text = document.createElement("span");
            text.textContent = option;

            label.append(input, text);
            section.appendChild(label);
        });

        const feedback = document.createElement("div");
        feedback.className = "swift-quiz-feedback";
        feedback.id = `${prefix}-feedback${questionIndex}`;
        section.appendChild(feedback);
        form.appendChild(section);
    });

    form.dataset.rendered = "true";
}

function gradeToolboxQuiz() {
    renderToolboxQuiz();
    gradeQuiz(toolboxQuizQuestions, "toolbox-quiz", toolboxQuizScore, toolboxQuizLegend);
}

function resetToolboxQuiz() {
    resetQuiz(toolboxQuizForm, toolboxQuizQuestions, toolboxQuizScore, toolboxQuizLegend, toolboxQuizScreen);
}

function gradeQuiz(questions, prefix, scoreElement, legendElement) {
    let score = 0;

    questions.forEach((quizQuestion, questionIndex) => {
        const question = document.querySelector(`#${prefix}-q${questionIndex}`);
        const selected = [...document.querySelectorAll(`input[name="${prefix}-q${questionIndex}"]:checked`)]
            .map(input => Number(input.value))
            .sort((a, b) => a - b);
        const correct = [...quizQuestion.answers].sort((a, b) => a - b);
        const isCorrect = arraysEqual(selected, correct);

        question?.classList.remove("correct-question", "wrong-question");
        question?.classList.add(isCorrect ? "correct-question" : "wrong-question");

        if (isCorrect) {
            score++;
        }

        question?.querySelectorAll(".swift-quiz-option").forEach((label, optionIndex) => {
            label.classList.remove("correct-selected", "wrong-selected", "missed-correct");
            const input = label.querySelector("input");
            const shouldBeSelected = correct.includes(optionIndex);

            if (input.checked && shouldBeSelected) {
                label.classList.add("correct-selected");
            } else if (input.checked && !shouldBeSelected) {
                label.classList.add("wrong-selected");
            } else if (!input.checked && shouldBeSelected) {
                label.classList.add("missed-correct");
            }
        });

        const letters = correct.map(index => String.fromCharCode(65 + index)).join(", ");
        const noun = correct.length > 1 ? "answers" : "answer";
        const feedback = document.querySelector(`#${prefix}-feedback${questionIndex}`);

        if (feedback) {
            feedback.textContent = isCorrect ? `Correct. Answer: ${letters}` : `Incorrect. Correct ${noun}: ${letters}`;
        }
    });

    const percent = Math.round((score / questions.length) * 100);
    if (scoreElement) {
        scoreElement.textContent = `Score: ${score} / ${questions.length} (${percent}%)`;
    }

    legendElement?.classList.add("is-visible");
    scoreElement?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetQuiz(form, questions, scoreElement, legendElement, scrollElement) {
    form?.reset();
    form?.querySelectorAll(".swift-quiz-question").forEach(question => {
        question.classList.remove("correct-question", "wrong-question");
    });
    form?.querySelectorAll(".swift-quiz-option").forEach(option => {
        option.classList.remove("correct-selected", "wrong-selected", "missed-correct");
    });
    form?.querySelectorAll(".swift-quiz-feedback").forEach(feedback => {
        feedback.textContent = "";
    });
    if (scoreElement) {
        scoreElement.textContent = `${questions.length} questions`;
    }
    legendElement?.classList.remove("is-visible");
    scrollElement?.scrollTo({ top: 0, behavior: "smooth" });
}

finishToolboxQuizButton?.addEventListener("click", gradeToolboxQuiz);
resetToolboxQuizButton?.addEventListener("click", resetToolboxQuiz);

accordionTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
        const item = trigger.closest(".talk-accordion-item");
        const isExpanded = item?.classList.toggle("is-expanded");

        trigger.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    });
});

function copyWithFallback(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}

copyTalkButtons.forEach(button => {
    button.addEventListener("click", async () => {
        const post = swiftTalkPosts[button.dataset.talkId];

        if (!post) {
            return;
        }

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(post);
            } else {
                copyWithFallback(post);
            }

            button.textContent = "Copied";
            setTimeout(() => {
                button.textContent = "Copy post";
            }, 1800);
        } catch {
            button.textContent = "Copy failed";
            setTimeout(() => {
                button.textContent = "Copy post";
            }, 1800);
        }
    });
});

translateTalkButtons.forEach(button => {
    button.addEventListener("click", () => {
        const post = swiftTalkPosts[button.dataset.talkId];

        if (!post) {
            return;
        }

        const translateUrl = new URL("https://translate.google.com/");
        translateUrl.searchParams.set("sl", "en");
        translateUrl.searchParams.set("tl", "auto");
        translateUrl.searchParams.set("text", post);
        translateUrl.searchParams.set("op", "translate");

        window.open(translateUrl.toString(), "_blank", "noopener,noreferrer");
    });
});
