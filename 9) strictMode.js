`'use strict' prevents certain actions that are considered problematic
and throws more exceptions to help you write better code.`;

(function () {
  // not strict mode

  function foo(num) {
    num = 10203040;
    console.log("slopy mode:", num, arguments[0]);
  }

  foo(10);

  a = 10; // No problem!

  function myFunction(a, a) {} // No problem!

  // console.log(this); // global object

  delete Object.prototype; // ignored!
  delete a; // No error

  let package = "hi"; // No error
  // let eval = 10; // No error here (but we use eval later)

  let dd = 010; // No error

  const obj = {
    get something() {
      return "something";
    },
  };

  obj.something = "something else"; // No Error

  console.log(obj.something);

  eval("var x = 10;");
  console.log({ x });

  undefined = 10; // ignore
  NaN = 10; // ignore

  const primitive = 10;
  primitive.prop = 20; // ignore
})();

(function () {
  "use strict";

  function foo(num) {
    num = 10203040;
    console.log("strict mode:", num, arguments[0]);
  }

  foo(10);

  // b = 10; // Error

  // function myFunction(a, a) {} // SyntaxError: Duplicate parameter name

  console.log(this); // undefined

  // delete Object.prototype; // TypeError: Cannot delete property
  let c = 11;
  // delete c; // SyntaxError: Delete of an unqualified identifier in strict mode.

  // let package = "hi"; // SyntaxError: Unexpected strict mode reserved word
  // let eval = 10; // SyntaxError: Unexpected eval or arguments in strict mode

  // let dd = 010; // SyntaxError: Octal literals are not allowed in strict mode.

  const obj = {
    get something() {
      return "something";
    },
  };

  // obj.something = "something else"; // TypeError: Cannot set property something of #<Object> which has only a getter

  eval("var x = 10;");
  // console.log({ x }); // ReferenceError: x is not defined

  // undefined = 10; // TypeError: Cannot assign to read only property 'undefined' of object '#<Object>'
  // NaN = 10; // TypeError: Cannot assign to read only property 'NaN' of object '#<Object>'

  const primitive = 10;
  // primitive.prop = 20; // TypeError: Cannot create property 'prop' on number '10'
})();

// If use using `class` you are already using strict mode.

// Strict mode is enabled by default in ES6 modules (files with type="module").
