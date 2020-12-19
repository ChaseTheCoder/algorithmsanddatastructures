// Multiple Pointers Patterns

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
      return [arr[lef], arr[right]];
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
// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. ther can be negative numbers in the array, ubt it will always be sorted.

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

// COLT STEELE =========================================
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