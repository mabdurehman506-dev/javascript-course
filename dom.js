// insert a new button element into the DOM
let div = document.querySelector("div");
div.style.margin = "20px";

// add at the end of the div (inside)
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
div.append(newBtn);

// add at the beginning of the div (inside)
let newBtn2 = document.createElement("button");
newBtn2.innerText = "Click Me 2";
div.prepend(newBtn2);

// insert a new button element before the div
let newBtn3 = document.createElement("button");
newBtn3.innerText = "Click Me 3";
div.before(newBtn3);

// insert a new button element after the div
let newBtn4 = document.createElement("button");
newBtn4.innerText = "Click Me 4";
div.after(newBtn4);

// attribute manipulation
console.log(div.getAttribute("class"));
console.log(div.setAttribute("class", "my-class"));

// style manipulation
div.style.backgroundColor = "lightblue";

//yeh style sab button per apply
let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.style.color = "white";
  btn.style.backgroundColor = "blue";
  btn.style.padding = "10px 20px";
  btn.style.border = "none";
});

// remove the first button element from the DOM
// newBtn.remove();
