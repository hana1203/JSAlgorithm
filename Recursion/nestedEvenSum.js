function nestedEvenSum (obj) {
    // add whatever parameters you deem necessary - good luck!
    //obj의 각 속성을 for 로 체크
    //sum 변수 선언하고 속성의 value값이 숫자이면? && 짝수이면? sum에 더하기 
    //obj의 속성이 또 object 타입이면? 재귀함수 호출  .. 그 반환값을 기존 sum에 더하기 

    let sum = 0;
    for (let property in obj) {
        if (typeof obj[property] === "number" && obj[property] % 2 ===0) {
            sum += obj[property];
        }
        if (typeof obj[property] === "object") {
            // console.log(typeof obj[property] === "object")
            sum += nestedEvenSum(obj[property])
        }        
    }
    return sum;
  }
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

let output = nestedEvenSum(obj1); // 6
console.log(output)
output = nestedEvenSum(obj2); // 10 짝수만 더하면 10
console.log(output)