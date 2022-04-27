const storm = {
    superPower: "controlling the weather",
    displaySuperPower: printSuperPower,
};

function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

storm.displaySuperPower();
