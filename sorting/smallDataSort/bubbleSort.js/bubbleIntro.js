// BUBBLE SORT
// sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order
// for now, focusing on array.
// Examples: alphabetical, smallest to largest, release year, movies based on revenue


//Built-In JavaScript Sorting
function compareByLen(str1, str2){
  return str1.length - str2.length; //shortest to greatest
}

// BUBBLE SORT
// takes an array and two  indexes
// compares index values and swaps them if needed
// old way ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1]  = arr[idx2];
  arr[idx2] = temp;
}

// ES2015 new way, not as readable
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}

//BUBBLE SORT PSEUDOCODE
// Start looping from the beginning to the end with a variable called i the end of the array towards the beginning
// start an inner loop with a variable called j from the beginning until i - 1
// if arr[j] is greater than arr[j+1], swap those two values!
// return the sorted array
// ok exammple
function bubbleSort1(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort1([37,45,29,8])
// [37, 45, 29, 8] 37 45
// [37, 45, 29, 8] 45 29
// [37, 29, 45, 8] 45 8
// [37, 29, 8, 45] 45 undefined
// [37, 29, 8, 45] 37 29
// [29, 37, 8, 45] 37 8
// [29, 8, 37, 45] 37 45
// [29, 8, 37, 45] 45 undefined
// [29, 8, 37, 45] 29 8
// [8, 29, 37, 45] 29 37
// [8, 29, 37, 45] 37 45
// [8, 29, 37, 45] 45 undefined
// [8, 29, 37, 45] 8 29
// [8, 29, 37, 45] 29 37
// [8, 29, 37, 45] 37 45
// [8, 29, 37, 45] 45 undefined

// BETTER
function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){ //so we can use i in the definition of the loop for j
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([37,45,29,8])
// Much shorter!!
// [37, 45, 29, 8] 37 45
// [37, 45, 29, 8] 45 29
// [37, 29, 45, 8] 45 8
// [37, 29, 8, 45] 37 29
// [29, 37, 8, 45] 37 8
// [29, 8, 37, 45] 29 8