const boomGame = (n) => {
    for (let i = 1; i <= n; i++) {
        let arrayOfDigits = Array.from(String(i), Number);

        if (i % 7 === 0 && arrayOfDigits.includes(7)) {
            console.log("BOOM-BOOM");
        } else if (i % 7 === 0) {
            console.log("BOOM");
        } else {
            console.log(i);
        }
    }
};

boomGame(18);
