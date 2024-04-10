const blockRef = document.querySelector(".hero");
const listRef = document.querySelector(".site-nav");
const magicBtnRef = document.querySelector(".magic-btn");

const headingRef = document.createElement("h1");
headingRef.textContent = "Заголовоок сторіки";
headingRef.classList.add("page__title");

const imageRef = document.createElement("img");
imageRef.src =
  "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
imageRef.alt = "Natural";
imageRef.width = "350";

const itemRef = document.createElement("li");
itemRef.classList.add("site-nav__item");

const linkRef = document.createElement("a");
linkRef.textContent = "Особистий кабінет";
linkRef.classList.add("site-nav__link");
linkRef.href = "/profile";

itemRef.appendChild(linkRef);

magicBtnRef.addEventListener("click", () => {
  blockRef.append(headingRef, imageRef);
  listRef.insertBefore(itemRef, listRef.firstElementChild);
});
