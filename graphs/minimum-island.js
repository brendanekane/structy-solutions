const traverse = (grid, rowIdx, colIdx, visited) => {
  const rowInbounds = 0 <= rowIdx && rowIdx < grid.length;
  const colInbounds = 0 <= colIdx && colIdx < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  if (grid[rowIdx][colIdx] === 'W') return 0;

  const pos = `${rowIdx},${colIdx}`;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;

  size += traverse(grid, rowIdx - 1, colIdx, visited);
  size += traverse(grid, rowIdx + 1, colIdx, visited);
  size += traverse(grid, rowIdx, colIdx - 1, visited);
  size += traverse(grid, rowIdx, colIdx + 1, visited);

  return size;
};

const minimumIsland = (grid) => {
  let smallest = Infinity;
  const visited = new Set();

  grid.forEach((row, rowIdx) => {
    grid.forEach((el, colIdx) => {
      const islandSize = traverse(grid, rowIdx, colIdx, visited);
      if (islandSize > 0 && islandSize < smallest) smallest = islandSize;
    });
  });
  return smallest;
};
