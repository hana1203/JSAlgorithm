## Linear Search
check every single item one at a time 
원하는 아이템 찾을때까지 or 끝까지 다 찾기 
데이터가 unsorted 되어있을 때 가장 좋은 방법 

## JavaScript has Search
* indexOf
Array.indexOf() 
배열에서 해당하는 index가 있으면 그 index를 반환, 없으면 -1 반환 
* includes
* find
* findIndex

## Linear Search BIG O
* Best: O(1)
찾고있는 값을 바로 찾을 때
* Worst: O(n)
제일 마지막에 있는 경우 
* Average: O(n)
general trends 에만 신경쓰기때문에 `2*n, n/2, 1/4*n`은 결국 정수이므로 무시하고 O(n)으로 simplify.


 