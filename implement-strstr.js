// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0


var strStr = function(haystack, needle) {
    let subString = '';
    // Satisfies needle being an empty string, return 0.
    if (needle.length === 0 ){
        return 0;
    };

    for(let i = 0; i < haystack.length; i++){
        if(haystack[i] === needle[0]){
            subString = haystack.substring(i, i + needle.length)
            if (subString === needle){
                return i
            } else {
                subString = '';
            }
            
        }
    }
    return -1;
};


console.log('test 1, result should be 2', strStr('hello', 'll'));
console.log('test 2, result should be -1', strStr('aaaaa', 'bba'));
console.log('test 3, result should be 0', strStr('', ''));
