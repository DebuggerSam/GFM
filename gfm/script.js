let firstNumber = '',
    secondNumber = '',
    operationSign = '';
let flag = false;

const ac = document.querySelector('.ac');
const btns = document.querySelector('.buttons');
let backspace = document.querySelector('.backspace');

const arrayOperands = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];



function del(){
  backspace = output.innerHTML;
  console.log(output.innerHTML = backspace.substring(0, backspace.length-1));
}
backspace.addEventListener('click', del);

const operationsObject = {
  minus: '-',
  plus: '+',
  division: '/',
  myltiply: 'x',
  equal: '=',
}


const action = ['-', '+', 'x', '/'];

let output = document.querySelector('.screen_container p');

function clearAll() {
  firstNumber = '';
  secondNumber = '';
  operationSign = '';
  flag = false;
  output.textContent = 0;
}

ac.addEventListener('click', clearAll);

btns.addEventListener('click', (e) => {
  if(!e.target.classList.contains('btn')){
    return;
  };

  if(e.target.classList.contains('ac')){
    return;
  };

  output.textContent = '';

  const getButton = e.target.textContent;

  if(arrayOperands.includes(getButton)){
    if(secondNumber === '' && operationSign === ''){
      firstNumber += getButton;
      output.textContent = firstNumber;
    }else if(firstNumber !== '' && secondNumber !== '' && flag){
      secondNumber = getButton;
      flag = false;
      output.textContent = secondNumber;
    }else{
      secondNumber += getButton;
      output.textContent = secondNumber;
    }
    return;
  }

  if(action.includes(getButton)){
    operationSign = getButton;
    output.textContent = operationSign;
    return;
  }

  if(getButton === operationsObject.equal){

    if(secondNumber === '') secondNumber = firstNumber;

    switch(operationSign){
      case operationsObject.plus:
        firstNumber = +(firstNumber) + +(secondNumber);
        break;
      case operationsObject.minus:
        firstNumber = firstNumber - secondNumber;
        break;
      case operationsObject.myltiply:
        firstNumber = firstNumber * secondNumber;
        break;
      case operationsObject.division:
        if(secondNumber === '0'){
          output.textContent = '????????????!';
          firstNumber = '';
          secondNumber = '';
          operationSign = '';
          return;
        }
        firstNumber = firstNumber / secondNumber;
        break;
    }

    flag = true;
    output.textContent = firstNumber;

  }
});