// 풀이 1 - sort() 오름차순 정렬
const result = prompt('10개의 숫자를 입력하세요').split(' ').map(n => parseInt(n, 10));
result.sort((a, b) => a - b); // 오름차순 정렬
console.log(result.pop()); // 오름차순 정렬한 값에서 제일 마지막 값을 빼냄 


// 풀이 2 - sort() 내림차순 정렬
let result = prompt('10개의 숫자를 입력하세요').split(' ').map(n => parseInt(n, 10));
result.sort((a, b) =>  b - a); // 내림차순 정렬
console.log(result[0]);       // 내림차순 정렬한 값에서 맨 앞의 가장 큰 값을 출력함


// 풀이 3 - Spread Operator(전개 연산자)
const result = "10 9 8 7 6 5 4 3 2 1".split(' ');
console.log(Math.max(...result));
