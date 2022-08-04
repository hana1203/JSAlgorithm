function flatten(arr){
    //arr안의 요소가 배열이면? flatten 재귀함수 호출하여 배열을 벗겨내기
    let result = [];
    for (let i=0; i<arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i])); //[1,2,3].concat(반환값([4,5])) //재귀를 호출한 곳으로 반환
        }
        //for loop돌리는 요소가 배열이 아니면? 
        else {
            result.push(arr[i]); //[1,2,3] //[4,5]
        }
    }
    return result;
}
// recursion 0
// arr = [1, 2, 3, [4, 5]]
// for loop 끝나기 전
// result = [1,2,3 아직 열려있음 for 아직 끝난게 아님
// array 만나면? flatten(arr[i])를 다시 호출하므로 result=[] 는 초기화가 되고, arr[i]의 요소가 배열인지 다시 검사 

//recursion 1
// arr = [4,5]
// res = [4,5]
// result 반환값 [4,5] 가지고 flatten() 호출했던 곳으로 다시 돌아감

let out = flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
console.log(out)
out = flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
console.log(out)
out = flatten([[1],[2],[3]]) // [1,2,3]
console.log(out)
out = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
console.log(out)