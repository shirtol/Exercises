const input = document.querySelector("input");
const btn = document.querySelector("button");
const container = document.querySelector(".container");
const smileyContainer = document.createElement("div");
const error = document.createElement("h3");
let userInput;

const addSmiley = (e) => {
    smileyContainer.remove();
    error.remove();
    while (smileyContainer.firstChild) {
        smileyContainer.removeChild(smileyContainer.firstChild);
    }
    userInput = input.value;
    if (/^[0-9]+$/.test(userInput)) {
        userInput = parseInt(input.value);
        for (let i = 0; i < userInput; i++) {
            const smiley = document.createElement("img");
            smiley.id = "smiley";
            smiley.src = "./smiley.png";
            smiley.style.width = "100px";
            smileyContainer.appendChild(smiley);
        }
        container.appendChild(smileyContainer);
    } else {
        container.appendChild(error);
        error.textContent = "Please enter an integer";
        error.style.textAlign = "center";
        error.style.fontSize = "2rem";
        error.style.marginTop = "2rem";
        error.style.color = "red";
    }
};

btn.addEventListener("click", addSmiley);
