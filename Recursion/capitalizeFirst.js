function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    //배열의 각 요소 str. 요소의 맨처음 글자이면? 대문자로 바꿔줌.
    let result = [];
    const helper = (arr) => {
        for (let i=0; i<arr.length; i++) { //배열의 요소 개수 만큼 반복
            for (let j=0; j<1; j++) { //각 요소인 문자열은 한번만 반복해서 첫번째 글자는 대문자로 나머지는 그대로 소문자로
                result.push(arr[i][0].toUpperCase() + arr[i].slice(1));
            }
        } 
    }
    helper(arr);
    return result;
  }
  
let output =  capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
console.log(output);