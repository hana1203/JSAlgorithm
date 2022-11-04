function solution(array) {
  //   let sortedArr = array.sort((a, b) => a - b);
  //   console.log(sortedArr);
  //   for (let i = 0; i < sortedArr.length; i++) {
  //     if (i === (0 + sortedArr.length - 1) / 2) {
  //       return sortedArr[i];
  //     }
  //   }

  //더 짧은 코드?
  return array.sort((a, b) => a - b)[Math.trunc(array.length / 2)];
}

console.log(solution([1, 2, 7, 10, 11])); //7
console.log(solution([9, -1, 0])); //0
