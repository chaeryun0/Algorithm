// 버블 정렬 : 두 인접한 원소를 검사하여 정렬하는 방법, 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용된다.
// 배열의 원소가 많을수록 원소를 비교하는데 시간이 오래 걸리기 때문에 시간 복잡도가 느리다.

function bubble(arr) {
  let result = arr.slice(); 

  for (let i = 0; i < result.length -1; i++) {
    for (let j = 0; j <result.length -i -1; j++) { 
      if (result[j] > result[j + 1]) {
         let value = result[j];
				 result[j] = result[j+1];
			   result[j+1] = value;
      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => { 
  return parseInt(n, 10);
});

console.log(bubble(items));
