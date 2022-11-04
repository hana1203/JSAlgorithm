function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}

console.log(solution(20)); //6
console.log(solution(100)); //9
