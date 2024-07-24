// Activity 1 selecting and manipulating elements

// Task 1
document.getElementById("task_1").innerHTML =
  "This text is changed using javascript by selecting id";

//Task 2
document.getElementsByClassName("task_2")[0].style.backgroundColor = "pink";

// Activity 2 Creating and appending elements

// Task 3
const newDiv = document.createElement("div");
const newText = document.createTextNode("New text for task 3");
newDiv.appendChild(newText);
document.getElementById("task_3").appendChild(newDiv);

//Task 4
const newLi = document.createElement("li");
const newLiText = document.createTextNode("New li Text task 4");
newLi.appendChild(newLiText);
document.getElementById("task_4").appendChild(newLi);

// Activity 3 Removing elements

// task 5
document.getElementById("toRemove").remove();

// Task 6
const list = document.getElementById("task_6");
list.removeChild(list.lastElementChild);

// Activity 4 Modifying attributes and classes 

// Task 7
const link = document.querySelector("img");
link.src =
  "https://mintritea.com/cdn/shop/collections/wp9343768.webp?v=1666389315";
  //or we can also use setAttribute method

// Task 8
const element1=document.getElementById('task_8');
element1.classList.add("myStyle");

const a=document.getElementById('myDiv');
a.classList.remove('my');

// Activity 5 Event handling 

// Task 9
const p=document.getElementById('para');
document.getElementById('btn').addEventListener('click',function(){p.innerHTML="I am the new text written by javascript"});

//Task 10
const div=document.getElementById("task_10");
div.addEventListener("mouseover", function () {
  div.style.borderColor = "red";
});

//can also be done by 
// document.getElementById('task_10').addEventListener('mouseover',function(){
//     this.style.borderColor="pink";
// });
