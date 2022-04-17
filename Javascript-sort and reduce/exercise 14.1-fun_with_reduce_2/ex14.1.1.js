const extractOnlyValue = (arr, key) => {
    const resArr = arr.reduce((valuesArr, obj) => {
        valuesArr.push(obj[key]);
        return valuesArr;
    }, []);
    return resArr;
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
