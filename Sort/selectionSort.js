function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //가장 첫번째 요소를 minimum으로 할당(가장 작은 요소가 아니어도 상관없음)
    let minimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      //배열이 i 위치일때 그 i 위치부터 비교할 필요없고 그 다음요소랑 비교. i값 보다 1 더 높은 값으로 j 설정

      console.log("i:", i, "j:", j);
      //더 작은 숫자 발견되면
      if (arr[minimum] > arr[j]) {
        minimum = j;
        console.log("minimum", minimum);
      }
    }
    //i값을 최소값 위치와 바꾸기
    //i값이 최소값이 아닐때만 바꾸기. i값이 최소값이면 어차피 그값이 최소값인데 또 swapping 이뤄지므로 불필요.
    if (i !== minimum) {
      console.log(arr);
      console.log("swapping");
      let temp = arr[i];
      arr[i] = arr[minimum];
      arr[minimum] = temp;
      console.log(arr);
      console.log("=========");
    }
  }
  return arr;
}

console.log(selectionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
// selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]

// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// selectionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
