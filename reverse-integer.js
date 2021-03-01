// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321

// Example 2:

// Input: x = -123
// Output: -321

// Example 3:

// Input: x = 120
// Output: 21

// Example 4:

// Input: x = 0
// Output: 0

var reverse = function(x) {

    if (x > 2147483647){
        return 0;
    }

    let inputString = x.toString();
    let returnString = '';


    for (let i = inputString.length - 1; i >= 0; i--){
        if (inputString[i] >= 0){
            returnString += inputString[i];
        }
    }
    
    if (returnString > 2147483647){
        return 0;
    }

    if (x < 0){
        return returnString * -1;
    } else {
        return returnString * 1;
    }

};


// Test cases. 
console.log('test 1, expected output 321', reverse(123));
console.log('test 2, expected output -321', reverse(-123));
console.log('test 3, expected output 21', reverse(120));
console.log('test 4, expected output 0', reverse(0));
console.log('test 4, expected output 23456', reverse(65432));
console.log('test 5, expected output 109', reverse(901000));
