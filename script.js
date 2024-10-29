const outputDiv = document.getElementById("output");

function manipulateArray() {
  // Step 1: Return a promise that resolves with an array [1, 2, 3, 4] after 3 seconds
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  })
    .then((arr) => {
      // Step 2: Filter out odd numbers and display after 1 second
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = arr.filter((num) => num % 2 === 0);
          outputDiv.textContent = evenNumbers.join(", ");
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      // Step 3: Multiply even numbers by 2 and display after 2 seconds
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubledNumbers = evenNumbers.map((num) => num * 2);
          outputDiv.textContent = doubledNumbers.join(", ");
          resolve(doubledNumbers);
        }, 2000);
      });
    })
    .catch((error) => {
      outputDiv.textContent = `Error: ${error}`;
    });
}

// Call the function to initiate the chain
manipulateArray();
