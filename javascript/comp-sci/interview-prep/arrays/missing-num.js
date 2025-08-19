//Given an array arr[] of size n-1 with distinct integers in the range of [1, n]. 
// This array represents a permutation of the integers from 1 to n with one element
//  missing. Find the missing element in the array.

var missingNumber = function (nums) {
    let sum = 0;
    let total = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }

    for(let i = 0; i <= nums.length; i++){
        total += i;
    }

    return total - sum;
};

console.log(missingNumber([5,0,3,2,4]))

// how can i find the missing eleemnt?
