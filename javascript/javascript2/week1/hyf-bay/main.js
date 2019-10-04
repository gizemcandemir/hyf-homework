console.log("Script loaded");
const testProductNames = ["Flat screen", "Mobile phone", "Wallet"];

function renderProducts(array) {
  const productList = document.querySelector(".products > ul");
  for (let i = 0; i < array.length; i++) {
    const product = array[i];
    const productLi = document.createElement("li");
    productList.appendChild(productLi);
    productLi.appendChild(renderProduct(product));
  }
}

function renderProduct(product) {
  const productDetails = document.createElement("ul");

  const nameLi = document.createElement("li");
  nameLi.innerText = product.name;
  nameLi.classList.add("name");
  productDetails.appendChild(nameLi);

  const priceLi = document.createElement("li");
  priceLi.innerText = product.price;
  priceLi.classList.add("price");
  productDetails.appendChild(priceLi);

  const ratingLi = document.createElement("li");
  ratingLi.innerText = product.rating;
  ratingLi.classList.add("rating");
  productDetails.appendChild(ratingLi);

  const shipsToLi = document.createElement("li");
  shipsToLi.classList.add("shipsTo");
  shipsToLi.appendChild(renderShipsTo(product.shipsTo));
  productDetails.appendChild(shipsToLi);

  return productDetails;
}

function renderShipsTo(array) {
  const shipsToList = document.createElement("ul");
  for (let i = 0; i < array.length; i++) {
    const countryLi = document.createElement("li");
    countryLi.innerText = array[i];
    shipsToList.appendChild(countryLi);
  }
  return shipsToList;
}

const products = getAvailableProducts();
renderProducts(products);
