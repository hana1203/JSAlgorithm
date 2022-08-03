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
    if (arr.length ===0) { //배열을 다 돌고 배열이 빈 배열인데 일치하는게 없었으면 false 리턴
        return false;
    }
    
    if (callback(head) === true) { //arr 배열의 맨 처음 요소를 callback 함수에 넣어서 결과가 true이면?
        return true;
    }
    return someRecursive(arr.slice(1), callback)
  }

  /*
  someRecursive([4,6,8,9], isOdd)
  head = [4]
  isOdd([4])? 
  return someRecursive([6,8,9], isOdd)
  head = [6]
  isOdd([6])? 
  return someRecursive([8,9], isOdd)
  head = [8]
  isOdd([8])? 
  return someRecursive([9], isOdd)
  head = [9]
  isOdd([9])? true
  return true 
  */
  