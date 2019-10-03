console.log("Script loaded");

const testProductNames = ["Flat screen", "Mobile phone", "Wallet"];

const productList = document.getElementsByClassName("products")[0];
// const productList = document.querySelector("ul");

function renderProducts(array) {
    for (let i = 0; i < array.length; i++) {
        const product = document.createElement("li");
        product.innerHTML = `${array[i].name} | ${array[i].price} | ${array[i].rating} | ${array[i].shipsTo}`;
        productList.appendChild(product);
    } 
        // const productDetails = productList.appendChild(product); 
        // const ul = product.createElement("ul");
        // const li = ul.createElement("li");
        // console.log(ul);
        // console.log(li);
        
            // for (let i = 0; i < array.length; i++) {
            //     product.ul.appendChild(li);
            // }
        // product.ul.appendChild(li);
}

const products = getAvailableProducts();
console.log(products);

console.log(renderProducts(products));