const raceTable = document.querySelector(".racer-table");
const car = document.querySelector("#active");
const playerOneRace = document.querySelector("#player1-race");
const playerTwoRace = document.querySelector("#player2-race");
let playerOneChildActive = playerOneRace.firstElementChild;
let playerTwoChildActive = playerTwoRace.firstElementChild;

const handleClick = (e) => {
    if (e.key === "ArrowRight" || e.key === "Right") {
        if (playerOneChildActive.nextElementSibling !== null) {
            playerOneChildActive.classList.remove("active");
            playerOneChildActive = playerOneChildActive.nextElementSibling;
            playerOneChildActive.classList.add("active");
        }
        checkWin();
    } else if (e.key === "b") {
        if (playerTwoChildActive.nextElementSibling !== null) {
            playerTwoChildActive.classList.remove("active");
            playerTwoChildActive = playerTwoChildActive.nextElementSibling;
            playerTwoChildActive.classList.add("active");
        }
        checkWin();
    }
};

const restartPlayerRace = (player, race) => {
    player.className = "";
    race.lastElementChild.className = "finish";
    race.firstElementChild.className = "active";
};

const removeWinningMsg = () => {
    const winningMsg = document.querySelector("#winning-msg");
    winningMsg.remove();
};

const removeRestartBtn = () => {
    const restartBtn = document.querySelector("#restart-btn");
    restartBtn.remove();
};

const restartGame = (e) => {
    restartPlayerRace(playerOneChildActive, playerOneRace);
    restartPlayerRace(playerTwoChildActive, playerTwoRace);
    playerOneChildActive = playerOneRace.firstElementChild;
    playerTwoChildActive = playerTwoRace.firstElementChild;
    window.addEventListener("keyup", handleClick);
    removeWinningMsg();
    removeRestartBtn();
};

const displayWinningMsg = (winner) => {
    const winningMsg = document.createElement("h1");
    winningMsg.id = "winning-msg";
    document.body.appendChild(winningMsg);

    if (winner === 1) {
        winningMsg.textContent = "Player 1 WON!";
    } else if (winner === 2) {
        winningMsg.textContent = "Player 2 WON!";
    }
};

const displayRestartBtn = () => {
    const restart = document.createElement("button");
    restart.id = "restart-btn";
    restart.textContent = "RESTART";
    document.body.appendChild(restart);
    restart.addEventListener("click", restartGame);
};

const finishGame = (winner) => {
    const scriptTag = document.querySelector("script");
    displayWinningMsg(winner, scriptTag);
    window.removeEventListener("keyup", handleClick);
    displayRestartBtn(scriptTag);
};

// If player 1 won we return 1, if player 2 won we return 2.
const checkWin = () => {
    const isPlayer1Won = playerOneChildActive.classList.contains("finish");
    const isPlayer2Won = playerTwoChildActive.classList.contains("finish");
    if (isPlayer1Won && !isPlayer2Won) finishGame(1);
    if (!isPlayer1Won && isPlayer2Won) finishGame(2);
};

window.addEventListener("keyup", handleClick);
