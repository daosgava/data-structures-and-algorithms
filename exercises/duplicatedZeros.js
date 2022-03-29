/*
    e.g.

    input = [1, 2, 3, 0, 4, 5, 0, 2]
    output = [1, 2, 3, 0, 0, 4, 5, 0]

    This function is mutating its input and there's no need to use
    the return statement.

    No worries ;) This is an exercise we are not developing software...
*/

const duplicatedZeros = (arr) => {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (arr[i] === 0) {
			for (let j = arr.length -1; j > i; j--) {
                arr[j] = arr[j-1];
            }
		}
	}

    return arr; // It's needed by the printPretty function
};

// TIME COMPLEXITY O(n^2)

module.exports = duplicatedZeros;
