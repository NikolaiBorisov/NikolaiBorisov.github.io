const themeButtons = document.querySelectorAll(".theme-switch button");
const languageSwitch = document.querySelector(".lang-switch");
const languageCurrentButton = document.querySelector("#lang-current");
const languageButtons = document.querySelectorAll(".lang-options button");
const translatableItems = document.querySelectorAll("[data-i18n]");
const openSwiftTalksButton = document.querySelector("#open-swift-talks");
const closeSwiftTalksButton = document.querySelector("#close-swift-talks");
const swiftTalksScreen = document.querySelector("#swift-talks");
const openCoreSwiftTrackButton = document.querySelector("#open-core-swift-track");
const openSwiftIntroTrackButton = document.querySelector("#open-swift-intro-track");
const openToolboxTrackButton = document.querySelector("#open-toolbox-track");
const openPortfolioTrackButton = document.querySelector("#open-portfolio-track");
const backToTalkTopicsButton = document.querySelector("#back-to-talk-topics");
const backToTalkTopicsButtons = document.querySelectorAll(".back-to-talk-topics");
const coreSwiftAccordion = document.querySelector("#core-swift-accordion");
const toolboxAccordion = document.querySelector("#toolbox-accordion");
const portfolioAccordion = document.querySelector("#portfolio-accordion");
const openCoreSwiftQuizButtons = document.querySelectorAll(".open-core-swift-quiz");
const coreSwiftQuizScreen = document.querySelector("#core-swift-quiz");
const coreSwiftQuizForm = document.querySelector("#core-swift-quiz-form");
const closeCoreSwiftQuizButton = document.querySelector("#close-core-swift-quiz");
const finishCoreSwiftQuizButton = document.querySelector("#finish-core-swift-quiz");
const resetCoreSwiftQuizButton = document.querySelector("#reset-core-swift-quiz");
const coreSwiftQuizScore = document.querySelector("#core-swift-quiz-score");
const coreSwiftQuizLegend = document.querySelector("#core-swift-quiz-legend");
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
const portfolioQuizScreen = document.querySelector("#portfolio-quiz");
const portfolioQuizForm = document.querySelector("#portfolio-quiz-form");
const closePortfolioQuizButton = document.querySelector("#close-portfolio-quiz");
const finishPortfolioQuizButton = document.querySelector("#finish-portfolio-quiz");
const resetPortfolioQuizButton = document.querySelector("#reset-portfolio-quiz");
const portfolioQuizScore = document.querySelector("#portfolio-quiz-score");
const portfolioQuizLegend = document.querySelector("#portfolio-quiz-legend");
const openPortfolioQuizButtons = document.querySelectorAll(".open-portfolio-quiz");
const accordionTriggers = document.querySelectorAll(".talk-accordion-trigger");
const copyTalkButtons = document.querySelectorAll(".copy-talk");
const translateTalkButtons = document.querySelectorAll(".translate-talk");
const likeControls = document.querySelectorAll(".talk-like");
const likesStorageKey = "swiftTalkLikes";
const swiftTalksHash = "#swift-talks";
const coreSwiftHash = "#core-swift";
const swiftQuizHash = "#swift-intro-quiz";
const legacySwiftQuizHash = "#swift-talks/#swift-intro-quiz";
const coreSwiftQuizHash = "#core-swift-quiz";
const toolboxQuizHash = "#ios-dev-toolbox-quiz";
const portfolioQuizHash = "#portfolio-website-quiz";
const languageLabels = {
    en: "🇬🇧",
    es: "🇪🇸",
    th: "🇹🇭"
};

