// 문장이 입력되면 모든 q를 e로 바꾸는 프로그램

// 풀이 1 - split, join
const word = prompt("문자를 입력하세요."); 
console.log(word.split("q").join("e"));


// 풀이 2 - replaceAll(정규표현식, 대체문자열)
const word = prompt("문자를 입력하세요."); 
console.log(word.replaceAll("q", "e"));


// 풀이 3 - replaceAll(정규표현식, 대체문자열)
const word = prompt("문자를 입력하세요."); 
console.log(word.replaceAll(/q/g, "e"));

// /q/g: 'q'를 '모두' 찾음
