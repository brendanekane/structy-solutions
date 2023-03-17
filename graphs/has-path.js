// depth first iterative

const hasPathDepthIterative = (graph, src, dst) => {
  const stack = [src];

  while (stack.length > 0) {
    const cur = stack.pop();
    if (cur === dst) return true;
    for (let neighbor of graph[cur]) {
      stack.push(neighbor);
    }
  }
  return false;
};

// depth first recursive

const hasPathDepthRecursive = (graph, src, dst) => {
  if (src === dst) return true;
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) return true;
  }
  return false;
};

// breadth first

const hasPathBreadth = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const cur = queue.shift();

    if (cur === dst) return true;

    for (let neighbor of graph[cur]) {
      queue.push(neighbor);
    }
  }
  return false;
};
