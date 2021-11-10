/*
    Insertion Sort

    The idea is to iterate over the input array starting from index 1.
    In each iteration, we need to compare and sort all the numbers to
    left of our iteration number(arr[i]).

    1.  Iterate over the input array starting from index 1
        arr = [1,2,1]
        arr[index] = 2
    2.  Set 2 variables in each iteration. 
        2.1 One variable holds the iteration number / arr[i]. Let's call it tmpHolder.
            tmpHolder = arr[index]

        2.2 And another variable that tracks the index of the number inmidiately to the left of
            our current index. Let's call it leftPos.
            leftPos = i - 1 = 0        

    3.  With an inner loop, compare the tmpHolder to the number in the leftPos.
        [1,2,1]
         ^ ^
        Comparison 1 > 2? NOP!

        3.1 If the number in the leftPos is greater than the tmpHolder
            3.1.1 Move it to the tmpHolder position, meaning one to the right. arr[leftPos + 1] = arr[leftPos].
            3.1.2 Move leftPos to the left -> leftPos - 1. Next number to the left.
        
        3.2 If conditional is false, break the inner loop
        NOTE: The inner loop will sort all the numbers to the left of the current iteration number.


    4.  Before the outer loop finishes that run, assign tmpHolder to leftPos + 1.
    5.  Repeat until reaching the last number in the array.
    6.  Finally, Returns input array.

    e.g.
    inputArray = [1,2,1,5]

    Outer loop
    - Iteration 1
       2
    [1, ,1,5]
    index = 1, tmpHolder = 2, leftPos = 0
        Inner loop
        Iteration 1
        1 > 2 NOP! Then break loop, add tempHolder number to leftPos + 1, continue outer loop

    - Iteration 2
         1	
    [1,2, ,5]
    index = 2, tmpHolder = 1, leftPos = 1
        Inner loop
        Iteration 1
        2 > 1 YES! Then move 2 to the right and move leftPos to the left.
        [1, ,2,5]
        leftPos = 0

        Iteration 2
        1 > 1 Nop! -> Then break the inner loop.
    Place tmpHolder in leftPos + 1
    [1,1,2,5]
    
    - Iteration 3
           5      
    [1,1,2, ]
    index = 3, tmpHolder = 5, leftPos = 2
        Inner loop
        Iteration 1
        2 > 5! Nop! Then break. 
    Add tmpHolder number to leftPos + 1

    Return inputArray
*/

const insertionSort = (arr) => {
    let tempHolder = null;
    let leftPos = null;
    for(let i = 1; i < arr.length; i++){
        tempHolder = arr[i];
        leftPos = i - 1;

        while(leftPos >= 0) {
            if(arr[leftPos] > tempHolder){
                arr[leftPos + 1] = arr[leftPos];
                --leftPos;
            } else {
                break;
            }
        }
        
        arr[leftPos + 1] = tempHolder;
    }

    return arr;

};

// Time complexity O(n^2)

module.exports = insertionSort;
