// 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 
// 1위 ~ 3위 학생은 여러 명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다. 학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

// 풀이 1
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


// 풀이 2 
const scores = "97 86 75 66 55 97 85 97 97 95".split(" ");
scores.sort((a,b) => b - a);
let top = scores.filter((e,i) => scores.indexOf(e) === i).slice(0,3);
let count = 0;

for(let i = 0; i < scores.length; i++){
  let n = scores[i];
  if(top.includes(n)) count ++;
}

console.log(top);    // ["97", "95", "86"]
console.log(count); // 6


// 풀이 3
const score = "97 86 75 66 55 97 85 97 97 95".split(" ").sort((a,b)=> b-a).map(Number);
  let answer = 0;
  let set = Array.from(new Set(score));

  for (let i = 0; i < score.length; i++){
      if(score[i] === set[0] || score[i] === set[1] || score[i] === set[2]) {
          answer++;
      }
  }

console.log(answer);
