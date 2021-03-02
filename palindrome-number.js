// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false

var isPalindrome = function(x) {

    const inputString = x.toString();
    let reverseInputString = ''

    for (let i = x.toString().length - 1; i >= 0; i--){
        reverseInputString += inputString[i]
    }

    if (reverseInputString === inputString){
        return true
    } else {
        return false;
    }

};

// Test cases. 
console.log('test 1, expected output true', isPalindrome(121));
console.log('test 2, expected output false', isPalindrome(-121));
console.log('test 3, expected output false', isPalindrome(10));
console.log('test 4, expected output true', isPalindrome(12344321));