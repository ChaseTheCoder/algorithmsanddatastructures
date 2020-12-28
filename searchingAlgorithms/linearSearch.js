// LINEAR SEARCH
// Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.
// JavaScript methods:
// indexOf
// includes
// find
// findIdex 

// LINEAR SEARCH PSEUDOCODE
// accepts array & value; loop through array, check if vurrent array element is equal to value
// if it is, return the index at which element if found
// iv vlaue is never found return -1

// BINARY SEARCH
// Binary search is a muhc faster form of search rather than eliminating one lement at a time, you can eliminate half of the reminaing elements at a time
// binary search only works on SORTED ARRAYS
// DIVIDE  AND CONQUER
// find middle, then left and right

// BINARY SEARCH PSEUDOCODE
// accepts sorted array and value
// create a left pointer at the start of the array, and a right pointer at the end of the array
// while left pointer comes before the right pointer:
//  -create a pointer in the middle
//  -if you find the value you want, return index
//  -if the value is too small, move the left pointer up
//  -if the value is too large, move the right pointer down
//  if you never find the value, return -1
// GOOD
function binarySearch(arr, elem){
  let start = 0;
  let end = arr.length -1;
  let middle = Math.floor((start + end) / 2);
  //console.log(start, middle, end)
  while(arr[middle] !== elem && start <= end){
      //console.log(start, middle, end)
    if(elem < arr[middle]){
      end = middle -1;
    } else {
      start = middle + 1;
    } 
    let middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === elem){
    return middle;
  }
  return -1;
}
// SAME BUT SHORTER
function binarySearch(arr, elem){
  let start = 0;
  let end = arr.length -1;
  let middle = Math.floor((start + end) / 2);
  //console.log(start, middle, end)
  while(arr[middle] !== elem && start <= end){
      //console.log(start, middle, end)
    if(elem < arr[middle]) end = middle -1;
    else start = middle + 1;
    let middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}