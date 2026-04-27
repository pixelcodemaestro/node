function makeFood(foodName, callback) {
  console.log(`Preparing ${foodName}... 👨‍🍳`);

  setTimeout(() => {
    callback(foodName);
  }, 6000);
}

function setTable(callback) {
  console.log("Setting the table... 🍴");

  setTimeout(() => {
    callback();
  }, 4000); // takes 2 more seconds
}

function serveFood(food) {
  // first set the table, THEN serve
  setTable(() => {
    console.log(`your ${food} is ready! Enjoy 🍽️`);
  });
}

makeFood("coffee", serveFood);

// Output:
// Preparing coffee... 👨‍🍳
// (5 seconds pass...)
// Setting the table... 🍴
// (2 more seconds pass...)
// your coffee is ready! Enjoy 🍽️