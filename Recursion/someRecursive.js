// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;
let out = someRecursive([1,2,3,4], isOdd) // true
console.log(out)
out = someRecursive([4,6,8,9], isOdd) // true
console.log(out)
out = someRecursive([4,6,8], isOdd) // false
console.log(out)
out = someRecursive([4,6,8], val => val > 10); // false
console.log(out)

function someRecursive(arr, callback){
    //재귀로 callback 함수 다 돌고 일치하는거 있으면 return true
    let head = arr[0];
    if (arr.length ===0) {
        return false;
    }
    
    if (callback(head) === true) { //arr 배열의 맨 처음 요소를 callback 함수에 넣어서 결과가 true이면?
        return true;
    }
    return someRecursive(arr.slice(1), callback)
  }