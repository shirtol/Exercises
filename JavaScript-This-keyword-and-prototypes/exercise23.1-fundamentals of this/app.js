//! Q1:
/*"this" will point to the window because it is in the global scope.*/

//! Q2
/*
 *a. "this" will point to the window because the method is an arrow function.
 *b.We can fix it by using function declaration:
 */

const myObj = {
    name: "Timmy",

    greet() {
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();

// !Q3
/*
It is a function in the global scope, hence "this" will refer to the window object 
*/

// !Q4
/*
It is an arrow function so "this" will refer to the window object.
*/

// !Q5
/*
 *a. "this" will refer to the window because of the arrow function. (It throws an error in the browser because we
 *didn't pass the event to addEventListener function)
 *b. We can fix it by adding the event and using function declaration (and then "this" will point to the element.).
 */

//  Points to the window
// document.querySelector(".element").addEventListener("click", () => {
//     console.log(this);
// });

// Points to the element.
document.querySelector(".element").addEventListener("click", function () {
    console.log(this);
});
