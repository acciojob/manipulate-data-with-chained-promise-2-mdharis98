// Function to create a promise that resolves with an array of numbers after 3 seconds
function getNumbers() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

// Function to display output in the div with id "output"
function updateOutput(text) {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = text;
}

// Start the promise chain
getNumbers()
  .then(numbers => {
    // Filter out odd numbers after 1 second
    return new Promise(resolve => {
      setTimeout(() => {
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        updateOutput(evenNumbers.join(", "));
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then(evenNumbers => {
    // Multiply the even numbers by 2 after another 2 seconds
    return new Promise(resolve => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        updateOutput(multipliedNumbers.join(", "));
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
