// Activity 1
function outer() {
  let outerVariable = "outer";
  function inner() {
    console.log(outerVariable);
  }
  return inner;
}
const result = outer();
result();

function counter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },

    get: function () {
      return count;
    },
  };
}

const counter1 = counter();
counter1.increment();
console.log(counter1.get);

// Activity 2

function generateUniqueId() {
  let id = Math.floor(Math.random() * 10 + 100);
  return function () {
    return id;
  };
}

console.log(generateUniqueId()());

function getName(name) {
  return function () {
    return `my name is ${name}`;
  };
}

const naam = getName("Ankush");
console.log(naam());

// Activity 3
function createFunctionArray() {
  const functions = [];
  for (let i = 0; i < 5; i++) {
    functions.push(function () {
      console.log(i);
    });
  }

  return functions;
}

const funcs = createFunctionArray();
funcs[0]();
funcs[1]();
funcs[2]();
funcs[3]();
funcs[4]();

// Activity 4
function collections() {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      items = items.filter((i) => i !== item);
    },
    listItems: function () {
      return items;
    },
  };
}

const items = collections();
items.addItem("ankush");
items.addItem("ankush22");
items.addItem("ankush2233");

console.log(items.listItems());
items.removeItem("ankush");
console.log(items.listItems());

// Activity 5
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}

function slowFunction(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}

const memoizedFunction1 = memoize(slowFunction);
console.log(memoizedFunction1(10000));
console.log(memoizedFunction1(10000)); 

// last task
function memoizeFactorial() {
    const cache = {};
    return function factorial(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n === 0) {
            return 1;
        }
        const result = n * factorial(n - 1);
        cache[n] = result;
        return result;
    }
}

const memoizedFactorial1 = memoizeFactorial();
console.log(memoizedFactorial1(5)); // Output: 120
console.log(memoizedFactorial1(6)); // Output: 720
console.log(memoizedFactorial1(5)); // Output: Retrieved from cach
