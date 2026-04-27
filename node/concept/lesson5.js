function makeFood(foodName, callback) {
  console.log(`Preparing ${foodName}... 👨‍🍳`);

  setTimeout(() => {
    callback(foodName);
  }, 5000);
}

function serveFood(food) {
  console.log(`your ${food} is ready! Enjoy 🍽️`);
}

makeFood("coffee", serveFood);
console.log("Setting the table... 🍴");





