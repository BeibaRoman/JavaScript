const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", onChangeOutput);

function onChangeOutput(e) {
  if (e.currentTarget.value.length === 0) {
    outputEl.textContent = "Anonymous";
  } else {
    outputEl.textContent = e.currentTarget.value;
  }
}
