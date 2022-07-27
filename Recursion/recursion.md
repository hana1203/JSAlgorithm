# Two essential parts of a recursive function! 재귀함수에서 가장 중요한 두 가지

* Base Case
재귀가 중단되는 시점
ex) 리스트나 배열에 아무 것도 없으면? 멈춘다 

* Different Input
같은 함수를 계속해서 호출하기 때문에 매번 다른 데이터로 함수 호출해야 소득이 있다.
ex) 마틴앤 드래곤에서 배열의 맨 첫번째 숫자 지우면서 리스트를 계속 변경


# Where things can go wrong 재귀의 위험

* No base case 
베이스케이스 없으면 Maximum call stack size exceeded. 엔진에 따라 다르지만 1만개정도가 스택 최대 크기

* 값을 return 하는 것 까먹거나 잘못된 값 리턴
```
return num * factorial(num)
```
base case가 있더라도 잘못된 값 리턴하면 종료조건에 도달할 수 없다.

=> stack overflow!

# Helpler Method Recursion

* 배열이나 데이터 목록을 합칠때 사용
* Pure 재귀함수는 함수가 호출될때마다 선언된 변수, 배열이 리셋된다. 함수 호출이후에도 변수가 값을 유지할 수 있도록 하려면? helper method 재귀 이용