let form = document.querySelector("#form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName ");
let address = document.querySelector("#address ");

let data = JSON.parse(localStorage.getItem("personObj")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

let info=  {

      userName: userName.value,
      lastName: lastName.value,
      address: address.value,
      id: Date.now(),
    };


    data.push(info);
    localStorage.setItem("personObj", JSON.stringify(data) );

userName.value="",
    lastName.value="",
      address.value=""
});