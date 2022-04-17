const addKeyAndValue = (arr, key, val) => {
    return arr.reduce((newArr, obj) => {
        obj[key] = val;
        newArr.push(obj);
        return newArr;
    }, []);
};

console.log(
    addKeyAndValue(
        [{ name: "Daniel" }, { name: "Shir" }],
        "lastName",
        "Toledano"
    )
);
