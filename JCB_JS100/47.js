// 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력

let result = new Set(); // people 변수에 있는 데이터들을 set객체에 저장

for(let key in people) {
  result.add(people[key])
}
console.log(result.size);
