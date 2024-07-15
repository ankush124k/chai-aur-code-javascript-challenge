// Activity 1 : arithmetic operators

// Task 1
function add(num1, num2) {
  console.log(num1 + num2);
}
add(5, 7);

// Task 2
function subtract(num1, num2) {
  console.log(num1 - num2);
}
subtract(5, 7);

// Task 3
function multiply(num1, num2) {
  console.log(num1 * num2);
}
multiply(5, 7);

// Task 4
function divide(num1, num2) {
  if (num2 == 0) console.log("cannot divide by zero !!");
  console.log(num1 / num2);
}
divide(5, 7);

// Task 5
function remainder(num1, num2) {
  console.log(num1 % num2);
}
remainder(5, 7);

// Activity 2

// Task 6
let a = 5;
a += 5;
console.log(a);

// Task 7
a -= 5;
console.log(a);

// Activity 4

// Task 8
function compGreater(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

//Task 9
function compGreaterEqual(num1, num2) {
  if (num1 >= num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

//Task 10
function compGreater(num1, num2) {
  if (num1 == num2) {
    console.log(`${num1}==${num2}`);
  }
  if (num1 === num2) {
    console.log(`${num1}===${num2}`);
  }
}

// Activity 4

// Task 11
function AND(first, second) {
  if (first && second) console.log("true");
  else console.log("false");
}

// Task 12
function OR(first, second) {
  if (first || second) console.log("true");
  else console.log("false");
}

//Task 13
function NOT(first) {
  if (!first) console.log("true");
  else console.log("false");
}

// NOT(true);

// Activity 5

// Task 14
function ternaryOperator(num) {
  num > 0 ? console.log("Positive number") : console.log("Negative number");
}

ternaryOperator(-1);
