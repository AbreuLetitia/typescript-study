/**
 * this is a good article about how to deal with matrices on math
 * https://www.mathsisfun.com/algebra/matrix-introduction.html
 *
 * simplifying: when you have two matrix and you wanna sum them up you do like so:
 *
 * ⌈3  8⌉     ⌈10  8⌉  = 3 + 10 = 13; 8 + 8 = 16;
 * ⌊4 6⌋  + ⌊  4   6⌋ = 4 + 4 = 8; 6 + 6 = 12;
 *
 * lets build it.
 * in javascript we will define matrices as arrays of arrays. like so:
 * [ [3, 8], [10, 8] ]
 *
 * your job is to take two matrices and sum them together c:
 */

const matrixOne: number[][] = [[3, 8], [4, 6]];
const matrixTwo: number[][] = [[4, 0], [1, -9]];