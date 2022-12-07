const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 100);

    } else if (display.innerText != "" && item.id == "equal") {

      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {

    } else {
      display.innerText += item.id;
    }
  };
});
