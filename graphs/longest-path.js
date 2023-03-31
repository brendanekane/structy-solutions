// depth first recursive
// store max distances of nodes in obj
// iterate through nodes to find terminal nodes and set equal to 0 in obj
// iterate through nodes in graph
// pass node into traversal function with graph and distances obj
// base case - terminal node/node in distances return distances[node];
// iterate through nodes and pass into traversal
// assign return of recursive call to a curDist var
// if max < curDist reassign
// put node into distances with max + 1 and return distances[node]

const traversal = (node, graph, distances) => {
  if (node in distances) return distances[node];

  let max = 0;
  for (let neighbor of graph[node]) {
    const curDist = traversal(neighbor, graph, distances);
    if (max < curDist) {
      max = curDist;
    }
  }
  distances[node] = max + 1;
  return distances[node];
};

const longestPath = (graph) => {
  const distances = {};

  for (let node in graph) {
    if (graph[node].length === 0) distances[node] = 0;
  }

  for (let node in graph) {
    traversal(node, graph, distances);
  }
  return Math.max(...Object.values(distances));
};
