/*
    Binary Search -> For ordered arrays
    
    This algorithm is meant be used for ordered arrays only. Its purpose is to search for a number
    by comparing it to the input array's mid-point. In each iteration, the array will be bounded 
    depending on weather the input number is greater or smaller that the mid-point number.

    Input array = [1,2,4,5,6,7,8]
    search for the number 6

    1.  Calculate the mid-point based on the lower and upper bound of the input array.
        Lower bound = Index 0 
        Upper bound = Index 6
        Mid-point = 0 + 6 / 2 
        Mid-point = 3 
    2.  Validate if the input number is greater or smaller than the mid-point.
        [1,2,4,5,6,7,8]
               M
        Mid-point value = 5
        2.1.    If input number is greater than the Mid-point, the new lower bound would be the Mid-point + 1
                and the upper bound would keep its index.
                6 > 5 YES!
                Lower bound = Mid-point + 1 = 4
                Upper bound = 6
                Input array bounded = [6,7,8]
                Go to step number 3 ;) 
        2.2.    If input number is smaller than the Mid-point, the lower bound would keep
                its index and the upper bound would be the Mid-point - 1.
    3.  Repeat all the steps while upper bound is grear or equal than the lower bound or until the Mid-point value
        is equal to the input num
    
    e.g.
    Lower bound = L, Upper bound = U, mid-point = M

    Iteration 1
    [1,2,4,5,6,7,8]
     L     M     U
    6 > 5 YES!
    ---------------
    Iteration 2
    [6,7,8]
     L M U
    6 > 7 NO!
    ---------------
    Iteration 3
    [6]
     L
     U
     M
    6 == 6 RETURN mid-point
*/

const binarySearch = (arr, num) => {
	let lowerBound = 0;
	let upperBound = arr.length - 1;

	while (lowerBound <= upperBound) {
		const midPoint = Math.floor((lowerBound + upperBound) / 2);
		const midPointValue = arr[midPoint];

		if (midPointValue === num) {
			return midPoint;
		} else if (num < midPointValue) {
			upperBound = midPoint - 1;
		} else if (num > midPointValue) {
			lowerBound = midPoint + 1;
		}
	}

	return null;
};

// TIME COMPLEXITY O(LOG N)

module.exports = binarySearch;
