// FREQUENCY COUNTER

// accepts two arrays,  function should return true if every value in the second array has it's corresponding value squared in the sencond array.
same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false

function same(arr1, arr2) {
  if(arr1.length !== arr12.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)  // loop nested inside loop O(n^2)
    if(correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex,1)
  }
  return true;
}