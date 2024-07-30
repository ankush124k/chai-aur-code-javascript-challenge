const person = {
  name: "Ankush",
  age: 23,
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};

export default person;
