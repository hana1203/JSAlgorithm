function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    answer.push(arr[i]);
    if (arr[i] === arr[i - 1]) {
      answer.pop(arr[i]);
    }
  }
  return answer;
}
// 정확성: 71.9
// 효율성: 28.1
// 합계: 100.0 / 100.0

function solution(arr) {
  let answer = [];
  for (let el of arr) {
    //모으는 배열 마지막 요소가 answer요소 el과 같지않으면 push
    if (answer[answer.length - 1] !== el) {
      answer.push(el);
    }
  }
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); //[1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); //[4,3]
