let form = document.querySelector(".box");
let email = document.querySelector(".form-email");
let Username = document.querySelector(".form-username");
let Password = document.querySelector(".form-password");

let data =JSON.parse(localStorage.getItem("obj"))|| []

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let bool = data.some(
    (item) => item.userName === Username.value || item.email === email.value
  );
  if (!bool) {
    let object = {
      userName: Username.value,
      email: email.value,
      password: Password.value,
    };
    data.push(object);
    localStorage.setItem("obj", JSON.stringify(data));
    window.location = "login.html";
  } else{
    window.alert("Nese duz getmedi.!")
  }
});
