const str = prompt("문자를 입력하세요.");
const n = 25+parseInt((str.length/2), 10);

const left = str.padStart(n, '=');
const right = left.padEnd(50,'=');
console.log(right);
