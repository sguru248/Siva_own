"use strict";

document.querySelector(".cal").addEventListener("click", function () {
  let num1 = Number(document.querySelector(".num1").value);
  let num2 = Number(document.querySelector(".num2").value);
  let operation = document.querySelector(".operation").value;
  let doMath;
  if (operation == "+") {
    doMath = num1 + num2;
  } else if (operation === "-") {
    doMath = num1 - num2;
  } else if (operation === "*") {
    doMath = num1 * num2;
  } else if (operation === "/") {
    doMath = num1 / num2;
  } else {
    document.querySelector(".result").textContent =
      "Please Type Correct Number";
  }

  document.querySelector(
    ".result"
  ).textContent = `${num1} ${operation} ${num2} Result is ${doMath}`;
});

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".num1").value = "";
  document.querySelector(".operation").value = "";
  document.querySelector(".num2").value = "";
  document.querySelector(".result").textContent = "Let's see the Result";
});
