// 퀴즈 만들기


// 영어 단어 암기 테스트를 위한 시험지를 생성하고 결과를 알려주는 프로그램을 만들고자 한다.
// 조건
// 1. 정답지 만들기: (for문 이용) 테스트 할 단어와 정답을 순차적으로 입력해서 객체에 저장해 놓는다.
//  결과) 
//     obj {
//        1: [name, 이름];
//        2: [teacher, 선생님];
//        ...
//      }
// 2. 시험지 만들기: 
//  - (for in문 이용)
//  - 정답지를 만든 뒤 원하는 타이밍에 시험을 볼 수 있도록 함수를 이용해 시험 문제를 출력한다.
//  - 객체의 속성 값(ex: 1, 2, 3 ...)과 문제(ex: name, teacher)을 이용해서 문제를 출제하고 정답을 입력받는다.
//  - 입력받은 값이 정답지와 일치하면 '맞았습니다!' 틀리면 '틀렸습니다!'를 출력한다.


// 정답
const inputNum = prompt('몇 개의 단어를 테스트할까요?');
const vocaNum = Number(inputNum);
const vocaObj = {};


for (let i=0; i<vocaNum; i+=1) {
  const voca = prompt('단어를 입력하세요!');
  const answer = prompt('정답을 입력하세요!');

  vocaObj[`${i+1}번.`] = [];
  vocaObj[`${i+1}번.`][0] = voca;
  vocaObj[`${i+1}번.`][1] = answer;
}


function test() {
  for (let i in vocaObj) {
    const studentAnswer = prompt(`${i} ${vocaObj[i][0]}의 정답은?`);
  
    if (studentAnswer !== vocaObj[i][1]) {
      alert('틀렸습니다!');
    } else {
      alert('맞았습니다!');
    }
  }
  console.log('Result: ', vocaObj);
}


const testButton = document.querySelector('testButton');
testButton.addEventListener('click', () => {
  test();
});
