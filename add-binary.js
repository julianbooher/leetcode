// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

// var addBinary = function(a, b) {

//     let integerA = 0;
//     let integerB = 0;
//     let decimalPlace = 0;
//     let output = '';
//     for(let i = a.length - 1; i >= 0; i--){
//         integerA += Number(a[i] * 2**decimalPlace)
//         decimalPlace++;
//     }
//     decimalPlace = 0
//     for(let i = b.length - 1; i >= 0; i--){
//         integerB += Number(b[i] * 2**decimalPlace)
//         decimalPlace++;
//     }

//     console.log(integerA);
//     console.log(integerB);
    
//     let outputInteger = integerA + integerB;
    
//     while(outputInteger > 0)
// };


var addBinary = function(a, b) {

    let output = [];
    let arrayA = a.split('')
    let arrayB = b.split('')
    let remainder = 0;
    let highLength = arrayA.length > arrayB.length ? arrayA.length : arrayB.length
    let digitA = 0;
    let digitB = 0;
    let sum = 0;


    if (arrayA.length > arrayB.length){
        while(arrayB.length < arrayA.length){
            arrayB.unshift('0')        
        }
    } else if(arrayB.length > arrayA.length){
        while(arrayA.length < arrayB.length){
            arrayA.unshift('0')
        }
    }


    for(let i = highLength - 1; i >= 0; i--){
        digitA = Number(arrayA[i]) || 0;
        digitB = Number(arrayB[i]) || 0;
        sum = digitA + digitB + remainder;
        if (sum === 3){
            remainder = 1
            output.unshift('1')
        } else if (sum === 2){
            remainder = 1
            output.unshift('0')
        } else if (sum === 1){
            remainder = 0
            output.unshift('1')
        } else if (sum === 0){
            remainder = 0
            output.unshift('0')
        }

    }

    if(remainder === 1){
        output.unshift('1')
        return output.join("")
    } else {
        return output.join("");
    }
    
};


console.log('test 1, output should be "100"', addBinary('11', '1'))
console.log('test 2, output should be "10101"', addBinary('1010', '1011'))
console.log('test 3, output should be "1000"', addBinary('111', '1'))