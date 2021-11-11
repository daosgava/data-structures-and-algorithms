/*
    mergeTwoArrays

    The idea is to merge two sorted array.
*/

const mergeTwoArrays = (arr1, arr2) => {
	let pointer1 = 0;
	let pointer2 = 0;
	const newArr = [];

	// Loop until pointers reach the end of both arrays
	while (pointer1 < arr1.length || pointer2 < arr2.length) {
		// If position in arr 1 doesn't exist add number from arr2
		if (!arr1[pointer1]) {
			newArr.push(arr2[pointer2]);
			// Move pointer
			pointer2++;
			// If position in arr 2 doesn't exist add number from arr1
		} else if (!arr2[pointer2]) {
			newArr.push(arr1[pointer1]);
			pointer1++;
			// Sorting
			// If both positions exist and nubmer in arr1 is greater that
			// number in arr2, add number in arr2.
		} else if (arr1[pointer1] > arr2[pointer2]) {
			newArr.push(arr2[pointer2]);
			pointer2++;
			// If not, add number in arr1
		} else {
			newArr.push(arr1[pointer1]);
			pointer1++;
		}
	}

	return newArr;
};

// Time complexity O(M*N)

module.exports = mergeTwoArrays;
