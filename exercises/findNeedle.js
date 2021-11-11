/*
    Find the needle in the haystack

    The needle and the haystack are strings. This algorithm will find out if
    the needle is in the haystack.

    e.g.

    haystack="abcdefg"
    needle="bcd"
    return true!

*/

const findNeedle = (needle, haystack) => {
    let haystackIndex = 0;
    let needleIndex = 0;

    while (haystackIndex < haystack.length) {
        if (needle[needleIndex] === haystack[haystackIndex]) {
            let foundNeedle = true;
            while (needleIndex < needle.length) {
                if (needle[needleIndex] !== haystack[haystackIndex + needleIndex]) {
                    return false;
                } 
                needleIndex++;
            }

            if (foundNeedle) return true;
            needleIndex = 0;
        }
        haystackIndex++;
    }

    return false;
};

// Time complexity O(n * m)

module.exports = findNeedle;
