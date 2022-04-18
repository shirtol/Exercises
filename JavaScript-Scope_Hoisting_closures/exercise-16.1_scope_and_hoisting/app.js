//! Block 1:
function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();

/*
- console.log(a); will print undefined because a is hoisting to the start, but without the assignment (it will show as 
var a;). 
- console.log(foo()); will print 2 because it is a function declaration and function declaration is hoisted to the top, so 
we can call the function before we write it prototype.   
*/

//! Block 2:
var fullName = "John Doe";
var obj = {
    fullName: "Colin Ihrig",
    prop: {
        fullName: "Aurelio De Rosa",
        getFullName: function () {
            return this.fullName;
        },
    },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

/*
- console.log(obj.prop.getFullName()); will print out 'Aurelio De Rosa' because getFullName is a function that return
this.fullName and this is related to the scope of the object in the prop key. 
- var test = obj.prop.getFullName; will print out 'John Doe'; because we assign to the var test the function 
getFullName and after that we activate the function, so this refer to the outer scope- the global scope
(the window) because the obj is in the global scope.    
*/

//! Block 3:
function funcB() {
    let a = (b = 0);
    a++;
    return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

// We assign 0 to b which is a global variable because it is like a var that declares in
// the global scope, hence the typeof b returns number.
// a is undefined because it is a local variable and belongs to the function scope (it is equal to 1
//but only in the local scope)

//! Block 4:
function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();
// print 2 twice, the second function override the first function because of hoisting, and then we invoke the function
// funcC twice.

//! Block 5:
function funcD1() {
    d = 1;
}
funcD1();
console.log(d);
function funcD2() {
    var e = 1;
}
funcD2();
console.log(e);

// d is a global variable as it has no declaration (no var, let or const), and when we are trying to print it we get 1 in
// the console.
// var e is inside the function scope, hence it's in the local scope. We got
// an error because e is not available outside the function scope.

//! Block 6:
function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

// The second console.log: " console.log("Value of f in local scope: ", f);" print out 1 because the function runs
// after the var assignment. The first console.log: console.log("Value of f in global scope: ", f); print out undefined
// because it runs before we assign a value to f.