const swiftTalkPosts = {
    part1: `🔶 Swift Code
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
#SwiftCode`,
    part2: `🔶 Swift Code

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

#Swift #SwiftCode #iOS`,
    part3: `🔶 Swift Code

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

#Swift #SwiftCode #iOS`,
    part4: `🔶 Swift Code

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

#Swift #SwiftCode #iOS`,
    part5: `🔶 Swift Code

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

#Swift #SwiftCode #iOS`,
    part6: `🔶 Swift Code

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

#Swift #SwiftCode #iOS`,
    part7: `🔶 Swift Code

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

#Swift #SwiftCode #iOS`,
    part8: `🔶 Swift Code

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

#Swift #SwiftCode #iOS`,
    part9: `🔶 Swift Code

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

#Swift #SwiftCode #iOS`,
    part10: `🔶 Swift Code

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

#Swift #SwiftCode #iOS`
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

const coreSwiftParts = [
    {
        part: "Part 1",
        title: "Variables and Constants",
        intro: "When writing a program, we constantly work with values like text, numbers, and true/false decisions. Instead of using raw values everywhere, Swift lets us give values names with `let` and `var`, so the code is easier to read and reuse.",
        sections: [
            ["let vs var", ["`let` creates a constant. After the value is assigned, it cannot be reassigned.", "`var` creates a variable. The value can be reassigned later.", "`let` and `var` are about mutability, not about the value's type."]],
            ["Type Safety", ["Every variable and constant in Swift has a type.", "`var` means the value may change, but its type does not change.", "Type inference means Swift can figure out the type from the assigned value. Swift still knows the type."]],
            ["Naming", ["Names should explain what the value represents.", "Swift uses lower camel case by default for variables, constants, functions, and methods, such as `userName`, `profileImageURL`, and `isLoggedIn`.", "Types use upper camel case, such as `UserProfile`, `LoginViewModel`, or `NetworkService`.", "You may see `snake_case` in JSON, backend APIs, databases, Python, or file names, but it is not the normal style for Swift properties.", "Other cases exist, but the most important beginner rule is: follow the language and team style around you."]],
            ["Common Mistakes", ["Using `var` everywhere just in case.", "Thinking `var` can change from `Int` to `String`.", "Confusing the keyword, identifier, type, and value in a declaration."]]
        ],
        examples: [
            {
                label: "Why let and var exist",
                language: "swift",
                code: `let playerName = "Neo" // the player's name stays the same
var score = 0            // the score changes during the game
score = 10               // update score after an action
score = 20               // update score again later`
            },
            {
                label: "Constants cannot be reassigned",
                language: "swift",
                code: `let name = "Neo"        // create a constant String
// name = "Thomas"     // error: let constants cannot change

let appName = "iSOLID"  // app name should stay stable
let maximumAttempts = 3 // fixed rule for this feature`
            },
            {
                label: "Variables can change value",
                language: "swift",
                code: `var isLoggedIn = false  // user starts logged out
var unreadMessages = 3  // current number of unread messages

isLoggedIn = true       // update when login succeeds
unreadMessages = 2      // update after one message is read`
            },
            {
                label: "var does not change the type",
                language: "swift",
                code: `var age: Int = 25  // age is an Int
age = 26             // ok: another Int
// age = "Twenty"    // error: String cannot become Int`
            },
            {
                label: "Type inference",
                language: "swift",
                code: `let name = "Neo"      // Swift infers String
var age = 25         // Swift infers Int
let isLoggedIn = true // Swift infers Bool

// name = 42         // error: name is still a String`
            },
            {
                label: "Declaration breakdown",
                language: "swift",
                code: `let userName: String = "Neo" // let = constant
// userName is the identifier    // the name used in code
// String is the type            // the kind of value stored
// "Neo" is the value            // the actual stored text`
            },
            {
                label: "Good names",
                language: "swift",
                code: `let userName = "Neo"       // clear: user's name
let unreadMessageCount = 5 // clear: number of unread messages
let isLoggedIn = true      // clear: yes/no state
// let x = "Neo"           // vague: meaning is hidden`
            },
            {
                label: "Naming cases",
                language: "swift",
                code: `let userName = "Neo"           // camelCase: Swift variables
let profileImageURL = "avatar" // camelCase: acronyms may stay uppercase
struct UserProfile {}          // UpperCamelCase: Swift types
// let user_name = "Neo"       // snake_case: common in JSON, not Swift style
// let user-name = "Neo"       // kebab-case: invalid for Swift identifiers`
            },
            {
                label: "What Can let and var Store?",
                language: "text",
                code: `let and var can be used with essentially any Swift type.

Category        Examples
Basic types     String, Int, Double, Bool, Character
Collections     Array, Dictionary, Set
Optionals       String?, Int?
Tuples          (String, Int)
Custom types    struct, class, enum instances
Functions       (Int, Int) -> Int
Closures        () -> Void
Protocol types  any SomeProtocol`
            }
        ],
        interviewCase: {
            question: "What is the difference between let and var in Swift?",
            answer: "`let` creates a constant, which means the value cannot be reassigned after it is set. `var` creates a variable, which means the value can be reassigned later. Both still have a type, and that type does not change. A common Swift habit is to start with `let` by default and use `var` only when changing the value is part of the program's logic."
        },
        bonusLinks: [
            {
                label: "Bonus: Type Inference in Swift",
                text: "Use this extra walkthrough after the type inference section to understand how Swift can figure out types while still keeping code strongly typed.",
                href: "https://www.linkedin.com/posts/activity-7454843481740550144-eTy9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVaJzoBP_ftp3NWiAy98T8AbWu3LjPJ5-Q",
                buttonText: "Open type inference guide"
            },
            {
                label: "Bonus: Comments in Swift",
                text: "Use this extra walkthrough to understand how Swift comments work, when to use them, and how to keep comments helpful for beginners and teammates.",
                href: "https://www.linkedin.com/posts/activity-7454383049049395200-JohD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVaJzoBP_ftp3NWiAy98T8AbWu3LjPJ5-Q",
                buttonText: "Open comments guide"
            },
            {
                label: "Bonus: How var & let work in Swift",
                text: "Use this extra walkthrough to reinforce how constants and variables behave in Swift, why mutability matters, and when to choose each one.",
                href: "https://www.linkedin.com/posts/activity-7447844765586341888-aNFM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVaJzoBP_ftp3NWiAy98T8AbWu3LjPJ5-Q",
                buttonText: "Open var & let guide"
            }
        ],
        highlight: "`let` means the value stays the same. `var` means the value is allowed to change. Start with `let`, then use `var` when changing the value is part of your program's logic."
    },
    {
        part: "Part 2",
        title: "Basic Types",
        intro: "Types tell Swift **what kind of data a value represents** and what you can do with that value. You usually **don't need to write the type explicitly**. Swift can figure it out from the value you assign. This is called **type inference**. **Beginner tip:** Let Swift infer the type when it's obvious, and specify it explicitly when it makes your intention clearer or Swift needs help determining the type. However, **when you're just starting to learn Swift, writing types explicitly is a good practice** because it helps you understand which types Swift is working with.",
        sections: [
            ["Core Types", ["`String` — stores text and sequences of characters.", "`Int` — stores whole numbers.", "`Double` — stores decimal numbers and is Swift's default type for floating-point values.", "`Float` — stores decimal numbers with less precision than `Double`.", "`Bool` — stores either `true` or `false`.", "`Character` — stores a single character.", "`Optional` — represents a value that may exist or may be `nil`."]],
            ["Type Inference", ["Swift can often **infer the type** from the value you assign.", "`let age = 25` → Swift infers `Int`.", "`let price = 9.99` → Swift infers `Double`.", "`let name = \"Neo\"` → Swift infers `String`.", "`let isOnline = true` → Swift infers `Bool`.", "You can still declare the type explicitly when it improves clarity or when Swift needs more information.", "**Beginner tip:** When you're first learning Swift, writing types explicitly can help you understand which types you're working with. As you become more comfortable, you can rely more on type inference."]],
            ["Common Mistakes", ["`\"25\"` is a `String`, while `25` is an `Int`.", "`25` is an `Int`, while `25.0` is inferred as a `Double`.", "`\"A\"` is inferred as a `String`, not a `Character`. Use `let letter: Character = \"A\"` when you specifically need a `Character`.", "`nil` can only be used where Swift expects an `Optional`.", "Swift generally **doesn't implicitly convert between numeric types**. Convert them explicitly when necessary."]]
        ],
        interviewCase: {
            question: "When should you write a type explicitly instead of relying on type inference?",
            answer: "Use type inference when the value makes the type obvious, like `let age = 25`. Write the type explicitly when it improves readability, when Swift needs more information, or when you want a specific type such as `Float`, `Character`, or an `Optional`. In interviews, the key point is that Swift is strongly typed either way: inferred types are still real types checked by the compiler."
        },
        examples: [
            {
                label: "Basic Types",
                language: "swift",
                code: `let name: String = "Neo"        // String stores text and characters
let age: Int = 25               // Int stores whole numbers: -10, 0, 25, 1000
let progress: Double = 0.75     // Double stores decimal numbers: 3.14, -1.5, 0.75
let ratio: Float = 0.5          // Float also stores decimal numbers, with less precision
let grade: Character = "A"      // Character stores a single character
let isOnline: Bool = true       // Bool stores true or false

let nickname: String? = nil     // Optional can contain a value or nil`
            },
            {
                label: "Double vs Float",
                language: "swift",
                code: `let doubleValue: Double = 3.141592653589793 // More precise decimal number
let floatValue: Float = 3.1415927             // Less precise decimal number

let price = 19.99                            // Swift infers Double by default

let explicitPrice: Float = 19.99             // Use Float when an API requires it`
            },
            {
                label: "Character vs String",
                language: "swift",
                code: `let letter: Character = "A"      // Character stores exactly one character
let name: String = "Neo"          // String stores text with one or more characters

let inferredLetter = "A"          // Swift infers String, not Character`
            },
            {
                label: "Optional",
                language: "swift",
                code: `let username: String? = "Neo"     // String? means this can store text or nil
let middleName: String? = nil   // nil means there is no value right now

var score: Int? = nil           // Int? can store a whole number or nil
score = 100                     // Later, the optional can receive a real Int value

let name: String = "Neo"        // Normal String must always contain text

var optionalName: String? = "Neo" // Optional String starts with a value
optionalName = nil                // OK: optionals are allowed to become nil`
            },
            {
                label: "Explicit Numeric Conversion",
                language: "swift",
                code: `let count: Int = 25              // count is a whole number
let price: Double = Double(count) // Convert Int to Double before storing it`
            },
            {
                label: "Swift Types You'll Work With",
                language: "swift",
                code: `let text: String = "Hello"                  // Text and characters
let letter: Character = "A"                  // One single character
let count: Int = 25                          // Whole numbers
let smallNumber: Int8 = 127                  // Small signed whole number
let mediumNumber: Int16 = 32_000             // 16-bit signed whole number
let largeNumber: Int32 = 2_000_000           // 32-bit signed whole number
let hugeNumber: Int64 = 9_000_000_000        // 64-bit signed whole number
let unsigned: UInt = 25                      // Whole number that cannot be negative
let byte: UInt8 = 255                        // 8-bit unsigned whole number
let id16: UInt16 = 65_535                    // 16-bit unsigned whole number
let id32: UInt32 = 4_000_000_000             // 32-bit unsigned whole number
let id64: UInt64 = 18_000_000_000            // 64-bit unsigned whole number
let price: Double = 19.99                    // Precise decimal numbers
let ratio: Float = 0.5                       // Smaller decimal numbers
let isReady: Bool = true                     // true or false

let username: String? = nil                  // Optional value or nil
let names: [String] = ["Neo", "Trinity"]     // Array stores ordered values
let scores: [String: Int] = ["Neo": 100]     // Dictionary stores key-value pairs
let tags: Set<String> = ["Swift", "iOS"]     // Set stores unique values
let user: (name: String, age: Int) = ("Neo", 25) // Tuple groups small values
let halfOpen: Range<Int> = 1..<10            // Range excludes the end value
let closed: ClosedRange<Int> = 1...10        // ClosedRange includes the end value
let result: Result<String, Error> = .success("OK") // Success value or failure error
let nothing: Void = ()                       // Empty return value
let unknown: Any = "Neo"                     // Any Swift value
let object: AnyObject? = nil                 // Any class instance
func stopApp() -> Never { fatalError() }     // Never means this does not return

enum Direction { case up, down }             // Enum lists fixed choices
struct Profile { let name: String }          // Struct creates a value type
class Account { var name = "Neo" }           // Class creates a reference type
protocol IdentifiableUser { var id: Int { get } } // Protocol defines requirements

let transform: (Int) -> String = { String($0) } // Closure stores reusable logic
func greet(_ name: String) -> String { "Hi, \\(name)" } // Function performs work

let today: Date = Date()                    // Date stores a point in time
let website: URL? = URL(string: "https://apple.com") // URL stores a web/file address
let payload: Data = Data()                  // Data stores raw bytes
let uuid: UUID = UUID()                     // UUID stores a unique identifier
let spacing: CGFloat = 16                   // CGFloat stores UI measurements
let point: CGPoint = CGPoint(x: 10, y: 20)  // CGPoint stores an x/y position
let size: CGSize = CGSize(width: 100, height: 50) // CGSize stores width and height
let frame: CGRect = CGRect(origin: point, size: size) // CGRect stores position and size`
            }
        ],
        bonusLinks: [
            {
                label: "Bonus: Basic Data Types in Swift deep dive",
                text: "Use this extra walkthrough when you want a deeper explanation of Swift's basic data types.",
                href: "https://lnkd.in/p/gRS5fwTG",
                buttonText: "Open data types deep dive"
            }
        ],
        highlight: "Swift types are not decoration. They help the compiler catch wrong assumptions early."
    },
    {
        part: "Part 3",
        title: "Operators and Expressions",
        intro: "Operators are symbols or keywords that do work with values: calculate numbers, compare data, combine conditions, assign values, and build strings. An expression is any piece of code that produces a value, such as `age >= 18`, `price * quantity`, or `\"Hi, \\(name)\"`. **Beginner tip:** when reading Swift, ask one small question for every expression: **what value does this produce, and what type is that value?**",
        sections: [
            ["What Is an Expression?", ["An expression is code that evaluates to a result.", "`2 + 3` produces the `Int` value `5`.", "`age >= 18` produces a `Bool` value.", "`\"Hi, \\(name)\"` produces a `String` value.", "Expressions can be stored in constants, passed into functions, used in `if` conditions, or combined with other expressions."]],
            ["Arithmetic Operators", ["Use `+`, `-`, `*`, `/`, and `%` for basic math.", "`%` gives the remainder after division, which is useful for even/odd checks and repeating patterns.", "Be careful with integer division: `5 / 2` gives `2`, not `2.5`, because both values are `Int`.", "Use `Double(5) / 2` or `5.0 / 2.0` when you want a decimal result."]],
            ["Assignment and Compound Assignment", ["`=` assigns a value. It does not mean equality in Swift.", "`score = 10` puts `10` into the variable `score`.", "`+=`, `-=`, `*=`, and `/=` update an existing variable using its current value.", "Compound assignment works only with variables created by `var`, not constants created by `let`."]],
            ["Comparison Operators", ["Comparison operators return `Bool`: `==`, `!=`, `<`, `>`, `<=`, `>=`.", "Use `==` to compare values, not `=`.", "Comparisons are commonly used in `if`, `guard`, filters, validation, and UI state.", "String comparison is possible, but beginners should mainly use `==` and `!=` for text equality."]],
            ["Logical Operators", ["`&&` means both conditions must be true.", "`||` means at least one condition must be true.", "`!` flips a Boolean value.", "Use parentheses when combining several conditions so your intention is easy to read.", "Swift conditions must be `Bool`. Swift does not treat `0`, empty strings, or empty arrays as false."]],
            ["Nil-Coalescing and Ternary", ["`??` provides a fallback when an optional is `nil`.", "`nickname ?? \"Guest\"` means use `nickname` if it exists, otherwise use `\"Guest\"`.", "The ternary operator `condition ? valueIfTrue : valueIfFalse` is a compact if/else expression.", "Use ternary only for simple choices. If it becomes hard to read, use normal `if` code."]],
            ["String Interpolation and Concatenation", ["Use `\\(value)` inside a string to insert a value.", "String concatenation means joining strings with `+`.", "Concatenation works well when all pieces are already `String` values.", "When joining text with numbers, Booleans, or calculations, string interpolation is usually clearer because Swift converts the inserted values into text for you.", "Keep complex logic outside the string first, then insert the final value."]],
            ["Precedence and Readability", ["Operator precedence decides which operation runs first, such as multiplication before addition.", "`2 + 3 * 4` is `14`, not `20`.", "Parentheses make code clearer: `(2 + 3) * 4`.", "Beginner rule: if you have to pause to understand the order, add parentheses."]],
            ["Common Mistakes", ["Using `=` when you meant `==`.", "Expecting Swift to automatically convert `Int` to `Double`.", "Forgetting that `/` with two `Int` values performs integer division.", "Writing long Boolean expressions without parentheses or clear names.", "Using `!` in a way that makes the condition harder to read. Sometimes `isEmpty == false` or a named value is clearer."]]
        ],
        interviewCase: {
            question: "What is the difference between an operator and an expression in Swift?",
            answer: "An operator is the symbol or keyword that performs an operation, such as `+`, `>=`, `&&`, or `??`. An expression is the full piece of code that produces a value, such as `price * quantity` or `age >= 18`. In Swift, every expression has a type. That type might be `Int`, `Double`, `Bool`, `String`, or something else."
        },
        examples: [
            {
                label: "Arithmetic and Remainder",
                language: "swift",
                code: `let price = 20                  // Price of one item
let quantity = 3                   // Number of items
let total = price * quantity       // 60, because 20 multiplied by 3 equals 60

// * is the multiplication operator.
// price * quantity asks: what is the total price for 3 items?
// The expression price * quantity produces an Int value: 60.

let points = 17                    // Total number of points
let groupSize = 5                  // We want to split points into groups of 5
let leftoverPoints = points % groupSize // 2 points left after making groups of 5

// % is the remainder operator.
// 17 % 5 asks: after dividing 17 by 5, what is left over?
// 17 = 5 + 5 + 5 + 2, so the remainder is 2.

let isEven = points % 2 == 0       // false, because 17 has a remainder after division by 2
let isOdd = points % 2 != 0        // true, because the remainder is not 0`
            },
            {
                label: "Integer Division vs Decimal Division",
                language: "swift",
                code: `let integerResult = 5 / 2          // 2
let decimalResult = 5.0 / 2.0      // 2.5

let count = 5
let average = Double(count) / 2.0  // 2.5

// Swift stays strict so the result type is predictable.`
            },
            {
                label: "Assignment vs Comparison",
                language: "swift",
                code: `var score = 0        // assignment: put 0 into score
score = 10           // assignment: replace score with 10

let hasWon = score == 10  // comparison: produces true
let needsPractice = score < 10 // comparison: produces false`
            },
            {
                label: "Compound Assignment",
                language: "swift",
                code: `var score = 10
score += 5       // same as score = score + 5
score -= 2       // same as score = score - 2

var message = "Hi"
message += ", Neo" // "Hi, Neo"`
            },
            {
                label: "Logical Operators",
                language: "swift",
                code: `let age = 20             // User's age
let hasTicket = true     // true means the user has a ticket
let isBanned = false     // false means the user is not banned

let canEnter = age >= 18 && hasTicket && !isBanned

// && means every condition must be true.
// age >= 18 checks if the user is an adult.
// hasTicket checks if the user has permission to enter.
// !isBanned means "not banned".
// canEnter becomes true only when all three checks pass.

if canEnter {
    print("Welcome")     // This runs because canEnter is true
}`
            },
            {
                label: "Parentheses for Clear Conditions",
                language: "swift",
                code: `let isAdmin = false
let ownsProfile = true
let isVerified = true

let canEdit = isAdmin || (ownsProfile && isVerified)

// Parentheses make the business rule easier to see:
// admins can edit, or verified users can edit their own profile.`
            },
            {
                label: "Nil-Coalescing",
                language: "swift",
                code: `let nickname: String? = nil      // Optional String: it can contain text or nil
let displayName = nickname ?? "Guest"

// ?? is the nil-coalescing operator.
// It means: use the value on the left if it exists.
// If the left side is nil, use the fallback value on the right.
// nickname is nil here, so displayName becomes "Guest".

print(displayName) // Prints "Guest"`
            },
            {
                label: "Ternary Operator",
                language: "swift",
                code: `let unreadCount = 3                  // Number of unread messages
let badgeText = unreadCount > 0 ? "\\(unreadCount)" : ""

// The ternary operator is a short if/else expression.
// It has three parts:
// condition ? valueIfTrue : valueIfFalse
// unreadCount > 0 checks if there are unread messages.
// Because unreadCount is 3, the condition is true.
// badgeText becomes "3".

// Good for small choices.
// For several branches, use if/else instead.`
            },
            {
                label: "String Interpolation",
                language: "swift",
                code: `let name = "Neo"       // String value used in the message
let score = 42         // Current score
let maxScore = 50      // Maximum possible score
let progress = Double(score) / Double(maxScore)

// Double(score) converts Int to Double.
// Double(maxScore) converts Int to Double.
// The / operator divides the two Double values.
// progress becomes 0.84.

let message = "Hi, \\(name). Score: \\(score)/\\(maxScore). Progress: \\(progress)"

// \\(name), \\(score), \\(maxScore), and \\(progress) insert values into the string.
// This is called string interpolation.
// message becomes: "Hi, Neo. Score: 42/50. Progress: 0.84"

print(message) // Prints the final message`
            },
            {
                label: "String Concatenation",
                language: "swift",
                code: `let firstName = "Neo"       // First part of the user's name
let lastName = "Anderson"    // Second part of the user's name

let fullName = firstName + " " + lastName

// + joins String values together.
// " " is a space between the first name and last name.
// fullName becomes "Neo Anderson".

print(fullName) // Prints "Neo Anderson"

let score = 42             // Int value
let scoreText = "Score: " + String(score)

// String(score) converts the Int value 42 into the String value "42".
// Concatenation can join only String values with other String values.
// scoreText becomes "Score: 42".

print(scoreText) // Prints "Score: 42"

// For mixed values, interpolation is often easier to read:
let message = "Hi, \\(fullName). Score: \\(score)"

// \\(fullName) inserts the String value.
// \\(score) inserts the Int value without manually writing String(score).`
            },
            {
                label: "Useful Beginner Pattern",
                language: "swift",
                code: `let email = "neo@example.com" // Text entered by the user
let password = "swift123"       // Password entered by the user

let hasEmail = email.isEmpty == false
let hasPassword = password.count >= 8
let canSubmit = hasEmail && hasPassword

// email.isEmpty checks whether the email string has no characters.
// email.isEmpty == false means the email is not empty.
// password.count >= 8 checks whether the password has at least 8 characters.
// && means both checks must be true.
// canSubmit becomes true only when the email exists and the password is long enough.

// Naming expressions makes app logic easier to read.
// hasEmail is clearer than writing email.isEmpty == false everywhere.
// hasPassword is clearer than repeating password.count >= 8 everywhere.`
            },
            {
                label: "Expressions Produce Values",
                language: "swift",
                code: `let age = 20                       // This expression produces an Int value: 20
let minimumAge = 18                // This expression produces an Int value: 18
let isAdult = age >= minimumAge    // This expression produces a Bool value: true

let price = 19.99                  // This expression produces a Double value: 19.99
let quantity = 3                   // This expression produces an Int value: 3
let total = price * Double(quantity) // This expression produces a Double value: 59.97

let firstName = "Neo"              // This expression produces a String value: "Neo"
let lastName = "Anderson"          // This expression produces a String value: "Anderson"
let fullName = firstName + " " + lastName // This expression produces a String value: "Neo Anderson"

let unreadMessages = 5             // This expression produces an Int value: 5
let hasUnreadMessages = unreadMessages > 0 // This expression produces a Bool value: true
let badgeText = hasUnreadMessages ? "\\(unreadMessages)" : "" // This expression produces a String value: "5"

let nickname: String? = nil        // This expression produces an optional String with no value
let displayName = nickname ?? fullName // This expression produces a String value: "Neo Anderson"

let canShowProfile = isAdult && hasUnreadMessages // This expression produces a Bool value: true
let profileTitle = "Profile: \\(displayName)"     // This expression produces a String value

// Beginner reading habit:
// 1. Find the operator: >=, *, +, >, ?, ??, &&, or \\(...)
// 2. Ask what value the expression produces.
// 3. Ask what type that value has: Int, Double, Bool, String, or Optional.`
            }
        ],
        bonusLinks: [
            {
                label: "Bonus: Swift Operators",
                text: "Use Apple's operator documentation as a reference when you want the complete list of Swift operators and their behavior.",
                href: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/basicoperators/",
                buttonText: "Open operators guide"
            },
            {
                label: "Bonus: 40+ Operators in Swift",
                text: "Use this bonus post as a practical overview of many Swift operators beginners will see in real code and interview prep.",
                href: "https://www.linkedin.com/posts/niko-anderson-36269333b_swift-ios-iosinterviewprep-ugcPost-7449388423536082944-lK-F/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVaJzoBP_ftp3NWiAy98T8AbWu3LjPJ5-Q",
                buttonText: "Open 40+ operators post"
            }
        ],
        highlight: "Operators are tools. Expressions are results. Learn to read every expression by asking: what value does this produce, and what type is that value?"
    },
    {
        part: "Part 4",
        title: "Control Flow",
        intro: "Control flow lets your program choose different paths. Beginners should understand `if`, `else`, `switch`, and the ternary operator before moving into app UI logic.",
        sections: [
            ["if and else", ["Use `if` when code should run only for a condition.", "Use `else` for the fallback path.", "Conditions must be Boolean expressions. Swift does not treat `0` as false."]],
            ["switch", ["Use `switch` when one value has several possible cases.", "Swift switches must be exhaustive, so every possible value is handled.", "`default` is useful when you do not want to list every case."]],
            ["Ternary", ["The ternary operator is a compact if/else expression.", "Use it for simple choices only.", "If it becomes hard to read, use normal `if` code."]]
        ],
        examples: [
            {
                label: "Choosing a path",
                language: "swift",
                code: `let score = 82              // value we want to check

if score >= 90 {             // first condition
    print("Excellent")       // runs for 90 or higher
} else if score >= 70 {      // second condition
    print("Good")            // runs from 70 to 89
} else {                     // fallback path
    print("Keep practicing") // runs below 70
}`
            }
        ],
        highlight: "Control flow is how your app decides what should happen next."
    },
    {
        part: "Part 5",
        title: "Loops",
        intro: "Loops repeat work. In Swift, beginners use `for-in` most often because it reads clearly and works well with ranges and collections.",
        sections: [
            ["for-in", ["Use `for-in` to repeat code for each item.", "Ranges like `1...5` include the last number.", "Ranges like `1..<5` stop before the last number."]],
            ["while", ["Use `while` when you do not know the exact number of repetitions in advance.", "The condition is checked before each loop run.", "Make sure the condition eventually changes, or the loop may never stop."]],
            ["break and continue", ["`break` exits the loop immediately.", "`continue` skips the current iteration and moves to the next one.", "Use both sparingly so loops stay easy to follow."]]
        ],
        examples: [
            {
                label: "Loop over values",
                language: "swift",
                code: `let names = ["Ana", "Ben", "Mia"] // array of names

for name in names {                 // loop through each name
    print("Hi, \\(name)")           // runs once per item
}`
            }
        ],
        highlight: "Loops are for repeated patterns. Keep each loop small and obvious."
    },
    {
        part: "Part 6",
        title: "Functions",
        intro: "Functions let you name reusable behavior. A good function has a clear job, clear inputs, and a clear output.",
        sections: [
            ["Parameters and Returns", ["Parameters are values the function receives.", "`return` sends a value back to the caller.", "If a function returns nothing, its return type is `Void`, usually written by omission."]],
            ["Argument Labels", ["Swift function calls often read like sentences.", "The external label is used at the call site.", "The internal name is used inside the function body."]],
            ["Beginner Habits", ["Make functions small enough to explain in one sentence.", "Use names that describe behavior, such as `calculateTotal`.", "Avoid hiding many unrelated actions inside one function."]]
        ],
        examples: [
            {
                label: "Function with a result",
                language: "swift",
                code: `func greeting(for name: String) -> String { // receives a name, returns text
    return "Hi, \\(name)"                    // output of the function
}

let text = greeting(for: "Neo")             // call the function`
            }
        ],
        highlight: "Functions turn repeated code into named ideas."
    },
    {
        part: "Part 7",
        title: "Collections",
        intro: "Collections store multiple values. Swift gives beginners three important collection types: `Array`, `Dictionary`, and `Set`.",
        sections: [
            ["Array", ["An `Array` stores ordered values.", "Use arrays for lists where position matters.", "Access items by index, but remember indexes start at `0`."]],
            ["Dictionary", ["A `Dictionary` stores values by key.", "Use dictionaries when you want to look something up by name, id, or code.", "Dictionary lookup returns an optional because the key may not exist."]],
            ["Set", ["A `Set` stores unique values.", "Use sets when duplicates should be impossible.", "Sets are useful for selected ids, tags, and fast membership checks."]]
        ],
        examples: [
            {
                label: "Three collection types",
                language: "swift",
                code: `let names = ["Ana", "Ben"]          // Array keeps order
let scores = ["Ana": 90, "Ben": 82] // Dictionary uses keys
let selectedIds: Set<Int> = [1, 3, 5] // Set keeps unique values

print(names[0])                       // first array item
print(scores["Ana"] ?? 0)             // fallback if key is missing`
            }
        ],
        highlight: "Choose the collection based on how you need to access the data."
    },
    {
        part: "Part 8",
        title: "Optionals",
        intro: "Optionals are one of Swift's most important safety features. An optional means a value can exist, or it can be `nil`.",
        sections: [
            ["Why Optionals Exist", ["Real apps have missing data: no username, no image, no token, no network response.", "Swift makes missing values visible in the type system.", "`String?` means maybe there is a string, maybe there is `nil`."]],
            ["Safe Unwrapping", ["Use `if let` when you want to run code only if the value exists.", "Use `guard let` when the rest of the function needs the value.", "Use `??` to provide a fallback value."]],
            ["Common Mistakes", ["Avoid force unwrap `!` while learning unless you can prove the value exists.", "Do not ignore optionals by guessing.", "Handle the nil case like a real app state, not an inconvenience."]]
        ],
        examples: [
            {
                label: "Unwrap safely",
                language: "swift",
                code: `let nickname: String? = "Neo" // optional String: value or nil

if let nickname {              // safely unwrap if value exists
    print("Hi, \\(nickname)")  // use unwrapped String
} else {                       // nil case
    print("No nickname")       // fallback behavior
}`
            }
        ],
        highlight: "Optionals make absence explicit, which makes Swift code safer."
    },
    {
        part: "Part 9",
        title: "Structs and Classes",
        intro: "Structs and classes let you create your own types. They can store properties, define methods, and use initializers.",
        sections: [
            ["Structs", ["A `struct` is a value type.", "When assigned or passed around, it behaves like a separate value.", "SwiftUI views and many models are structs."]],
            ["Classes", ["A `class` is a reference type.", "Multiple variables can point to the same object.", "Classes are useful for shared identity, inheritance, and reference-based objects."]],
            ["What To Learn First", ["Start with structs for simple data models.", "Use methods for behavior that belongs to the type.", "Learn value vs reference semantics because interviews ask about it often."]]
        ],
        examples: [
            {
                label: "Custom type",
                language: "swift",
                code: `struct User {                   // custom value type
    let name: String            // stored constant property
    var score: Int              // stored variable property

    func greeting() -> String { // method belongs to User
        "Hi, \\(name)"          // implicit return
    }
}`
            }
        ],
        highlight: "Use structs for clear values. Use classes when shared identity matters."
    },
    {
        part: "Part 10",
        title: "Protocols and Extensions",
        intro: "Protocols describe what a type can do. Extensions add behavior to existing types. Together, they are a huge part of idiomatic Swift.",
        sections: [
            ["Protocols", ["A protocol is a contract.", "It can require properties and methods.", "Types conform to a protocol by implementing its requirements."]],
            ["Extensions", ["An extension adds methods, computed properties, or protocol conformance.", "Use extensions to organize related behavior.", "Extensions help keep models and utility code readable."]],
            ["Beginner Interview Idea", ["Protocols reduce coupling because code can depend on behavior, not a concrete type.", "Extensions make types easier to evolve without rewriting the original declaration.", "This prepares you for delegation, repositories, testing, and SwiftUI patterns."]]
        ],
        examples: [
            {
                label: "Protocol plus extension",
                language: "swift",
                code: `protocol Displayable {              // contract for conforming types
    var title: String { get }        // read-only required property
}

extension String {                  // add behavior to String
    var trimmed: String {            // computed property
        trimmingCharacters(in: .whitespaces) // removes outer spaces
    }
}`
            }
        ],
        highlight: "Protocols define capabilities. Extensions attach useful behavior where it belongs."
    }
];

const coreSwiftQuizQuestions = [
    { part: "Part 1", question: "When should a beginner prefer let?", options: ["When the value should not change", "As the default starting choice", "Only for strings"], answers: [0, 1] },
    { part: "Part 1", question: "What does var allow?", options: ["Changing the value later", "Mutable state", "Bypassing Swift types"], answers: [0, 1] },
    { part: "Part 1", question: "Which names are clearer?", options: ["userName", "isLoggedIn", "x for everything"], answers: [0, 1] },
    { part: "Part 2", question: "Which are basic Swift types?", options: ["String", "Int", "Bool"], answers: [0, 1, 2] },
    { part: "Part 2", question: "What is type inference?", options: ["Swift figures out a type from the value", "The compiler still knows the type", "Types disappear at runtime by magic"], answers: [0, 1] },
    { part: "Part 2", question: "Which statement is true?", options: ["\"25\" is a String", "25 is an Int", "Swift silently converts every type"], answers: [0, 1] },
    { part: "Part 3", question: "Which operators compare values?", options: ["==", ">=", "&&"], answers: [0, 1] },
    { part: "Part 3", question: "What does && mean?", options: ["Both conditions must be true", "It returns a Bool", "It creates a String"], answers: [0, 1] },
    { part: "Part 3", question: "What does string interpolation do?", options: ["Inserts values into strings", "Uses \\(value)", "Changes let into var"], answers: [0, 1] },
    { part: "Part 4", question: "What is control flow for?", options: ["Choosing different paths", "Running code based on conditions", "Avoiding functions forever"], answers: [0, 1] },
    { part: "Part 4", question: "Why is switch useful?", options: ["It handles several cases", "It must be exhaustive", "It ignores all unknown values"], answers: [0, 1] },
    { part: "Part 4", question: "When is ternary best?", options: ["Simple choices", "Short readable expressions", "Large nested business logic"], answers: [0, 1] },
    { part: "Part 5", question: "What is for-in used for?", options: ["Repeating work for each item", "Looping over arrays and ranges", "Declaring a class"], answers: [0, 1] },
    { part: "Part 5", question: "What is true about ranges?", options: ["1...5 includes 5", "1..<5 stops before 5", "Ranges are only for strings"], answers: [0, 1] },
    { part: "Part 5", question: "What do break and continue do?", options: ["break exits a loop", "continue skips to the next iteration", "Both delete code"], answers: [0, 1] },
    { part: "Part 6", question: "What should a good function have?", options: ["A clear job", "Clear inputs and output", "Every feature in one place"], answers: [0, 1] },
    { part: "Part 6", question: "What are parameters?", options: ["Values the function receives", "Inputs to behavior", "Only values from the internet"], answers: [0, 1] },
    { part: "Part 6", question: "Why use functions?", options: ["To name reusable behavior", "To reduce repeated code", "To hide all bugs"], answers: [0, 1] },
    { part: "Part 7", question: "Which collections should beginners know?", options: ["Array", "Dictionary", "Set"], answers: [0, 1, 2] },
    { part: "Part 7", question: "What does Array store?", options: ["Ordered values", "Values accessed by index", "Only unique values"], answers: [0, 1] },
    { part: "Part 7", question: "Why can dictionary lookup be optional?", options: ["The key may not exist", "Swift makes missing data visible", "Dictionaries cannot store strings"], answers: [0, 1] },
    { part: "Part 8", question: "What does an optional mean?", options: ["A value may exist", "A value may be nil", "A value is always safe to force unwrap"], answers: [0, 1] },
    { part: "Part 8", question: "Which are safe optional tools?", options: ["if let", "guard let", "nil-coalescing ??"], answers: [0, 1, 2] },
    { part: "Part 8", question: "Why avoid force unwrap while learning?", options: ["It can crash if the value is nil", "It hides missing-value thinking", "It makes code more type-safe"], answers: [0, 1] },
    { part: "Part 9", question: "What is true about structs?", options: ["They are value types", "SwiftUI views are often structs", "They require inheritance"], answers: [0, 1] },
    { part: "Part 9", question: "What is true about classes?", options: ["They are reference types", "Multiple variables can point to the same object", "They are always better than structs"], answers: [0, 1] },
    { part: "Part 9", question: "What can custom types contain?", options: ["Properties", "Methods", "Initializers"], answers: [0, 1, 2] },
    { part: "Part 10", question: "What is a protocol?", options: ["A contract", "A set of required capabilities", "A concrete API response"], answers: [0, 1] },
    { part: "Part 10", question: "What can extensions do?", options: ["Add behavior to existing types", "Organize related methods", "Change Swift syntax rules"], answers: [0, 1] },
    { part: "Part 10", question: "Why are protocols useful?", options: ["They reduce coupling", "They help testing and abstraction", "They force every type to be a class"], answers: [0, 1] }
];

coreSwiftParts.forEach((part, index) => {
    swiftTalkPosts[`core-swift-part${index + 1}`] = buildTrackPost(part, "Core Swift", "#Swift #iOS #SwiftCode #LearnSwift");
});

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
        bonusLinks: [
            {
                label: "Bonus: iOS Project + Git + GitHub Workflow",
                text: "Use this walkthrough after learning the basic Git commands. It shows how Git fits into a real iOS project workflow with GitHub.",
                href: "https://www.linkedin.com/posts/activity-7463086735632019456-1dHI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVaJzoBP_ftp3NWiAy98T8AbWu3LjPJ5-Q",
                buttonText: "Open workflow guide"
            }
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

toolboxParts.forEach((part, index) => {
    swiftTalkPosts[`toolbox-part${index + 1}`] = buildTrackPost(part, "iOS Dev Toolbox", "#Swift #iOS #DeveloperTools #SwiftCode");
});

const portfolioParts = [
    {
        part: "Part 1",
        title: "Why It Matters",
        intro: "A portfolio website is the perfect beginner project because it gives you visible progress fast. You are not only reading theory. You are building a real page with your name, your story, your projects, and your contacts.",
        sections: [
            ["Do Not Drown In Theory", ["Theory matters, but beginners often get stuck trying to understand everything before building anything.", "A visible project gives your brain feedback: this text moved, this color changed, this button works.", "That feedback builds confidence because progress becomes something you can see, not only something you hope is happening."]],
            ["Why A Portfolio Works", ["It is small enough to finish, but real enough to teach layout, structure, styling, interaction, Git, and deployment.", "It becomes useful immediately: you can send it to mentors, recruiters, classmates, or clients.", "Every improvement has meaning because the website represents you."]],
            ["Good Beginner Mindset", ["Build version 1 first. Keep it simple, clean, and honest.", "Do not wait for the perfect design. Start with a readable page and improve it step by step.", "When you learn a new tag, property, or command, use it inside your own website the same day."]]
        ],
        examples: [
            {
                label: "Tiny goal for day one",
                language: "text",
                code: `1. Create index.html
2. Add your name and role
3. Add one short bio paragraph
4. Open it in the browser
5. Change one color and one font size`
            }
        ],
        highlight: "Learning becomes easier when every topic has a visible result."
    },
    {
        part: "Part 2",
        title: "What Is HTML + CSS + JS?",
        intro: "HTML, CSS, and JavaScript are the three core pieces of a web page. A useful beginner model: HTML is the structure, CSS is the visual design, and JavaScript is the behavior.",
        sections: [
            ["HTML", ["HTML means HyperText Markup Language.", "It describes what exists on the page: headings, paragraphs, images, links, buttons, sections, lists, and forms.", "HTML should be meaningful. A contact area should be a `section`, a main title should be an `h1`, and navigation should live inside `nav`."]],
            ["CSS", ["CSS means Cascading Style Sheets.", "It controls how the page looks: colors, spacing, fonts, layout, borders, shadows, responsiveness, and dark mode.", "Good CSS makes the same HTML feel clear, polished, and usable on phones and desktops."]],
            ["JavaScript", ["JavaScript adds behavior: opening menus, switching themes, filtering projects, validating forms, copying text, and changing content without reloading the page.", "For this portfolio, JavaScript can power light/dark mode, language switching, and small interactions.", "Use JavaScript after the HTML already makes sense. Behavior should support the content, not hide it."]]
        ],
        examples: [
            {
                label: "The three pieces together",
                language: "html",
                code: `<h1>Niko Anderson</h1>
<p>iOS Developer building useful apps with Swift.</p>
<button id="themeButton">Switch theme</button>`
            },
            {
                label: "CSS changes the look",
                language: "css",
                code: `body {
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: #f8fafc;
}`
            },
            {
                label: "JavaScript adds action",
                language: "js",
                code: `document.querySelector("#themeButton").addEventListener("click", () => {
  document.body.classList.toggle("light");
});`
            }
        ],
        highlight: "HTML says what it is. CSS says how it looks. JavaScript says what happens."
    },
    {
        part: "Part 3",
        title: "Real Usage Of HTML",
        intro: "HTML is the skeleton of your portfolio. The goal is not to memorize every tag. The goal is to choose meaningful tags so your page is readable for people, browsers, search engines, and accessibility tools.",
        sections: [
            ["Core Tags", ["`html` wraps the whole page.", "`head` contains metadata, title, fonts, and CSS links.", "`body` contains visible content.", "`header`, `main`, `section`, and `footer` create page landmarks.", "`div` is a generic box. Use it when no more meaningful tag fits.", "`br` creates a line break, but normal spacing should usually be done with CSS.", "`ul`, `ol`, and `li` create lists. Use them for skills, steps, education items, and project features."]],
            ["Portfolio Sections", ["Hero: your name, role, short value line, and primary links.", "Bio/About: who you are, what you build, what you care about.", "Projects: cards with title, description, tech stack, links, and screenshots.", "Skills, education, contact: quick proof and clear next action."]],
            ["Useful Attributes", ["`id` gives one unique name to an element, useful for navigation and JavaScript.", "`class` groups elements for styling.", "`href` sets a link destination.", "`src` sets an image path.", "`alt` explains an image for accessibility and when images fail to load."]]
        ],
        examples: [
            {
                label: "Portfolio page structure",
                language: "html",
                code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Niko Anderson | Portfolio</title>
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
    <header class="site-header">
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section class="hero" id="home">
        <p class="eyebrow">iOS Developer</p>
        <h1>Niko Anderson</h1>
        <p>I build clean, useful mobile apps and simple web tools.</p>
        <a href="#projects">View projects</a>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>I enjoy turning ideas into readable interfaces.</p>
      </section>
    </main>
  </body>
</html>`
            },
            {
                label: "Lists and project cards",
                language: "html",
                code: `<section id="skills">
  <h2>Skills</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</section>

<article class="project-card">
  <img src="img/portfolio-preview.png" alt="Portfolio website preview">
  <h3>Portfolio Website</h3>
  <p>A personal website with dark mode and language switch.</p>
  <a href="https://username.github.io">Live demo</a>
</article>`
            }
        ],
        highlight: "Good HTML is not fancy. Good HTML is clear."
    },
    {
        part: "Part 4",
        title: "Real Usage Of CSS",
        intro: "CSS turns a plain document into a designed interface. For a portfolio, CSS controls the first impression: spacing, rhythm, readability, responsive layout, dark mode, and the feeling that the page was built with care.",
        sections: [
            ["Core Ideas", ["Selectors choose what to style: `body`, `.hero`, `#contact`, or `.project-card h3`.", "The box model explains spacing: content, padding, border, and margin.", "Flexbox is excellent for rows, navigation, buttons, and small groups.", "Grid is excellent for project cards, skill groups, and page layouts."]],
            ["Portfolio Styling", ["Use a small color system with variables so dark and light mode are easy.", "Use consistent spacing values instead of random margins everywhere.", "Set readable line height and avoid giant paragraphs stretching across the screen.", "Make cards, buttons, and links visually consistent."]],
            ["Responsive Habits", ["Start with a layout that works on mobile.", "Use `max-width` so content does not become too wide on desktop.", "Use `grid-template-columns: repeat(auto-fit, minmax(...))` for flexible cards.", "Test at small phone width, tablet width, and desktop width."]]
        ],
        examples: [
            {
                label: "Clean base styles",
                language: "css",
                code: `:root {
  --bg: #0f172a;
  --surface: #111827;
  --text: #f8fafc;
  --muted: #94a3b8;
  --accent: #38bdf8;
  --line: rgba(148, 163, 184, 0.24);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}`
            },
            {
                label: "Hero and project grid",
                language: "css",
                code: `.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.hero {
  min-height: 80vh;
  display: grid;
  align-content: center;
  gap: 20px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.project-card {
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
}`
            },
            {
                label: "Light mode",
                language: "css",
                code: `body.light {
  --bg: #f8fafc;
  --surface: #ffffff;
  --text: #0f172a;
  --muted: #475569;
  --accent: #0369a1;
  --line: rgba(15, 23, 42, 0.16);
}`
            }
        ],
        highlight: "CSS is not decoration only. It is how you make information easy to scan."
    },
    {
        part: "Part 5",
        title: "Real Usage Of JavaScript",
        intro: "JavaScript should make your portfolio feel alive without making it confusing. Start with small useful interactions: theme switch, language switch, active navigation, copy email, and form feedback.",
        sections: [
            ["Core Concepts", ["Variables store values: `const themeButton = ...`.", "Functions package behavior so you can reuse it.", "Events run code when something happens, like a click.", "`classList` lets JavaScript add or remove CSS classes.", "`localStorage` saves small preferences like dark or light mode."]],
            ["Portfolio Interactions", ["Light/dark mode: toggle a class on `body` and remember the preference.", "Language switch: update visible text from a dictionary.", "Copy email: copy your email address to the clipboard.", "Project filter: show only iOS, web, or all projects."]],
            ["Good Habits", ["Select elements once near the top of the file.", "Use clear names like `themeButton`, `languageButtons`, and `projectCards`.", "Check that an element exists before using it if the script may run on multiple pages.", "Keep JavaScript focused. Do not use it to create simple static text that belongs in HTML."]]
        ],
        examples: [
            {
                label: "Theme switch with saved preference",
                language: "js",
                code: `const themeButton = document.querySelector("#themeButton");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const nextTheme = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("theme", nextTheme);
});`
            },
            {
                label: "Copy email button",
                language: "js",
                code: `const copyEmailButton = document.querySelector("#copyEmail");

copyEmailButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText("you@example.com");
  copyEmailButton.textContent = "Copied";

  setTimeout(() => {
    copyEmailButton.textContent = "Copy email";
  }, 1600);
});`
            }
        ],
        highlight: "Use JavaScript to support the user, not to show off."
    },
    {
        part: "Part 6",
        title: "HTML + CSS + JS Together",
        intro: "A clean project is easier to understand, debug, and improve. Separate your HTML, CSS, JavaScript, and images so every file has a clear job.",
        sections: [
            ["Folder Structure", ["`index.html` is the main page.", "`css/styles.css` stores visual styles.", "`js/script.js` stores behavior.", "`img/` stores photos, screenshots, icons, and project previews.", "`README.md` explains the project goal and how to run it."]],
            ["Senior Habits For Beginners", ["Use meaningful section names and class names.", "Write small CSS systems: variables, containers, sections, buttons, cards.", "Keep repeated UI consistent.", "Make the website work without JavaScript first, then add enhancements.", "Commit after meaningful steps so your progress is safe."]],
            ["What Version 1 Should Include", ["Hero with your name and role.", "About or bio section.", "Projects section with at least one project.", "Skills and education.", "Contact links.", "Light/dark mode and language switch if you want extra practice."]]
        ],
        examples: [
            {
                label: "Recommended structure",
                language: "text",
                code: `portfolio-website/
  index.html
  README.md
  css/
    styles.css
  js/
    script.js
  img/
    profile.jpg
    project-portfolio.png`
            },
            {
                label: "Connect files",
                language: "html",
                code: `<head>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <!-- page content -->
  <script src="js/script.js"></script>
</body>`
            }
        ],
        highlight: "A small clean website teaches more than a big messy one."
    },
    {
        part: "Part 7",
        title: "Ship It With GitHub Pages",
        intro: "Deployment means making your website live on the internet. GitHub Pages is beginner-friendly because it can publish a static HTML, CSS, and JavaScript website directly from your repository.",
        sections: [
            ["Before You Start", ["Create a GitHub account.", "Install Git on your machine.", "Create a folder for your portfolio.", "Open Terminal in that folder.", "Run `pwd` to confirm where you are before Git commands."]],
            ["Important Commands", ["`pwd` shows the current folder.", "`ls` lists files.", "`cd folder-name` moves into a folder.", "`git status` shows changed files and branch state.", "`git add .` stages changes.", "`git commit -m \"message\"` saves a checkpoint.", "`git push` uploads commits to GitHub."]],
            ["GitHub Pages Domain", ["For a personal site, name the repo `username.github.io`, replacing `username` with your GitHub username.", "GitHub will publish it at `https://username.github.io`.", "If you use another repo name, the URL usually becomes `https://username.github.io/repo-name/`."]]
        ],
        examples: [
            {
                label: "Create local project",
                language: "bash",
                code: `mkdir portfolio-website
cd portfolio-website
touch index.html
mkdir css js img
touch css/styles.css js/script.js README.md`
            },
            {
                label: "Start Git and make first commit",
                language: "bash",
                code: `git init
git status
git add .
git commit -m "Create portfolio website structure"
git branch -M main`
            },
            {
                label: "Connect to GitHub and push",
                language: "bash",
                code: `git remote add origin https://github.com/username/username.github.io.git
git push -u origin main`
            },
            {
                label: "Daily update flow",
                language: "bash",
                code: `git status
git add .
git commit -m "Improve hero section"
git push`
            }
        ],
        bonusLinks: [
            {
                label: "Bonus GitHub Pages Guide",
                text: "Use this extra guide if you want a focused GitHub Pages walkthrough after finishing the terminal steps above.",
                href: "https://lnkd.in/p/gVWsyQuF",
                buttonText: "Open GitHub Pages guide"
            },
            {
                label: "Ready-To-Use Portfolio Builder",
                text: "If you want a working portfolio starter, explore SolidFolio and use it as a reference or foundation for your own version.",
                href: "https://github.com/NikolaiBorisov/SolidFolio",
                buttonText: "Open SolidFolio"
            }
        ],
        highlight: "At the end, your website should not only exist on your computer. It should be live and shareable."
    },
    {
        part: "Part 8",
        title: "Responsive And Accessible",
        intro: "A portfolio should work for real people on real devices. Responsive design makes it usable on phones and desktops. Accessibility makes it usable for more people and creates better HTML habits.",
        sections: [
            ["Responsive Checklist", ["Use the viewport meta tag.", "Avoid fixed widths like `width: 1200px` for main content.", "Use `max-width` and flexible grids.", "Test navigation, cards, and buttons on narrow screens.", "Make sure text does not overlap or become too small."]],
            ["Accessibility Basics", ["Use one clear `h1` for the page.", "Keep heading order logical: `h2` for sections, `h3` for cards.", "Write useful `alt` text for meaningful images.", "Use buttons for actions and links for navigation.", "Make color contrast readable in light and dark mode."]],
            ["Portfolio Details", ["Project screenshots need descriptive alt text.", "Contact links should clearly say where they go.", "Buttons like theme switch and language switch should have understandable labels.", "Keyboard users should be able to tab through the page."]]
        ],
        examples: [
            {
                label: "Responsive grid",
                language: "css",
                code: `.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
}`
            },
            {
                label: "Accessible image and button",
                language: "html",
                code: `<img src="img/project-app.png" alt="Dashboard screen from my habit tracking app">
<button type="button" id="themeButton" aria-label="Switch color theme">
  Theme
</button>`
            }
        ],
        highlight: "Responsive and accessible is not advanced polish. It is part of building a real website."
    },
    {
        part: "Part 9",
        title: "Polish Your Story",
        intro: "A portfolio is not only a code exercise. It is also a communication tool. The page should help someone quickly understand who you are, what you can build, and why your work is worth exploring.",
        sections: [
            ["Hero Copy", ["Say your name clearly.", "Say what you do in one direct line.", "Add one useful detail: platform, stack, niche, or type of product.", "Give the visitor a clear next action like viewing projects or contacting you."]],
            ["Project Cards", ["Use project names that are easy to understand.", "Explain the problem, not only the technology.", "List the stack, but do not let the stack replace the story.", "Add links to live demo, GitHub, or screenshots when available."]],
            ["Trust Signals", ["Add education, certificates, work experience, or learning progress honestly.", "Keep links updated.", "Remove empty sections until you have content.", "Proofread the page. Small text mistakes can make a polished layout feel unfinished."]]
        ],
        examples: [
            {
                label: "Before and after project description",
                language: "text",
                code: `Weak:
Website with HTML CSS JS.

Stronger:
A personal portfolio website with responsive layout, dark mode,
language switch, project cards, and GitHub Pages deployment.`
            },
            {
                label: "Project card content",
                language: "html",
                code: `<article class="project-card">
  <h3>Portfolio Website</h3>
  <p>A responsive personal site with theme switch and GitHub Pages deployment.</p>
  <ul>
    <li>HTML</li>
    <li>CSS Grid</li>
    <li>JavaScript</li>
  </ul>
  <a href="https://username.github.io">Live demo</a>
</article>`
            }
        ],
        highlight: "Your portfolio should show skill and explain the thinking behind the skill."
    },
    {
        part: "Part 10",
        title: "Final Build Checklist",
        intro: "Before you call the project finished, walk through the website like a visitor and like a developer. You want it to look good, work correctly, and be easy to update later.",
        sections: [
            ["Content Checklist", ["Hero has your name, role, and clear action.", "About section sounds human and specific.", "Projects have descriptions, stack, and links.", "Skills and education are easy to scan.", "Contact links work."]],
            ["Technical Checklist", ["HTML has correct structure.", "CSS is organized with variables and reusable classes.", "JavaScript has no console errors.", "Dark/light mode works.", "Language switch works if included.", "Images load from the `img` folder.", "The page works on mobile and desktop."]],
            ["Shipping Checklist", ["Run `git status` before final commit.", "Commit the finished version.", "Push to GitHub.", "Open your GitHub Pages URL.", "Test the live website, not only the local file.", "Add the live URL to your GitHub profile and LinkedIn."]]
        ],
        examples: [
            {
                label: "Final terminal flow",
                language: "bash",
                code: `git status
git add .
git commit -m "Finish first portfolio website"
git push`
            },
            {
                label: "README starter",
                language: "md",
                code: `# Portfolio Website

My personal portfolio website built with HTML, CSS, and JavaScript.

## Features
- Responsive layout
- Dark and light mode
- Project cards
- Contact links

## Live Website
https://username.github.io`
            }
        ],
        highlight: "Finish version 1, share it, then improve it with real feedback."
    }
];

const portfolioQuizQuestions = [
    { part: "Part 1", question: "Why is a portfolio website a strong beginner project?", options: ["It creates visible progress", "It is small but real", "It requires no practice"], answers: [0, 1] },
    { part: "Part 1", question: "What helps beginners avoid drowning in theory?", options: ["Building visible results", "Using new concepts in a real project", "Waiting until every topic is mastered"], answers: [0, 1] },
    { part: "Part 1", question: "What should version 1 be?", options: ["Simple, clean, and honest", "Finished enough to share", "Perfect before it is opened"], answers: [0, 1] },
    { part: "Part 2", question: "What does HTML mainly describe?", options: ["Page structure and content", "Headings, links, sections, images, and forms", "Only button animation"], answers: [0, 1] },
    { part: "Part 2", question: "What does CSS control?", options: ["Colors, spacing, fonts, and layout", "Responsive design and dark mode", "GitHub passwords"], answers: [0, 1] },
    { part: "Part 2", question: "What does JavaScript add?", options: ["Behavior and interaction", "Theme switch and language switch logic", "The meaning of every heading"], answers: [0, 1] },
    { part: "Part 3", question: "Which tags are useful page landmarks?", options: ["header, main, section, footer", "nav", "br for every layout gap"], answers: [0, 1] },
    { part: "Part 3", question: "What is the best use of div?", options: ["A generic grouping box when no semantic tag fits", "Replacing every meaningful tag", "Styling support"], answers: [0, 2] },
    { part: "Part 3", question: "Which attributes are useful in portfolio HTML?", options: ["id and class", "href, src, and alt", "secretToken"], answers: [0, 1] },
    { part: "Part 4", question: "What does the CSS box model include?", options: ["Content, padding, border, margin", "Spacing around elements", "Git commits"], answers: [0, 1] },
    { part: "Part 4", question: "Which layouts are useful in CSS?", options: ["Flexbox", "Grid", "Random fixed widths everywhere"], answers: [0, 1] },
    { part: "Part 4", question: "What helps with light and dark mode?", options: ["CSS variables", "Changing color values in one system", "Duplicating the whole website"], answers: [0, 1] },
    { part: "Part 5", question: "What JavaScript feature saves a theme preference?", options: ["localStorage", "classList with stored value", "br tags"], answers: [0, 1] },
    { part: "Part 5", question: "What is an event listener used for?", options: ["Running code after a click", "Reacting to user actions", "Creating a GitHub repo by itself"], answers: [0, 1] },
    { part: "Part 5", question: "What is a good JavaScript habit?", options: ["Use clear element names", "Check elements before using them when needed", "Hide all content until JS loads"], answers: [0, 1] },
    { part: "Part 6", question: "What belongs in a clean portfolio folder?", options: ["index.html", "css, js, and img folders", "Only one huge unnamed file"], answers: [0, 1] },
    { part: "Part 6", question: "Why separate CSS and JS files?", options: ["Each file has a clear job", "The project becomes easier to maintain", "It prevents all bugs automatically"], answers: [0, 1] },
    { part: "Part 6", question: "What should portfolio version 1 include?", options: ["Hero, about, projects, skills, contact", "Readable structure", "Every feature from every website"], answers: [0, 1] },
    { part: "Part 7", question: "What does GitHub Pages do?", options: ["Publishes a static website online", "Can serve HTML, CSS, and JavaScript from a repo", "Replaces HTML"], answers: [0, 1] },
    { part: "Part 7", question: "What does git status show?", options: ["Changed files and branch state", "Useful safety information before commits", "Your website font size"], answers: [0, 1] },
    { part: "Part 7", question: "Which commands are part of the first Git flow?", options: ["git init, git add ., git commit", "git remote add origin, git push", "git drown theory"], answers: [0, 1] },
    { part: "Part 8", question: "What helps responsive design?", options: ["Viewport meta tag", "Flexible grids and max-width", "Only desktop testing"], answers: [0, 1] },
    { part: "Part 8", question: "What helps accessibility?", options: ["Useful alt text", "Logical headings", "Low contrast text"], answers: [0, 1] },
    { part: "Part 8", question: "What should buttons and links be used for?", options: ["Buttons for actions", "Links for navigation", "Links for every JavaScript action"], answers: [0, 1] },
    { part: "Part 9", question: "What should a strong hero section communicate?", options: ["Name and role", "A clear next action", "Only a vague slogan"], answers: [0, 1] },
    { part: "Part 9", question: "What makes project cards stronger?", options: ["Problem and outcome", "Stack and useful links", "Only the word project"], answers: [0, 1] },
    { part: "Part 9", question: "What trust signals can a beginner include?", options: ["Education or learning progress", "Honest project work", "Fake experience"], answers: [0, 1] },
    { part: "Part 10", question: "What belongs in the technical checklist?", options: ["No console errors", "Images load and responsive layout works", "Broken contact links"], answers: [0, 1] },
    { part: "Part 10", question: "What should be tested after pushing?", options: ["The live GitHub Pages URL", "Mobile and desktop behavior", "Only the local file forever"], answers: [0, 1] },
    { part: "Part 10", question: "What is the best finish for version 1?", options: ["Commit, push, share, and improve from feedback", "Never publish it", "Keep adding features before it works"], answers: [0] }
];

portfolioParts.forEach((part, index) => {
    swiftTalkPosts[`portfolio-part${index + 1}`] = buildTrackPost(part, "Let's Build Your Portfolio Website", "#HTML #CSS #JavaScript #Portfolio #SwiftCode");
});

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
        projectSwiftCodeDescription: "Swift & iOS learning notes for beginners",
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
        projectSwiftCodeDescription: "Notas de Swift e iOS para principiantes",
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
        projectSwiftCodeDescription: "โน้ตการเรียนรู้ Swift และ iOS สำหรับผู้เริ่มต้น",
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
    likeControls.forEach(control => {
        setupLikeControl(control);
    });
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

    swiftTalksScreen.classList.remove("is-viewing-core-swift");
    swiftTalksScreen.classList.remove("is-viewing-toolbox");
    swiftTalksScreen.classList.remove("is-viewing-portfolio");
    swiftTalksScreen.classList.add("is-viewing-intro");
}

function showCoreSwiftTrack() {
    if (!swiftTalksScreen) {
        return;
    }

    renderCoreSwiftParts();
    swiftTalksScreen.classList.remove("is-viewing-intro");
    swiftTalksScreen.classList.remove("is-viewing-toolbox");
    swiftTalksScreen.classList.remove("is-viewing-portfolio");
    swiftTalksScreen.classList.add("is-viewing-core-swift");
}

function showToolboxTrack() {
    if (!swiftTalksScreen) {
        return;
    }

    renderToolboxParts();
    swiftTalksScreen.classList.remove("is-viewing-core-swift");
    swiftTalksScreen.classList.remove("is-viewing-intro");
    swiftTalksScreen.classList.remove("is-viewing-portfolio");
    swiftTalksScreen.classList.add("is-viewing-toolbox");
}

function showPortfolioTrack() {
    if (!swiftTalksScreen) {
        return;
    }

    renderPortfolioParts();
    swiftTalksScreen.classList.remove("is-viewing-core-swift");
    swiftTalksScreen.classList.remove("is-viewing-intro");
    swiftTalksScreen.classList.remove("is-viewing-toolbox");
    swiftTalksScreen.classList.add("is-viewing-portfolio");
}

function showSwiftTalkTopics() {
    if (!swiftTalksScreen) {
        return;
    }

    closeSwiftQuiz({ keepHash: true });
    closeCoreSwiftQuiz({ keepHash: true });
    closeToolboxQuiz({ keepHash: true });
    closePortfolioQuiz({ keepHash: true });
    swiftTalksScreen.classList.remove("is-viewing-core-swift");
    swiftTalksScreen.classList.remove("is-viewing-intro");
    swiftTalksScreen.classList.remove("is-viewing-toolbox");
    swiftTalksScreen.classList.remove("is-viewing-portfolio");
}

function openCoreSwiftQuiz() {
    if (!coreSwiftQuizScreen) {
        return;
    }

    openSwiftTalks();
    showCoreSwiftTrack();
    renderCoreSwiftQuiz();
    coreSwiftQuizScreen.classList.add("is-open");
    coreSwiftQuizScreen.setAttribute("aria-hidden", "false");
    document.body.classList.add("quiz-open");
    closeCoreSwiftQuizButton?.focus();
}

function closeCoreSwiftQuiz(options = {}) {
    if (!coreSwiftQuizScreen) {
        return;
    }

    coreSwiftQuizScreen.classList.remove("is-open");
    coreSwiftQuizScreen.setAttribute("aria-hidden", "true");
    document.body.classList.remove("quiz-open");

    if (!options.keepHash && window.location.hash === coreSwiftQuizHash) {
        window.location.hash = "swift-talks";
    }
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

function openPortfolioQuiz() {
    if (!portfolioQuizScreen) {
        return;
    }

    openSwiftTalks();
    showPortfolioTrack();
    renderPortfolioQuiz();
    portfolioQuizScreen.classList.add("is-open");
    portfolioQuizScreen.setAttribute("aria-hidden", "false");
    document.body.classList.add("quiz-open");
    closePortfolioQuizButton?.focus();
}

function closePortfolioQuiz(options = {}) {
    if (!portfolioQuizScreen) {
        return;
    }

    portfolioQuizScreen.classList.remove("is-open");
    portfolioQuizScreen.setAttribute("aria-hidden", "true");
    document.body.classList.remove("quiz-open");

    if (!options.keepHash && window.location.hash === portfolioQuizHash) {
        window.location.hash = "swift-talks";
    }
}

function closeSwiftTalks(options = {}) {
    if (!swiftTalksScreen) {
        return;
    }

    closeSwiftQuiz({ keepHash: true });
    closeCoreSwiftQuiz({ keepHash: true });
    closeToolboxQuiz({ keepHash: true });
    closePortfolioQuiz({ keepHash: true });
    swiftTalksScreen.classList.remove("is-open");
    swiftTalksScreen.classList.remove("is-viewing-core-swift");
    swiftTalksScreen.classList.remove("is-viewing-intro");
    swiftTalksScreen.classList.remove("is-viewing-toolbox");
    swiftTalksScreen.classList.remove("is-viewing-portfolio");
    swiftTalksScreen.setAttribute("aria-hidden", "true");
    document.body.classList.remove("talks-open");

    if (!options.keepHash && (window.location.hash === swiftTalksHash || window.location.hash === coreSwiftHash || isSwiftQuizHash() || window.location.hash === coreSwiftQuizHash || window.location.hash === toolboxQuizHash || window.location.hash === portfolioQuizHash)) {
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
openCoreSwiftTrackButton?.addEventListener("click", () => {
    if (window.location.hash !== coreSwiftHash) {
        window.location.hash = coreSwiftHash.slice(1);
    }

    showCoreSwiftTrack();
});
openSwiftIntroTrackButton?.addEventListener("click", () => {
    showSwiftIntroTrack();
});
openToolboxTrackButton?.addEventListener("click", () => {
    showToolboxTrack();
});
openPortfolioTrackButton?.addEventListener("click", () => {
    showPortfolioTrack();
});
backToTalkTopicsButton?.addEventListener("click", () => {
    showSwiftTalkTopics();
    openCoreSwiftTrackButton?.focus();
});
backToTalkTopicsButtons.forEach(button => {
    button.addEventListener("click", () => {
        showSwiftTalkTopics();
        openCoreSwiftTrackButton?.focus();
    });
});
openCoreSwiftQuizButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (window.location.hash !== coreSwiftQuizHash) {
            window.location.hash = coreSwiftQuizHash.slice(1);
        }

        openCoreSwiftQuiz();
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
openPortfolioQuizButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (window.location.hash !== portfolioQuizHash) {
            window.location.hash = portfolioQuizHash.slice(1);
        }

        openPortfolioQuiz();
    });
});
closeCoreSwiftQuizButton?.addEventListener("click", closeCoreSwiftQuiz);
closeSwiftQuizButton?.addEventListener("click", closeSwiftQuiz);
closeToolboxQuizButton?.addEventListener("click", closeToolboxQuiz);
closePortfolioQuizButton?.addEventListener("click", closePortfolioQuiz);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeLanguageMenu();
    }

    if (event.key === "Escape" && swiftQuizScreen?.classList.contains("is-open")) {
        closeSwiftQuiz();
        return;
    }

    if (event.key === "Escape" && coreSwiftQuizScreen?.classList.contains("is-open")) {
        closeCoreSwiftQuiz();
        return;
    }

    if (event.key === "Escape" && toolboxQuizScreen?.classList.contains("is-open")) {
        closeToolboxQuiz();
        return;
    }

    if (event.key === "Escape" && portfolioQuizScreen?.classList.contains("is-open")) {
        closePortfolioQuiz();
        return;
    }

    if (event.key === "Escape" && swiftTalksScreen?.classList.contains("is-open")) {
        closeSwiftTalks();
    }
});

