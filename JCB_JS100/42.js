// 두 수 a, b를 입력 받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수

// 2020년은 윤년입니다. (윤년 = 2월이 29일 (366일)인 해)
// 2020년 a월 b 인 실제로 있는 날입니다.
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

const month = prompt("월을 입력하세요.");
const day = prompt("일을 입력하세요.");
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
	const theDay = new Date(`2020-${a}-${b}`);
	console.log(week[theDay.getDay()]); 
}
solution(month, day);
