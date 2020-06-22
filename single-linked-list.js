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

    pop(){
        if(!this.head) return undefined;
        if(this.length === 1) {
            const tail = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return tail;
        }
        let currentNode = this.head;
        let newTail = currentNode;
        while(currentNode.next){
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        return currentNode;
    }
}

const list = new SingleLinkedList();
list.push('hi');
list.push('there');
list.push('lucas');
console.log('list-->',list );
list.pop();
list.pop();
list.pop();

console.log('list-->',list );