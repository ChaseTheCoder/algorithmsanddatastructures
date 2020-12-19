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

// GOOD
