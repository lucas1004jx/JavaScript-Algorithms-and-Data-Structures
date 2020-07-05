class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next =null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

const list = new DoublyLinkedList();

list.push(1);
 list.push(2);
// list.push(3);

console.log('list-->',list);