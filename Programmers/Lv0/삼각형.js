function solution(sides) {
  sides.sort((a, b) => a - b); //먼저 오름차순 정렬하기
  //가장 긴변의 길이는 나머지 두 변 길이 합보다 작아야 됨
  return sides[2] < sides[0] + sides[1] ? 1 : 2;
}

console.log(solution([3, 6, 2])); //2
console.log(solution([199, 72, 222])); //1
