function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((a, i) => {
    answer.push(a.map((b, j) => b + arr2[i][j]));
  });
  return answer;
}
