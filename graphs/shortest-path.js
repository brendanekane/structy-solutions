const convertToAdjencyList = (edges) => {
  const list = {};
  for (let edge of edges) {
    const nodeA = edge[0];
    const nodeB = edge[1];

    !list[nodeA] ? (list[nodeA] = [nodeB]) : list[nodeA].push(nodeB);
    !list[nodeB] ? (list[nodeB] = [nodeA]) : list[nodeB].push(nodeA);
  }

  return list;
};

// breadth first search
// because of how breadth first search works, the first time we find a path will always be the shortest path

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = convertToAdjencyList(edges);
  const queue = [[nodeA, 0]];
  const visited = new Set();

  while (queue.length > 0) {
    const [cur, distance] = queue.shift();
    visited.add(cur);

    if (cur === nodeB) return distance;

    for (let neighbor of graph[cur]) {
      if (!visited.has(neighbor)) queue.push([neighbor, distance + 1]);
    }
  }
  return -1;
};
