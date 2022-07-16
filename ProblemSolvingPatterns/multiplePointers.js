//sorted array입력받고 합이 0이되는 first pair 찾기
//가장작은수와 가장큰수 비교로 left, right 포인터 두기

function sumZero(arr) {
    let left = 0;
    let right = arr.length -1;
    while (left<right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum <0) {
            left++
        } else if (sum >0) {
            right--
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3] 
console.log(sumZero([-2,0,1,3])) // undefined
console.log(sumZero([1,2,3])) // undefined