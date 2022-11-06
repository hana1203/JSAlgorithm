function solution(cipher, code) {
  let ans = "";
  for (let i = 1; i <= cipher.length; i++) {
    if (i % code === 0) {
      ans += cipher[i - 1];
    }
  }
  return ans;
}

console.log(solution("dfjardstddetckdaccccdegk", 4)); //'attack'
console.log(solution("pfqallllabwaoclk", 2)); //'fallback'
