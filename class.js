class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }


}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);       // Call the parent class constructor with name and age
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying. The current grade is ${this.grade}.`);
  }
}

const person = new Person("Alice", 30);
const student = new Student("Bob", 20, "A");

person.greet();
student.greet();
student.study();