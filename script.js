function getNumbers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // Delay to match the initial promise resolution timing
  });
}

function updateOutput(text) {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = text;
}

getNumbers()
  .then(numbers => {
    return new Promise(resolve => {
      setTimeout(() => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        updateOutput(evenNumbers.join(", "));
        resolve(evenNumbers);
      }, 1000); // Cypress expects this to happen exactly after 1 second
    });
  })
  .then(evenNumbers => {
    return new Promise(resolve => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        updateOutput(multipliedNumbers.join(", "));
        resolve(multipliedNumbers);
      }, 2000); // Cypress expects this final result after an additional 2 seconds
    });
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
