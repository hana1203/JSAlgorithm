function solution(s) {
  let splittedStr = s.split(" ");
  let plusCollection = [];
  for (let el of splittedStr) {
    plusCollection.push(el);
    if (el === "Z") {
      plusCollection.splice(plusCollection.indexOf("Z") - 1, 2); //그 이전 숫자와 Z까지 삭제
    }
  }
  return plusCollection.reduce((acc, curr) => acc + Number(curr), 0);
}
//문자열 Z를 만나면 pop해서 그 이전문자 없애기

console.log(solution("1 2 Z 3")); //4
console.log(solution("10 20 30 40")); //100
console.log(solution("10 Z 20 Z 1")); //1
