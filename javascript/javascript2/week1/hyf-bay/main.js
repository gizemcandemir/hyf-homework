console.log("Script loaded");

const testProductNames = ["Flat screen", "Mobile phone", "Wallet"];

const products = document.getElementsByClassName("products")[0];
// const productList = document.querySelector("ul");

function renderProducts(array) {
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = array[i];
        products.appendChild(li); 
    } 
}

console.log(renderProducts(testProductNames));

// console.log(getAvailableProducts());