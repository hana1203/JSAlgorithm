function solution(n) {
  function factorial(num) {
    let facSum = 1;
    for (let i = 1; i <= num; i++) {
      facSum *= i;
    }
    return facSum;
  }
  //n의 제한사항의 최대가 10이므로 10만큼 반복
  let res = 0;
  for (let i = 1; i <= 10; i++) {
    //n이 팩토리얼 결과값 보다 크면? 계속
    if (n >= factorial(i)) {
      res = i;
      continue;
    } else {
      break;
    }
  }
  return res;
}

console.log(solution(3628800)); //10
console.log(solution(7)); //3
