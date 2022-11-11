function solution(numbers, k) {
  //k번째의 위치 k가 1씩 증가할떄마다 인덱스는 2씩증가. k번째로 공을 던지는 사람은 2(k-1)에 위치
  //numbers배열의 length로 나눈 나머지가 현재의 위치
  return numbers[(2 * (k - 1)) % numbers.length];
}

console.log(solution([1, 2, 3, 4], 2)); //3
console.log(solution([1, 2, 3, 4, 5, 6], 5)); //3
console.log(solution([1, 2, 3], 3)); //2

// 2(k-1)
// k=2  2
// k=3  4
// k=4  6
