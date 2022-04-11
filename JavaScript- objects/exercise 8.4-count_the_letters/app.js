const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const letterCounts = (array) => {
    const letterCounts = {};
    let maxCounts = 0;
    let mostOccurretter;
    for (let word of array) {
        const lettersArr = word
            .toLowerCase()
            .split("")
            .filter((a) => a !== " ");
        for (let char of lettersArr) {
            if (char in letterCounts) {
                letterCounts[char]++;
            } else {
                letterCounts[char] = 1;
            }
            if (letterCounts[char] > maxCounts) {
                maxCounts = letterCounts[char];
                mostOccurretter = char;
            }
        }
    }
    return [letterCounts, mostOccurretter];
};

console.log(letterCounts(array));
