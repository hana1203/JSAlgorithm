function solution(dots) {
  for (let i = 0; i < dotslength; i++) {
    let xMin = dots[0][0];
    let xMax = dots[1][0];
    let yMin = dots[0][1];
    let yMax = dots[1][1];

    if (dots[i][0] < xMin) xMin = dots[i][0];
    if (dots[i][0] > xMax) xMax = dots[i][0];
    if (dots[i][1] < yMin) yMin = dots[i][1];
    if (dots[i][1] > yMax) yMax = dots[i][1];
    return (xMax - xMin) * (yMax - yMin);
  }

  return x * y;
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
