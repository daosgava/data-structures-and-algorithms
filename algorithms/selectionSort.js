/*
    Selection Sort

    1.  The idea is to pass-through the input array
    2.  Temporary set the current index as the lowest number found
    3.  Look for the lowest number and track its position(passing-through the array again).
    4.  Once we find lowest number, it should change positions with the initially set up index of lowest number
    5.  The index will change on each iteration, starting with 0, then 1, then 2, and so on.

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

module.exports = selectionSort;
