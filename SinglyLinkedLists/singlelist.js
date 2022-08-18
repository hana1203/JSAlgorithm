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
        if (!this.head) {//this.head가 null이면
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
        if (!this.head) { //this.head가 없으면
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {//tail나올때까지 끝까지 체크
            newTail = current;
            current = current.next;
        }              
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        //맨 마지막 첫번쨰 요소 1개 pop을해도 list를 찍어보면 빈 list가 아닌 첫번째 요소 담겨있다.
        //리스트 길이는 0으로 줄어든 반면 여전히 헤드, 테일이 정의되어 있댜.
        //리스트에 하나의 노드만 남은 경우 특별 케이스로 핸들링 
        if (this.length ===0) {
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

console.log("====for pop()======")
list.push("ahh")
console.log(list.pop()) //Node { val: 'ahh', next: null }
console.log(list) 
//SinglyLinkedList {
//     head: Node { val: 'hey', next: Node { val: 'shake it off', next: null } },
//     tail: Node { val: 'shake it off', next: null },
//     length: 2
//   }
console.log(list.pop())
console.log(list)
console.log(list.pop())
console.log(list)
console.log(list.pop()) //undefined
console.log(list)

console.log("====for shift()======")
list.push("2hey");
list.push("2shake it off")
list.push("2ahh")
console.log(list.shift())