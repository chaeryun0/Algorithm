// 풀이 1 - parseInt
const str = prompt("문자를 입력하세요.");
const n = 25+parseInt((str.length/2), 10);

const left = str.padStart(n, '=');
const right = left.padEnd(50,'=');
console.log(right);

// 풀이 2 - Math.floor
const str = prompt("문자를 입력하세요.");
const n = str.padStart(25 + Math.floor(str.length / 2), '=');
console.log(n.padEnd(50, '='));
