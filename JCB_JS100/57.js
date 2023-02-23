 // 0부터 1000까지 수에서 1은 몇 번이나 들어갔을까

let arr = ''
for(let i=0; i<=1000; i++){
	arr += i;
}

count = 0;
for(let j of arr){ 
	if(j==1){ 
		count++;
	}
}

// for(let j of arr){
//  j==1 ? count++ : 0

console.log(count);
