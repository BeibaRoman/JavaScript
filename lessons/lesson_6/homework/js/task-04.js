const refs = {
  decrementBtnEl: document.querySelector('[data-action="decrement"]'),
  incrementBtnEL: document.querySelector('[data-action="increment"]'),
  valueEl: document.getElementById("value"),
};

refs.decrementBtnEl.addEventListener("click", onDecrementValueClick);
refs.incrementBtnEL.addEventListener("click", onIncrementValueClick);

const counterValue = 1;

function onDecrementValueClick() {
  refs.valueEl.textContent = (
    Number(refs.valueEl.textContent) - counterValue
  ).toString();
}

function onIncrementValueClick() {
  (refs.valueEl.textContent =
    Number(refs.valueEl.textContent) + counterValue).toString();
}
