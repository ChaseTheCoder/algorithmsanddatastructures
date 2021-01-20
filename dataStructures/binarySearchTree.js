// Binary Trees
// TREE
// data structure that consists of nodes in a parent/child relationship
// typically top down, trunk at the top
// Lists are lindear
// Trees are non-linear, many paths you can take
// NOT A TREE if there is child pointing to child
// Every node has one parent, one entry point
// ROOT: top node in a tree
// CHILD: node directly connected to another node when moving away from the Root
// PARENT: the converse notion of a child
// SIBLINGS: a group of nodes with the same parent
// LEAF: a node with no children
// EDGE: connection between one node and another
// TREES USED FOR:
// HTML DOM
// Network Routing
// Abstract Syntax Tree
// Artificial Intelligence (tik tack toe)
// Folders in Operating Systems
// Computer File Systems

// TREE: can have any number of children, no rules of how many
// BINARY TREE: can have one or two children, cannot have more
// BINARY SEARCH TREE: Have at most two children, kept in an order
//    -way for you to order and compare things
//    -if you take any node, less then to the left, greater than to the right
//      - can repeat that as you go down the tree
//    -every node to the left of a parent node is ALWAYS LESS than the parent
//    -every node to the right of a parent node is ALWAYS GREATER than the parent
// Why order this way? Makes it easy to search sorted tree

// BIG O
// Insertion & searching: O(logN)
// Not guaranteed! a one sided tree that looks like a linear line/singly linked list

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
      if(value === current.value) return undefined; // if same value return undefined
      while(true){
        if(value < current.value){ // if value is less than current value
          if(current.left === null){ // if current left is null
            current.left = newNode; // make it the left node
            return this;
          } else {
            current = current.left // else move current node comparing to down to left node
          }
        } else if(value > current.value){ // else if value is greater than current value
          if(current.right === null){
            current.right = newNode; // make make right node the new node
            return this;
          }
        } else {
          current = current.right // else move down to right node and compare again
        }
      }
    }
  }
  find(value){
    if(this.root = null) return false; // if root does not exist, return false
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
}

// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node (15);
// tree.root.left = new Node(15)

// INSERT & FIND
// let tree = new BinaryTreeSearch();
// tree.insert(10)
// Object {
//   root: Object {
//     left: null,
//     right: null,
//     value: 10
//   }
// }
// tree.insert(15)
// Object {
//   root: Object {
//     left: null,
//     right: Object {},
//     value: 10
//   }
// }
// tree.insert(5)
// Object {
//   root: Object {
//     left: Object {},
//     right: Object {},
//     value: 10
//   }
// }
// tree.insert(2)
// Object {
//   root: Object {
//     left: Object {},
//     right: Object {},
//     value: 10
//   }
// }
// tree.root.left.left
// Object {
//   left: null,
//   right: null,
//   value: 2
// }
// tree.find(10)
// Object {
//   left: Object {
//     left: Object {},
//     right: null,
//     value: 5
//   },
//   right: Object {
//     left: null,
//     right: null,
//     value: 15
//   },
//   value: 10
// }
// tree.find(2)
// Object {
//   left: null,
//   right: null,
//   value: 2
// }