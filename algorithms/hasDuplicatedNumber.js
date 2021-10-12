/*
    This algorithm validates that an array has duplicated numbers

    1.  Initialize a new array.
        newArray = []
        inputArray = [1,3,1]
    2.  Iterate over the input array.
        inputArray = [1,3,1]
        Iteration number = 1
    3.  If the newArray contains the current iteration number,
        3.1.    return true and stop the loop.
        3.2.    Add the iteration number.
                newArray = [1]
    4.  Repeat pass-through.
        Iteration 1
        Iteration number = 1
        newArray = [1] -> iteration number added
        --------------------
        Iteration 2
        Iteration number = 2
        newArray = [1,2] -> iteration number added
        --------------------
        Iteration 2
        Iteration number = 1
        newArray = [1,2] -> iteration number is not added
        return true -> because the newArray contains the iteration number. 
    4.  If newArray doesn't contain any of the numbers return false.
*/

const hasDuplicatedNumber = (arr) => {
    const existingNumbers = [];
    const exist = 'exists';

    for(let i = 0; i < arr.length -1; i++) {
        if(existingNumbers[arr[i]]) {
            return true;
        } else {
            existingNumbers[arr[i]] = exist;
        }
    }

    return false;
};

// TIME COMPLEXITY O(n)

module.exports = hasDuplicatedNumber;
