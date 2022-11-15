class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(item) {
		this.items.push(item);
	}

	dequeue(item) {
		if (this.isEmpty()) console.log('The queue is empty');

		return this.items.shift(item);
	}

	front() {
		return this.items[0];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	printQueue() {
		return this.items.reduce((acc, item) => ` ${acc} ${item}`, '');
	}
}

export default Queue;
