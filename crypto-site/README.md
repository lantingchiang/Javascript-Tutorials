# Description
This is a simple cryptocurrency app. Documents my attempts & notes on following a truly beginner friendly introduction to development with Express.<br>
Express tutorial: https://medium.com/thebit/intro-to-javascript-on-the-server-and-apis-8a117f937360
Npm introduction: https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/ 

# Things used
1. Express: Node.js web app framework
2. npm: Node package manager
3. EJS: embedded javascript templating -- generates HTML with Javascript (templating engine)
4. node-fetch: package to fetch json data from 3rd party API endpoint (need additional installation cuz it's not shipped with Node, but `fetch` is built into Javascript runtime in browsers)

# Concepts
1. Model, View, Controller architecture:
controller = function passed into routes
2. Query Parameter:
Things after `?` in a URL. Passes dynamic information (key value pairs) to route. Can be accessed with the `req` object, e.g. `req.query.keyName`.
3. [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises):
An object representing eventual completion or failure of asynchronous operation and its resulting value, which isn't necessarily known when promise was created. Can attach callbacks to the function that generates it, instead of passing callbacks as parameters to that function. There could be a successCallBack and a failureCallBack
`.then()` and `.catch()` methods also return promises, allowing them to be chained together. Each `.then()` isn't executed until the previous one **resolves**. Use one call to `then()` per transformation of data. The `.catch()` executes if **any** of the functions throw an error. 
4. [Asynchronous](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff#:~:text=JavaScript%20is%20a%20single%2Dthreaded,can%20happen%20at%20a%20time.&text=Using%20asynchronous%20JavaScript%20(such%20as,without%20blocking%20the%20main%20thread.)
Javascript is a single-threaded language, meaning there's only one **call stack** (Last-In-First-Out) to store execution context. Functions that take a long time to finish block the other functions (under it) on the call stack. Asynchronous callbacks are the solution. The Javascript runtime environment (provided by the browser or Node.js) provdies a **event loop** and **message/task queue**. The function that takes a long time is pushed on the callstack, executed, and popped (tho not necessarily finished). The callback function is pushed to the task queue, and the event loop constantly checks whether the callstack is empty. If it is, it executes the pending callback in the task queue by pushing it onto the call stack.

# EJS notes
- `<%= key %>` outputs value that `key` is mapped to into the template
- Surround Javascript code with `<% %>` on each line