// OBJECTIVES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Motivate the need for something like Big O notation
// Describewhat Big O Notation is
// Simplify Big O Exrpessions
// Define "time complexity" and "space complexity"
// Evaluate the time complexity and space complexity of different algorithms using  Big O notation
// Describe what a logarithm is

// BIG O NOTATION-------------------------------------------------------------------------
// It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.  
// It's worried about worst case scenario

// SIMPLIFYING BIG O EXPRESSIONS----------------------------------------------------------
// CONSTANTS DON'T MATTER
// O(2n) = O(n)
// O(500) = O(1)
// O(13n^2) = O(n^2)
// SMALLER TERMS DON'T MATTER
// O(N + 10) = O(n)
// O(1000n+50) = O(n)
// O(n + n + n + n) = O(n)  //arithmetic are constant
// O(2^n + 5n + 8) = O(n^2)
// BIG O SHORTHANDS
// 1. Arithmetic operations are constant
// 2. Variable assignment is constant
// 3. Accesssing elements in an array (by index) or object (by key) is constant
// 4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
// EXAMPLES
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}  // Prints number up to 5 or any number above 5  

// SPACE COMPLEXITY-------------------------------------------------------------------------
// use big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?
// WHAT ABOUT THE INPUTS?
// We care about the algorithm itself
// RULES OF THUMB
// Most primitives (booleans, numbers, undefined, null) are constant space
// Strings require O(n) space (where n is the string length)
// Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

// LOGS -------------------------------------------------------------------------
// log2  = number divided by 2 until it hits zero
// WHY CARE?
// certain searching algorithms have logarithmic time complexity
// efficient sorting algortithms involve logarithms.
// recursion sometimes involves logarithmic space complexity