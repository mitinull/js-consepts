`The Event Loop is the mechanism that allows JavaScript
to handle asynchronous operations despite being single-threaded.`;

// Stack (if empty ->) Microtasks(Promises) -> Macrotasks(SetTimeout)

// After the call stack is empty,
// the Event Loop moves one task from the microtask queue to the stack.

console.log("Start"); // {#1/5 first log}

setTimeout(() => console.log("setTimeout"), 0); // Macrotask {#5/5 fifth log}

Promise.resolve()
  .then(() => console.log("Promise 1")) // Microtask {#3/5 third log}
  .then(() => console.log("Promise 2")); // Microtask {#4/5 forth log}

console.log("End"); // {#2/5 second log}

// =~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=
// EXAMPLE 2

setTimeout(() => {
  setTimeout(() => console.log("5)  Macro1 > Macro")); // #5/6
  Promise.resolve().then(() => console.log("2)  Macro1 > Micro")); // #2/6
  console.log("1)  Macro1"); // #1/6
}, 0);

setTimeout(() => {
  setTimeout(() => console.log("6)  Macro2 > Macro")); // 6/6
  Promise.resolve().then(() => console.log("4)  Macro2 > Micro")); // #4/6
  console.log("3)  Macro2"); // #3/6
}, 0);

// =~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=

// EXAMPLE 3

`The browser's repaint function is placed in the task queue,
so we should avoid placing slow code on the call stack.`;

// BAD (browser can't repaint until stack is empty)
Array(10)
  .fill()
  .forEach(() => {
    // Slow Code
  });

// BETTER (browser can repaint between operations)
Array(10)
  .fill()
  .forEach(() => {
    setTimeout(() => {
      // Slow Code
    }, 0);
  });

// =~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=

// queueMicrotask

setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log("TIMEOUT"); // #2
    });
    queueMicrotask(() => console.log("QUEUE MICROTASK")); // #1
  });
}, 0);

// =~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=

`If we didn't have asynchronous behavior,
the browser would halt while waiting for a single request to complete.`;

// In browser we have web apis.
// In Node.js we have c++ apis.

// v8 doesn't have setTimeout by itself.
// setTimeout is provided by browser.
// (the browser runs a timer for you and when its done,
// it puts the callback into call stack)
`The time specified is the duration it takes for the callback
to be moved to the task queue, not the call stack.
It may take longer than the specified duration for the callback
to enter the call stack and be executed.`;

setTimeout(() => {
  const seconds = new Date().getTime() / 1000;

  setTimeout(() => {
    console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`); // #2
  }, 500);

  while (true) {
    if (new Date().getTime() / 1000 - seconds >= 1) {
      console.log("Good, looped for 1 seconds"); // #1
      break;
    }
  }
}, 1000);
