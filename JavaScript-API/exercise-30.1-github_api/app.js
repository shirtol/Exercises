class UserInfo {
    constructor(json) {
        this.url = json.avatar_url;
        this.name = json.name;
        this.repos = json.public_repos;
        this.username = json.login;
    }
}

const getUserInfo = async () => {
    const input = document.querySelector("#userInput").value;
    let userInfo;
    try {
        userInfo = await fetch(`https://api.github.com/users/${input}`);
        if (userInfo.status === 404) {
            alert(`this name is not found, ERROR ${userInfo.status}`);
            return null;
        } else if (document.querySelector(`[data-user=${input}]`) !== null) {
            alert(`this user already exists!`);
            return null;
        }

        return new UserInfo(await userInfo.json());
    } catch (err) {
        console.log(err);
    }
};

const createUserImage = (userInfo) => {
    const userImg = document.createElement("img");
    userImg.classList.add("user-image");
    userImg.src = userInfo.url;
    return userImg;
};

const createUsernameHeader = (userInfo) => {
    const userName = document.createElement("h3");
    userName.textContent = userInfo.name;
    return userName;
};

const createNumOfRepos = (userInfo) => {
    const numOfRepos = document.createElement("h4");
    numOfRepos.textContent = userInfo.repos;
    return numOfRepos;
};

const appendChildren = (container, ...children) => {
    for (const child of children) {
        container.appendChild(child);
    }
};

const createUserInfoContainer = (userInfo) => {
    const userInfoContainer = document.createElement("div");

    appendChildren(
        userInfoContainer,
        createUserImage(userInfo),
        createUsernameHeader(userInfo),
        createNumOfRepos(userInfo)
    );
    userInfoContainer.classList.add("user-info-container");

    return userInfoContainer;
};

const createUserLinkTag = (nickname) => {
    const userLinkTag = document.createElement("a");

    userLinkTag.href = `https://github.com/${nickname}`;
    userLinkTag.target = "_blank";
    userLinkTag.setAttribute("data-user", `${nickname}`);

    return userLinkTag;
};

const createUserElements = (userInfo) => {
    const userLinkTag = createUserLinkTag(userInfo.username);
    const userInfoContainer = createUserInfoContainer(userInfo);

    userLinkTag.appendChild(userInfoContainer);
    document.querySelector(".users-container").appendChild(userLinkTag);
};

const attachUserInfoToDOM = async () => {
    const userInfo = await getUserInfo();
    if (userInfo !== null) {
        createUserElements(userInfo);
    }
    document.querySelector("input").value = "";
};

const addEvents = (btn, input) => {
    btn.addEventListener("click", attachUserInfoToDOM);
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            attachUserInfoToDOM();
        }
    });
};

addEvents(
    document.querySelector(".search-btn"),
    document.querySelector("input")
);

window.onload = () => {
    document.querySelector("input").focus();
};
