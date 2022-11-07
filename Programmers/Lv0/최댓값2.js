function solution(numbers) {
  //테스트케이스에 최대값이 곱해서 음수인 경우도 있으니 0이아닌 -Infinity로 초기화
  //   let max = 0;
  let max = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] * numbers[j] > max) {
        max = numbers[i] * numbers[j];
      }
    }
  }
  return max;
}

console.log(solution([1, 2, -3, 4, -5])); //15
console.log(solution([0, -31, 24, 10, 1, 9])); //240
console.log(solution([10, 20, 30, 5, 5, 20, 5])); //600
console.log(solution([-1, 5])); //-5
