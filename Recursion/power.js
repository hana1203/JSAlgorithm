
function power(base, exponent){
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent-1);
}

let output = power(2,0);
console.log(output);
output = power(2,2);
console.log(output);
output = power(2,4);
console.log(output);
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16