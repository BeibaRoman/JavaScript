/* console.log(document);

const body = document.body;
console.log("🚀 ~ body:", body);

const list = document.querySelector(".list");
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const lastListItem = list.lastElementChild;

console.log(lastListItem);

const listItems = list.children;

console.log(listItems);
console.log(
  [...listItems].forEach((element) => {
    console.log(element);
  })
);
 */
// ?=============================

/* const listWihtId = document.querySelector("#menu");

listWihtId.style.textTransform = "uppercase";

listWihtId.style.fontSize = "24px";

console.log(listWihtId);

const listWithClass = document.querySelector(".menu");
console.log(listWithClass);

const menuItemsByTagName = document.querySelectorAll("li");
console.log("🚀 ~ menuItemsByTagName:", menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log("🚀 ~ menuItemsByClass:", menuItemsByClass);

const firstMenuItem = document.querySelector(".menu-item");

firstMenuItem.style.color = "tomato";

console.log("🚀 ~ firstMenuItem:", firstMenuItem);

 */

// ?=============================

const image = document.querySelector(".image");

// console.log(image);

image.src = "https://picsum.photos/id/13/640/480";

image.alt = "River bank";

// console.log(image.alt);
// console.log(image.src);
// ?===========================

// const textEl = document.querySelector(".article-text");
// console.log(textEl);

// console.log(textEl.textContent);

// const titleEl = document.querySelector(".article-title");
// console.log("🚀 ~ titleEl:", titleEl);

// titleEl.textContent = "Welcome to Bahamas!";
// ?===========================

/* const link = document.querySelector(".link");

console.log(link.classList);

const hasActiveClass = link.classList.contains("is-active");
console.log(`hasActiveClass - ${hasActiveClass}`);

link.classList.add("special");

console.log(link.classList);

link.classList.remove("is-active");
console.log(link.classList);

link.classList.toggle("is-active");
console.log(link.classList);

link.classList.replace("special", "regular");
console.log(link.classList); */
// ?===========================
/* 
const image1 = document.querySelector(".image-1");
console.log("🚀 ~ image:", image);

console.log(image1.attributes);

console.log(image1.hasAttribute("src"));

console.log(image1.getAttribute("src"));

image1.setAttribute("alt", "Amazing natural");

console.log(image1.getAttribute("alt"));
 */
// ?===========================

// const saveBtn = document.querySelector(".editor button[data-action = 'save'] ");

// const closeBtn = document.querySelector(
//   ".editor button[data-action = 'close'] "
// );

// console.log(saveBtn.dataset.action);

// console.log(closeBtn.dataset.action);
// ?===========================

const list = document.querySelector(".usernames");
console.log("🚀 ~ list:", list);

const lastItem = document.createElement("li");
lastItem.textContent = "Poly";
list.append(lastItem);
console.log("🚀 ~ lastItem:", lastItem);

const firstElement = document.createElement("li");
firstElement.textContent = "Ajex";
list.prepend(firstElement);
console.log("🚀 ~ firstElement:", firstElement);

lastItem.remove();

// ?===========================

const article = document.querySelector(".article");
console.log(article.innerHTML);

const title = document.querySelector(".article .title");

title.innerHTML = 'New and <span class="accent">improved</span> title';

console.log("🚀 ~ title:", title.innerHTML);

const text = document.querySelector(".article .text");
console.log("🚀 ~ text:", text.innerHTML);

const link = document.querySelector(".article .link");
console.log("🚀 ~ link:", link.innerHTML);

text.innerHTML = "";

// ?===========================
const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const listRef = document.querySelector(".list-lang");

const markup = technologies
  .map((technolgy) => `<li class = 'list-item'>${technolgy}</li>`)
  .join("");
console.log("🚀 ~ markup:", markup);

listRef.innerHTML = markup;
// ?===========================

const listEl = document.querySelector(".list-p");

const newTechnologies = ["React", "TypeScript", "Node.js"];

const markupNew = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

listEl.insertAdjacentHTML("beforeend", markupNew);

listEl.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
