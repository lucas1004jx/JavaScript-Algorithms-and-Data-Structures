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

    pop(){
        if(!this.head) return undefined;
        const removedNode = this.tail;
        if(this.length === 1) {
            this.head= null;
            this.tail = null;
        }else{
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        this.length--;
        return removedNode;
    }

    shift(){
        if(!this.head) return undefined;
        const removedNode =  this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }

      unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
             this.tail = newNode;
        }else{
            const oldHead = this.head;
            this.head = newNode;
            oldHead.prev = newNode;
            newNode.next = oldHead;
        }
        this.length++;
        return this;
    }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

//list.pop();
//list.pop();

list.shift();

console.log('list-->',list);