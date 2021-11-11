/*
    Two numbers product

    The idea is to return an array with the product of every combination of two numbers
*/

const twoNumbersProduct = (arr) => {
	const newArr = [];

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			newArr.push(arr[i] * arr[j]);
		}
	}

	return newArr;
};

// Time complexity O(n)

module.exports = twoNumbersProduct;
