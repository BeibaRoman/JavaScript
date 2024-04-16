const listEl = document.querySelector("#categories");

const itemsEl = listEl.children;
console.log("Number of categories:", itemsEl.length);

[...itemsEl].forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});