function syncSwiftTalksWithHash() {
    if (window.location.hash === portfolioQuizHash) {
        openPortfolioQuiz();
    } else if (window.location.hash === toolboxQuizHash) {
        openToolboxQuiz();
    } else if (window.location.hash === coreSwiftQuizHash) {
        openCoreSwiftQuiz();
    } else if (isSwiftQuizHash()) {
        openSwiftQuiz();
    } else if (window.location.hash === coreSwiftHash) {
        openSwiftTalks();
        showCoreSwiftTrack();
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

function renderCoreSwiftParts() {
    if (!coreSwiftAccordion || coreSwiftAccordion.dataset.rendered === "true") {
        return;
    }

    coreSwiftParts.forEach((part, index) => {
        const isLocked = index > 2;
        const article = document.createElement("article");
        article.className = `talk-card talk-accordion-item${index === 0 ? " is-expanded" : ""}${isLocked ? " is-locked" : ""}`;
        article.dataset.talkId = `core-swift-part${index + 1}`;

        const trigger = document.createElement("button");
        trigger.type = "button";
        trigger.className = "talk-accordion-trigger";
        trigger.setAttribute("aria-expanded", index === 0 ? "true" : "false");
        trigger.disabled = isLocked;
        if (isLocked) {
            trigger.setAttribute("aria-disabled", "true");
        }

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
        appendFormattedText(intro, part.intro);
        panel.appendChild(intro);

        part.examples.forEach(example => {
            const block = document.createElement("div");
            block.className = "talk-highlight talk-highlight-rich";
            const label = document.createElement("span");
            label.textContent = example.label;
            const pre = document.createElement("pre");
            pre.className = "talk-code-block";
            const code = document.createElement("code");
            code.className = `language-${example.language}`;
            if (example.language === "swift") {
                code.innerHTML = highlightSwiftCode(example.code);
            } else {
                code.textContent = example.code;
            }
            pre.appendChild(code);
            block.append(label, pre);
            panel.appendChild(block);
        });

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

        if (part.interviewCase) {
            const interview = document.createElement("div");
            interview.className = "talk-highlight talk-highlight-rich";
            const label = document.createElement("span");
            label.textContent = "Interview case";
            const question = document.createElement("p");
            const questionStrong = document.createElement("strong");
            questionStrong.textContent = `Q: ${part.interviewCase.question}`;
            question.appendChild(questionStrong);
            const answer = document.createElement("p");
            appendFormattedText(answer, `A: ${part.interviewCase.answer}`);
            interview.append(label, question, answer);
            panel.appendChild(interview);
        }

        const highlight = document.createElement("div");
        highlight.className = "talk-highlight talk-highlight-rich";
        const highlightLabel = document.createElement("span");
        highlightLabel.textContent = "Core idea";
        const highlightText = document.createElement("p");
        const strong = document.createElement("strong");
        appendFormattedText(strong, part.highlight);
        highlightText.appendChild(strong);
        highlight.append(highlightLabel, highlightText);
        panel.appendChild(highlight);

        if (part.bonusLinks) {
            part.bonusLinks.forEach(link => {
                panel.appendChild(createBonusLinkBlock(link));
            });
        }

        panel.appendChild(createTalkFooter(`core-swift-part${index + 1}`, `Feedback on Core Swift ${part.part}`));

        if (isLocked) {
            const overlay = document.createElement("span");
            overlay.className = "talk-coming-soon";
            overlay.textContent = "Coming soon...";
            article.appendChild(overlay);
        } else {
            trigger.addEventListener("click", () => {
                const isExpanded = article.classList.toggle("is-expanded");
                trigger.setAttribute("aria-expanded", isExpanded ? "true" : "false");
            });
        }

        article.append(trigger, panel);
        coreSwiftAccordion.appendChild(article);
    });

    coreSwiftAccordion.dataset.rendered = "true";
}

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

        if (part.bonusLinks) {
            part.bonusLinks.forEach(link => {
                panel.appendChild(createBonusLinkBlock(link));
            });
        }

        panel.appendChild(createTalkFooter(`toolbox-part${index + 1}`, `Feedback on iOS Dev Toolbox ${part.part}`));

        trigger.addEventListener("click", () => {
            const isExpanded = article.classList.toggle("is-expanded");
            trigger.setAttribute("aria-expanded", isExpanded ? "true" : "false");
        });

        article.append(trigger, panel);
        toolboxAccordion.appendChild(article);
    });

    toolboxAccordion.dataset.rendered = "true";
}

