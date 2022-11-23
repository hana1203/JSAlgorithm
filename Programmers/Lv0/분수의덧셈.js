function solution(denum1, num1, denum2, num2) {
  let answer = [];
  let numerator = denum1 * num2 + denum2 * num1;
  let denominator = num1 * num2;

  //최대공약수 구하기
  //   let gcd = 1;
  //   for (let i = 2; i <= Math.min(numerator, denominator); i++) {
  //     if (numerator % i === 0 && denominator % i === 0) {
  //       gcd = i;
  //     }
  //   }

  //   ==========
  //다른 사람 풀이 최대공약수 구하기 - 유클리드 호제법
  //a를 b로 나눠서 나머지가 있으면? 재귀로 분모와 그 나머지를 또 나눠서 나머지가 있는지 확인
  //나머지 있는 경우? 계속 재귀로 나머지 없을때까지 계산. 나머지 없으면?
  function fnGcd(a, b) {
    return a % b ? fnGcd(b, a % b) : b;
  }

  let gcd = fnGcd(numerator, denominator);
  //   ==========

  return [numerator / gcd, denominator / gcd];
}
console.log(solution(1, 2, 3, 4)); //[5,4]
console.log(solution(9, 2, 1, 3)); //[29,6]

// ex1)
// denum
// 9   1   29
// - + - = -
// 2   3   6
// num

// ex2)
// 4+6    10     5
// --- =  --- -> --
// 8       8     4

// 식)
// (denum1 * num2) + (denum2* num1)
// --------------------------------
// num1 * num2

//이후에 분자 문모를 기약분수로 나타내려면?
//둘의 최대공약수로 나눈다
