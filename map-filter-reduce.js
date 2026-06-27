const numbers = [1, 2, 3, 4, 5];

// map function
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter function
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce function
const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 15