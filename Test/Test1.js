// 1. Transpose of a Matrix
let matrixA = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let transposedMatrix = [[], []];
for (let i = 0; i < matrixA.length; i++) {
  transposedMatrix[0].push(matrixA[i][0]);
  transposedMatrix[1].push(matrixA[i][1]);
}
console.log("Transpose:", transposedMatrix);

// 2. Diagonal Sum of Square Matrix
let squareMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let diagonalSum = 0;
for (let i = 0; i < squareMatrix.length; i++) {
  diagonalSum += squareMatrix[i][i]; 
  diagonalSum += squareMatrix[i][squareMatrix.length - 1 - i]; 
}
if (squareMatrix.length % 2 === 1) diagonalSum -= squareMatrix[1][1];
console.log("Diagonal Sum:", diagonalSum);

// 3. Spiral Print of Matrix
let matrixC = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let spiralOrder = [];
spiralOrder.push(matrixC[0][0], matrixC[0][1], matrixC[0][2]);
spiralOrder.push(matrixC[1][2], matrixC[2][2]);
spiralOrder.push(matrixC[2][1], matrixC[2][0]);
spiralOrder.push(matrixC[1][0], matrixC[1][1]);
console.log("Spiral Order:", spiralOrder);

// 4. Search in 2D Matrix
let matrixD = [
  [1, 2, 3],
  [4, 5, 6]
];

let targetNumber = 5;
let isFound = false;
for (let i = 0; i < matrixD.length; i++) {
  if (matrixD[i].includes(targetNumber)) {
    isFound = true;
    break;
  }
}
console.log("Found:", isFound);

// 5. Rotate Matrix by 90 Degrees Clockwise
let matrixE = [
  [1, 2],
  [3, 4]
];

let rotatedMatrix = [
  [matrixE[1][0], matrixE[0][0]],
  [matrixE[1][1], matrixE[0][1]]
];
console.log("Rotated:", rotatedMatrix);

// 6. Count Zeros and Ones in a Matrix
let binaryMatrix = [
  [1, 0, 1],
  [1, 1, 0],
  [0, 0, 1]
];

let zeroCount = 0, oneCount = 0;
for (let row of binaryMatrix) {
  for (let val of row) {
    if (val === 0) zeroCount++;
    else oneCount++;
  }
}
console.log("0s =", zeroCount, "1s =", oneCount);

// 7. Set Matrix Zeros
let matrixG = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
];

let zeroRows = [], zeroCols = [];
for (let i = 0; i < matrixG.length; i++) {
  for (let j = 0; j < matrixG[i].length; j++) {
    if (matrixG[i][j] === 0) {
      zeroRows.push(i);
      zeroCols.push(j);
    }
  }
}
for (let i of zeroRows) {
  for (let j = 0; j < matrixG[0].length; j++) {
    matrixG[i][j] = 0;
  }
}
for (let j of zeroCols) {
  for (let i = 0; i < matrixG.length; i++) {
    matrixG[i][j] = 0;
  }
}
console.log("Zeroed Matrix:", matrixG);

// 8. Count Elements Greater than a Threshold
let matrixH = [
  [2, 5, 7],
  [1, 8, 3]
];

let greaterCount = 0;
for (let i = 0; i < matrixH.length; i++) {
  for (let j = 0; j < matrixH[i].length; j++) {
    if (matrixH[i][j] > 5) {
      greaterCount++;
    }
  }
}
console.log("Greater than 5:", greaterCount);

// 9. Find Row with Maximum Sum
let matrixI = [
  [1, 2, 3],
  [4, 5, 6],
  [0, 1, 1]
];

let maxRowSum = 0;
let rowWithMaxSum = [];
for (let row of matrixI) {
  let rowSum = row.reduce((a, b) => a + b, 0);
  if (rowSum > maxRowSum) {
    maxRowSum = rowSum;
    rowWithMaxSum = row;
  }
}
console.log("Max Row:", rowWithMaxSum);

// 10. Boundary Elements of a Matrix
let matrixJ = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let boundaryElements = [];
for (let k = 0; k < matrixJ[0].length; k++) boundaryElements.push(matrixJ[0][k]);
for (let m = 1; m < matrixJ.length - 1; m++) boundaryElements.push(matrixJ[m][matrixJ[0].length - 1]);
for (let n = matrixJ[0].length - 1; n >= 0; n--) boundaryElements.push(matrixJ[matrixJ.length - 1][n]);
for (let m = matrixJ.length - 2; m > 0; m--) boundaryElements.push(matrixJ[m][0]);
console.log("Boundary Elements:", boundaryElements);
