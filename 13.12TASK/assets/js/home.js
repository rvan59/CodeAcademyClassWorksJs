let tbody = document.querySelector("tbody");

const BASE_URL = "http://localhost:8080/users";

async function getData() {
  let responsev = await axios(`${BASE_URL}`);
  console.log(responsev.data);
  drawTable(responsev.data);
}
getData();

function drawTable(data) {
  tbody.innerHTML = "";
  data.forEach((element) => {
    let tritem = document.createElement("tr");
    tritem.innerHTML += `
          
      <td>${element.id}</td>
     <td>  <img src="${element.userphoto}" alt=""></td>
      <td>${element.name}</td>
      <td>${element.surname}</td>
     <td>${element.email}</td>
       <td>${element.date}</td>
       <td><button class="btnedit" style="background-color:  green;color: white; border: none; border-radius: 6px;">Edit</button>
     <button class="btnDelet" onclick=btnDelet(${element.id},this) style="background-color:  red;color: white; border: none; border-radius: 6px;">Delet</button>
             <button class="btnaddfay"  style="background-color:  blue;color: white; border: none; border-radius: 6px;">Add Fav</button></td>
          `;
    tbody.append(tritem);
  });
}

let btn=document.querySelector(".btnDelet")
async function deleteSupplier(id, btn) {
  if (confirm("Deqiq silek ??")) {
    btn.closest("tr").remove();
    await axios.delete(`${BASE_URL}/${id}`);
  }
}
deleteSupplier();
