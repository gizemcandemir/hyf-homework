// Age-ify (A future age calculator)

const yearOfBirth = 1982;
const yearFuture = 2045;
const age = yearFuture - yearOfBirth;
console.log("You will be ", age, " years old in 2027");


// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = dogYear * 7;
console.log("Your dog will be ", shouldShowResultInDogYears, "dog years old in 2027")


// Housey pricey (A house price estimator)

const volumeInMetersPeter = 8 * 10 * 10;
const gardenSizeInM2Peter = 100;
const paymentPeter = 2500000;
const housePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;

console.log("Peter payed too much : ", paymentPeter > housePricePeter);

const volumeInMetersJulia = 5 * 11 * 8;
const gardenSizeInM2Julia = 70;
const paymentJulia = 1000000;
const housePriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;

console.log("Julia payed too much : ", paymentJulia > housePriceJulia);


// Ez Namey (Startup name generator)

const firstWords = ["Nordic", "Smart", "Awesome", "Remarkable", "Elegant", "Easy", "Perfect", "Premium", "Iconic", "First-class"]
const secondWords = ["Lane", "Bulletin", "Corporate", "Bureaux", "K-pop", "Conversation", "Boutique", "Boulevard", "Wardrobe", "Uniforms "]
const randomNumber = Math.floor(Math.random() * 10) + 0
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log("The Startup \"", startupName, "\" contains ", startupName.length, "characters");