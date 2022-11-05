//장군개미 공격력 5
//병정개미 공격력 3
//일개미 공격력 1

//체력
function solution(hp) {
  let answer = 0;
  const ants = [5, 3, 1];
  for (let i = 0; i < ants.length; i++) {
    answer += Math.trunc(hp / ants[i]);
    hp = hp % ants[i];
  }
  return answer;
}

console.log(solution(23)); //5 = 장군개미(5)*4 + 일개미(1)*3
console.log(solution(24)); //6
console.log(solution(999)); //201
