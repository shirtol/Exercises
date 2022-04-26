// Catching HTML elements:
const container = document.querySelector(".container");
const guessText = document.querySelector("#guess");
const starterGuessText = guessText.textContent;
const guessedChars = document.querySelector("#keys");
const starterGuessedChars = guessedChars.textContent;
const input = document.querySelector("input");
let userInput;
let allLettersArr = [];
const allLetters = document.createElement("h5");
allLetters.textContent = "";

// get random char:
const getRandomChar = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const randomIdx = Math.floor(Math.random() * chars.length);
    return chars[randomIdx];
};

let computerChar = getRandomChar();

console.log(computerChar);

const restartGame = (newGameBtn) => {
    guessText.textContent = starterGuessText;
    guessText.style.color = "black";
    guessedChars.textContent = starterGuessedChars;
    newGameBtn.remove();
    input.value = "";
    allLetters.remove();
    allLettersArr = [];
    computerChar = getRandomChar();
    console.log(computerChar);
    input.removeAttribute("readOnly");
};

// User guessed it right:
const rightGuess = () => {
    guessText.textContent = "Right letter!";
    guessText.style.color = "green";
    guessedChars.textContent = "Would you like to play again?";
    const newGameBtn = document.createElement("button");
    newGameBtn.textContent = "Yes";
    container.appendChild(newGameBtn);
    input.readOnly = "readonly";
    newGameBtn.addEventListener("click", () => {
        restartGame(newGameBtn);
    });
};

const letterAlreadyExists = (letter) =>
    allLettersArr.indexOf(letter.toLowerCase()) !== -1;

const displayLetterAlreadyExistsMsg = (letter) => {
    guessText.textContent = `${letter.toLowerCase()} has already been guessed!`;
    guessText.style.color = "red";
};

const isLetter = (letter) => letter.toLowerCase().match(/[a-z]/i);

const displayIsNotLetterMsg = (userGuess) => {
    guessText.textContent = `${userGuess} is not a letter!`;
    guessText.style.color = "blue";
};

const displayWrongGuess = (userGuess) => {
    guessText.textContent = starterGuessText;
    allLettersArr.push(userGuess.toLowerCase());
    allLetters.textContent = allLettersArr.join(",");
    container.appendChild(allLetters);
    guessText.textContent = "Nope, wrong letter";
    guessText.style.color = "red";
};

// Wrong guess:
const wrongGuess = (userGuess) => {
    if (letterAlreadyExists(input.value)) {
        displayLetterAlreadyExistsMsg(userGuess);
        return;
    }
    if (!isLetter(input.value)) {
        displayIsNotLetterMsg(userGuess);
        return;
    }
    displayWrongGuess(userGuess);
};

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value.toLowerCase() === computerChar) {
        rightGuess(input.value, computerChar);
    } else if (
        e.key === "Enter" &&
        input.value.toLowerCase() !== computerChar
    ) {
        wrongGuess(input.value, computerChar);
    }
});
