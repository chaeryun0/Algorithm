// 클래스를 작성하여 게임 캐릭터의 능력치와 ‘파이어볼’이 출력되게 만드시오.

// class를 만들면 constructor 생성자 함수가 있어야함
class Wizard { 
	constructor(health, mana, armor){
// 이 함수는 객체에서 인스턴스가 생성이 될때 반드시 실행되는 함수로 객체를 초기화를 시켜준다.
	this.health = health;
	this.mana = mana;
	this.armor = armor;
	}		
	attack(){
		console.log("파이어볼");
	}
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor); // 545 210 10
x.attack(); // 파이어볼 
