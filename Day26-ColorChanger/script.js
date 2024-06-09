const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "grey":
        body.style.backgroundColor = event.target.id;
        break;
      case "white":
        body.style.backgroundColor = event.target.id;
      case "blue":
        body.style.backgroundColor = event.target.id;
      case "yellow":
        body.style.backgroundColor = event.target.id;
      default:
        break;
    }
  });
});

let colorField = document.getElementById('color-input');

colorField.addEventListener('input', () => {
    let inputColorVal = document.getElementById('color-input').value; // this should be inside scope
    body.style.backgroundColor = inputColorVal;
});
