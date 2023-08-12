function clickDiv(){
    alert("Hola! Soy el div");
};
const div = document.querySelector("div");
div.addEventListener("click", clickDiv);

function clickButton(event){
  alert("Hola!");
  event.stopPropagation();
};