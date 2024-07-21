// Activity 1


// Task 1
let name = "Ankush";
let age = 28;
let literal = `my name is ${name} and  i am ${age} years old`;
console.log(literal);

// Task 2
let multilineString=`my name is ankush ,
i am learning javascript ,
and this is a multiline string ,
using template literal`;
console.log(multilineString);

// Activity 2

// Task 3
let arr = [1, 2, 3, 4, 5, 6];
let [a,b] = arr;
console.log(`first = ${a},second = ${b}`);

// Task 4
let book = {
  name: "NCERT",
  title: "chemistry 1",
};

let {naam,title}=book;
console.log(`name = ${naam},title = ${title}`);

// Activity 3
// Task 5
let newArr=[...arr,7,8];
console.log(newArr);

//task 6
let sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4, 5));

// Activity 4
//task 7
let multiply = (a, b = 1) => a * b;
console.log(multiply(5, 2)); 
console.log(multiply(5)); 

// Activity 5
// task 8
let createPerson = (name, age) => {
  return {
    name,
    age,
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    },
  };
};
let person = createPerson("Alice", 30);
console.log(person);
person.greet();

// task 9
const propName = "favoriteColor";
const color = "blue";
const obj = {
  [propName]: color,
};
console.log(obj);


