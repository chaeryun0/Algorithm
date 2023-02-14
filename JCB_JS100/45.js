const d = new Date();  // ms로 값을 받음. 1970년부터 지금까지 흐른시간을 반환
let year = Math.floor(d.getTime() / (1000 * 60 * 60 * 24 * 365)) + 1970;
console.log(year);
