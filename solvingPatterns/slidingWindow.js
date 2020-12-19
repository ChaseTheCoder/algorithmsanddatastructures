// SLIDING WINDOW

// This pattern involves creating a window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes ( and a new window is created)
// Ver useful for keeping track of a subset of data in an array/string etc.

// Write a function called maxXubarraysSum which accepts an array of integers and a number called n.  The function should calculate the maximum sum of n consecutive elements in the array.
// Do not need to 
maxSubarraySum([1,2,5,2,8,1,5],2) // set of integers, max sum of this number of integers
maxSubarraySum([1,2,5,2,8,1,5],4) //17 [2,5,2,8]
maxSubarraySum([4,2,1,6],1)  //6
maxSubarraySum([],4) //null

// BAD
function maxSubarraySum(arr, num){
  if (num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++){
    temp = 0;
    for(let j = 0; j < num; j++){
      temp += arr[i + j];
    }
  }
  if (temp > max){
    max = temp;
  }
  return max;
}