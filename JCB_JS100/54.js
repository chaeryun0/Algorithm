// 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속 수 인지 아닌지 "YES"와 "NO"로 판별하는 프로그램 작성

const num = prompt("스탬프의 숫자를 입력하세요.")
  .split(" ") 
  .sort();  
 
function solution(num){
	for (let i = 0; i < num.length - 1; i++) {
	  if (Number(num[i]) + 1 !== Number(num[i + 1])) { 
    return "NO";
	  }
	}
	return "YES"
}
console.log(solution(num));
