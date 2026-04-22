const fruits = ["apple", "banana", "mango"];

// Check length
console.log(fruits.length); // 3

// Add to the end
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "mango", "orange"]

// Remove from the end
fruits.pop();
console.log(fruits); // ["apple", "banana", "mango"]

// Loop through all items
fruits.forEach((fruit) => {
  console.log(fruit);
});
// apple
// banana
// mango



const person = {
  name: "Ravi",
  age: 22,
  isStudent: true
};

console.log(person.name);      // Ravi
console.log(person.age);       // 22
console.log(person.isStudent); // true