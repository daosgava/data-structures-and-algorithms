/*
    Insertion Sort

    1.  Iterate over the input array starting from position 1
        arr = [1,2,1]
        index = 1
    2.  Set 2 variables in each iteration. 
        2.1 One variable holds the iteration number or arr[i]. Let's call it tmpHolder.
            tmpHolder = arr[index] = 2

        2.2 The other variable tracks the index of the number inmidiately to the left of the tmpHolder.
            Let's call it trackedPosition.
            trackedPosition = i - 1 = 0        

    3.  With an indented loop, compare the tmpHolder to the number in the trackedPosition.
        [1,2,1]
         ^ ^
        Comparison 1 > 2? NOP!

        3.1 If the number in the trackedPosition is greater than the tmpHolder
            3.1.1 Move that arr[trackedPosition] to the right. arr[trackedPosition + 1] = arr[trackedPosition].
            3.1.2 Move trackedPosition to the left. trackedPosition - 1.
        
        3.2 If conditional is false, break the indented loop
        NOTE: The indented loop will sort all the number to the left of the current iteration number.

    4.  At the end of each iteration, assign tmpHolder to trackedPosition + 1.
    5.  Repeat until reaching the last number in the array.
    6.  Returns input array.
    


    e.g.
    inputArray = [1,2,1,5]

    Iteration 1
       2
    [1, ,1,5]
    index = 1, tmpHolder = 2, trackedPosition = 0
        Indented loop
        Iteration 1
        1 > 2 NOP! Then break loop and add tempHolder number to trackedPosition + 1

    Iteration 2
         1	
    [1,2, ,5]
    index = 2, tmpHolder = 1, trackedPosition = 1
        Indented loop
        Iteration 1
        2 > 1 YES! Then move 2 to the trackedPosition and move trackedPosition to the left.
        [1, ,2,5]
        trackedPosition = 0

        Iteration 2
        1 > 1 Nop!
    Then add tmpHolder value to trackedPosition + 1
    [1,1,2,5]
    
    Iteration 2
           5      
    [1,1,2, ]
    index = 3, tmpHolder = 5, trackedPosition = 2
        Indented loop
        Iteration 1
        2 > 5! Nop! Then break. 
    Add tmpHolder number to trackedPosition + 1

    Return inputArray
*/

const insertionSort = (arr) => {
    let tempHolder = null;
    let trackedPosition = null;
    for(let i = 1; i < arr.length; i++){
        tempHolder = arr[i];
        trackedPosition = i - 1;

        while(trackedPosition >= 0) {
            if(arr[trackedPosition] > tempHolder){
                arr[trackedPosition + 1] = arr[trackedPosition];
                --trackedPosition;
            } else {
                break;
            }
        }
        
        arr[trackedPosition + 1] = tempHolder;
    }

    return arr;

};

module.exports = insertionSort;
