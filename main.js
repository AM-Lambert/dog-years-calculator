// My current age in human years
const myAge = 34;

// The first two years of a dog's life are 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5

// Subtract the first two human years to account for the longer dog years in the early years
let laterYears = myAge - 2

// Each human year after the first two are 4 years in dog years
laterYears *= 4

// My age in dog years is the value of the first two years added to every year thereafter
let myAgeInDogYears = earlyYears + laterYears

//My name
myName = "AARON".toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
