// TREE TRAVERSAL
// Visit every node once
// Two main ways: Breadth First Search && Depth First Seacrh

//         10
//      6       15
//    3   8        20

// BREADTH FIRST SEARCH
// A top down approach.
// Create a queue (this can be an array) and a variable to store
// [10,6,15,3,8]
// DEPTH FIRST PREORDER
// [10,6,3,8,15,20]
// DEPTH FIRST POSTORDER
// [3,8,6,20,15,10]
// DEPTH FIRST INORDER
// [3,6,8,10,15,20]

// BFS vs DFS
// BFS: if narrow and deep, better for memory in queue.
// DFS: only have to keep track of nodes in a branch, will use less space if tree is wide

// DFS orients: InOrder, PostOrder, PreOrder
// "I just teach them so they know them"
// If you are going to add them to a data base in a certain order
// PreOrder: Great if you want to safe the order of the tree and reconstruct the tree because you know the root of the tree
// Overall, very easy to switch
// The bigger concer is breadth vs depth

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value); // create node
    if(this.root === null){ // if no root
      this.root = newNode; // assign it root
      return this;
    } else {
      var current = this.root; // start with root
      while(true){
        if(value === current.value) return undefined; // if same value return undefined
        if(value < current.value){ // if value is less than current value
          if(current.left === null){ // if current left is null
            current.left = newNode; // make it the left node
            return this;
          } else {
            current = current.left; // else move current node comparing to down to left node
          }
        } else if(value > current.value){ // else if value is greater than current value
          if(current.right === null){
            current.right = newNode; // make make right node the new node
            return this;
           } else {
             current = current.right; // else move down to right node and compare again
          }
        }
      }
    }
  }
  find(value){
    if(this.root === null) return false; // if root does not exist, return false
    var current = this.root, // make current start at the root
      found = false; // create variable called "found" that's false until we find node
    while(current && !found){ // while not at end of tree and haven't found it
      if(value > current.value){  // if the value is greater than
          current = current.right; // current is now the right node down tree
      } else if(value < current.value){ // else left side
          current = current.left;
        } else {
          found = true;
        }
    }
    if(!found) return undefined;
    return current;
  }
  BFS(){
    var node = this.root,  // create a queue (this can be an arra) and a variable to...
        data = [], // store the values of nodes visited
        queue = [];
    queue.push(node); // place root node in the queue
    
    while(queue.length){  // loop as long as there is anything in the queue
      node = queue.shift();  // dequeue a node from the queue and push the value...
      data.push(node.value); // of the node into the variable that stores the nodes
      if(node.left) queue.push(node.left); // if there is a left property of the node dequeued - add it to the queue
      if(node.right) queue.push(node.right); // same with right
    }
    return data; // return the vairalbe that stores the values
  }
  DFSPreOrder(){
    var data = [];
    function traverse(node){
      data.push(node.value)
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder(){
    var data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value)
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder(){
    var data = [];
    function traverse(node){
      if(node.left) traverse(node.left); // can also do node.left && traverse(node.left);
      data.push(node.value)
      if(node.right) traverse(node.right); // node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);