/*
    Bubble Sort

    This algorithm sorts an array in ascending order.

    1.  The idea is to pass-through the input array until all the numbers are sorted.
        Input array = [4,2,1,7,3]        
    2.  In each iteration, we need to compare the current number to the next one.
        Iteration 1
        -----------
        Current = 4  
        Next = 2
    3.  If the current number is greater than the next number, they must shift positions.
        4 > 2 YES! EXCHANGE POSITION
        4 > 1 YES! EXCHANGE POSITION
        4 > 7 NOP
        7 > 3 YES! EXCHANGE POSITION
    4.  That process will move the biggest number to the last position in the input array.
        [2,1,4,3,7]
    5.  If after passing-through the array, numbers changed positions, this means the array may not be sorted.
    6.  In next pass-through we don't need to go to the last index.
        Initial Lower bound = 0
        Initial Upper bound = 4
        -----------------------
        New Lower bound = 0
        New Upper bound = 3
    7.  Repeat, pass-through.
        Iteration 1 = [2,1,4,3,7]   There were positions exchange
        Iteration 2 = [1,2,3,4,7]   There were positions exchange
        Iteration 2 = [1,2,3,4,7]   There weren't positions exchange
    8.  If there is not positions exchange, that means that the array is in order.
*/

const bubbleSort = (arr) => {
    let unsortedIndex = arr.length - 1;
    let sorted = false;
    let temp1 = null;
    let temp2 = null;

    while(!sorted) {
        sorted = true;
        for(let i = 0; i < unsortedIndex; i++){
            temp1 = arr[i];
            temp2 = arr[i+1];
            if(temp1 > temp2){
                arr[i] = temp2;
                arr[i+1] = temp1;
                sorted = false;
            }
        }
        unsortedIndex -= 1;
    }
    return arr;
};

// TIME COMPLEXITY O(n^2)

module.exports = bubbleSort;
