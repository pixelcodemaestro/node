const age = 25;
const hasID = true;

// AND — both must be true
if (age >= 18 && hasID) {
  console.log("Entry allowed");
}

// OR — at least one must be true
const isWeekend = false;
const isHoliday = true;
if (isWeekend || isHoliday) {
  console.log("No work today!");
}

// NOT — flips true to false
const isRaining = false;
if (!isRaining) {
  console.log("Go outside!");
}