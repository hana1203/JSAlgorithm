function solution(n, k) {
  const lamb = 12000;
  const coke = 2000;
  // let free; //로 선언만 하는 경우 undefined로 초기화되어 k-free 코드에서 걸려 return값 NaN 나옴.
  let free = 0; //n이 10이상 아니면 if 조건에 안걸리니 0으로 초기화
  //양꼬치 개수 n이 10인분 마다 공짜. 서비스 음료 개수 구하기
  if (n >= 10) {
    free = Math.trunc(n / 10);
  }
  return lamb * n + coke * (k - free);
}

console.log(solution(10, 3)); //124000
console.log(solution(64, 6)); //768000
console.log(solution(3, 2)); //40000
