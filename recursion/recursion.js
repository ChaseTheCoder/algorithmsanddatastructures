// RECURSION
// objectives: what is it and how can we use it?
// understand two essential components of a recursive function
// visualize the call stack to better debug and understnad recursive functions
// use helper method recursion and pure recursion to solve more difficult problems

// RECURSION: a process ( afunction in our case) that calls itself
// examples: 
// ----JSON.parse/JSON.strigify, 
// ----document.getElementById and DOM traversal algorthims
// ----see it with more complex data structures (traverse a tree/graph)
// ----it's sometimes a cleaner alternative to iteration

// If it's called over and over again, what's happening?
// it's a STACK data structure
// any time a function is invoked it is placed (pushed) on the top of the stack
// when JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)

// Why care?
// you're used to functions bieng pushed on the call tack and pooped off when they are done
// when we write recursive functions, we keep pushing new functions onto the call stack

// How recrusive functions work
// Invoke the SAME function with a different input until you reach your base case
// BASE CASE: the condition when the recursion ends. THIS IS THE MOST IMPORTANT CONCEPT TO UNDERSTAND.
// TWO ESSENTIAL PARTS:  Base Case && Different Input

// Recursive Function Examples
// will continue looping up to 'if' until num<=0
function countDown(num){
  if(num <=0) {
    console.log("All Done!");
    return
  }
  console.log(num);
  num--;
  countDown(num);
}

//
function sumRange(num){
  if(num == 1) return 1;
  return num + sumRange(num-1); 
}
sumRange(3)
// return 3 + sumRange(2) <- 3rd in stack 
//                   return 2 + sumRange(1)  <- 2nd in stack
//                                  return 1 // now ends // <- is top of stack
// THEN goes up and can add num + sumRange(num-1)

// WRITING FACTORIAL ITERATIVELY (non recursively)
// Examples: 4! = 4 × 3 × 2 × 1 =
function factorial(num){
  let total = 1;
  for(let i = num; i > 1; i--){
    total *= i
  }
  return total;
}

// WRITING FACTORIAL RECURSIVELY
function factorial(num) {
  if(num == 1) return 1;
  return num * factorial(num-1)
}

// WHERE THINGS GO WRONG
// Forget base case and never stops (could hit maximum (10,000ish))
// Forgetting to return or returning the wrong thing!
// Stack overflow! (occurs if the call stack pointer exceeds the stack bound)
