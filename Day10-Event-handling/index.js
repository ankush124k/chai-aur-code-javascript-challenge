// Activity 1 Basic event handling
// Task 1
document.getElementById("btn").addEventListener("click", function () {
  this.textContent = "button clicked";
});

// Task 2
document.getElementById("image").addEventListener("dblclick", function () {
  if (this.style.visibility === "visible") {
    this.style.visibility = "hidden";
  } else {
    this.style.visibility = "visible";
  }
  // this.classList.toggle('hidden');
});

// Activity 2
//Task 3
const div = document.getElementById("bgChange");
div.addEventListener("mouseover", function () {
  this.style.backgroundColor = "red";
});

//Task 4
div.addEventListener("mouseout", function () {
  this.style.backgroundColor = "coral";
});

// Activity 3
//Task 5
const input = document.getElementById("input1");
input.addEventListener("keydown", function () {
  console.log(input.value);
});
// Task 6
input.addEventListener("keyup", function () {
  document.getElementById("para").textContent = input.value;
});

// Activity 4
// task 7
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});

// task 8
document.getElementById("dropdown").addEventListener("change", function () {
  document.getElementById(
    "selectedValue"
  ).textContent = `Selected: ${this.value}`;
});


// Activity 5

// Task 9
document
  .getElementById("delegation")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      console.log(`${event.target.innerText}`);
    }
    // console.log(event);
  });

  // Task 9
  document.getElementById("parentdiv").addEventListener('click',function(event){
    console.log(`Button clicked id:${event.target.id}`);
  });


