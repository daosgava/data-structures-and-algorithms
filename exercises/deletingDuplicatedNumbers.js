/*

    The idea is to "delete" duplicated numbers by moving them to another position and keeping track
    of the array length. Modifying the input array in-place.

    Conditions:
        - Acs sorted array
        - Not necessarily starts a 0

    e.g.
    Input: nums = [1,1,2]
    Output: 
        arrLen = 2
        nums = [1,2,x];

    e.g
    Input: nums = [0,0,1,1,1,2,2,3,3,4]
    Output: 5, nums = [0,1,2,3,4,x,x,x,x,x]
*/

const removeDuplicates = (nums) => {
    let ptr1 = 0, ptr2 = 1;
    while(ptr2 < nums.length){
        if(nums[ptr2] > nums[ptr1]) {
            ptr1++;
            nums[ptr1] = nums[ptr2];
        }
        ptr2++;
    }
    
    // ptr1 is a position
    // Add 1 to get the length 
    return ptr1+1;
};

// Time complexity O(n)
module.exports = removeDuplicates;
