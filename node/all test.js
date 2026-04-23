// --- STRINGS ---
const firstName = "Ravi";
const lastName = "Kumar";
const fullName = firstName + " " + lastName; // joining strings = concatenation
console.log(fullName); // Ravi Kumar

// Template literals — cleaner way to combine strings
const city = "Chennai";
const greeting = `Hi, I am ${firstName} and I live in ${city}`;
console.log(greeting); // Hi, I am Ravi and I live in Chennai

// String properties
const course = "Node.js";
console.log(course.length);        // 6
console.log(course.toUpperCase()); // NODE.JS
console.log(course.toLowerCase()); // node.js

// --- NUMBERS ---
const price = 499;
const discount = 49.5;
const finalPrice = price - discount;
console.log(finalPrice);        // 449.5
console.log(Math.round(449.5)); // 450
console.log(Math.max(10, 20, 5)); // 20

// --- BOOLEAN ---
const isLoggedIn = true;
const hasPaid = false;
console.log(isLoggedIn); // true
console.log(hasPaid);    // false

// --- NULL vs UNDEFINED ---
const emptyValue = null;   // you intentionally left it empty
let notAssigned;           // you forgot to assign — undefined
console.log(emptyValue);   // null
console.log(notAssigned);  // undefined

// --- typeof — check what type a variable is ---
console.log(typeof firstName);  // string
console.log(typeof price);      // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof emptyValue); // object (quirk of JS!)
console.log(typeof notAssigned);// undefined





// --- BASIC FUNCTION ---
function sayHello() {
  console.log("Hello!");
}
sayHello(); // Hello!

// --- FUNCTION WITH PARAMETERS ---
function greetUser(name, city) {
  console.log(`Welcome ${name}, from ${city}!`);
}
greetUser("Priya", "Mumbai");  // Welcome Priya, from Mumbai!
greetUser("Kiran", "Delhi");   // Welcome Kiran, from Delhi!

// --- FUNCTION WITH RETURN ---
function calculateTotal(price, tax) {
  return price + tax;
}
const total = calculateTotal(500, 50);
console.log(`Total: ${total}`); // Total: 550

// --- ARROW FUNCTIONS ---
const square = (n) => n * n;
const cube = (n) => n * n * n;
console.log(square(4)); // 16
console.log(cube(3));   // 27

// --- FUNCTION CALLING ANOTHER FUNCTION ---
const double = (n) => n * 2;
const addThenDouble = (a, b) => double(a + b);
console.log(addThenDouble(3, 4)); // 14  (3+4=7, 7*2=14)

// --- DEFAULT PARAMETERS ---
// If no argument is passed, it uses the default value
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet("Ravi");  // Hello, Ravi!
greet();        // Hello, Guest!





// --- ARRAYS ---
const fruits = ["mango", "apple", "banana", "orange", "grape"];

console.log(fruits[0]);      // mango (first)
console.log(fruits[4]);      // grape (last)
console.log(fruits.length);  // 5

fruits.push("kiwi");         // add to end
console.log(fruits.length);  // 6

fruits.pop();                // remove from end
console.log(fruits);         // back to 5 items

// Loop through array
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});
// 1. mango
// 2. apple ... and so on

// map — transform every item into something new
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits); // ["MANGO", "APPLE", "BANANA"...]

// --- OBJECTS ---
const student = {
  name: "Ravi",
  age: 22,
  course: "Node.js",
  isPassed: true
};

console.log(student.name);     // Ravi
console.log(student.age);      // 22
console.log(student.isPassed); // true

// Add a new key to an object
student.city = "Chennai";
console.log(student.city);     // Chennai

// --- ARRAY OF OBJECTS (real-world pattern!) ---
const employees = [
  { id: 1, name: "Anita",  role: "Developer", salary: 60000 },
  { id: 2, name: "Suresh", role: "Designer",  salary: 50000 },
  { id: 3, name: "Meena",  role: "Manager",   salary: 80000 }
];

// Access specific employee
console.log(employees[0].name);   // Anita
console.log(employees[2].salary); // 80000

// Loop through all employees
employees.forEach((emp) => {
  console.log(`${emp.name} works as a ${emp.role}`);
});
// Anita works as a Developer
// Suresh works as a Designer
// Meena works as a Manager

// --- FUNCTION + OBJECT TOGETHER ---
function describEmployee(emp) {
  return `${emp.name} is a ${emp.role} earning ₹${emp.salary}/month`;
}
console.log(describEmployee(employees[0]));
// Anita is a Developer earning ₹60000/month
