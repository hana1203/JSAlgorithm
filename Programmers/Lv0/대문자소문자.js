function solution(my_string) {
  // const splitArr = my_string.split("");
  // let answer = "";
  // for (let char of splitArr) {
  //   if (char === char.toUpperCase()) {
  //     answer += char.toLowerCase();
  //   } else if (char === char.toLowerCase()) {
  //     answer += char.toUpperCase();
  //   }
  // }
  // return answer;

  //따로 answer 변수 사용 안하고 map으로 풀기
  //   return my_string
  //     .split("")
  //     .map((char) =>
  //       char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  //     )
  //     .join("");

  //for문으로 풀기
  const splitArr = my_string.split("");
  for (let char of splitArr) {
    char === char.toUpperCase() ? char.toLowerCase() : char.toLowerCase();
  }
  return splitArr.join("");
}

console.log(solution("cccCCC")); //"CCCccc"
console.log(solution("abCdEfghIJ")); //"ABcDeFGHij"
