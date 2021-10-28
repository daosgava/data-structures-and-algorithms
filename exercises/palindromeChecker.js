/*
    Palindrome checker
    -   The idea is to compare the first half of the string with the second half
    -   Letters from each side should match

    E.g
    Input string = 'racecar'

    Iteration 1
    'racecar'
     _     _
    
    r === r ? YES!

    Iteration 2 
    'racecar'
      _   _
    
    a === a ? YES!

    Iteration 3 
    'racecar'
       _ _
    
    c === c ? YES!

    Iteration 4 
    'racecar'
        _
    
    e === e ? YES!

    It's palindrome!
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
