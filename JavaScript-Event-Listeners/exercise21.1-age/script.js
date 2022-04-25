const input = document.querySelector("input");
const container = document.querySelector(".container");
const button = document.querySelector("button");
const error = document.createElement("h3");

let userInput;
const text = document.createElement("h1");
text.id = "msg";
text.style.textAlign = "center";

const isAllowToDrink = (e) => {
    userInput = input.value;
    if (/^[0-9]+\.?[0-9]{0,}$/.test(userInput)) {
        /*
        ^: Start the string with the following elements. 
        $: End the string with the previous element.
        [0-9]: Match only digits (at the start of the string, because of the caret).
        +: Match one or more of the previous element.
        \.?: Match a decimal point (optional because of the ?).
        {0,}: 0 or more digits, after the decimal point. 
        */
        error.remove();
        if (document.querySelector("#msg") === null && userInput.length > 0) {
            document.body.appendChild(text);
        }
        if (parseInt(userInput) >= 18) {
            text.textContent = "You can drink!";
        } else {
            text.textContent = "You're too young";
        }
    } else {
        text.remove();
        container.appendChild(error);
        error.textContent = "Please enter your age!";
        error.style.textAlign = "center";
        error.style.fontSize = "2rem";
        error.style.marginTop = "2rem";
        error.style.color = "red";
    }
};

button.addEventListener("click", isAllowToDrink);
