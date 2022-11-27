function solution(dots) {
  //점 네개 좌표를 담은 dots에 두 직선이 평행이되면 1, 없으면 0리턴
  //기울기 = y좌표의 차이 / x좌표의 차이. 기울기 같으면 평행
  const arr = [];
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      let currLean = (dots[i][1] - dots[j][1]) / (dots[i][0] - dots[j][0]); //현재 체크하는 기울기
      //현재 기울기가 이미 배열에 있는 기울기이면? 평행 맞으므로 바로 1리턴
      if (arr.includes(currLean)) return 1;
      arr.push(currLean);
      console.log(arr);
    }
  }
  return 0; //for문을 다 탐색헀는데도 if조건에 걸리지 않는거니 0리턴
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
); //1
console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
); //0
