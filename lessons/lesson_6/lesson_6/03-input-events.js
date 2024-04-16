/* onSubjectEvent */

const refs = {
  input: document.querySelector(".js-input"),
  licenseCheckbox: document.querySelector(".js-license"),
  nameLabel: document.querySelector(".js-button > span"),
  btn: document.querySelector(".js-button"),
};

refs.input.addEventListener("input", onInputChange);

refs.licenseCheckbox.addEventListener("change", onLincenseChange);

function onInputChange(event) {
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLincenseChange(event) {
  refs.btn.disabled = !event.currentTarget.checked;
}
