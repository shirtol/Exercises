const arr = [1, 7, 3, 0, -5, 7, 3, 9];

// 5.6.1
for (let num of arr) {
    console.log(num);
}

console.log("\n");

// 5.6.2
const arrayLength = (array) => {
    let count = 0;

    for (let item of array) {
        count++;
    }

    return count;
};

console.log(arrayLength(arr));

console.log("\n");

// 5.6.3
const arraySum = (array) => {
    let sum = 0;

    for (let item of array) {
        sum += item;
    }

    return sum;
};

console.log(arraySum(arr));

console.log("\n");

// 5.6.4
const arrayMulti = (array) => {
    let multi = 1;
    for (let item of array) {
        multi *= item;
    }
    return multi;
};

console.log(arrayMulti(arr));

console.log("\n");
