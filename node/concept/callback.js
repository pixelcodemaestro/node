function fetchData(callback) {
  console.log("Fetching data... ⏳");

  setTimeout(() => {
    const data = "User: Ravi";
    callback(data); // calls your function when done
  }, 10000);
}

function showData(result) {
  console.log("Got the data:", result);
}

fetchData(showData);
console.log("Doing other things... 💻");

// Output:
// Fetching data... ⏳
// Doing other things... 💻
// Got the data: User: Ravi  ← appears after 2 seconds