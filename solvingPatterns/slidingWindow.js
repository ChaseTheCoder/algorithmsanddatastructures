// SLIDING WINDOW

// This pattern involves creating a window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes ( and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.
// ME: subtracts 1st index in sequence and adds in next so you don't have to loop each time

// Write a function called maxSubarraysSum which accepts an array of integers and a number called n.  The function should calculate the maximum sum of n consecutive elements in the array.
// Do not need to 
maxSubarraySum([1,2,5,2,8,1,5],2) // set of integers, max sum of this number of integers
maxSubarraySum([1,2,5,2,8,1,5],4) //17 [2,5,2,8]
maxSubarraySum([4,2,1,6],1)  //6
maxSubarraySum([],4) //null

// BAD
// Especially if you have to loop through 20 numbers and add together
// Inefficieant if we
function maxSubarraySum(arr, num){
  if (num > arr.length){
    return null;
  }
  var max = -Infinity;    // lowest number possible in case array hass all negative
  for (let i = 0; i < arr.length - num + 1; i++){
    temp = 0;                      // will store sum
    for(let j = 0; j < num; j++){
      temp += arr[i + j];
    }
  }
  if (temp > max){   // will compare max
    max = temp;       // will update max if it it largest, first will always be larger than -Infinity
  }
  return max;
}

// GOOD =========================================
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {  // adds first sequence of 'n' together
    maxSum += arr[i];  //returns as 1st max sum
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i]; //subtracts 1st value in sequence of 'n' and adds next value
    maxSum = Math.max(maxSum, tempSum);  // if value is larger than previous sequence, make it max sum.
  }
  return maxSum;
}