// ------ Part 1 - week 1 ------ //

console.log("Script loaded");
const testProductNames = ["Flat screen", "Mobile phone", "Wallet"];

function renderProducts(array) {
  const productList = document.querySelector(".products > ul");
  productList.innerHTML = "";
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

// ------ Part 2 - week 2 ------ //

const searchInput = document.querySelector(".search > input");
searchInput.addEventListener("keyup", () => search());

const countrySelection = document.querySelector(".shipping-to");
countrySelection.addEventListener("change", () => search());

const maxPrice = document.querySelector(".max-price");
maxPrice.addEventListener("change", () => search());

const sortBy = document.querySelector(".sort-by");
sortBy.addEventListener("change", () => search());

search(); // inital search to sort the list according to the default selection

function search(query) {
  let matchingProducts = products
  .filter(product => product.name.toLocaleLowerCase().includes(searchInput.value.toLocaleLowerCase()))
  .filter(product => product.price <= maxPrice.value)
  
  if (countrySelection.value !== "Everywhere") {
    matchingProducts = matchingProducts.filter(product => product.shipsTo.includes(countrySelection.value));  
  }

  if (sortBy.value === "cheap") {
    matchingProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === "expensive") {
    matchingProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy.value === "name") {
    matchingProducts.sort((a, b) => a.name > b.name)
  }

  renderProducts(matchingProducts);
}
