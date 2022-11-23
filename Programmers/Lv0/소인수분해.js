function solution(n) {
  const arr = [];
  let k = 2;
  while (n !== 1) {
    if (n % k === 0) {
      n /= k;
      arr.push(k);
      console.log(arr);
    } else {
      k++;
    }
  }
  return [...new Set(arr)];
}

console.log(solution(12));
console.log(solution(17));
console.log(solution(420));
