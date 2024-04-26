const formEl = document.getElementById("signInForm");

formEl.addEventListener("input", _.debounce(onInputFormValidation, 1000));

function onInputFormValidation({ target }) {
  const { value } = target;
  if (
    value.length < target.dataset.minLength ||
    value.length > target.dataset.maxLength
  ) {
    target.classList.add("wrong");
    target.classList.remove("correct");
  } else {
    target.classList.add("correct");
    target.classList.remove("wrong");
  }
}
