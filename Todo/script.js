"strict";

function addToCart(element) {
  let mainEl = element.closest(".actions");
  let textToDo = mainEl.querySelector(".todo-text").value;
  let display = document.querySelector(".container-display");
  // dohvati trenutno vrijeme
  let time = new Date().toLocaleTimeString("hr-HR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  if (textToDo !== "") {
    display.innerHTML += `<div class="display-card">
    
    <div class="wrapper-flex">
      <p class="time">${time}</p>
    <p>${textToDo}</p>
    </div>
    
  <div>
  <button
          onclick="todoDone(this)"
          class="correct">
          Odrađeno
        </button>
        <button
          onclick="removeFromCart(this)"
          class="remove-item">
          Ukloni
        </button>
        </div>`;
  } else {
    alert("Input Polje prazno");
  }

  // ocisti input polje
  mainEl.querySelector(".todo-text").value = "";
}

// dohvatite input element
let input = document.querySelector(".todo-text");

// dodajte eventListener
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addToCart(event.target);
  }
});

function removeFromCart(element) {
  let mainEl = element.closest(".display-card");
  mainEl.remove();
  console.log(mainEl);
}

function todoDone(element) {
  let mainEl = element.closest(".display-card");
  let elBtn = mainEl.querySelector(".correct");
  mainEl.style.backgroundColor = "lightgreen";
  elBtn.remove();
}
