const myMax = (arr) => {
    if (Array.isArray(arr) && arr.every((el) => typeof el === "number")) {
        const max = arr.reduce((max, currVal) => {
            if (currVal > max) {
                return currVal;
            }
            return max;
        });
        return max;
    }
    return "invalid input";
};
const myMax2 = (arr) => {
    if (Array.isArray(arr) && arr.every((el) => typeof el === "number")) {
        const max = arr.reduce((max, currVal) => {
            return Math.max(max, currVal);
        });
        return max;
    }
    return "invalid input";
};

console.log(myMax([1, 2, 3, 6, 10])); //10
console.log(myMax([1, 2, 3, 6, -5])); //6
console.log(myMax([1])); //1
console.log(myMax([-2, -5, -20, -10])); //-2
console.log(myMax([1, 2, 3])); //3
console.log(myMax([1, 2, "3"])); //"invalid input"
console.log(myMax("3")); //"invalid input"

console.log(myMax2([1, 2, 3, 6, 10])); //10
console.log(myMax2([1, 2, 3, 6, -5])); //6
console.log(myMax2([1])); //1
console.log(myMax2([-2, -5, -20, -10])); //-2
console.log(myMax2([1, 2, 3])); //3
console.log(myMax2([1, 2, "3"])); //"invalid input"
console.log(myMax2("3")); //"invalid input"
