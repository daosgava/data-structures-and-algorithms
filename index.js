const { printPretty } = require('./utils');
const selectionSort = require('./algorithms/selectionSort');
const binarySearch = require('./algorithms/binarySearch');
const bubbleSort = require('./algorithms/bubbleSort');
const hasDuplicatedNumber = require('./algorithms/hasDuplicatedNumber');

const arrForSelectionSort = [4,3,5,6,1,1,8,9,2];
printPretty(selectionSort, arrForSelectionSort);

const arrForBubbleSort = [4,3,5,6,1,1,8,9,2];
printPretty(bubbleSort, arrForBubbleSort);

const arrForBinarySearch = [1,2,3,4,5,10,100];
const num = 10;
printPretty(binarySearch, arrForBinarySearch, num);

const arrForHasDuplicatedNumbeH = [4,3,5,6,12,8,9,2];
printPretty(hasDuplicatedNumber, arrForHasDuplicatedNumbeH);
