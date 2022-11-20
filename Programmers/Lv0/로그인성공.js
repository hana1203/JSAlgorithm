function solution(id_pw, db) {
  const obj = {};
  for (let el of db) {
    obj[el[0]] = el[1];
  }

  //obj가 id_pw의 아이디 속성을 갖고있는지?
  if (obj.hasOwnProperty(id_pw[0])) {
    //비번값이 그 key의 value값이랑 같은지
    if (id_pw[1] === obj[id_pw[0]]) {
      return "login";
    }
    return "wrong pw";
  } else return "fail";
}

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["meosseugi", "1234"],
      ["rardss", "123"],
      ["yyoom", "1234"],
    ]
  )
);

console.log(
  solution(
    ["meosseugi", "1234"],
    [
      ["rardss", "123"],
      ["yyoom", "1234"],
      ["meosseugi", "1234"],
    ]
  )
); //'login'

console.log(
  solution(
    ["programmer01", "15789"],
    [
      ["programmer02", "111111"],
      ["programmer00", "134"],
      ["programmer01", "1145"],
    ]
  )
); //"wrong pw"

console.log(
  solution(
    ["rabbit04", "98761"],
    [
      ["jaja11", "98761"],
      ["krong0313", "29440"],
      ["rabbit00", "111333"],
    ]
  )
); //fail
