// Pure Recursion
function collectOddValues(arr) {
    let newArr = []; //함수 호출할때마다 빈배열로 초기화
    //base case
    if (arr.length === 0) {
        return newArr;
    }
    //배열의 맨 처음 요소가 홀수이면? newwArr에 푸쉬하기
    if (arr[0]%2 !== 0) {
        newArr.push(arr[0])
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

let output = collectOddValues([1,2,3,4,5])
console.log(output); //[1,3,5]
/*
return [1].concat(collectOddValues([2,3,4,5])) => [1,3,5]
                    [].concat(collectOddValues([3,4,5])) => [3,5]
                                [3].concat(collectOddValues([4,5])) => [3,5]
                                            [].concat(collectOddValues([5])) => [5]
                                                        [5].concat(collectOddValues([])) => [5]
*/

// Helpler Method Recursion
// 그냥 재귀를 바로하면 선언된 result 배열이 리셋되므로 함수 호출이후에도 변수가 값을 유지할 수 있도록 하려고 헬퍼메서드 사용
function collectOddValues2(arr) {
    let result = [];
    function helper(input) {
        if (input.length === 0) {
            return; //아무런 값도 리턴해주지 않지만 함수 실행을 중단하고 탈출 
        }
        if (input[0]%2 !==0) {
            result.push(input[0])
        }
        helper(input.slice(1))
    }
    helper(arr)
    return result;
}
let output2 = collectOddValues2([1,2,3,4,5])
console.log(output2); //[1,3,5]
/*
helper([1,2,3,4,5])
result = [1]
helper([2,3,4,5])
helper([3,4,5])
result = [1,3]
helper([4,5])
helper([5])
result = [1,3,5]
helper([])
*/