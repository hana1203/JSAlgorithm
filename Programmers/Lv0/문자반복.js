function solution(my_string, n) {
  //내장 함수 repeat 사용하면 간단!
  //   let answer = "";
  //   for (let char of my_string) {
  //     answer += char.repeat(n);
  //   }
  //   return answer;

  //고차함수 활용
  return my_string
    .split("")
    .map((el) => el.repeat(n)) //[ 'hhh', 'eee', 'lll', 'lll', 'ooo' ]
    .join("");
}

console.log(solution("hello", 3)); //"hhheeellllllooo"
