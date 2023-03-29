// iterate through grid, row by row
// when I find land, start a depth first traversal and add each node(grid pos)
// to a visited set
// once I visit all nodes on island increment island count by 1
// continue iteration

const depthFirstTraversal = (grid, rowIdx, colIdx, visited) => {
  const rowInbounds = 0 <= rowIdx && rowIdx < grid.length;
  const colInbounds = 0 <= colIdx && colIdx < grid[0].length;
  // out of bounds
  if (!rowInbounds || !colInbounds) return false;

  // is water
  if (grid[rowIdx][colIdx] === 'W') return false;

  const pos = `${rowIdx},${colIdx}`;

  // already visited
  if (visited.has(pos)) return false;

  visited.add(pos);

  // explore neighbors
  depthFirstTraversal(grid, rowIdx - 1, colIdx, visited);
  depthFirstTraversal(grid, rowIdx + 1, colIdx, visited);
  depthFirstTraversal(grid, rowIdx, colIdx - 1, visited);
  depthFirstTraversal(grid, rowIdx, colIdx + 1, visited);

  return true;
};

const islandCount = (grid) => {
  let islandCount = 0;
  const visited = new Set();

  grid.forEach((row, rowIdx) => {
    grid.forEach((el, colIdx) => {
      if (depthFirstTraversal(grid, rowIdx, colIdx, visited)) islandCount++;
    });
  });
  return islandCount;
};
