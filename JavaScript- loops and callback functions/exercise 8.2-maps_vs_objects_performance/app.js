// 8.2.1
const myObject = {};

const maxCount = 1000000;
console.time("My operation");

for (let i = 0; i < maxCount; i++) {
    myObject[i] = i;
}

console.timeEnd("My operation");

const map = new Map();
const maxCount2 = 1000000;
console.time("My operation");

for (let i = 0; i < maxCount2; i++) {
    map.set(i, i);
}

console.timeEnd("My operation");

// 8.2.2
console.time("My operation");

if (935674 in myObject) {
    console.log("Yes");
}

console.timeEnd("My operation");

console.time("My operation");

if (map.has(935674)) {
    console.log("Yes");
}

console.timeEnd("My operation");

// 8.2.3 - After running 4 times: map is significantly faster.
console.time("My operation");

myObject[10000000] = 10000000;

console.timeEnd("My operation");

console.time("My operation");

map.set(10000000, 10000000);

console.timeEnd("My operation");

// 8.2.4 - After running 4 times: object is slightly faster.
console.time("My operation");

delete myObject[1000000];

console.timeEnd("My operation");

console.time("My operation");

map.delete(1000000);

console.timeEnd("My operation");
