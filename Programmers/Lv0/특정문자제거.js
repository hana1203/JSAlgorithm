function solution(my_string, letter) {
  let answer = "";
  //   for (let char of my_string) {
  //     if (char !== letter) {
  //       answer += char;
  //     }
  //   }
  //더 짧은 코드?
  answer = my_string.split(letter).join("");
  //   console.log((answer = my_string.split(letter))); //[ 'abcde', '' ] //[ '', 'C', 'dbe' ]
  //   console.log(answer.join()); //abcde,  //,C,dbe
  //   console.log(answer.join("")); //abcde  //Cdbe
  return answer;
}

console.log(solution("abcdef", "f")); //"abcde"
console.log(solution("BCBdbe", "B")); //"Cdbe"
