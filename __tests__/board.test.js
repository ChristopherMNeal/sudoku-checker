import Board from '../src/board.js';

describe('Board', () => {
let reusableBoard;

  beforeEach(() => {
    reusableBoard = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3, 4, 5, 6, 7, 8, 9, 1], [3, 4, 5, 6, 7, 8, 9, 1, 2], [4, 5, 6, 7, 8, 9, 1, 2, 3], [5, 6, 7, 8, 9, 1, 2, 3, 4], [6, 7, 8, 9, 1, 2, 3, 4, 5], [7, 8, 9, 1, 2, 3, 4, 5, 6], [8, 9, 1, 2, 3, 4, 5, 6, 7], [9, 1, 2, 3, 4, 5, 6, 7, 7]);
  });

  test('should correctly make an sudoku row object with an array of 9 numbers', () => {
    // const board = new Board([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(reusableBoard.rows[1]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('should return false if the object contains no duplicate numbers', () => {
    // const board = new Board([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(reusableBoard.areThereDuplicates(reusableBoard.rows[1])).toEqual(false);
  });
  test('should return true if the row object does contain duplicate numbers', () => {
    // const board = new Board([9, 8, 7, 6, 5, 4, 3, 2, 2]);
    expect(reusableBoard.areThereDuplicates(reusableBoard.rows[9])).toEqual(true);
  });
  test('should return an array to represent the first column of the board object', () => {
    reusableBoard.makeMeSomeColumns();
    expect(reusableBoard.columns[1]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test('should return true if the column object does contain duplicate numbers', () => {
    reusableBoard.makeMeSomeColumns();
    expect(reusableBoard.areThereDuplicates(reusableBoard.columns[9])).toEqual(true);
  });
});