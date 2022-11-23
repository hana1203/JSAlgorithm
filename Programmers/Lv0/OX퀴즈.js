function solution(quiz) {
  const answer = [];
  for (let el of quiz) {
    const arr = el.split(" "); //['3','-','4','=','-3']
    // let result = Number(arr[-1]); //마지막 요소를 -1로 가져오려고하니 undefined이 뜬다
    let result = Number(arr.slice(-1));
    let leftOperand = Number(arr[0]);
    let rightOperand = Number(arr[2]);
    if (arr[1] === "-") {
      if (leftOperand - rightOperand === result) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    } else if (arr[1] === "+") {
      if (leftOperand + rightOperand === result) {
        answer.push("O");
      } else {
        answer.push("X");
      }
    }
  }
  return answer;
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"])); //["X", "O"]
console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
); //["O", "O", "X", "O"]
