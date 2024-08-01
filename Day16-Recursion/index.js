// Activity 1

function factorial(num){
    if(num==1)return 1;
    return num*factorial(num-1);
}

console.log(factorial(5));
console.log(factorial(6));


function nthFibbo(n){
    if(n==0)return 0;
    if(n==1)return 1;

    return nthFibbo(n-1)+nthFibbo(n-2);
}

console.log(nthFibbo(5));
console.log(nthFibbo(8));

// Activity 2

const arr=[1,2,3,4,55,6,7,8,9,10];

function helper(arr,index){
    if(index==arr.length-1)
        return arr[index];

    return arr[index]+helper(arr,index+1);
}

function sum(arr){
    return helper(arr,0);
}

console.log(sum(arr));

// or this can be written 

// function sumArray(arr) {
//   if (arr.length === 0) return 0;
//   return arr[0] + sumArray(arr.slice(1));
// }


function maxElement(arr,index,maxi){
    if(index==arr.length-1){
        return maxi>arr[index]?maxi:arr[index];
    }

    if(maxi<arr[index]){
        maxi=arr[index];
    }

    return maxElement(arr,index+1,maxi);
}

console.log(maxElement(arr,0,-1));//assuming there are no negative element in the array 

//This can be written
// function maxArray(arr) {
//   if (arr.length === 1) return arr[0];
//   return Math.max(arr[0], maxArray(arr.slice(1)));
// }

// Activity  3
function reverseString(str,index){
    if(index==str.length-1)
        return str[index];

    return reverseString(str,index+1)+str[index];
}

console.log(reverseString("hsukna",0));
console.log(reverseString("chai-code-javascript",0));

//OR 
// function reverseString(str) {
//   if (str.length === 0) return "";
//   return str[str.length - 1] + reverseString(str.slice(0, -1));
// }

function checkPalindrome(str){
     if (str.length <= 1) return true;
     if (str[0] !== str[str.length - 1]) return false;
     return checkPalindrome(str.slice(1, -1));
}

console.log(checkPalindrome("ankush"));
console.log(checkPalindrome("mamma"));
console.log(checkPalindrome("MADAM"));

// Activity 4

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
    return binarySearch(arr, target, mid + 1, high);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch([10, 20, 30, 40, 50], 25)); // Output: -1
console.log(binarySearch([7, 14, 21, 28, 35], 28)); // Output: 3


function countOccurrences(arr, target) {
    if (arr.length === 0) return 0;
    const count = arr[0] === target ? 1 : 0;
    return count + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); // Output: 3
console.log(countOccurrences([10, 20, 30, 20, 40], 20)); // Output: 2
console.log(countOccurrences([7, 14, 21, 14, 28, 14], 14)); // Output: 3

// Activity 5
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrderTraversal(node) {
  if (node === null) return;
  inOrderTraversal(node.left);
  console.log(node.value);
  inOrderTraversal(node.right);
}

const root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
inOrderTraversal(root1); // Output: 2, 1, 3

// Task 10: Recursive Tree Depth Calculation

function calculateDepth(node) {
  if (node === null) return 0;
  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
console.log(calculateDepth(tree));