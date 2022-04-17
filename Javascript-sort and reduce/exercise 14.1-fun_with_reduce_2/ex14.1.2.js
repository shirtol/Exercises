const countOnlyVowels = (str) => {
    const vowels = "aeoui";
    return str
        .toLowerCase()
        .split("")
        .reduce((vowelsObj, letter) => {
            if (vowels.includes(letter)) {
                vowelsObj[letter]
                    ? vowelsObj[letter]++
                    : (vowelsObj[letter] = 1);
            }
            return vowelsObj;
        }, {});
};

console.log(countOnlyVowels("Hi My name is Shir"));
console.log(countOnlyVowels("Hi My name is Shirii"));
console.log(countOnlyVowels("shshshs"));
console.log(countOnlyVowels(""));
