function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

const squirtle = new Pokemon("squirtle", "water", [
    "Aqua jet",
    "Water pulse",
    "Aqua tail",
]);

const eevee = new Pokemon("eevee", "normal", [
    "dig",
    "swift",
    "body slam elite TM",
]);

const totodile = new Pokemon("totodile", "water", [
    "water gun",
    "crunch",
    "aqua jet",
]);

Pokemon.prototype.callPokemon = function () {
    console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (attackNumber) {
    console.log(`${this.name} used ${this.attackList[attackNumber]}`);
};

squirtle.callPokemon();
eevee.callPokemon();
totodile.callPokemon();

squirtle.attack(0);
eevee.attack(1);
totodile.attack(2);
