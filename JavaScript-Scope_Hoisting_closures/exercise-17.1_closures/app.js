//! block 1:
var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
console.log(result);
// First we invoke the function someFunction, with the value 9 (which doesn't matter, because we never use it).
// This function changes the variable b to 5 (because it can access the global scope), and assign the return value
// from someFunction to the variable firstResult. FirstResult now holds the function otherFunction. Then we invoke
// the first result, hence invoke the function otherFunction, and assign the return value to the variable result.
// If we will try to print out result we will get 5 because this is the value of b when calling the function
// otherFunction.

//! block 2:
var a = 1;
function b2() {
    a = 10;
    return;
    function a() {}
}
b2();
console.log(a);
// In function b2 we are trying to change the variable a (at the global scope) but we have a function declaration, so it
// performs hoisting, and afterward we assign to the variable a at the local scope the number 10. This changes a only in
// the local scope (overrides the function a), so the console.log prints 1 (which is the value of a at the global scope).

//! block 3:
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    };
    setTimeout(log, 100);
}
// Lets say that every iteration takes x(ms). We are going from i = 0 to i = 3 (which stops the loop), and in every
// iteration we create a function called log, that print out i. After that (still inside the loop) we call the
// function setTimeout, which invokes the function log after 100ms. When we pass the time we set in the setTimeout
// function we are printing i, but i is a global variable, which changes in every iteration (from 0, to 1, then 2
// and finally to 3 and then exit the loop), so the final value of i is 3, and this is the value that prints at the end.
