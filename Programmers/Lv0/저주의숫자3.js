function solution(n) {
  //3의 배수나 숫자 3이 들어가있는 수는 건너띄기
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer++;
    //answer가 3의 배수이거나 3을 포함하고 있으면 answer 1씩 올리기
    while (answer % 3 === 0 || answer.toString().includes("3")) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(15)); //25
console.log(solution(40)); //75
//n 15일떄
// 1 2 4 5 7 8 10 11 14 16 17 19 20 22 25
