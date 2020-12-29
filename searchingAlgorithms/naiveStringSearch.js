// NAIVE STRING SEARCH
// find if there is a match in order
function naiveSearch(long, short){
  let count = 0;
  for(let i = 0; i < long.length; i++){ //loop  through long
    for(let j = 0; j < short.length; j++){  // loop through short
      console.log(short[j], long[i+j])
      if(short[j] !== long[i+j]){ // if index of short doesn't match index of long
        console.log("Break!")
        break; // break the loop
      }
      if(j === short.length - 1){  //if j === length because loop didn't break
        console.log("found one")
        count++; // add to count
      }
    }
  }
  console.log(count)
  return count;  // once loop is done return count
}

naiveSearch("lorie loled", "lol"); // 1

// Same, but shortened
function naiveSearch(long, short){
  let count = 0;
  for(let i = 0; i < long.length; i++){ //loop  through long
    for(let j = 0; j < short.length; j++){  // loop through short
      console.log(short[j], long[i+j])
      if(short[j] !== long[i+j]) break;
      if(j === short.length - 1) count++;
    }
  }
  return count;  // once loop is done return count
}