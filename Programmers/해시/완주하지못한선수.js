function solution(participant, completion) {
  //참가자 obj에 담기
  const obj = {};
  for (let el of participant) {
    if (el in obj) {
      obj[el] += 1;
    } else obj[el] = 1;
  }
  console.log(obj); //{ mislav: 2, stanko: 1, ana: 1 }

  //완주자 체크해서 obj 밸류값 변경하기
  for (let person of completion) {
    //obj에 완주한 선수있으면 -1 빼기
    if (person in obj) {
      obj[person] -= 1;
    }
  }
  console.log(obj); //{ mislav: 1, stanko: 0, ana: 0 }

  //완주못한 사람 리턴하기
  for (let prop in obj) {
    if (obj[prop] === 1) {
      return prop;
    }
  }

  //📌 hash map으로 풀기
  const map = new Map();
  for (let i = 0; i < participant.length; i++) {
    //map.set(key,value) 로 객체추가
    //참가자 이름을 key로, 이름 나오는 횟수로 value 저장. map에 그 참가자를 get해올 수 있으면(이미 저장된 키이면) value에 1추가, 처음추가되는 경우에는 map.get()이 false가 되어서 0으로 저장후 +1
    map.set(participant[i], (map.get(participant[i]) || 0) + 1); //Map(3) { 'leo' => 1, 'kiki' => 1, 'eden' => 1 }
    //완주자의 경우 value에 -1해주기
    map.set(completion[i], (map.get(completion[i]) || 0) - 1); //Map(4) { 'leo' => 1, 'eden' => 0, 'kiki' => 0, undefined => -1 }
  }
  //   console.log(map);
  for (const [key, value] of map) {
    if (value > 0) return key;
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); //leo
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); //vinko
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); //mislav
