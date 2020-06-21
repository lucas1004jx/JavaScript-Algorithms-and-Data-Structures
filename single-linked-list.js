class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList{
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
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

const list = new SingleLinkedList();
list.push('hi');
list.push('there');
list.push('lucas');
console.log('list-->',list );