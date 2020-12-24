//POWER SOLUTION
// accepts power & base, should return power of the base to the exponent
// do not worry about negative numbers
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

//FACTORIAL SOLUTION
// find factorial of a number
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}

//PRODUCT OF ARRAY SOLUTION (pure recursion)
//return product of array
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

//RECURSIVE RANGE SOLUTION
// accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}

//FIBONACCI SOLUTION
//accepts number and returns nth number in the bibonacci sequence
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
fib(4) //3
fib(10)//55