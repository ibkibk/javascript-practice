// TASK

// This link: https://codepen.io/danielworton/pen/bGdammW, contains a JavaScript counter that has performance issues.
//  Your task is to:
// - Identify and overcome the performance issues.
// - Enhance by adding code to stop users having 0 quantity.
// Feel free to use the internet to aid your research and design.
// Be prepared to confidently explain and justify the decisions and actions you have made.

document.querySelectorAll("#minus")[0].addEventListener("click", function (e) {
  e.stopPropagation();
  document.querySelectorAll("#number")[0].innerText =
    Number(document.querySelectorAll("#number")[0].innerText) - 1;
});

document.querySelectorAll("#plus")[0].addEventListener("click", function (e) {
  e.stopPropagation();
  document.querySelectorAll("#number")[0].innerText =
    Number(document.querySelectorAll("#number")[0].innerText) + 1;
});

// To solve the performance issues I used getElementById instead of querySelectorAll because
// This method finds all the elements that match the specified CSS selector in the document and
// returns the one we are looking for. Whereas The getElementById is a  method returns the element
// with the ID attribute we specified.
let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let number = document.getElementById("number");

btnMinus.addEventListener("click", (e) => {
  e.stopPropagation();
  if (number.innerText == 1) {
    number.innerText = Number(number.innerText) - 2;
  } else {
    number.innerText = Number(number.innerText) - 1;
  }
});

btnPlus.addEventListener("click", (e) => {
  e.stopPropagation();
  if (number.innerText == -1) {
    number.innerText = Number(number.innerText) + 2;
  } else {
    number.innerText = Number(number.innerText) + 1;
  }
});
