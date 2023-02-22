const route = []; // 순회 경로 (어느 기둥에서 어느 기둥으로 이동했는지)

function hanoi(num, start, end, temp){ 
  if (num === 1) {                       // 원판이 한개면 바로 목표 기둥으로 이동
    route.push([start, end]);
    return 1;
  }
                       
  hanoi(num - 1, start, temp, end);   // 원반이 n-1개를 경유기둥으로 옮기고
  route.push([start, end]);          // 가장 큰 원반은 목표기둥으로
  hanoi(num - 1, temp, end, start); // 경유기둥과 시작기둥을 바꿈
