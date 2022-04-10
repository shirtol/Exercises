// 6.5.1
const arr = new Array(100);
const person = {
    firstName: "Shir",
    lastName: "Toledano",
};

arr.fill(person);
console.log(arr);

// 6.5.2
const arr2 = new Array(100);
const newArray = Array.from(arr2, (_, index) => index + 1);
console.log(newArray);

// 6.5.3
const arr3 = Object.values(person);
console.log(arr3);

// 6.5.4
const arrOfObjects = [{ fn: "Daniel" }, { ln: "Toledano" }];

const myObject = Object.assign({}, ...arrOfObjects);

console.log(myObject);

// 6.5.5
const myArray = [1, 2, 3, 4];
console.log(Array.isArray(myArray));

// 6.5.6
// won't effect:
const myArray2 = [1, 2, 3, 4, 5];
const newArray2 = [...myArray2];
newArray2.push(6);
console.log(myArray2);
console.log(newArray2);

// will effect:
const myArray3 = [1, 2, 3, 4, 5];
const newArray3 = myArray3;
newArray3.push(6);
console.log(myArray3);
console.log(newArray3);
