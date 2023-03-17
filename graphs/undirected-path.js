// convert edges 2d arr to adjaceny list
// traverse adjaceny list and see if a path exists between nodeA and nodeB
// add each node to a set to protect against cycles

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

// breadth first

const undirectedPathBreadthFirst = (edges, nodeA, nodeB) => {
  const list = convertToAdjencyList(edges);
  console.log(list);
  const queue = [nodeA];
  const set = new Set();

  while (queue.length > 0) {
    const cur = queue.shift();
    set.add(cur);

    if (cur === nodeB) return true;

    for (let neighbor of list[cur]) {
      if (!set.has(neighbor)) queue.push(neighbor);
    }
  }
  return false;
};

// depth first recursive

const undirectedPathDepthRecursive = (edges, nodeA, nodeB) => {
  const list = convertToAdjencyList(edges);
  return hasPath(list, nodeA, nodeB, new Set());
};

const hasPath = (list, src, dst, set) => {
  if (src === dst) return true;

  if (set.has(src)) return false;
  set.add(src);

  for (let neighbor of list[src]) {
    if (hasPath(list, neighbor, dst, set)) return true;
  }
  return false;
};

// depth first iterative

const undirectedPath = (edges, nodeA, nodeB) => {
  const list = convertToAdjencyList(edges);
  const set = new Set();
  const stack = [nodeA];

  while (stack.length > 0) {
    const cur = stack.pop();
    set.add(cur);

    if (cur === nodeB) return true;

    for (let neighbor of list[cur]) {
      if (!set.has(neighbor)) stack.push(neighbor);
    }
  }
  return false;
};
