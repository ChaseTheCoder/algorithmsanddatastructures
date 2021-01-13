// DOUBLY LINKED LISTS
// Almost identical to Singly LinkedLists, except every node has another pointer, to the previous node!
// like single link, but has a previous
// Pro: more flexibility
// Con: more memory used
// PUSH add node to the end 
// POP removing a node from the end
// SHIFT removing a node from the beginning
// UNSHIFT adding a node to the beginning
// GET return node information
// SET replacing the value of a node 
// INSERT insert node at place other than head or tail
// REMOVE

// Big O of Doubly Linked Lists
// Insertion - O(1)
// Removal - Object(1)
// Searching - O(n)
// Access - O(n)
// Technically searching is O(n/2), but that's still O(n)

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    var newNode = new Node(val) // 1. create new node 
    if(this.length === 0){// 2. if head is null, set head and tail to newly created node
      this.head = newNode;
      this.tail = newNode; 
    } else { 
      this.tail.next = newNode; // 3. if not, set next property on tail to be that node
      newNode.prev = this.tail; // 4. set previous property on newly created node to be the tail
      this.tail = newNode; // 5. set tail to be newly created node
    }
    this.length++;
    return this; 
  }
  pop(){
    if(!head) return undefined; // 1. if no head, return undefined
    var poppedNode = this.tail; // 2. store current tail in a variable  to return later
    if(this.length === 1){ // 3. if length is 1, set head and tail to be null
      this.head = null; 
      this.tail = null;
    } else {
      this.tail = poppedNode.prev; // 4. update tail to be previous Node
      this.tail.next = null; // 5. set newTail's next to null
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift(){
    if(!this.head) return undefined; // 1. if length is 0, return undefined
    var oldHead = this.head; // 2. store current head property in variable
    if(this.length === 1){ // 3. if length is one
      this.head = null; // set head to be null
      this.tail = null; // set tail to be null
    } else {
      this.head = oldHead.next; // 4. update head to be net of the old head
      this.head.prev = null; // 5. set head's prev property to null
      oldHead.next = null; // 6. set old head's next to null
    }
    this.length--; 
    return oldHead;
  }
  unshift(val){
    var newNode = new Node(val) // 1. create a new node with the value passed to the function
    if(length === 0){ // 2. If the length is 0
      this.head = newNode; // set head to be the new node
      this.tail = newNode; // set tail to be the new node
    } else { 
        this.head.prev = newNode; // 3. set prev property on the head of the list to be the new node
        newNode.next = this.head; // 4. set next property on the new node to be the head property
        this.head = newNode; // 5. update the  head to be the new node
    }
    this.length++;
    return this;
  }
  get(index){
    if(index < 0 || index >= this.length) return null; // check if index exists
    var counter, current;
    if(index <= this.length/2){
      console.log("WORKING FROM START");
      counter = 0;
      current = this.head;
      while(counter !== index){
        current = current.next;
        counter++;
      }
    } else {
      console.log("WORKING FROM END");
      counter = this.length - 1;
      current = this.tail;
      while(counter !== index){
        current = current.prev;
        counter--;
      }
    }
    return current;
  }
  set(index, val){ 
    var foundNode = this.get(index); // 1. find index
    if (foundNode != null) { // 2. if it does exist
      foundNode.val = val; // 3. set value
      return true; // 4. return true
    }
    return false; // 5. else, return false
  }
  insert(index, val){ 
    if(index < 0 || index >= this.length) return false; // 1. if index doesn't exist, false
    if(index === this.length) return this.push(val); // 2. 
    if(index === 0) return this.unshift(val);
    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === this.length - 1) return this.pop(val);
    if(index === 0) return this.shift();
    var removedNode = this.get(index); 
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

// PUSH ----------------------------------------
// list
// Object {
//   head: Object {
//     next: Object {},
//     prev: null,
//     val: 99
//   },
//   length: 2,
//   tail: [circular bject
// }
// list.push(101)
// Object {
//   head: Object {
//     next: Object {},
//     prev: null,
//     val: 99
//   },
//   length: 3,
//   tail: Object {
//     next: null,
//     prev: [circular bject,
//     val: 101
//   }
// }
// POP ----------------------------------------
// list
// Object {
//   head: Object {
//     next: Object {},
//     prev: null,
//     val: 99
//   },
//   length: 2,
//   tail: [circular bject
// }
// list.pop()
// Object {
//   next: null,
//   prev: null,
//   val: 100
// }
// SHIFT ----------------------------------------
// list.push(1)
// Object {
//   head: Object {
//     next: Object {},
//     prev: null,
//     val: 99
//   },
//   length: 3,
//   tail: Object {
//     next: null,
//     prev: [circular bject,
//     val: 1
//   }
// }
// list.shift(2)
// Object {
//   next: null,
//   prev: null,
//   val: 99
// }
// UNSHIFT ----------------------------------------
// list
// Object {
//   head: Object {
//     next: Object {},
//     prev: null,
//     val: 99
//   },
//   length: 2,
//   tail: [circular bject
// }
// list.unshift(1)
// Object {
//   head: Object {
//     next: null,
//     prev: null,
//     val: 1
//   },
//   length: 3,
//   tail: [circular bject
// }
// Console
// Assets
// Comments
// GET ----------------------------------------
// working with nodes 1-9 in order
// list 
// Object {
//   head: Object {
//     next: Object {},
//     prev: null,
//     val: 1
//   },
//   length: 9,
//   tail: Object {
//     next: null,
//     prev: Object {},
//     val: 9
//   }
// }
// list.get(7)
// "WORKING FROM END"
// Object {
//   next: Object {
//     next: null,
//     prev: [circular bject,
//     val: 9
//   },
//   prev: Object {
//     next: [circular bject,
//     prev: Object {},
//     val: 7
//   },
//   val: 8
// }
// INSERT ----------------------------------------
// list
// Object {
//   head: Object {
//     next: Object {},
//     prev: null,
//     val: 1
//   },
//   length: 9,
//   tail: Object {
//     next: null,
//     prev: Object {},
//     val: 9
//   }
// }
// list.insert(3, 99)
// "WORKING FROM START"
// true
// Console
// Assets
// Comments
// REMOVE ----------------------------------------
// Object {
//   next: Object {
//     next: Object {},
//     prev: [circular bject,
//     val: 5
//   },
//   prev: Object {
//     next: [circular bject,
//     prev: Object {},
//     val: 3
//   },
//   val: 4
// }
// list.remove(3)
// "WORKING FROM START"
// Object {
//   next: null,
//   prev: null,
//   val: 4
// }