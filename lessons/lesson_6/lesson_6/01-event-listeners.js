const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

addListenerBtn.addEventListener("click", () => {
  console.log("Добавити прослуховувач на кнопку!");
  targetBtn.addEventListener("click", onTargetBtnClick);
});

removeListenerBtn.addEventListener("click", () => {
  console.log("Зняти прослуховувач з кнопки!");

  targetBtn.removeEventListener("click", onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log(event);
  console.log("Клік по цільовій кнопці!");
}
