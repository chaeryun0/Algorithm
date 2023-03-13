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


// 풀이 3 - for in문
function sumMatrix(A, B) {
    var answer = [];
    for (let i in A) {
        answer.push([])
        for (let j in A[i]) {
            answer[i].push(A[i][j] + B[i][j])
        }
    }
    return answer;
}
