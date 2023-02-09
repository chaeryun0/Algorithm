// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램
// 첫 번째 입력으로 제한 무게가 주어지고 두 번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
// 그다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

const limit = prompt("무게제한을 입력해주세요.");
const n = prompt("몇 명이 탈 계획인가요?");
let count = 0; // 탈 수 있는 멤버의 수
let total = 0; // 탑승한 멤버의 무게 춍햡

for(let i=1; i<=n; i++){ 
	total += parseInt(prompt("몸무게를 입력해주세요."), 10);
	if(total <= limit){
		count = i;
	}
}
console.log(count);  
