function solution(sides) {
  let sideCollection = [];
  //인자로 받는 sides의 요소 중 max값이 가장 긴 변일때
  for (
    let i = Math.max(...sides) - Math.min(...sides) + 1;
    i <= Math.max(...sides);
    i++
  ) {
    sideCollection.push(i);
  }

  //   sides 요소 두개 말고 다른 ㅁ가 제일 긴 변일때
  let sum = sides.reduce((acc, cur) => acc + cur, 0);
  for (let j = Math.max(...sides) + 1; j < sum; j++) {
    //변 모으는 배열에 넣고자하는 변이 없을때만 푸쉬하기
    if (!sideCollection.includes(j)) {
      sideCollection.push(j);
    }
  }
  return sideCollection.length;
}

console.log(solution([1, 2])); //1
console.log(solution([3, 6])); //5
console.log(solution([11, 7])); //13
