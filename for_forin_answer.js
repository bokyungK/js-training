// 조원이 낸 문제 풀기


// for
// const arr = ['B-332', 'C-154', 'B-509', 'A-412', 'A-788', 'C-012', 'A-649', 'C-099', 'B-144'];

// 전체 데이터를 for문으로 한번 돌려서 확인해야함
// 그 안에서 문자열의 맨 앞 알파벳을 if/elseif/else문으로 선별해서 새로운 배열에 넣음
// 준비물 :  for문, if문, elseif문, else문, 나눠 담을 배열 3개, 문자열의 맨 앞을 선별하는 도구(인덱스 사용할 예정)
const 보경반 = [];
const 동주반 = [];
const 현우반 = [];

for (let i=0; i<arr.length; i+=1) {
  if (arr[i][0] === 'A') {
    보경반.push(arr[i]);
  } else if (arr[i][0] === 'B') {
    동주반.push(arr[i]);
  } else {
    현우반.push(arr[i]);
  }
}
console.log(보경반);
console.log(동주반);
console.log(현우반);


// for_in
// 고민 과정
// 배열에서 for in 을 사용하는 경우 i는 0부터 시작하면서 카운트함을 주의
// arr와 i를 함께 활용해서 배열의 한사이클 돌면서 데이터를 비교하고 결과를 출력하자
// 재료 : 비교해서 긴 문자열을 담을 변수 1개, for in문, 길이 잴 length 메소드

const arr = ['hi', 'dongju', 'one', 'for', 'project'];
let maxLength = '';

for (let i in arr) {
	if (arr[i].length > maxLength.length) {
		maxLength = arr[i];
	}
}
console.log(maxLength);

배운 점: length 뒤에는 ()를 붙이지 않는다.

사용자에게 데이터를 받는 경우
let maxLength = '';
const inputNum = prompt('비교할 문자열 개수를 입력하세요.');
const inputArr = [];

for (let i=0; i<inputNum; i+=1) {
  inputArr[i] = prompt(`비교할 문자열 ${inputNum}개를 입력하세요.`);
}

for (let i in inputArr) {
	if (inputArr[i].length > maxLength.length) {
		maxLength = inputArr[i];
  }
}