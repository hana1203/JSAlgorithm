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
        if (this.head === null) {
            this.head = newnode;
            this.tail = newnode; //this.tail = this.head 로도 작성 가능. 
        } else {
            this.tail.next = newnode;
            this.tail = newnode;
        }
        this.length += 1;
        return this; //return the linked list 전체 리스트 반환
    }
}

let list = new SinglyLinkedList();
list.push("hey");
list.push("shake it off")
console.log(list)
// SinglyLinkedList {
//     head: Node { val: 'hey', next: Node { val: 'shake it off', next: null } },
//     tail: Node { val: 'shake it off', next: null },
//     length: 2
//   }
console.log(list.head) //Node { val: 'hey', next: Node { val: 'shake it off', next: null } }
console.log(list.head.next) //Node { val: 'shake it off', next: null }
console.log(list.head.next.next) //null