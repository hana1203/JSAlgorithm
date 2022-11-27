function solution(num, total) {
  let sum = (num * (num + 1)) / 2;
  let difference = (total - sum) / num;
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i + difference);
  }
  return arr;
}

//연속된 num개의 정수를 더해 total이 되는 경우 정수 배열을 오름차순으로 return
console.log(solution(3, 12)); //[3, 4, 5]
console.log(solution(5, 15)); //[1, 2, 3, 4, 5]
console.log(solution(4, 14)); //[2, 3, 4, 5]
console.log(solution(5, 5)); //[-1, 0, 1, 2, 3]

// num의 합 sum을 구하려면?
// sum = num * (num+1) /2

// 값 차이 difference ?
// difference = (total - sum) / num

// sum = 5*6 /2  = 15
// difference = 15-15 /2 = 0
// [1,2.3,4,5]

// sum = 4 * 5 / 2 = 10
// difference = 14 - 10 / 4 = 1
// [2,3,4,5]
