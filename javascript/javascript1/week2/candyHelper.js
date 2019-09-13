const candyType = ["sweet", "chocolate", "toffee", "chewing-gum"];
const candyPrice = ["0.5", "0.7", "1.1", "0.03"];
const boughtCandyPrices = [];


function addCandy (candyType, weight) {
  for (i=0; i<4; i++) {
    if (candyType == candyType[i]) {
      return candyPrice == candyPrice[i];
    }
    return boughtCandyPrices.push(weight * candyPrice[i]);
  }
}

addCandy("sweet", 20);
console.log(boughtCandyPrices);

const text = "Your candy costs " + boughtCandyPrices + " kr."
console.log(text);

// Actually I wanted to have the text like below, but I couldn't figure it out how to make it work... so I used the simpler text above.
// const text = "You bought " + addCandy.weight + " grams of " + addCandy.candyType + " and it costs: " + boughtCandyPrices + " kr."; 


const amountToSpend = Math.random() * 100;
console.log("You have " + amountToSpend + " kr. to spend.");

function canBuyMoreCandy() {
  if (boughtCandyPrices > amountToSpend) {
    return "Enough candy for you!";
  } else {
    return "You can buy more, so please do!"; 
  }
}

console.log(canBuyMoreCandy());
