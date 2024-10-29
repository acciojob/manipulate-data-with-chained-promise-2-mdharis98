//your JS code here. If required.
// Function that returns a promise resolving with an array of numbers
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); // Resolves after 3 seconds
  });
}

// Function to filter out odd numbers
function filterEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const evenNumbers = numbers.filter(num => num % 2 === 0);
      document.getElementById("output").textContent = evenNumbers.join(", ");
      resolve(evenNumbers);
    }, 1000); // Resolves after 1 second
  });
}

// Function to multiply even numbers by 2
function multiplyEvenNumbers(numbers) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multiplied = numbers.map(num => num * 2);
      document.getElementById("output").textContent = multiplied.join(", ");
      resolve(multiplied);
    }, 2000); // Resolves after 2 seconds
  });
}

// Chaining promises
getNumbers()
  .then(filterEvenNumbers)
  .then(multiplyEvenNumbers)
  .catch((error) => {
    console.error("Error:", error);
  });
