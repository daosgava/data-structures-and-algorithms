/*
    This algorithm validated whether an array is a subset of another array.

    1.  It assigns each input array to a different variable verifying which one is the larger and the smaller.
    2.  Then, it adds all elements of the larger array to an object called itemsHolder.
    3.  Finally, it checks itemsHolder contains all the elements of the smaller input array.
*/

const isSubset = (arr1, arr2) => {
	let largerArray, smallerArray;
	const itemsHolder = {};

	if (arr1.length > arr2.length) {
		largerArray = arr1;
		smallerArray = arr2;
	} else {
		largerArray = arr2;
		smallerArray = arr1;
	}

	for (const value of largerArray) {
		itemsHolder[value] = 1;
	}

	for (const value of smallerArray) {
		if (!itemsHolder[value]) {
			return false;
		}
	}

	return true;
};

// Time complexity O(n)

module.exports = isSubset;
