/*
    Bubble Sort -> For sorting arrays

    This algorithm sorts an array in ascending order. The idea is to pass-through the input array until
    all the numbers are sorted, placing the biggest number at the end of our input array.
    
    Input array = [4,2,1,7,3]

    1.  This algorithm runs two loops.
            An inner loop that compares all the numbers and swaps their positions
            and an outer loop that makes the inner loop to run again.
    2.  Inner loop
            In each iteration, the current number is compared to the next one.
            If the current number is greater than the next number, they must swap positions.
            e.g.
            Input array = [4,2,1,7,3]
            4 > 2 YES! SWAP POSITIONS
            [2,4,1,7,3]
            4 > 1 YES! SWAP POSITIONS
            [2,1,4,7,3]
            4 > 7 NOP
            7 > 3 YES! SWAP POSITIONS
            [2,1,4,3,7]
    3.  The previous process will move the biggest number to the last position of our input array.
        [2,1,4,3,7]
    4.  If numbers swapped positions, we will need to run the outer loop again as this may not be sorted.
    5.  Before running the next iteration, array needs to be bounded.
        last position = 4 -> New last position = 3
    6.  Run outer loop again.
        e.g.
        Iteration 1 = [2,1,4,3,7]   There were positions exchange
        Iteration 2 = [1,2,3,4,7]   There were positions exchange
        Iteration 2 = [1,2,3,4,7]   There weren't positions exchange
    7.  If no numbers were swapped, the array is in order!
*/

const bubbleSort = (arr) => {
	let unsortedIndex = arr.length - 1;
	let sorted = false;
	let temp1 = null;
	let temp2 = null;

	while (!sorted) {
		sorted = true;
		for (let i = 0; i < unsortedIndex; i++) {
			temp1 = arr[i];
			temp2 = arr[i + 1];
			if (temp1 > temp2) {
				arr[i] = temp2;
				arr[i + 1] = temp1;
				sorted = false;
			}
		}
		unsortedIndex -= 1;
	}
	return arr;
};

// TIME COMPLEXITY O(n^2)
// This algorithms is twice as slow as the selection sort.

module.exports = bubbleSort;
