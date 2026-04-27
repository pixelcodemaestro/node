// const myPromise = new Promise((resolve, reject) => {
//   const success = true;

//   if (success) {
//     resolve("Task completed! ✅");  // sends success result
//   } else {
//     reject("Something went wrong ❌"); // sends failure result
//   }
// });

// myPromise
//   .then((result) => {
//     console.log(result); // runs if resolved
//   })
//   .catch((error) => {
//     console.log(error);  // runs if rejected
//   });

// // Output:
// // Task completed! ✅



// function makeFood(foodName) {
//   return new Promise((resolve, reject) => {
//     console.log(`Preparing ${foodName}... 👨‍🍳`);

//     setTimeout(() => {
//       const foodReady = true; // change to false to test failure

//       if (foodReady) {
//         resolve(foodName); // success — food is ready
//       } else {
//         reject("Kitchen is closed ❌"); // failure
//       }
//     }, 3000);
//   });
// }

// makeFood("coffee")
//   .then((food) => {
//     console.log("Setting the table... 🍴");
//     return food; // pass food to next .then()
//   })
//   .then((food) => {
//     console.log(`your ${food} is ready! Enjoy 🍽️`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // Output:
// // Preparing coffee... 👨‍🍳
// // (3 seconds pass...)
// // Setting the table... 🍴
// // your coffee is ready! Enjoy 🍽️



function orderFood(food) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering ${food}... 🛵`);

    setTimeout(() => {
      const delivered = true; // change to false and see what happens

      if (delivered) {
        resolve(food);
      } else {
        reject("Delivery failed! 😞");
      }
    }, 3000);
  });
}

orderFood("Pizza")
  .then((food) => {
    console.log(`${food} delivered! 🍕`);
    return food;
  })
  .then((food) => {
    console.log(`Enjoying ${food}! 😋`);
  })
  .catch((error) => {
    console.log(error);
  });