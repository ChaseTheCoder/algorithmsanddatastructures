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
function sameFrequency1(num1,  num2){
  let strNum1 = num1.tostring();
  let strNum2 = num2.tostring();

  let countNum1 = {};
  let countNum2 = {};

  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[j]] || 0) + 1
  }

  for(let j = 0; j < strNum2.length; j++){
    countNum2[strNum1[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

// FREQUENCY COUNTER/ MULTIPLE POINTERS: areThereDuplicates
// accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed. You can solve this using the frequency counter pattern OR the multiple pointers pattern
// areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

// areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

//areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}