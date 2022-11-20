function solution(score) {
  let newArr = [];
  for (let el of score) {
    newArr.push(el.reduce((acc, cur) => acc + cur, 0) / el.length);
  }
  console.log(newArr); //[ 75, 70, 55, 65 ]
  //newArr를 이제 등수매겨야되니 sort하기
  const sortedArr = [...newArr].sort((a, b) => b - a); //[ 75, 70, 55, 65 ]
  console.log("소팅", sortedArr);
  //sortedArr의 idx+1 = 1 2 3 4
  //newArr를 맵으로 돌리면서 sortedArr의 idx와 같은 값 리턴
  return newArr.map((el) => sortedArr.indexOf(el) + 1);
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
);
//[1, 2, 4, 3]

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
//[4, 4, 6, 2, 2, 1, 7]
