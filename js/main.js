let main = document.getElementById("myButton");
let mainButton = main.getElementsByClassName("btn");
for (let btnBox of mainButton) {
  btnBox.addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
