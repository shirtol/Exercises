// 3.3.1 + 3.3.2
const WORLD_POPULATION = 7900;

/* 3.3.3
function declaration */
function percentageOfWorld1(population) {
    return (population / WORLD_POPULATION) * 100;
}

let israelPopulation = percentageOfWorld1(10);
let japanPopulation = percentageOfWorld1(120);
let italyPopultion = percentageOfWorld1(40);
console.log(israelPopulation);
console.log(japanPopulation);
console.log(italyPopultion);

/* 3.3.4
function expression */
const percentageOfWorld2 = (population) =>
    (population / WORLD_POPULATION) * 100;

let israelPopulation2 = percentageOfWorld2(10);
let japanPopulation2 = percentageOfWorld2(120);
let italyPopultion2 = percentageOfWorld2(40);
console.log(israelPopulation2);
console.log(japanPopulation2);
console.log(italyPopultion2);
