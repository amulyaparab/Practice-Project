var inputOne = document.querySelector("#number-one");
var inputTwo = document.querySelector("#number-two");
var add = document.querySelector("#add");
var minus = document.querySelector("#minus");
var product = document.querySelector("#product");
var divide = document.querySelector("#divide");
var outputEl = document.querySelector("#output");

function addHandler() {
  var sum = Number(inputOne.value) + Number(inputTwo.value);
  outputEl.innerText = "sum is " + sum;
  return sum;
}

function minusHandler() {
  var subtraction = Number(inputOne.value) - Number(inputTwo.value);
  outputEl.innerText = "subtraction is " + subtraction;
  return subtraction;
}

function productHandler() {
  var multiplication = Number(inputOne.value) * Number(inputTwo.value);
  outputEl.innerText = "multiplication is " + multiplication;
  console.log(multiplication);
  return multiplication;
}

function divideHandler() {
  var division = Number(inputOne.value) / Number(inputTwo.value);
  outputEl.innerText = "division is " + division;
  return division;
}

add.addEventListener("click", addHandler);
minus.addEventListener("click", minusHandler);
product.addEventListener("click", productHandler);
divide.addEventListener("click", divideHandler);
