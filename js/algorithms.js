/* Beginner lessons: the walkthroughs describe the exact reference code below. */
const algorithmLessons = [
    {
        title: "Algorithm basics and Big O",
        intro: "Context: we need to find the largest score in a list. The list may contain any number of values, so we scan it once and remember the best value seen so far. This simple example introduces the core algorithm habits: define the goal, process each input, make a decision, and measure the work.",
        steps: ["Goal: find the highest value in [4, 9, 2]", "Start with the first value: best = 4", "Read 9: it is higher, so update best = 9", "Read 2: it is lower, so keep 9 and return it"],
        code: `func maximum(_ values: [Int]) -> Int? {
    guard var best = values.first else { return nil }
    for value in values.dropFirst() {
        if value > best { best = value }
    }
    return best
}
print(maximum([4, 9, 2]) as Any) // maximum checks 4, 9, and 2, returns 9, and print displays the Optional result as Optional(9).`,
        complexity: "Big O describes how work or memory grows with input size, not an exact number of seconds. For this method: `.first` reads the first array item in O(1) time; `.dropFirst()` creates a collection view without copying all the values, so it is O(1) to create; the `for` loop visits the remaining n values, so the complete `maximum` method takes O(n) time; each comparison and assignment inside the loop is O(1). The method uses O(1) extra space because it keeps only `best` and the current `value`. The final `print(maximum(...))` calls the O(n) method first, then displays its result. O(1) means fixed work, O(log n) repeatedly shrinks a problem, and O(n²) often compares every item with every other item. An empty array returns nil because it has no maximum.",
        task: "Write minimum(_:) returning Int?. Check [4, 9, 2] → 2, [-3, -8] → -8, and [] → nil.",
        question: "What does O(n) time mean here?", options: ["Work grows roughly with the number of values", "The function takes n seconds", "The function uses no memory"], answer: 0
    },
    {
        title: "Arrays and strings",
        intro: "Context: many apps need to inspect text one character at a time—for example, counting punctuation, checking a password, or finding a word. In this example, the input is `Swift!` and the goal is to count its exclamation marks. Arrays keep values in order and support integer indexes, while Swift Strings are collections of user-visible `Character` values. A Character can be an emoji or a combined letter, so we iterate over the String instead of treating it as a list of bytes or using an unsafe integer index.",
        steps: ["Input: Swift!", "Read S, w, i, f, t: skip", "Read !: count = 1", "Return 1"],
        code: `func countExclamations(_ text: String) -> Int {
    var count = 0
    for character in text {
        if character == "!" { count += 1 }
    }
    return count
}
print(countExclamations("Swift!")) // The function checks "Swift!", finds one exclamation mark, returns 1, and print displays that result.`,
        complexity: "One pass over the text; O(n) time in the usual character model and O(1) extra space. Swift characters can contain multiple Unicode scalars, so actual character-processing cost also depends on their representation. Array indexing is constant time; walking to a position in a String is not generally constant time.",
        task: "Count question marks. Check \"Why? Really?\" → 2, \"👩🏽‍💻?\" → 1, and an empty string → 0.",
        question: "Which is safe for visiting every Swift Character?", options: ["text[0]", "for character in text", "Treat every byte as a character"], answer: 1
    },
    {
        title: "Dictionaries and sets",
        intro: "Context: an app may need to count how often each number appears or check whether a value has already been seen. For `[2, 4, 2]`, a dictionary records `2 → 2` and `4 → 1`; a set would record only the unique values `2` and `4`. Dictionaries connect keys to values, while sets keep unique values. Neither promises a sorted iteration order.",
        steps: ["Input: [2, 4, 2]", "Read 2 → {2: 1}", "Read 4 → {2: 1, 4: 1}", "Read 2 → {2: 2, 4: 1}"],
        code: `func frequencies(_ values: [Int]) -> [Int: Int] {
    var counts: [Int: Int] = [:]
    for value in values {
        counts[value, default: 0] += 1
    }
    return counts
}
print(frequencies([2, 4, 2])) // keys: 2 → 2, 4 → 1`,
        complexity: "Expected O(n) time with average O(1) dictionary updates and O(k) extra space for k distinct numbers. Hash-table operations are not a worst-case constant-time guarantee. Set membership also takes average O(1) time for these integer keys.",
        task: "Use a Set<Int> to detect duplicates. Check [2, 4, 2] → true, [2, 4] → false, and [] → false.",
        question: "Which collection stores unique values?", options: ["Array", "String", "Set"], answer: 2
    },
    {
        title: "Linear and binary search",
        intro: "Context: we need to find a target number and return its position. Linear search checks items one by one and works on unsorted data. When the data is sorted, binary search can compare the middle value and discard half the remaining range. The upper bound below is excluded, which also handles an empty array safely.",
        steps: ["Find 7 in [1, 3, 5, 7, 9]", "Range 0..<5: middle 2 → 5", "7 > 5: keep range 3..<5", "Middle 4 → 9; then middle 3 → 7"],
        code: `func binarySearch(_ values: [Int], target: Int) -> Int? {
    var low = 0
    var high = values.count
    while low < high {
        let mid = low + (high - low) / 2
        if values[mid] == target { return mid }
        if values[mid] < target { low = mid + 1 }
        else { high = mid }
    }
    return nil
}
print(binarySearch([1, 3, 5, 7, 9], target: 7) as Any) // Optional(3)`,
        complexity: "Binary search takes O(log n) time and O(1) extra space on a sorted Array. Linear search takes O(n) time and O(1) extra space. Sorting first adds its own cost; binary search is especially useful when the sorted data is searched repeatedly. With duplicates this version returns a matching index, not necessarily the first.",
        task: "Write linear search returning the first matching index. Test [9, 3, 9], target 9 → 0; target 7 → nil; [] → nil.",
        question: "What does this binary search require?", options: ["Ascending sorted input", "Unique values only", "At least ten elements"], answer: 0
    },
    {
        title: "Sorting fundamentals",
        intro: "Context: ordered data is easier to search, display, and compare. Starting with `[3, 1, 2]`, insertion sort treats the first value as a sorted prefix, then inserts each next value into the correct gap. It is a clear learning algorithm; use Swift’s standard sorting methods for ordinary app code.",
        steps: ["[3 | 1, 2]: sorted prefix is [3]", "Take 1; shift 3 right", "[1, 3 | 2]: take 2; shift 3", "[1, 2, 3]: done"],
        code: `func insertionSort(_ values: [Int]) -> [Int] {
    var result = values
    for i in result.indices.dropFirst() {
        let value = result[i]
        var j = i
        while j > 0 && result[j - 1] > value {
            result[j] = result[j - 1]
            j -= 1
        }
        result[j] = value
    }
    return result
}
print(insertionSort([3, 1, 2])) // [1, 2, 3]`,
        complexity: "O(n²) time in the worst case because each insertion can shift many values; O(n) time for already sorted input. This function returns a separate array, so allow O(n) space for that result (Swift uses copy-on-write). The insertion work itself uses O(1) extra variables.",
        task: "Adapt insertion sort to descending order. Check [3, 1, 2] → [3, 2, 1], [2, 2] → [2, 2], and [] → [].",
        question: "Why can insertion sort take O(n²) time?", options: ["Array indexing is always slow", "Each insertion may shift many earlier elements", "It always uses recursion"], answer: 1
    },
    {
        title: "Two pointers",
        intro: "Context: we want to know whether two different numbers add up to a target. In sorted `[1, 2, 4, 6]`, target `8`, two pointers start at the ends and move inward. A sum that is too small needs a larger left value; a sum that is too large needs a smaller right value.",
        steps: ["Target 8: [1, 2, 4, 6]", "Left 1 + right 6 = 7: too small", "Move left: 2 + 6 = 8", "Return true"],
        code: `func hasPair(_ values: [Int], target: Int) -> Bool {
    var left = 0
    var right = values.count - 1
    while left < right {
        let sum = values[left] + values[right]
        if sum == target { return true }
        if sum < target { left += 1 }
        else { right -= 1 }
    }
    return false
}
print(hasPair([1, 2, 4, 6], target: 8)) // true`,
        complexity: "O(n) time because each pointer moves only inward, and O(1) extra space. Input must be sorted ascending. The two positions must differ; a single item cannot pair with itself. Examples assume sums fit in Swift Int; production code should handle overflow when input ranges require it.",
        task: "Return the two indices instead of Bool. Test [1, 2, 4, 6], target 8 → (1, 3); [4], target 8 → nil; [] → nil.",
        question: "If the sum is too small, which move helps?", options: ["Move the right pointer left", "Stop immediately", "Move the left pointer right"], answer: 2
    },
    {
        title: "Sliding window",
        intro: "Context: we want the largest total for two consecutive values in `[2, 1, 5, 1]`. A sliding window represents the current consecutive section. Compute the first window once, then subtract the number leaving and add the number entering so overlapping values are not summed repeatedly.",
        steps: ["[2, 1, 5, 1], window size 2", "[2, 1] → sum 3, best 3", "Remove 2, add 5 → sum 6, best 6", "Remove 1, add 1 → sum 6; return 6"],
        code: `func maxWindowSum(_ values: [Int], size: Int) -> Int? {
    guard size > 0 && size <= values.count else { return nil }
    var sum = values.prefix(size).reduce(0, +)
    var best = sum
    for i in size..<values.count {
        sum -= values[i - size]
        sum += values[i]
        best = max(best, sum)
    }
    return best
}
print(maxWindowSum([2, 1, 5, 1], size: 2) as Any) // Optional(6)`,
        complexity: "O(n) time and O(1) extra space. This fixed-size technique works with negative values too: best starts from the first real window, not zero. Invalid sizes return nil. Assume intermediate sums fit in Int. Variable-size windows need their own conditions and are not interchangeable with this example.",
        task: "Find the minimum fixed-window sum. Test [2, 1, 5, 1], size 2 → 3; [-4, -2], size 1 → -4; size 0 → nil.",
        question: "How do we update the window sum?", options: ["Subtract the outgoing value and add the incoming one", "Sort each window", "Reset the sum to zero every time"], answer: 0
    },
    {
        title: "Stacks and queues",
        intro: "Context: programs often need to process items in a specific order. Undo history uses a stack—last in, first out—while a waiting line uses a queue—first in, first out. Swift Array `append` and `popLast` make a useful stack; for a simple queue, advance a head index instead of repeatedly removing the first element.",
        steps: ["Queue: [10, 20], head = 0", "Read 10; head becomes 1", "Append 30 → [10, 20, 30]", "Read 20, then 30: arrival order preserved"],
        code: `var stack: [Int] = []
stack.append(10)
stack.append(20)
print(stack.popLast() as Any) // Optional(20)

var queue = [10, 20]
var head = 0
queue.append(30)
while head < queue.count {
    let next = queue[head]
    head += 1
    print(next) // 10, then 20, then 30
}`,
        complexity: "Array append is amortized O(1): occasional growth is expensive, but many appends average constant time each. popLast and a head-index read are O(1). Repeated removeFirst calls shift elements and can make a queue traversal O(n²). This simple head-index queue retains consumed entries, using O(n) storage; a long-lived queue needs compaction or a dedicated queue structure.",
        task: "Reverse [1, 2, 3] by pushing onto a stack and popping into an output array. Expect [3, 2, 1]; an empty input stays empty.",
        question: "A queue processes items in which order?", options: ["Largest first", "First in, first out", "Last in, first out"], answer: 1
    },
    {
        title: "Recursion",
        intro: "Context: some problems repeat the same kind of step on a smaller input. A countdown from `3` to `1` is a small example: the function calls itself with one less number each time. Recursion needs a base case that stops the calls and a step that moves toward it. Each unfinished call uses stack memory, so a loop is better for very large counts.",
        steps: ["countdown(3): print 3", "countdown(2): print 2", "countdown(1): print 1", "countdown(0): stop; calls return"],
        code: `func countdown(_ number: Int) {
    guard number > 0 else { return }
    print(number)
    countdown(number - 1)
}
countdown(3) // 3, 2, 1`,
        complexity: "For positive n, O(n) calls and O(n) call-stack space, excluding output handling. Do not assume Swift eliminates recursive stack frames. Deep recursion can exhaust the stack. Zero and negative inputs stop immediately. A loop gives the same countdown with O(1) extra space.",
        task: "Write the iterative version. Test 3 → 3, 2, 1; 0 and -1 → no output. Explain why its extra space is constant.",
        question: "What makes this recursion stop?", options: ["The print statement", "Swift stops every recursive function automatically", "The base case number <= 0"], answer: 2
    },
    {
        title: "Two Sum Challenge",
        intro: "Context: this final challenge combines the habits from the earlier parts. We need two different positions whose values add to a target in an unsorted array, such as `[2, 7, 11]` with target `9`. Choose an approach, state the input and output, work through a small example, list edge cases, and explain why the method works. A dictionary remembers earlier values.",
        steps: ["Target 9; input [2, 7, 11]", "Read 2: need 7; unseen → remember 2 at 0", "Read 7: need 2; found at 0", "Return indices (0, 1)"],
        code: `func twoSum(_ values: [Int], target: Int) -> (Int, Int)? {
    var seen: [Int: Int] = [:]
    for (index, value) in values.enumerated() {
        let (needed, overflow) = target.subtractingReportingOverflow(value)
        if !overflow, let previous = seen[needed] {
            return (previous, index)
        }
        seen[value] = index
    }
    return nil
}
print(twoSum([2, 7, 11], target: 9) as Any) // Optional((0, 1))`,
        complexity: "Expected O(n) time and O(n) extra space. Look up the complement before storing the current value so an item never pairs with itself. If target − value is outside Int’s range, no Int complement exists, so skip that lookup. Unlike the two-pointer solution, this works without sorting.",
        task: "Solve two sum yourself in the coding area below. Test [2, 7, 11], 9 → (0, 1); [3, 3], 6 → (0, 1); [3], 6 → nil; [] → nil. Any valid pair is acceptable.",
        question: "Why look up the complement before storing the current item?", options: ["To avoid pairing an item with itself", "To sort the dictionary", "To make the array smaller"], answer: 0
    }
];

