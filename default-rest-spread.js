// default parameters
function greet(name = "Guest") {
  return "Hello " + name;
}
console.log(greet()); // "Hello Guest"
console.log(greet("Alice")); // "Hello Alice"

function add(a, b = 0) {
  return a + b;
}
console.log(add(5)); // 5
console.log(add(5, 3)); // 8

// rest parameters
function multiply(...num) {
  return num[0] * num[1] * num[2];
}
console.log(multiply(2, 3, 4)); // 24

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6

// spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

let arr3 = [7, 8, 9];
let arr4 = [10, 11, 12];
console.log(...arr3, ...arr4); // 7 8 9 10 11 12