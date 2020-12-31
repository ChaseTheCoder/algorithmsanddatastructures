// SELECTION SORT
// Find smallest number and sort to beginning until all are sorted
// PSEUDOCODE
// -store the first element as the smallest value you've seen so far
// - compare this item to the next item in the array until you find a smaller number
// -if a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
// -If the "minimum" is not the value (index) you initially began with, swap the two values.

// WHAT'S HAPPENING 
// starts at first index, loops through indexes above i, replaces i with j which will be lowest number
// BIG O
// O(n^2)
// minimize number of swaps you're making
// good if: we're worried about writing to memory we're worried about actually doing the swap
// it's easy, but not efficient/quick

function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let lowest = i;
    for(let j = i+j; j < arr.length; j++){
      // console.log(i,j)
      if(arr[j] < arr[lowest]){
        lowest = j;  
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}

selectionSort([34,22,10,19,17]);

"i & j 0,1"
"i & j 0,2"
"i & j 0,3"
"i & j 0,4"
"i & j 1,2"
"i & j 1,3"
"i & j 1,4"
"i & j 2,3"
"i & j 2,4"
"i & j 3,4"