function solution(my_str, n) {
  //str을 slice로 (시작,끝 ) 으로 자름
  let result = [];
  //opt1
  //   for (let i = 0; i < my_str.length / n; i++) {
  //   result.push(my_str.slice(i * n, i * n + n));
  // }

  //opt2
  for (let i = 0; i < my_str.length; i += n) {
    //아예 for loop을 n만큼 증가시키는 것도 방법
    result.push(my_str.slice(i, i + n));
  }
  return result;
}

console.log(solution("abc1Addfggg4556b", 6)); //[ 'abc1Ad', 'dfggg4', '556b' ]
console.log(solution("abcdef123", 3)); //[ 'abc', 'def', '123' ]
