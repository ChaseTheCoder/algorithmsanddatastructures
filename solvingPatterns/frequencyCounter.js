// FREQUENCY COUNTER

// accepts two arrays,  function should return true if every value in the second array has it's corresponding value squared in the sencond array.
same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false

// BAD: O(n^2) -------------------------------------------------------------
// function same(arr1, arr2) {
//   if(arr1.length !== arr12.length) {
//     return false;
//   }
//   for(let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2)  // loop nested inside loop O(n^2)
//     if(correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex,1)
//   }
//   return true;
// }

function same(arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for(let key in frequencyCounter1){
    if(!(key ** 2 in frequencyCounter2)){
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
      return false
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2)
  return true
}

same([1,2,3,2], [9,1,4,4])
same([1,1,1,2], [2,1,2,2])
