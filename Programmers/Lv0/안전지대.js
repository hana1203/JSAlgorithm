function solution(board) {
  //지뢰 근처가 0이면 1로 바꾸기
  //총 배열에서 0개수 세기
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      //폭탄 위치 찾아서 주변은 다 2로 바꾸기. 0인경우에만 2로 바꾼다. 폭탄위치는 1로 확인하므로 폭탄은 건들지말기.
      //i,j가 가장 끝에 위치해있으면 -1, +1이 안되므로 이 케이스도 조건에 추가
      if (board[i][j] === 1) {
        //위라인
        //i가 맨 처음 0 라인이면 i-1 더 갈곳이 없으므로 i !==0 즉, 0번째가 아닐때만 i-1 가능
        if (i !== 0 && j !== 0 && board[i - 1][j - 1] === 0)
          board[i - 1][j - 1] = 2;
        if (i !== 0 && board[i - 1][j] === 0) board[i - 1][j] = 2;
        if (i !== 0 && board[i - 1][j] === 0) board[i - 1][j] = 2;
        if (i !== 0 && j !== board[i].length - 1 && board[i - 1][j + 1] === 0)
          board[i - 1][j + 1] = 2;
        //지뢰와 같은 라인
        //왼쪽
        if (j !== 0 && board[i][j - 1] === 0) board[i][j - 1] = 2;
        //오른쪽
        if (j !== board[i].length - 1 && board[i][j + 1] === 0)
          board[i][j + 1] = 2;
        //아래라인
        if (i !== board[i].length - 1 && j !== 0 && board[i + 1][j - 1] === 0)
          board[i + 1][j - 1] = 2;
        if (i !== board[i].length - 1 && board[i + 1][j] === 0)
          board[i + 1][j] = 2;
        if (
          i !== board[i].length - 1 &&
          j !== board[i].length - 1 &&
          board[i + 1][j + 1] === 0
        )
          board[i + 1][j + 1] = 2;
      }
    }
  }
  let count = 0;
  for (let el of board) {
    for (let innerEl of el) {
      if (innerEl === 0) count++;
    }
  }
  return count;
}

// [[0, 0, 0, 0, 0],
//  [0, 0, 0, 0, 0],
//  [0, /, /, /, 0],
//  [0, /, 1, /, 0],
//  [0, /, /, /, 0]]

//   2,1  2,2  2,3
//     지뢰(3,2)
//   3,1       3,3
//   4,1  4,2  4,3

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); //16

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
); //13
console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
); //0
