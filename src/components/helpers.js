export function calculateWinner(cells) {
  const lines = [
    // 3 số liền kề ngang
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // 3 số liền kề dọc
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // 3 số chéo [0, 4, 8], [2, 4, 6]
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index];

    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}
