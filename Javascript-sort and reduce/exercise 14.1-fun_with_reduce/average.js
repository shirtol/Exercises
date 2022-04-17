const myAvg = (arr) => {
    if (Array.isArray(arr) && arr.every((el) => typeof el === "number")) {
        const sum = arr.reduce((accum, currVal) => accum + currVal);
        return sum / arr.length;
    }
    return "invalid input";
};

console.log(myAvg([1, 2, 3, 4])); //2.5
console.log(myAvg([1])); //1
console.log(myAvg([1, 2])); // 1.5
console.log(myAvg([1, 2, -2, -1])); //0
console.log(myAvg([1, "2", -2, -1])); //invalid input
console.log(myAvg({ name: "shir" })); //invalid input
