
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!arguments.length || !matrix.length){
    return [];
  }
  else {
    for (let i = 1; i<matrix.length; i+=2){
    matrix[i].reverse();
  }
  let res = matrix.reduce((acc, val) => acc.concat(val), []);
  return res;
}
}
