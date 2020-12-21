// DIVIDE AND CONQUER

// This pattern involves dividing a set of data and then repeating a process with a subset of  data.
//This pattern can TREMENDOUSLY decrease time complexity

//Example
//given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. if the value is not found, return -1

//BAD
// Linear Search   O(n)
function search1(arr, val){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == value){
      return i;
    }
  }
  return -1;
}

function search(array, vall) {
  let min = 0;
  let max = array.length -1;
  while (min <= max) {
    let middle = Math.floor(min + max) / 2;
    let currentElement = array[middle];

    if(array[middle] < val) {
      min = middle +1
    }
    else if(array[middle] > val) {
      max = middle - 1;
    } 
    else {
        return middle;
      }
    }
  return -1;
}

search([1,2,3,4,5,6], 4)  //3
search([1,2,3,4,5,6], 6)  //5
search([1,2,3,4,5,6], 11) //-1