function solution(s) {
  let arr = s.split("");

  let stack = [];
  for (let el of arr) {
    if (el === "(") {
      stack.push(el);
    } else {
      //맨처음이 닫는 괄호로 시작할때는 false리턴
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
}

console.log(solution("()()")); //true
console.log(solution("(())()")); //t
console.log(solution(")()(")); //f
console.log(solution("(()(")); //f
console.log(solution(")"));
