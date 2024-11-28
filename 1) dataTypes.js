// # Primitive data types (compare by value)
var name = "Mohammad Torabi"; // string
let age = 22; // number
const isMarried = false; // boolean
var spouse = null; // null
let about; // undefined

const userId = Symbol(
  "1234-1234-1234-1234"
); // symbol

const income =
  BigInt(100_000_000_000_000_000n); // bigint

// # Non-primitive date types (compare by ref)
// # All non-primitives are object.
const birthDate = new Date(
  "April 17, 2002"
);

let fun = (a, b) => {
  return a + b;
};

const arr = [name, age, isMarried];

const obj = {
  name,
  age,
  isMarried,
  spouse,
  about,
  userId,
  income,
  birthDate,
  fun,
  arr,
};

obj.obj = obj;

const printSeparator = () =>
  console.log(
    "\n" + "~-".repeat(27),
    "\n"
  );

printSeparator();

Object.keys(obj).forEach((key) => {
  console.log(
    key,
    ":",
    obj[key],
    "~",
    "[{",
    typeof obj[key],
    "}]"
  );
  printSeparator();
});

// 1) What is symbol? What are its use cases?
// object keys? enums?

// 2) Difference between null and undefined?
// user = null (set by developer intentionally)
//   typeof null === object
// undefined: (usually unintentional)
//   A variable is declared but not initialized.
//   A function does not return a value.
//   A missing parameter in a function call.

// 3) What is NaN
// Computational error (Fail to produce meaningful result)
console.log("NaN:");
console.log("hi" / 5); // Nan
console.log(NaN == NaN); // false
console.log(typeof NaN); // number
console.log(isNaN("hi")); // true (converts to number implicitly)
console.log(Number.isNaN("hi")); // false (does not convert)


// 4) null === null (?)
console.log(null === null) // true
console.log(({a:1}) === ({a:1})) // false