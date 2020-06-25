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

    shift(){
        if(!this.head) return undefined;
        if(this.length === 1) {
            const head = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return head;
        }
        const currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        return currentHead;
    }

    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
        const currentHead = this.head;
        this.head = newNode;
        this.head.next = currentHead;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;
        while(count < index){
            current = current.next;
            count++;
        }
        return current;
    }

    set(index,val){
        const node= this.get(index);
        if(!node) return false;
        node.val= val;
        return true;
    }

    insert(index,val){
        const newNode = new Node(val);
        if(index<0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        const previousNode = this.get(index-1);
        const nextNode = previousNode.next;
        previousNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.shift();
        if(index === this.length -1 ) return !!this.pop();
        const previousNode = this.get(index -1);
        const removedNode = previousNode.next; 
        previousNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }
}

const list = new SingleLinkedList();
list.push('hi');
list.push('there');
list.push('lucas');
// console.log('list-->',list );

// list.pop();
// list.pop();
// list.pop();
//  console.log('list-->',list );

// const shiftItem = list.shift();
// console.log('shift item--->',shiftItem);
// console.log('list-->',list);

//list.unshift('Hello');
list.remove(1);

console.log('list-->',list);