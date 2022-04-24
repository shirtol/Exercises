// Navbar

const nav = document.createElement("nav");
document.body.appendChild(nav);
const ul = document.createElement("ul");
nav.appendChild(ul);
const body = document.querySelector("body");
body.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";

document.body.style.margin = 0;
document.body.style.color = "#444";

for (let i = 0; i < 3; i++) {
    ul.appendChild(document.createElement("a"));
}

const contentOfNavbar = ["home", "about", "connect"];

const allATags = document.querySelectorAll("a");
console.log(allATags);

for (let i = 0; i < contentOfNavbar.length; i++) {
    allATags[i].textContent = contentOfNavbar[i];
    allATags[i].setAttribute(
        "style",
        "list-style-type: none; margin: 10px 50px; font-size: 20px; color: #fff; text-decoration: none"
    );
    allATags[i].href = "#";
}

ul.setAttribute("style", "display: flex;");
ul.style.margin = "0";
nav.style.background = "#333";

// add header
const header = document.createElement("h1");
document.body.appendChild(header);
header.textContent = "😎 This web page was created in pure JavaScript! 😎";
header.style.textAlign = "center";
header.style.margin = "80px 0";

// add image
const imgContainer = document.createElement("div");
document.body.appendChild(imgContainer);
const image = document.createElement("img");
image.src = "./XSdtyyG.png";
imgContainer.appendChild(image);

image.style.width = "600px";
imgContainer.style.display = "flex";
imgContainer.style.justifyContent = "center";

// Read more:
const subHeader = document.createElement("h2");
document.body.appendChild(subHeader);
subHeader.textContent =
    "Wants to know more about JavaScript and DOM? Click on the links down below!";
subHeader.style.fontSize = "20px";
subHeader.style.margin = "50px 40px";
subHeader.style.textDecoration = "underline";

// links for ReadMore:
const linksContainer = document.createElement("div");
document.body.appendChild(linksContainer);
linksContainer.style.display = "flex";

// Could use an array of objects, instead of two arrays.
const linksNamesArr = [
    "Traversing the DOM",
    "Creating HTML DOM elements using JavaScript",
    "108 Common DOM Tasks in Vanilla JS",
];
const linksArr = [
    "https://zellwk.com/blog/dom-traversals/",
    "https://itnext.io/creating-html-dom-elements-using-javascript-vanilla-js-and-jquery-examples-d7f3c051b55e",
    "https://www.infoq.com/news/2020/04/howto-html-dom-vanilla-js/",
];

for (let i = 0; i < linksNamesArr.length; i++) {
    linksContainer.appendChild(document.createElement("a"));
}

const allReadMoreLinks = linksContainer.querySelectorAll("a");

for (let i = 0; i < linksNamesArr.length; i++) {
    allReadMoreLinks[i].textContent = linksNamesArr[i];
    allReadMoreLinks[i].href = linksArr[i];

    allReadMoreLinks[i].setAttribute(
        "style",
        "list-style-type: none; margin: 10px 50px; font-size: 15px; color: #333; text-decoration: none; font-weight: 500"
    );
    allATags[i].href = "#";
}
