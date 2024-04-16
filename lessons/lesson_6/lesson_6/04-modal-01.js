const refs = {
  openModal: document.querySelector('[data-action="open-modal"]'),
  closeModal: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
  modal: document.querySelector(".modal"),
};

refs.openModal.addEventListener("click", onOpenModal);
refs.closeModal.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onCloseBackdrop);

function onOpenModal() {
  window.addEventListener("keydown", onEscapeCloseModal);
  document.body.classList.add("show-modal");
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscapeCloseModal);
  document.body.classList.remove("show-modal");
}

function onCloseBackdrop(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscapeCloseModal(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}
