// 두 개이상의 선분이 겹치는 부분의 길이 다른 풀이
function solution(lines) {
  //  -- obj 숫자형 키값을 오름차순 정렬하는거에 막힘
  // const obj = {};
  // for (let arr of lines) {
  //   obj[arr[0]] = 1; //배열요소의 0번째 요소는 openStatus 1 값을, 1번째 요소는 -1값을 가지게 할당
  //   obj[arr[1]] = -1;
  // }
  // console.log(obj); //{ '0': 1, '1': -1, '2': -1, '-3': 1, '-1': -1, '-2': 1 }
  // const sortedKeys = Object.keys(obj).sort((a, b) => Number(a) - Number(b));
  // console.log("sortedKeys", sortedKeys); //[ '-3', '-2', '-1', '0', '1', '2' ]
  // const sortedObj = sortedKeys.reduce((newObj, key) => {
  //   newObj[key] = obj[key];
  //   return newObj;
  // }, {});
  // console.log("sortedObj", sortedObj); //{ '0': 1, '1': -1, '2': -1, '-3': 1, '-2': 1, '-1': -1 } //음수값이 제대로 정렬안됨

  //obj 말고 pair를 저장할 수 있는 방법
  // 1. 생성자 함수에 time, openStatus변수 선언
  // 2. 새로운 배열에 인스턴스 담기 -  lines 0번째 요소에 time, openStatus 1 , lines 1번째 요소에 time, openStatus -1 담기
  // 3. 배열을 time 순으로 오름차순 정렬
  // 4. 배열의 openStatus 1, -1일 경우 분기
  // 5. lineCount, overlappedCount에 따라 분기

  function Data(time, openStatus) {
    this.time = time;
    this.openStatus = openStatus;
  }

  // class형으로 바꾸면?
  // class Data {
  //   constructor(time, openStatus) {
  //     this.time = time;
  //     this.openStatus = openStatus;
  //   }
  // }

  const arr = [];
  for (let each of lines) {
    arr.push(new Data(each[0], 1));
    arr.push(new Data(each[1], -1));
  }
  // console.log(arr);
  // [
  //   Data { time: 0, openStatus: 1 },
  //   Data { time: 2, openStatus: -1 },
  //   Data { time: -3, openStatus: 1 },
  //   Data { time: -1, openStatus: -1 },
  //   Data { time: -2, openStatus: 1 },
  //   Data { time: 1, openStatus: -1 }
  // ]

  arr.sort((a, b) => a.time - b.time);
  console.log(arr);
  // [
  //   Data { time: -3, openStatus: 1 },
  //   Data { time: -2, openStatus: 1 },
  //   Data { time: -1, openStatus: -1 },
  //   Data { time: 0, openStatus: 1 },
  //   Data { time: 1, openStatus: -1 },
  //   Data { time: 2, openStatus: -1 }
  // ]

  let lineCount = 0;
  let overlappedCount = 0;
  let start = 0;
  let answer = 0;

  for (let el of arr) {
    if (el.openStatus === 1) {
      if (lineCount > 0) {
        if (overlappedCount === 0) {
          start = el.time;
        }
        overlappedCount++;
      }
      lineCount++;
    } else if (el.openStatus === -1) {
      if (lineCount > 1) {
        if (overlappedCount === 1) {
          answer += el.time - start;
        }
        overlappedCount--;
      }
      lineCount--;
    }
  }
  return answer;
}

console.log(
  solution([
    [1, 20],
    [3, 5],
    [6, 9],
  ])
); //5

console.log(
  solution([
    [0, 2],
    [-3, -1],
    [-2, 1],
  ])
); //2

//pseudo code
// 1. key로 배열 요소, value로 openStatus 1인지 -1인지 저장하고있는 obj 만들기 {'1':1, '20':-1, '3':1}
// 2. obj의 키값의 크기 순으로 오름차순 정렬 {1':1,'3':1, '20':-1}
//  -- obj 숫자형 키값을 오름차순 정렬하는거에 막힘
// 3. sortedObj를 순회하면서 value가 1일경우, -1일경우 분기
// 4.
// if value 1일경우,
//     if lineCount > 0 선분갯수가 0보다크고
//         if overlappedCount === 0 겹치는 선분 갯수가 0이면
//             그때 key를 start에 저장
//         겹치는선분갯수 0이든 아니든, lineCount>0이면 무조건 겹치는 선분 갯수 1추가
//     선분갯수 0보다 크던안크던, openStatus 1인경우면 무조건 선분갯수 1씩 추가

// else if value -1일 경우
//     if lineCount >1 선분갯수 1보다 크고
//         if overlappedCount ===1 겹치는 선분 갯수 1이면
//             그떄 answer에 해당 key값에서 - start 뺀 값을 더하면서 할당
//         겹치는선분갯수 -1 감소
//     선분갯수도 -1 감소
