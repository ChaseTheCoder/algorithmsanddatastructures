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
  for(let val of arr1){ //way to iterate through
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1  // || 0, will initiate a value and then +1 will add that initial value
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


// ANAGRAM -----------------------------------------------
// MY SOLUTION =========================================
// function validAnagram(ana1, ana2){
//   if(ana1.length !== ana2.length){
//       return false
//   }
//   let charSplit1 = ana1.split('')
//   let charSplit2 = ana2.split('')
//   let frequencyCounter1 = {}
//   let frequencyCounter2 = {}
//   for(let val of charSplit1){
//       frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
//   }
//   for(let val of charSplit2){
//       frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
//   }
//   for(let key in frequencyCounter1){
//       if(!(key in frequencyCounter2)){
//           return false
//       }
//       if(frequencyCounter2[key] !== frequencyCounter1[key]){
//           return false
//       }
//   }
//   return true
// }

// validAnagram("aaz", "zza")
// validAnagram("anagram", "nagaram")

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letters exists, increment, otherwise set to 1 
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  return true
}