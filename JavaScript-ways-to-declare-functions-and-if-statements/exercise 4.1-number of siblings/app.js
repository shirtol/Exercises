// const prompt = require("prompt")();

let numSiblings = parseInt(window.prompt("How many siblings do you have?"));
if (numSiblings === 1) {
    console.log(`${numSiblings} sibling!`);
} else if (numSiblings > 1) {
    console.log(`More than 1 sibling!`);
} else {
    console.log("No siblings!");
}

/* 6 + 7 + 8. 
When we make a comparison with == we compare only values, without comparing types and because numSiblings is a string 
(before we used parseInt), not a number, the type of 1 and '1' is different, hence the if statement is false, 
and we get an incorrect answer. We should use the === operator because it is important to compare the type in this situation and alert 
incorret input. */
