import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

galleryListEl.addEventListener("click", onClickOpenGallery);

const markup = galleryMarkup(galleryItems);
galleryListEl.insertAdjacentHTML("afterbegin", markup);

function onClickOpenGallery(e) {
  e.preventDefault();
  const { target } = e;
  if (!target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
     <img src='${target.dataset.source}' width="800" height="600">
 `);

  instance.show();

  window.addEventListener("keydown", oncloseModalGallery);

  function oncloseModalGallery(e) {
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", oncloseModalGallery);
    }
  }
}

function galleryMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");
}
