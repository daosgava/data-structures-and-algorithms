/*
    Binary Search
    
    This algorithm is meant be use for ordered arrays only.
    1.  The idea is to calculate the mid-point based on the lower and upper bound of the input array.
    2.  Validate if the input number is greater or smaller than the mid-point.
        2.1.    If number is greater than the mid-point, the new lower bound would be the mid-point + 1
                and the upper bound would keep its index.
        2.2.    If number is smaller than the mid-point, this time, the lower bound would keep
                its index and the upper bound would be the mid-point - 1.
    3.  Finally, repeat all the steps until the lowerbound is grear than the upperbound.

*/

const binarySearch = (arr, num) => {
    let lowerBound = 0;
    let upperBound = arr.length - 1;

    while( lowerBound <= upperBound) {
        const midPoint = Math.floor((lowerBound + upperBound) / 2);
        const midPointValue = arr[midPoint];

        if(midPointValue === num) {
            return midPoint;
        } else if(num < midPointValue) {
            upperBound = midPoint - 1;
        } else if(num > midPointValue) {
            lowerBound = midPoint + 1;
        }
    }

    return null;
};

module.exports = binarySearch;
