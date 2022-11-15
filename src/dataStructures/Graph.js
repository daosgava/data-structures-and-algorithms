import Queue from './Queue.js';

class Graph {
	constructor(noOfNodes) {
		this.nOfNodes = noOfNodes;
		this.adjList = new Map();
	}

	addNode(node) {
		this.adjList.set(node, []);
	}

	addEdge(v, w) {
		this.adjList.get(v).push(w);
		this.adjList.get(w).push(v);
	}

	printGraph() {
		const nodes = this.adjList.keys();

		[...nodes].forEach((node) => {
			const adjNodes = this.adjList.get(node);
			const adjString = adjNodes.reduce(
				(acc, node) => `${acc} ${node} `,
				''
			);
			console.log(`${node}-> ${adjString}`);
		});
	}

	bfs(startingNode) {
		const visited = {};
		const queue = new Queue();

		visited[startingNode] = true;
		queue.enqueue(startingNode);

		let queueElement = null;
		let adjList = null;

		while (!queue.isEmpty()) {
			queueElement = queue.dequeue();
			console.log(queueElement);

			adjList = this.adjList.get(queueElement);

			[...adjList].forEach((node) => {
				if (!visited[node]) {
					visited[node] = true;
					queue.enqueue(node);
				}
			});
		}
	}
}

export default Graph;
