/*
    The idea is to return the optimal number of bills for each denomination
    
    -> For this exercise there are 3 different bill
    
    e.g
    bills = [50, 20, 5] 
    80 -> [1, 1, 2]
    90 -> [1, 2, 0]
    260 -> [5, 0, 2]

*/

const withdraw = (amount, bills) =>
	bills.map((bill, index) => {
		const numOfBill = Math.floor(amount / bill);
		const currentRemainder = amount % bill;
		const nextRemainder = currentRemainder % bills[index + 1];
		const isMiddleBill = index > 0 && index < bills.length - 1;
		// If this bill is in the middle and the next bill still has a remainder, we have to skip it
		// and avoid returning this denomination so we can return an optimal number of bills
		const skip = isMiddleBill && nextRemainder;
		// Let's keep the amount and return 0 bills
		amount = skip ? amount : currentRemainder;
		return skip ? 0 : numOfBill;
	});

// Time/Space complexity O(1)

export default withdraw;
