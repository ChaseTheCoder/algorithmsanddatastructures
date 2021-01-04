// QUICK SORT
// like merge sort, exploits the fact that arrays of 0 or 1 element are always  sorted
// works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
// once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// [5,2,1,8,4,7,6,3] // pick arr[0]
// [3,2,1,4,  *5*  ,7,6,8] // sort less than to left, more than to right
// [2,1,*3*,4,   5,   7,6,8]recursively repeat on left and right side
// [1,2,3,4,   5,   7,6,8]
// [1,2,3,4,   5,   6,7,8]

// Pivot Pseudocode
// It will help to accept three arguments: array, start index, end index (can default to 0 and array length minus 1)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
//        if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index

function pivot(arr, start=0, end = arr.length - 1){
  const swap = (arr, idx1, idx2) => {
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
  }
  
  let pivot = arr[start];
  let swapIdx = start;

  for(let i = start + 1; i <= end; i ++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i)
    }
  }
  swap(arr, start, swapIdx);
  console.log(swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1){
  if(left < right){
    let pivotIndex = pivot(arr, left, right)
    //left
    quickSort(arr,left,pivotIndex-1)
    //right
    quickSort(arr,pivotIndex+1,right);
  }
  console.log(arr);
  return arr;
}

quickSort([4,8,2,1,5,7,6,3])

pivot([4,8,2,1,5,7,6,3])
// [4|,8,|2,1,5,7,6,3]
// [4,2|,8,|1,5,7,6,3]
// [4,2,1|,8,|5,7,6,3]
// [4,2,1|,8,5,|7,6,3]
// [4,2,1|,8,5,7,|6,3]
// [4,2,1|,8,5,7,6,|3]
// [4,2,1,3|,8,5,7,6]
// [2,1,3,|4|,8,5,7,6]
//         4  // this is now in place and not moving index
//  3,2,1,    6,9,5
//      3       6
//  2,1        5  9
//    2    
//  1

// BIG O:  BestCase: O(log n)   
// WorstCase: if all is sorted, each decomposition is one item (first, i.e. lowest) results in O(n)
//      fix by choosing middle element or random