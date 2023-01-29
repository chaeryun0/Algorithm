const n = prompt("제곱을 구할 두 숫자를 입력해주세요.").split(" "); 
const a = parseInt(n[0], 10); 
const b = parseInt(n[1], 10); 
console.log(Math.pow(a, b));

// Math.pow() 메서드는 제곱을 구함
// n의 출력 결과가 문자형이기 때문에 숫자형으로 바꿔주고 계산해줘야함
// pow() 메서드는 숫자형이 아니어도 숫자로 결과가 출력되지만 혹시 모를 오류에 대비해 숫자형으로 바꿔주고 계산함
