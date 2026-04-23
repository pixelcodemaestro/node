const name = "Aparna";
const age = 33;
const dob = "12-12-1992";
const isStudent = true;
const city = "Pondicherry";

console.log(name, age, isStudent, city, dob);


// Introduce myself function
function introduceMyself() {
    console.log("Hello, my name is " + name + ". I am " + age + " years old. I live in " + city + ".");
}

introduceMyself();

// Function with parameters
function greet(name) {
    console.log("Hello, " + name + "! Welcome to the world of JavaScript.");
}

greet("Alice");
greet("Bob");
greet ('aparna');

// Function with return value
// function add(a, b) {
//     return a + b;
// }

// const sum = add(5, 10);
// console.log("The sum of 5 and 10 is: " + sum);

// // Function with multiple parameters
// function calculateArea(length, width) {
//     return length * width;
// }

function add(a, b) {
return a + b;
}

const sum = add(5, 10);
console.log(sum);




// 5. Write an arrow function called 'calculateArea'
//    that takes width and height, and RETURNS the area
//    (width * height). Print the result.
const calculateArea = (width, height) => {
    return width * height;
}

const area = calculateArea(5, 10);
console.log(area);


// 6. Write a function called 'isAdult' that takes age
//    as a parameter and returns true if age >= 18,
//    false otherwise.
//    Test it with ages: 15, 18, 25
function isAdult(age) {
    return age >= 18;
}

console.log(isAdult(16)); // false
console.log(isAdult(18)); // true
console.log(isAdult(25)); // true     

// 7. Create an array of 5 of your favorite foods.
//    - Print the first and last item
//    - Print the total count
//    - Add a new food at the end
//    - Print the array again
const favoriteFoods = ["Pizza", "Sushi", "Pasta", "Ice Cream", "Burgers"];
console.log(favoriteFoods[0]); // First item
console.log(favoriteFoods[favoriteFoods.length - 1]); // Last item
console.log(favoriteFoods.length); // Total count

favoriteFoods.push("Tacos"); // Add new food at the end
console.log(favoriteFoods); // Print the array again    
console.log(favoriteFoods[favoriteFoods.length - 1]);

// 8. Create an object called 'phone' with these keys:
//    brand, model, price, isSmartphone
//    Print each value using dot notation

const phone = {
    brand: "Apple",
    model: "iPhone 13",
    price: 999,
    isSmartphone: true
};

console.log(phone.brand); // Apple
console.log(phone.model); // iPhone 13
console.log(phone.price); // 999
console.log(phone.isSmartphone); // true  


const country = {
  name: "india",
  capital: "new delhi",
  population: 1380004385,
  isDemocracy: true,
  primeMinister: "Narendra Modi",
  president: "Droupadi Murmu",
  "vice-president": "Jagdeep Dhankhar",
  currency: "Indian Rupee",
  officialLanguages: ["Hindi", "English", "Bengali", " Telugu", "Marathi"],
  neighboringCountries: ["Pakistan", "China", "Bangladesh", "Nepal", "Bhutan"],

};

console.log(country.name); // india
console.log(country.capital);
console.log(country.population);
console.log(country.isDemocracy);
console.log(country.primeMinister);
console.log(country.president);
console.log(country["vice-president"]);
console.log(country.currency);
console.log(country.officialLanguages);
console.log(country.neighboringCountries);  



// 9. Create an array of 3 student objects.
//    Each student should have: name, age, grade
//    - Print the second student's name
//    - Print the third student's grade
const students = [
    { name: "Alice", age: 20, grade: "A", city: "New York" },
    { name: "Bob", age: 22, grade: "B", city: "Los Angeles" },
    { name: "Charlie", age: 19, grade: "A+", city: "Chicago" }
];

console.log(students[1].name); // Bob
console.log(students[2].grade); // A+
console.log(students[2].city); // Chicago

// 10. CHALLENGE 🔥
//     Create a function called 'describeStudent'
//     that takes a student object as a parameter
//     and prints:
//     "Ravi is 22 years old and scored grade A"
//     Test it with at least 2 different student objects.

function describeStudent(student) {
    console.log(student.name + " is " + student.age + " years old and scored grade " + student.grade);
}

const student1 = { name: "Ravi", age: 22, grade: "A" };
const student2 = { name: "Sita", age: 21, grade: "B+" };
const student3 = { name: "Charlie", age: 19, grade: "A+" };


describeStudent(student1); // Ravi is 22 years old and scored grade A
describeStudent(student2); // Sita is 21 years old and scored grade B+  
describeStudent(student3); // Charlie is 19 years old and scored grade A+  

function describeMe() {
    console.log("My name is " + name + ", I am " + age + " years old, and I live in " + city + ".");
}

describeMe(student1); // My name is prasanth, I am 33 years old, and I live in Pondicherry.


function Aparna() {
    console.log("My name is " + name + ", I am " + age + " years old, and I live in " + city + ".");
}

Aparna(student2); 





