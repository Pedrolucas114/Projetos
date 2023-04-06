const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("click", function() {
  text.style.fontSize = "30px";
  text.style.color = "red";
  text.textContent = "Este é um novo texto";
});
