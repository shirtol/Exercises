// 10.1.1
const isString = (myString, callback) => {
    if (typeof myString === "string") {
        callback(myString);
    }
};

const logStr = (string) => {
    console.log(string);
};

isString("hi", logStr);
isString(1, logStr);
isString(true, logStr);

// 10.1.2
const firstWordUpperCase = (myString, callback) => {
    let capitalizeString = myString[0].toUpperCase() + myString.slice(1);
    return callback(capitalizeString);
};

const dashedString = (string) => {
    return string.replace(/ /g, "-");
};

console.log(firstWordUpperCase("hi my name is Shir", dashedString));

// 10.1.3

const happyFaceString = (string) => {
    console.log(string.replace(/ /g, ":)"));
};

firstWordUpperCase("hi my name is Shir", happyFaceString);

// 10.1.4

const getAge = (yearOfBirth, callback) => {
    let date = new Date();
    let currYear = date.getFullYear();
    return callback(yearOfBirth, currYear);
};

const absSubtract = (x, y) => {
    return Math.abs(x - y);
};

console.log(getAge(1995, absSubtract));
