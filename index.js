
function hasTargetSum(arr, target) {
  const seenNumbers = {}; // Initialize an empty object

  for (let num of arr) {
    const difference = target - num;
    if (seenNumbers[difference]) {
      // If the difference is seen, return true
      return true;
    }
    seenNumbers[num] = true; // Add the current number to seenNumbers
  }

  // If no pairs are found, return false
  return false;
}

// Example usage and testing
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Expected: true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // Expected: true
console.log(hasTargetSum([1, 2, 5], 4)); // Expected: false
console.log(hasTargetSum([], 10)); // Expected: false
console.log(hasTargetSum([1, 1, 1, 1, 1], 3)); // Expected: true

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
