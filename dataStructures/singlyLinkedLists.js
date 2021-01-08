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