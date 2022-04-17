const extractOnlyValue = (arr, key) => {
    return arr.reduce((valuesArr, obj) => {
        valuesArr.push(obj[key]);
        return valuesArr;
    }, []);
};

console.log(
    extractOnlyValue(
        [
            { name: "Daniel" },
            { name: "Shir" },
            { name: "Sharon" },
            { name: "Shlomo" },
        ],
        "name"
    )
);
