console.log("Task 1.1")

const student = {
    name: 'Vladik',
    age: 17,
    gender: 'male'
};

const { name: studentName, age: studentAge, gender: studentGender } = student;

console.log(studentName);
console.log(studentAge);
console.log(studentGender);

console.log("\nTask 1.2")

const car = {
    engine: {
        cylinders: 4,
        horsepower: 200
    }
};

const { engine: { cylinders: engineCylinders, horsepower: engineHorsepower } } = car;

console.log(engineCylinders);
console.log(engineHorsepower);

console.log("\nTask 1.3")

const book = {
    title: 'Кобзар',
    author: 'Тарас Шевченко'
};

const { title: bookTitle, author: bookAuthor } = book;

console.log(bookTitle);
console.log(bookAuthor);