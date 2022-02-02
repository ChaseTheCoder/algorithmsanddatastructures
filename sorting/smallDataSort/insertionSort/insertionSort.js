// INSERTION SORT
// there are situations in which insertion is really good
// builds up the sort by gradually creating a larger left half which is always sorted
// takes first two and sorts, then takes every preceeding index and sorts into those that have been sorted
// Steel "it's easy to understand, which is probably the best thing about it"

// 5,3,4,1,2
// 3,5,4,1,2
// 3,4,5,1,2
// 1,3,4,5,2
// 1,2,3,4,5

function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--){ // take a value and move it forward
       arr[j+1] = arr[j];
       console.log(arr)
    }
    arr[j+1] = currentVal;
  }
  return arr;
}

insertionSort([2,1,9,76,4])

