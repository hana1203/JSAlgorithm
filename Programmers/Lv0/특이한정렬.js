function solution(numlist, n) {
  //numlist요소와 n사이의 거리 구하기
  function compare(a, b) {
    if (Math.abs(a - n) === Math.abs(b - n)) {
      //절대값 비교했을떄 같은 경우 더 큰값을 앞에 두기
      return a < b ? 1 : -1;
    }
    if (Math.abs(a - n) < Math.abs(b - n)) return -1;
    if (Math.abs(a - n) > Math.abs(b - n)) return 1;
  }
  return numlist.sort(compare);
}

console.log(solution([1, 2, 3, 4, 5, 6], 4)); // [4, 5, 3, 6, 2, 1]

console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); //[36, 40, 20, 47, 10, 6, 7000, 10000]
