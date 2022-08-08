## Binary Search
* only works on sorted array!
정렬되어있는 배열에서만 사용 가능 ex 알파벳 순서, 오름 내림 차순
* 확인할때마다 남아있는 절반 데이터 삭제
* 배열의 halfway point를 선택

## Divide and Conquer
* Split the array into 2 pieces 
* Pick a pivot point in the middle 
* Check the left side and right side, 찾는 데이터가 어디에 있는지 확인

## BIG O for Binary Search

* Best Case: O(1)
1번째에 선택한 값이 내가 정확히 찾는 값, 연산이 딱 1번 일어남
* Worst: O(log n)
* Average: O(log n)

```
16 elements 
17찾기
시작 [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
[1,2,3,4,5,6,7,`8`,9,10,11,12,13,14,15,16]
[9,10,11,`12`,13,14,15,16]
[13,`14`,15,16]
[15,16]
maximum 4 steps
```

the log base 2 of n
2 to what power equals n ? 2를 몇번 제곱한 값?
$log{_2}{16} = 4$
 
* O(log n)은 크게보면 O(1)와 거의 비슷할 정도로 빠르다.