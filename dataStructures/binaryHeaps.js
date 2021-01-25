// BINARY HEAPS
// Very similar to a binary search tree, but with some different rules!

// MaxBinaryHeap
// In a MaxBinaryHeap, parent nodes are always larger than child nodes
// Fill out, left to right
// For any index
// Left is 2n + 1    Right is 2n + 2
// For any child node at index n... its parent is at index (n-1) / 2 (floored)
// ADDING to the MaxBinaryHeap;
// Bubble Up: swap prarent and child becuase number is bigger
// Then compare it to the parent again, i.e. repeat process
// REMOVING from a heap;
// remove the root
// replace with the most recently added
// adjust(sink down)
// sink down: the procedure for deleting the root from the heap...
// (effectively extracting the maximum element in a max-heap or the minimum element ina min-heap)...
// and restoring the properties is called down-heap... 
// AKA bublle-down, percolate-down, sift-down, tricle down, heapify-down, cascade-down, extract-min/max

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class MaxBinaryHeap {
  constructor(){
    this.values = [];
  }
  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp(){
    let idx = this.values.length - 1; //create variable that stores the index of last value
    const element = this.values[idx]; // create variable that stores the object of last value
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2) // parent index of newly added value: index (n-1) / 2 (floored)
      let parent = this.values[parentIdx]; // save value of parent index
      if(element <= parent) break; // if element is less than parent, break and be done
      this.values[parentIdx] = element; // else save parent index where new element was
      this.values[idx] = parent; // swap new element where parent was
      idx = parentIdx; // change idx to new element's new index
    }
  }
  extractMax(){
    const max = this.values[0]; // set root value
    const end = this.values.pop(); // set end value
    this.values[0] = end; // swap root value with end value
    this.sinkDown(); // sift down until value is less than parents && > children
    return max; // return root that object that is no longer in Heap
  }
  sinkDown(){
    let idx = 0; // set root value index to zero
    const length = this.values.length; 
    const element = this.values[0]; // set element to object at root
    while(true){  // have root sink down to the correct spot by..
      let leftChildIdx = 2 * idx + 1; // set value for left child &&
      let rightChildIdx = 2 * idx + 2; // right child of element 
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < length){  // if left child index exists
        leftChild = this.values[leftChildIdx]; // set leftChild to object in left child
        if(leftChild > element){ // if left vlaue is greater than element vlaue
          swap = leftChildIdx; // set swap to left child index
        }
        if(rightChildIdx > length){ // if right child exists
          rightChild = this.values[rightChildIdx]; // set rightchild to object in left child
          if(
            (swap === null && rightChild > element) || // left child value was not bigger and ther is a right child or
            (swap !== null && rightChild > leftChild) // if left child was swapped and right child is bigger than left child
          ) {
            swap = rightChildIdx; // swap now equals right child index
          }
        }
        if(swap === null) break; // if swap has a value
        this.values[idx] = this.values[swap]; // index of the element will be swapped
        this.values[swap] = element; // swap's index now has value of element
        idx = swap; // idx will now equal swap
      }
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

// EXTRACTMAX
// heap
// Object {
//   values: [55, 39, 41, 18, 27, 12, 33]
// }
// heap.extractMax()
// 55
// heap
// Object {
//   values: [39, 33, 41, 18, 27, 12]
// }
