// Closure in JavaScript
function outer() {
  let count = 0;
  function inner() {
    count += 1;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter();
counter();
counter();
counter();

// Hoisting in JavaScript

console.log(a);
var a = 10; //undefined

// console.log(b);
// let b = 20;       //ReferenceError: Cannot access 'b' before initialization

// let & const are hoisted but not initialized, so they cannot be accessed before their declaration. This is known as the "temporal dead zone". On the other hand, var is hoisted and initialized with undefined, allowing it to be accessed before its declaration without throwing an error.

test();

function test() {
  console.log("Hello, World!");
  // var x = 5;      //undefined
}

test();
test();
test();
test();
