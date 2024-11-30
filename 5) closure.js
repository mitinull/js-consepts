// Closure is result of lexical(static) scoping. {محصور شدن}

("Curr Scope --> Parent Scope --> ... --> Global Scope");

`A closure is a function that "remembers" the environment in which it was created,
even after the outer function has finished executing.`;

function closureExample() {
  let count = 1000; // This variable will be remembered by the inner function

  function increment() {
    count++;
    console.log({ count });
  }

  count = 0;

  console.log({ count }, "outside increment function.");

  return increment;
}

const counter = closureExample(); // 0
counter(); // 1
counter(); // 2
closureExample(); // 0
counter(); // 3

const counter2 = closureExample(); // 0
counter2(); // 1

`Closure is a function with extra information (from lexical environment) saved in "heap".`;

// One use case : create helper function with predefined parameters
function sayWord(word, repeat, punctuation) {
  return () => {
    const result =
      word[0].toUpperCase() +
      word.slice(1) +
      (" " + word).repeat(repeat - 1) +
      punctuation;
    console.log({ result });
  };
}

const sayHi = sayWord("hi", 1, ".");
const sayWell = sayWord("well", 3, "!");
sayHi();
sayHi();
sayWell();
sayWell();

// Use case: async operation
function getSomething(url) {
  fetch(url).then(function () {
    console.log(url);
  });
}

// Use case: memoization
function memoize(fn) {
  const cache = {}; // Cache stored in closure
  return function (arg) {
    if (cache[arg] !== undefined) {
      return cache[arg]; // Return cached result
    }
    const result = fn(arg);
    console.log("computation...");
    cache[arg] = result; // Store result in cache
    return result;
  };
}
const square = memoize((x) => x * x);
console.log(square(5)); // 25 (computed)
console.log(square(5)); // 25 (cached)

`Closures are used by JavaScript frameworks and libraries`;

// Tricky for loop

// closure happens: remembers 3 different variable in heap.
// 3 different variable with different scope and address are created.
// because scope(environment) is different despite variables names are the same.
for (let iLet = 0; iLet < 3; iLet++) {
  setTimeout(() => {
    console.log({ iLet }); // 0, 1, 2
  }, 100);
}
///

// closure happens: remembers the same address to iVar each time.
// just 1 variable with 1 scope and address is created.
// because scope(environment) and variable name are the same.
for (var iVar = 0; iVar < 3; iVar++) {
  setTimeout(() => {
    console.log({ iVar }); // 3, 3, 3
  }, 100);
}
// Under the hood:
// var iVar = undefined;
// for (iVar = 0; iVar < 3; iVar++) {
//   setTimeout(() => {
//     console.log({ iVar }); // 3, 3, 3
//   }, 100);
// }
