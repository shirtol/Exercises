function getSumOfEven(arr) {
    return arr[0] + arr[2] + arr[4] + arr[6] + arr[8];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*
? 1. Line 2: We are trying to reach an index which is outside the limits of the array (we have an exception).

? 2. I used the VS code debugger tool.

? 3. At the beginning I ran the code without debugger and I didn't get any error. I tried to put a break point in line 2 (
? where we return the value). I saw that the return value is NaN. Then I tried to understand which number caused the problem.
? In order to do so I used the watch window, and checked every element and found that arr[10] equals to undefined. 
? When we are trying to add undefined to a number we get NaN. I changed the numbers in the square brackets to 
? 0, 2, 4, 6, 8 istead of 2, 4, 6, 8, 10 respectively (because arr[10] exceeds from the array length limit).
*/
