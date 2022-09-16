const date: string = '12/03/2023';

const day: string = date.slice(0, 2);
const month: string = date.slice(3, 5);
const year: string = date.slice(6, 11);

console.log(day, month, year);