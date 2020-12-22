// FREQUENCY  COUNTERS: sameFrequency
// Given two positive integers, find out if the two numbers have the smae frequency of digits

// My solution
function sameFrequency(num1, num2){
  let ana1 = num1.toString();
  let ana2 = num2.toString();  
  if(ana1.length !== ana2.length){
      return false
  }
  let charSplit1 = ana1.split('')
  let charSplit2 = ana2.split('')
  console.log(charSplit1)
  console.log(charSplit2)
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of charSplit1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
  }
  for(let val of charSplit2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
  }
  for(let key in frequencyCounter1){
      if(!(key in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key] !== frequencyCounter1[key]){
          return false
      }
  }
  return true
}

// STEELE


// FREQUENCY COUNTER/ MULTIPLE POINTERS: areThereDuplicates
// accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed. You can solve this using the frequency counter pattern OR the multiple pointers pattern
