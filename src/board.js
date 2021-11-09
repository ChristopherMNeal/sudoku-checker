export default function Board (row1){
  this.row1 = row1;
  // this.row2 = row2;
  // this.row3 = row3;
  // this.row4 = row4;
  // this.row5 = row5;
  // this.row6 = row6;
  // this.row7 = row7;
  // this.row8 = row8;
  // this.row9 = row9;
}

// row2, row3, row4, row5, row6, row7, row8, row9


Board.prototype.areThereDuplicates = function(array) {
  return new Set(array).size !== array.length;
};