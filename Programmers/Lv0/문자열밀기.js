function solution(A, B) {
  let doubleB = B + B;
  return doubleB.indexOf(A);
}

// hello
// B를 두번 반복 ohellohell  //1
// 거기서 A의 index를 찾으면 얼만큼 밀렸는지 나옴
// llohellohe //3

console.log(solution("hello", "ohell")); //1
console.log(solution("apple", "elppa")); //-1
