// HASH TABLE
// HASH TABLES ARE USED TO STORE KEY-VALUE PAIRS
// They are like arrays, but the keys are not ordered
// Unlike arrays, hash tables are fast for all of the following operations:
// finding values, adding new values, and removing values
// Hashing involves applying a hashing algorithm to a data item, known as the hashing key, to create a hash value. Hashing algorithms take a large range of values (such as all possible strings or all possible files) and map them onto a smaller set of values (such as a 128 bit number).
// A good hash function satisfies two basic properties:
//     1) it should be very fast to compute; 
//     2) it should minimize duplication of output values (collisions). 
// Hash functions rely on generating favorable probability distributions for their effectiveness, reducing access time to nearly constant.
// Hash tables can find values quickly given a key and add new key-values quickly
// Hash tables store data in a large array, and work by hashing the keys
// A good hash should be fast, distribute keys uniformly, and be deterministic
// Separate chaining and linear probing are two strategies used to deal with two kesy that hash to the same index

// HASH TABLES IN THE WILD
// Python has Dictionaries
// JS has Objects and Maps*
// Java, Go, Scala have Maps
// Ruby has Hashes
// *Objects have some restrictions, but are basicaly hash tables
//       Keys have to be strings

// INTRODUCTORY EXAMPLES
// Can store in array, but if need one at random, not the best
let colors = ["#ff69bf", "#ff4500", "#00ffff"];
// Instead of using indices to access the colors, we could use more human-readable keys
// Objects let us find by names instead of indicies 
// colors["cyan"]      opose to colors[2]

// THE HASH PART
// To implement a hash table, we'll be using an array
// In order to look up values by key, we need a way to convert keys into valid array indices
// a function that performs this task is called a hash function

// WHAT MAKES A GOOD HASH
// Fast (i.e. constant time)
// Doesn't include cluster outputs at specific indices, but distributes uniformly
// Simple Hash Example:

// Hash That Works on Strings Only:
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}
// The modulo operator works like the mod operator in math. 
// For example, a clock has 12 hours. We represent that in math with by writing x mod 12 where x is an integer. For example if x is 20 then 20 mod 12 is 8 since we subtract 12 until it’s between 0 and 11.

// Refining Our Hash
// Only hashes strigns (we won't worry about this)
// Not constant time - linear in key length
// Could be a little more random

// Hashing Revisited
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) { // will only look at the first 100 characters***
    let char = key[i];
    let value = car.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
// *** if first 1000 characters were the same in 1000 sets of data you would obviously have to tweak your algorithm
// *** because you would have every set of data colliding
// PRIME NUMBERS? WUT.
// Prime number in the hash is helpful in spreading out the keys more uniformly
// It's also helpful if the array that you're putting values into has a prime length
// You don't need to know why (Math is complicated)
// An MIT researching found that there were far less collisions with prime numbers

// hash("hello", 13);
// 7
// hash("goodbye", 13)
// 9
// hash("cyan", 13)
// 5
// hash("pink", 13)
// 5

// DEALING WITH COLLISIONS 
// In computer science, a collision or clash is a situation that occurs when two distinct pieces of data have the same hash value, checksum, fingerprint, or cryptographic digest.
// Above, "cyan" and "pink" have a collision
// Two options: SEPARATE CHAINING & LINEAR PROBING

// SEPARATE CHAINING
// With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or linked list)
// This allows us to store multiple key-value pairs at the same index
// darkblue & salmon hash to 4, therefore stored at the same index
// Store things together
// Can store more than the fixed indices

// LINEAR PROBING
// With linearn probing, when we find a collision, we search through the array to find the next empty slot
// Unlike with separate chaining, this allows us to store a single key-value at each index
// darkblue, salmon, tomato all hash to 4, salmon[5], tomato[6]
// Can only store as much as index (index of 9 can only store 10 sets of data)

// KEYS
// Loops through the hash table array and returns an array of the keys in the table
// VALUES
// Loops through the hash table array and returns an array of values in the table

// BIG O of HASH TABLES
// (average case)
// Insertion: O(1)   Deletion: O(1)     Access: O(1)

class HashTable {
  constructor(size=53){ //accepts size of hash table, default value of 53 if not included
    this.keyMap = new Array(size); // make new array of that size and store it in keyMap 
  }

  _hash(key) { // dont' have to pass in size of hash table because constructor did that.
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key); // hash key
    if(this.keyMap[index]){ // if key/value exists at index
      for(let i = 0; i < this.keyMap[index].length; i++){ // loop through key/values
        if(this.keyMap[index][i][0] === key) { // if the index at looped index has a key that equals input
          return this.keyMap[index][i][1] // return the value at index of 1
        }
      }
    }
    return undefined; //if index vlaue doesn't exist, it's undefined
  }
  values(){
    let valuesArr = [];
    for(let i = 0; i < this.keyMap.length; i++){ // loop thorugh index in array
      if(this.keyMap[i]){ // if there is a key in the value
        for(let j = 0; j < this.keyMap[i].length; j++){ // loop through keys at this index
          if(!valuesArr.includes(this.keyMap[i][j][1])) //making sure we only see unique values, not duplicates
          valuesArr.push(this.keyMap[i][j][1]) // push value into array
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable();
ht.set("hello world", "goodbye!!")
// ht
// Object {
//   keyMap: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [["hello world", "goodbye!!"]], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
// }

// SET -------------------
// WITH SMALLER SIZE OF 4
// let ht = new HashTable();
// ht.set("hello world", "goodbye!!")
// ht.set("dogs", "are cool")
// ht.set("cats", "are fine")
// ht.set("i love", "pizza")
// ht
// Object {
//   keyMap: [[["hello world", "goodbye!!"]], [["cats", "are fine"], ["i love", "pizza"]], undefined, [["dogs", "are cool"]]]
// }
// GET -------------------
// ht.set("are we done?", "yes")
// undefined
// ht.get("are we done?")
// "yes"