// 행성의 한글 이름을 입력하면 영어 이름을 반환

const planet = { 
수성: "Mercury", 
금성: "Venus", 
지구: "Earth", 
화성: "Mars", 
목성: "Jupiter", 
토성: "Saturn", 
천왕성: "Uranus", 
해왕성: "Neptune" 
}; 

const name = prompt("행성 이름을 입력하세요"); 
console.log(planet[name]); // .name은 접근 불가
console.log(planet.수성);  // 마침표 연산자에는 프로퍼티의 이름이 들어가야함
