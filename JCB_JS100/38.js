// 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 
// 1위 ~ 3위 학생은 여러 명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다. 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

const scores = prompt("학생들의 점수를 입력해주세요.")
  .split(" ")
  .map(n => parseInt(n, 10));

scores.sort((a, b) => a - b);

let top = [];  // 학생들의 점수
let count = 0; // 학생들의 명수

while (top.length < 4) {
  let n = scores.pop();
  if (!top.includes(n)) top.push(n);
  count ++;
}

console.log(count-1);
