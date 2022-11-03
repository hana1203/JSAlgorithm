function solution(n) {
  //   let arr = n.toString().split("");
  //   //   console.log(arr); //[ '1', '2', '3', '4' ]
  //   arr = arr.map((el) => Number(el)); //map은 immutable이라서 원본 배열을 바로 수정하지 않는다. 그래서 arr에 새로 재할당
  //   //   console.log("map이후", arr); //[ 1, 2, 3, 4 ]
  //   //   arr.reduce((acc, curr) => acc + curr);
  //   //   console.log("reduce이후", arr); // [1, 2, 3, 4 ] //마찬가지로 arr배열 정보는 그대로.
  //   return arr.reduce((acc, curr) => acc + curr);

  //더 짧은 코드?
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur));
}

console.log(solution(1234)); //10
console.log(solution(930211)); //16
