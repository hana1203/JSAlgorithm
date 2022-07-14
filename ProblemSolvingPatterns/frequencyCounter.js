/*
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.
*/
//인자로 받는 배열1의 요소를 제곱한 값이 모두 arr2에 있으면 true 반환. 아니면 false.
//빈도수까지 같아야됨. 

//naive approach
//O(n^2)
//for loop돌리는 1번배열이 길어지면 indexOf로 찾는 2번배열도 같이 증가되므로 nested loop와 같다. 
const same = function (arr1, arr2) {
    for (let i=0; i<arr1.length; i++) {
        let correctIdx = arr2.indexOf(arr1[i] ** 2);
        if (correctIdx === -1) {//arr2요소가 arr1 배열에 없으면 
            return false;
        }
        arr2.splice(correctIdx, 1) //arr2의 해당요소를 arr2에서 삭제. arr2의 크기가 줄어듬.
        // console.log(arr2);
    }
    return true;
};

//frequency counter approach
//2개의 루프가 중첩루프보다 훨씬 빠르다. 2n, 즉 O(n) 
//O(n) linear time 이므로 O(n^2) 보다 훨씬 낫다

function same2 (arr1, arr2) {
    //각 배열의 빈도를 담아주는 객체 선언
    freqArr1 = {};
    freqArr2 = {};

    //각 배열의 요소를 키값으로 가지고 빈도수를 밸류값으로 가지게 객체에 할당
    //배열의 각 요소가 객체에 있으면 갯수 +1 추가하고, 초기의 경우 1로 초기화 
    for(let el of arr1) {
        freqArr1[el]? (freqArr1[el] = freqArr1[el] + 1): (freqArr1[el] =1);
    }
    console.log(freqArr1)
    for(let el2 of arr2) {
        freqArr2[el2]? (freqArr2[el2] = freqArr2[el2] + 1): (freqArr2[el2] =1);
    }
    console.log(freqArr2)

    //두 객체의 키값이 같고 (객체1 키의 제곱은 객체2 키와 같은지) 밸류값이 같은지 확인
    //같으면 true 리턴
    for (let key in freqArr1) {
        if (!(key **2 in freqArr2)) {
            return false;
        }
        if (freqArr1[key **2] !== freqArr2[key]) {
            return false;
        }
    } return true; 
    //조건문 분기 케이스를 true로 리턴해주면 키값은 맞더라도 밸류값이 일치하지 않는경우에도 바로 true를 리턴해줌. 맞지 않는 조건을 false로 주기.
};


// let output = same([1,2,3],[4,1,9]); //true
// console.log(output);
// output = same([1,2,3], [1,9]) // false
// console.log(output);
// output = same([1,2,1], [4,4,1]) // false (must be same frequency)
// console.log(output);

console.log(same2([1,2,3],[4,1,9])); //true
console.log(same2([1,2,3], [1,9])); // false
console.log(same2([1,2,1], [4,4,1])); // false (must be same frequency)