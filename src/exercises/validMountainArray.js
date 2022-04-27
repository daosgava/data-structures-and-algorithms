/*
    Given an array of integers arr,
    return true if and only if it is a valid mountain array

    e.g.
    input: arr = [0,3,2,1]
    output: true

    Input: arr = [3,5,5]
    Output: false

    Input: arr = [3,5,5,1]
    Output: false

    Input: arr = [2,1,0]
    Output: false
*/

const validMountainArray = (arr) => {
	// Initial constraints
	if (arr.length < 3) {
		return false;
	}

	if (arr[0] >= arr[1]) {
		return false;
	}

	// Based on the conditional above
	// We can assume it's going up
	let up = true,
		down = false;

	for (let i = 2, arrLen = arr.length; i < arrLen; i++) {
		// Make sure it's strictly increasing
		if (arr[i - 1] === arr[i]) {
			return false;
		}

		// If it was up but now it's going down
		if (up && arr[i - 1] > arr[i]) {
			down = true;
		}

		// If it was down but now it's going up
		if (down && arr[i - 1] < arr[i]) {
			return false;
		}
	}

	// if it went up and down
	return up && down;
};

// TIME COMPLEXITY O(n)

export default validMountainArray;
