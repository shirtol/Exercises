const img = document.querySelector("img");
let isOff = true;

const changeImg = (e) => {
    if (isOff) {
        img.src = "./ONbulb.png";
    } else {
        img.src = "./OFFbulb.png";
    }
    isOff = !isOff;
};

img.addEventListener("click", changeImg);
