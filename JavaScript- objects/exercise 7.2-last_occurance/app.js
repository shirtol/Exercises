const string = `The more you know, the more you know that you don't know`;
console.log(string.lastIndexOf("you"));

const reverseString = (string) => {
    const letterArr = string.split("");
    const reverseArr = letterArr.reverse();
    let reverseString = reverseArr.join("");
    return reverseString;
};

const lastOccurrIdx = (string, word) => {
    let reversedString = reverseString(string);
    let reversedWord = reverseString(word);
    return string.length - reversedString.indexOf(reversedWord) - word.length;
};

console.log(lastOccurrIdx(string, "you"));
