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
