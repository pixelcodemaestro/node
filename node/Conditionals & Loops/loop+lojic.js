// const students = [
//   { name: "Ravi",  score: 85 },
//   { name: "Priya", score: 55 },
//   { name: "Kiran", score: 92 },
//   { name: "Meena", score: 40 }
// ];

// students.forEach((student) => {
//   if (student.score >= 60) {
//     console.log(`${student.name} — PASSED ✅`);
//   } else {
//     console.log(`${student.name} — FAILED ❌`);
//   }
// });

// // Ravi  — PASSED ✅
// // Priya — FAILED ❌
// // Kiran — PASSED ✅
// // Meena — FAILED ❌



const prompt = require('prompt-sync')({sigint: true});

const students = [
  { name: "Ravi" },
  { name: "Priya" },
  { name: "Kiran" },
  { name: "Meena" }
];

console.log("--- Enter Student Scores ---");

// Use forEach to loop through each student and ask for their score
students.forEach((student) => {
  // 1. Get the score via prompt
  const inputScore = prompt(`Enter score for ${student.name}: `);
  
  // 2. Convert input string to a number
  student.score = parseInt(inputScore);

  // 3. Process the logic
  if (student.score >= 60) {
    console.log(`Result: ${student.name} — PASSED ✅\n`);
  } else {
    console.log(`Result: ${student.name} — FAILED ❌\n`);
  }
});

console.log("--- Final Data Object ---");
console.log(students);

const paymentModes = ["International Card", "CIB/Dahabia", "Pay at Hotel"];

paymentModes.forEach((mode) => {
   const status = prompt(`Is ${mode} working in UAT? (y/n): `);
   if (status.toLowerCase() === 'y') {
       console.log(`${mode} is ready for Production! 🚀`);
   } else {
       console.log(`${mode} needs fixing. 🛠️`);
   }
});


const nums = [10, 25, 8, 42, 15];
nums.forEach((n) => {
  if (n > 20) {
    console.log(n);
  }
});

