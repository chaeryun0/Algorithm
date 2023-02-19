// 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')'와 같은 것을 말한다.
// 그중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열

function match(arr){
    let count = 0;
    
	for (let i=0; i<arr.length; i++){
      if (arr[i] === '(') count++;
      if (arr[i] === ')') count--;
  }
    if (count !== 0) return false; // count가 0이 되어야 true, 갯수가 맞지 않으면 false    
    
    let 괄호 = [];
    for (let i in arr){
        if (arr[i] === '(') {
            괄호.push('(');
        }
        if (arr[i] === ')') { 
            if (괄호.length === 0) { // 만약 괄호가 비어있다면 잘못되었으므로 false를 반환
                return false; 
            }
            괄호.pop();
        }   
    }
    return true; // 다 순회해서 이상이 없으면 true 반환
}
    
const n = prompt('괄호문자열을 입력하세요.').split('');

if (match(n) === true) {
    console.log('YES');
} else {
    console.log('NO');
}
