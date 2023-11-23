// let input = document.querySelector(".input");
// let button = document.querySelector(".button");
// let ul = document.querySelector("#ul");

// button.addEventListener("click", function () {
//   if (input.value != "") {
//     let li = document.createElement("li");
//     let button = document.createElement("button");
//     let span = document.createElement("span");

//     span.innerText = input.value;
//     li.appendChild(span);
//     li.appendChild(button);
//     button.innerText = "Delete";
//     ul.appendChild(li);

//     button.addEventListener("click", function () {
//       this.parentElement.remove();
//     });
//   } else {
//     alert("Input empty")
//   }
//   input.value = "";
// });

let firstName=document.querySelector("#firstName")
let lastName=document.querySelector("#lastName")
let password=document.querySelector("#password")
let submit=document.querySelector("#submit")

const form = document.getElementById('#firstName');
form.addEventListener('submit', (event) => {
  
    event.preventDefault(); 
});
const nameInput = form.elements.fname.value;
