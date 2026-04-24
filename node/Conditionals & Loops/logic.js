const prompt = require('prompt-sync')({sigint: true});

console.log("--- Scenario 1: AND (Entry Check) ---");
const age = parseInt(prompt("Enter your age: "));
const hasID = prompt("Do you have ID? (y/n): ").toLowerCase() === 'y';

// BOTH must be true
if (age >= 18 && hasID) {
  console.log("✅ Entry allowed");
} else {
  console.log("❌ Entry denied. You need to be 18 AND have an ID.");
}

console.log("\n--- Scenario 2: OR (Holiday Check) ---");
const isWeekend = prompt("Is it Saturday/Sunday? (y/n): ").toLowerCase() === 'y';
const isHoliday = prompt("Is it a Public Holiday? (y/n): ").toLowerCase() === 'y';

// AT LEAST ONE must be true
if (isWeekend || isHoliday) {
  console.log("✅ No work today! Relax.");
} else {
  console.log("💼 It's a work day.");
}

console.log("\n--- Scenario 3: NOT (Weather Check) ---");
const isRaining = prompt("Is it raining right now? (y/n): ").toLowerCase() === 'y';

// Flips the value (If NOT raining, go out)
if (!isRaining) {
  console.log("✅ Go outside! It's dry.");
} else {
  console.log("🏠 Stay inside, it's raining.");
}

