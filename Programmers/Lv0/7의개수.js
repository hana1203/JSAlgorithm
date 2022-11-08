function solution(array) {
  //배열안의 각 요소를 모두 split해서 한자리수로 나타낸다음에 7인지 확인
  let count = 0;
  for (let el of array) {
    let splitArr = el.toString().split(""); //[ '7' ]
    for (let str of splitArr) {
      if (str === "7") count++;
    }
  }
  return count;

  //😱 다른사람 풀이
  console.log(array.join("").split("7")); //'7'기준으로 split하기
  //[ '', '', '', '1', '' ]
  //[ '1029' ]
  return array.join("").split("7").length - 1;
}

console.log(solution([7, 77, 17])); //4
console.log(solution([10, 29])); //0
