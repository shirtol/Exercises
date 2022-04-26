const form = document.querySelector("#signup-form");
const nameEntered = document.querySelector("#name");
const age = document.querySelector("#age");
const email = document.querySelector("#email");

const infoArr = [nameEntered, age, email];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const confirm = document.querySelector("#confirm");
    console.log(confirm);
    if (confirm !== null) {
        confirm.remove();
    }

    const confirmInput = document.createElement("button");
    confirmInput.style.textAlign = "center";
    confirmInput.textContent = "submit";
    confirmInput.style.padding = "1.5rem";
    confirmInput.style.margin = "1.5rem";
    const textWindow = document.createElement("div");
    textWindow.id = "text-window";
    textWindow.style.textAlign = "center";
    textWindow.style.fontSize = "2rem";
    textWindow.style.lineHeight = "4rem";

    if (document.querySelector("#text-window") !== null) {
        textWindow.remove();
    }

    textWindow.textContent =
        "Please take a second look and confirm your information";

    for (let i = 0; i < infoArr.length; i++) {
        const info = document.createElement("h3");
        textWindow.appendChild(info);
        info.textContent = `${infoArr[i].id}: ${infoArr[i].value}`;
    }
    document.body.appendChild(textWindow);

    textWindow.appendChild(confirmInput);
    const change = document.createElement("button");
    textWindow.appendChild(change);
    change.textContent = "change";
    change.style.padding = "1.5rem";
    change.style.margin = "1.5rem";

    const confirmTxt = document.createElement("h2");
    confirmTxt.style.textAlign = "center";
    confirmInput.addEventListener("click", function (e) {
        confirmTxt.id = "confirm";
        const prevConfirm = document.querySelector("#confirm");
        if (prevConfirm !== null) {
            prevConfirm.remove();
        }

        textWindow.remove();
        confirmTxt.textContent =
            "Congratulation! You successfully sent this form";
        document.body.appendChild(confirmTxt);
        form.reset();
    });

    change.addEventListener("click", (e) => {
        textWindow.remove();
        const prevConfirm = document.querySelector("#confirm");
        if (prevConfirm !== null) {
            prevConfirm.remove();
        }
    });
});
