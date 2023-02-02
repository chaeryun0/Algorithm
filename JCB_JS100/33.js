// 한 줄에 여러 개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력

// 풀이 1 - for문
const n = prompt("5개의 숫자를 입력하세요.").split(" ").reverse(); 
let result = ""; // 배열을 저장할 변수

for (let i = 0; i < n.length; i++) { 
	result += n[i]; 
} 
console.log(result);


// 풀이 2 - 반복문 없이 값을 한번에 출력
const n = prompt("5개의 숫자를 입력하세요");
const result = n.split(" ").reverse().join(" ");
console.log(result);
