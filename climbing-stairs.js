// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

var climbStairs = function(n) {
    if(n < 4 && n > 0){
        return n;
    }

    let x = 1;
    let y = 2;

    for (let i = 3; i <= n; i++){
        let z = x + y;
        x = y;
        y = z;
    }
    return y;
};

console.log('test 1, output should be 2:', climbStairs(2));
console.log('test 2, output should be 3:', climbStairs(3));
console.log('test 3, output should be 5:', climbStairs(4));