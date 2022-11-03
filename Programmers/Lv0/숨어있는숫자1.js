function solution(my_string) {
  //   let arr = my_string.split(""); //['a', 'A', 'b', '1','B', '2', 'c', 'C', '3', '4', 'o', 'O','p']
  //   let newArr = [];
  //   for (let el of arr) {
  //     if (Number(el) % 1 === 0) {
  //       newArr.push(Number(el));
  //     }
  //   }
  //   return newArr.reduce((acc, cur) => acc + cur);

  //다른 방법
  let arr = my_string.split("").map((el) => Number(el));
  //   console.log(arr);
  //   [
  //     NaN, NaN, NaN, 1, NaN,
  //       2, NaN, NaN, 3,   4,
  //     NaN, NaN, NaN
  //   ]
  //   let nums = arr.filter((el) => typeof el !== "NaN");
  let nums = arr.filter((el) => el % 1 === 0);
  //   console.log("nums", nums); //nums [ 1, 2, 3, 4 ]
  return nums.reduce((acc, cur) => acc + cur);
}

console.log(solution("aAb1B2cC34oOp")); //10
console.log(solution("1a2b3c4d123")); //16