function renderPortfolioParts() {
    if (!portfolioAccordion || portfolioAccordion.dataset.rendered === "true") {
        return;
    }

    portfolioParts.forEach((part, index) => {
        const article = document.createElement("article");
        article.className = `talk-card talk-accordion-item${index === 0 ? " is-expanded" : ""}`;
        article.dataset.talkId = `portfolio-part${index + 1}`;

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

        part.examples.forEach(example => {
            const block = document.createElement("div");
            block.className = "talk-highlight talk-highlight-rich";
            const label = document.createElement("span");
            label.textContent = example.label;
            const pre = document.createElement("pre");
            pre.className = "talk-code-block";
            const code = document.createElement("code");
            code.className = `language-${example.language}`;
            code.textContent = example.code;
            pre.appendChild(code);
            block.append(label, pre);
            panel.appendChild(block);
        });

        const highlight = document.createElement("div");
        highlight.className = "talk-highlight talk-highlight-rich";
        const highlightLabel = document.createElement("span");
        highlightLabel.textContent = "Portfolio mindset";
        const highlightText = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = part.highlight;
        highlightText.appendChild(strong);
        highlight.append(highlightLabel, highlightText);
        panel.appendChild(highlight);

        if (part.bonusLinks) {
            part.bonusLinks.forEach(link => {
                panel.appendChild(createBonusLinkBlock(link));
            });
        }

        panel.appendChild(createTalkFooter(`portfolio-part${index + 1}`, `Feedback on Portfolio Website ${part.part}`));

        trigger.addEventListener("click", () => {
            const isExpanded = article.classList.toggle("is-expanded");
            trigger.setAttribute("aria-expanded", isExpanded ? "true" : "false");
        });

        article.append(trigger, panel);
        portfolioAccordion.appendChild(article);
    });

    portfolioAccordion.dataset.rendered = "true";
}

