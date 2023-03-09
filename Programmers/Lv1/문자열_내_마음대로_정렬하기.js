function solution(strings, n) {
    strings.sort((a,b) => {
    if(a[n] === b[n]) // n번째 문자가 같을 경우 매개변수로 받은 a,b 문자열 전체를 비교
        return (a > b) - (a < b);
        return (a[n] > b[n]) - (a[n] < b[n]); // 자릿수 비교
    })
    return strings;
}
