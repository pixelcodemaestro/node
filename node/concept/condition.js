// const prompt = require('prompt-sync')({sigint: true});

// // 1. Ask the user the question
// const weatherInput = prompt("Is it raining right now? (yes/no): ").toLowerCase();

// // 2. Convert the string input into a boolean
// const isRaining = (weatherInput === "yes" || weatherInput === "y");

// if (isRaining) {
//   console.log("Carry an umbrella ☔");
// } else {
//   console.log("Enjoy the sunshine ☀️");
// }

// // console.log(isRaining ? "Carry an umbrella ☔" : "Enjoy the sunshine ☀️");


//battery level check

const prompt1 = require('prompt-sync')({sigint:true});

const batteryInput = prompt1("Enter your phone's battery level (0-100): ");
const batteryLevel = parseInt(batteryInput);

if (batteryLevel >= 80) {
  console.log("Battery is full 🔋");
} else if (batteryLevel >= 50) {
  console.log("Battery is good 🔋");
} else if (batteryLevel >= 20) {
  console.log("Battery is low 🔋");
} else {
  console.log("Battery is critical! Charge now! 🔌");
}   

