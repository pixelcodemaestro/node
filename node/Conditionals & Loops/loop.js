for (let i = 1; i <= 7; i++) {
  console.log(`Step ${i}`);
}
// Step 1
// Step 2
// Step 3
// Step 4
// Step 5

for (let i = 1;  i <= 5;  i++);
//   ↑ start    ↑ stop    ↑ step (i++ means add 1 each time)

let count = 1;

while (count <= 3) {
  console.log(`Count is ${count}`);
  count++; // important! without this it loops forever
}
// Count is 1
// Count is 2
// Count is 3