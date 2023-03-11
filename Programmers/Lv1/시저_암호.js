// 풀이  1 - fromCharCode(), charCodeAt()
function solution(s, n) {
  return s.split('').map(e => {
    if(e === ' ') return e;
      return e.toUpperCase().charCodeAt()+n > 90 ? 
			String.fromCharCode(e.charCodeAt()+n -26) : String.fromCharCode(e.charCodeAt()+n)
	    }).join('');
}


// 풀이 2 - for문, includes(), indexOf()
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}
