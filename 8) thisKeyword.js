// this === current execution context (global/window or object calling the function)

function foo() {
  console.log(this); // global object (undefined in strict mode)
}

foo();

const bar = () => {
  console.log(this);
};

const obj = {
  key: "value",
  foo: function () {
    console.log(this); // this refers to `obj`
  },
};
obj.foo();

foo.bind(obj)();

bar.call(obj); // DOES NOT WORK. (because `bar` is arrow function)

function ConstructorFunction() {
  this.value = 0;

  this.add = function (amount) {
    this.value += amount;
    return this;
  };
}

const cfSample = new ConstructorFunction();
cfSample.add(10).add(5).add(2);
console.log(cfSample.value);

class MyClass {
  constructor() {
    this.value = 0;
  }

  add = function (amount) {
    this.value += amount;
    return this;
  };
}

const mySample = new MyClass();
mySample.add(3).add(2);
console.log(mySample.value);

// =~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=

// CALLBACK FUNCTIONS

const obj2 = {
  bar: function () {
    setTimeout(() => console.log(this));
  },
};
obj2.bar();

// =~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=~-~=

// ADD EVENT LISTENER

`When we use someElement.addEventListener(function(){this}), this refers to 'someElement'.
However in someElement.addEventListener(()=>{this}) this refers to outer context.`;