function createTalkFooter(talkId, subject) {
    const footer = document.createElement("footer");
    footer.className = "talk-footer";

    const meta = document.createElement("div");
    meta.className = "talk-footer-meta";
    const follow = document.createElement("a");
    follow.href = "https://www.linkedin.com/in/niko-anderson-36269333b/";
    follow.target = "_blank";
    follow.rel = "noopener noreferrer";
    follow.textContent = "Follow on LinkedIn";

    const like = document.createElement("div");
    like.className = "talk-like";
    like.dataset.talkId = talkId;
    like.innerHTML = '<button type="button" class="like-button" aria-label="Like this post" aria-pressed="false"><svg class="like-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"></path></svg></button>';
    setupLikeControl(like);

    meta.appendChild(follow);

    const actions = document.createElement("div");
    actions.className = "talks-actions";
    const copy = document.createElement("button");
    copy.type = "button";
    copy.className = "talks-button copy-talk";
    copy.dataset.talkId = talkId;
    copy.setAttribute("aria-live", "polite");
    copy.textContent = "Copy post";
    bindCopyButton(copy);

    const translate = document.createElement("button");
    translate.type = "button";
    translate.className = "talks-button translate-talk";
    translate.dataset.talkId = talkId;
    translate.textContent = "Translate";
    bindTranslateButton(translate);

    const feedback = document.createElement("a");
    feedback.className = "talks-button primary";
    feedback.href = `mailto:andersonnikko1@gmail.com?subject=${encodeURIComponent(subject)}&body=Hi%20Niko%2C%0A%0AI%20read%20this%20SWIFT%20Talks%20post%20and%20wanted%20to%20share%20this%20feedback%3A%0A%0A`;
    feedback.textContent = "Send feedback";

    actions.append(copy, translate, feedback);
    footer.append(meta, like, actions);

    return footer;
}

