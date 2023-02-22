// 면적과 가장 비슷한 국가와 그 차이를 출력

// 풀이 1
const nationWidth = {
	'korea': 220877,
	'Rusia': 17098242,
	'China': 9596961,
	'France': 543965,
	'Japan': 377915,
	'England' : 242900,
};

const w = nationWidth['korea'];
delete nationWidth['korea'];

const entry = Object.entries(nationWidth); 
const values = Object.values(nationWidth);

let gap = Math.max.apply(null, values); 
let item = [];

for (let i in entry){
  if (gap > Math.abs(entry[i][1] - w)){   // 최솟값 찾는 알고리즘 (<는 최댓값)
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}
console.log(item[0],item[1]-220877);

// 풀이 1-1
const w = nationWidth['korea'];
delete nationWidth['korea']; 

const entry = Object.entries(nationWidth); 
const values = Object.values(nationWidth); 

let gap = Math.max(...values); 
let nation = [];

for (let i in entry){
  let min = Math.abs(entry[i][1] - w) 

  if (gap > min){ 
    gap = min
    nation = entry[i];
  }
}
// console.log(nation) // ["England", 242900]
console.log(nation[0],nation[1]-220877); // England 22023 
