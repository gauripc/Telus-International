// Array Assignments

// 1. Create and Access Elements
const fruits = ["Apple", "Banana", "Mango"];

firstFruit = fruits[0];
const lastFruit = fruits[fruits.length - 1];

console.log(firstFruit);
console.log(lastFruit);

// 2. Modify Array Elements
fruits[1] = "Orange";
fruits.push("Pineapple");
fruits.shift();

console.log(fruits);

// 3. Array Methods
    const fruitLengths = fruits.map(fruit => fruit.length);
    console.log(fruitLengths);

    const longFruits = fruits.filter(fruit => fruit.length > 5);
    console.log(longFruits);

// 4. Sort and Reverse
fruits.sort();
fruits.reverse();

console.log(fruits);

// 5. Find and Index
const fruitWithG = fruits.find(fruit => fruit.includes('g'));
console.log(fruitWithG);

const indexOfMango = fruits.indexOf("Mango");
console.log(indexOfMango);

// 6. Array Transformation with map and filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 7. Aggregate Data with reduce
const expenses = [
  { amount: 50, category: 'Groceries' },
  { amount: 20, category: 'Transportation' },
  { amount: 100, category: 'Entertainment' },
  { amount: 80, category: 'Groceries' },
  { amount: 30, category: 'Transportation' }
];

const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
console.log(totalAmount);

const expensesByCategory = expenses.reduce((acc, expense) => {
  acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
  return acc;
}, {});

console.log(expensesByCategory);

// 8. Array Flattening
const nestedArray = [1, [2, [3, [4, 5]], 6], 7, [8, 9]];

function flattenArray(arr) {
  return arr.flat(Infinity);
}

const flatArray = flattenArray(nestedArray);
console.log(flatArray);


// Object Assignments

// 1. Create and Access Properties
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log(car.make);
console.log(car.year);

// 2. Modify Object Properties
car.model = "Camry";
car.color = "blue";

console.log(car);

// 3. Iterate Over Object Properties
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

// 4. Nested Objects
const person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
  }
};

console.log(person.address.city);

// 5. Array of Objects
const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "C" }
];

students.forEach(student => {
  console.log(`Name: ${student.name}, Grade: ${student.grade}`);
});

// 6. Destructuring
const { make, model } = car;
console.log(make);
console.log(model);

const [firstFruit, secondFruit] = fruits;
console.log(firstFruit);
console.log(secondFruit);

// 7. Merge Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 };

console.log(mergedObj);
