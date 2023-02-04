// 키가 주어지면 순서대로 제대로 섰는지 확인

// 풀이 1 - sort()
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


// 풀이 2 - for문
const h = prompt("6명의 키를 입력하세요.").split(" "); 

function sorted(h) { 
	for (let i = 0; i < h.length-1; i++) { 
		if (h[i] > h[i + 1]) { 
			return "NO"; 
		} else { 
			return "YES";
		}
	}
} 
console.log(sorted(h));

// h.length-1을 해준 이유는 항상 마지막 문자는 자기 다음으로 연속해서 오는 값이 없기 때문에 
// 1번 덜 회전하게 해주면 undefined 없이 결과를 출력할 수 있음
