const blockListRef = document.querySelector(".prc-block-list");
console.log("🚀 ~ blockListRef:", blockListRef);

const blockbButtonRef = document.querySelector(".prc-block-button");
console.log("🚀 ~ blockbButtonRef:", blockbButtonRef);

//* Створити список технологій що вивчаються на курсі Fullstack за допомогою js | Показати як це робиться через map та reduce

const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];

// const listRef = document.createElement("ul");
// console.log("🚀 ~ listRef:", listRef);

// for (const technoligy of technologies) {
//   const itemRef = document.createElement("li");
//   itemRef.textContent = technoligy;
//   console.log(itemRef);
//   listRef.appendChild(itemRef);
// }

// blockListRef.appendChild(listRef);

// const itemRef = technologies
//   .map((technology) => `<li>${technology}</li>`)
//   .join("");
// console.log("🚀 ~ itemRef:", itemRef);

// const listRef = `<ul>${itemRef}</ul>`;

// blockListRef.insertAdjacentHTML("afterbegin", listRef);

const itemRef = technologies.reduce(
  (markup, technology) => (markup += `<li>${technology}</li>`),
  ""
);

const listRef = `<ul>${itemRef}</ul>`;
blockListRef.insertAdjacentHTML("afterbegin", listRef);

// ?=======================================

//* Створити кілька кнопок на основі масива з обєктами використовуючи createElement

const colors = [
  {
    label: "red",
    color: "#FF0000",
  },
  {
    label: "green",
    color: "#00FF00",
  },
  {
    label: "blue",
    color: "#0000FF",
  },
  {
    label: "yellow",
    color: "#FFFF00",
  },
];

const makeMarkupbutton = (array) => {
  return array.map(({ label, color }) => {
    const btnRef = document.createElement("button");
    btnRef.type = "button";
    btnRef.textContent = label;
    btnRef.style.backgroundColor = color;
    btnRef.classList.add("btn");
    return btnRef;
  });
};

console.log(makeMarkupbutton(colors));

blockbButtonRef.append(...makeMarkupbutton(colors));
