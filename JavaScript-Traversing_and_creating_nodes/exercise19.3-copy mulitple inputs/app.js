const boxContainer = document.querySelector(".input-boxes-container");

const allInputTags = document.querySelectorAll("input");

const logSubmit = (e) => {
    // Add setTimeout because alert freezes the UI update, so we delay it by 1ms, to let the UI finish updating.
    setTimeout(() => alert("Text submitted!"), 1);
};

document.getElementById("first").focus();
for (const input of allInputTags) {
    if (input.nextElementSibling !== null) {
        input.addEventListener("input", (e) => {
            input.nextElementSibling.nextElementSibling.focus();
        });
    } else {
        //When we get to the last input tag an alert will show up.
        input.addEventListener("input", logSubmit);
    }
}

const send = document.querySelector("[type='submit']");
send.addEventListener("click", logSubmit);

const doPaste = (e) => {
    let data = e.clipboardData.getData("text/plain");
    for (let i = 0; i < data.length; i++) {
        allInputTags[i].value = data[i];
    }
    e.preventDefault();
    logSubmit();
};

for (const input of allInputTags) {
    input.addEventListener("paste", doPaste);
}
