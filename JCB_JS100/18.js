// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. (단, 소수점 자리는 모두 버립니다.)

const score = prompt('세 과목의 점수를 입력하세요.').split(' '); 
let sum = 0; 

for (let i=0; i<score.length; i++){ 
	sum += parseInt(score[i], 10); // 10진수 형태의 숫자로 데이터 타입을 변환 
} 
console.log(Math.floor(sum/score.length)); 

// Math.floor() : 주어진 값보다 이하의 가장 큰 정수를 반환, 소수점 자리를 모두 버림
