function solution(my_string) {
  let result = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(Number(my_string[i]))) {
      //각 요소를 숫자형으로 바꾼것이 isNaN이 아니면 = 숫자형이면?

      let numStr = ""; //for문 안에서 while문 돌릴때 증가하는 numStr은 초기화 시키기.

      while (!isNaN(Number(my_string[i]))) {
        //그 인덱스가 숫자형이면 다음 숫자형이 나올때까지 numStr에 쌓기
        numStr += my_string[i];
        i++;
        console.log("와일문 numStr", numStr);
      }
      console.log("포문 numStr", numStr);
      result += parseInt(numStr); //while문에서 골라낸 numStr은 문자형 숫자를 숫자형으로 변환하고 더하기
    }
  }
  return result;

  //😱 다른사람 풀이
  const regex = my_string.replace(/[a-zA-Z]/g, "!").split("!"); //[ '', '', '1', '23', '' ]
  //   return regex.reduce((acc, curr) => acc + parseInt(curr), 0);
  //parseInt로 변환하는 경우 parseInt('') 빈문자형은 NaN이 나와서 리턴결과도 NaN
  return regex.reduce((acc, curr) => acc + Number(curr), 0); //Number('') = 0
}
console.log(solution("ab1c23d")); //24
console.log(solution("aAb1B2cC34oOp")); //37
console.log(solution("1a2b3c4d123Z")); //133
