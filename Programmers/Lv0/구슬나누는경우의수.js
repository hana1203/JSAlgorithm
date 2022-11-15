function solution(balls, share) {
  return factorial(balls) / (factorial(balls - share) * factorial(share));

  function factorial(n) {
    let sum = BigInt(1);
    if (n === 0) return sum;
    while (n !== 1) {
      sum *= BigInt(n);
      n--;
    }
    return sum;
  }
}

// console.log(solution(3, 2));
// console.log(solution(5, 3));
console.log(solution(30, 27));

// 서로다른 구슬 5개 중 순서없이 3개를 고르는 경우의 수
// nCr = 5C3 = 5! / 2!*3!
// 인간이 풀면 겹치는 수는 약분하겠지만 컴퓨터가 factorial로 계산시 .. 먼저 분자를 곱셈하고 그 이후에 분모를 나누기
// 7C3 = 7! / 4! * 3! = 5040 / 24 *6

//edge case인 factorial f(30)시 엄청 큰 수가 계산되기 떄문에 자바스크립트의 일반 Number는 정수중 최대 2^53-1 까지 안전하게 연산 가능하다.
//BigInt로 형변환하는게 이 문제의 포인트
//factorial 함수의 sum변수와 곱셈연산하는 n을 BigInt형으로 바꿔준다.
console.log(BigInt(1)); //1n;
