const swapPropAndVal = (oldObj) => {
    const newObj = {};
    for (let [key, val] of Object.entries(oldObj)) {
        newObj[val] = key;
    }
    return newObj;
};

const object1 = {
    a: "hi-bye",
    b: 42,
};

console.log(swapPropAndVal(object1));
