// SINGLY LINKED LISTS
// It's a list 
// data structure that contains a head, tail and length property.
// Linked Lists consists of nodes, and each node has a value and a pointer to another node or null
// One node connects to the next node, no indexes like arrays
// One node is singly linked to the next node
// 22->2->77->6->43->76->89
// want to search for 43, must start at the beginning and then keep going to the next
// if you want to insert to the middle

// COMPARISONS WITH ARRAYS
// LISTS
// do not have indexes
// Connected via nodes with a next pointer
// Random access is not allowed, can't access 10th item
//     i.e. have to walk up to the 10th floor rather than taking elevator directly to 10th floor
// main reason to use is insertion and deletion, don't need in specific order

// ARRAYS
// Indexes in order
// Insertion and deletion can be expensive
// Can quickly be accessed at a specific index


// piece of data - val; reference to next node -next

class Node {
  constructor(val){
    this.val = val; 
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val)
}

// BAD WAY
// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

// GOOD
var list = new SinglyLinkedList()
list.push("HELLLO")
list.push("GOODBYE")


// PUSHING PSEUDOCODE
// 1. Function should accept a value, create new node using value passed to the function
// 2. if there is no head property on the list, set the head and tail to be the newly created node
// 3. Otherwise set next property on the tail to be the new node and set the tail property on the list to be the newly created node
// 4. Increment the length by one
// 5. Return the linked list

class Node {
  constructor(val){
    this.val = val; 
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){  /// this code here is push
    var newNode = new Node(val)
    if(!this.head){  // 2. if no head property on list...
      this.head = newNode;  // make it head
      this.tail = this.head; // and make tail
    } else { // 3. set next property on the tail to be the new node..
      this.tail.next = newNode; //we took the current tail, we added on to the end of it
      this.tail = newNode; // move the tail marker over one
    }
    this.length++; // 4.
    return this; // 5.
  }
}

var list = new SinglyLinkedList()
list.push("HELLO")
// list.push("HI")
// list.push("YOU")
// what is returned:
// SinglyLinkedList {head: Node, tail: Node, length: 3}
// head: Node {val: "HI", next: Node}
// length: 3
// tail: Node {val: 99, next: null}

// POPING ----------------------------------------------
// REMOVING A NODE FROM THE END OF THE LINKED LIST
// It's difficult becuase we have to reassign tail by,
// going through linked list and go to second to last item to rename it the tail
// first, find 2nd to last in List, cut off the last, and then delete last
// POPPING PSEUDOCODE
// 1. If there are no nodes in the list, return undefined
// 2. Loop through the list until you reach the tail
// 3. Set the next property of the 2nd to last node to be null
// 4. Set the tail to be the 2nd to last node
// 5. Decrement the length of the list by 1
// 6. Return the value of the node removed

