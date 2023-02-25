// 풀이 1 - 재귀함수 
function comma(s){
  if(s.length <= 3) {
		return s
	} else {
		return comma(s.slice(0, s.length -3)) + ',' + s.slice(s.length -3) 
  }
}

const s = '123456789';
console.log(comma(s));

// 풀이 2 - toLocaleString(특정 언어에 맞는 형식으로 반환)

const n = 123456789;
console.log(n.toLocaleString()); // 123,456,789
