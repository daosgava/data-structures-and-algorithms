const { printPretty } = require('./utils');
const selectionSort = require('./algorithms/selectionSort');
const binarySearch = require('./algorithms/binarySearch');
const bubbleSort = require('./algorithms/bubbleSort');
const insertionSort = require('./algorithms/insertionSort');
const hasDuplicatedNumber = require('./exercises/hasDuplicatedNumber');
const isPalindrome = require('./exercises/palindromeChecker');
const twoNumbersProduct = require('./exercises/twoNumbersProduct');

const arrForSelectionSort = [4,3,5,6,1,1,8,9,2];
printPretty(selectionSort, arrForSelectionSort);

const arrForBubbleSort = [4,3,5,6,1,1,8,9,2];
printPretty(bubbleSort, arrForBubbleSort);

const arrForBinarySearch = [1,2,3,4,5,10,100];
const num = 10;
printPretty(binarySearch, arrForBinarySearch, num);

const arrForHasDuplicatedNumbe = [4,3,5,6,12,8,9,2];
printPretty(hasDuplicatedNumber, arrForHasDuplicatedNumbe);

const arrForInsertionSort = [4,3,5,6,12,8,9,2];
printPretty(insertionSort, arrForInsertionSort);

const stringForIsPalindrome = 'racecar';
printPretty(isPalindrome, stringForIsPalindrome);

const arrForTwoNumbersProduct = [1,2,3];
printPretty(twoNumbersProduct, arrForTwoNumbersProduct);
