// 풀이 1
function solution(strings, n) {
    strings.sort((a,b) => {
    if(a[n] === b[n]) // n번째 문자가 같을 경우 매개변수로 받은 a,b 문자열 전체를 비교
        return (a > b) - (a < b);
        return (a[n] > b[n]) - (a[n] < b[n]); // 자릿수 비교
    })
    return strings;
}


// 풀이 2
function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1; // 인덱스 n번째 글자를 기준으로 오름차순 정렬
    else if (a[n] < b[n]) return -1;
    else return a > b ? 1 : -1; // 인덱스 n번째 글자가 같으면 사전순 정렬
  });
}


// 풀이 3 - localeCompare()
function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a, b) => 
    a[n] == b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));    
    return answer;
}
