//Nodes 없으면 undefined 반환
//변수에 current head 저장
//head속성을 현재 head의 다음 속성으로 셋ㅌ
//길이 1만큼 줄이기
//removed된 node 값 반환 

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
list.push("ahh")

console.log(list)
console.log(list.shift())