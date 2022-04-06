const daysInweek = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
};

const monthsInYear = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
};

function intDayToActualDay(intDay) {
    return daysInweek[intDay];
}

function intMonthToActualMonth(intMonth) {
    return monthsInYear[intMonth];
}

function todayDate() {
    const date = new Date();
    let currentDay = intDayToActualDay(date.getDay());
    let currentDayOfMonth = date.getDate();
    let currentMonth = intMonthToActualMonth(date.getMonth());
    let currentYear = date.getFullYear();
    return `Today is ${currentDay} the ${currentDayOfMonth} of ${currentMonth}, ${currentYear}`;
}

console.log(todayDate());

// Another cool way:

function todayDateTwo() {
    const date = new Date();
    let currentDay = date.toLocaleString("deafult", { weekday: "long" });
    let currentDayOfMonth = date.getDate();
    let currentMonth = date.toLocaleString("deafult", { month: "long" });
    let currentYear = date.getFullYear();
    return `Today is ${currentDay} the ${currentDayOfMonth} of ${currentMonth}, ${currentYear}`;
}

console.log(todayDateTwo());
