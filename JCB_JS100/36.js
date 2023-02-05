const n = prompt("숫자를 입력해주세요"); 
let result = "";  // 결과를 저장할 변수

for (let i = 1; i <= 9; i++) {
	result += n * i + ' '; 
} 
console.log(result);
