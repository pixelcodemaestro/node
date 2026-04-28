const prompt1 = require('prompt-sync')({sigint:true});
const ageInput = prompt1("Enter your age: ");
const age = parseInt(ageInput);

const isMember = prompt1("Are you a member? (yes/no): ").toLowerCase() === "y";
const isBanned = prompt1("Are you banned? (yes/no): ").toLowerCase() === "y";



if (age >= 18 && isMember && !isBanned) {
  console.log("Welcome to the club! 🎊");
} else {
  console.log("Access denied ❌");
}
