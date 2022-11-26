function solution(array) {
  //array 돌리면서 obj에 key, value로 저장하기
  //value값이 제일 큰 키값을 리턴
  //value값 똑같이 겹치면 -1 리턴
  const obj = {};
  for (let el of array) {
    //obj가 배열 요소인 el을 이미 가지고 있으면 1더하고, 없으면 1로 할당
    el in obj ? (obj[el] += 1) : (obj[el] = 1);
  }
  console.log(obj); //{ '1': 1, '2': 1, '3': 3, '4': 1 }

  let freq = 0;
  let max = 0;
  for (let prop in obj) {
    if (obj[prop] > max) {
      max = obj[prop];
      freq = Number(prop);
    } else if (obj[prop] === max) {
      freq = -1;
    }
  }
  return freq;
}

console.log(solution([1, 2, 3, 3, 3, 4])); //3
console.log(solution([1, 1, 2, 2])); //-1
console.log(solution([1])); //1
