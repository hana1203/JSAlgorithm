function solution(s) {
  let str = "";
  const sortedArr = s.split("").sort(); //먼저 사전식 정렬
  let obj = {};
  //객체 obj에 str 요소있으면 value 1추가하고 요소 없던거면 1로 할당
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] in obj) {
      obj[sortedArr[i]]++;
    } else {
      obj[sortedArr[i]] = 1;
    }
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) {
      str += key;
    }
  }
  return str;

  //😱 더 짧은 코드
  let res = [];
  for (let char of s) {
    //한개만 있으면 그 문자 요소의 index가 마지막 index와도 똑같을 것
    if (s.indexOf(char) === s.lastIndexOf(char)) res.push(char);
  }
  return res.sort().join("");
}

console.log(solution("abcabcadc")); //'d'
console.log(solution("abdc")); //'abcd'
console.log(solution("hello")); //'eho'
