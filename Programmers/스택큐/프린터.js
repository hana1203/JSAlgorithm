function solution(priorities, location) {
  // let prioritiesIdxMap = priorities.map((el, idx) => new Map().set(idx, el)); //Map.set('key', 'value')
  // console.log(prioritiesIdxMap);
  // [
  //   Map(1) { 0 => 2 },
  //   Map(1) { 1 => 1 },
  //   Map(1) { 2 => 3 },
  //   Map(1) { 3 => 2 }
  // ]

  // let max = Math.max(...priorities);
  // let head = prioritiesIdxMap.shift();
  // let headVal = head.get(0); //2
  // while (headVal < max) {
  //   prioritiesIdxMap.push(head);
  //   head = prioritiesIdxMap.shift();
  //   headVal = head.get(0);
  // }
  // prioritiesIdxMap.push(head);
  // console.log(prioritiesIdxMap);

  // for (let i = 0; i < prioritiesIdxMap.length; i++) {
  //   if (prioritiesIdxMap[i].get(location)) {
  //     //배열의 hashMap요소 키값찾기
  //     return i + 1; //return하는 array 위치값은 1부터 시작해야함
  //   }
  // }

  //  queue = [[],[]...]
  //  큐가 empty일때 까지
  //  location 찾으면 return
  //몇번째로 출력되는건지 찾기
  //dequeue 한 값 cnt세기
  //max값은 계속 체크하기
  //dequeue하면서 max값이면 버리고, 아니면 push하기
  const prioritiesArr = priorities.map((el, idx) => [idx, el]);
  console.log(prioritiesArr); //[ [ 0, 2 ], [ 1, 1 ], [ 2, 3 ], [ 3, 2 ] ]

  let max = Math.max(...priorities);
  let dequeue;
  let cnt = 0;
  while (priorities.length > 0) {
    dequeue = priorities.shift();

    if (max === dequeue) {
      if (dequeue === prioritiesArr[location][1]) {
        return `cnt, ${cnt}`;
      }
      cnt++;

      max = Math.max(...priorities); //가장 큰수는 뽑혔으므로 이제 나머지 애들중에 가장큰수
    } else {
      priorities.push(dequeue);
    }
  }
}
console.log(solution([2, 1, 3, 2], 2)); //1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); //5
