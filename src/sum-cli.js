/*
  Write a node program that takes in an unlimited number
  of command line arguments, goes through each and prints
  out the sum of them. If any argument is not a whole
  number, skip it. Do support negative numbers though.
*/

// Collect user arguments
const getArguments = function() {
  return process.argv.slice(2);
};

const getSum = function(numbers) {
  let total = 0;
  // Iterate over each argument (L - loop)
  numbers.forEach(number => {
    number = Number(number);

    // Check if number is whole or not (C in conditionals)
    if (number % 1 === 0 && !isNaN(number)) {
      // if whole: Add two numbers together
      total = total + number;
    }
  });

  return total;
};

// Print out the resulting sum
console.log("sum is: ", getSum(getArguments()));
