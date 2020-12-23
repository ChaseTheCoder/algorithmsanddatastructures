// Multiple Pointers Patterns
// Creating POINTERS/values that correspond to an index of position and move the towards the beginning/middle/end based on certain ocndition.
// VERY efficient for solving problems with minimal space complexity.

//  function called sumZero which accepts a sorted array of integers. Function should find the first pair where the sum is 0.  Returned an array that includes both values that sum to zero or undefined if a pair does not exist.

//==============================================================================
// BAD  O(n^2)
// function sumZero(arr){
//   for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//       if(arr[i] + arr[j] === 0){
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }

// GOOD 0(n)
function sumZero(arr){
  let left = 0;
  let right = arr.length -1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){                      //is it zeor?
      return [arr[left], arr[right]];
    } else if(sum > 0){                 // i.e. if right abs value bigger go down index
      right--;
    } else {                          // else left abs value bigger so go up index
      left++;
    }
  }
}

sumZero([-4,-3,-2,-1,0,5,10])

//==============================================================================
//countUniqueValues
// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. there can be negative numbers in the array, but it will always be sorted.

// MY SOLUTION =========================================
function countUniqueValues(arr){
  const valueCount = {};
  for (let i = 0; i < arr.length; i++){
      let num = arr[i];
      valueCount[num] ? valueCount[num] += 1 : valueCount[num] = 1;
  }
  console.log(valueCount)  //returns key of unique value with value of number of times in arr
  const uniqueValues = Object.keys(valueCount);  //Object.keys returns array of only keys.
  console.log(uniqueValues)
  return uniqueValues.length;  // returns number of unique values i.e. keys
  // return uniqueValues.length;
}

countUniqueValues([1,1,1,2,3])

// STELE =========================================
function countUniqueValues1(arr){
  if(arr.length == 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++){ //j set to one ahead of i
    if(arr[i] !== arr[j]){  // if i does not equal j
      i++;                  // then move i up
      arr[i] = arr[j]      // and reset value equal to that of j
    }                      // until j gets to end of array
  }
  return i + 1;
}

//==============================================================================
// averagePair Solution
function averagePair(arr, num){
  let start = 0  
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++  // it's storted so no need to find averages of < avg
    // also if average of end and beginning are too low, need to go up a number
    else end--  // else move end index down
  }
  return false;
}
//==============================================================================
// isSubsequence Solution - Iterative
// MY SOLUTION
// function isSubsequence(str1, str2) {
//   if(str1.length > str2.length) return false;
//   let characters = 0;
//   let i = 0;
//   for(let j = 0; j < str2.length; j++){
//       if(str1[i] === str2[j]){
//           characters += 1;
//           i++;
//       }
//   }
//   return (characters = str1.length) ? true : false;
// }

//
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++; // if there is a match, move to next letter
    if (i === str1.length) return true; // if there is a match for all it's true
    j++; // else move to next letter
  }
  return false; // if it doesn't reach length, it's false
}
// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}

