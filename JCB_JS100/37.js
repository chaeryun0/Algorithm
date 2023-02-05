const arr = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"]
let result = {}; 
let n = "";      // 반장 이름을 저장할 변수 

for(let i=0; i<arr.length; i++){
  if(result[arr[i]]) result[arr[i]]++;
  else result[arr[i]] = 1;
}

n= Object.keys(result).reduce((a, b)=>
	result[a] > result[b] ? a : b 
); 

console.log(`${n}(이)가 총 ${result[n]}표로 반장이 되었습니다.`);
