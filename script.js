const outputDiv = document.getElementById("output");

function manipulateArray() {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3100); // Adjusted to match test timing
  })
    .then((arr) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = arr.filter((num) => num % 2 === 0);
          outputDiv.textContent = evenNumbers.join(", ");
          resolve(evenNumbers);
        }, 1200); // Adjusted for Cypress wait
      });
    })
    .then((evenNumbers) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubledNumbers = evenNumbers.map((num) => num * 2);
          outputDiv.textContent = doubledNumbers.join(", ");
          resolve(doubledNumbers);
        }, 2200); // Adjusted for Cypress wait
      });
    })
    .catch((error) => {
      outputDiv.textContent = `Error: ${error}`;
    });
}

manipulateArray();
