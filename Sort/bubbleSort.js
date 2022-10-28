function bubbleSort(arr) {
  let swaps;
  for (let i = arr.length; i > 0; i--) {
    swaps = false;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        //교환을 했다면
        swaps = true;
      }
    }
    //교환이 안이뤄졌다면 이미 정렬된 것이므로 for 루프 break하기
    if (!swaps) break;
  }
  return arr;
}

console.log(bubbleSort([1, 3, 11, 2]));
console.log(bubbleSort([7, 1, 2, 3, 4, 5]));
