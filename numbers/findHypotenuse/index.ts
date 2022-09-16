/**
 * So this is the Pythagorean theorem formula: hypotenuse = √a²+b²
 * use number, its properties and methods get the hypotenuse based off this formula.
 */

const a: number = 5;
const b: number = 12;

const a2 = Math.pow(a, 2);
const b2 = Math.pow(b, 2);

const total = Math.sqrt(a2 + b2);

console.log(total);
