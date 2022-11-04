function solution(my_string) {
  return my_string
    .match(/[0-9]/g) //정규표현식으로 숫자에 해당하는 string만 걸러내기
    .map((el) => parseInt(el))
    .sort((a, b) => a - b);
}

console.log(solution("hi12392")); //[1, 2, 2, 3, 9]
console.log(solution("p2o4i8gj2")); //[2, 2, 4, 8]
console.log(solution("abcde0")); //[0]
