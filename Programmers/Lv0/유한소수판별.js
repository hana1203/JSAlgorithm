//유한소수? 소수점 아리 숫자가 유한개인 소수 0.xxx
//분수를 소수로 고칠때 유한소수로 나타낼수 있는 분수인지 판별
//유한소수가 되기위한 분수는 기약분수로 나타내었을때 분모의 소인수가 2와 5만 존재해야된다.
//a/b가 유한소수이면 1리턴하고 무한소수이면 2리턴하기

function solution(a, b) {
  //a,b 공통 약수중에 가장 큰 최대공약수 구하기
  let gcd = 1; //최대공약수로 나눠야되는데 없을경우 0으로 나누면 infinity. 1로 초기화
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }
  //최대공약수로 나눈 분모 구하기
  let denominator = b / gcd;
  let arr = [];
  //분모를 소인수 분해하기
  //분모의 소인수가 2,5만 있으면 유한소수. return 1하기 . 아니면 2
  let k = 2;
  while (denominator !== 1) {
    if (denominator % k === 0) {
      denominator /= k;
      arr.push(k);
    } else {
      k++;
    }
  }
  console.log(arr); //[ 2, 2, 5 ]
  for (let el of arr) {
    //배열 중에 2,5가 안들어있으면?
    if (el !== 2 && el !== 5) return 2;
  }
  return 1;
}
//2 3 5

// 6, 12의 최대공약수
// 1 2 3 6
// 1 2 3 4 6 12
// 6도 i가 0으로 떨어지고 12도 0으로 떨어질 때

console.log(solution(7, 20)); //1 -분모의 소인수 2,5만 존재
console.log(solution(11, 22)); //1 - 분모 소인수 2
console.log(solution(12, 21)); //2 - 분모 소인수 7

console.log(solution(1, 14)); //2 - 소인수 2,7
