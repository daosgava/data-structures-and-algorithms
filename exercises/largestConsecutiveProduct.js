/*
    Largest consecutive product

    This algoritms has a similar implementation compared to the find needle.
    The Idea is to return the largest consecutive product having as input params an array
    and the number of consecutive numbers.

    e.g.

    input array = [1,2,3]
    consecutive numbers = 2

    return 6
*/

const largestConsecutiveProduct = (array, n) => {
    if(n > array.length - 1) {
        console.log('Invalid consecutive number.');
        return;
    }

    let i = 0;
    let j = 0;
    let largestProduct = 0;
    let largestTemp = 0;

    while (i < array.length) {        
        largestTemp = 0;
        j = 0;
        while (j < n && j + i < array.length) {
            largestTemp = largestTemp ? largestTemp * array[i + j] :  array[i + j];
            j++
        }

        if (largestTemp > largestProduct) {
            largestProduct = largestTemp;
        }
        
        i++;
    }

    return largestProduct;
};

// Time complexity O(n^m)

module.exports = largestConsecutiveProduct;
