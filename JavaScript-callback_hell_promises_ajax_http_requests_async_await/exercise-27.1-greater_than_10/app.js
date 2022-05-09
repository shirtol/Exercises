const greaterThanTen = (number) =>
    new Promise((resolve, reject) => {
        if (number > 10) resolve(`${number} is greater then 10`);
        else reject(`${number} isn't greater then 10`);
    });

greaterThanTen(8)
    .then((returnMsg) => console.log(returnMsg))
    .catch((error) => console.log(error));

greaterThanTen(11)
    .then((returnMsg) => console.log(returnMsg))
    .catch((error) => console.log(error));
