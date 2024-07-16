// // Activity 1

// // Task 1
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// //Task 2
// for (let i = 1; i <= 10; i++) {
//   console.log("5*" + i, 5 * i);
// }

// // Activity 2

//Task 3
let sum = 0;
let i = 0;
while (i <= 10) {
  sum += i;
  i++;
}

console.log("Sum " + sum);

// // Task 4
// let j = 10;
// while (j >= 0) {
//   console.log(i);
//     j--;
// }

// Activity 3

// Task 5
let ind = 1;
do {
  console.log("ind " + ind);
  ind = ind + 1;
} while (ind != 6);

// Task 6

let fact = 1;
let num = 5;
let k = 1;
do {
  fact = fact * k;
  k++;
} while (k != num + 1);

console.log("Factorial " + fact);

// Activity 4

// Task 7
let n=5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if (j === 1) {
      row += "*"; // First asterisk
    } else {
      row += " *"; // Additional asterisks with a leading space
    }
  }
  console.log(row);
}

// Activity 5

// Task 8
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

// Task 9
for (let i = 1; i <= 10; i++) {
  if (i == 7) break;
  console.log(i);
}
