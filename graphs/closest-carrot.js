// breadth first traversal
// createt queue and set and instantiate both with the starting pos (queue also with distance)
// until queue is empty
// from starting position add all [neighbor, dist_from_start] to queue
// only add if they aren't an x, haven't been visited, are inbounds of grid
// if the node is a carrot return the distance

const closestCarrot = (grid, startRow, startCol) => {
  const queue = [[startRow, startCol, 0]],
    visited = new Set(`${startRow},${startCol}`);

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift(),
      cur = grid[row][col];

    if (cur === 'C') return distance;

    const deltas = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    for (let delta of deltas) {
      const deltaRow = delta[0],
        deltaCol = delta[1],
        neighborRow = row + deltaRow,
        neighborCol = col + deltaCol,
        neighborPos = `${neighborRow},${neighborCol}`,
        rowInbounds = 0 <= neighborRow && neighborRow < grid.length,
        colInbounds = 0 <= neighborCol && neighborCol < grid[0].length;
      if (
        rowInbounds &&
        colInbounds &&
        !visited.has(neighborPos) &&
        grid[neighborRow][neighborCol] !== 'X'
      ) {
        visited.add(neighborPos);
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }
  return -1;
};
