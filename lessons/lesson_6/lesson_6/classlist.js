const listRef = document.querySelector(".site-nav");

// listRef.classList.add("super-cool");
// listRef.classList.remove("super-cool");
// console.log(listRef.classList.contains("site-nav"));
const magicBtn = document.querySelector(".magic-btn");

const currentPageUrl = "/contact";

const linkRef = document.querySelector(
  ` .site-nav__link[href ="${currentPageUrl}"]`
);

listRef.classList.remove("site-nav");
magicBtn.addEventListener("click", () => {
  linkRef.classList.toggle("site-nav__link--current");
});
