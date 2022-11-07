function solution(order) {
  //order로 받는 숫자 중에 3 6 9있으면 그 개수만큼 리턴
  //   const game = [3, 6, 9];
  //   let count = 0;
  //   const splitOrder = order.toString().split(""); //['2','9','4'..]
  //   for (let num of splitOrder) {
  //     for (let g of game) {
  //       if (Number(num) === g) count++;
  //     }
  //   }
  //   return count;

  //고차함수로 풀기
  return order
    .toString()
    .split("")
    .filter((el) => ["3", "6", "9"].includes(el)).length;
}

console.log(solution(3)); //1
console.log(solution(29423)); //2
console.log(solution(369369)); //6
