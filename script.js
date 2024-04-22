//your JS code here. If required.
// JavaScript function to create and chain promises
function manipulateData(inputArray) {
  return new Promise((resolve, reject) => {
    // Resolve the promise after 3 seconds
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  })
  .then(array => {
    // Filter out odd numbers after 1 second
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        document.getElementById('output').innerText = evenNumbers.join(', ');
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then(evenNumbers => {
    // Multiply even numbers by 2 after 2 seconds
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const doubledNumbers = evenNumbers.map(num => num * 2);
        document.getElementById('output').innerText = doubledNumbers.join(', ');
        resolve(doubledNumbers);
      }, 2000);
    });
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });
}

// Example usage
const inputArray = [1, 2, 3, 4];
manipulateData(inputArray);
