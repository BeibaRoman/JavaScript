const magicBtn = document.querySelector(".magic-btn");

magicBtn.addEventListener("click", () => {
  titleRef.textContent = "Зміна Title";
  imageRef.src =
    "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";
  console.log(inputRef.value);
  actions.forEach((el) => console.log(el.dataset.action));
});

const titleRef = document.querySelector(".hero__title");

const imageRef = document.querySelector(".hero__image");

const inputRef = document.querySelector(".js-input");
console.log("🚀 ~ inputRef:", inputRef);

const actions = document.querySelectorAll(".js-actions button");
console.log("🚀 ~ actions:", actions);

console.log(imageRef.getAttribute("src"));
console.log(imageRef.hasAttribute("alt"));
// console.log(imageRef.removeAttribute("alt"));
