//pop 메서드 구현
//list에 노드없으면 undefined 반환
//tail에 닿을때까지 반복
//마지막에서 2번째 노드 (2nd to last node)의 next 속성을 null로 하기
//마지막에서 2번째 노드를 tail로 셋
//길이를 1씩 감소
//removed node의 값을 반환 -> 제거된 노드를 별도 변수에 저장해놓고 있기 

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

    pop() {
        if (this.length === 0) {
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
        if (this.legnth ===0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

let list = new SinglyLinkedList();
list.push("hey");
list.push("shake it off")
list.push("ahh")
// console.log(list)
console.log(list.pop())
console.log(list)
console.log(list.pop())
console.log(list)
console.log(list.pop())
console.log(list)
console.log(list.pop())
console.log(list)