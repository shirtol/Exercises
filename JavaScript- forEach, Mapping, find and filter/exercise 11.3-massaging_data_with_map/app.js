const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

// 11.3.1
const getNames = (arr) => {
    return arr.map((person) => ({ name: person.name }));
};

// console.log(getNames(data));

// 11.3.2

const getYearOfBirth = (stringyDate) => {
    return parseInt(stringyDate.substr(stringyDate.length - 4));
};

const bornBefore1990 = (arr) => {
    const newArr = [];
    arr.forEach((person) => {
        let yearOfBirth = getYearOfBirth(person.birthday);
        if (yearOfBirth < 1990) {
            newArr.push(person);
        }
    });
    return newArr;
};

// console.log(bornBefore1990(data));

// 11.3.3

const timesOfFoodISPresent = (arr) => {
    const favFoodObj = {};
    arr.forEach((person) => {
        person.favoriteFoods.meats.forEach((meat) => {
            meat in favFoodObj ? favFoodObj[meat]++ : (favFoodObj[meat] = 1);
        });
        person.favoriteFoods.fish.forEach((fish) => {
            fish in favFoodObj ? favFoodObj[fish]++ : (favFoodObj[fish] = 1);
        });
    });
    return favFoodObj;
};

// console.log(timesOfFoodISPresent(data));
