// Age-ify (A future age calculator)

const yearOfBirth = 1982;
const yearFuture = 2045;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in 2027");


// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
const dogAge = dogYear * 7;
if (shouldShowResultInDogYears == true) {
  console.log("Your dog will be " + dogAge + " dog years old in 2027")
}


// Housey pricey (A house price estimator)

const volumeInMeters = [(8 * 10 * 10),(5 * 11 * 8)];
const gardenSizeInM2 = [100,70];
const payment = [2500000, 1000000]
const housePrice = [(volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300), (volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300)]

console.log("Peter payed too much : ", payment[0] > housePrice[0]);
console.log("Julia payed too much : ", payment[1] > housePrice[1]);


// Ez Namey (Startup name generator)

const firstWords = ["Nordic", "Smart", "Awesome", "Remarkable", "Elegant", "Easy", "Perfect", "Premium", "Iconic", "First-class"]
const secondWords = ["Lane", "Bulletin", "Corporate", "Bureaux", "K-pop", "Conversation", "Boutique", "Boulevard", "Wardrobe", "Uniforms "]
const randomNumber = Math.floor(Math.random() * 10) + 0
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log("The Startup \"", startupName, "\" contains ", startupName.length, "characters");
