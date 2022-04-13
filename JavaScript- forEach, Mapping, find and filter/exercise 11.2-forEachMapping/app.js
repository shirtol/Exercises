// 11.2.1
const myArr = [1, 2, 3, 4, 5, 6];

const doubleValues = (arr) => {
    const doubleArr = [];
    arr.forEach((num) => {
        doubleArr.push(num * 2);
    });
    return doubleArr;
};

// console.log(doubleValues(myArr));

// 11.2.2
const onlyEvenValues = (arr) => {
    const evenArr = [];
    arr.forEach((num) => {
        if (num % 2 === 0) {
            evenArr.push(num);
        }
    });
    return evenArr;
};

// console.log(onlyEvenValues(myArr));

// 11.2.3
const showFirstAndLast = (arr) => {
    const firstAndLastArr = [];
    const len = arr.length;
    arr.forEach((element, index) => {
        if (typeof element === "string" && (index === 0 || index === len - 1)) {
            firstAndLastArr.push(element);
        }
    });
    return firstAndLastArr;
};

const myArr2 = ["hi", 1, 2, "sh", 1];
const myArr3 = [1, 1, 2, "sh", 1];
const myArr4 = ["hi", 1, 2, "sh", "bye"];

// console.log(showFirstAndLast(myArr2));
// console.log(showFirstAndLast(myArr3));
// console.log(showFirstAndLast(myArr4));

// 11.2.4
const vowelCount = (string) => {
    const loweCaseArr = string.toLowerCase().split("");
    const countsObj = {};
    loweCaseArr.map((char) =>
        char in countsObj ? countsObj[char]++ : (countsObj[char] = 1)
    );
    return countsObj;
};

// console.log(vowelCount("shirZahAvI"));

// 11.2.5
const capitalize = (string) => {
    const lettersArr = string.split("");
    const capitalizeArr = [];
    lettersArr.forEach((char) => {
        capitalizeArr.push(char.toUpperCase());
    });
    return capitalizeArr.join("");
};

console.log(capitalize("hi my name is shir zahavi"));

// !TODO: another approach

// 11.2.6
const shiftLetters = (string) => {
    const lettersArr = string.split("");
    return lettersArr.map(shiftDownByOne).join("");
};

const shiftDownByOne = (letter) => {
    if (letter === "a") {
        return "z";
    }
    const ascciVal = letter.charCodeAt(0);
    const codedLetter = ascciVal - 1;
    return String.fromCharCode(codedLetter);
};

// console.log(shiftDownByOne("a"));
// console.log(shiftDownByOne("b"));
// console.log(shiftDownByOne("c"));
// console.log(shiftDownByOne("d"));

// console.log(shiftLetters("abcd"));

// 11.2.7
const swapCase = (string) => {
    const lettersArr = string.split("");
    const capitalizeArr = [];
    lettersArr.forEach((char, index) => {
        if (
            lettersArr[index - 1] === undefined ||
            lettersArr[index - 1] === " "
        ) {
            capitalizeArr.push(char.toUpperCase());
        } else {
            capitalizeArr.push(char);
        }
    });
    return capitalizeArr.join("");
};

console.log(swapCase("hi my name is shir zahavi"));
