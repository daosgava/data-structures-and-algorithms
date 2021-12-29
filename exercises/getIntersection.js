/*
    This function return the intersection of two arrays
    e.g.
    arr1 = [1,2,3,4]
    arr2 = [2,4]

    Function returns [2,4]
*/

const getIntersection = (arr1, arr2) => {
    const subsection = [];
    const tempObj = {};

    for (const num of arr1) {
        tempObj[num] = true;
    }

    for (const num2 of arr2) {
        if (tempObj[num2]) {
            subsection.push(num2);
        }
    }

    return subsection;
};

// O(n * m) -> O(n)

module.exports = getIntersection;
