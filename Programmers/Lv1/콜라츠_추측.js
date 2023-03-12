// 풀이 1 - while문, 삼항 연산자
function solution(num) {
    let answer = 0;

    while(num !== 1) {
        num%2 === 0 ? num = num/2 : num = num*3 +1;
        answer ++;

        if(answer === 500) { // 반복 횟수가 500이면 1이 되지 않은 경우에 해당
            answer = -1;
            break
        }
    }

    return answer;
}


// 풀이 2 - while문, 삼항 연산자
function collatz(num) {
    var answer = 0;
    while(num !=1 && answer !=500){
        num%2==0 ? num = num/2 : num = num*3 +1;
	      answer++;
  }
    return num == 1 ? answer : -1;
}


// 풀이 3 - while문, 삼항 연산자
function solution(num) {
  let answer = 0;
  while (answer <= 500) {
    if (num === 1) return answer;
    num = num%2 === 0 ? num/2 : num*3 +1;
    answer += 1;
  }
  return -1;
}