function createBonusLinkBlock(link) {
    const block = document.createElement("div");
    block.className = "talk-highlight talk-highlight-rich";

    const label = document.createElement("span");
    label.textContent = link.label;

    const text = document.createElement("p");
    text.textContent = link.text;

    const anchor = document.createElement("a");
    anchor.className = "talks-button primary";
    anchor.href = link.href;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = link.buttonText || "Open bonus link";

    block.append(label, text, anchor);

    return block;
}

function setupLikeControl(control) {
    const likes = readStoredLikes();
    const talkId = control.dataset.talkId;
    const button = control.querySelector(".like-button");

    if (!talkId || !button) {
        return;
    }

    let isLiked = getStoredLikeValue(likes[talkId]);
    likes[talkId] = isLiked;
    renderLikeControl(control, isLiked);
    saveStoredLikes(likes);

    button.addEventListener("click", () => {
        const nextLikes = readStoredLikes();
        isLiked = !isLiked;
        nextLikes[talkId] = isLiked;
        saveStoredLikes(nextLikes);
        renderLikeControl(control, isLiked);
    });
}

function buildTrackPost(part, trackTitle, hashtags) {
    const plainText = value => value.replace(/`|\*\*/g, "");
    const sections = part.sections
        .map(([heading, items]) => `🔸 ${heading}\n\n${items.map(item => `• ${plainText(item)}`).join("\n")}`)
        .join("\n\n");
    const examples = (part.examples || [])
        .map(example => `Example: ${example.label}\n\n${example.code}`)
        .join("\n\n");
    const bonus = part.bonusLinks ? part.bonusLinks
        .map(link => `Bonus: ${link.label}
${link.text}
${link.href}`)
        .join("\n\n") + "\n\n" : "";
    const interview = part.interviewCase ? `Interview case:
Q: ${part.interviewCase.question}
A: ${plainText(part.interviewCase.answer)}

` : "";

    return `🔶 Swift Code
${trackTitle}
${part.part}: ${part.title}

${plainText(part.intro)}

${sections}

${examples ? `${examples}\n\n` : ""}${interview}${bonus}Main idea:
${part.highlight}

Follow on LinkedIn:
https://www.linkedin.com/in/niko-anderson-36269333b/

${hashtags}`;
}

function appendFormattedText(element, text) {
    text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).forEach(part => {
        if (!part) {
            return;
        }

        if (part.startsWith("`") && part.endsWith("`")) {
            const code = document.createElement("code");
            code.textContent = part.slice(1, -1);
            element.appendChild(code);
            return;
        }

        if (part.startsWith("**") && part.endsWith("**")) {
            const strong = document.createElement("strong");
            strong.textContent = part.slice(2, -2);
            element.appendChild(strong);
            return;
        }

        element.appendChild(document.createTextNode(part));
    });
}

function escapeHTML(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function findSwiftCommentStart(line) {
    let insideString = false;
    let isEscaped = false;

    for (let index = 0; index < line.length - 1; index += 1) {
        const char = line[index];
        const nextChar = line[index + 1];

        if (insideString) {
            if (isEscaped) {
                isEscaped = false;
                continue;
            }

            if (char === "\\") {
                isEscaped = true;
                continue;
            }

            if (char === "\"") {
                insideString = false;
            }

            continue;
        }

        if (char === "\"") {
            insideString = true;
            continue;
        }

        if (char === "/" && nextChar === "/") {
            return index;
        }
    }

    return -1;
}

function highlightSwiftCode(source) {
    const keywords = /\b(let|var|func|return|if|else|for|in|while|break|continue|struct|class|protocol|extension|get|set|true|false|nil)\b/g;
    const types = /\b(String|Int|Int8|Int16|Int32|Int64|UInt|UInt8|UInt16|UInt32|UInt64|Double|Float|Bool|Character|Optional|Array|Dictionary|Set|Range|ClosedRange|Result|Error|Never|Void|Any|AnyObject|Date|URL|Data|UUID|CGFloat|CGPoint|CGSize|CGRect|Direction|Profile|Account|IdentifiableUser|View|User|ContentView|ProfileView|Displayable)\b/g;

    return source.split("\n").map(line => {
        const commentStart = findSwiftCommentStart(line);
        const codePart = commentStart >= 0 ? line.slice(0, commentStart) : line;
        const commentPart = commentStart >= 0 ? line.slice(commentStart) : "";
        const strings = [];

        const protectedCode = codePart.replace(/"([^"\\]|\\.)*"/g, match => {
            const key = `__SWIFT_STRING_${strings.length}__`;
            strings.push(`<span class="syntax-string">${escapeHTML(match)}</span>`);
            return key;
        });

        let highlightedCode = escapeHTML(protectedCode)
            .replace(/(@[A-Za-z_][A-Za-z0-9_]*)/g, '<span class="syntax-attribute">$1</span>')
            .replace(keywords, '<span class="syntax-keyword">$1</span>')
            .replace(types, '<span class="syntax-type">$1</span>');

        strings.forEach((stringHTML, index) => {
            highlightedCode = highlightedCode.replace(`__SWIFT_STRING_${index}__`, stringHTML);
        });

        const highlightedComment = commentPart
            ? `<span class="syntax-comment">${escapeHTML(commentPart)}</span>`
            : "";

        return highlightedCode + highlightedComment;
    }).join("\n");
}

function renderToolboxQuiz() {
    if (!toolboxQuizForm || toolboxQuizForm.dataset.rendered === "true") {
        return;
    }

    renderQuizQuestions(toolboxQuizForm, toolboxQuizQuestions, "toolbox-quiz");
}

function renderCoreSwiftQuiz() {
    if (!coreSwiftQuizForm || coreSwiftQuizForm.dataset.rendered === "true") {
        return;
    }

    renderQuizQuestions(coreSwiftQuizForm, coreSwiftQuizQuestions, "core-swift-quiz");
}

function renderPortfolioQuiz() {
    if (!portfolioQuizForm || portfolioQuizForm.dataset.rendered === "true") {
        return;
    }

    renderQuizQuestions(portfolioQuizForm, portfolioQuizQuestions, "portfolio-quiz");
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

function gradeCoreSwiftQuiz() {
    renderCoreSwiftQuiz();
    gradeQuiz(coreSwiftQuizQuestions, "core-swift-quiz", coreSwiftQuizScore, coreSwiftQuizLegend);
}

function resetCoreSwiftQuiz() {
    resetQuiz(coreSwiftQuizForm, coreSwiftQuizQuestions, coreSwiftQuizScore, coreSwiftQuizLegend, coreSwiftQuizScreen);
}

function gradeToolboxQuiz() {
    renderToolboxQuiz();
    gradeQuiz(toolboxQuizQuestions, "toolbox-quiz", toolboxQuizScore, toolboxQuizLegend);
}

function resetToolboxQuiz() {
    resetQuiz(toolboxQuizForm, toolboxQuizQuestions, toolboxQuizScore, toolboxQuizLegend, toolboxQuizScreen);
}

function gradePortfolioQuiz() {
    renderPortfolioQuiz();
    gradeQuiz(portfolioQuizQuestions, "portfolio-quiz", portfolioQuizScore, portfolioQuizLegend);
}

function resetPortfolioQuiz() {
    resetQuiz(portfolioQuizForm, portfolioQuizQuestions, portfolioQuizScore, portfolioQuizLegend, portfolioQuizScreen);
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

finishCoreSwiftQuizButton?.addEventListener("click", gradeCoreSwiftQuiz);
resetCoreSwiftQuizButton?.addEventListener("click", resetCoreSwiftQuiz);
finishToolboxQuizButton?.addEventListener("click", gradeToolboxQuiz);
resetToolboxQuizButton?.addEventListener("click", resetToolboxQuiz);
finishPortfolioQuizButton?.addEventListener("click", gradePortfolioQuiz);
resetPortfolioQuizButton?.addEventListener("click", resetPortfolioQuiz);

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

function bindCopyButton(button) {
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
}

function bindTranslateButton(button) {
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
}

copyTalkButtons.forEach(bindCopyButton);
translateTalkButtons.forEach(bindTranslateButton);
