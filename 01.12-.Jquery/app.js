$(".container").css({
  backgroundColor: "darkgrey",
  width: "500px",
  height: "250px",
  marginTop: "120px ",
  position: "relative",
});

$(".h2").css({
  color: "blue",
});
$(".form-control").css({
  width: "350px",
});

$(".btn").on("click", function () {
  let p = document.createElement("p");
  p.innerText = $("input").val();



  $(p).css({
    color: "white",
    width: "50px",
    height: "25px",
    backgroundColor: "blue",
    borderRadius: "4px",
  });
  p.addEventListener("click", function () {
    this.remove();

  });
  
  $(".box").append(p);
  $("input").val("");
});
localStorage.setItem("p", JSON.stringify());