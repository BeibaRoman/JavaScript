const refs = {
  form: document.getElementById("form"),
  price: document.getElementById("price"),
  amount: document.getElementById("amount"),
  quantity: document.getElementById("quantity"),
  total: document.getElementById("total"),
};

const date = {
  price: 0,
  quantity: 0,
  calculateTotalPrice() {
    return Number((this.price * this.quantity).toFixed(2));
  },
};

refs.form.addEventListener("input", onInputForm);

dataFill();
setTextPrice(date.calculateTotalPrice());

function onInputForm({ target }) {
  const { value } = target;
  if (target === refs.quantity) {
    refs.amount.textContent = value;
  }

  target.setAttribute("value", value);

  dataFill();
  setTextPrice(date.calculateTotalPrice());
}

function dataFill() {
  date.price = refs.price.value;
  date.quantity = refs.quantity.value;
}

function setTextPrice(price) {
  refs.total.textContent = `${price} Грн.`;
}
