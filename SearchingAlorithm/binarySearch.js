function binarySearch(arr, value){
    let left = 0; //left pointer at the start of the arr
    let right = arr.length-1; //right pointer at the end of the arr
    let middle;

    while (left<right) {
        middle = Math.floor(left+right/2);
        if (value === arr[middle]) {
            return middle;
        } else if (value < arr[middle]) {
            right = middle;
        } else if (value > arr[middle]) {
            left = middle;
        }
    }
    return -1;
  }

let out = binarySearch([1,2,3,4,5],2) // 1
console.log(out);
out = binarySearch([1,2,3,4,5],3) // 2
console.log(out);
out = binarySearch([1,2,3,4,5],5) // 4
console.log(out);
out = binarySearch([1,2,3,4,5],6) // -1
console.log(out);
out = binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10) // 2
console.log(out);
out = binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95) // 16
console.log(out);
out = binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100) // -1
console.log(out);