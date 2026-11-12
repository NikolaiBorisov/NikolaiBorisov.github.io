const networkingLessons = [
    {
        title: "Build a URL with query items",
        intro: "A search term can contain spaces, punctuation, or an ampersand. Give the term to URLComponents as a value so Foundation can encode it for the query string.",
        code: `import Foundation // Provides URL, URLComponents, and URLQueryItem.
func searchURL(term: String) throws -> URL { // Accept the text a reader entered.
    var parts = URLComponents() // Start with an empty set of URL components.
    parts.scheme = "https" // Use an encrypted connection.
    parts.host = "openlibrary.org" // Send the search to Open Library.
    parts.path = "/search.json" // Select the book search endpoint.
    parts.queryItems = [URLQueryItem(name: "q", value: term)] // Keep the entire term in one query parameter.
    guard let url = parts.url else { throw URLError(.badURL) } // Report a URL that cannot be constructed.
    return url // Give the caller the URL without making a request.
} // End the URL builder.`,
        highlight: "Try Fish & Chips as the term. The ampersand belongs to the search text and should stay inside the q parameter.",
        question: "How should you include a search term containing an ampersand?",
        options: ["Append the raw term after ?q=", "Pass the term as a URLQueryItem value", "Remove all punctuation from the term"], answer: 1
    },
    {
        title: "Fetch data with async/await",
        intro: "URLSession delivers both the downloaded bytes and information about the response. An async function can suspend while the request is in flight, leaving its thread free for other work.",
        code: `import Foundation // Provides the shared session and response types.
func fetch(_ url: URL) async throws -> (Data, URLResponse) { // Let the caller await the result and handle failures.
    let (bytes, response) = try await URLSession.shared.data(from: url) // Send a GET and suspend until it finishes or throws.
    return (bytes, response) // Preserve the body and metadata so the caller can inspect both.
} // End the fetch function.`,
        highlight: "An offline device can produce a thrown error. A server that returns HTTP 404 can still deliver a response and a body.",
        question: "What can happen at await while the request is in flight?",
        options: ["The function can suspend and free its thread", "The response must arrive on the main thread", "HTTP errors automatically become decoding errors"], answer: 0
    },
    {
        title: "Check the HTTP status",
        intro: "A server may send an HTML error page to a client expecting JSON. Inspect the status before handing the body to a decoder, and keep the status code available to the caller.",
        code: `import Foundation // Provides HTTPURLResponse and URLError.
struct HTTPFailure: Error { let status: Int } // Carry the server’s status code in a Swift error.
func checkedBody(_ data: Data, response: URLResponse) throws -> Data { // Inspect a completed request.
    guard let http = response as? HTTPURLResponse else { throw URLError(.badServerResponse) } // Require HTTP metadata.
    guard (200..<300).contains(http.statusCode) else { throw HTTPFailure(status: http.statusCode) } // Accept the successful status range.
    return data // Pass the successful body on for processing.
} // End response validation.`,
        highlight: "A 204 response is successful and has no body. Only decode JSON when the endpoint promises a JSON body.",
        question: "A server returns status 503 and an HTML body. What should the client report first?",
        options: ["An empty list", "A missing JSON field", "The HTTP failure with status 503"], answer: 2
    },
    {
        title: "Decode JSON into Swift models",
        intro: "Practice decoding with a local sample so you can inspect the result offline. The outer brackets represent an array. Each object inside has an integer ID and a display name.",
        code: `import Foundation // Provides Data and JSONDecoder.
struct Contact: Decodable { // Describe one object in the JSON array.
    let id: Int // Require an integer identifier.
    let displayName: String // Store the name using Swift naming conventions.
} // End the contact model.
func sampleContacts() throws -> [Contact] { // Return the decoded sample or propagate a decoding error.
    let json = #"[{"id":7,"display_name":"Sam"}]"# // Keep the JSON quotes intact with a raw string.
    let decoder = JSONDecoder() // Create the decoder for this payload.
    decoder.keyDecodingStrategy = .convertFromSnakeCase // Match display_name to displayName.
    return try decoder.decode([Contact].self, from: Data(json.utf8)) // Decode the UTF-8 bytes as an array of contacts.
} // End the offline example.`,
        highlight: "The sample produces one contact named Sam. A live endpoint with the same schema can supply its response Data directly to decode.",
        question: "Which type matches the outer shape of this sample payload?",
        options: ["Contact", "[Contact]", "String"], answer: 1
    },
    {
        title: "Send a JSON POST request",
        intro: "To submit feedback, encode the message into the request body and tell the server how to read it. Supply a feedback endpoint you control that accepts a JSON message field.",
        code: `import Foundation // Provides the encoder, request, and session.
struct Feedback: Encodable { let message: String } // Describe the field the endpoint expects.
func submit(_ message: String, to url: URL) async throws { // Accept feedback text and its destination.
    var request = URLRequest(url: url) // Create a request whose method, headers, and body can change.
    request.httpMethod = "POST" // Ask the server to process a submission.
    request.setValue("application/json", forHTTPHeaderField: "Content-Type") // Identify the body format.
    request.httpBody = try JSONEncoder().encode(Feedback(message: message)) // Encode the text and escape any embedded quotes.
    let (_, response) = try await URLSession.shared.data(for: request) // Send the configured request and retain its response.
    guard let http = response as? HTTPURLResponse, (200..<300).contains(http.statusCode) else { // Check whether the server accepted the submission.
        throw URLError(.badServerResponse) // Signal that the submission did not receive a successful HTTP response.
    } // Finish checking the status.
} // Return after a successful submission.`,
        highlight: "If the connection drops after sending feedback, the server may already have saved it. Automatically repeating the POST could create a duplicate.",
        question: "Which header describes the format of the body you are sending?",
        options: ["Content-Type", "Accept", "Content-Length"], answer: 0
    },
    {
        title: "Retry a timed-out GET",
        intro: "A timeout can be temporary. For a read-only request, try once more after a short delay. Let other errors reach the caller and let cancellation interrupt the delay.",
        code: `import Foundation // Provides URLSession and transport error codes.
func fetchWithRetry(_ url: URL) async throws -> (Data, URLResponse) { // Fetch a resource and preserve its response metadata.
    do { // Start the first attempt.
        return try await URLSession.shared.data(from: url) // Return immediately when the transfer succeeds.
    } catch let error as URLError where error.code == .timedOut { // Retry only a transport timeout.
        try await Task.sleep(nanoseconds: 500_000_000) // Wait half a second and propagate cancellation during the pause.
        return try await URLSession.shared.data(from: url) // Make one final attempt and propagate any failure.
    } // Other errors propagate without a retry.
} // End the bounded retry.`,
        highlight: "Two timeouts result in two attempts and one thrown error. The caller still checks the HTTP status of any response it receives.",
        question: "What happens if the task is cancelled during the retry delay?",
        options: ["The delay starts over", "The second GET always runs", "The sleep throws and the function exits"], answer: 2
    },
    {
        title: "HTTP methods, status codes, and API clients",
        intro: "Start with the operation the endpoint documents. The method says what you want to do. The response status tells you what happened. When an app behaves unexpectedly, repeat the request in an API client and compare the two responses.",
        code: `import Foundation // Supplies URLRequest, URLSession, and HTTP response types.
func inspectSearch() async throws { // Call with try await from an asynchronous context.
    guard let url = URL(string: "https://openlibrary.org/search.json?q=swift&limit=1") else { throw URLError(.badURL) } // Build a small, repeatable search.
    var request = URLRequest(url: url) // Prepare a request for this URL.
    request.httpMethod = "GET" // Ask the server for search results.
    request.setValue("application/json", forHTTPHeaderField: "Accept") // Ask for a JSON response.
    let (body, response) = try await URLSession.shared.data(for: request) // Collect the bytes and metadata, including for HTTP errors.
    guard let http = response as? HTTPURLResponse else { throw URLError(.badServerResponse) } // Require HTTP metadata before inspecting the status.
    print(http.statusCode, http.mimeType ?? "unknown", body.count) // Compare status, media type, and byte count with the API client.
} // End the inspection example.`,
        sections: [
            ["Choose a method for an API call", [
                "**GET** reads a resource. Fetch a profile or search a catalog. Put supported filters in query items.",
                "**HEAD** requests the headers a GET would return, without downloading the body. Use it to check metadata for a large file.",
                "**POST** submits data for processing. Use it to create an order when the server assigns its URL. A second submission can create another order.",
                "**PUT** creates or replaces the representation at a known URL. Send the full representation required by the endpoint when saving a replacement.",
                "**PATCH** applies a set of changes. Use the documented patch format to edit one field. Retrying an increment can apply it twice.",
                "**DELETE** requests removal of the resource at the URL. Repeating it has the same intended effect, even if the second response is 404.",
                "**OPTIONS** asks about communication options for a target. Check Allow when present. Browsers also use this method for CORS preflight.",
                "**QUERY** runs a read-only query with a request body. Use it for complex filters when the service explicitly supports it.",
                "**CONNECT** asks a proxy to establish a tunnel, commonly for HTTPS. The networking stack normally handles this.",
                "**TRACE** asks a server to echo the request for protocol diagnostics. Many servers disable it. Keep credentials out of diagnostic requests."
            ]],
            ["Specialized methods you may see in protocol documentation", [
                "Use these only with a server that implements the corresponding extension. WebDAV exposes remote files, collections, and properties over HTTP.",
                "**PROPFIND** reads WebDAV properties or lists collection members. **PROPPATCH** sets or removes properties. **REPORT** requests a structured report. **SEARCH** executes a server-supported WebDAV search.",
                "**MKCOL** creates a collection. **MKCALENDAR** creates a calendar collection. **COPY** duplicates a resource at a destination. **MOVE** relocates it. **ORDERPATCH** rearranges members of an ordered collection.",
                "**LOCK** obtains or refreshes a write lock for coordinated edits. **UNLOCK** releases it. **ACL** updates access-control entries when administering permissions.",
                "**BIND** adds a collection entry pointing to an existing resource. **UNBIND** removes a binding. **REBIND** moves a binding. **LINK** adds a typed relationship in APIs implementing that extension. **UNLINK** removes one.",
                "**MKREDIRECTREF** creates a WebDAV redirect reference. **UPDATEREDIRECTREF** changes its target or redirect behavior.",
                "**VERSION-CONTROL** places a resource under version control. **CHECKOUT** starts editing a version-controlled resource. **CHECKIN** records a new version. **UNCHECKOUT** discards checkout changes.",
                "**UPDATE** selects the version for a version-controlled resource. **LABEL** assigns, changes, or removes a version label. **MERGE** integrates version histories.",
                "**MKWORKSPACE** creates a versioning workspace. **MKACTIVITY** creates an activity to group changes. **BASELINE-CONTROL** puts a configuration under baseline control so its members can be versioned together.",
                "**PRI** is reserved for the HTTP/2 connection preface. A protocol implementation emits it. The registry’s asterisk entry is reserved for future use."
            ]],
            ["Repeat the Swift request in an API client", [
                "**Postman** lets you build and save requests visually. Open an HTTP request, select GET, enter https://openlibrary.org/search.json and add q = swift and limit = 1 in Params. Set Accept to application/json under Headers and press Send. Compare the status, response headers, and raw body with the Swift example.",
                "**curl** is useful for a reproducible Terminal command. Run `curl -i -H 'Accept: application/json' 'https://openlibrary.org/search.json?q=swift&limit=1'`. The quotes keep the query together. The -i option prints response headers before the body. curl leaves redirects visible by default. Add -L to follow them.",
                "**Insomnia** is a desktop API client for saving related requests together. Create an HTTP request in a collection, paste the same URL including its query, choose GET, add the Accept header, and send. Inspect the response body and headers side by side with the app’s result.",
                "**Try a write request** against your own feedback endpoint from Part 5. Select POST, choose a JSON body, and enter `{\"message\":\"Thanks!\"}`. Check the outgoing Content-Type and the response status. For a 415, compare that outgoing header and the actual body format with the endpoint documentation.",
                "**If only Swift fails**, compare the final URL, method, query, authorization scheme, body bytes, redirects, and cache behavior. A 200 with unexpected HTML can be a redirect to a sign-in page. A thrown URLError before any HTTP response points to a transport issue such as DNS, TLS, or connectivity. Inspect the error code before changing the decoder."
            ]],
            ["1xx · Progress before the final response", [
                "**100 Continue** — The server accepts the initial headers. A client using Expect: 100-continue can now send the body.",
                "**101 Switching Protocols** — A requested upgrade was accepted. Check the Upgrade header and hand the connection to the negotiated protocol.",
                "**102 Processing** — A legacy WebDAV server is still working. Wait for the final response before marking the operation complete.",
                "**103 Early Hints** — The server sent preliminary headers, often resource links. Use supported hints and wait for the final status.",
                "**104 Upload Resumption Supported** — A temporary registration for resumable uploads. Check the negotiated upload protocol and its resume information before continuing an interrupted transfer."
            ]],
            ["2xx · The request succeeded", [
                "**200 OK** — The operation succeeded. Check Content-Type and the endpoint schema before decoding the body.",
                "**201 Created** — The server created a resource. Inspect Location when provided to find its URL.",
                "**202 Accepted** — Work was queued. Use the documented status endpoint or completion notification to learn the outcome.",
                "**203 Non-Authoritative Information** — A proxy transformed the origin response. Inspect intermediary configuration if content differs.",
                "**204 No Content** — The action succeeded with no response body. Finish without decoding JSON.",
                "**205 Reset Content** — The action succeeded and the server asks the client to reset the input view. Clear the submitted form.",
                "**206 Partial Content** — A range request returned part of a representation. Check Content-Range or the multipart ranges before assembling the file.",
                "**207 Multi-Status** — A WebDAV response contains separate outcomes. Read each resource or property status to find failures.",
                "**208 Already Reported** — A WebDAV multistatus has already listed this bound resource elsewhere. Reuse the earlier entry.",
                "**226 IM Used** — The response includes an instance manipulation such as a delta. Check the IM header and the base representation before applying it."
            ]],
            ["3xx · Redirects and cache validation", [
                "**300 Multiple Choices** — Several representations are available. Select a supported alternative from the response.",
                "**301 Moved Permanently** — The resource has a lasting new URL. Inspect Location and update stored links. Some clients change POST to GET when following it.",
                "**302 Found** — The resource currently points elsewhere. Inspect Location and the follow-up method, especially after a POST.",
                "**303 See Other** — The result is available at another URL. Retrieve it with GET, commonly after submitting a form.",
                "**304 Not Modified** — A conditional read matched the cached version. Reuse the cached body. If it is missing, fetch again without the validator.",
                "**305 Use Proxy** is deprecated. Inspect legacy server configuration if emitted. **306** is unused and has no standard recovery behavior.",
                "**307 Temporary Redirect** — Follow Location with the original method and body for this request.",
                "**308 Permanent Redirect** — Update the target URL and preserve the original method and body."
            ]],
            ["4xx · Inspect the request, credentials, and resource state", [
                "**400 Bad Request** — The server cannot parse or accept the request. Inspect the error body, URL encoding, and raw payload.",
                "**401 Unauthorized** — Valid authentication is required. Inspect WWW-Authenticate, then supply or refresh the credential for this API.",
                "**402 Payment Required** — Reserved for future use. If an API uses it for billing, consult that provider’s error details.",
                "**403 Forbidden** — Server policy denies the operation. Verify the account, resource ownership, and required permissions.",
                "**404 Not Found** — The route or resource is missing, or the service hides its existence. Verify host, API version, identifier, and access.",
                "**405 Method Not Allowed** — This route rejects the method. Check Allow and use the documented method for this URL.",
                "**406 Not Acceptable** — The server cannot supply a representation matching the negotiation headers. Check Accept and supported formats.",
                "**407 Proxy Authentication Required** — A proxy requires credentials. Inspect Proxy-Authenticate and the device’s proxy configuration.",
                "**408 Request Timeout** — The server waited too long for the complete request. Inspect upload progress and connectivity before repeating a safe operation.",
                "**409 Conflict** — The operation conflicts with current state, such as a duplicate name. Read the conflict details, refresh state, and revise the change.",
                "**410 Gone** — The resource was intentionally removed and the condition is likely permanent. Remove stale links or use a documented replacement.",
                "**411 Length Required** — The server requires a known body length. Supply a body with a known byte count so the client can send Content-Length.",
                "**412 Precondition Failed** — A condition such as If-Match failed. Fetch the latest representation and reconcile edits before resubmitting.",
                "**413 Content Too Large** — The payload exceeds a server or proxy limit. Check the limit and reduce the upload or use supported chunked uploads.",
                "**414 URI Too Long** — The request URL exceeds a limit. Shorten the query or use an endpoint that accepts filters in a body.",
                "**415 Unsupported Media Type** — The request format or encoding is unsupported. Match Content-Type, Content-Encoding, and actual bytes to the API contract.",
                "**416 Range Not Satisfiable** — The requested range cannot be served. Check the current file length and restart with a valid byte offset.",
                "**417 Expectation Failed** — A server or intermediary cannot meet the Expect header. Check support and remove an optional expectation when appropriate.",
                "**418** is unused in the standard. Consult the API’s own documentation if it assigns this number a meaning.",
                "**421 Misdirected Request** — The connection reached a server unable to serve this target. Check host and routing, and try a fresh connection.",
                "**422 Unprocessable Content** — The format parses but the instructions fail validation. Inspect field errors, data types, and domain rules.",
                "**423 Locked** — A WebDAV lock prevents the edit. Check lock ownership and use a valid lock token or wait for release.",
                "**424 Failed Dependency** — A dependent operation failed. Inspect the batch results and resolve the earlier failure first.",
                "**425 Too Early** — The server rejects potentially replayable early data. Retry after the TLS handshake finishes.",
                "**426 Upgrade Required** — The endpoint needs a different protocol. Inspect Upgrade and configure a supported client protocol.",
                "**428 Precondition Required** — The server requires a conditional write. Fetch the current validator and send the required condition, commonly If-Match.",
                "**429 Too Many Requests** — A rate limit was reached. Honor Retry-After when supplied and reduce request frequency.",
                "**431 Request Header Fields Too Large** — One header or their combined size exceeds a limit. Inspect oversized cookies and repeated headers.",
                "**451 Unavailable For Legal Reasons** — A legal restriction blocks access. Read the response explanation and contact the provider for availability."
            ]],
            ["5xx · Inspect the service and its dependencies", [
                "**500 Internal Server Error** — An unexpected server failure interrupted processing. Record the time and request ID so the service owner can find the exception.",
                "**501 Not Implemented** — The server lacks a capability needed for the request. Check method support and use a supported endpoint or implementation.",
                "**502 Bad Gateway** — A gateway received an invalid upstream response. Check the upstream connection, protocol, and gateway logs.",
                "**503 Service Unavailable** — Maintenance or overload temporarily prevents service. Honor Retry-After when present and check service health.",
                "**504 Gateway Timeout** — An upstream dependency took too long. Trace gateway and upstream timings before changing the app’s timeout.",
                "**505 HTTP Version Not Supported** — The server rejects the request’s HTTP major version. Check client, proxy, and server protocol configuration.",
                "**506 Variant Also Negotiates** — Negotiation selected a variant that itself negotiates. Correct the server’s variant mapping.",
                "**507 Insufficient Storage** — The server cannot store what the operation needs. Check server quotas and free or provision capacity.",
                "**508 Loop Detected** — The server encountered a cycle while traversing resources. Inspect WebDAV bindings and remove the cycle.",
                "**510 Not Extended** — An obsolete HTTP extension mechanism required additional declarations. Review legacy configuration and migrate to a supported API.",
                "**511 Network Authentication Required** — An intervening network requires sign-in. Complete the captive portal login, then repeat the request."
            ]]
        ],
        highlight: "Unassigned numbers have no standardized individual meaning. For a provider-specific code, start with its status family and the provider’s documentation. Capture the request ID and redact credentials before sharing diagnostics.",
        quiz: [
            {
                question: "A profile endpoint accepts a partial edit to the display name. Which documented method fits that operation?",
                options: ["HEAD", "PATCH", "OPTIONS"], answer: 1
            },
            {
                question: "A background export returns 202 and a status URL. What should the app do next?",
                options: ["Check the status URL for completion", "Decode the response as the finished export", "Create another export immediately"], answer: 0
            },
            {
                question: "A save with If-Match returns 412 after someone else edited the record. How should the app recover?",
                options: ["Repeat with the same validator", "Delete the remote record", "Fetch the latest version and reconcile the edits"], answer: 2
            },
            {
                question: "A JSON POST succeeds in Postman but the Swift request gets 415. What should you compare first?",
                options: ["The order of the response headers", "The outgoing Content-Type and body encoding", "The app’s timeout interval"], answer: 1
            }
        ]
    },
    {
        title: "Choose a networking API for the job",
        intro: "A profile fetch, a large file download, and a live chat have different lifetimes. Choose the transfer first, then decide how the caller will receive results. For example, a download task writes a PDF to disk while a data task collects its bytes in memory.",
        code: `import Foundation // Provides the session, HTTP metadata, and file manager.
func saveDownload(from url: URL, to destination: URL, session: URLSession = .shared) async throws { // Accept an unused destination in an existing directory and allow the caller to supply its session.
    let (temporaryFile, response) = try await session.download(from: url) // Stream the transfer to a temporary file.
    guard let http = response as? HTTPURLResponse, http.statusCode == 200 else { // Require the complete HTTP representation for this file.
        throw URLError(.badServerResponse) // Stop before saving an error page or a partial download.
    } // Finish checking the response.
    try FileManager.default.moveItem(at: temporaryFile, to: destination) // Move the finished download into app storage while the temporary file is available.
} // Return after the file has been saved.`,
        sections: [
            ["Choose how results arrive", [
                "**Async/await** suits a request with one result. Tie a search to SwiftUI’s task(id:) so changing the term cancels the previous task. Check cancellation before publishing results. Use async let for independent requests needed by the same screen.",
                "**Completion handlers** fit callback-based code. Create a dataTask, call resume(), and handle data, response, and error in the closure. **URLSession delegates** deliver repeated events such as transfer progress, authentication challenges, and collected task metrics.",
                "**Combine** fits a screen already driven by publishers. Start with dataTaskPublisher(for:), validate the HTTP response, decode the output, and retain the subscription for the lifetime of the operation."
            ]],
            ["Choose a transfer and session", [
                "**Upload tasks** send bytes or files. For a large video, upload from a file URL and observe delegate progress. If transfers must continue while iOS suspends the app, use a background session with a stable identifier, file-backed upload or download tasks, and delegate completion handling.",
                "**Streaming HTTP** fits a feed delivered incrementally in one response. With bytes(for:), inspect the status first, then consume incoming lines as they arrive. **URLSessionWebSocketTask** fits two-way chat. Start the task, send messages, and receive repeatedly while the conversation is open.",
                "**Session configuration and caching** determine what requests share. Use a default session and URLCache for HTTP caching under the server’s Cache-Control rules. An ephemeral configuration keeps session caches and credentials out of persistent storage. Store data explicitly if the app promises offline access."
            ]],
            ["Choose a client and diagnose failures", [
                "**Authenticated APIs** often expect a bearer token in the Authorization header over HTTPS. Keep persistent secrets in Keychain. Coordinate refresh when several requests encounter an expired token, and limit retries so a rejected credential cannot cause a loop.",
                "**A reusable API client** can accept a URLSession and centralize request building, HTTP validation, and decoding. In tests, inject a session configured with a URLProtocol stub to supply a successful payload, malformed JSON, or a transport error on demand.",
                "**Alamofire** builds on URLSession and supplies reusable request interceptors, validation, and multipart encoding. Consider it when several endpoints need those features. For schema-driven services, a generated OpenAPI or GraphQL client can also supply typed operations and models.",
                "**Network.framework** fits a custom TCP or UDP protocol, such as communicating with a local device. NWPathMonitor reports changes in the available network path. Attempt the actual request to learn whether a particular server is reachable.",
                "**URLSessionTaskMetrics** helps explain a slow request from the app itself. Inspect transaction timings for DNS, connection setup, and waiting for the first response byte. Compare with the same request in Postman to narrow down where the delay occurs."
            ]]
        ],
        highlight: "For a large PDF, choose a download task first. Then decide whether the transfer needs background execution and whether your screen needs progress updates.",
        question: "An iOS app must keep downloading a large file while the app is suspended. Which approach fits?",
        options: ["A data task publisher retained by the screen", "A download task in a background URLSession with delegate handling", "A repeating Timer that starts a GET"], answer: 1
    }
];

const networking = createFrameworkTrack({
    id: "networking",
    framework: "Foundation",
    category: "Networking Track",
    title: "Networking in Swift",
    description: "Learn URLSession and async/await, decode JSON into Swift models, send requests, and handle failures.",
    parts: networkingLessons.map((lesson, index) => ({
        part: `Part ${index + 1}`,
        title: lesson.title,
        intro: lesson.intro,
        examples: [{ label: lesson.title, language: "swift", code: lesson.code }],
        sections: lesson.sections ?? [],
        highlight: lesson.highlight
    })),
    quizQuestions: networkingLessons.flatMap(lesson => (lesson.quiz ?? [lesson]).map(item => ({
        part: lesson.title, question: item.question, options: item.options, answers: [item.answer]
    }))),
    hashtags: "#Swift #URLSession #Networking",
    afterCard: swiftui.card
});
