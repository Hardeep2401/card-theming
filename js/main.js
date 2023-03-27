let main = document.getElementById("myButton");
let mainButton = main.getElementsByClassName("btn");
for (const element of mainButton) {
  element.addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
