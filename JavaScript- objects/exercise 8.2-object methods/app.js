const myCountry = {
    country: "Czech Republic",
    capital: "Prague",
    language: "Czech",
    population: 10.7,
    neighbours: ["Germany", "Poland", "Slovakia", "Austria"],

    describe() {
        console.log(
            `${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
        );
    },

    checkIsland() {
        myCountry["isIsland"] = this.neighbours.length ? false : true;
    },
};

myCountry.describe();
