/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).

// * 3.2.1
function welcome() {
    let welcome = "Welcome to Appleseeds Bootcamp!";

    return welcome;
}

// ! Explicit:
const welcome1 = () => {
    let welcome = "Welcome to Appleseeds Bootcamp!";

    return welcome;
};

// ! Implicit (without the return keyword.):
const welcome2 = () => "Welcome to Appleseeds Bootcamp!";

//  * 3.2.2
function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);

    return result;
}

// ! Explicit:
const power1 = (a) => {
    let result = Math.pow(a, 2);

    return result;
};

// ! Implicit (without the return keyword.):
const power2 = (a) => Math.pow(a, 2);

// From function expressions to IIFE functions.

// * 3.2.3
const squareRoot = (a) => Math.sqrt(a);

((a) => Math.sqrt(a))();

const randomNumbers = (a, b) => Math.random() * (a - b) + b;

((a, b) => Math.random() * (a - b) + b)();
