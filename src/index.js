module.exports = function solveSudoku(matrix) {
   
  solverSudoku(matrix);

  function checkValidation(matrix, horizontal, vertical, number) {
    for (let i = 0; i < 9; i++) {
      let horizontalBox = 3 * Math.floor(horizontal / 3) + Math.floor(i / 3); 
      let verticalBox = 3 * Math.floor(vertical / 3) + i % 3;
      if (number == matrix[horizontal][i] || number == matrix[i][vertical] || number == matrix[horizontalBox][verticalBox]) {
        return false;
      }
    }
    return true;
  }

  function solverSudoku(matrix) {
    for (let horizontal = 0; horizontal < 9; horizontal++) {
      for (let vertical = 0; vertical < 9; vertical++){
        if (matrix[horizontal][vertical] === 0) {
        for (let number = 1; number < 10; number++) {
          if (checkValidation(matrix, horizontal, vertical, number)) {
           matrix[horizontal][vertical] = number;
             if (solverSudoku(matrix)) {
              return true;
             }  matrix[horizontal][vertical] = 0;
          }
        }
        return false;
        }
      }
    }
    return true;
  }
  return matrix;
}