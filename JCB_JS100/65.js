// 풀이 1 - map
const a = prompt("첫번째 배열").split(' ');
const b = prompt("두번째 배열").split(' ');

const c = a.map((e, i) => {
	if(i%2 == 0){          // i가 짝수일 때 숫자가 먼저
		return [e, b[i]]
	} else {              // i가 홀수일 때 문자가 먼저
		return [b[i], e];
	}
});
console.log(c);


// 풀이 2 - forEach 
const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];
let c = [];

a.forEach((e, i)=> {
	if(i%2 == 0) c.push([e, b[i]]);
	else	c.push([b[i], e]);
});
console.log(c);


// 풀이 3 - for문
const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];
let c = [];

for(let i = 0; i<a.length; i++) {
  if(i%2 === 0){
    c.push([a[i], b[i]])
  } else {
    c.push([b[i], a[i]])
  }
}
console.log(c);
