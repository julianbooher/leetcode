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

    const closingKeys = {
        '[': ']',
        '(': ')',
        '{': '}'
    }

    let bracketsArray = [];
    for(let i = 0; i < s.length; i++){
        if (Object.keys(closingKeys).indexOf(s[i]) !== -1){
            bracketsArray.push(s[i])
        } else if (bracketsArray.length > 0 && closingKeys[bracketsArray[bracketsArray.length - 1]] === s[i]){
            bracketsArray.pop();
        } else {
            return false;
        }
    }
    
    if (bracketsArray.length > 0){
        return false;
    } else {
        return true; 
    }
}

console.log('Test 1, expected output true: ', isValid('()'));
console.log('Test 2, expected output true: ', isValid('()[]{}'));
console.log('Test 1, expected output false: ', isValid('(]'));
console.log('Test 1, expected output false: ', isValid('([)]'));
console.log('Test 1, expected output true: ', isValid('{[]}'));
