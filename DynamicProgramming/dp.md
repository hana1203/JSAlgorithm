## 언제 dynamic programming을 사용할 수 있는지?
It only works on problems with optimal substructure & overlapping sub-problems

## 1. Overlapping Sub-problems
한 문제를 더 작은 문제로 나눌 수 있고, 그 쪼개진 문제는 재활용이 가능
하위문제가 반복되어야 한다.

* ex) Fibonacci Sequence
많은 하위문제들이 중첩
         fib(5)
        /      \
    fib(4)     fib(3)
    /   \        /  \
fi(3)  fib(2) fib(2) fib(1)
  /     \
fib(2) fib(1)

* vs) merge sort 
mergeSort([10,24,70,65])
배열이 있으면 더 작은 조각으로 나눠서 정렬하고 그걸 다시 합침
큰 문제를 더 작은 조각으로 나누긴 하지만 중첩되지는 x

    [10,24]               [65,70]
mergeSort([10,24])  mergeSort[70,65]
mergeSort([10])     mergeSort([70])
mergeSort([24])     mergeSort([65])

## 2. Optimal Substructure
작은 문제에서 구한 답은 그걸 포함하는 큰 쿤제에서도 사용할 수 있어야된다. 작은 문제의 답이 최적의 해결 방법 optimal solution 일때만 적용

* ex) shortest path
A to D: A -> B -> C -> D
A to C: A -> B -> C
A to B: A -> B