function showAlgorithmsTrack() {
    showSwiftTalkTopics();
    renderAlgorithms();
    swiftTalksScreen.classList.add("is-viewing-algorithms");
}

function renderAlgorithms() {
    const lessons = document.querySelector("#algorithms-lessons");
    if (lessons.dataset.rendered) return;
    lessons.dataset.rendered = "true";
    const element = (tag, text, className) => {
        const node = document.createElement(tag);
        if (text) node.textContent = text;
        if (className) node.className = className;
        return node;
    };
    const codeBlock = code => {
        const pre = element("pre", "", "talk-code-block");
        const highlighted = element("code", "", "language-swift");
        const annotatedCode = code.split("\n").map(line => {
            if (!line.trim()) return line;
            if (line.includes("//")) {
                const commentIndex = line.indexOf("//");
                const existingComment = line.slice(commentIndex + 2).trim();
                if (existingComment.length > 28) return line;
                const codePart = line.slice(0, commentIndex).trimEnd();
                const explanation = explainSwiftLine(codePart);
                return explanation ? `${codePart} // ${existingComment} — ${explanation}` : line;
            }
            const explanation = explainSwiftLine(line);
            return explanation ? `${line} // ${explanation}` : line;
        }).join("\n");
        if (typeof highlightSwiftCode === "function") {
            highlighted.innerHTML = highlightSwiftCode(annotatedCode);
        } else {
            highlighted.textContent = annotatedCode;
        }
        pre.append(highlighted);
        return pre;
    };
    const explainSwiftLine = line => {
        const trimmed = line.trim();
        if (!trimmed) return "This blank line separates steps and makes the code easier to read.";
        if (trimmed.startsWith("//")) return "This comment explains the result for a reader; Swift does not run it.";
        if (trimmed.includes("frequencies(_ values")) return "`frequencies` receives an integer array named `values` and returns a dictionary containing how many times each number appears.";
        if (trimmed.includes("binarySearch(_ values")) return "`binarySearch` receives a sorted integer array and a target, then returns the target's index or `nil` when the target is absent.";
        if (trimmed.includes("insertionSort(_ values")) return "`insertionSort` receives an integer array and returns a new array with the same values arranged from smallest to largest.";
        if (trimmed.includes("hasPair(_ values")) return "`hasPair` receives a sorted array and a target sum, then reports whether two different values add up to that target.";
        if (trimmed.includes("maxWindowSum(_ values")) return "`maxWindowSum` receives an array and a window size, then returns the largest sum of that many consecutive values.";
        if (trimmed.includes("func twoSum(_ values")) return "`twoSum` receives an unsorted array and a target, then returns two different indexes whose values add up to the target, or `nil` if no pair exists.";
        if (trimmed.includes("func countdown(_ number")) return "`countdown` receives a starting number and prints a countdown to 1. It returns nothing because its job is to demonstrate the recursive steps.";
        if (trimmed.includes("values.first")) return "`.first` reads the first item in the array. It returns an Optional because an empty array has no first item; `guard` handles that empty case safely.";
        if (trimmed.includes("values.dropFirst()")) return "`values` is the array passed into the function. `.dropFirst()` gives us every item except the first one, because the first item is already being used as the starting `best` value. The `for` loop then checks those remaining items one by one.";
        if (trimmed.includes("countExclamations")) return "`countExclamations` is a reusable function. It receives a `String` named `text`, counts every `!` character inside it, and returns the total as an `Int`.";
        if (trimmed === "var count = 0") return "We create `count` to store how many exclamation marks we have found. It starts at `0` because we have not checked any characters yet, and it increases each time we find `!`.";
        if (trimmed.startsWith("var counts:")) return "We create an empty dictionary named `counts`. It will store each number as a key and that number's frequency as its value.";
        if (trimmed.startsWith("var seen:")) return "We create an empty dictionary named `seen` so we can remember a value's index while scanning the array.";
        if (trimmed.startsWith("var result =")) return "We make a mutable copy named `result` because the sorting steps will rearrange its values.";
        if (trimmed.startsWith("var sum =")) return "We calculate the sum of the first window. This gives the algorithm its first real window to compare.";
        if (trimmed.startsWith("var best =")) return "We store the best result found so far. Starting with the first valid value gives us a correct baseline, including when values are negative.";
        if (trimmed.startsWith("var left =")) return "`left` marks the first candidate position in the sorted array.";
        if (trimmed.startsWith("var right =")) return "`right` marks the last candidate position in the sorted array.";
        if (trimmed.startsWith("var low =")) return "`low` marks the beginning of the remaining binary-search range.";
        if (trimmed.startsWith("var high =")) return "`high` marks the end of the remaining binary-search range; this upper bound is excluded.";
        if (trimmed === "guard number > 0 else { return }") return "This is the base case. When `number` reaches 0 or below, the function returns immediately, stopping the recursion.";
        if (trimmed === "print(number)") return "This prints the current number before the next recursive call, producing 3, then 2, then 1.";
        if (trimmed === "countdown(number - 1)") return "This calls `countdown` again with a smaller number. Each call moves one step closer to the base case, so the recursion eventually stops.";
        if (trimmed === "var stack: [Int] = []") return "This creates an empty integer stack. A stack is last in, first out, so the newest value will be removed first.";
        if (trimmed === "stack.append(10)") return "This pushes 10 onto the stack as its first item.";
        if (trimmed === "stack.append(20)") return "This pushes 20 on top of 10. Because the stack is last in, first out, 20 will come out first.";
        if (trimmed.startsWith("print(stack.popLast")) return "`popLast()` removes and returns the newest stack item, 20, so print displays `Optional(20)`.";
        if (trimmed === "var queue = [10, 20]") return "This creates a queue with 10 first and 20 second. A queue is first in, first out.";
        if (trimmed === "var head = 0") return "`head` stores the index of the next queue item to read. It starts at 0, the first position.";
        if (trimmed === "queue.append(30)") return "This adds 30 to the end of the queue, after 10 and 20.";
        if (trimmed === "while head < queue.count {") return "This keeps reading while `head` still points to an item that exists in the queue.";
        if (trimmed === "let next = queue[head]") return "This reads the item at the current `head` position without removing earlier items.";
        if (trimmed === "head += 1") return "After reading one item, this advances `head` so the next loop reads the next queue position.";
        if (trimmed === "print(next)") return "This displays the item just read. Because `head` moves forward, the output is 10, then 20, then 30.";
        if (trimmed === "for character in text {") return "We loop through `text` one `Character` at a time. This lets us inspect every character and decide whether it is an exclamation mark.";
        if (trimmed === "for value in values {") return "We visit every input value once so we can update the dictionary with that value's frequency.";
        if (trimmed.includes("for (index, value) in values.enumerated()")) return "We visit each value together with its index, which lets us remember or return positions in the original array.";
        if (trimmed === "if character == \"!\" { count += 1 }") return "We compare the current `character` with `!`. When they match, `count += 1` adds one because we found another exclamation mark.";
        if (trimmed.includes("counts[value, default: 0] += 1")) return "We look up this number in `counts` and add one to its frequency. If the number is new, `default: 0` starts its count at zero first.";
        if (trimmed.startsWith("if sum == target")) return "If the two current values add up to the target, we have found a valid pair and can finish successfully.";
        if (trimmed.startsWith("if sum < target")) return "A sum that is too small needs a larger value, so we move `left` to the right.";
        if (trimmed.startsWith("if values[mid] == target")) return "If the middle value equals the target, we found the target and return its index.";
        if (trimmed.startsWith("let mid =")) return "We calculate the middle index of the remaining search range so binary search can discard half of it.";
        if (trimmed.startsWith("print(")) return "This calls the method with the sample input and displays the result it returns.";
        if (trimmed === "return count") return "We return the finished `count` to the code that called the function. That value is the total number of exclamation marks found in `text`.";
        if (trimmed.includes("maximum(_ values")) return "`maximum` is a reusable function. It receives an integer array named `values`, finds the largest number in it, and returns that number as an `Int?`. The Optional return allows it to return `nil` when the array is empty.";
        if (trimmed === "guard var best = values.first else { return nil }") return "We safely get the first value as the starting `best`. If `values` is empty, `.first` is `nil`, so `guard` immediately returns `nil` because there is no maximum to find.";
        if (trimmed === "if value > best { best = value }") return "We compare the current `value` with `best`. If it is larger, we replace `best`; otherwise the current best remains unchanged.";
        if (trimmed === "return best") return "We return the largest value found after every item has been checked.";
        if (trimmed.startsWith("func ")) return "This declares a reusable function. The name and parameter types describe what the function receives and returns.";
        if (trimmed.startsWith("guard ")) return "This checks a condition that must be true. If it is false, the function exits safely with the value after `else`.";
        if (trimmed.startsWith("for ")) return "This starts a loop. Swift runs the indented lines once for each item in the collection.";
        if (trimmed.startsWith("while ")) return "This repeats the indented lines while the condition remains true.";
        if (trimmed.startsWith("if ")) return "This tests a condition. The code inside runs only when the condition is true.";
        if (trimmed.startsWith("else")) return "This provides the alternative path when the preceding condition is false.";
        if (trimmed.startsWith("return ")) return "This sends a result back to the caller and finishes the current function.";
        if (trimmed.startsWith("let ")) return "This creates a constant: a named value that cannot be reassigned later.";
        if (trimmed.startsWith("var ")) return "This creates a variable: a named value that can be changed later.";
        if (trimmed.startsWith("var ") || trimmed.includes("var ")) return "This creates or updates a value that the algorithm will use as it works.";
        if (trimmed.includes("+=") || trimmed.includes("-= ") || trimmed.includes("-= ")) return "This updates the running value by adding or subtracting the current item.";
        if (trimmed === "}" || trimmed === "})" || trimmed === "},") return "";
        if (trimmed.startsWith("print(")) return "`maximum` scans the array and returns its largest value. `as Any` lets print display the Optional result, so this prints `Optional(9)`.";
        if (trimmed.startsWith("import ")) return "This makes code from another module available to use.";
        return "This line performs the next small step of the algorithm, using the values prepared above.";
    };
    const lineExplanation = code => {
        const list = element("ol", "", "algorithm-line-explanations");
        code.split("\\n").forEach((line, index) => {
            const item = element("li");
            const source = element("code", line || "(blank line)");
            const explanation = element("span", explainSwiftLine(line));
            item.append(source, explanation);
            item.value = index + 1;
            list.append(item);
        });
        return list;
    };
    algorithmLessons.forEach((lesson, index) => {
        const article = element("article", "", "talk-card talk-accordion-item");
        const trigger = element("button", "", "talk-accordion-trigger");
        trigger.type = "button";
        trigger.setAttribute("aria-expanded", "false");
        const heading = element("span");
        heading.append(element("span", `Part ${index + 1}`, "talks-kicker"), element("span", lesson.title, "talk-accordion-title"));
        const chevron = element("span", "", "talk-chevron");
        chevron.setAttribute("aria-hidden", "true");
        trigger.append(heading, chevron);
        const details = element("div", "", "talk-accordion-panel");
        details.id = `algorithms-part-${index + 1}`;
        trigger.setAttribute("aria-controls", details.id);
        trigger.addEventListener("click", () => {
            const expanded = article.classList.toggle("is-expanded");
            trigger.setAttribute("aria-expanded", String(expanded));
        });
        if (index === 0) details.append(document.querySelector("#algorithms-introduction").content.cloneNode(true));
        if (lesson.intro) details.append(element("p", lesson.intro));
        details.append(element("h3", index === 0 ? "Visual walkthrough: finding the maximum" : "Visual walkthrough"));
        const steps = element("ol", "", "algorithm-steps");
        lesson.steps.forEach(step => steps.append(element("li", step)));
        details.append(steps, element("h3", "Swift solution"), codeBlock(lesson.code), element("h3", "Complexity explanation"), element("p", lesson.complexity));
        article.append(trigger, details);
        lessons.append(article);

        const challenge = element("details", "", "algorithm-challenge");
        challenge.append(element("summary", `${index + 1}. ${lesson.title}`), element("p", lesson.task));
        const label = element("label", "Your Swift solution");
        const draft = element("textarea", "", "algorithm-editor");
        draft.id = `algorithm-draft-${index}`;
        label.htmlFor = draft.id;
        draft.spellcheck = false;
        draft.rows = 9;
        draft.placeholder = "// Write your solution here, then run it in an Xcode Playground.";
        const status = element("p");
        status.setAttribute("role", "status");
        try { draft.value = localStorage.getItem(draft.id) || ""; } catch { status.textContent = "Draft storage unavailable. Copy your code before leaving."; }
        draft.addEventListener("input", () => {
            try { localStorage.setItem(draft.id, draft.value); status.textContent = "Draft saved in this browser."; }
            catch { status.textContent = "Could not save. Copy your code before leaving."; }
        });
        const reference = element("details");
        reference.append(element("summary", "Review the lesson reference solution"), element("p", "This is the lesson example. Adapt it to the practice task, then check every listed input and explain your time and space costs."), codeBlock(lesson.code));
        challenge.append(label, draft, status, reference);
        document.querySelector("#algorithms-challenges").append(challenge);
    });
    const quizExtras = [
        ["What should an algorithm have?", ["Clear steps and a stopping point", "Only mathematical formulas", "No input"], 0],
        ["What does O(1) extra space mean here?", ["The method stores a fixed number of extra values", "The method always takes one second", "The method checks one value only"], 0],
        ["What does a Set keep?", ["Unique values", "Key-value pairs", "Sorted indexes"], 0],
        ["What does a dictionary key identify?", ["The value we use to look up information", "The array's length", "A loop condition"], 0],
        ["When is binary search useful?", ["When the input is sorted", "Only when the input is empty", "Only for strings"], 0],
        ["What does linear search do?", ["Checks items one by one", "Always checks the middle only", "Sorts the input first"], 0],
        ["What is the result of insertion sort?", ["Values arranged in order", "A dictionary of counts", "A Boolean only"], 0],
        ["What does insertion sort shift?", ["Larger sorted values to make room", "Every value into a set", "Only the first value"], 0],
        ["What input does the two-pointer pair method require?", ["A sorted array", "A dictionary only", "A recursive function"], 0],
        ["What happens when the pair sum is too large?", ["Move the right pointer left", "Move the left pointer right", "Add another array"], 0],
        ["What does a fixed-size window represent?", ["A consecutive group of values", "All unique values", "A function return type"], 0],
        ["Why update a window instead of summing it from scratch?", ["To reuse overlapping work", "To sort the array", "To remove all negative values"], 0],
        ["What order does a stack use?", ["Last in, first out", "First in, first out", "Smallest first"], 0],
        ["What order does a queue use?", ["First in, first out", "Last in, first out", "Largest first"], 0],
        ["What must recursion include?", ["A base case", "A dictionary key", "A sorted array"], 0],
        ["What risk does deep recursion have?", ["Using too much call-stack space", "Sorting automatically", "Changing String indexes"], 0],
        ["What does twoSum return?", ["Two indexes or nil", "Only the largest value", "A sorted array"], 0],
        ["Why remember values in a dictionary for twoSum?", ["To find a needed complement quickly", "To sort the input", "To remove duplicates"], 0],
        ["Which is an edge case for twoSum?", ["An empty array", "An array with a target", "A pair that exists"], 0],
        ["What should you explain after solving a challenge?", ["Why it works and its time and space costs", "Only the function name", "The screen colors"], 0]
    ];
    const questions = algorithmLessons.flatMap((lesson, index) => {
        const base = { part: lesson.title, question: lesson.question, options: lesson.options, answers: [lesson.answer] };
        const first = quizExtras[index * 2];
        const second = quizExtras[index * 2 + 1];
        return [base, { part: lesson.title, question: first[0], options: first[1], answers: [first[2]] }, { part: lesson.title, question: second[0], options: second[1], answers: [second[2]] }];
    });
    const form = document.querySelector("#algorithms-quiz-form");
    renderQuizQuestions(form, questions, "algorithms-quiz");
    form.querySelectorAll("input").forEach(input => { input.type = "radio"; });
    const score = document.querySelector("#algorithms-quiz-score");
    document.querySelector("#open-algorithms-quiz").addEventListener("click", () => {
        const sourcePanel = document.querySelector("#algorithms-quiz-panel");
        const screen = document.createElement("section");
        screen.className = "swift-quiz-screen is-open algorithms-quiz-screen";
        screen.setAttribute("aria-hidden", "false");
        screen.innerHTML = `<nav class="quiz-navigation" aria-label="Quiz navigation"><button type="button" class="talks-button algorithms-quiz-back" aria-label="Back to Algorithms topics">← Back</button><button type="button" class="talks-button talks-close algorithms-quiz-close" aria-label="Close Algorithms Quiz">Close</button></nav><div class="swift-talks-content swift-quiz-content"><div class="talks-header"><div><h2>Algorithms Quiz</h2></div><div class="quiz-score-pill algorithms-screen-score" aria-live="polite"></div></div><div class="talk-card swift-quiz-card"><p class="talk-intro">Select every correct answer.</p><div class="swift-quiz-legend algorithms-screen-legend"><span><i class="quiz-swatch correct"></i>Correct selection</span><span><i class="quiz-swatch wrong"></i>Wrong selection</span><span><i class="quiz-swatch missed"></i>Correct answer you missed</span></div><form class="swift-quiz-form algorithms-screen-form"></form><footer class="swift-quiz-footer"><div class="talk-like" data-talk-id="algorithms-quiz"><button type="button" class="like-button" aria-label="Like this quiz" aria-pressed="false"><svg class="like-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"></path></svg></button></div><div class="swift-quiz-actions"><button type="button" class="talks-button primary algorithms-screen-finish">Finish Quiz</button><button type="button" class="talks-button algorithms-screen-reset">Reset</button><a class="talks-button primary swift-quiz-feedback-button" href="mailto:andersonnikko1@gmail.com?subject=Feedback%20on%20Algorithms%20Quiz">Send feedback</a></div></footer></div></div>`;
        document.body.append(screen);
        const likeControl = screen.querySelector("[data-talk-id=\"algorithms-quiz\"]");
        if (likeControl && typeof setupLikeControl === "function") setupLikeControl(likeControl);
        const form = screen.querySelector(".algorithms-screen-form");
        form.innerHTML = document.querySelector("#algorithms-quiz-form").innerHTML.replaceAll("algorithms-quiz", "algorithms-screen-quiz");
        form.querySelectorAll("input").forEach(input => { input.type = "checkbox"; });
        screen.querySelector(".algorithms-screen-finish").addEventListener("click", () => gradeQuiz(questions, "algorithms-screen-quiz", screen.querySelector(".algorithms-screen-score"), screen.querySelector(".algorithms-screen-legend")));
        screen.querySelector(".algorithms-screen-reset").addEventListener("click", () => resetQuiz(form, questions, screen.querySelector(".algorithms-screen-score"), null, null));
        const close = () => { screen.remove(); sourcePanel.hidden = true; document.body.classList.remove("talks-open"); };
        screen.querySelector(".algorithms-quiz-close").addEventListener("click", close);
        screen.querySelector(".algorithms-quiz-back").addEventListener("click", close);
        document.body.classList.add("talks-open");
    });
    document.querySelector("#grade-algorithms-quiz").addEventListener("click", () => gradeQuiz(questions, "algorithms-quiz", score, null));
    document.querySelector("#reset-algorithms-quiz").addEventListener("click", () => resetQuiz(form, questions, score, null, null));
}

document.querySelector("#open-algorithms-track").addEventListener("click", () => { window.location.hash = "algorithms-in-swift"; });
