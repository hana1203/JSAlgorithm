function solution(babbling) {
  let arr = [];
  let count = 0;
  const speak = ["aya", "ye", "woo", "ma"];
  for (let el of babbling) {
    for (let s of speak) {
      while (el.includes(s)) {
        el = el.replace(s, " ");
        console.log(el);
      }
    }
    arr.push(el);
    console.log(arr); //[ ' ', ' e', 'u', ' a', 'w oo' ] //[ '  ', 'uuu ', ' ', '   ', ' a' ]
    //replace하는 문자를 공백 한칸씩 줬기떄문에 말할수있는 speak 요소와 일치하면 공백 칸이 더 추가
  }
  for (let ele of arr) {
    if (ele.trim() === "") count++;
  }
  return count;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); //1 - aya만 가능
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); //3 - ayaye, ye, yemawoo 가능
