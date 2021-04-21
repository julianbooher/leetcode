// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Example 2:

// Input: s = " "
// Output: 0

var lengthOfLastWord = function(s) {
    for(let i = s.length -1; i >= 0; i--){
        if (s[i] === " "){
            return s.slice(i + 1, s.length).length;
        }
    }
    return s.length;
};


console.log('test 1, output should be 5:', lengthOfLastWord("Hello World") );
console.log('test 2, output should be 0:', lengthOfLastWord(" ") )
console.log('test 3, output should be 1:', lengthOfLastWord(" a") )
console.log('test 4, output should be 1:', lengthOfLastWord("a ") )