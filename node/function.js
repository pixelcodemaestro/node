// DEFINING the function
function greet() {
  console.log("Hello, welcome to Node.js!");
}

// CALLING the function
greet(); // Hello, welcome to Node.js!
greet(); // Hello, welcome to Node.js!

function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Ravi");   // Hello, Ravi!
greet("Priya");  // Hello, Priya!


function add(a, b) {
 return  a + b;
}

const result = add(5, 4);function introduce (name, city){
    console.log(`hi, i am ${name} from ${city}`)
}
introduce("Ravi", "Chennai");

const calculateArea = (width, height);{
return width * height;
}

const result1 = calculateArea(10, 5);
console.log(`The area is: ${result}`);
console.log(result); // 8


//calling the function
//4. Write a function called 'introduce' that takes
//    name and city as parameters and prints:
//    "Hi, I am Ravi from Chennai"
// Calling the function



// 5. Arrow function to calculate area
const calculateArea = (width, height) => {
    return width * height;
};

// Alternative "Short" version (Implicit return)
// const calculateArea = (width, height) => width * height;

// Calculate and print the result
const result1 = calculateArea(10, 5);
console.log(`The area is: ${result1}`);