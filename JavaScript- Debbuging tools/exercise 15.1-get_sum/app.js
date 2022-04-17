function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
}
getSum([1, 2, 3], [5, 66, 23]);

/*

? 1. There are number of lines that contains errors:
?    - line 3: "Cannot read properties of undefined (reading 'length')".
?    - line 2: "Assignment to constant variable."
?    - line 10: "A comma was missing and the second argument had a redundant parenthesis."
?

? 2. I used the VS code debugger tool.

? 3. After running the code at the first time I got this error: "Cannot read properties of undefined (reading 
? 'length')". The error accure in line 3. Using the VS code debugger, I find out that the problem was in arr1.
? I fixed it by adding a comma between the arguments in the function call. Then run it with debugger again and
? got the error: "Assignment to constant variable.", so I changed the const to let in line 2. After
? that I follow the function flow and none of the lines threw an error but I saw (while running with the
? debugger tool) that the result isn't like it should be, and I saw that the second loop was running only
? once. I used the watch variable and wrote the boolean expression arr2.length === 1 in order to check what's the length
? of the second array and it return true. I fixed it by removing the parenthesis () in the function call, inside
? the second argument.

*/
