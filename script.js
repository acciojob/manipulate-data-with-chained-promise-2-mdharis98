const outputDiv = document.getElementById("output");

function manipulateArray() {
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("Initial array resolved");
      resolve([1, 2, 3, 4]);
    }, 3000); // 3 seconds initial delay
  })
    .then((arr) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = arr.filter((num) => num % 2 === 0);
          console.log("Filtered evens:", evenNumbers);
          outputDiv.textContent = evenNumbers.join(", ");
          resolve(evenNumbers);
        }, 1000); // Cypress expects this within 1 second
      });
    })
    .then((evenNumbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubledNumbers = evenNumbers.map((num) => num * 2);
          console.log("Doubled evens:", doubledNumbers);
          outputDiv.textContent = doubledNumbers.join(", ");
          resolve(doubledNumbers);
        }, 2000); // Cypress expects this within 2 seconds
      });
    })
    .catch((error) => {
      console.error("Error:", error);
      outputDiv.textContent = `Error: ${error}`;
    });
}

manipulateArray();
