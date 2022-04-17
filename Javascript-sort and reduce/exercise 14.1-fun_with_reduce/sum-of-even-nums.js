const sumOfEven = (arr) => {
    if (Array.isArray(arr) && arr.every((el) => typeof el === "number")) {
        const res = arr.reduce((accum, currVal) => {
            if (currVal % 2 === 0) {
                return accum + currVal;
            } else {
                return accum;
            }
        }, 0);
        return res;
    }
    return "invalid input";
};

console.log(sumOfEven([2, 3, 4, 1, 6])); //12
console.log(sumOfEven([1, 3, 4, 1, 6])); //10
console.log(sumOfEven([2])); //2
console.log(sumOfEven([1])); //0
console.log(sumOfEven([2, 3, -4])); //-2
console.log(sumOfEven([2, "3", -4])); //"invalid input";
console.log(sumOfEven(2)); //"invalid input";
