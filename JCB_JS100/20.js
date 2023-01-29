// 두 번째 숫자로 첫 번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력

const n = prompt("숫자를 입력해주세요.").split(" "); 

let a = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10)); // 몫  
let b = parseInt(n[0], 10) % parseInt(n[1], 10);            // 나머지

console.log(a, b);

// Math.floor()를 통해 주어진 값보다 이하의 가장 큰 정수를 반환하여 소수점 버림
