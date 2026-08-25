const themeButtons = document.querySelectorAll(".theme-switch button");
const languageSwitch = document.querySelector(".lang-switch");
const languageCurrentButton = document.querySelector("#lang-current");
const languageButtons = document.querySelectorAll(".lang-options button");
const translatableItems = document.querySelectorAll("[data-i18n]");
const openSwiftTalksButton = document.querySelector("#open-swift-talks");
const closeSwiftTalksButton = document.querySelector("#close-swift-talks");
const swiftTalksScreen = document.querySelector("#swift-talks");
const accordionTriggers = document.querySelectorAll(".talk-accordion-trigger");
const copyTalkButtons = document.querySelectorAll(".copy-talk");
const translateTalkButtons = document.querySelectorAll(".translate-talk");
const likeControls = document.querySelectorAll(".talk-like");
const likesStorageKey = "swiftTalkLikes";
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

function closeSwiftTalks(options = {}) {
    if (!swiftTalksScreen) {
        return;
    }

    swiftTalksScreen.classList.remove("is-open");
    swiftTalksScreen.setAttribute("aria-hidden", "true");
    document.body.classList.remove("talks-open");

    if (!options.keepHash && window.location.hash === "#swift-talks") {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }

    openSwiftTalksButton?.focus();
}

openSwiftTalksButton?.addEventListener("click", () => {
    if (window.location.hash !== "#swift-talks") {
        window.location.hash = "swift-talks";
    }

    openSwiftTalks();
});
closeSwiftTalksButton?.addEventListener("click", closeSwiftTalks);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeLanguageMenu();
    }

    if (event.key === "Escape" && swiftTalksScreen?.classList.contains("is-open")) {
        closeSwiftTalks();
    }
});

function syncSwiftTalksWithHash() {
    if (window.location.hash === "#swift-talks") {
        openSwiftTalks();
    } else if (swiftTalksScreen?.classList.contains("is-open")) {
        closeSwiftTalks({ keepHash: true });
    }
}

window.addEventListener("hashchange", syncSwiftTalksWithHash);
syncSwiftTalksWithHash();

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
