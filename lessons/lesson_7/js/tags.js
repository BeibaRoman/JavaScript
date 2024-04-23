// const containerTags = document.querySelector(".js-tags");

// let selectedTag = null;

// containerTags.addEventListener("click", onTagsClick);

// function onTagsClick(e) {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const currentActiveBtn = document.querySelector(".tags__btn--active");

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove("tags__btn--active");
//   }

//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add("tags__btn--active");
//   selectedTag = nextActiveBtn;
//   console.log(selectedTag.dataset.value);
// }

const containerTags = document.querySelector(".js-tags");
const selectedTags = new Set();

containerTags.addEventListener("click", onTagsClick);

function onTagsClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  const btn = e.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains("tags__btn--active");

  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle("tags__btn--active");
  console.log(selectedTags);
}
