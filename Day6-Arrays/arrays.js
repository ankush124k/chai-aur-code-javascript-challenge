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

console.log("middle element ([2][2]) =" + twoArr[2][2]);


//interview question  for given input 
// const fruits = [
//   { name: "banana", count: 5 },
//   { name: "apple", count: 4 },
//   { name: "graps", count: 9 },
//   { name: "banana", count: 7 },
//   { name: "apple", count: 3 },
// ];
// output:
// const fruits=[{name:"banana",count:12},
// {name:"apple",count:7},
// {name:"graps",count:9},]

//solution
// const newFruits = fruits.reduce((acc, fruit) => {
//   const val = acc.find((item) => item.name === fruit.name);
//   if (val) {
//     val.count += fruit.count;
//   } else {
//     acc.push({ ...fruit });
//   }
//   return acc;
// }, []);

// console.log(newFruits);