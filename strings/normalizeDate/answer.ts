const day: string = '11';
const month: string = '12';
const year: string = '2022';

const normalizedDate: string = `${day}/${month}/${year}`;
const concatDate: string = day.concat(`/${month}/${year}`);

console.log(normalizedDate, concatDate)