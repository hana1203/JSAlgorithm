function solution(polynomial) {
  const splitArr = polynomial.split(" + "); //[ '3x', '7', 'x' ]
  let constant = 0;
  let coefficient = 0;

  for (let el of splitArr) {
    if (!isNaN(Number(el))) {
      //요소를 숫자형으로 바꾼게 숫자이면?
      constant += Number(el);
    } else {
      //x가 같이 있는 일차항이면?
      if (el === "x") {
        //'x'이면 1로 계산
        coefficient += 1;
      } else {
        //'3x'같은 일차항이면 숫자만 가져오기
        coefficient += parseInt(el);
      }
    }
  }
  //상수항만 있는경우
  if (constant > 0 && coefficient === 0) return `${constant}`;
  //계수항만 있는경우
  else if (coefficient > 0 && constant === 0) {
    if (coefficient === 1) return "x";
    return `${coefficient}x`;
  }
  //상수항+계수항 경우
  else {
    if (coefficient === 1) return `x + ${constant}`;
    return `${coefficient}x + ${constant}`;
  }
}

console.log(solution("3x + 7 + x")); //"4x + 7"
console.log(solution("x + x + x")); //"3x"
console.log(solution("1 + 1")); //"2"
console.log(solution("x")); //"x"
console.log(solution("3 + x + 2")); //'x + 5'
