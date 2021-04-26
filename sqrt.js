// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

 

// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.


var mySqrt = function(x) {
    let returnValue = 0;
    for (let i = x; i >= 0; i--){
        if(i * i <= x){
            return i
        } 
    }

    
};

console.log('test 1, result should be 2', mySqrt(4));
console.log('test 2, result should be 2', mySqrt(8));
console.log('test 3, result should be 3', mySqrt(9));
console.log('test 4, result should be 4', mySqrt(16));
console.log('test 5, result should be 25', mySqrt(625));