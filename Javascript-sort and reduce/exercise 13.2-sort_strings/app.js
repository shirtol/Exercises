// 13.2.a

const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

// 13.2.a.1

const ascendingSortStrArr = (arr) => [...arr].sort();

// console.log(ascendingSortStrArr(foods));
// console.log(foods);

// 13.2.a.2

const descendingSortStrArr = (arr) => [...arr].sort().reverse();

// console.log(descendingSortStrArr(foods));
// console.log(foods);

// 13.2.b
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

// 13.2.b.1

const ascSortUpperCase = (arr) =>
    [...arr].sort((el1, el2) =>
        el1.toLowerCase() < el2.toLowerCase() ? -1 : 1
    );

// console.log(ascSortUpperCase(foodsWithUpperCase));
// console.log(foodsWithUpperCase);

// 13.2.b.1

const descSortUpperCase = (arr) =>
    [...arr].sort((el1, el2) =>
        el1.toLowerCase() < el2.toLowerCase() ? 1 : -1
    );

// console.log(descSortUpperCase(foodsWithUpperCase));
// console.log(foodsWithUpperCase);

// 13.2.c
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const sortByWordLength = (arr) =>
    [...arr].slice().sort((word1, word2) => word2.length - word1.length);

// console.log(sortByWordLength(words));
// console.log(words);
