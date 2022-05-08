const hero1 = {
    health: 5,
    power: 68,
    getStrength: function () {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    },
};
function whoIsStronger1(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}
console.log(whoIsStronger1(hero1.getStrength));

/**
 * 25.1.1:
 * The problem with this code is that according to the parameters we need to print out "I am stronger" but instead the phrase "You are stronger" prints.
 * The function getStrength is related to the object hero,
 * so when we are trying to invoke the function in the global scope the this keyword related to the window.
 * If we want to print out "I am stronger" instead of "you are stronger" we can't use it like that and we need to use bind.
 *
 * 25.1.2:
 * We can fix this problem by using bind and create a new function that works like getStrength, but the this
 * keyword will replace with the word hero.
 */

const hero = {
    health: 5,
    power: 68,
    getStrength: function () {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    },
};
const getStrength = hero.getStrength.bind(hero);

function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}
console.log(whoIsStronger(getStrength));
