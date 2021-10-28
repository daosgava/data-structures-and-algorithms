/*
    Palindrome checker
    The idea is to compare the first half of the string with the second half

    'racecar'
     _     _
*/

const isPalindrome = (str) => {
    let leftIndex = 0;
    let rightIndex = str.length - 1;

    while(leftIndex < str.length / 2){

        if(str[leftIndex] !== str[rightIndex]){
            return false;
        }

        leftIndex++;
        rightIndex--;
    }

    return true;
};

// Time complexity O(n)

module.exports = isPalindrome;
