let form = document.querySelector("form");
let emailInput = document.querySelector(".form-email");
let formPassword = document.querySelector(".form-Password");

let data = JSON.parse(localStorage.getItem("obj"));

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let bool = data.some(
    (item) =>
      item.userName === emailInput.value || item.email === formPassword.value
  );
  console.log(data);
  if (!bool) {
    window.location = "./home.html";
  } else {
    window.alert("Nese duz getmedi.!");
  }
});


let icon=document.querySelector("i");

icon.addEventListener("click",function(){
    if (icon.className==="fa-solid fa-eye") {
        icon.className="fa-solid fa-eye-slash"
        formPassword.type="password"
    }else{
        icon.className="fa-solid fa-eye"
        formPassword.type="text"
    }
})