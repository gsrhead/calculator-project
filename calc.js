const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

let displayValue = "0";
let pendingValue;
let evaluationArray = [];

for (const button of buttons) {
  button.addEventListener("click", function() {
    const value = button.getAttribute("name");

    switch (value) {
      case "clear":
        displayValue = "0";
        pendingValue = undefined;
        evaluationArray = [];
        break;
      case "backspace":
        displayValue = displayValue.slice(0, -1);
        if (displayValue === "") {
          displayValue = "0";
        }
        break;
      case ".":
        if (displayValue.includes(".")) {
          return;
        }
        displayValue += ".";
        break;
      case "equal":
        evaluationArray.push(displayValue);
        const evaluation = eval(evaluationArray.join(" "));
        displayValue = evaluation + "";
        evaluationArray = [];
        pendingValue = undefined;
        break;
      default:
        if (displayValue === "0") {
          displayValue = value;
        } else {
          displayValue += value;
        }
        break;
    }

    display.textContent = displayValue;
  });
}
// Generate a random RGB color
function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Get the calculator element
const calculator = document.querySelector(".calculator");

// Apply the random color to the calculator background
calculator.style.backgroundColor = randomColor();
// Generate random background color
document.body.style.backgroundColor = randomColor();

// Keyboard functionality
document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
    case "/":
    case "*":
    case "-":
    case "+":
    case "=":
      document.querySelector(`button[name='${event.key}']`).click();
  }
}
);