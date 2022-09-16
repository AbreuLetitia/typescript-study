const password: string = 'Oiiiitchau$@';

const isTwelveLength: boolean = password.length === 12
const hasSymbols: boolean = password.includes('!') || password.includes('@') || password.includes('#') || password.includes('$') || password.includes('%') || password.includes('^') || password.includes('&') || password.includes('*')
const isFirstLetterUpperCase: boolean = password.charAt(0) === password.charAt(0).toUpperCase();

const isValidPassword: boolean = isTwelveLength && hasSymbols && isFirstLetterUpperCase;
console.log(isValidPassword);