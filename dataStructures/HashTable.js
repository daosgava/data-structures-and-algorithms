/*
    Hash Table Implementation

    It's implemented on top of arrays and it stores each key/value pair as [key, value].
    Each key is converted to a number which represents an index where the actual
    key/value pair will be stored.

    // Abstraction
    hashtable = {
        key1: 1,
        eky1: 1,
        key2: 1,
    };

    // Actual structure
    hashtable = [
        [// let's say that key1 is equal to 0
            ['key1', 1],
            ['eky1', 1], // then eky1 should also be equal to 0 and it should go here
        ],
        [
            ['key2', 1],
        ],
    ]
*/

const HashTable = function () {
	const tableSize = 127;
	const table = new Array(tableSize);
	this.size = 0;

	// This function converts an input string into a number between 0 and the tableSize
	const hash = (key) => {
		let num = 0;
		for (let i = 0; i < key.length; i++) {
			// Adding up the UTF-16 code unit of each character
			num += key.charCodeAt(i);
		}

		// Reminder is always less than the divisor which in this case 127
		return num % tableSize;
	};

	this.set = function (key, value) {
		// It converts the key to a number
		const index = hash(key);

		// If there's an array in that index
		if (Array.isArray(table[index])) {
			// Pass-through the subarray
			// which potentially contains a list of [key, value]
			// e.g subarray = [[key1, value], [key2, value]]
			const subArray = table[index];
			for (let i = 0; i < subArray.length; i++) {
				// If the key exists, it's overwritten
				if (subArray[i][0] === key) {
					subArray[i][1] = value;
					return;
				}
			}
			// If key does not exist it is added to table[index]
			subArray.push([key, value]);
		} else {
			table[index] = [];
			table[index].push([key, value]);
		}

		// Keep track of the size
		this.size++;
	};

	this.get = function (key) {
		const index = hash(key);
		if (Array.isArray(table[index])) {
			const subArray = table[index];
			for (let i = 0; i < subArray.length; i++) {
				// If the key exists, the value is returned
				if (subArray[i][0] === key) {
					return subArray[i][1];
				}
			}
		}

		return undefined;
	};

	this.remove = function (key) {
		const index = hash(key);

		if (Array.isArray(table[index])) {
			const subArray = table[index];
			for (let i = 0; i < subArray.length; i++) {
				// If the key exists, the value is returned
				if (subArray[i][0] === key) {
					subArray.splice(i, 1);
					this.size--;
					return true;
				}
			}
		} else {
			return false;
		}
	};
};

// TIME COMPLEXITY Searching/get is O(1) on an average scenario.
// Worst case-scenario all the key/value pairs end up in the same cell -> TIME COMPLEXITY O(ngi)

module.exports = HashTable;
