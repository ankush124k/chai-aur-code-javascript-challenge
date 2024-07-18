// Activity 1 array creation and access

// Task 1
const arr = [1, 2, 3, 4, 5];
console.log("Array = " + arr);

// Task 2
console.log("first element = " + arr[0]);
console.log("last element = " + arr[arr.length - 1]);

// Activity 2
arr.push(6);
console.log("after push " + arr);

arr.pop();
console.log("after pop " + arr);

arr.shift();
console.log("after shift " + arr);

arr.unshift(0);
console.log("after unshift " + arr);

// Activity 3

const newArr = arr.map((it) => 2 * it);
console.log("new arr = " + newArr);

const filteredArr = arr.filter((it) => it % 2 == 0);
console.log("new arr = " + filteredArr);

const reducedArr = newArr.reduce((acc, cur) => (acc += cur));
console.log("sum=" + reducedArr);

// Activity 4
console.log("for loop");
for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i]);
}

console.log("forEach");
newArr.forEach((element) => {
  console.log(element);
});

// Activity 5
const twoArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("two dimwntional array :" + twoArr);

console.log("middle element ([2][2]) =" + twoArr[2][3]);
