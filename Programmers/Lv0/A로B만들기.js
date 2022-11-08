function solution(before, after) {
  //before after 완전 일치하면 1 아님 0
  //sort를 먼저해서 문자순으로 정렬

  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
  //before after 배열로 비교하면 모양은 같은 배열이어도 참조형이기 떄문에 다르게 인식
}

console.log(solution("olleh", "hello")); //1
console.log(solution("allpe", "apple")); //0
