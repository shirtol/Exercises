const numbers = [1, -5, 666, 2, 400, 11];

// 13.1.1: ascending order
const ascendingSort = (arr) => [...arr].sort((num1, num2) => num1 - num2);

// 13.1.2: descending order
const descendingSort = (arr) => [...arr].sort((num1, num2) => num2 - num1);

console.log(ascendingSort(numbers));
console.log(descendingSort(numbers));
console.log(numbers);
