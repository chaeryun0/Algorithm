// 풀이 1 - for문
const str = "AAABBBcccddd"
let arr = [];

for (let i = 0; i < str.length; i++) {
	if(str[i] === str[i].toUpperCase()){
		arr.push(str[i].toLowerCase());	
	} else {
		arr.push(str[i].toUpperCase());
	}
}
console.log(arr.join("")); 


// 풀이 2 - for of문
const str = "AAABBBcccddd"
let arr = '';

for(let i of n){
  if(i == i.toUpperCase()){
    arr += i.toLowerCase();
  } else {
    arr += i.toUpperCase()
  }
}
console.log(arr); 
