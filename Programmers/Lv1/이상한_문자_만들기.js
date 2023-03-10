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
