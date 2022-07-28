//0부터 입력받은 숫자까지 모두 더하는 재귀함수 쓰기 
function recursiveRange(num) {
    //base case: num이 0이되면 종료
    if (num === 0) {
        return 0;
    }
    //different input: 계속 호출하는 num을 -1씩 줄인다.    
    return num + recursiveRange(num-1);
}
let output = recursiveRange(6) // 21
console.log(output)
output = recursiveRange(10) // 55 
console.log(output)
