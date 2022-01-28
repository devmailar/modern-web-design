let bod = document.querySelector("body")

window.addEventListener('load', (event) => {
  for (let i = 1; i < 10; i++) {
    setTimeout(function timer() {
     bod.classList.toggle("dark")
     bod.classList.toggle("transition")
    }, i * 4000);
  }
})