// Activity 1
//Task 1
function t1() {
  try {
    throw new Error("This is an intentional error");
  } catch (error) {
    console.log(error.message);
  }
}

t1();

// Task 2
function t2(a, b) {
  try {
    if (b == 0) {
      throw new Error("Cannot divide by zero !!");
    }
    return a / b;
  } catch (err) {
    console.error("divsion error", err.message);
    return null;
  }
}

t2(10, 10);
t2(10, 0);

// Activity 2

// Task 3
function t3() {
  try {
    throw new Error("Task 3 error message");
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("in the finally block");
  }
}
t3();

// Activity 4
// Task 4/5

class validationError extends Error {
  constructor(message) {
    super(message);
    this.message = "validation field Error";
  }
}

function validationInput(input) {
  try {
    if (input.trim() === "") {
      throw new validationError("input cannot be empty");
    }
    return input;
  } catch (error) {
    if (error.message === "validation field Error") {
      console.log(error.message);
    } else {
      console.log("Unexpected error", error.message);
    }
    return null;
  }
}

console.log(validationInput("hello bhai chai peete hai"));
console.log(validationInput());

// Task 6
const promise = new Promise((resolve, reject) => {
  const num = Math.random();
  if (num < 0.5) {
    resolve("Inside the num block");
  } else {
    reject("something got wrong");
  }
});

promise
  .then((message) => console.log(message))
  .catch((err) => console.log(err));


//   Task 8
  async function fetchData() {
    try {
      const response = await fetch("https://example.com/invalid-url");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  }

  fetchData();

//   Task 7
fetch("https://example.com/invalid-url") 
  .catch((error) => console.error("Fetch error:", error.message));
