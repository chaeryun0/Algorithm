var d = {
  'height':180,
  'weight':78,
  'weight':84,
  'temperature':36,
  'eyesight':1
};

console.log(d['weight']); // 84 
console.log(d.weight);   // 84

// 객체에서 키가 중복되었을 때, 마지막 키의 값을 가져온다!
// 객체에 접근할 때 두 가지 접근법이 있음
// 1. 점 접근자 : 객체의 이름에 점을 써서 키값을 가져온다.
// 2. 각괄호 접근자
//    - 객체의 이름 옆에 []를 붙이고, 여기에 ["키값의 이름"]을 가져온다.
//    - 키값의 이름에는 꼭 "따옴표"를 붙여서 적어야 한다.
