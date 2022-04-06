const isLeapYear = (year) => {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        console.log("It is indeed a leap year");
    } else {
        console.log("This is not a leap year.");
    }
};

isLeapYear(5);
isLeapYear(2012);
isLeapYear(2100);
isLeapYear(2400);
