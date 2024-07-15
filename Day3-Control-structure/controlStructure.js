// Activity 1

// Task 1
function checkNum(num) {
  if (num == 0) {
    console.log("Zero");
  } else if (num > 0) {
    console.log("Positive number");
  } else {
    console.log("Negative Number");
  }
}

// checkNum(0);

// Task 2
function vote(age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}

// vote(18);

//Activity 2

// Task 3
function greaterOfThree(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(`${num1} is the greatest`);
    } else {
      console.log(`${num3} is the greatest`);
    }
  } else {
    if (num2 > num3) {
      console.log(`${num2} is the greatest`);
    } else {
      console.log(`${num3} is the greatest`);
    }
  }
}

// greaterOfThree(2, 3, 1);

// Activity 3

// Task 4
function switchCase(key) {
  switch (key) {
    case 1:
      console.log("Monday");

      break;
    case 2:
      console.log("Tuesday");

      break;
    case 3:
      console.log("wednesday");

      break;
    case 4:
      console.log("Thursday");

      break;
    case 5:
      console.log("Friday");

      break;
    case 6:
      console.log("Saturday");

      break;
    case 7:
      console.log("Sunday");

      break;

    default:
      console.log("Wrong input");
      break;
  }
}
// switchCase(4);

// Task 5
function grades(score) {
  switch (true) {
    case score >= 90:
      console.log("A");
      break;
    case score >= 80:
      console.log("B");
      break;
    case score >= 70:
      console.log("C");
      break;
    case score >= 60:
      console.log("D");
      break;
    case score >= 50:
      console.log("F");
      break;
    default:
      console.log("Wrong input");
      break;
  }
}

// // Example usage:
// grades(95);  // Output: A
// grades(85);  // Output: B
// grades(75);  // Output: C
// grades(65);  // Output: D
// grades(55);  // Output: F
// grades(45);  // Output: Wrong input

// Activity 4

// Task 6
function oddEven(num) {
  num % 2 == 0 ? console.log("Even") : console.log("odd");
}

// oddEven(5);
// oddEven(6);

// Activity 5

// Task 7
function leapYearCheck(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
}

leapYearCheck(2024)
leapYearCheck(2400)
leapYearCheck(2000)
