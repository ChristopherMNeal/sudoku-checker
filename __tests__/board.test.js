import Board from '../src/board.js';

describe('Board', () => {

  test('should correctly make an sudoku row object with an array of 9 numbers', () => {
    const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(board.row1).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});