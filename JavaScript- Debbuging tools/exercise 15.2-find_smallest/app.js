function findSmallest(a, b, c) {
    if (a > b > c) {
        return c;
    } else if (a > c > b) {
        return a;
    } else {
        return b;
    }
}
findSmallest(52, 66, 2);

/*
? 1. Line 10: "ReferenceError: findSmalest is not defined".

? 2. I used the VS code debugger tool.

? 3. I started with running the code without debugger and got the error: "ReferenceError: findSmalest is not defined".
? After that I put a break point in line 10 and an error was thrown. I fixed the bug (changed the typo to the correct
? function name) and start running again, using the debugger, and then the error was fixed.
*/
