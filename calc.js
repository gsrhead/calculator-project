let displayContainer = document.querySelector("#display");
let buttons = document.querySelectorAll('button')

for(let btn of buttons){
  btn.addEventListener('click',append)

}
// isolate buttons variables
  // isolate 1
  
  let buttonAC = document.getElementsByName("Ac")[0];
  let buttonPercent = document.getElementsByName("%")[0];
  let buttonBackspace = document.getElementsByName("<")[0];
  let buttonMultiply = document.getElementsByName("*")[0];
  let buttonDivide = document.getElementsByName("/")[0];
  let buttonSubtract = document.getElementsByName("-")[0];
  let buttonPlus = document.getElementsByName("+")[0];
  let buttonEqual = document.getElementsByName("=")[0];
  let button0 = document.getElementsByName("0")[0];
  let button1 = document.getElementsByName("1")[0];
  let button2 = document.getElementsByName("2")[0];
  let button3 = document.getElementsByName("3")[0];
  let button4 = document.getElementsByName("4")[0];
  let button5 = document.getElementsByName("5")[0];
  let button6 = document.getElementsByName("6")[0];
  let button7 = document.getElementsByName("7")[0];
  let button8 = document.getElementsByName("8")[0];
  let button9 = document.getElementsByName("9")[0];

// button on calc 1
function append(event) {
  // extract a value from button
  console.log(event.path[0].innerText)
  displayContainer.innerText = displayContainer.innerText + event.path[0].innerText 
}
// Assignments
// a = 6
// Left = Right
// Left: The variable to be assigned
// =: 

function action(event) {
  // extract a value from button
  console.log(event.path[0].innerText)
  switch (event.path[0].innerText) {
    case '+':

      break;
    case '=':
      console.log('=')
    let displayText = displayContainer.innerText
     let var1 = displayText.slice(0, displayText.indexOf("+"))
     let var2 = ''
     let ope = ''
      break;
    default:
      break;
  }
}

// buttonAc.addEventListener("click", append);
// buttonPlus.addEventListener("click", append);
// buttonSubtract.addEventListener("click", append);
// buttonAc.addEventListener("click", append);
// buttonPlus.addEventListener("click", append);
// buttonMultiply.addEventListener("click", append);
// buttonEqual.addEventListener("click", append);
// button0.addEventListener("click", append);
// button1.addEventListener("click", append);
// button2.addEventListener("click", append);
// button3.addEventListener("click", append);
// button4.addEventListener("click", append);
// button5.addEventListener("click", append);
// button6.addEventListener("click", append);
// button7.addEventListener("click", append);
// button8.addEventListener("click", append);
// button9.addEventListener("click", append);
// buttonAc.addEventListener("click",append);
// addNumpad.addEventListener("click", incrementCounter);
// addNumpad.addEventListener("click", incrementCounter);
