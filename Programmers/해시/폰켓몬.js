function solution(nums) {
  const map = new Map();
  map.size = nums.length / 2;

  for (let el of nums) {
    //map의 크기를 nums배열의 반으로 제한
    if (map.size === nums.length / 2) break;

    //map에 el요소가 없으면 키 추가하고 value 1 할당
    if (!map.get(el)) map.set(el, +1);
  }
  return map.size;
}

console.log(solution([3, 1, 2, 3])); //2
console.log(solution([3, 3, 3, 2, 2, 4])); //3
console.log(solution([3, 3, 3, 2, 2, 2])); //2
console.log(solution([3, 3, 3, 3])); //1
