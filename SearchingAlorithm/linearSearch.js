function linearSearch(arr, ele) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === ele) {  
            return i;
        } 
    } //for loop 이 배열 전체 요소를 다 돌았는데도 아무것도 같지 않았으면?
    return -1;
}

let out = linearSearch([10, 15, 20, 25, 30], 15) // 1
console.log(out);
out = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
console.log(out);
out = linearSearch([100], 100) // 0
console.log(out);
out = linearSearch([1,2,3,4,5], 6) // -1
console.log(out);
out = linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
console.log(out);
out = linearSearch([100], 200) // -1
console.log(out);