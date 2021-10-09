/*
    Selection Sort

    This algorithm sorts an array in ascending order.
    Input array [2,4,2,7,1]

    1.  The idea is to pass-through the input array.
    2.  Temporary set the current index as the lowest number found
        [2,4,2,7,1]
        indexOfLowestNum = 0
        array[0] = 2
    3.  Look for the lowest number and track its position(passing-through the array again).
        2 > 4 NO
        2 > 2 NO
        2 > 7 NO
        2 > 1 YES
        The index of the number 1 is 4
        indexOfLowestNum = 4
    4.  Once we find lowest number, it should change positions with the initially set up index of lowest number
        Initial indexOfLowestNum = 0
        The actual indexOfLowestNum = 4
        Let's change numbers
        [1,4,2,7,2]
    5.  The indexOfLowestNum will change on each iteration, starting with 0, then 1, then 2, and so on.
    6.  loop should go until the second last position.

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

module.exports = selectionSort;
