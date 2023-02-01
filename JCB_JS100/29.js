// 알파벳이 대문자이면 YES를 아니면 NO를 출력

// 풀이 1 - toUpperCase
const n = prompt("알파벳을 입력하세요."); 
if (n === n.toUpperCase()) {
 console.log("YES"); 
} else { 
	console.log("NO"); 
}

// 풀이 2 - includes()
const Big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const n = prompt("알파벳을 입력하세요.");
if (Big.includes(n)) {
  console.log("YES");
} else {
  console.log("NO");
}
