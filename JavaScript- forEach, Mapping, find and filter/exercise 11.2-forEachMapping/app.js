// 11.2.1
const myArr = [1, 2, 3, 4, 5, 6];
// forEach
const doubleValues = (arr) => {
    const doubleArr = [];
    arr.forEach((num) => {
        doubleArr.push(num * 2);
    });
    return doubleArr;
};
// map
const doubleValues2 = (arr) => arr.map((item) => item * 2);

// console.log(doubleValues2(myArr));

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
    loweCaseArr.forEach((char) => {
        switch (char) {
            case "a":
            case "o":
            case "u":
            case "i":
            case "e":
                char in countsObj ? countsObj[char]++ : (countsObj[char] = 1);
                break;
            default:
                break;
        }
    });
    return countsObj;
};

// console.log(vowelCount("shirZahAvI"));

// 11.2.5
const capitalize = (string) => {
    const lettersArr = string.split("");
    return lettersArr.map((char) => char.toUpperCase()).join("");
};

// console.log(capitalize("hi my name is shir zahavi"));

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
    const wordsArr = string.split(" ");
    const capitalizeArr = wordsArr.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    });
    return capitalizeArr.join(" ");
};

// console.log(swapCase("hi my name is shir zahavi"));
