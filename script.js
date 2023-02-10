'use strict'
let clear = document.getElementById('clear');
let result = document.querySelector('.result');
let multiple = document.getElementById('mult');
let difference = document.getElementById('diff');
let submission = document.getElementById('sub');
let divide = document.getElementById('div');

let first = document.getElementById('#first')
let second = document.getElementById('#second')

function calcPlus(first, second) {
   first = Number(document.querySelector('#first').value);
   second = Number(document.querySelector('#second').value);
   let plus = first + second;
   document.querySelector('.result').textContent = `Result: ${plus}`;
};

function calcMinus(first, second) {
   first = Number(document.querySelector('#first').value);
   second = Number(document.querySelector('#second').value);
   let minus = first - second;
   document.querySelector('.result').textContent = `Result: ${minus}`;
};

function calcStar(first, second) {
   first = Number(document.querySelector('#first').value);
   second = Number(document.querySelector('#second').value);
   let star = first * second;
   document.querySelector('.result').textContent = `Result: ${star}`;
};

function calcDiv(first, second) {
   first = Number(document.querySelector('#first').value);
   second = Number(document.querySelector('#second').value);
   let div = first / second;
   if(second === 0){
   document.querySelector('.result').textContent = 'Dividing by zero is not allowed';
   }else{
      document.querySelector('.result').textContent = `Result: ${div}`;
   }
};

function clearAll(){
   first = document.querySelector('#first').value = '';
   second = document.querySelector('#second').value = '';
   document.querySelector('.result').textContent = 'Result: ';
};

divide.addEventListener('click', calcDiv);
multiple.addEventListener('click', calcPlus);
difference.addEventListener('click', calcMinus);
submission.addEventListener('click', calcStar);
clear.addEventListener('click', clearAll);

