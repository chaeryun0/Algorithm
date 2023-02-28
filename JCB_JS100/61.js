// 풀이 1 - for
const input = 'aaabbbbcdddd';
let count = 0;
let store = input[0];
let result = '';

for(let i = 0; i<=input.length; i++) {
  if(input[i] === store) {
    count ++
  } else {
    result += store + count;
	  store = input[i]
		count = 1;
  }
}
console.log(result);


// 풀이 2 - for of
const input = 'aaabbbbcdddd';
let count = 0;
let store = input[0];
let result = "";

for (let i of input) { 
  if (i === store) {
    count++;
  } else {
    result += store + count;
    store = i; // 저장되어 있는 문자열을 현재 있는 문자열로 변경
    count = 1;
  }
}
result += store + count; // 이걸 생략하면 a3b4c1 이렇게만 출력되므로 반복문을 나와서 한번 더 적어줌
console.log(result);
