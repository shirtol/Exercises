const isValidPasswordIfElse = (password) => {
    if (password.length > 7) {
        return "Strong";
    } else {
        return "Weak";
    }
};

const isValidPasswordTernary = (password) =>
    password.length > 7 ? "Strong" : "Weak";

console.log(isValidPasswordIfElse("111111111"));
console.log(isValidPasswordIfElse("1111"));
console.log(isValidPasswordTernary("11111111111"));
console.log(isValidPasswordTernary("1111"));

const isValidPasswordAndAnd = (password) => {
    return (password.length > 7 && "Strong") || "Weak";
};

console.log(isValidPasswordAndAnd("11111111111"));
console.log(isValidPasswordAndAnd("1111"));

//First option:
const hasCapital = (string) => {
    const capitalLettersArr = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];
    for (let char of capitalLettersArr) {
        if (string.includes(char)) {
            return true;
        }
    }
    return false;
};

// second Option:
const hasCapital2 = (string) => {
    let newString = string.toLowerCase();
    return newString !== string;
};

// First Option
const advancedPasswordValidation = (password) =>
    password.length > 7
        ? hasCapital(password)
            ? "Very Strong"
            : "strong"
        : "Weak";

// Second Option
const advancedPasswordValidation2 = (password) =>
    password.length > 7
        ? hasCapital2(password)
            ? "Very Strong"
            : "strong"
        : "Weak";

// Tests
console.log(advancedPasswordValidation("Abshskrt"));
console.log(advancedPasswordValidation("Ab"));
console.log(advancedPasswordValidation("ajajajajaj"));
console.log(advancedPasswordValidation("aj"));
console.log(advancedPasswordValidation("AHAHAHAHAHAHA"));
console.log(advancedPasswordValidation2("Abshskrt"));
console.log(advancedPasswordValidation2("Ab"));
console.log(advancedPasswordValidation2("ajajajajaj"));
console.log(advancedPasswordValidation2("aj"));
console.log(advancedPasswordValidation2("AHAHAHAHAHAHA"));
