let main = document.getElementById("myButton");
let mainButton = main.querySelectorAll(".btn");
for (let btnBox of mainButton) {
  btnBox.addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    let theme = document.getElementsByClassName("btn active").innerHTML = "";
    document.getElementById("#myButton").classList.remove();
    document.getElementById("#myButton").classList.add("theme");
  });
}
