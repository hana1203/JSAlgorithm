//배열 모든 요소의 곱 구하기
function productOfArray(arr) {
    //base case 배열이 빈 배열이면 종료
    if (arr.length === 0) {
        return 1;
    }
    //줄어드는 배열으로 계속 재귀 호출 
    let head =  arr[0]
    return head * productOfArray(arr.slice(1))
}
/*
1 * [2,3] => 6
    2 * [3] => 6
        3 * [] => 3 * 1 =3
*/

let output = productOfArray([1,2,3]) // 6
console.log(output);
output = productOfArray([1,2,3,10]) // 60
console.log(output);