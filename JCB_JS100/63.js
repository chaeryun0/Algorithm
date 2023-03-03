// 풀이 1 - for of
const arr = '복잡한 세상 편하게 살자'.split(' ');
let result = '';

for(let i of arr){
	result += i[0]
}
console.log(result);

// 풀이 2 - for
const arr = '복잡한 세상 편하게 살자'.split(' ');
let result = '';

for (let i = 0; i < arr.length; i++) {
  result += arr[i][0];
}
console.log(result);

// 풀이 3 - forEach
const arr = '복잡한 세상 편하게 살자'.split(' ');
let result = '';

arr.forEach(n => result += n[0])
console.log(result);
