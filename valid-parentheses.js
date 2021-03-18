// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true


var isValid = function(s) {
    for (let i = 0; i < s.length/2; i++){
        if (s[i] !== s[s.length - 1 - i]){
            return false;
        }
    }
    return true;
};

console.log('Test 1, expected output true: ', isValid('()'));
console.log('Test 2, expected output true: ', isValid('()[]{}'));
console.log('Test 1, expected output false: ', isValid('(]'));
console.log('Test 1, expected output false: ', isValid('([)]'));
console.log('Test 1, expected output true: ', isValid('{[]}'));
