const removeDuplicates = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

const myArr = [3, 4, 4, 3, 6, 3];
console.log(removeDuplicates(myArr));
