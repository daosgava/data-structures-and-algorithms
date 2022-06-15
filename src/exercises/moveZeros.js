/*
    Move zeros to the end of the array

    Note: In-place algorithm

    Example:
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]
*/

const moveZeroes = (nums) => {
	let writer = 0,
		temp = 0;
	for (let reader = 0; reader < nums.length; reader++) {
		if (nums[reader] !== 0) {
			temp = nums[writer];
			nums[writer] = nums[reader];
			nums[reader] = temp;
			writer++;
		}
	}

	return nums; // Only display array
};

// Complexity O(n)

export default moveZeroes;
