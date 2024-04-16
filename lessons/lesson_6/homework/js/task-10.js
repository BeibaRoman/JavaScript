function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls > input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", onMarkupBox);
destroyBtn.addEventListener("click", destroyBoxes);

function onMarkupBox(e) {
  boxes.append(...createBoxes(Number(inputEl.value)));
}

function destroyBoxes(e) {
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  const arrayBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = 30 + 10 * i + "px";
    box.style.height = 30 + 10 * i + "px";
    box.style.backgroundColor = getRandomHexColor();
    arrayBoxes.push(box);
  }
  return arrayBoxes;
}
