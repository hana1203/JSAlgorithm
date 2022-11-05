function solution(age) {
  let result = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const splitAge = age.toString().split(""); //[ '2', '3' ]
  for (let singleDigit of splitAge) {
    result += alphabet[Number(singleDigit)];
  }
  return result;
}

console.log(solution(23)); //'cd'
console.log(solution(51)); //'fb'
console.log(solution(100)); //'baa'
