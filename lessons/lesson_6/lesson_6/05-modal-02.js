const refs = {
  backdrop: document.getElementById("overlay"),
  openModalBtn: document.getElementById("openModalBtn"),
  closeModalBtn: document.getElementById("modalCloseBtn"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onCloseModalByBackdrop);

function onOpenModal() {
  document.body.classList.add("open");
  window.addEventListener("keydown", onCloseByEsc);
}

function onCloseModal() {
  document.body.classList.remove("open");
  window.removeEventListener("keydown", onCloseByEsc);
}

function onCloseModalByBackdrop() {
  onCloseModal();
}

function onCloseByEsc(e) {
  console.log(e);
  if (e.code === "Escape") onCloseModal();
}
