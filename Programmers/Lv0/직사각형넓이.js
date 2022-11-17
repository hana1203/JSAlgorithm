function solution(dots) {
  //x를 배열로 모으고 y를 배열로 모아서 제일 큰 수에서 작은거 뺀 수
  const x = [];
  const y = [];
  for (let el of dots) {
    x.push(el[0]);
    y.push(el[1]);
  }
  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
); //1
console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
);
