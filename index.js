import { printPretty } from './src/utils/index.js';
import {
	selectionSort,
	binarySearch,
	bubbleSort,
	insertionSort,
} from './src/algorithms/index.js';
import {
	hasDuplicatedNumber,
	isPalindrome,
	twoNumbersProduct,
	mergeTwoArrays,
	mergeTwoSortedArrays,
	findNeedle,
	largestConsecutiveProduct,
	isSubset,
	getIntersection,
	withdraw,
	duplicateZeros,
	deletingDuplicatedNumbers,
	validMountainArray,
	moveZeros,
} from './src/exercises/index.js';
import { HashTable, Stack, Graph, Queue } from './src/dataStructures/index.js';

console.log(`
    	*** Playground ಠωಠ ***
`);

const arrForSelectionSort = [4, 3, 5, 6, 1, 1, 8, 9, 2];
printPretty(selectionSort, arrForSelectionSort);

const arrForBubbleSort = [4, 3, 5, 6, 1, 1, 8, 9, 2];
printPretty(bubbleSort, arrForBubbleSort);

const arrForBinarySearch = [1, 2, 3, 4, 5, 10, 100];
const num = 10;
printPretty(binarySearch, arrForBinarySearch, num);

const arrForHasDuplicatedNumbe = [4, 3, 5, 6, 12, 8, 9, 2];
printPretty(hasDuplicatedNumber, arrForHasDuplicatedNumbe);

const arrForInsertionSort = [4, 3, 5, 6, 12, 8, 9, 2];
printPretty(insertionSort, arrForInsertionSort);

const stringForIsPalindrome = 'racecar';
printPretty(isPalindrome, stringForIsPalindrome);

const arrForTwoNumbersProduct = [1, 2, 3];
printPretty(twoNumbersProduct, arrForTwoNumbersProduct);

const arr1ForMergeTwoArrays = [6, 7, 13];
const arr2ForMergeTwoArrays = [5, 7, 23];
printPretty(mergeTwoArrays, arr1ForMergeTwoArrays, arr2ForMergeTwoArrays);

const needle = 'ac';
const haystack = 'fghabcpoi';
printPretty(findNeedle, needle, haystack);

const arrForLargestConsecutiveProduct = [1, 2, 3, 4, 5, 6, 7];
const consecutiveNumbers = 3;
printPretty(
	largestConsecutiveProduct,
	arrForLargestConsecutiveProduct,
	consecutiveNumbers
);

const arr1ForIsSubset = [6, 7, 13, 23];
const arr2ForIsSubset = [6, 7, 23];
printPretty(isSubset, arr1ForIsSubset, arr2ForIsSubset);

const myHashTable = HashTable();
// Adding elements
myHashTable.set('bad', 5);
myHashTable.set('bad', 4);
// Dealing with collisions
myHashTable.set('dab', 6);
myHashTable.set('dad', 7);
myHashTable.set(5, 55555);
// Removing
myHashTable.remove('dad');
console.log(`
        ### HashTable ###
        bad: ${myHashTable.get('bad')}
        dab: ${myHashTable.get('dab')}
        dad: ${myHashTable.get('dad')}
        5: ${myHashTable.get(5)}
        unexisting prop: ${myHashTable.get('unexisting')}
        HashTable size: ${myHashTable.size}
`);

const arr1ForGetIntersection = [1, 2, 3, 4, 9];
const arr2ForGetIntersection = [4, 9];
printPretty(getIntersection, arr1ForGetIntersection, arr2ForGetIntersection);

const bills = [100, 50, 20];

printPretty(withdraw, 260, bills);
printPretty(withdraw, 190, bills);
printPretty(withdraw, 130, bills);

const myStack = Stack();
console.log(`
	### Stack ###
	Push ${myStack.push(6) && '6'}
	Top item: ${myStack.read()}
	Push ${myStack.push(3) && '3'}
	Top item: ${myStack.read()}
	Push ${myStack.push(8) && '8'}
	Top item: ${myStack.read()}
	Pop ${myStack.pop()}
	Top item: ${myStack.read()}
`);

let nums1 = [1, 2, 3, 0, 0, 0];
const m = 3,
	nums2 = [2, 5, 6],
	n = 3;
printPretty(mergeTwoSortedArrays, nums1, m, nums2, n);

let arrForDuplicateZeros = [1, 2, 3, 0, 4, 5, 0, 2, 9];
printPretty(duplicateZeros, arrForDuplicateZeros);

let arrForDeletingDuplicatedNumbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(`
	### Deleting Duplicated Numbers ###
	input arr: ${arrForDeletingDuplicatedNumbers}
	arr length: ${deletingDuplicatedNumbers(arrForDeletingDuplicatedNumbers)}
	mutated arr: ${arrForDeletingDuplicatedNumbers}
`);

const arrForValidMountainArray = [0, 1, 2, 3, 1];
printPretty(validMountainArray, arrForValidMountainArray);

const moveZerosArr = [0, 1, 0, 3, 12];
printPretty(moveZeros, moveZerosArr);

const myGraph = new Graph(6);
const nodes = ['A', 'B', 'C', 'D', 'E', 'F'];

for (const node of nodes) {
	myGraph.addNode(node);
}

myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'D');
myGraph.addEdge('A', 'E');
myGraph.addEdge('B', 'C');
myGraph.addEdge('C', 'E');
myGraph.addEdge('C', 'F');
myGraph.addEdge('D', 'E');
myGraph.addEdge('E', 'F');

console.log(`### Graph ###`);
myGraph.printGraph();
console.log(`### bts Traversal ###`);
myGraph.bfs('A');
console.log(`### Graph ###`);

const myQueue = new Queue();
myQueue.enqueue(7);
myQueue.dequeue();
myQueue.enqueue(6);
myQueue.enqueue(9);
myQueue.enqueue(6);

console.log(`### Queue ###`);
console.log(myQueue.printQueue());
console.log(`### Queue ###`);
