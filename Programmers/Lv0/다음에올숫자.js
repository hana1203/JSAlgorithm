function solution(common) {
  //0,1번째 요소 차가 1,2번째 차와 같으면 등차수열
  if (common[1] - common[0] === common[2] - common[1]) {
    return common.pop() + common[1] - common[0];
  }
  //같지 않으면 이 경우 등비수열
  else {
    return common.pop() * (common[1] / common[0]);
  }
}

//common이 매개별수인데 등차수열 or 등비수열
//마지막 원소 다음으로 올 숫자를 리턴하기

console.log(solution([1, 2, 3, 4], 5));
console.log(solution([2, 4, 8], 16));
