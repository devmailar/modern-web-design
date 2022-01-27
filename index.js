let switcher = document.getElementById("mode")

let bod = document.querySelector("body")

switcher.addEventListener("click", function () {
  bod.classList.toggle("dark")
})