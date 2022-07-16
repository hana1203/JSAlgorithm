//다중포인터로 고유한값 세기 
//i를 배열의 0번째 요소로 두고, 나머지 1번째요소부터 마지막까지를 j로 두고 for루프 돌리기
//i값이랑 j값이 다르면? i를 1씩 증가시키고 그 i자리에 j의 요소를 치환한다.
//for loop 다돌았을때 이제 i자리에는 고유한 값만 담겨있다.
//i의 인덱스에 1을 더한값이 즉 고유한 값의 갯수

function countUniqueValues(arr) {
    let i=0;
    if(arr.length === 0) {
        return 0;
    }
    for (let j=1; j<arr.length; j++) {
        if(arr[i]!==arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i+1;
}

let output = countUniqueValues([1,1,1,1,1,2]) // 2
console.log(output)
output = countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
console.log(output)
output = countUniqueValues([]) // 0
console.log(output)
output = countUniqueValues([-2,-1,-1,0,1]) // 4
console.log(output)