export default function Board (row1, row2, row3, row4, row5, row6, row7, row8, row9){
  this.columns = {};
  this.rows = {};
  for (let i=0; i < arguments.length; i++) {
    this.rows[i+1] = arguments[i];
  }
}


Board.prototype.areThereDuplicates = function(array) {
  return new Set(array).size !== array.length;
};

Board.prototype.makeMeSomeColumns = function() {
  let output = [];
  let thisRow = [];
  for (let i=0; i < 9; i++) {
    for (let j=1; j < 10; j++) {
      thisRow = this.rows[j];
      output.push(thisRow[i]);
    }
    this.columns[i+1] = output;
    output = [];
  }
};
