module.exports = function towelSort (matrix) {
    if (matrix === undefined){
        return [];
    }
    let arr = [];
    let i = 0;
    while(i < matrix.length){
        if (i === 0 || i % 2 === 0){
            arr.push(matrix[i]);
        } else if (i != 0 && i % 2 != 0){
            arr.push(matrix[i].reverse());
        }
        i++;
    }
  return arr.flat();
}
