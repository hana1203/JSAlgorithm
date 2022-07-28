//피보나치 수열 (1,1,2,3,5,8,13,21,34,55) 직전 두개의 값을 더한 수열
//input으로 받는 num이 수열의 nth 몇번째 수인지? 
function fib(num){
    function helper(input) {
        //base case
        if (input <=2) {
            return 1;
        }
        return helper(input-1) + helper(input-2);
    }
    return helper(num);

    // solution
    if (num <=2) {
        return 1;
    }
    return fib(num-1) + fib(num-2)
}
  
let output = fib(4) // 3
console.log(output)
output = fib(1) // 1
console.log(output)
output = fib(10) // 55
console.log(output)
output = fib(28) // 317811
console.log(output)
output = fib(35) // 9227465
console.log(output)

/*
fib(4)?
return fib(3) + fib(2) => return 2+1 =3
        fib(2)+fib(1)  => return 1+1=2
*/
