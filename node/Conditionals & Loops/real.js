const students = [
  { name: "Ravi",  score: 85 },
  { name: "Priya", score: 55 },
  { name: "Kiran", score: 92 },
  { name: "Meena", score: 40 }
];

students.forEach((student) => {
  if (student.score >= 60) {
    console.log(`${student.name} — PASSED ✅`);
  } else {
    console.log(`${student.name} — FAILED ❌`);
  }
});

// Ravi  — PASSED ✅
// Priya — FAILED ❌
// Kiran — PASSED ✅
// Meena — FAILED ❌