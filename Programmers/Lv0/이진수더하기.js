function solution(bin1, bin2) {
  //parseInt로 문자열을 2진수 변환한다음에 더한값을 다시 이진수 문자열로 반환
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

console.log(solution("10", "11")); //'101
console.log(solution("1001", "1111")); //'11000'
