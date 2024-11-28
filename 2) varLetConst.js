printSeparator();

// ### 1) Scope

(() => {
  if (true) {
    implicit = 0; // Global
    // Strict Mode: Not Defined Error
    var aVar = 0;
    let aLet = 0;
    const aConst = 0;
  }

  console.log("{#Scope}", {
    implicit,
    aVar,
  });
  // console.log(aLet); // Error
  // console.log(aConst); // Error
})();

console.log("{#Scope2}", { implicit });
// console.log({aVar}); // Error
// console.log({aLet}); // Error
// console.log({aConst}); // Error

printSeparator();

// ### 2) Reassignment
(() => {
  implicit = 1;
  implicit = 2;
  var aVar = 1;
  aVar = 2;
  let aLet = 1;
  aLet = 2;
  const aConst = 1;
  // aConst = 2; Error

  console.log("{#Reassignment}", {
    implicit,
    aVar,
    aLet,
    aConst,
  });

  printSeparator();
})();

// ### 3) Redeclaration
(() => {
  implicit = 0;
  implicit = 1;
  var implicit = 2;
  var aVar = 0;
  var aVar = 1;
  let aLet = 0;
  // let aLet = 1; // Error
  // let aVar = 2; // Error
  // let implicit = 3 // Error
  const aConst = 0;
  // const aConst = 1; // Error

  console.log("{#Redeclaration}", {
    implicit,
    aVar,
  });

  printSeparator();
})();

// ### 4) Hoisting
(() => {
  // console.log("{#Hoisting}", { implicit2 });
  // ReferenceError: implicit2 is not defined
  implicit2 = 0; // Not Hoisted

  console.log("{#Hoisting}", { aVar });
  var aVar = 0; // Hoisted with initialization as undefined.

  // console.log({ aLet });
  // Error: Cannot access 'aLet' before initialization
  let aLet = 0; // Hoisted but not initialized.

  // console.log({ aConst }); // Error
  const aConst = 0; // Hoisted but not initialized.

  // console.log(somethingThatIsNotDefined);
  // Error: somethingThatIsNotDefined is not defined

  printSeparator();
})();

// TypeError: printSeparator is not a function
// var printSeparator = () => {
//   console.log(
//     "\n" + "~-".repeat(27),
//     "\n"
//   );
// };

// ReferenceError: Cannot access 'printSeparator' before initialization
// const printSeparator = () => {
//   console.log(
//     "\n" + "~-".repeat(27),
//     "\n"
//   );
// };

// ReferenceError: printSeparator is not defined
// printSeparator = () => {
//   console.log(
//     "\n" + "~-".repeat(27),
//     "\n"
//   );
// };

// Both the function name and its definition are hoisted
function printSeparator() {
  console.log(
    "\n" + "~-".repeat(27),
    "\n"
  );
}
