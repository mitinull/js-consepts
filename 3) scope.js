// What is TDZ (Temporal Dead Zone)
"Hoisted but not initialized";

// How long is TDZ?
`beginning of the block (where variable is declared)
until the variable's declaration is executed.`;

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~

// Types of Scope in JavaScript
`
Global Scope
Local Scope (Function Scope)
Block Scope
Lexical Scope (Static Scope)
`;

// Global Scope
let global = "I'm global!🌐";

// Local Scope (Function Scope)
function localScope() {
  let localVar = "I'm local!🏠";
}

// Block Scope
{
  let blockVar = "I'm block-scoped!";
}

// Lexical Scope (Static Scope)
function outerFunction() {
  let outerVar = "I'm in the outer scope!";

  function innerFunction() {
    console.log(outerVar); // Accessible due to lexical scope
  }

  innerFunction();
}

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~

// The Scope Chain

("Curr Scope --> Parent Scope --> ... --> Global Scope");

function closureExample() {
  let count = 0; // This variable will be remembered by the inner function

  return function increment() {
    count++;
    console.log(count);
  };
}

const counter = closureExample();
counter(); // 1
counter(); // 2

const counter2 = closureExample();
counter2(); // 1

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~

// var does not have block scope

if (true) {
  var test = "No block scope";
}

console.log(test); // "No block scope"

// -~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~

// Shadowing

let value = "outer";

function shadowExample() {
  let value = "inner";
  console.log(value); // "inner"
}
shadowExample();
console.log(value); // "outer"
