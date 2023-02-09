function solution(progresses, speeds) {
  let manHour = [];
  for (let i = 0; i < progresses.length; i++) {
    manHour.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }
  // [ 7, 3, 9 ]
  // [ 5, 10, 1, 1, 20, 1 ]

  let temp = manHour.shift(); //비교값
  let res = [];
  let cnt = 1;

  //manhour가 비어있을때까지 반복
  while (manHour.length > 0) {
    let head = manHour.shift();
    if (temp < head) {
      //temp값이랑 배열 맨 앞 dequeue값이랑 비교
      res.push(cnt);
      cnt = 1;
      temp = head; //지금 맨 앞에 있는 값을 temp값으로 재할당
    } else {
      cnt++;
    }

    //   //반대 조건 temp가 더크다면으로 비교시 같은 경우도 고려
    //   // let head = manHour.shift();
    //   // if (temp >= head) {
    //   //   cnt++;
    //   // } else {
    //   //   res.push(cnt);
    //   //   cnt = 1;
    //   //   temp = head;
    //   // }
  }
  res.push(cnt);
  return res;
}

console.log(solution([93, 30, 55], [1, 30, 5])); //[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); //[1, 3, 2]
//manHour = [5,5,1]의 경우 temp와 head 가 같은 경우
console.log(solution([95, 95, 99], [1, 1, 1])); //[3]
