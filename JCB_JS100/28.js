// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법
// 입력으로 문자열이 주어지면 2-gram으로 출력

// 풀이 1 - for문
const str = prompt("문자를 입력하세요.") 
for (let i = 0; i < str.length-1; i++) { 
	console.log(str[i], str[i + 1]); 
}

// str.length-1 에서 -1 없이 str.length 만 해주면 마지막 문자 str[i+1]에서 undefined를 출력함
// 항상 마지막 문자는 자기 다음으로 연속해서 오는 문자가 없기 때문에 1번 덜 회전하게 해주면 undefined 없이 결과를 출력할 수 있다.


// 풀이 2 - for문, slice()

const str = prompt("문자를 입력하세요.");
for (let i = 0; i < str.length-1; i++) {
  console.log(str.slice(i, i + 2));
}

// 연속된 두 글자씩만 추출
