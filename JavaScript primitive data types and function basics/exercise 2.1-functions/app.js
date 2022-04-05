function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

let countryOne = describeCountry("Finland", "6 million", "Helsinki");
console.log(countryOne);
let countryTwo = describeCountry("Israel", "10 million", "Jerusalem");
console.log(countryTwo);
let countryThree = describeCountry("Japan", "120 million", "Tokyo");
console.log(countryThree);
