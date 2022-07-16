//arr에서 num개만큼 더한 연속적인 값 중에서 가장 큰 값

function maxSubarraySum(arr, num) {
    let sum =0;
    let temp =0;
    //맨처음 요소 num개 만큼 더하기 
    for (let i=0; i<num; i++) {
        sum += arr[i]
    }

    //이제 배열 끝까지 다른 요소도 더하기
    //또 반복문 돌리는데 시작은 num부터하고 배열 끝까지 반복. 기준인덱스는 num을 기준으로 배열 마지막 요소까지 간다.
    //맨처음 배열의 합 sum을 temp에 먼저 담는다.
    //지금 기준 index인 i번쨰 요소를 더해주고, i-num요소를 빼준다. (num개만큼 더해야되니 지금 기준인덱스에 i에서 num을 빼면 num개만큼 더해짐) -> temp에 담는다
    //temp와 sum중에 더 큰 수를 sum에 담고 최종적으로 sum 리턴
    for (i=num; i<arr.length; i++) {
        temp = sum;
        temp = temp - arr[i-num] + arr[i]
        sum = Math.max(temp, sum)
    }
    return sum;
}


let output = maxSubarraySum([1,2,5,2,8,1,5],2) // 10
console.log(output)
output = maxSubarraySum([1,2,5,2,8,1,5],4) // 17
console.log(output)

// maxSubarraySum([4,2,1,6],1) // 6
// maxSubarraySum([4,2,1,6,2],4) // 13
// maxSubarraySum([],4) // null