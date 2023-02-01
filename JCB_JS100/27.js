// 학생의 이름이 key이고 value가 수학 점수인 객체를 출력

const keys = prompt("이름을 입력하세요.").split(" "); 
const values = prompt("점수를 입력하세요.").split(" "); 
const obj = {}; 

for (let i = 0; i < keys.length; i++) { 
	obj[keys[i]] = Number(values[i]); 
} 
console.log(obj)
