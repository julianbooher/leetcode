// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


const longestCommonPrefix = function(strs) {
    let output = '';
    if (strs.length === 0){
        return output;
    }
    for(let i = 0; i < strs[0].length; i++){
        for(let j = 1; j < strs.length; j++){
            if (strs[j][i] !== strs[0][i]){
                return output
            }
        }
        output += strs[0][i];
    }
    return output;
};

console.log('Test 1: expected output is fl: ', longestCommonPrefix(["flower","flow","flight"]));
