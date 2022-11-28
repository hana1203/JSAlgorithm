function solution(lines) {
  //먼저 arr 배열에 lines로 들어오는 배열 오름차순 정렬
  const arr = [];
  lines.forEach((ele) => arr.push(...ele)); //[ 0, 5, 3, 9, 1, 10 ]
  arr.sort((a, b) => a - b); //[ 0, 1, 3, 5, 9, 10 ]
  console.log(arr);
  //오름차순 정렬된 배열에서 어느 배열이 시작점 1 이고 끝점 -1인지 새로운 배열에 넣기
  let idxArr = [];
  for (let el of arr) {
    for (let inner of lines) {
      if (el === inner[0]) idxArr.push(1);
      if (el === inner[1]) idxArr.push(-1);
    }
  }
  console.log("idxArr", idxArr); //[ 1, 1, 1, -1, -1, -1 ]

  let cnt = 0;
  let start = 0;
  let last = 0;
  let answer = 0;

  let cntArr = [];
  for (let i = 0; i < idxArr.length; i++) {
    if (idxArr[i] === 1) {
      cnt++;
      cntArr.push(cnt);
    } else if (idxArr[i] === -1) {
      cnt--;
      cntArr.push(cnt);
    }
  }
  console.log("cntArr", cntArr); //cntArr [ 1, 2, 3, 2, 1, 0 ]
  //겹치는 선분 끊기는 경우 cntArr [1,2,1,2,1,0]
  //cntArr에서 2가될때 start변수로 저장하고, start가 2인상태에서 1을 만날때 answer에 1을 만난 값 - start값 더해서 저장
  //처음 2를 만나면 tempArrFor2 에 push하고 또 연속해서 2만나면 건너띄기
  //cntArr 요소가 2이면서 tempArrFor2 배열에 아무런 요소가 없을때만 체크

  const tempArrFor2 = [];
  for (let i = 0; i < cntArr.length; i++) {
    if (cntArr[i] === 2 && tempArrFor2.length === 0) {
      start = i; //1만나기 전 처음 2의 인덱스를 start에 저장
      tempArrFor2.push(cntArr[i]);
    }
    if (cntArr[i] === 1 && tempArrFor2.length > 0) {
      last = i; //1을 만나면 그 인덱스를 last에 저장
      tempArrFor2.pop(); //1을 만났으므로 2가 있는 배열 비우기
      answer += arr[last] - arr[start];
    }
  }
  return answer;

  // //이 방식으로는 처음 2개 선분 겹치는 수에서 마지막 겹치는게 끝날때까지 통으로 계산하니 정확하지 않음
  // //가장 먼저 2가되는 수의 인덱스 찾아내기
  // const initialCntIdx = cntArr.findIndex((el) => el === 2);
  // //findIndex에서 조건에 맞는 값 찾으면 그 인덱스 반환하고, 아니면 -1 반환
  // if (initialCntIdx > 0) start = initialCntIdx;
  // else if (initialCntIdx === -1) start = 0;

  // //start가 0보다 큰값일 경우에만 last가 있는지 확인
  // //배열 마지막까지 순회하다가 1을 만나면 그 인덱스를 last로 할당
  // if (start > 0) {
  //   for (let i = 0; i < cntArr.length; i++) {
  //     if (cntArr[i] === 1) last = i;
  //   }
  // }
  // return arr[last] - arr[start];
}

// ex)
// [[0, 5], [3, 9], [1, 10]]

// 0    1   2   3   4   5   6   7   8   9   10
// 1    1       1      -1              -1   -1

// count 겹치는 수
//     cnt=2   cnt=3   cnt=2           cnt=1
// cnt 2 겹치는 수가 2가 될때 start 값으로 주기
//     cnt=1이 되었을때 해당 값 9에서 start 값 1을 빼면 겹치는 숫자

console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
); //8
console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
); //2
// 0  1  2  3  5  9
// 1 -1  1  1  -1 -1

console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
); //0
// -1  1  1  3  3  9
// 1  -1  1  -1 1 -1

//겹치는 부분이 연속적이 아니고 따로따로 3-5까지 2개, 6-9까지 3개 인 경우 answer = 5
console.log(
  solution([
    [1, 20],
    [3, 5],
    [6, 9],
  ])
); //5

//open, close status가 겹치는 경우?
// console.log(
//   solution([
//     [-1, 10],
//     [10, 1],
//     [11, 12],
//   ])
// ); //9
