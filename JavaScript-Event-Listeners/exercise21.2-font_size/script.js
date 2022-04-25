const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const text = document.querySelector("#text");
const computedStyle = getComputedStyle(text);
let fontSize;

const increaseFontSize = (e) => {
    fontSize = parseFloat(computedStyle.fontSize);
    console.log(fontSize);
    if (fontSize < 100) {
        fontSize += 2;
    }
    text.style.fontSize = fontSize + "px";
};

const decreaseFontSize = (e) => {
    fontSize = parseFloat(computedStyle.fontSize);
    console.log(fontSize);
    if (fontSize > 6) {
        fontSize -= 2;
    }
    text.style.fontSize = fontSize + "px";
};

plusBtn.addEventListener("click", increaseFontSize);
minusBtn.addEventListener("click", decreaseFontSize);
