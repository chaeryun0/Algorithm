const input = 'aaabbbbcdddd';
let count = 0;
let store = input[0];
let result = '';

for(let i = 0; i<=input.length; i++) {
  if(input[i] === store) {
    count ++
  } else {
    result += store + count;
	  store = input[i]
		count = 1;
  }
}
console.log(result);
