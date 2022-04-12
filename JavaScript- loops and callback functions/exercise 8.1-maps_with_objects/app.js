const object1 = {
    name: "Daniel",
};

const object2 = {
    name: "Shir",
};

const object3 = {
    name: "Sharon",
};

const map = new Map([
    [object1, "123"],
    [object2, "456"],
    [object3, "789"],
]);

for (const [key, value] of map) {
    console.log(key.name, value);
}
