console.log("\nTask 2.1")

const numbers = [1, 2, 3];

const [firstNumber, secondNumber, thirdNumber] = numbers;

console.log(firstNumber);
console.log(secondNumber);
console.log(thirdNumber);

console.log("\nTask 2.2")

const fruits = ['apple', 'orange', 'banana'];

const [firstFruit, ...restFruits] = fruits;

console.log(firstFruit);
console.log(restFruits);

console.log("\nTask 2.3")

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray);
