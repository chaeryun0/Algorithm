// 정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
// 화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

// 풀이 1
let n = 24;
let count = 0; // 가장 적게 옮길 수 있는 횟수 또는 정량되지 않으면 -1 출력하는 변수

while(true){
	if(n%7 == 0){                // 7로 한번에 나눠지는 경우
	count += parseInt(n/7, 10); // 7로 나눈 몫
	console.log(count);        // 횟수 출력 후 break
	break;
	}                        // 7로 한번에 나눠지지 않는 경우는 -3씩 해주고, 횟수는 +1씩
	n -= 3
	count += 1

	if(n < 0){            // 7과 3 모두 나눠지지 않는 경우
	console.log(-1);
	break;
	}
}

// 풀이 2
let n = Number(prompt("정량을 입력하세요."));
let count = 0;

while(n > 0){
  if(n%7 == 0){
    count += n/7;
    break;
  }
  n -= 3;
  count++;

  if (n < 0) {
    count = -1;
    break;
  }
}
console.log(count);
