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
		let adjNodes = null;

		while (!queue.isEmpty()) {
			queueElement = queue.dequeue();
			console.log(queueElement);

			adjNodes = this.adjList.get(queueElement);

			[...adjNodes].forEach((node) => {
				if (!visited[node]) {
					visited[node] = true;
					queue.enqueue(node);
				}
			});
		}
	}

	dfs(startingNode) {
		const visited = {};
		this.dfsUtil(startingNode, visited);
	}

	dfsUtil(node, visited) {
		visited[node] = true;
		console.log(node);

		const adjNodes = this.adjList.get(node);

		[...adjNodes].forEach((node) => {
			if (!visited[node]) {
				visited[node] = true;
				this.dfsUtil(node, visited);
			}
		});
	}
}

export default Graph;
