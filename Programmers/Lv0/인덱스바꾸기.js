function solution(my_string, num1, num2) {
  //   let newStr = my_string.substring(0); //스트링을 복사하기
  //   let temp = newStr[num1];
  //   newStr[num1] = newStr[num2];
  //   newStr[num2] = temp;
  //   return newStr; //값이바뀌지 않고 결과가 그대로..
  // 문자열을 primitive type이므로 변경 불가능

  //배열은 primitive type이 아니니 index로 변경 가능
  let arr = my_string.split("");
  let temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
  return arr.join("");
}

console.log(solution("hello", 1, 2)); //"hlelo"
console.log(solution("I love you", 3, 6)); //"I l veoyou"
