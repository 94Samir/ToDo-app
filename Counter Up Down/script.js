"strict";

let start = document.querySelector(".btn--start");
let pause = document.querySelector(".btn--stop");
let reStart = document.querySelector(".btn--restart");
let setNum = document.querySelector(".btn--set");

let minute = document.querySelector("#minute");
let secunde = document.querySelector("#secunde");
let intervalId;

let wrapperCounter = document.querySelector(".wrapper-counter");

setNum.addEventListener("click", function () {
  let inputMin = document.querySelector("#inputMin").value;
  let inputSec = document.querySelector("#inputSec").value;

  inputMin = parseInt(inputMin);
  inputSec = parseInt(inputSec);
  if ((inputMin <= 60 || inputMin >= 0) && inputSec <= 60) {
    minute.innerText = inputMin.toString().padStart(2, "0");
    secunde.innerText = inputSec.toString().padStart(2, "0");
  } else {
    alert("Format Input mora bit 60min 60sec");
  }

  // Ocisti input
  document.querySelector("#inputMin").value = "";
  document.querySelector("#inputSec").value = "";
});

// Funkcija koja odbrojava vrijeme svakog intervala 1000mili sec.
start.addEventListener("click", function () {
  let minuteValue = parseInt(minute.innerText);
  let secondValue = parseInt(secunde.innerText);

  intervalId = setInterval(function () {
    if (secondValue === 0) {
      if (minuteValue === 0) {
        clearInterval(intervalId);
        return;
      } else {
        minuteValue--;
        secondValue = 59;
      }
    } else {
      secondValue--;
    }

    minute.innerText = minuteValue.toString().padStart(2, "0");
    secunde.innerText = secondValue.toString().padStart(2, "0");

    if (secondValue === 0 && minuteValue === 0) {
      wrapperCounter.style.backgroundColor = "red";
    }
  }, 1000);
});

pause.addEventListener("click", function () {
  clearInterval(intervalId);
  let currentMinute = parseInt(minute.innerText);
  let currentSecond = parseInt(secunde.innerText);
});

reStart.addEventListener("click", function () {
  minute.innerText = "00";
  secunde.innerText = "00";
  clearInterval(intervalId);
  wrapperCounter.style.backgroundColor = "black";
  document.querySelector("#inputMin").value = "00";
  document.querySelector("#inputSec").value = "00";
});

function clearMin(element) {
  document.querySelector("#inputMin").value = "";
}
function clearSec(element) {
  document.querySelector("#inputSec").value = "";
}
