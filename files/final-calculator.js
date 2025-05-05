let operator;
let calculation = (localStorage.getItem('calculation') || '');

function updateCalculation(value) {
  calculation += value;
  localStorage.setItem('calculation', calculation);
  document.querySelector('.result').innerHTML = calculation;
}