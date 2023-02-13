// 풀이 1 - while문

let n = prompt('숫자를 입력하세요.');
let sum = 0;

while(n !== 0){
  sum += (n % 10);
  n = Math.floor(n/10);
}
console.log(sum);


// 풀이 2 - split()과 for문 활용, 배열을 분리하여 각 원소의 값을 모두 더하는 방식

let n = prompt("숫자를 입력하세요")
  .split("")
	.map((n) => parseInt(n, 10));

let sum = 0;

for (let i = 0; i < n.length; i++) {
  sum += n[i];
}
console.log(sum);
