// 학생의 이름이 key이고 value가 수학 점수인 객체를 출력

// 풀이 1 - for문
const keys = prompt("이름을 입력하세요.").split(" "); 
const values = prompt("점수를 입력하세요.").split(" "); 
const obj = {}; 

for (let i = 0; i < keys.length; i++) { 
	obj[keys[i]] = Number(values[i]); 
} 
console.log(obj)


// 풀이 2 - 구조분해할당
// 자바스크립트에서 구조 분해 할당은 []에 순서대로 할당할 이름을 넣어주면 객체가 생성된다.

const keys = prompt("이름을 입력하세요.").split(" "); 
const values = prompt("점수를 입력하세요.").split(" ");

const [keys1, keys2] = keys
const [values1, values2] = values

const obj = { [keys1]: values1, [keys2]: values2 };
console.log(obj);
