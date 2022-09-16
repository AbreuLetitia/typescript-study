const matrixOne: number[][] = [[3, 8], [4, 6]];
const matrixTwo: number[][] = [[4, 0], [1, -9]];

// manually
const addMatrix = {
  firstIndex: [matrixOne[0][0] + matrixTwo[0][0], matrixOne[0][1] + matrixTwo[0][1]],
  secondIndex: [matrixOne[1][0] + matrixTwo[1][0], matrixOne[1][1] + matrixTwo[1][1]],
  get result () {
    return [this.firstIndex, this.secondIndex]
  }
}

// automatically
let result: number[][] = [];

matrixOne.forEach((arrOne, indexOne) => {
  let matrix: number[] = [];

  matrixTwo.forEach((_, indexTwo) => {
    matrix.push(arrOne[indexTwo] + matrixTwo[indexOne][indexTwo]);
  });

  result.push(matrix);
});

console.log(result);