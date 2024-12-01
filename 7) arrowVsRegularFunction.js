// =~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=

// # SYNTAX

function double(a) {
  return a * 2;
}

// no need for function keyword
// [sometimes] no need for return keyword.
// [sometimes] no need for parentheses.
// prettier-ignore
const arrowDouble = a => a * 2;

console.log("double 3 :", double(3), arrowDouble(3)); // 3 3

// =~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=

// # THIS VALUE

const obj1 = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // `this` refers to the object
  },
};

obj1.regularFunction(); // Outputs: 42

const obj2 = {
  value: 42,
  arrowFunction: () => {
    console.log(this.value); // `this` refers to the outer context (window, global or undefined in strict mode)
  },
};

obj2.arrowFunction(); // Outputs: undefined (or throws in strict mode)

// =~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=

// # CONSTRUCTOR FUNCTIONS

function Person(name) {
  this.name = name;
}
const person = new Person("Mohammad");
console.log(person.name); // Outputs: Mohammad

// # ARROW FUNCTIONS CAN NOT BE CONSTRUCTOR

// =~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=

// # FUNCTION DECLARATION
function functionName() {}
// function declarations are hoisted and their definitions are also hoisted.

// # ARROW FUNCTIONS CAN NOT BE DECLARED
// just anonymous:
const foo = function () {};
const bar = () => {};
// the definition of anonymous functions is not hoisted.

// =~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=

// # `ARGUMENTS`

function logArguments1() {
  console.log(arguments); // `arguments` is available in regular functions
}
logArguments1(1, 2, 3); // Outputs: [1, 2, 3]

const logArguments2 = () => {
  console.log(arguments); // Not available in arrow functions
};
// logArguments2(1, 2, 3); // Logs parent arguments
