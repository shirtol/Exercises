const checkbox = document.querySelector("#show-photo");

let isChecked = checkbox.checked;
const img = document.createElement("img");
document.body.appendChild(img);
img.style.width = "300px";

checkbox.addEventListener("change", (e) => {
    isChecked = !isChecked;
    if (isChecked) {
        img.src = "./meme.png";
    } else {
        img.src = "";
    }
});
