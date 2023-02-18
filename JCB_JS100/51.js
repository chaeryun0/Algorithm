// 합 정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나
// 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
// 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
// 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
// 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

function mergeSort(arr){ // 분할
  if (arr.length <= 1){ // arr의 길이가 1보다 작거나 같으면 이미 정렬이 되어있는 것
    return arr; 
  }

  const mid = Math.floor(arr.length / 2); // 중간값
  const left = arr.slice(0,mid);         // 0번째부터 중간값까지
  const right = arr.slice(mid);         // 중간값부터 마지막까지

  return merge(mergeSort(left), mergeSort(right));
} // 2개로 잘린 값들을 계속해서 반복, 재귀함수 필요 
	// 마지막에 두 값을 합쳐야 하므로 merge로 묶어서 병합함
function merge(left, right){ // 정렬하고 합치는 정복 부분
  let result = [];

  while (left.length && right.length){ // left와 right의 길이가 남아있다면 
    if (left[0] < right[0]){          // 정렬한 값 추가해주기 위해 두 값의 크기를 비교
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) { 
    result.push(left.shift());
  }
  while (right.length) { 
    result.push(right.shift());
  }

  return result;
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
console.log(mergeSort(array));
