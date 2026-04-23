const prompt = require('prompt-sync')();

const age = prompt('Enter age: ');
const hasID = prompt('Have Voter ID? (y/n): ');

if (age >= 18 && hasID === 'y') {
    console.log("You are eligible!");
} else {
    console.log("Not eligible.");
}