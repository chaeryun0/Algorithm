function solution(s) {   
    let answer = [];
    let arr = s.split(' ')
        
    for(let i = 0; i<arr.length; i++){ 
    let words = arr[i].split('')     
        .map((e,idx)=>{   
        if(idx % 2 === 0){ 
          return e.toUpperCase()
        } else {
          return e.toLowerCase();
        }
    }).join('');
    
    answer.push(words)
    }
    
    return answer.join(' ') 
}


function solution(s) {   
    let answer = [];
    let arr = s.split(' ') // ['try', 'hello', 'world']
        
    for(let i = 0; i<arr.length; i++){ 
    let words = arr[i].split('')  // [[ 't', 'r', 'y' ],[..],[..]] 
        .map((e,idx)=> 
        idx % 2 === 0 ? e.toUpperCase() : e.toLowerCase()).join('')
	// index를 기준으로 짝/홀 판별, 대소문자로 변환.join() 작은 배열 합치기

        answer.push(words) // ['TrY', 'HeLlO', 'WoRlD']
    }
    
    return answer.join(' ') // "TrY HeLlO WoRlD" 큰 배열 합치기
}
