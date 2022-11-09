function solution(i, j, k) {
  let cnt = 0;
  for (i; i <= j; i++) {
    // if (i.toString().split("").includes(k.toString())) cnt++;
    //이 경우 split으로 나눈 배열에 k가 포함되기만 하면 cnt올라가므로 ['1','1']의 경우 1번만 올라감
    const arr = i.toString().split("");
    for (let el of arr) {
      if (el === k.toString()) cnt++;
    }
  }
  return cnt;

  //더 효율적 코드
  //str 선언해서 i부터 j까지의 숫자를 담아주고 k로 split한 length를 리턴
  let str = "";
  for (i; i <= j; i++) {
    str += i;
  }
  return str.split(k).length - 1;
}

console.log(solution(1, 13, 1)); //6
console.log(solution(10, 50, 5)); //5
console.log(solution(3, 10, 2)); //0
