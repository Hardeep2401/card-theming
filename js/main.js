let main = document.getElementById("myButton");
let mainButton = main.querySelectorAll(".btn");
for (let btnBox of mainButton) {
  btnBox.addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";


    let first = document.querySelectorAll(".btn.active");
   if (first){ 
    document.getElementsByTagName("BODY")[0].classList.remove("test");
    document.getElementsByTagName("BODY")[0].classList.add("test");
   }

    
 
  });
}