// STACK
// LIFO data structure: last in, first out
// last element added to the stack will be the first element removed from the stack
// Like a stack of plates
// A series of nodes! 
// WHERE STACKS ARE USED
// manage function invocations
// undeo/redo
// Routing (the history object) is treated like a stack!

// There are more than one ways to implement a Stack
// It's a concept, a set of rules

// CREATING A STACK WITH AN ARRAY
var stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");
// stack
// (3) ["google", "instagram", "youtube"]
// stack.pop()
// "youtube"
// THE PROBLEM
// You can easily add something to beginning and then everything will get re-indexed

// A STACK CLASS
// PUSH it's pretty much the same as shift/unshift in linked list
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){ // should accept a value
    var newNode = new Node(val); // create a new node
    if(!this.first){ // if no nodes exist in stack...
      this.first = newNode; // ... set first & last to new Node
      this.last = newNode;
    } else { // if at least one node
      var temp = this.first; // create a variable that stores current first property
      this.first = newNode; // reset first to newNode
      this.first.next = temp; // set next property of node to previously created variable
    }
    return ++this.size; // increment size by 1
  }
  pop(){
    if(!this.first) return null; // if no nodes in the stack, return null
    var temp = this.first; // created temporary variable to store the firest property on the  stack
    if(this.first === this.last){ // if there is only 1 node, set the first & last property to be null
      this.last = null; 
    }
    this.first = this.first.next; // if more than one node set first property to be the next property on current first
    this.size--; // decrement the size by 1
    return temp.value; // return the value o fthe node removed
  }
}

// QUEUE -------------------------------------------------------------------
// FIFO: first in, first out
// Like a line at cash register
// Video game waiting to join a game, a queue structure 
// Uploading resources, printing/taskprocessing

// BIG O OF QUEUE
// insertion O(1), Removal O(1), Searching O(n), Access O(n)

// CREATING A QUEUE THE EASY WAY WITH AN ARRAY
var q = [];
q.push("First")
q.push("Second")
q.push("Third")
q.shift()
// "First"

// CREATING QUEUE WITH NODES
class Node {
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    var newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue(){
    if(!this.first) return null; // if no first property, just return null
    var temp = this.first; // store first property in variable
    if(this.first === this.last){ // see if first is same as the last 
      this.last = null;  // if so, set first and last to be null
    }
    this.first = this.first.next; // if there is more than 1 node, set the first property to be the enxt property of the first
    this.size--;  // decrement size by 1
    return temp.value;  // return value of the node dequeued
  }
}

// var q = new Queue()
// undefined
// q.enqueue("one")
// 1
// q.enqueue("two")
// 2
// q.dequeue()
// "one"