function solution(my_string) {
  let arr = my_string.split(""); //['a', 'A', 'b', '1','B', '2', 'c', 'C', '3', '4', 'o', 'O','p']
  let newArr = [];
  for (let el of arr) {
    if (Number(el) % 1 === 0) {
      newArr.push(Number(el));
    }
  }
  return newArr.reduce((acc, cur) => acc + cur);

  //시도
  //   let arr = my_string.split("").map((el) => {
  //     Number(el); //여기서 number형으로 바뀌지 않음
  //   });
  //   console.log(arr);
  //   let nums = arr.filter((el) => typeof el !== "NaN");
  //   console.log("nums", nums);
  //   return nums.reduce((acc, cur) => acc + cur);
}

console.log(solution("aAb1B2cC34oOp")); //10
console.log(solution("1a2b3c4d123")); //16
