const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.getElementById("ingredients");

function markup(array) {
  return array.map((ingredient) => {
    const itemLi = document.createElement("li");
    itemLi.textContent = ingredient;
    itemLi.classList.add("item");
    return itemLi;
  });
}

listEl.append(...markup(ingredients));
