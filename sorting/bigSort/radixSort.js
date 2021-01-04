// RADIX SORT
// Can we do better? by no making direct comparison
// Radix sort is a special sorting algorithm that works on lists of numbers
// It never makes comparisons between elements!
// It exploits the fact that information about the size of a number is encoded in the number of digits
// More digits means a bigger number!

// How does it work?
// [1556, 4,3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]

// sort by right most digit and put into buckets
// 0
// 1
// 2 902
// 3 593
// 4 4
// 5
// 6 56 4386 3556 1556
// 7 9637 8157 7
// 8 408
// 9 29
// sort them back into array
// [902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29]
// sort by next digit to the left
// 0 408 7 4 907    /// one digit numbers don't have digit so it goes in zero
// 1
// 2 29
// 3 9637
// 4 
// 5
// 6 8157 3556 1556
// 7 
// 8 86 4386
// 9 593
// [902,4,7,408,29,9637,1556,3556,8157,4386,86,593]
// repeat
// 0 4 7 29 86
// 1 8157
// 2 
// 3 4386
// 4 408
// 5 593 3556 1556
// 6 9637
// 7 
// 8 
// 9 902

// repeat
// 0 4 7 29 86 408 593 902
// 1 1556
// 2 
// 3 3556
// 4 4386
// 5 
// 6 
// 7 
// 8 8157
// 9 9637
// [0 4 7 29 86 408 593 902 1556 3556 4386 8157 9637]

// RADIX SORT HELPERS
// In order to implement radix sort, it's helpful to build a few helper functions first:
// getDigit(num, place) - returns the digit in (num) at the given (place) value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; 
}

// we need to know how many times to sort things into buckets
// ne
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++){
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// PSEUDOCODE
// Define a function that accpets list of numbers
// Figure out how many digits the largest number has
// Loop from k = 0 up to this largest number of digits
// for each iteration of the loop:
    // Create buckets for each digit(0 to 9)
    // place each number in the corresponding bucket based on its k-th digit