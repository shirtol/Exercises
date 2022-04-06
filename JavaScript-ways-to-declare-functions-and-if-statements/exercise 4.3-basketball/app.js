let johnTeamScore = [89, 120, 103];
let mikeTeamScore = [116, 94, 123];

const avg = (arr) => {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum / arr.length;
};

let avgJohnTeam = avg(johnTeamScore); /*104*/
let avgMikeTeam = avg(mikeTeamScore); /*111*/

let johnTeam = {
    teamName: "John",
    avgScore: avgJohnTeam,
};

let mikeTeam = {
    teamName: "Mike",
    avgScore: avgMikeTeam,
};

const printWin = (team1, team2) => {
    if (team1.avgScore > team2.avgScore) {
        console.log(
            `The winner is ${team1.teamName}'s team, and their average score is ${team1.avgScore}.`
        );
    } else if (team1.avgScore < team2.avgScore) {
        console.log(
            `The winner is ${team2.teamName}'s team, and their average score is ${team2.avgScore}.`
        );
    } else {
        console.log("It's a draw!");
    }
};

printWin(johnTeam, mikeTeam);

// Extra:
let maryTeamScore = [97, 134, 105];
let avgMaryTeam = avg(maryTeamScore); /*112*/

let maryTeam = {
    teamName: "Mary",
    avgScore: avgMaryTeam,
};

const checkWinner = (...array) => {
    let winner = array[0];

    for (let item of array) {
        if (item.avgScore > winner.avgScore) {
            winner = item;
        }
    }

    return winner;
};

const isDraw = (...array) => {
    let currItemScore = array[0].avgScore;

    for (let item of array) {
        if (item.avgScore !== currItemScore) {
            return false;
        }
    }

    return true;
};

const printWinOrDraw = () => {
    let draw = isDraw(johnTeam, maryTeam, mikeTeam);

    if (draw) {
        console.log("It's a draw!");
    } else {
        let winnerObj = checkWinner(johnTeam, maryTeam, mikeTeam);
        console.log(
            `The winner is ${winnerObj.teamName}'s team, and their average score is ${winnerObj.avgScore}.`
        );
    }
};

printWinOrDraw();
