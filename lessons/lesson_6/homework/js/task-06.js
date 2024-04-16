const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", onInputValidate);

function onInputValidate(e) {
  const valueLength = e.currentTarget.value.length.toString();
  inputEl.classList.add("invalid");

  if (valueLength === inputEl.dataset.length) {
    inputEl.classList.toggle("invalid");
    inputEl.classList.add("valid");
  }
}
