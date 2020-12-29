// BUBBLE SORT OPTIMIZATION
function bubbleSort(arr){
  let noSwaps;
  for(let i = arr.length; i > 0; i--){ //so we can use i in the definition of the loop for j
    noSwaps = true; // keeps it true
    for(let j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false; //
      }
    }
    if(noSwaps) break;
  }
  console.log("final: " + arr)
  return arr;
}

bubbleSort([37,45,29,8])

// [37, 45, 29, 8] 37 45
// [37, 45, 29, 8] 45 29
// [37, 29, 45, 8] 45 8
// [37, 29, 8, 45] 37 29
// [29, 37, 8, 45] 37 8
// [29, 8, 37, 45] 29 8
// "final: 8,29,37,45"