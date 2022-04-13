const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2,
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4,
        },
    ],
    cashRegister: 200,
};

// 12.2.1
function getCandy(candyStore, id) {
    return candyStore.candies.find((candy) => candy.id === id);
}

// console.log(getCandy(candyStore, "as12f"));

// 12.2.2
function getPrice(candyStore, id) {
    const selectedCandy = getCandy(candyStore, id);
    return selectedCandy.price;
}

// console.log(getPrice(candyStore, "as12f"));
// console.log(getPrice(candyStore, "5hd7y"));

// 12.2.3
function addCandy(candyStore, id, name, price) {
    candyStore.candies.push({ name, id, price, amount: 1 });
}

addCandy(candyStore, "2dfd1", "gummy bears", 3);
// console.log(candyStore);

// 12.2.4
function buy(candyStore, id) {
    const selectedCandy = getCandy(candyStore, id);
    if (selectedCandy.amount > 0) {
        selectedCandy.amount -= 1;
    } else {
        return "Out of stock";
    }
    candyStore.cashRegister += selectedCandy.price;
}

// buy(candyStore, "5hd7y");
// buy(candyStore, "5hd7y");
// buy(candyStore, "5hd7y");
// buy(candyStore, "5hd7y");
// console.log(buy(candyStore, "5hd7y"));
// console.log(candyStore);
