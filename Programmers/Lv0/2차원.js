function solution(num_list, n) {
  // let answer = [];
  // for (let i = 0; i < num_list.length; ) {
  //   let inner = [];
  //   while (inner.length < n) {
  //     inner.push(num_list[i]);
  //     i++; // 여기서 i를 공유하기때문에 1만큼 증가시킴. 밖 for문에서는 i를 증가시킬 필요없음
  //   }
  //   answer.push(inner);
  // }
  // return answer;

  //다른사람 풀이
  //인수로 받는 num_list 배열 자체를 splice로 0부터 n까지 (n개만큼) 잘라내기
  let answer = [];
  while (num_list.length > 0) {
    answer.push(num_list.splice(0, n));
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3));
