//인자1: 양수의 배열, 인자2: 양수 positive int 
//배열 요소(연속적인)의 합이 인자2로 오는 sum과 같거나 큰 값을 가지는 가장 짧은 배열의 길이 구하기 
function minSubarrayLen (arr, sum) {
    //sum을 만족하는 배열요소 조합의 길이
    let combiLen = 0;
    
}

minSubarrayLen([2,3,1,2,4,3], 7) //2 //[4,3] 이 합 7이 되는 가장 짧은 subarray라서.
minSubarrayLen([2,1,6,5,4], 9) //2 //[5,4]
minSubarrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) //1 //[62] is greater than 52
minSubarrayLen([1,4,16,22,5,7,8,9,10], 39) //3