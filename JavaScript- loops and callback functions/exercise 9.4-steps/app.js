// Using repeat method:
const steps = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(`${"#".repeat(i) + " ".repeat(n - i)}`);
    }
};

steps(3);

//! NINJA
const steps1 = (n) => {
    for (let i = 1; i <= n; i++) {
        let myString = "";
        for (let j = 1; j <= i; j++) {
            myString += "#";
        }
        for (let k = 1; k <= n - i; k++) {
            myString += " ";
        }
        console.log(myString);
    }
};
steps1(3);

//! Mordi way

const steps2 = (n) => {
    for (let i = 0; i < n; i++) {
        let stringToPrint = "";
        for (let j = 0; j < n; j++) {
            if (i >= j) {
                stringToPrint += "#";
            } else {
                stringToPrint += " ";
            }
        }

        console.log(stringToPrint);
    }
};

steps2(3);
