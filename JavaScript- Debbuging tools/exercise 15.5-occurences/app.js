function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter++;
        }
    }
    return counter;
}
countOccurrences("ini mini miny moe", "n");

/*
? 1. Line 5: The variable counter isn't updated when it needed to be.

? 2. I used the VS code debbuger tool.

? 3. At the beginning I ran the code without debugger and I didn't get any error. I tried to put a break point in line 3 
? and tracked the proccess of the for loop. I saw that every time we got into the if (the if statement was true),
? we didn't update the counter variable, and after the loop ends the return value (the value of counter) was 0
? (as it was at the beginning). So instead of writing counter + 1 we need to write counter++ or counter += 1.
? I changed it to counter++ and tracked the counter value in the watch window. The counter increases every time the
? if statement return true and the return value was 3, as expected.
*/
