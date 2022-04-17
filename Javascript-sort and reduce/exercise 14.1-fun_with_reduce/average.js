const myAvg = (arr) => {
    if (Array.isArray(arr) && arr.every((el) => typeof el === "number")) {
        return arr.reduce((accum, currVal) => {
            return accum + currVal / arr.length;
        }, 0);
    }
    return "invalid input";
};

console.log(myAvg([1, 2, 3, 4])); //2.5
console.log(myAvg([1])); //1
console.log(myAvg([1, 2])); // 1.5
console.log(myAvg([1, 2, -2, -1])); //0
console.log(myAvg([1, "2", -2, -1])); //invalid input
console.log(myAvg({ name: "shir" })); //invalid input
