# Linked List
* data struction contains a head, tail, and length property
* nodes로 구성 (각 요소를 노드라고 부름)
* head 연결리스트의 시작노드
* tail 마지막 노드
* 각 node는 value와 다른 노드를 가리키는 pointer 가짐
* 인덱스 없다! like 엘베없는 건물 5층에 가려면 무조건 1층에서 계단타고 순서대로 가야함
* 각 노드가 다음 노드로 단일 방향으로만 연결
insertion and deltion are easy

## Lists VS Arrays
### Lists
* no indexes
* 각 노드는 다음 pointer로 연결
* 랜덤한 접근 허용되지 않음 10번째 항목 필요하면? 바로 그 값을 얻을 수 없다. 첫번쨰 노드부터 10번째 노드까지 순서대로 탐색
* 새로운 항목 추가, 기존 항목 제거시 매우 편리
* 긴 데이터 세트에 random access 필요없고 리스트에 저장만 하면 되는 경우 연결리스트가 바람직

### Arrays
* Indexed in order
* 배열의 경우 인덱스가 있어서 처음, 중간에 항목 추가시 cascaded riffle effect.. 추가된 지점 이후의 모든 항목은 새로운 인덱스 갖는다.
* 특정 값을 빨리 access 가능 