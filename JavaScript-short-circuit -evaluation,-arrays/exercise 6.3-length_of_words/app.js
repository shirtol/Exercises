const exampleArr = ["boo", "doooo", "hoo", "ro"];

const getArrOfLengths = (arrOfStrings) => {
    const arrOfLengths = [];
    for (let i = 0; i < arrOfStrings.length; i++) {
        arrOfLengths[i] = arrOfStrings[i].length;
    }
    return arrOfLengths;
};

console.log(getArrOfLengths(exampleArr));
