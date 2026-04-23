const age = 34;

if (age >= 33) {
  console.log("You are Prasanth");
} 
else {
  console.log("You are a aparna");
}
// You are an adult


const score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
// Grade: B


const mark= 50;
if (mark>=90) {
    console.log("Grade: A");
}else if (mark>=75) {
    console.log("Grade: B");
} else if (mark>=60){
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

console.log(10 > 5);   // true  — greater than
console.log(10 < 5);   // false — less than
console.log(10 === 10); // true  — strictly equal
console.log(10 !== 5);  // true  — not equal
console.log(10 >= 10);  // true  — greater or equal
console.log(10 <= 9);   // false — less or equal




const voters = 18;
const hasVoterID = true;
if (voters >= 18 && hasVoterID) {
  console.log("You can vote!");
} else {
  console.log("You cannot vote.");
}
// You can vote!    