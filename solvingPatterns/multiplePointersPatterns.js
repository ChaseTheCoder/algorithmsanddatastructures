// Multiple Pointers Patterns

//  function called sumZero which accepts a sorted array of integers. Function should find the first pair where the sum is 0.  Returned an array that includes both values that sum to zero or undefined if a pair does not exist.
function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}