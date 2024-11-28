// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~

// var

console.log({ a1 }); // undefined (hoisted but not initialized)
var a1 = 5;
console.log({ a1 }); // 5

// What happens under the hood:
// The code is converted to:

var a2 = undefined; // Declaration is hoisted and initialized with undefined
console.log({ a2 }); // undefined
a2 = 5; // Initialization happens here
console.log({ a2 }); // 5

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~

// let, const

// console.log({b});  // ReferenceError
let b = 5; // Initialization happens here
console.log({ b }); // 5

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~

// function declaration

hello(); // "Hello, world!" (can be called before its declaration)

function hello() {
  console.log("Hello, world!");
}
