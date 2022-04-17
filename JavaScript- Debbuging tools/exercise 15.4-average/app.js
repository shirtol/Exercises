function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
calcAverage([85, 90, 92]);

/*
? 1. Line 2: The variable sum wasn't initialized.

? 2. I used the VS code debugger tool.

? 3. At the beginning I ran the code without debugger and I didn't get any error. I tried to put a break point in line 2 
? and tracked the sum value. I saw that in every iteration the value of sum is NaN. I saw that we are trying to add
? numbers to the sum variable but we didn't initialize it. To fix the problem I initialized the sum variable to zero.
*/
