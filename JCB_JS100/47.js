// 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력

// 풀이 1 - for in문 이용하여 객체 value값 순환
let result = new Set(); // people 변수에 있는 데이터들을 set객체에 저장

for(let key in people) {
  result.add(people[key])
}
console.log(result.size);


// 풀이 2 - Object.keys()메서드 이용하여 객체 key값 순환

const result = new Set(Object.keys(people));
console.log(result.size);
// size는 객체에서의 갯수를 반환
