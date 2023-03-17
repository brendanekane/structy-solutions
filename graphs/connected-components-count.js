// iterate through nodes in the graph
// for each node do a traversal
// keep track of node in a set to prevent cycle
// on each iteration check if the node is in the set - if it is then don't even do the traversal
// increment count after a successful traversal has completed but not if we skip the traversal

// depth iterative
const traversalDepthIterative = (cur, graph, visited) => {
  cur = cur.toString();
  if (visited.has(cur)) return false;
  // do a traversal
  // return a set with all the newly visited nodes
  const stack = [cur];
  while (stack.length > 0) {
    const cur = stack.pop();
    visited.add(cur);
    for (let neighbor of graph[cur]) {
      neighbor = neighbor.toString();
      if (!visited.has(neighbor)) stack.push(neighbor);
    }
  }
  return true;
};

// depth recursive

const traversalDepthRecursive = (cur, graph, visited) => {
  cur = cur.toString();
  if (visited.has(cur)) return false;

  visited.add(cur);

  for (let neighbor of graph[cur]) {
    traversal(neighbor, graph, visited);
  }
  return true;
};

// breadth

const traversalBreadth = (cur, graph, visited) => {
  cur = cur.toString();
  if (visited.has(cur)) return false;

  const queue = [cur];

  while (queue.length > 0) {
    const cur = queue.shift();
    visited.add(cur);
    for (let neighbor of graph[cur]) {
      neighbor = neighbor.toString();
      if (!visited.has(neighbor)) queue.push(neighbor);
    }
  }
  return true;
};

const connectedComponentsCount = (graph) => {
  let count = 0;
  const visited = new Set();

  for (let node in graph) {
    if (traversal(node, graph, visited)) count++;
  }
  return count;
};
