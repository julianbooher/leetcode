// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]

// Do not return anything, modify nums1 in-place instead.

var merge = function(nums1, m, nums2, n) {  
    let nums2index = 0
    for (let i = 0; i < nums1.length; i++){
        if (nums1[i] === nums2[nums2index] || nums1[i] < nums2[nums2index]){
            console.log('inside if', i);
            nums1.splice(i, nums2[nums2index])
            nums2index++;
            i--;
        }
    }
    console.log('nums1', nums1)
};


console.log('test 1, result should be [1,2,2,3,5,6]', merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log('test 2, result should be [1]', merge([1], 1, [], 0));