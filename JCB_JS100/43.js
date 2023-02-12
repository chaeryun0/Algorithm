// 사용자에게 숫자를 입력 받고 이를 2진수로 바꾸고 그 값을 출력

// 풀이 1 - toString()
let n = Number(prompt("숫자를 입력해주세요."));
console.log(n.toString(2));


// 풀이 2 - while문

let n = Number(prompt("숫자를 입력해주세요."));
let arr = [];

while(n) {
  arr.push(n%2); 
  n = Math.floor(n/2) 
}
console.log(arr.reverse().join(""));
