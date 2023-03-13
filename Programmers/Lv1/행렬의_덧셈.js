// 풀이 1 - forEach문, push(), map()
function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((a, i) => {
    answer.push(a.map((b, j) => b + arr2[i][j]));
  });
  return answer;
}


// 풀이 2 - map()
function sumMatrix(A,B){
  return A.map((a,i) => a.map((b,j) => A[i][j] + B[i][j]))
}
