function solution(emergency) {
  // 먼저 emergency 배열을 내림차순으로 정렬
  const sortedArr = [...emergency].sort((a, b) => b - a);
  console.log("원본배열", emergency);
  //emergency를 직접 sort하면 원본배열인 emergency도 같이 sort가 되므로 복사한 배열에다가 sort함
  return emergency.map((el) => sortedArr.indexOf(el) + 1);
}

console.log(solution([3, 76, 24])); //	[3, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7])); //[7, 6, 5, 4, 3, 2, 1]

// sortedArr = [76 24 3]
// 0  1  2 + 1=> 1  2  3
