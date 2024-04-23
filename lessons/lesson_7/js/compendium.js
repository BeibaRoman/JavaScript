const outputEl = document.querySelector(".output");
const colorPaletteEl = document.querySelector(".color-palette");

colorPaletteEl.addEventListener("click", selectColor);

function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const selectedColor = event.target.dataset.color;
  outputEl.textContent = `Selected color: ${selectedColor}`;
  outputEl.style.color = selectedColor;
  console.log(selectedColor);
}

createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i += 1) {
    const color = getRandomHexColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }

  colorPaletteEl.append(...items);
}

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
