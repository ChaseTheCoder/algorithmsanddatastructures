// MERGE SORT
// Well known, created back in 1948 by Jonathan Von Noyman
// Combination of things: splitting up things, merging, sorting
// exploits the fact that arrays of 0 or 1 element are always sorted
// works by deocmposing an array into smaller arrays of 0 or 1 elements, then merge them back together
// 8,3,5,4,7,6,1,2
// 8,3,5,4,  7,6,1,2  //split
// 8,3  5,4,  7,6  1,2  // split
// 8 3  5 4   7 6  1 2  // split
// 3,8  4,5  6,7  1,2 // merge two together, now know they are sorted
// 3,
// GIVEN TWO ARRAYS WHICH ARE SORTED, THIS HELPER FUNCTION SHOULD CREATE A NEW ARRAY WHICH IS ALSO SORTED, AND CONSISTS OF ALL OF THE ELEMENTS IN THE TWO INPUT ARRAYS
// Big O: should run in O(n+m)

// PSUEDOCODE
// create an empty array take a look at the smallest values in each input array
// while there are still values we haven't looked at..
//       if the values in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
//       if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
//      once we exhasue one array, push in all remaining values from the other array

function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++;
    }
  }
  while(i < arr1.length) {
    results.push(arr1[i])
    i++;
  }
  while(j < arr2.length) {
    results.push(arr2[j])
    j++;
  }
  console.log(results);
  return results;
}

merge([1,10,50],[2,14,99,100])

// mergeSort Psuedocode
// break up the array into halves until you have arrays that are empty or have one element
// once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// once the array has been merged back together, return the merged (and sorted!) array

function mergeSort(arr){ // arr = (2) [10,24]
  if(arr.length <= 1) return arr; // no,skip
  let mid = Math.floor(arr.length/2); // mid = 1
  let left = mergeSort(arr.slice(0,mid)); // left = [10]
  let right = mergeSort(arr.slice(mid)); //right = [24]
  return merge(left, right);
}

mergeSort([10,24,76,73])

// BIG O: best/worst:O(n log n)    space complexity: O(n)