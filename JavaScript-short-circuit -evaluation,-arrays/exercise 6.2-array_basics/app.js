const people = ["Greg", "Mary", "Devon", "James"];

// 6.2.1
for (let person of people) {
    console.log(person);
}

// 6.2.2
people.shift();
console.log(people);

// 6.2.3
people.pop();
console.log(people);

// 6.2.4
people.unshift("Matt");
console.log(people);

// 6.2.5
people.push("Shir");
console.log(people);

// 6.2.6
for (let person of people) {
    console.log(person);
    if (person === "Mary") {
        break;
    }
}

// 6.2.7
const newSlicedArray = people.slice(2);
console.log(newSlicedArray);

// 6.2.8
let idxOfMary = people.indexOf("Mary");
console.log(idxOfMary);

// 6.2.9
let idxOfFoo = people.indexOf("Foo");
console.log(idxOfFoo);

// 6.2.10
const people1 = ["Greg", "Mary", "Devon", "James"];
console.log(people1);
people1.splice(2, 1, "Elizabeth", "Artie");
console.log(people1);

// 6.2.11
const withBob = people1.concat("Bob");
console.log(withBob);
