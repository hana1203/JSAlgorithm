function solution(clothes) {
  //   const obj = {};
  //   for (let el of clothes) {
  //     obj[el[1]] = el[0];
  //   }
  //   console.log(obj); //object로 푸려고하니 한개의 키값에 여러개 value를 저장하는게 어렵다..
  //     { headgear: 'green_turban', eyewear: 'blue_sunglasses' }
  // { face: 'smoky_makeup' }

  //   const map = new Map();
  //   for (let el of clothes) {
  //     map.set(el[1], el[0]);
  //   }
  //   console.log(map); //Map(1) { 'face' => 'smoky_makeup' } 마지막 el만 value로 저장됨

  //그냥 obj에 키랑 value갯수만 저장하자
  const obj = {};
  for (let el of clothes) {
    if (el[1] in obj) {
      obj[el[1]]++;
    } else {
      obj[el[1]] = 1;
    }
    //obj에 키값 없으면 키에 1할당, 있는 키이면 1씩 더하기
  }
  console.log(obj);
  //   case1{ headgear: 2, eyewear: 1 }
  //   case2{ face: 3 }

  //obj를 돌면서 value 값에 아무것도 착용안한 케이스를 추가해야되니 +1 하고, 그 각 밸류값을 곱해주어 모든 경우의수 구하기
  let answer = 1;
  for (const prop in obj) {
    answer *= obj[prop] + 1;
  }
  //모든걸 아무것도 착용안한 케이스는 제거해야되므로 -1
  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); //5
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); //3

// 1.
// {headgear: 0, yellow_hat,green_turban}
// {eyewear: 0, blue_sunglasses}
// //경우의 수 h 3가지 * e 2가지 = 6가지 - 아무것도 안착용 (0,0) 1가지 빼기

// 2.
// {face: 0, crow_mask,blue_sunglasses,smoky_makeup}
