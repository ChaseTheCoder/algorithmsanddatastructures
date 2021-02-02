// HASH TABLE
// HASH TABLES ARE USED TO STORE KEY-VALUE PAIRS
// They are like arrays, but the keys are not ordered
// Unlike arrays, hash tables are fast for all of the following operations:
// finding values, adding new values, and removing values

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
