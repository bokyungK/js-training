// 조원 문제 풀어보기


// for of

let getAngle = [];
let sumAngle = 0;
let countAngle = 0;

for (i=0; i<4; i+=1) {
  getAngle[i] = Number(prompt('각도를 입력해주세요'));
}

for (let angle of getAngle) {
  sumAngle += angle;

  if (angle === 90) {
    countAngle += 1;
  }
}

if (countAngle === 4) {
  alert('직사각형입니다!');
} else if (sumAngle !== 360) {
  alert('사각형이 아닙니다!');
}

// 느낀점
// propmt로 값을 입력받는 경우 데이터가 문자형으로 들어오는데, 이것을 자꾸 깜빡한다.
// 처음에 값을 받자마자 숫자형으로 바꿔놓으면 연산처리나, 조건문에서 헷갈리지 않을 것 같다.

// for of문 안에서는 prompt가 실행되지 않는데 이유를 찾아봐야 할 것 같다.


// ---------------------------------

// foreach

const personK = {
	currentAmount: 13000,
	storage: 2200
}
const personL = {
	currentAmount: 26000,
	storage: 5950
}
const personC = {
	currentAmount: 7500,
	storage: 0
}


const personArr = [personK, personL, personC];
	const personName = ['K', 'L', 'C'];


personArr.forEach((person, index) => {

 	person.storage += (person.currentAmount * 0.05);
	console.log(`person${personName[index]}의 적립금 :`, person.storage);
})


// 느낀점
// forEach 대문자로 안써서 몇시간 동안 고생했다.



