// 키가 주어지면 순서대로 제대로 섰는지 확인

const h = prompt('6명의 키를 입력하세요'); 
let sorted = ""; 

sorted = h.split(" ").sort(function(a, b) { 
	return a - b; 
}) 
.join(" ");

if (h === sorted) { 
	console.log("Yes"); 
} else { 
	console.log("No"); 
}
