const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
const food2 = ["Fries", "Pizza", "Hamburgers"];

const sameItems = (arr1, arr2) => {
    const sameItemsArr = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                sameItemsArr.push(arr1[i]);
            }
        }
    }
    return sameItemsArr.length > 0 ? sameItemsArr : false;
};

console.log(sameItems(food, food1));
console.log(sameItems(food, food2));
