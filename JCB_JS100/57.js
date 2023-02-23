 // 0부터 1000까지 수에서 1은 몇 번이나 들어갔을까

// 풀이 1 - for of문
let arr = ''
for(let i=0; i<=1000; i++){
	arr += i;
}

count = 0;
for(let j of arr){ 
	if(j==1){ 
	count++;
	}
}

// for(let j of arr){
//  j==1 ? count++ : 0

console.log(count);


// 풀이 2 - for in문

let arr = ''
for(let i=0; i<=1000; i++){
	arr += i;
}

let count = 0
for(let j in arr){ 
	if(arr[j]==1){
	count++;
	}
}
console.log(count);


// 풀이 3 - for문
let arr = '';

for(let i = 0; i<=1000; i++) {
  arr += i;
}

let count = 0;
for(let j = 0; j<arr.length; j++) {
  if(arr[j] == 1) {
    count ++;
  }
}
console.log(count);


// 풀이 4 - 정규표현식
let arr = '';
for(let i = 0; i<=1000; i++){
  arr += i
}
// console.log(arr);
console.log(arr.match(/1/g).length);

// arr.match(/1/g)         // 1만 들어있는 arr 출력 ["1","1","1"..]
// arr.match(/1/g).length // length를 통해 1의 길이를 구함 
