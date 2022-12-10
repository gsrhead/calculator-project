let displayContainer = document.querySelector("#display");
let buttons = document.querySelectorAll('button')
let operatorChosen = false;
let operator = ''
let firstNum = 0;
let secondNum = 0;

for(let btn of buttons){
  btn.addEventListener('click',append)
}

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

function append(event) {

  console.log(event.path[0])
  if (
    event.path[0].innerText == "." ||
    event.path[0].innerText == 0 ||
    event.path[0].innerText == 1 ||
    event.path[0].innerText == 2 ||
    event.path[0].innerText == 3 ||
    event.path[0].innerText == 4 ||
    event.path[0].innerText == 5 ||
    event.path[0].innerText == 6 ||
    event.path[0].innerText == 7 ||
    event.path[0].innerText == 8 ||
    event.path[0].innerText == 9 ) {
      displayContainer.innerText = displayContainer.innerText + event.path[0].innerText
  } else {
    console.log(event.path[0].innerText) 
    action(event)
  }
}
function handleOperator(op){
  if(operatorChosen === false){
    
  firstNum=displayContainer.innerText;
  operator = op;
  operatorChosen = true;
  displayContainer.innerText="";
  }
}
function action(event) {

  console.log(event.path[0].innerText)
  switch (event.path[0].innerText) {
    case '+':
      handleOperator('+')
      break;
    case '-':
     handleOperator('-')
      break;
    case '*':
     handleOperator('*')
      break;
    case '/':
     handleOperator('/')
      break;
    case '%':
      displayContainer.innerText = displayContainer.innerText + " % "
    case '⌫':
    displayContainer.innerText =  displayContainer.innerText.slice(0, -1)
      
      break;
    case '=':
     secondNum = displayContainer.innerText
     console.log(firstNum,secondNum,operator)
     operatorChosen = false;
 if (operator =="+" ) {
  displayContainer.innerText = parseFloat(firstNum) + parseFloat(secondNum) 
  }
  if(operator =="-"){
    displayContainer.innerText = parseFloat(firstNum) - parseFloat(secondNum)
  }
if (operator =="*") {
  displayContainer.innerText = parseFloat(firstNum) * parseFloat(secondNum)
}
if (operator =="%") {
  displayContainer.innerText = parseFloat(firstNum) % parseFloat(secondNum) 
}
if (operator =="/") {
  displayContainer.innerText = parseFloat(firstNum) / parseFloat(secondNum)
}
  firstNum =0;

      break;
    case 'AC':
displayContainer.innerText = ""
      break;
    default:
      break;
  }
}
