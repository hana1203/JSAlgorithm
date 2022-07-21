//배열 요소중에서 붙어있는 n길이 만큼 가장 큰값?
//Time Complexity -O(N)
//Space Complexity -O(1)

function maxSubarraySum(arr, n){
    //처음 n개 요소만큼 돌려서 max 값 담기 
    let max=0, temp=0;
    if (arr.length < n) {
        return null;
    }
    for (let i=0; i<n; i++) {
        max += arr[i];
    }
    temp = max;

    for (let j = n; j<arr.length; j++) {
        temp = temp + arr[j] - arr[j-n];
        max = Math.max(temp, max);
    } return max;
}

let output = maxSubarraySum([100,200,300,400], 2); //700
console.log(output)
output = maxSubarraySum([1,4,2,10,23,3,1,0,20], 4); //39
console.log(output)
output = maxSubarraySum([-3,4,0,-2,6,-1],2) //5
console.log(output)
output = maxSubarraySum([2,3],3) //null
console.log(output)