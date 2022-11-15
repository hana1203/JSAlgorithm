function solution(my_string) {
  const arr = my_string.split(" "); //[ '3', '+', '4' ]
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (isNaN(Number(arr[i]))) {
      //숫자형아니면 (+나 -기호이면)
      if (arr[i] === "+") result += Number(arr[i + 1]);
      if (arr[i] === "-") result -= Number(arr[i + 1]);
      i++; //이미 다음 숫자를 연산해줬기때문에 바로 다음 인덱스를 또 for 에서 확인할 필요없기 때문에 증가시켜줌
    } else {
      //숫자형이면
      result += Number(arr[i]);
    }
  }
  return result;
}

console.log(solution("3 + 4")); //7
console.log(solution("3 - 4")); //-1
console.log(solution("3 + 4 + 3")); //10
console.log(solution("3 + 4 - 3 + 7")); //11
