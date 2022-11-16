function solution(keyinput, board) {
  const xLimit = Math.trunc(board[0] / 2);
  const yLimit = Math.trunc(board[1] / 2);
  const result = [0, 0];
  for (let direction of keyinput) {
    // if (Math.abs(result[1]) < xLimit) {
    //   if (direction === "left") result[0] += 1;
    //   if (direction === "right") result[0] -= 1;
    // }    절대값 이용해서 통으로 left right 결정하면 밑 3번째 케이스 통과안함
    // 현재 키 위치가 limit과 같아버릴때 반대키로 가는것 실행안됨

    if (direction === "left") {
      if (result[0] > -xLimit) {
        result[0] -= 1;
      }
    }
    if (direction === "right") {
      if (result[0] < xLimit) {
        result[0] += 1;
      }
    }

    if (direction === "up") {
      if (result[1] < yLimit) {
        result[1] += 1;
      }
    }
    if (direction === "down") {
      if (result[1] > -yLimit) {
        result[1] -= 1;
      }
    }
  }
  return result;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); //[2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); //[0, -4]
console.log(solution(["left", "left", "left", "right"], [3, 3])); //[0, 0]
