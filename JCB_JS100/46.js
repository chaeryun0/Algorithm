// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총합

// 풀이 1 - forEach(), while문
let arr = [];
let sum = 0; // 모든 자릿수를 더한 변수

for(let i=0; i<20; i++) {
	arr[i] = i+1;
}
arr.forEach((n)=>{
  while(n){                 // 계산할 원소가 0이 될 때 종료됨
    sum += (n % 10);       // 나머지 값 
    n = Math.floor(n/10); // n을 10씩 나눠주면 순회할 때마다 10씩 나눠져서 종료됨
  }
})
console.log(sum);


// 풀이 2 - for문, for in문
let arr = [];
let sum = 0;

for(let i=0; i<20; i++){
  arr[i] = i+1;
}

for(let i in arr){
  sum += arr[i];
}
console.log(sum);
