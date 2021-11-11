/*
    This algorithm validates that an array has duplicated numbers. The idea is to add every
    number to a new array/object, validating whether the number was already included to the array.

    1.  Iterate over the input array
        inputArray = [1,3,1]
    2.  Initialize a new array
        newArray = []
    3.  If the newArray contains the current iteration number,
        3.1.    Return true and stop the loop.
        3.2.    Add the iteration number.
                newArray = [1]
    4.  Repeat pass-through.
    e.g.
        Iteration 1
        Iteration number = 1
        newArray = [1] -> Add iteration number
        --------------------
        Iteration 2
        Iteration number = 2
        newArray = [1,2] -> Add iteration number added
        --------------------
        Iteration 3
        Iteration number = 1
        newArray = [1,2] -> Iteration number was already added.
        return true -> Because the newArray contains the iteration number. 
    5.  If newArray doesn't contain any of the numbers return false.
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
