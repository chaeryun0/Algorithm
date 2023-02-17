const result = prompt('10개의 숫자를 입력하세요').split(' ').map(n => parseInt(n, 10));
result.sort((a, b) => a - b); // 오름차순 정렬
console.log(result.pop()); // 오름차순 정렬한 값에서 제일 마지막 값을 빼냄 
