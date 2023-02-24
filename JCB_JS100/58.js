function comma(s){
  if(s.length <= 3) {
		return s
	} else {
		return comma(s.slice(0, s.length -3)) + ',' + s.slice(s.length -3) 
  }
}

const s = '123456789';
console.log(comma(s));
