function solution(n, k) {
  var answer = 0;
  const lamb = 12000;
  const coke = 2000;
  let free = 0; //n이 10이상 아니면 if 조건에 안걸리니 0으로 초기화
  //양꼬치 개수 n이 10인분 마다 공짜. 서비스 음료 개수 구하기
  if (n >= 10) {
    free = Math.trunc(n / 10);
  }
  answer = lamb * n + coke * (k - free);
  return answer;
}
