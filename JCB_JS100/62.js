// 1. 코드 내에 숫자가 없어야 합니다.
// 예) console.log(20190923)이라고 하시면 안 됩니다.
// 2. 파일 이름이나 경로를 사용해서는 안됩니다.
// 3. 시간, 날짜 함수를 사용해서는 안됩니다.
// 4. 에러 번호 출력을 이용해서는 안됩니다
// 5. .input을 이용해서는 안됩니다.

const user = 'aacdddddddddfffffffffgghhh';
console.log(`${user.match(/a/g).length}
${Number(user.match(/b/g))} // 0으로 만들어주기 위해 Number붙임 // 안붙이면 null 표시
${user.match(/c/g).length}
${user.match(/d/g).length}
${Number(user.match(/e/g))}
${user.match(/f/g).length}
${user.match(/g/g).length}
${user.match(/h/g).length}`);
