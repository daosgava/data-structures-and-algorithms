/*
	m: represents the num1s length
	n: represents the num2s length 

    	Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
	Output: [1,2,2,3,5,6]

	Note: The idea for this exercise is to overwrite nums1

	Solutions with two pointers
	By comparing the numbers from the two arrays starting from their last index all the way to index 0,
	I can identify which number is bigger and place it in higher index.

	I am using a pointer for each array and everytime a number is evaluated and inserted into nums1
	I move its corresponding pointer to the left.

	E.g.
	nums1 = [1,2,3,0,0,0], its last index is m - 1
	nums2 = [2,5,6], its last index is n - 1
	initial index = m + n - 1;

	3 and 6, which is bigger? The bigger number goes to index 
	nums1 = [1,2,3,0,0,6] -> index and nums2 pointer is move to the left

	3 and 5, which is bigger? The bigger number goes to index 
	nums1 = [1,2,3,0,5,6] -> index and nums2 pointer is move to the left

	3 and 2, which is bigger? The bigger number goes to index 
	nums1 = [1,2,3,3,5,6] -> index and nums1 pointer is move to the left

	2 and 2, which is bigger? The bigger number goes to index 
	nums1 = [1,2,2,3,5,6] -> index and nums2 pointer is move to the left

	and so on...
*/

const mergeSortedArrays = (nums1, m, nums2, n) => {
	let ptr1 = m - 1,
		ptr2 = n - 1,
		index = m + n - 1;

	while (index >= 0) {
		if (nums1[ptr1] > nums2[ptr2] || nums2[ptr2] === undefined) {
			nums1[index] = nums1[ptr1];
			ptr1--;
		} else {
			nums1[index] = nums2[ptr2];
			ptr2--;
		}
		index--;
	}

	return nums1;
};

// Time complexity O(n + m)

module.exports = mergeSortedArrays;
