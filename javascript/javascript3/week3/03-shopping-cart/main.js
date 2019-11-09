const ul = document.createElement("ul");
document.body.appendChild(ul);
const li = document.createElement("li");
ul.appendChild(li);

class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}

class ShoppingCart {
	constructor(products) {
		this.products = products;
	}

	addProduct(product) {
		this.products.push(product);
	}

	removeProduct(product) {
		const matchedIndex = this.products.indexOf(product);
		if (matchedIndex > -1) {
			this.products.splice(matchedIndex, 1);
		}
	}

	searchProduct(productName) {
		const searchedProduct = this.products.filter(product => {
			if (product.name.includes(productName.name)) {
				return product;
			}
		});
		console.log(searchedProduct);
	}

	getTotal() {
		const totalPrice = this.products.reduce((total, product) => {
			return total + product.price;
		}, 0);
		return totalPrice;
	}

	renderProducts() {
		for (let i = 0; i < this.products.length; i++) {
			const li = document.createElement("li");
			li.innerHTML = `
			${this.products[i].name}: ${this.products[i].price} dkk
			`;
			ul.appendChild(li);
		}
	}

	getUser() {
		fetch("https://jsonplaceholder.typicode.com/users/1")
			.then(value => value.json())
			.then(value => {
				li.innerHTML = `User name: ${value.name}<hr>`;
			})
			.catch(err => {
				li.innerHTML = `Can not display user name due to this error:<span class="error"</span> ${err} <hr>`;
			});
	}
}

const flatscreen = new Product("flat-screen", 5000);
const shoppingCart = new ShoppingCart([flatscreen]);

const productsList = [flatscreen];

const iPhone = new Product("iPhone", 7000);
const jacket = new Product("jacket", 1000);
const shoe = new Product("shoe", 600);
const book = new Product("book", 150);

const myShoppingCart = new ShoppingCart(productsList);

myShoppingCart.addProduct(iPhone);
myShoppingCart.addProduct(jacket);
myShoppingCart.addProduct(shoe);
myShoppingCart.addProduct(book);
myShoppingCart.removeProduct(jacket);

myShoppingCart.getUser();

myShoppingCart.renderProducts();

myShoppingCart.searchProduct(iPhone);

console.log(myShoppingCart.getTotal());

console.log(myShoppingCart);
