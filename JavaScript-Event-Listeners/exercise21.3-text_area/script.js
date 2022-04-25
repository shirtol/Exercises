const button = document.querySelector("#btn");
const textArea = document.querySelector("textarea");
const msg = document.createElement("h3");
msg.id = "msg";
msg.style.textAlign = "center";
let userInput;

const giveMsg = (e) => {
    userInput = textArea.value;
    if (document.querySelector("#msg") === null && userInput.length > 0) {
        document.body.appendChild(msg);
    }
    if (userInput.length < 100) {
        const remain = 100 - userInput.length;
        msg.textContent = `You can do better! Just add ${remain} chars and you are done!`;
        msg.style.fontSize = "2rem";
    } else {
        msg.textContent = `Well done!`;
        msg.style.fontSize = "2rem";
    }
};

button.addEventListener("click", giveMsg);
