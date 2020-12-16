// ALGORITHM
//  PROCESS OR SET OF STEPS TO ACCOMPLISH A CERTAIN TASK

// PROBLEM SOLVING STEPS----------------------------------------------------------
// 1 Understand the problem
// 2 Explore concrete examples
// 3 Break it down
// 4 Solve / simplify
// 5 Look back and refactor

// 1 UNDERSTAND THE PROBLEM----------------------------------------------------------
// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be determined from the inputs?  In other words, do I have enough infomration to solve the problem? (You may not be able to answer this question until you set about solving the problem.  That's okay; it's still worth considering the question at this early stage.)
// 5. How should I label the important pieces of data that are a  part of the problem?  

// ============================================================================
// write a function which takes two numbers and returns their sum.
// 1. "implement addition"
// 2. "are we only working with two numbers? what happens if one is ommited?"
// 3. - int? float? string?
// 4. name function "add" and inputs "num1" "num2", output "sum"

// 2 EXPLORE EXAMPLES ---------------------------------------------------------------
// Can help yo understand the problem better
// Expamples also provide sanity checks that your enventual solution works how it should
// User Stories! Unit Tests!
// 1. Start with simple examples 
// 2. Complex examples
// 3. Empty inputs
// 4. Invalid inputs

// ============================================================================
//write a function which takes in a string and returns counts of each character in the string
// simple
// charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, etc}
// complex
// charCount("my phone number is 5555555");
// Empty (not that important in interviews, but is in real world so it's fool proof)
// charCount("");
// invalid

// 3 BREAK IT DOWN ------------------------------------------------------------------
// comments, doesn't have to be suedo code
// what interviewers are doing to looking for you to communitcate
// 1. Explicity write out the steps you need to take
///////// forces you to think about the code you'll write before you write it, and helps you catch any lingering conceputal issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

// ============================================================================
//write a function which takes in a string and returns counts of each character in the string
// function charCount(str) {
  //do something
  // return an object with keys that are lowercase alphanumeric characters in the string; values should be the count for those characters
// }

// function charCount(str){
  //make object to return at end
  // loop over string, for each character...
    // if char is number/letter AND is a key in object, add one to count
    // if char is num/letter AND not in object, add it to object and set value to 1
    // if char is comething lese (space, period, etc.) don't do anything
  // return object at end
// }

// SOLVE / SIMPLIFY------------------------------------------------------------------
function charCount(str){
  //make object to return at end
  var result = {};
  // loop over string, for each character...
  for(var i=0; i<str.length; i++){
    var char = str[i]
    // if char is number/letter AND is a key in object, add one to count
    if(result[char] > 0) {
      result[char]++;
    }
    // if char is num/letter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    };
  }
    // if char is comething lese (space, period, etc.) don't do anything
  // return object at end
  return  result;
}
consoloe.log(charCount("hello"));

