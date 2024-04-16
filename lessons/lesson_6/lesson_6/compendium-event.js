// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   console.dir(event.target.elements.password.value);
// const login = form.elements.login.value;
// const password = form.elements.password.value;

// if (login === "" || password === "") {
//   return console.log("Please fill in all the fields!");
// }

// console.log(`login: ${login}, Password: ${password}`);
// form.reset();
// }

// !==========================================

/* const select = document.querySelector(".pizza-select");

const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText = event.currentTarget[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;

  valueOutput.textContent = selectedOptionValue;
}
 */

// !==========================================

// const inputEl = document.querySelector(".text-input");

// const outputEl = document.querySelector(".output");

// inputEl.addEventListener("input", (event) => {
//   const inputValue = event.currentTarget.value;
//   outputEl.textContent = inputValue;
// });
// !==========================================

/* const textInput = document.querySelector(".text-input");

const setFocusBtn = document.querySelector("[data-action = 'set']");
const removeFocusBtn = document.querySelector("[data-action = 'remove']");

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
}); */

// !==========================================

const clearLogBtn = document.querySelector(".js-clear");
const logList = document.querySelector(".log-list");
let keypressCounter = 1;

document.addEventListener("keydown", logMessage);

document.addEventListener("keyup", logMessage);

clearLogBtn.addEventListener("click", reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
  <span class="chip">${keypressCounter}</span>
  <ul>
    <li><b>Event</b>: ${type}</li>
    <li><b>Key</b>: ${key}</li>
    <li><b>Code</b>: ${code}</li>
  </ul>
</div>`;

  logList.insertAdjacentHTML("afterbegin", markup);

  if (type === "keyup") {
    incrementKeypressCounter();
  }
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = "";
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}
