function solution(array, n) {
  //n에서 array 요소의 수를 뺐을때 차가 가장 적게 나오는 수
  //가장 가까운 수는 여러개일 경우 작은 수를 리턴
  let temp = 100; //array원소 예시 중 가장 큰 수로 초기화
  let min;
  for (let i = 0; i < array.length; i++) {
    let diff = Math.abs(n - array[i]);
    if (diff < temp) {
      temp = diff;
      min = array[i];
    }
    //diff가 모두 같은 경우도 있기때문에 그 중 가장 작은 수를 골라내는 조건도 추가!
    else if (diff === temp) {
      min = Math.min(min, array[i]);
    }
  }
  return min;
}

console.log(solution([3, 10, 28], 20)); //28
console.log(solution([10, 11, 12], 13)); //12
console.log(solution([1, 2, 4], 3)); //2
console.log(solution([3, 1, 3], 2)); //1
