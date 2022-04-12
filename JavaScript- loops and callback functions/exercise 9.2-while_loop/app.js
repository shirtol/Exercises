// 9.2.1

const populations = [
    125.8, 9.217, 59.55, 9.75,
]; /*Japan, Israel, Italy, hungary */
const WORLD_POPULATION = 7900;

const percentageOfWorld = (population) => (population / WORLD_POPULATION) * 100;

const populationPercentages = (populationArr) => {
    const percentages = [];
    let i = 0;
    while (i < populationArr.length) {
        percentages.push(percentageOfWorld(populationArr[i]));
        i++;
    }
    return percentages;
};

console.log(populationPercentages(populations));

// 9.2.2
/* The solution I liked better is the for loop, it's more intuitive for me and I think creates less bugs in this task. */
