import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

const markup = markupGalleryImage(galleryItems);

galleryListEl.insertAdjacentHTML("afterbegin", markup);

function markupGalleryImage(array) {
  return array
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
    )
    .join("");
}

var lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
