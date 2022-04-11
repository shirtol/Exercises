const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const slicedArray = fruits.slice(
    fruits.indexOf("Orange"),
    fruits.indexOf("Lemon") + 1
);
console.log(slicedArray);
