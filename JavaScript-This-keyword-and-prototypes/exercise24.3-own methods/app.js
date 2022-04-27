// filter:
Array.prototype.myFilter = function (callback) {
    const filteredArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArr.push(this[i]);
        }
    }
    return filteredArr;
};

const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(myArr.myFilter((el) => el > 5));

// find
Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
};

const myArr2 = [5, 12, 8, 130, 44];
const found = myArr2.myFind((el) => el > 10);
console.log(found);
const found2 = myArr2.myFind((el) => el < 5);
console.log(found2);

// reduce
Array.prototype.myReduce = function (callback, initialVal = this[0]) {
    let acc = initialVal === this[0] ? this[0] : initialVal;
    for (let i = initialVal === this[0] ? 1 : 0; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }
    return acc;
};

const myArr3 = [1, 2, 3, 4];
const initialValue = 0;

const sum = myArr3.myReduce((prevVal, currVal) => {
    return prevVal + currVal;
}, initialValue);

console.log(sum);

console.log([1, 100].myReduce((a, b) => Math.max(a, b), 50));
console.log([50].myReduce((a, b) => Math.max(a, b), 10));
