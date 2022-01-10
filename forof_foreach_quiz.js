// 퀴즈 만들기


// 직장인 OO씨는 소비 욕구가 많아 새로운 절약 전략을 세웠습니다.
// OO씨가 목표 리스트에 있는 것을 하나 성취하면, 일정한 규칙에 따라 희망 물품 리스트 중 한 가지를 구입할 수 있습니다.
// 예를 들면, OO씨가 '5kg 감량하기'의 중요한 순위를 '2'라고 판단했다면, A씨는 5키로를 감량햇을 때 '2'번 째로 비싼 아이패드를 살 자격을 얻습니다.
// for of 문을 이용해 목표 리스트의 순위(범위: 1 ~ 5)를 입력받고, foreach를 이용해 규칙에 따라 아래와 같이 순위 순으로 출력하세요.
// 결과 예시 )
// 목표1: A, 보상: B
// 목표2: C, 보상: D
// 목표3: E, 보상: F
// 목표4: G, 보상: H
// 목표5: I, 보상: J
// * 가격은 출력 제외, 목표1은 순위가 1이면서, 가격이 1순위로 비쌈

// oo씨의 목표와 보상은 다음과 같습니다.
// 아이패드(990000원), 무드등(59900원), 장편 소설 시리즈(159000원), 가족들에게 아웃백 쏘기(300000), 몽골 여행(1300000)
// 해야 할 일 : 프론트엔드 개발자로 취업하기, 5kg 감량하기, 100일 동안 5시에 일어나기, 대청소하기, '개발자 교육 수료하기'


// 정답
const goals = ['프론트엔드 개발자로 취업하기', '5kg 감량하기', '100일 동안 5시에 일어나기', '대청소하기', '개발자 교육 수료하기'];
const rewards = [['아이패드', 990000], ['무드등', 59900], ['장편 소설 시리즈', 159000], ['가족들에게 아웃백 쏘기', 300000], ['몽골 여행', 1300000]];
const newRewards = [];
let now = 0;
let getOrder;
let newGoals = [];


// 가격 오름차순으로 정렬하기
for (let i=0; i<5; i+=1) {
  if (i === 0) {
    
  } else if (rewards[i-1][1] > rewards[i][1]) {
    now = rewards[i-1];
    rewards[i-1] = rewards[i];
    rewards[i] = now;
  }
  // 순위를 받아서 새로 정렬할 goals 배열 초기화
  newGoals[i] = '';
}


for (let goal of goals) {
  getOrder = prompt(`${goal}의 순위를 알려주세요. (1~5까지 작성 가능)`);

  // goals 배열에 순위 받아서 오름차순으로 바로 적재
  if (getOrder === '1') {
    newGoals[0] = goal;
  } else if (getOrder === '2') {
    newGoals[1] = goal;
  } else if (getOrder === '3') {
    newGoals[2] = goal;
  } else if (getOrder === '4') {
    newGoals[3] = goal;
  } else if (getOrder === '5') {
    newGoals[4] = goal;
  }
}


newGoals.forEach((newGoal, index) => {
  console.log(`목표${index + 1} : ${newGoal}, 보상 : ${rewards[4 - index][0]}`);
})