class Node {
  constructor(val){
    this.val = val; 
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    var newNode = new Node(val)
    if(!this.head){ 
      this.head = newNode;
      this.tail = this.head; 
    } else { 
      this.tail.next = newNode; 
      this.tail = newNode; 
    }
    this.length++;
    return this; 
  }
  // traverse(){
  //   var current = this.head; //we start at head (the beginning)
  //   while(current){ // while there is a current,
  //     console.log(current.val); 
  //     current = current.next; // set current to the next // A;
  //   }
  // }
  pop(){
    if(!this.head) return undefined; // 1. If there are no nodes in the list, return undefined
    var current = this.head;
    var newTail = current;
    while(current.next){ //2. Loop through the list until you reach the tail
      newTail = current; // moves up to current
      current = current.next;// current moves up to next list item
    }
    this.tail = newTail; // 4. Set the tail to be the 2nd to last node
    this.tail.next = null  // 3. Set the next property of the 2nd to last node to be null
    this.length--;
    if(this.length == 0){ // must change to null if nothing in list
      this.head = null; 
      this.tail = null;
    }
    return current; // B;
  }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
// A;
// list.traverse()
// "HELLO"
// "GOODBYE"
// "!"
// undefined  // hits end so it returns undefined

// B;
// list.pop()
// Object {
//   next: null,
//   val: "!"
// }

// SHIFT PSUEDOCODE ----------------------------------------------
class Node {
  constructor(val){
    this.val = val; 
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    var newNode = new Node(val)
    if(!this.head){ 
      this.head = newNode;
      this.tail = this.head; 
    } else { 
      this.tail.next = newNode; 
      this.tail = newNode; 
    }
    this.length++;
    return this; 
  }
  pop(){
    if(!this.head) return undefined; 
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length == 0){ 
      this.head = null; 
      this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined; // 1. If there are no nodes, return undefined
    var currentHead = this.head; // 2. Store the current head property in variable
    this.head = currentHead.next; // 3. Set the head property to be the current head's next property
    this.length--; // 4. Decrement the length by 1
    if(this.length === 0){
      this.tail = null;
    }
    return currentHead; // 5. Return the value of the node removed
  }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")

// UNSHIFT PSUEDOCODE ----------------------------------------------

class Node {
  constructor(val){
    this.val = val; 
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    var newNode = new Node(val)
    if(!this.head){ 
      this.head = newNode;
      this.tail = this.head; 
    } else { 
      this.tail.next = newNode; 
      this.tail = newNode; 
    }
    this.length++;
    return this; 
  }
  pop(){
    if(!this.head) return undefined; 
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length == 0){ 
      this.head = null; 
      this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val){ // 1. function should accept a value
    var newNode = new Node(val) // 2. create new node using the value passed to the function
    if(!this.head){ // 3. if there is no head property on the list, set the head and tail to be the newly created node
      this.head = newNode;
      this.tail = this.head; 
    } else { // 4. otherwise set the newly created node's next property to the current head property on the list
        newNode.next = this.head;
        this.head = newNode; // 5. set the head property on the list ot be that newly created node
        this.length++; // 6. increment the lingth of the list by 1
        return this; // 7. return the linked list
    }
  }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")

// list
// Object {
//   head: Object {
//     next: Object {},
//     val: "HELLO"
//   },
//   length: 3,
//   tail: Object {
//     next: null,
//     val: "!"
//   }
// }
// list.unshift("FIRST");
// Object {
//   head: Object {
//     next: Object {},
//     val: "FIRST"
//   },
//   length: 4,
//   tail: Object {
//     next: null,
//     val: "!"
//   }
// }

// GET PSUEDOCODE ----------------------------------------------

class Node {
  constructor(val){
    this.val = val; 
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    var newNode = new Node(val)
    if(!this.head){ 
      this.head = newNode;
      this.tail = this.head; 
    } else { 
      this.tail.next = newNode; 
      this.tail = newNode; 
    }
    this.length++;
    return this; 
  }
  pop(){
    if(!this.head) return undefined; 
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length == 0){ 
      this.head = null; 
      this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val){ 
    var newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = this.head; 
    } else {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
  }
  get(index){ // 1. function should accept an index
    if(index < 0 || index >= this.length) return null // 2. if index is less than zero or greater than or equal to the length of the list, return null
    var counter = 0;
    var current = this.head;
    while(counter !== index){ 
      current = current.next;
      counter++;
    }
    return current;
  }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
// list.get(-1)
// null
// list.get(100)
// null
// list.get(1)
// Object {
//   next: Object {
//     next: null,
//     val: "!"
//   },
//   val: "GOODBYE"
// }

// SET PSUEDOCODE ----------------------------------------------
class Node {
  constructor(val){
    this.val = val; 
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    var newNode = new Node(val)
    if(!this.head){ 
      this.head = newNode;
      this.tail = this.head; 
    } else { 
      this.tail.next = newNode; 
      this.tail = newNode; 
    }
    this.length++;
    return this; 
  }
  pop(){
    if(!this.head) return undefined; 
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length == 0){ 
      this.head = null; 
      this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val){ 
    var newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = this.head; 
    } else {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
  }
  get(index){
    if(index < 0 || index >= this.length) return null
    var counter = 0;
    var current = this.head;
    while(counter !== index){
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val){ // 1. function should accept a value and an index
    var foundNode = this.get(index); // 2. use your GET function to find the specific node
    if (!foundNode) { // 3. if node is not found, return false
      return false;
    } else { // 4. if node is found, set value of that node to be the value passed to the function and return true
      foundNode.val = val;
      return true;
    }
  }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
// list.set(2, "!!!")
// true
// list.get(2)
// Object {
//   next: null,
//   val: "!!!"
// }

// INSERT PSUEDOCODE ----------------------------------------------
class Node {
  constructor(val){
    this.val = val; 
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    var newNode = new Node(val)
    if(!this.head){ 
      this.head = newNode;
      this.tail = this.head; 
    } else { 
      this.tail.next = newNode; 
      this.tail = newNode; 
    }
    this.length++;
    return this; 
  }
  pop(){
    if(!this.head) return undefined; 
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length == 0){ 
      this.head = null; 
      this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val){ 
    var newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = this.head; 
    } else {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
  }
  get(index){
    if(index < 0 || index >= this.length) return null
    var counter = 0;
    var current = this.head;
    while(counter !== index){
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val){ 
    var foundNode = this.get(index);
    if (!foundNode) {
      return false;
    } else {
      foundNode.val = val;
      return true;
    }
  }
  insert(index, val){ 
    if(index < 0 || index > this.length) return false; // 1. if the index is less than zero or greater than the length, return false
    if(index === this.length) return this.push(val); // 2. if the index is the same as the length, push a new node to the end of the list
    if(index === 0) return this.unshift(val); // 3. if the index is 0, unshift a new node to the start of the list
    var newNode = new Node(val);
    let prev = this.get(index - 1); // 4. otherwise, using the  get method, access the node at the index -1 
    var temp = prev.next; // 5. set next property on that node to the new node
    prev.next = newNode;
    newNode.next = temp; // 6. set the property on the new node to be the previous next
    this.length++; // 7. increment the  length
    return true; // 8. return true
  }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")

// list.insert(1, "MIDDLE")
// true
// list.get(0)
// Object {
//   next: Object {
//     next: Object {},
//     val: "MIDDLE"
//   },
//   val: "HELLO"
// }

// REMOVE PSUEDOCODE ----------------------------------------------
class Node {
  constructor(val){
    this.val = val; 
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    var newNode = new Node(val)
    if(!this.head){ 
      this.head = newNode;
      this.tail = this.head; 
    } else { 
      this.tail.next = newNode; 
      this.tail = newNode; 
    }
    this.length++;
    return this; 
  }
  pop(){
    if(!this.head) return undefined; 
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length == 0){ 
      this.head = null; 
      this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val){ 
    var newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = this.head; 
    } else {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
  }
  get(index){
    if(index < 0 || index >= this.length) return null
    var counter = 0;
    var current = this.head;
    while(counter !== index){
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val){ 
    var foundNode = this.get(index);
    if (!foundNode) {
      return false;
    } else {
      foundNode.val = val;
      return true;
    }
  }
  insert(index, val){ 
    if(index < 0 || index >= this.length) return false; 
    if(index === this.length) return this.push(val);
    if(index === 0) return this.unshift(val);
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index){
    if(index < 0 || index >= this.length) return undefined; // 1. if the index is less than zero or greater than the length, return undefined
    if(index === this.length - 1) return this.pop(val); // 2. if the index is the same as the length - 1, pop
    if(index === 0) return this.shift(); // 3. if the index is 0, shift
    var previousNode = this.get(index - 1); // 4. otherwise, using the get method, access the node at the index -1 
    var removed = previousNode.next;
    previousNode.next = removed.next; // 5. set the next properrty on that node to the next of the next node
    this.length--; // 6. decrement the  length
    return removed; // 7. return value of node removed
  }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")

// list.remove(1)
// Object {
//   next: Object {
//     next: null,
//     val: "!"
//   },
//   val: "GOODBYE"
// }
// list
// Object {
//   head: Object {
//     next: Object {},
//     val: "HELLO"
//   },
//   length: 2,
//   tail: [circular bject
// }
// list.get(1)
// Object {
//   next: null,
//   val: "!"
// }

// REVERSE PSUEDOCODE ----------------------------------------------
class Node {
  constructor(val){
    this.val = val; 
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    var newNode = new Node(val)
    if(!this.head){ 
      this.head = newNode;
      this.tail = this.head; 
    } else { 
      this.tail.next = newNode; 
      this.tail = newNode; 
    }
    this.length++;
    return this; 
  }
  pop(){
    if(!this.head) return undefined; 
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length == 0){ 
      this.head = null; 
      this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val){ 
    var newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = this.head; 
    } else {
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
  }
  get(index){
    if(index < 0 || index >= this.length) return null
    var counter = 0;
    var current = this.head;
    while(counter !== index){
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val){ 
    var foundNode = this.get(index);
    if (!foundNode) {
      return false;
    } else {
      foundNode.val = val;
      return true;
    }
  }
  insert(index, val){ 
    if(index < 0 || index >= this.length) return false; 
    if(index === this.length) return this.push(val);
    if(index === 0) return this.unshift(val);
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === this.length - 1) return this.pop(val);
    if(index === 0) return this.shift();
    var previousNode = this.get(index - 1); 
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse(){
    var node = this.head // 1. swap head and tail // 4. create variable called node and initialize  it to the head property
    this.head = this.tail;
    this.tail = node; 
    var next; // 2. create a variable called next
    var prev = null; // 3. create a varialbe called prev
    for(let i = 0; i < this.length; i++){ // 5. loop through the list
      next =  node.next; // 6. set next to be next property on whatever node is
      node.next = prev; // 7. set the next property on the node to be whatever prev is
      prev = node; // 8. set prev to be the value of the node variable
      node = next; // 9. set the node variable to be the value of the next variable
    }
    return this;
    
  }
  print(){
    var arr = [];
    var current = this.head
    while(current){
      arr.push(current.val)
      current = current.next
    }
    console.log(arr);
  }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")

// BIG O of Singly Linked Lists
// Insertion - O(1)
// Removal - it depends... O(1) or O(N)
// Searching  O (n)
// Access - O(n)