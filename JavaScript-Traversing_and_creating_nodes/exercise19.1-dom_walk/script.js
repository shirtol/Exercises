//! using travere methods (a way to go over the nodes without using the querySelector):
const myList = document.querySelector("li.start-here"); //because it needs to be li element.
console.dir(myList);

// 19.1.1
// myList.innerHTML = "main title"; //We can insert to the innerHTML anything we want, even tags. We won't use innerHTML due to security issues, it's "open a door" to the whole HTML file.
// myList.innerHTML = "<h1>Hole</h1>";

myList.textContent = "main title"; //We will use textContent when we need to change text.

// 19.1.2
const myListSibling_li = myList.nextElementSibling;
const myListSiblingChild_ul = myListSibling_li.firstElementChild;

const newSubtitle = document.createElement("li");
const textList = document.createTextNode("sub title 4"); //Add text to newSubtitle element. element is type of node. Everything in the dom is a node.
newSubtitle.appendChild(textList); //We insert to the element a child (the child is text).

myListSiblingChild_ul.appendChild(newSubtitle);

// 19.1.3
// const lastLi = myListSibling_li.nextElementSibling;
// // const lastLi = myList.nextElementSibling.nextElementSibling;
// lastLi.remove();

// another way:
const parent = myList.parentElement; //Catch the parent (ul)
parent.lastElementChild.remove();

// 19.1.4
const body = parent.parentElement;
const head = body.previousElementSibling;
const title = head.lastElementChild;
title.textContent = "Master Of The Dom";

// 19.1.5
const firstUl = body.firstElementChild;
const pContainer = firstUl.nextElementSibling;
const par = pContainer.firstElementChild;
par.textContent = "Great Success!";

// ! Using selectors
// const li = document.querySelector(".start-here");
// // console.log(li);

// // 19.1.1
// li.innerText = "main title";

// // 19.1.2
// // const secondLiEl = li.nextElementSibling;
// // console.log(secondLiEl);
// // secondLiEl.append("afterend", newLi);

// const secondUl = document.querySelector("ul li ul");
// console.log(secondUl);
// const newLi = document.createElement("li");
// newLi.textContent = "sub title 4";
// secondUl.appendChild(newLi);

// // 19.1.3
// // const lastLi = secondUl.lastChild;
// console.log(lastLi);
// lastLi.remove();

// // 19.1.4
// // const firstUl = document.querySelector("ul");
// // console.log(firstUl);

// const title = document.querySelector("title");
// title.textContent = "Master Of The Dom";

// // 19.1.5
// const p = document.querySelector("p");
// p.textContent = "lkdsjdcdc,xzlsls;mf;f;mas;lf";
