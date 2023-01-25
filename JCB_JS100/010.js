입력 5
출력
    * 
   *** 
  ***** 
 ******* 
********* 

const star = 5;

for(let i=1; i<=star; i++){
	let tree = ""; // 별 저장소

	for(let k=1; k<=star-i; k++){ // 공백 증가 구문
		tree += " ";
	}

	for(let j=1; j<=i*2-1; j++){ // 별 증가 구문
		tree += "*";
	}
		console.log(tree);
}
