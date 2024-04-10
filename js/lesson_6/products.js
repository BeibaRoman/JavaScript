import products from "./data/products-dat.js";

const productsContainerRef = document.querySelector(".js-products");
console.log("🚀 ~ productsContainerRef:", productsContainerRef);

/*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/

const makeProductsCard = ({ name, description, price }) => {
  const productRef = document.createElement("article");
  productRef.classList.add("product");
  const nameRef = document.createElement("h2");
  nameRef.classList.add("product__name");
  nameRef.textContent = name;
  const descRef = document.createElement("p");
  descRef.classList.add("product__descr");
  descRef.textContent = description;
  const priceRef = document.createElement("p");
  priceRef.classList.add("product__pridct");
  priceRef.textContent = `Ціна: ${price}`;

  productRef.append(nameRef, descRef, priceRef);
  return productRef;
};

const elements = products.map(makeProductsCard);
console.log("🚀 ~ elements:", elements);

productsContainerRef.append(...elements);
