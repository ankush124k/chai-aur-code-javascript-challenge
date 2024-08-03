// Activity 1

class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new node(value);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  remove() {
    if (this.head === null) {
      return null;
    } else if (this.head.next === null) {
      this.head = null;
    } else {
      let  current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
    }
  }

  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list =new linkedList();
list.add(1);
list.add(2);
list.add(3);
list.display();
list.remove();
list.display(); 

//Activity 2
// stack

class Stack{
    constructor(){
        this.items=[];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.items.length===0){
            return "stack is empty";
        }
        return this.items.pop();
    }

    peek(){
        if(this.items.length==0){
            return "stack is empty";
        }

        return this.items[this.items.length-1];
    }

}


const reverseString = (str) => {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reversedStr = "";
  while (stack.items.length > 0) {
    reversedStr += stack.pop();
  }
  return reversedStr;
};

console.log(reverseString("hello"));

// Actitvity 3

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.items.length === 0) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    front() {
        if (this.items.length === 0) {
            return "Queue is empty";
        }
        return this.items[0];
    }
}


// Task 6: Simulate Printer Queue

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(job) {
        this.queue.enqueue(job);
        console.log(`Job "${job}" added to the queue`);
    }

    processJobs() {
        while (this.queue.items.length > 0) {
            const job = this.queue.dequeue();
            console.log(`Processing job: "${job}"`);
        }
    }
}

// Example usage
const printerQueue = new PrinterQueue();
printerQueue.addJob("Print document 1");
printerQueue.addJob("Print document 2");
printerQueue.processJobs();

// Activity 4
//Task 7: Implement a TreeNode Class

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// Task 8: Implement a BinaryTree Class

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

// Example usage
const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.inOrderTraversal(binaryTree.root); // 3, 5, 7

//Activity 5
// Task 9: Implement a Graph Class

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1].push(vertex2);
        }
        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
console.log(graph.bfs('A')); // [ 'A', 'B', 'C' ]
