//input: sorted array of integers, target average
//output: 배열에 values쌍중에서 target average 값과 같은 값이있으면? true

function averagePair(arr, avr){
    //sorted array이니 맨앞요소, 맨끝요소로 pointer두고 평균값 내기
    let left = 0, right = arr.length-1;
    let average;
    while (left < right) {
        average = (arr[left] + arr[right])/2;
        if (average === avr) {
        return true;
        }
        else if (average < avr) {
            left++;
        }
        else {
            right--;
        }
    }
    return false;
  }

  let output = averagePair([1,2,3], 2.5); //true
  console.log(output)
  output = averagePair([1,3,3,5,6,7,10,12,19], 8) //t
  console.log(output)
  output = averagePair([-1,0,3,4,5,6], 4.1) //f
  console.log(output)
  output = averagePair([],4) //f
  console.log(output)