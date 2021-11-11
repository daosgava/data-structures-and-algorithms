/*
    Selection Sort

    This algorithm sorts an array in ascending order. The idea is to place the smallest number
    at the beginning of the array, but we'll be moving the lower bound to the right after each iteration.

    Input array [2,4,2,7,1]

    1.  The idea is to pass-through the input array.
    2.  Temporary set the current index as the lowest number found
        [2,4,2,7,1]
        indexOfLowestNum = 0
        array[0] = 2
    3.  With an inner loop, look for the lowest number and track its position.
        2 > 4 NO
        2 > 2 NO
        2 > 7 NO
        2 > 1 YES
        The index of number 1 is 4 -> arr[4]
    4.  Right after the inner loop's run, we need to move the actual lowest number to indexOfLowestNum.
        indexOfLowestNum = 0
        Actual lowest number arr[4] -> 1
        Now, let's change numbers
        [1,4,2,7,2]
    5.  The indexOfLowestNum will change on each iteration, starting with 0, then 1, then 2, and so on.
    6.  Loop will iterate until the second last position.

    Initial indexOfLowestNum = I
    The actual indexOfLowestNum = T

    Iteration 1
    I = 0
    T = 4
    [2,4,2,7,1] => [1,4,2,7,2]

    Iteration 2
    I = 1
    T = 2
    [1,4,2,7,2] => [1,2,4,7,2]

    Iteration 3
    I = 2
    T = 4
    [1,2,4,7,2] => [1,2,2,7,4]

    Iteration 3
    I = 3
    T = 4
    [1,2,2,7,4] => [1,2,2,4,7]

*/

const selectionSort = (arr) => {
    let indexOfLowestNum = null;
    let temp = null;

    for (let i = 0; i < arr.length - 1; i++) {
        indexOfLowestNum = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexOfLowestNum] > arr[j]) {
                indexOfLowestNum = j;
            }
        }

        if (indexOfLowestNum !== i) {
            temp = arr[i];
            arr[i] = arr[indexOfLowestNum];
            arr[indexOfLowestNum] = temp;
        }
    }

    return arr;
};

// TIME COMPLEXITY O(n^2)
// This algorithms is twice as faster as the bubble sort

module.exports = selectionSort;
