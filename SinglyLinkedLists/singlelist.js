// Remember linked lists are collection of nodes

//각 노드를 위한 클래스 정의하기
//value - 노드가 저장하고 있는 데이터
//next - 호출되는 다음 노드 가리키는 참조

//항목이 엄청 많으면 전체를 다 탐색해서 맨 끝에 삽입하지 않음
//리스트의 마지막 항목을 추적할 수 있으면 마지막 항목이 새로운 마지막 항목을 가리키도록 하면 됨

//head가 비어있으면 새로 node 생성하고 head, tail으로 셋팅
//otherwise, tail의 next property가 새로운 노드되고, 새로 생성된 노드를 tail property로 업뎃
//길이 1씩 증가

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; //처음 비어있는 리스트는 head, tail이 비어있고 길이는 0
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newnode = new Node(val);
    if (!this.head) {
      //this.head가 null이면
      this.head = newnode;
      this.tail = this.head; //this.tail = this.head 로도 작성 가능.
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.length += 1;
    return this; //return the linked list 전체 리스트 반환
  }

  //pop 메서드 구현
  //list에 노드없으면 undefined 반환
  //tail에 닿을때까지 반복
  //마지막에서 2번째 노드 (2nd to last node)의 next 속성을 null로 하기
  //마지막에서 2번째 노드를 tail로 셋
  //길이를 1씩 감소
  //removed node의 값을 반환 -> 제거된 노드를 별도 변수에 저장해놓고 있기
  pop() {
    if (!this.head) {
      //this.head가 없으면
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      //tail나올때까지 끝까지 체크
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    //맨 마지막 첫번쨰 요소 1개 pop을해도 list를 찍어보면 빈 list가 아닌 첫번째 요소 담겨있다.
    //리스트 길이는 0으로 줄어든 반면 여전히 헤드, 테일이 정의되어 있댜.
    //리스트에 하나의 노드만 남은 경우 특별 케이스로 핸들링
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //Nodes 없으면 undefined 반환
  //변수에 current head 저장
  //head속성을 현재 head의 다음 속성으로 셋ㅌ
  //길이 1만큼 줄이기
  //removed된 node 값 반환
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let current = this.head;
    this.head = current.next;
    this.length -= 1;
    return current;
  }

  //맨앞으로 넣기
  unshift(val) {
    let newNode = new Node(val); //새로운 node 만들기
    if (this.head === null) {
      //if no head property
      this.head = newNode;
      this.tail = this.head; //초기에 리스트에 아무것도 없을 때 head, tail 모두 newNode 가리킴
    } else {
      //새로 생성된 노드의 next property가 current head porperty 되게하기
      // this.head = newNode.next
      // this.head.next = newNode //실패코드. next: null로 나옴
      newNode.next = this.head;
      //             HEAD
      // "taylor" -> "shake if off" -> "ahh"
      //새로 unshift한 요소와 이전 head 연결하기. but, 여전히 이전 요소가 헤드

      //head property를 새로생성된 node가 되게 하기
      this.head = newNode;
      //  HEAD
      // "taylor" -> "shake if off" -> "ahh"
      // head를 새로운 노드가 가리키도록 업데이트하기
    }
    this.length += 1;
    return this;
  }

  //get method 구현
  get(index) {
    //index가 list length 범위벗어나면 null 반환
    if (index < 0 || index >= this.length) {
      return null;
    }
    //index에 닿을때까지 리스트를 반복하고 그 특정 인덱스의 노드 반환하기
    let current = this.head;
    let count = 0;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  set(index, value) {
    if (this.get(index) === null) {
      return false;
    } else {
      this.get(index).val = value;
      return true;
    }
  }

  //index가 0보다 작거나 list길이 보다 크면? false 반환
  //index가 list length와 똑같으면 새로운 Node를 마지막에 push
  //idx 0이면 새로운 Node 처음에 unshift 추가
  //위 조건이 true가 아니면..인덱스는 리스트 중간을 가리키는것.
  //새로운 노드 생성
  //get 메서드 사용해서 idx -1로 호출해서 노드에 접근. 새로운 노드를 이전 노드에 연결
  //새 노드를 기존 next노드로 연결
  //node 0 1 3 있을때 2 (새로운노드) insert?
  //1(이전노드)을 2와 연결하고 3(기존 next노드)을 2와 연결
  //새로운 노드 삽입했으므로 길이 1만큼 증가하고 true 반환
  //insert 메서드 성공시 true, 실패시 false 반환
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      // return this.push(val); //여기서 리턴하면 true false형이아닌 리스트자체를 반환
      this.push(val);
      return false;
    }
    if (index === 0) {
      this.unshift(val);
      return false;
    }
    //0    1       {2}       3 에    2 insert?
    //    prev     temp
    //            prev.next  temp
    //
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) {
      return undefined;
    }
    if (idx === this.length - 1) {
      //idx가 마지막노드
      return this.pop();
    }
    if (idx === 0) {
      return this.shift();
    }
    let prev = this.get(idx - 1);
    let removed = prev.next;
    prev.next = removed.next; //삭제한 노드 다음에오는게 바로 prev 다음 노드 되게하기. removed노드를 제거하면 사라지는거니.
    this.length--;
    return removed;
  }

  //practical 하지는 않지만 interview나 책에서 많이 다루는 메서드
  // head tail 바꾸기
  // 변수 생성: next, prev, current. current 노드는 헤드로 초기화시키기
  //loop through the list
  //next가 prev되게하기
  //prev가 current되게하기
  //current를 next 되게하기
  reverse() {
    let current = this.head; //current노드는 헤드로 초기화
    this.head = this.tail; //head는 tail로 치환
    this.tail = current; //tail은 head로 치환

    let next;
    let prev = null; //처음 prev변수는 아무것도 가리키지않음
    for (let i = 0; i < this.length; i++) {
      //내가 직접 짜야된다면... 못짜겠다.. ㅠㅠ
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("hey");
list.push("shake it off");
console.log(list);
// SinglyLinkedList {
//     head: Node { val: 'hey', next: Node { val: 'shake it off', next: null } },
//     tail: Node { val: 'shake it off', next: null },
//     length: 2
//   }
console.log(list.head); //Node { val: 'hey', next: Node { val: 'shake it off', next: null } }
console.log(list.head.next); //Node { val: 'shake it off', next: null }
console.log(list.head.next.next); //null

console.log("====for pop()======");
list.push("ahh");
console.log(list.pop()); //Node { val: 'ahh', next: null }
console.log(list);
//SinglyLinkedList {
//     head: Node { val: 'hey', next: Node { val: 'shake it off', next: null } },
//     tail: Node { val: 'shake it off', next: null },
//     length: 2
//   }
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop()); //undefined
console.log(list);

console.log("====for shift()======");
list.push("hey2");
list.push("shake it off2");
list.push("ahh2");
console.log(list.shift()); //hey2 빠짐

console.log("====for unshift()======");
console.log(list);
list.unshift("taylor");
console.log(list);
/*
SinglyLinkedList {
  head: Node {
    val: 'taylor',
    next: Node { val: 'shake it off2', next: [Node] }
  },
  tail: Node { val: 'ahh2', next: null },
  length: 3
}
*/

console.log("====for get(index)======");
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));

console.log("====for set(index, value)======");
console.log(list.set(2, "set the new value")); //true
console.log(list);
console.log(list.set(3, "agin set the new value")); //false

let newlist = new SinglyLinkedList();
newlist.push(100);
newlist.push(101);
newlist.push(102);
newlist.push(103);
// console.log(newlist);
// SinglyLinkedList {
//   head: Node { val: 100, next: Node { val: 101, next: [Node] } },
//   tail: Node { val: 103, next: null },
//   length: 4
// }
console.log("=====메서드 insert / remove =====");
console.log(newlist.insert(4, "새로운거")); //false
console.log(newlist.remove(1)); //Node { val: '새로운거', next: null }
console.log(newlist);

console.log("=====reverse 메서드 =====");
newlist.reverse();
console.log(newlist);
// SinglyLinkedList {
//   head: Node { val: '새로운거', next: Node { val: 103, next: [Node] } },
//   tail: Node { val: 100, next: null },
//   length: 4
// }
