//functions in JavaScript
function sayHello() {
  console.log("Hello World");
}
sayHello();
sayHello();

// parameters and arguments
function greet(name) {
  return "Hello " + name;
}

console.log(greet("Ali"));

// normal function vs arrow function
const obj = {
  name: "Ali",

  arrow: () => {
    console.log("Hello " + this.name); // this will not work as expected because arrow functions do not have their own 'this' context
  },

  normal: function () {
    console.log("Hello " + this.name); // this will work as expected because normal functions have their own 'this' context which refers to the object 'obj'
  },
};

obj.arrow();
obj.normal();
