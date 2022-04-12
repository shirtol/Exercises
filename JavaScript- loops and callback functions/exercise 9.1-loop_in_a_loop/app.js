const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

// First option
for (let i = 0; i < listOfNeighbours.length; i++) {
    let row = listOfNeighbours[i];
    for (let j = 0; j < row.length; j++) {
        console.log(`Neighbour: ${row[j]}`);
    }
}

console.log("\n");

// Second option
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}
